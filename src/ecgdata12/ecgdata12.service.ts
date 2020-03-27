import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, MoreThan, InsertResult } from 'typeorm';
import { Ecgdata12 } from './ecgdata12.entity';
import { User } from '../users/user.entity';
import { UserService } from 'src/users/user.service';
import { ApiAcceptedResponse } from '@nestjs/swagger';

@Injectable()
export class Ecgdata12Service {
  constructor(
    @InjectRepository(Ecgdata12)
    private readonly ecgdata12Repository: Repository<Ecgdata12>,
    private readonly userService: UserService
  ) { }
    
  async createEcgdata12(params): Promise<InsertResult> {
    return await this.ecgdata12Repository.createQueryBuilder()
      .insert()
      .into(Ecgdata12)
      .values(params)
      .execute();
  }

  async findEcgdata12ByUser(params) {
    // find all
    params.from=parseInt(params.from);
    params.to=parseInt(params.to);

    if (!params.from && !params.limit && !params.to)
		
      return await this.ecgdata12Repository.find({user: { userId: params.id }});

    const query: any = {
      where: {  userId : params.id },
      order: { time: 'ASC' },
      };
    //  if (params.to) {
    //     query.where.time = Between(params.from, params.to);
    //   }
    //   else {
    //   query.where.time = MoreThan(params.from);

    //   //query.take = params.limit || 2304;
    //  }

    if (params.to) {
     query.where.time= {$gte:params.from , $lte:params.to};
    }
    else{
     query.where.time={$gte:params.from};
     } 
    
  
  if (Boolean((await this.userService.getUserById(params.id)).userId ))
  var _get = await this.ecgdata12Repository.find(query);
  var cnt=0;
  var packet_cnt=0;
  var total_packet:any = [];
  var I: Ecgdata12[] = [];
  var II: Ecgdata12[] = [];
  var III: Ecgdata12[] = [];
  var V1: Ecgdata12[] = [];
  var V2: Ecgdata12[] = [];
  var V3: Ecgdata12[] = [];
  var V4: Ecgdata12[] = [];
  var V5: Ecgdata12[] = [];
  var V6: Ecgdata12[] = [];
  var aVR: Ecgdata12[] = [];
  var aVL: Ecgdata12[] = [];
  var aVF: Ecgdata12[] = [];
  
  _get.forEach(p=>
    {
      cnt++;
          var tmp : any = [];
          var tmp2: any = [];;
          var tmp3 : any = [];;
          var tmp4 : any = [];;
          var tmp5 : any = [];;
          var tmp6 : any = [];;
          var tmp7 : any = [];;
          var tmp8 : any = [];;
          var tmp9 :  any = [];;
          var tmp10 :  any = [];;
          var tmp11 : any = [];;
          var tmp12 : any = [];;

            tmp.push(p.I.toFixed(2));
            tmp.push(p.time);
            I.push(tmp);
            tmp2.push(p.II.toFixed(2));
            tmp2.push(p.time);
            II.push(tmp2);
            tmp3.push(p.III.toFixed(2));
            tmp3.push(p.time);
            III.push(tmp3);
            tmp4.push(p.V1.toFixed(2));
            tmp4.push(p.time);
            V1.push(tmp4);
            tmp5.push(p.V2.toFixed(2));
            tmp5.push(p.time);
            V2.push(tmp5);
            tmp6.push(p.V3.toFixed(2));
            tmp6.push(p.time);
            V3.push(tmp6);
            tmp7.push(p.V4.toFixed(2));
            tmp7.push(p.time);
            V4.push(tmp7);
            tmp8.push(p.V5.toFixed(2));
            tmp8.push(p.time);
            V5.push(tmp8);
            tmp9.push(p.V6.toFixed(2));
            tmp9.push(p.time);
            V6.push(tmp9);
            tmp10.push(p.aVR.toFixed(2));
            tmp10.push(p.time);
            aVR.push(tmp10);
            tmp11.push(p.aVL.toFixed(2));
            tmp11.push(p.time);
            aVL.push(tmp11);
            tmp12.push(p.aVF.toFixed(2));
            tmp12.push(p.time);
            aVF.push(tmp12);
            if(cnt==255) {
              total_packet[packet_cnt]={
                'userId':params.id,
                'I':I,
                'II':II,
                'III':III,
                'V1':V1,
                'V2':V2,
                'V3':V3,
                'V4':V4,
                'V5':V5,
                'V6':V6,
                'aVR':aVR,
                'aVL':aVL,
                'aVF':aVF, 
              } 
              cnt=0;
              packet_cnt++;
              I  = [];
              II  = [];
              III  = [];
              V1  = [];
              V2  = [];
              V3  = [];
              V4  = [];
              V5  = [];
              V6  = [];
              aVR  = [];
              aVL  = [];
              aVF  = [];
            }
      }
    );
    total_packet[packet_cnt]={
      'userId':params.id,
      'I':I,
      'II':II,
      'III':III,
      'V1':V1,
      'V2':V2,
      'V3':V3,
      'V4':V4,
      'V5':V5,
      'V6':V6,
      'aVR':aVR,
      'aVL':aVL,
      'aVF':aVF, 
    } 
    
    var total_packetaaa: any = [];
    var i;
    if(params.to) {
      for (i=0;i<=cnt;i++) {
        total_packetaaa.push(total_packet[i]);  
      }
    }
    else {
    total_packetaaa.push(total_packet[packet_cnt-5]);
    total_packetaaa.push(total_packet[packet_cnt-4]);
    total_packetaaa.push(total_packet[packet_cnt-3]);
    total_packetaaa.push(total_packet[packet_cnt-2]);
    total_packetaaa.push(total_packet[packet_cnt-1]);
    total_packetaaa.push(total_packet[packet_cnt]);
    }
    
    
    
    
    

    // var kk={
    //   'userId':params.id,
    //   'I':I,
    //   'II':II,
    //   'III':III,
    //   'V1':V1,
    //   'V2':V2,
    //   'V3':V3,
    //   'V4':V4,
    //   'V5':V5,
    //   'V6':V6,
    //   'aVR':aVR,
    //   'aVL':aVL,
    //   'aVF':aVF,
      
    // };

    // aa.push(kk);
    // console.log(1);
    // aa.push(kk);
    // console.log(2);
    // aa.push(kk);
    // console.log(3);
    // aa.push(kk);
    // console.log(4);
    // aa.push(kk);
    // console.log(5);
    //return total_packetaaa;
    return total_packet[packet_cnt];
  }

  async deleteEcgdata12ByUser(user){
    return await this.ecgdata12Repository.delete({user});
  }
}