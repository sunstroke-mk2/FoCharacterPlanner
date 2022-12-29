let CharacterStats=
{
  'RunTime' :              200,
  'MaxLife' :              100,
  'HpRegenVal' :           20,
  'HpRegenTime' :          30,
  'ActionPoints' :         100,
  'ApRegenerationTime' :   60,
  'Dodge' :                0,
  'LookDistance' :         35,
  'ArmorClass' :           0,
  'CarryWeight' :          57,
  'MeleeDamage' :          20,
  'CriticalChanceCC' :     0,
  'CriticalChance' :       10,
  'CriticalDamageCC' :     0,
  'ToHitCC' :              0,
  'RangedDamage' :         0,
  'CriticalChanceRC' :     0,
  'BonusMeeleDamage' :    0, 
  'BonusRangedDamage' :   0,
  'CriticalDamageRC' :     0,
  'ToHitRC' :              0,
  'SkillGain' :            0,
  'BonusExp' :             0,
  'ActivePerksDuration' :  0,
  'ActivePerksCooldown' :  0,
  'TimeoutTimeFirstAid' :  60,
  'DamageMultiplier' :      100,
  'CritDamageMultiplier' :  100,
  'EnemyDamageMultiplier': 100,
  'ApBonusAttack' :          0,
  'ApBonusUse' :              0,
  'HealingBonus' :            0,
  'Sneak' :                  10,
  'UtilityTimeout':           0,
  'DrugLength':               0,
  'CriticalResistance':       0,
  'PoisonResistance':          0,
  'RadiationResistance':      0
}
let Perks =
[
  "AccuratePunches",
  "ActionBoy",
  "BonusRangedDamage",
  "CQCTraining",
  "Dodger",
  "FarSight",
  "FireEater",
  "Ghost",
  "Gunslinger",
  "Hunter",
  "Insulated",
  "Junkie",
  "Lifegiver",
  "LuckyBastard",
  "MarathonRunner",
  "Medic",
  "MeleeCriticalChance",
  "MeleeCriticalDamage",
  "MoreCriticals",
  "NaturalHealing",
  "PainKiller",
  "QuickHands",
  "QuickRegeneration",
  "RadRoach",
  "RockSolid",
  "Sharpshooter",
  "SnakeEater",
  "Tinkerer",
  "Toughness",
  "WeakPoint"
]
let PerksValues = 
{
  "AccuratePunches":[10,	20,	30,	40,	50],
  "ActionBoy":[-4,	-7,	-10,	-13,	-15],
  "BonusRangedDamage":[4,	7,	10,	13,	15],
  "CQCTraining":[6,	11,	16,	21,	25],
  "Dodger":[12,	23,	33,	42,	50],
  "FarSight":[5,	10,	15,	20,	25],
  "FireEater":[10,	19,	27,	34,	40],
  "Ghost":[15,	30,	45,	60,	75],
  "Gunslinger":[5,	9,	13,	17,	20],
  "Hunter":[5,	9,	13,	17,	20],
  "Insulated":[10,	19,	27,	34,	40],
  "Junkie":[14,	27,	39,	50,	60],
  "Lifegiver":[30,	55,	80,	105,	125],
  "LuckyBastard":[6,	11,	16,	21,	25],
  "MarathonRunner":[-9,	-17,	-25,	-33,	-40],
  "Medic":[-12,	-26,	-34,	-40,	-45],
  "MeleeCriticalChance":[6,	11,	16,	21,	25],
  "MeleeCriticalDamage":[12,	23,	33,	42,	50],
  "MoreCriticals":[4,	7,	10,	13,	15],
  "NaturalHealing":[9,	17,	24,	30,	35],
  "PainKiller":[12,	23,	33,	42,	50],
  "QuickHands":[12,	23,	33,	42,	50],
  "QuickRegeneration":[-5,	-8,	-10,	-11,	-12],
  "RadRoach":[12,	23,	33,	42,	50],
  "RockSolid":[10,	19,	27,	34,	40],
  "Sharpshooter":[10,	20,	30,	40,	50],
  "SnakeEater":[12,	23,	33,	42,	50],
  "Tinkerer":[-5,	-10,	-15,	-20,	-30],
  "Toughness":[9,	17,	24,	30,	35],
  "WeakPoint":[9,	17, 24,	30,	35],
}
let Traits =
[
   'Armorpadding',
   'BiggerBooms',
  'Bloodthirsty',
  'Bloodymess',
  'Bonehead',
  'Boomer',
  'Bruiser',
  'ChemReliant',
  'Demoman',
  'DrunkMaster',
  'Empathy',
  'FastMetabolism',
  'FastShot',
  'FinalBullet',
  'Finesse',
  'Guerilla',
  'Kamikaze',
  'LightStep',
  'Ninja',
  'OneHander',
  'Pacifist',
  'Pyromaniac',
  'QuickRecovery',
  'RadChild',
  'Sawbones',
  'SerialKiller',
  'ShortSighted',
  'SmallFrame',
  'StoneWall',
  'Tamer',
  'Tank',
  'TeamPlayer',
  'Tribal'
  
]
let TraitsValues =
{
  'Bruiser' : {'BonusDamageCC': 10,'CriticalChanceCC':-20},
  'ChemReliant':{'DrugLength':30,'ApReduce':-10},
  'Bonehead' : {'CriticalChance': -15},
  'DrunkMaster':{'ApRegenerationTime':25,'Dodge':25},
  'FastMetabolism':{"HpRegenTime":-10,'PoisonResistance':-150,'RadiationResistance':-150},
  'FastShot':{'ApBonusAttack':10},
  'Finesse':{'CriticalChance':10},
  'Kamikaze':{'DamageMultiplier':20},
  'Ninja':{'RunTime':25},
  'Tribal' : {'ActionPoints' : 30},
  'OneHander' : {'DamageMultiplier':10},
  'Pacifist' : {'DamageMultiplier':-80,'CritDamageMultiplier':-80,'HealingBonus':100},
  //'FastShot':{'APBonusAttack' : 10},
  'Tank' :   {'RunTime' : 50, 'Normal' :10,'Explosion':10,'Energy':10,'Fire':10},
  'SmallFrame' : {'CriticalResistance' :5},
  'RadChild' :{'HpRegenVal':-150},
  'ShortSighted':{'LookDistance':-25},
}
let Drugs = 
[
  "Food",
  "Alcohol",
  "Cigarettes",
  "Cola",
  "Rad-X",
  "Mentats",
  "Jet",
  "Buffout",
  "Psycho",
  "Cookie",
  "SkillBook"
]
let DrugsValues =
{
  'Food' : {'HpRegenTime':-3},
  'Alcohol' : {'CW':10},
  'Cigarettes' : {'ToHitRC':20,'ToHitCC':20},
  'Cola' : {'ApRegenerationTime':-5},
  'Rad-X' : {'RadiationResistance':50},
  'Mentats':{'CriticalDamageRC':20,'EnemyDamageMultiplier':10},
  'Jet' : {'ActionPoints':-20,'ApRegenerationTime':-15},
  'Buffout' : {'CriticalResistance':10,'RunTime':20},
  'Psycho' : {"DT":20,"LookDistance":-20},
  'Cookie' : {'ActionPoints':50},
  'SkillBook' :{"SkillGain":50,"BonusExp":50},
}
let Resists =
[
  "Normal",
  "Fire",
  "Explosion",
  "Plasma",
  "Laser",
  "Electric"
]
let TakenDrugsCount = [0,0,0,0,0,0,0,0,0,0,0];
let TakenPerksCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let TakenTraitsCount =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let PerkInFocus;
let TotalPerksCount = 0;
let TotalTraitsCount = 0;
const MAXPERKS=15;
const MAXTRAITS=3;


