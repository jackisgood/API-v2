import { Injectable, ParseArrayPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Ecgrealtime3Service } from '../ecgrealtime3/ecgrealtime3.service';
import { Ecgrealtime3 } from '../ecgrealtime3/ecgrealtime3.entity';
import { promises } from 'dns';
import { threadId } from 'worker_threads';
import { timer } from 'rxjs';
const fetch = require("node-fetch");
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly ecgrealtime3Service: Ecgrealtime3Service
  ) { }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

    async getUserById(id:number): Promise<User> {
        return await this.userRepository.findOne({ 'userId': id } );
  }

  //async findByUserid(userId: string): Promise<User[]> {
  //  return await this.userRepository.find(userId);
 // }

  async createOne(user): Promise<User> {
	  user.userId=parseInt(user.userId);
	  user.Status=parseInt(user.Status);
	  user.Status_time=user.Status_time*1;
    const Isuser = await this.userRepository.findOne({ userId: user.userId });
    if (!Isuser) {
      return await this.userRepository.save(user);
    }
	
  }

  async updateStatus(patient_code,status) {
    patient_code=parseInt(patient_code);
     status=parseInt(status);
     await this.userRepository.update({userId:patient_code} , {Status_time:Date.now()});
     await this.userRepository.update({userId:patient_code} , {Status : status} );
    var check=this.userRepository.findOne({ 'userId': patient_code } );
    var temp_time=0;
    while((await check).Status==1) {
      var data:any=[];
      var upload_tag=false;
      var num=patient_code.toString();
      var url='http://192.168.25.194/hisapi/ECG/ECG_3lead/';
      url=url.concat(num);
      //console.log(url);
      fetch(url, {})
      .then((response) => {
      return response.json(); 
      

      }).then((jsonData) => {
      var t=jsonData.Diff_1.shift();
      t=parseInt(t);
      jsonData.Diff_2.shift();
      jsonData.Diff_3.shift();
      if (t!=temp_time) {
      upload_tag=true;
      temp_time=t;
      data={
        Data_Point_Amount: jsonData.Data_Point_Amount,
        Date:jsonData.Date,
        Ecg_time:t,
        Current_time:Date.now(),
        Diff_1:jsonData.Diff_1,
        Diff_2:jsonData.Diff_2,
        Diff_3:jsonData.Diff_3,
        Patient_CodeID:jsonData.Patient_CodeID,
        RPN_Id:jsonData.RPN_Id,
        Result:jsonData.Result,
        Message:jsonData.Message,       
      }
       this.ecgrealtime3Service.createEcgrealtime3(data);
       this.userRepository.update({userId:data.Patient_CodeID} , {lasttime_3lead:data.Ecg_time});
       this.userRepository.update({userId:data.Patient_CodeID} , {lasttime_Ts:data.Current_time});
      //console.log(data);
      }
      }).catch((err) => {
      console.log('錯誤:', err);
      });
    await sleep(1000);
    check=this.userRepository.findOne({ 'userId': patient_code } );
    }
  }

  async updata3timestamp(params) {
    params.Pateint_CodeID=parseInt(params.Patietn_CodeID);
    params.Ecg_time=params.Ecg_time*1;
    params.Current_time=parseInt(params.Current_time);
    await this.userRepository.update({userId:params.Patient_CodeID} , {lasttime_3lead:params.Ecg_time});
    await this.userRepository.update({userId:params.Patient_CodeID} , {lasttime_Ts:params.Current_time});

  }
}