Initialization();
function Initialization()
{
  $('#traitscounter').text(TotalTraitsCount+'/'+MAXTRAITS);
  $('#perkscounter').text(TotalPerksCount+'/'+MAXPERKS);
  for(let a=0;a<Perks.length;a++)
    {
      let s='';
      s="<div class='perk' name="+Perks[a]+" id=p"+a+">"+Perks[a]+"<span class='somenumbers'></span></div><span></span>";
      $('#outputPerks').append(s);
    }
  
  for(let a=0;a<Traits.length;a++)
    {
      
      s="<div name="+Traits[a]+" id=t"+a+">"+"<button class='toggler'> x </button>"+Traits[a]+"</div>";
      $('#outputTraits').append(s);
    }
  for(let a=0;a<Drugs.length;a++)
    {
      
      s="<div name = "+Drugs[a]+" id=d"+a+">"+"<button class='drug'> x </button>"+Drugs[a]+"</div>";
      $('#outputDrugs').append(s);
    }
  
   for(let a=0;a<Resists.length;a++)
    {
      s="<div id = "+Resists[a]+">"+Resists[a]+"<span class='somenumbers'></span>"+"</div>";
      $('#outputResists').append(s);
    }
  
  for(let val in CharacterStats)
    {
       s=`<div id = `+val+ ` >`+val+`<span class='somenumbers'></span> </div>`
       $('#outputStats').append(s);
    }
   calculateStats();
  
}


$('.perk').hover
(
      function () 
      {
        $("#perkslider").css("top", $(this).position()['top']-15);
        $("#perkslider").css("left", $(this).position()['left']+95);
        PerkInFocus=$(this).attr('name');
      }
)
 $("#perkplus").click
 (
   function()
   {
     let a = Perks.indexOf(PerkInFocus);
     if(TakenPerksCount[a]+1<6&&TotalPerksCount+1<MAXPERKS+1)
       {
          TakenPerksCount[a]+=1;
          TotalPerksCount+=1;
          let s='#p'+a;
          $(s).children('span').text( TakenPerksCount[a]);
          $(s).css("color","red");
       }
      $('#perkscounter').text(TotalPerksCount+'/'+MAXPERKS);
     calculateStats();
   } 
 );
 $("#perkminus").mousedown
 (
   function()
   {
     let a = Perks.indexOf(PerkInFocus);
     if(0<TakenPerksCount[a])
       {
          TakenPerksCount[a]-=1;
          TotalPerksCount-=1;
          let s='#p'+a;
          let tx="";
          let cl="black";
          if(TakenPerksCount[a]>0)
           {
              cl="red";
              tx=TakenPerksCount[a];
           }
          
          $(s).children('span').text( tx);
          $(s).css("color",cl);
       }
      $('#perkscounter').text(TotalPerksCount+'/'+MAXPERKS);
     calculateStats();
   } 
 );
$(".toggler").mousedown
(
  function () 
      {
        a=$(this).parent().attr('name');
        i=Traits.indexOf(a);
        if(TakenTraitsCount[i]==0)
          {
            if(TotalTraitsCount<3)
              {
                TakenTraitsCount[i]+=1;
                TotalTraitsCount+=1;
                $('#t'+i).css("color","red");
              }
          }
        else
          {
            TakenTraitsCount[i]-=1;
            TotalTraitsCount-=1;
            $('#t'+i).css("color","black");
          }
        $('#traitscounter').text(TotalTraitsCount+"/"+MAXTRAITS);
        calculateStats();
      }
);
function clickTrait()
{
  
}

$(".drug").mousedown
(
  function () 
  {
    
     a=$(this).parent().attr('name');
     i=Drugs.indexOf(a);
     if(TakenDrugsCount[i]==0)
       {
          $('#d'+i).css("color","red");
          TakenDrugsCount[i]=1;
       }
    else
      {
        $('#d'+i).css("color","black");
        TakenDrugsCount[i]=0;
      }
    
    calculateStats();
  }
)
function calculateStats()
{
  $('#RunTime').children('.somenumbers').text(200+getPerkBonus('MarathonRunner')+getTraitBonus('Tank','RunTime')+getTraitBonus('Ninja','RunTime')+getDrugBonus('Buffout','RunTime'));
  $('#MaxLife').children('.somenumbers').text(220+getPerkBonus('Lifegiver'));
  
  let g =0;  if(TakenTraitsCount[Traits.indexOf('ChemReliant')]>0&&TakenDrugsCount[Drugs.indexOf('Mentats')]==0&&TakenDrugsCount[Drugs.indexOf('Jet')]==0&&TakenDrugsCount[Drugs.indexOf('Psycho')]==0&&TakenDrugsCount[Drugs.indexOf('Buffout')]==0)
  {g=getTraitBonus('ChemReliant','ApReduce');}
  $('#ActionPoints').children('.somenumbers').text(100+getTraitBonus('Tribal','ActionPoints')+getDrugBonus('Jet','ActionPoints')+getDrugBonus('Cookie','ActionPoints')+g);
  $('#LookDistance').children('.somenumbers').text(35+getTraitBonus('ShortSighted','LookDistance')+getDrugBonus('Psycho','LookDistance')+getPerkBonus('FarSight'));
  
  $("#CriticalDamageCC").children('.somenumbers').text(getTraitBonus('Bruiser','BonusDamageCC')+getPerkBonus('MeleeCriticalDamage')+getDrugBonus('Mentats','CriticalDamageRC'));
  $("#CriticalChanceCC").children('.somenumbers').text(0+getTraitBonus('Bruiser','CriticalChanceCC')+getPerkBonus('MeleeCriticalChance'));
// $('Rad-X') 
  $("#ApRegenerationTime").children('.somenumbers').text(60+getTraitBonus('DrunkMaster',"ApRegenerationTime")+getDrugBonus('Cola','ApRegenerationTime')+getDrugBonus('Jet','ApRegenerationTime')+getPerkBonus('ActionBoy','ApRegenerationTime'));
  
  let a=0;
  if(TakenTraitsCount[Traits.indexOf('DrunkMaster')]>0&&TakenDrugsCount[Drugs.indexOf('Alcohol')]>0)a=getTraitBonus('DrunkMaster','Dodge');
  $("#Dodge").children('.somenumbers').text(a+getPerkBonus('Dodger',));
    
  $("#HpRegenTime").children('.somenumbers').text(60+getTraitBonus('FastMetabolism','HpRegenTime')+getDrugBonus('Food','HpRegenTime')+getPerkBonus('QuickRegeneration'));
  $('#PoisonResistance').children('.somenumbers').text(0+getTraitBonus('FastMetabolism','PoisonResistance')+getPerkBonus('SnakeEater'));
  $('#RadiationResistance').children('.somenumbers').text(0+getTraitBonus('FastMetabolism','RadiationResistance')+getDrugBonus('Rad-X','RadiationResistance')+getPerkBonus('RadRoach'));
  
  $('#ApBonusAttack').children('.somenumbers').text(0+getTraitBonus('FastShot','ApBonusAttack')+getPerkBonus('Gunslinger'));
  $('#ApBonusUse').children('.somenumbers').text(getPerkBonus('QuickHands'));
  
  $('#CriticalChance').children('.somenumbers').text(10+getTraitBonus('Finesse','CriticalChance')+getTraitBonus('Bonehead','CriticalChance')+getPerkBonus('MoreCriticals')),   
  $('#DamageMultiplier').children('.somenumbers').text(100+getTraitBonus('Kamikaze','DamageMultiplier')+getTraitBonus('OneHander','DamageMultiplier')+getTraitBonus('Pacifist','DamageMultiplier')),
   $('#CritDamageMultiplier').children('.somenumbers').text(getTraitBonus('Pacifist','CritDamageMultiplier'));
  
   $('#HealingBonus').children('.somenumbers').text(getTraitBonus('Pacifist','HealingBonus')+getPerkBonus('PainKiller'));
   $('#TimeoutTimeFirstAid').children('.somenumbers').text(60+getPerkBonus('Medic')),
    
   $('#HpRegenVal').children('.somenumbers').text(20+getTraitBonus('RadChild','HpRegenVal')+getPerkBonus('NaturalHealing')),
    
   $('#CriticalResistance').children('.somenumbers').text(getTraitBonus('SmallFrame','CriticalResistance')+getDrugBonus('Buffout','CriticalResistance')+getPerkBonus('LuckyBastard')),
    
    $('#ToHitRC').children('.somenumbers').text(getDrugBonus('Cigarettes','ToHitRC')+getPerkBonus('Sharpshooter')),
    $('#ToHitCC').children('.somenumbers').text(getDrugBonus('Cigarettes','ToHitCC')+getPerkBonus('AccuratePunches')),
    
    $('#CriticalChanceRC').children('.somenumbers').text(getPerkBonus('Hunter'));
    
    $('#CriticalDamageRC').children('.somenumbers').text((getDrugBonus('Mentats','CriticalDamageRC')+getPerkBonus('WeakPoint'))+'%');
   // $('#CriticalDamageCC').children('.somenumbers').text(getDrugBonus('Mentats','CriticalDamageRC')+'%');
    $('#EnemyDamageMultiplier').children('.somenumbers').text(getDrugBonus('Mentats','EnemyDamageMultiplier')+getTraitBonus('Kamikaze','DamageMultiplier')+100+'%');

   $('#Sneak').children('.somenumbers').text(10+getPerkBonus('Ghost'));
   $('#UtilityTimeout').children('.somenumbers').text(getPerkBonus('Tinkerer'));
   $('#BonusMeeleDamage').children('.somenumbers').text(getPerkBonus('CQCTraining'));
   $('#BonusRangedDamage').children('.somenumbers').text(getPerkBonus('BonusRangedDamage'));
   // $('#UtilityTimeout').children('.somenumbers').text(getPerkBonus('Tinkerer')));
  $('#DrugLength').children('.somenumbers').text(30+getPerkBonus('Junkie')+getTraitBonus('ChemReliant','DrugLength')); 
  //  'SkillGain' :            0,
 // 'BonusExp' :             0,
  $('#SkillGain').children('.somenumbers').text(0+getDrugBonus('SkillBook','SkillGain')); 
  $('#BonusExp').children('.somenumbers').text(0+getDrugBonus('SkillBook','BonusExp'));
  
  let DT=getDrugBonus('Psycho','DT')+' / ';
  $('#Normal').children('.somenumbers').last().text(DT+(getPerkBonus('Toughness')+getTraitBonus('Tank','Normal')));
  $('#Plasma').children('.somenumbers').last().text(DT+(getPerkBonus('Insulated')+getTraitBonus('Tank','Energy')));
  $('#Laser').children('.somenumbers').last().text(DT+(getPerkBonus('Insulated')+getTraitBonus('Tank','Energy')));
  $('#Electric').children('.somenumbers').last().text(DT+(getPerkBonus('Insulated')+getTraitBonus('Tank','Energy')));
  $('#Fire').children('.somenumbers').last().text(DT+(getPerkBonus('FireEater')+getTraitBonus('Tank','Fire')));
  $('#Explosion').children('.somenumbers').last().text(DT+(getPerkBonus('RockSolid')+getTraitBonus('Tank','Explosion')));
  $('#CarryWeight').children('.somenumbers').last().text(37+getDrugBonus('Alcohol','CW')); 
}

function getDrugBonus(drug,val)
{
  let a=0;
  let index=Drugs.indexOf(drug);
  if(TakenDrugsCount[index]<=0)
    return 0;  
  return DrugsValues[drug][val]; 
}

function getTraitBonus(trait,val)
{
  let a=0;
  let index=Traits.indexOf(trait);
  if(TakenTraitsCount[index]<=0)
    return 0;  
  return TraitsValues[trait][val]; 
}

function getPerkBonus( perk)
{
  let index = [Perks.indexOf(perk)];
  let perksTaken = TakenPerksCount[index];
  if(perksTaken==0)
    return 0;
  let a = PerksValues[perk][perksTaken-1];
    return a;
}
