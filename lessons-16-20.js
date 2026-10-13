window.LESSONS = window.LESSONS || {};
const _ph16 = (n, t, py, en) => `
<div class="lesson">
  <h2>第 ${n} 课　${t}<span class="title-py">${py}</span><small>Lesson ${n} · ${en}</small></h2>
  <div class="part"><h3>[一、听力|Yī tīnglì|1. Listening]</h3><div class="placeholder">📝 第 ${n} 课 · 待填充</div></div>
  <div class="part"><h3>[二、阅读|Èr yuèdú|2. Reading]</h3><div class="placeholder">📝 待填充</div></div>
  <div class="part"><h3>[三、书写|Sān shūxiě|3. Writing]</h3><div class="placeholder">📝 待填充</div></div>
  <div class="part"><h3>[四、复习|Sì fùxí|4. Review]</h3><div class="placeholder">📝 待填充</div></div>
</div>`;

window.LESSONS[16] = {
  navLabel:'第16课',
  html: `
    <div class="lesson">
      <h2>第 16 课　我现在累得下了班就想睡觉
        <span class="title-py">Dì shíliù kè · Wǒ xiànzài lèi de xiàle bān jiù xiǎng shuìjiào</span>
        <small>Lesson 16 · I'm so tired that I want to sleep after work</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L16-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图16.png" alt="听力图16" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图16.png</b></span>
        </div>

        <div class="q" id="L16-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你好，|nǐ hǎo,|Hello,] [你|nǐ|you] [有|yǒu|have] [什么|shénme|what] [问题？|wèntí?|problem?] [哪儿|nǎr|where] [不|bù|not] [舒服？|shūfu?|well?]</div>
          <div class="zh stem">[男：|Nán:|M:] [医生，|yīshēng,|Doctor,] [我|wǒ|I] [最近|zuìjìn|recently] [一直|yìzhí|always] [头疼，|tóuténg,|have a headache,] [疼得|téng de|so painful that] [晚上|wǎnshang|at night] [睡|shuì|sleep] [不|bù|not] [着觉。|zháo jiào.|fall asleep.] [有|yǒu|is there] [什么|shénme|what] [药|yào|medicine] [吗？|ma?|(question)]</div>
          <div class="sent-en">W: Hello, what's the problem? Where does it hurt?<br>M: Doctor, I've had a headache lately — so painful I can't sleep at night. Is there any medicine?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[医生|yīshēng|a doctor] [给|gěi|for] [病人|bìngrén|a patient] [看病|kànbìng|examining]）</div>
        </div>
        <div class="q" id="L16-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [常医生，|Cháng yīshēng,|Dr. Chang,] [我|wǒ|my] [的|de|(possessive)] [牙|yá|tooth] [不|bù|not] [疼|téng|hurts] [了，|le,|,] [应该|yīnggāi|should] [没什么|méi shénme|no] [问题|wèntí|problem] [了|le|(change)] [吧？|ba?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [只|zhǐ|only] [听|tīng|hearing] [你|nǐ|you] [说|shuō|say] [不|bù|not] [行，|xíng,|work,] [我|wǒ|I] [需要|xūyào|need to] [检查|jiǎnchá|check] [一下|yíxià|a bit] [才|cái|only then] [清楚。|qīngchu.|be clear.]</div>
          <div class="sent-en">W: Dr. Chang, my tooth doesn't hurt anymore — should be fine, right?<br>M: Just hearing you say so isn't enough — I need to check.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[检查|jiǎnchá|examining] [牙齿|yáchǐ|teeth]）</div>
        </div>
        <div class="q" id="L16-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [看！|kàn!|look!] [那边|nàbiān|over there] [真|zhēn|really] [漂亮！|piàoliang!|beautiful!] [有|yǒu|there are] [山|shān|mountains] [有|yǒu|and] [水，|shuǐ,|water,] [有树|yǒu shù|trees] [有花，|yǒu huā,|flowers,] [还有|háiyǒu|also] [几个|jǐ ge|a few] [小房子，|xiǎo fángzi,|small houses,] [美|měi|beautiful] [得|de|(complement)] [像|xiàng|like] [画|huà|a painting] [一样。|yíyàng.|the same.]</div>
          <div class="zh stem">[男：|Nán:|M:] [那|nà|then] [还|hái|still] [等|děng|wait] [什么？|shénme?|for what?] [快|kuài|quickly] [过去|guòqù|go over] [看看|kàn kan|take a look] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W: Look over there — so beautiful! Mountains, water, trees, flowers, and a few small houses — as beautiful as a painting.<br>M: What are we waiting for? Let's go over and see.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[风景|fēngjǐng|scenery] / [乡村|xiāngcūn|the countryside]）</div>
        </div>
        <div class="q" id="L16-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|your] [的|de|(possessive)] [两个|liǎng ge|two] [女儿|nǚ'ér|daughters] [长|zhǎng|grow] [得|de|(complement)] [真|zhēn|really] [像！|xiàng!|alike!] [这个|zhège|this] [头发|tóufa|hair] [长长的|chángcháng de|long] [是|shì|is] [姐姐|jiějie|the elder sister] [吧？|ba?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [这|zhè|this] [是|shì|is] [我|wǒ|my] [二女儿，|èr nǚ'ér,|second daughter,] [她|tā|she] [喜欢|xǐhuan|likes] [长头发。|cháng tóufa.|long hair.] [大女儿|dà nǚ'ér|The elder daughter] [不|bù|not] [喜欢。|xǐhuan.|likes it.]</div>
          <div class="sent-en">M: Your two daughters look so alike! The one with long hair is the elder sister, right?<br>W: This is my second daughter — she likes long hair. My elder daughter doesn't.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[两个|liǎng ge|two] [女孩|nǚhái|girls]）</div>
        </div>
        <div class="q" id="L16-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你家|nǐ jiā|your family] [小狗|xiǎogǒu|puppy] [小小的，|xiǎoxiǎo de,|so small,] [长|zhǎng|grow] [得|de|(complement)] [真|zhēn|really] [可爱！|kě'ài!|cute!]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [还|hái|also] [很|hěn|very] [聪明|cōngming|smart] [呢。|ne.|(emphasis)] [它|tā|it] [跟|gēn|with] [我|wǒ|my] [女儿|nǚ'ér|daughter] [的|de|(possessive)] [关系|guānxi|relationship] [特别|tèbié|especially] [好，|hǎo,|good,] [每天|měitiān|every day] [都|dōu|all] [帮|bāng|help] [她|tā|her] [把|bǎ|(BA)] [小皮鞋|xiǎo píxié|little leather shoes] [放好。|fàng hǎo.|put away.]</div>
          <div class="sent-en">M: Your puppy is so small and really cute!<br>W: And very smart — it has an especially good relationship with my daughter, every day it helps her put her little leather shoes away.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[小狗|xiǎogǒu|a puppy] [和|hé|and] [皮鞋|píxié|leather shoes]）</div>
        </div>

        <h4 id="L16-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L16-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[常月|Cháng Yuè|Chang Yue] [是|shì|is] [我|wǒ|my] [上大学|shàng dàxué|university] [时|shí|when] [的|de|(possessive)] [好朋友。|hǎo péngyou.|good friend.] [那时候|nà shíhou|At that time] [她|tā|she] [很|hěn|very] [瘦，|shòu,|thin,] [瘦|shòu|thin] [得|de|(complement)] [只有|zhǐyǒu|only] [40 公斤。|sìshí gōngjīn.|40 kilos.] [听说|tīngshuō|heard] [她|tā|she] [现在|xiànzài|now] [已经|yǐjīng|already] [是|shì|is] [三个|sān ge|three] [孩子|háizi|children] [的|de|(possessive)] [妈妈了，|māma le,|mom,] [不|bù|not] [知道|zhīdào|know] [长胖|zhǎng pàng|put on weight] [一点儿|yìdiǎnr|a bit] [没有。|méiyǒu.|or not.]</div>
          <div class="sent-en">Chang Yue was my good friend when I was in university. She was very thin then — only 40 kilos. I heard she's a mother of three now — I don't know if she's gained a bit of weight.</div>
          <div class="zh stem">★ [他|tā|he] [不|bù|not] [知道|zhīdào|know] [常月|Cháng Yuè|Chang Yue] [现在|xiànzài|now] [变胖|biàn pàng|got fat] [了|le|(change)] [还是|háishi|or] [变瘦|biàn shòu|got thin] [了。|le.|(change)]</div>
          <div class="sent-en">★ He doesn't know if Chang Yue has gotten fat or thin.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[不知道|bù zhīdào|Not sure] [长胖|zhǎng pàng|gained weight] [一点儿|yìdiǎnr|a bit] [没有|méiyǒu|or not]」= [不知道|bù zhīdào|don’t know] [胖|pàng|if fatter] [了|le|(change)] [还是|háishi|or] [瘦|shòu|thinner] [了。|le|(change)]" data-expl-en="'Don't know if she's gained weight' = don't know fat or thin."></div>
        </div>
        <div class="q" id="L16-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[今天的|jīntiān de|Today's] [会议|huìyì|meeting] [就|jiù|just] [到|dào|end] [这儿|zhèr|here] [吧，|ba,|,] [大家|dàjiā|everyone] [对|duì|to] [自己|zìjǐ|own] [的|de|(possessive)] [工作|gōngzuò|work] [都|dōu|all] [清楚|qīngchu|clear] [了|le|(change)] [吗？|ma?|(question)] [如果|rúguǒ|if] [有|yǒu|there is] [什么|shénme|anything] [不|bù|not] [明白|míngbai|understand] [的|de|(possessive)] [地方，|dìfang,|part,] [就|jiù|then] [去|qù|go to] [秘书|mìshū|secretary] [办公室|bàngōngshì|office] [问|wèn|ask] [小丽。|Xiǎolì.|Xiaoli.]</div>
          <div class="sent-en">Let's end today's meeting here. Is everyone clear about their work? If there's anything you don't understand, go ask Xiaoli at the secretary's office.</div>
          <div class="zh stem">★ [小丽|Xiǎolì|Xiaoli] [没|méi|didn't] [听|tīng|hear] [明白|míngbai|understand] [自己|zìjǐ|her] [的|de|(possessive)] [工作|gōngzuò|work] [是|shì|is] [什么。|shénme.|what.]</div>
          <div class="sent-en">★ Xiaoli didn't understand what her work was.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It’s] [让|ràng|asking] [不|bù|those who] [明白|míngbai|don’t understand] [的|de|(nominalizer)] [人|rén|people] [去|qù|to go] [问|wèn|ask] [小丽，|Xiǎolì,|Xiaoli,] [不是|bú shì|not] [小丽|Xiǎolì|Xiaoli] [不|bù|doesn’t] [明白。|míngbai|understand.]" data-expl-en="People who don't understand go ask Xiaoli; Xiaoli isn't the one who doesn't understand."></div>
        </div>
        <div class="q" id="L16-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[我|wǒ|my] [女儿|nǚ'ér|daughter] [每天|měitiān|every day] [都|dōu|all] [说|shuō|says] [“从明天开始我每天跑五千米”，|“cóng míngtiān kāishǐ wǒ měitiān pǎo wǔqiān mǐ”,|"Starting tomorrow I'll run 5000 meters every day",] [我|wǒ|and] [和|hé|and] [妻子|qīzi|wife] [很早就|hěn zǎo jiù|long ago] [给|gěi|to] [她|tā|her] [买好|mǎi hǎo|bought] [了|le|(past)] [运动服、|yùndòngfú,|sportswear,] [运动鞋。|yùndòng xié.|sneakers.] [直到|zhídào|Until] [今天，|jīntiān,|today,] [鞋|xié|shoes] [和|hé|and] [衣服|yīfu|clothes] [还|hái|still] [都是|dōu shì|are] [新|xīn|new] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">My daughter says every day "starting tomorrow I'll run 5000 meters every day". My wife and I bought her sportswear and sneakers a long time ago. Until today, the shoes and clothes are still new.</div>
          <div class="zh stem">★ [女儿|nǚ'ér|Daughter] [喜欢|xǐhuan|likes] [新衣服|xīn yīfu|new clothes] [和|hé|and] [新鞋。|xīn xié.|new shoes.]</div>
          <div class="sent-en">★ Daughter likes new clothes and new shoes.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [说|shuō|says] [鞋|xié|the shoes] [和|hé|and] [衣服|yīfu|clothes] [还|hái|are still] [都|dōu|all] [是|shì|(are)] [新|xīn|new] [的，|de,|(ones),] [说明|shuōmíng|showing] [她|tā|she] [根本|gēnběn|never] [没|méi|(not)] [跑过。|pǎo guò|ran.]" data-expl-en="Shoes and clothes are still new — she never ran."></div>
        </div>
        <div class="q" id="L16-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[赛前，|sài qián,|Before the competition,] [我|wǒ|I] [跟|gēn|with] [儿子|érzi|son] [说：|shuō:|said:] [“如果|“rúguǒ|"If] [你|nǐ|you] [拿了|ná le|got] [第一，|dì yī,|first place,] [你|nǐ|you] [要|yào|want] [什么|shénme|what] [我|wǒ|I] [就|jiù|then] [给|gěi|to] [你|nǐ|you] [买|mǎi|buy] [什么。”|shénme.”|whatever."] [没想到|méi xiǎngdào|didn't expect] [儿子|érzi|son] [真的|zhēn de|really] [拿了|ná le|got] [第一，|dì yī,|first place,] [更|gèng|even more] [没想到|méi xiǎngdào|unexpected] [他|tā|his] [的|de|(possessive)] [要求|yāoqiú|request] [是|shì|is] [让|ràng|letting] [我|wǒ|me] [在|zài|at] [家|jiā|home] [休息|xiūxi|rest] [一天。|yì tiān.|for one day.]</div>
          <div class="sent-en">Before the competition I told my son: "If you get first place, I'll buy you whatever you want." Unexpectedly he really did get first place, and even more unexpectedly his request was to let me rest at home for one day.</div>
          <div class="zh stem">★ [儿子|érzi|Son] [没|méi|didn't] [让|ràng|ask] [我|wǒ|me] [买|mǎi|buy] [东西|dōngxi|things] [给|gěi|to] [他。|tā.|him.]</div>
          <div class="sent-en">★ Son didn't ask me to buy things for him.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[儿子|érzi|My son] [要求|yāoqiú|asked] [我|wǒ|me] [在|zài|to] [家|jiā|(at home)] [休息|xiūxi|rest] [一天，|yì tiān,|for a day,] [没|méi|not] [让|ràng|ask] [我|wǒ|me] [买|mǎi|to buy] [东西。|dōngxi|things.]" data-expl-en="Son asked me to rest one day — no shopping request."></div>
        </div>
        <div class="q" id="L16-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[每个|měi ge|Every] [星期五，|xīngqīwǔ,|Friday,] [我们班|wǒmen bān|our class] [中文|Zhōngwén|Chinese] [老师|lǎoshī|teacher] [都|dōu|all] [带着|dài zhe|leading] [同学们|tóngxuémen|classmates] [复习。|fùxí.|review.] [如果|rúguǒ|If] [有|yǒu|there is] [人|rén|someone] [能|néng|can] [把|bǎ|(BA)] [这个|zhège|this] [星期|xīngqī|week] [学|xué|learned] [的|de|(possessive)] [词语|cíyǔ|words] [都|dōu|all] [写对，|xiě duì,|write correctly,] [老师|lǎoshī|teacher] [就|jiù|then] [送给|sòng gěi|give to] [他|tā|him] [一件|yí jiàn|a] [礼物。|lǐwù.|gift.]</div>
          <div class="sent-en">Every Friday our Chinese teacher reviews with the students. If anyone can write all the words learned this week correctly, the teacher gives them a gift.</div>
          <div class="zh stem">★ [每个|měi ge|Every] [星期五|xīngqīwǔ|Friday] [老师|lǎoshī|teacher] [都|dōu|all] [送给|sòng gěi|gives] [每个|měi ge|every] [学生|xuéshēng|student] [一件|yí jiàn|a] [礼物。|lǐwù.|gift.]</div>
          <div class="sent-en">★ Every Friday the teacher gives every student a gift.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[只有|zhǐyǒu|Only] [写对|xiě duì|those who wrote] [所有|suǒyǒu|all] [词语|cíyǔ|words] [的|de|(nominalizer)] [人|rén|people] [才|cái|(only then)] [得到|dédào|got] [礼物。|lǐwù|gifts.]" data-expl-en="Only those who write all words correctly get a gift."></div>
        </div>

        <h4 id="L16-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L16-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[男：|Nán:|M:] [最近|zuìjìn|recently] [你|nǐ|your] [的|de|(possessive)] [眼睛|yǎnjìng|eyes] [一直|yìzhí|always] [红红|hónghóng|red] [的，|de,|,] [我|wǒ|I] [带|dài|take] [你|nǐ|you] [去|qù|go to] [医院|yīyuàn|hospital] [检查|jiǎnchá|check] [一下|yíxià|a bit] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [去过了，|qù guò le,|already went,] [医生|yīshēng|doctor] [说|shuō|said] [没什么事，|méi shénme shì,|nothing wrong,] [不用|búyòng|no need to] [吃药，|chī yào,|take medicine,] [让|ràng|let] [我|wǒ|me] [多|duō|more] [休息。|xiūxi.|rest.]</div>
          <div class="sent-en">M: Your eyes have been red lately — let me take you to the hospital to check.<br>W: I've already gone — the doctor said nothing's wrong, no medicine needed, just rest more.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[眼睛红|yǎnjìng hóng|eyes are red]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[打算去医院|dǎsuàn qù yīyuàn|plans to go to the hospital]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[买了一个红眼镜|mǎi le yí ge hóng yǎnjìng|bought red glasses]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[你|nǐ|your] [的|de|(possessive)] [眼睛|yǎnjìng|eyes] [一直|yìzhí|have been] [红红|hónghóng|red] [的|de|(nominalizer)]」。</div>
        </div>
        <div class="q" id="L16-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [打算|dǎsuàn|plan to] [从明天开始，|cóng míngtiān kāishǐ,|starting tomorrow,] [每天|měitiān|every day] [去|qù|go to] [运动场|yùndòngchǎng|sports field] [跑|pǎo|run] [两千米。|liǎngqiān mǐ.|2000 meters.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [真的|zhēn de|really] [吗？|ma?|(question)] [如果|rúguǒ|if] [你|nǐ|you] [能|néng|can] [这么|zhème|so] [做，|zuò,|do,] [太阳|tàiyáng|sun] [就|jiù|then] [能|néng|can] [从|cóng|from] [西边|xībiān|west] [出来。|chūlái.|come out.]</div>
          <div class="sent-en">M: I plan to run 2000 meters at the sports field every day starting tomorrow.<br>W: Really? If you can do that, the sun will come out from the west.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [是|shì|(is)] [什么|shénme|what] [意思？|yìsi?|meaning?]</div>
          <div class="sent-en">Q: What does the woman mean?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[明天天气好|míngtiān tiānqì hǎo|tomorrow's weather is good]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[太阳能从西边出来|tàiyáng néng cóng xībiān chūlái|the sun can rise from the west]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[认为男的不可能去跑步|rènwéi nánde bù kěnéng qù pǎobù|thinks the man can't possibly run]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　“[太阳|tàiyáng|The sun] [从|cóng|rising] [西边|xībiān|in the west] [出来|chūlái|(coming out)]”[表示|biǎoshì|means] [不可能。|bù kěnéng|impossible.]</div>
        </div>
        <div class="q" id="L16-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [乐乐，|Lèlè,|Lele,] [快|kuài|quickly] [让|ràng|let] [奶奶|nǎinai|Grandma] [看看，|kàn kan,|take a look,] [你|nǐ|you] [长高|zhǎng gāo|grew taller] [了，|le,|,] [也|yě|also] [长胖|zhǎng pàng|gained weight] [了。|le.|(change)] [这双|zhè shuāng|this pair of] [小皮鞋|xiǎo píxié|little leather shoes] [真|zhēn|really] [好看，|hǎokàn,|pretty,] [谁|shéi|who] [给|gěi|to] [你|nǐ|you] [买|mǎi|bought] [的？|de?|(nominalizer)]</div>
          <div class="zh stem">[男：|Nán:|M:] [是|shì|it's] [妈妈，|māma,|Mom,] [她|tā|she] [说|shuō|said] [如果|rúguǒ|if] [我|wǒ|I] [这次|zhè cì|this time] [考试|kǎoshì|exam] [还|hái|still] [拿|ná|get] [第一，|dì yī,|first place,] [就|jiù|then] [再|zài|again] [给|gěi|to] [我|wǒ|me] [买|mǎi|buy] [一双。|yì shuāng.|a pair.]</div>
          <div class="sent-en">W: Lele, let Grandma see — you've grown taller and gained weight. These little leather shoes are so pretty, who bought them for you?<br>M: Mom. She said if I get first place in this exam again, she'll buy me another pair.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|who is the woman] [是|shì|(is)] [男的|nánde|the man’s] [的|de|(possessive)] [什么|shénme|what] [人？|rén?|person?]</div>
          <div class="sent-en">Q: Who is the woman to the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[女儿|nǚ'ér|daughter]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[妈妈|māma|mom]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[奶奶|nǎinai|grandma]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[让|ràng|Let] [奶奶|nǎinai|Grandma] [看看|kàn kan|take a look]」。</div>
        </div>
        <div class="q" id="L16-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [觉得|juéde|feel] [中午|zhōngwǔ|noon] [吃|chī|took] [的|de|(possessive)] [药|yào|medicine] [没什么|méi shénme|no] [用，|yòng,|use,] [牙|yá|tooth] [还是|háishi|still] [很|hěn|very] [疼，|téng,|hurts,] [不|bù|not] [能|néng|can] [吃|chī|eat] [甜|tián|sweet] [的。|de.|(nominalizer)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [等|děng|wait] [一晚上，|yì wǎnshang,|one night,] [如果|rúguǒ|if] [明天|míngtiān|tomorrow] [还|hái|still] [不|bù|not] [好，|hǎo,|better,] [就|jiù|then] [带|dài|take] [你|nǐ|you] [去|qù|go to] [医院|yīyuàn|hospital] [检查|jiǎnchá|check] [一下，|yíxià,|a bit,] [看看|kàn kan|see] [医生|yīshēng|doctor] [怎么|zěnme|what] [说。|shuō.|says.]</div>
          <div class="sent-en">M: I feel the medicine I took at noon is useless — my tooth still hurts, can't eat sweet things.<br>W: Wait one night. If it's not better tomorrow, I'll take you to the hospital to check.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[中午吃过药了|zhōngwǔ chī guò yào le|took medicine at noon]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[现在要去医院|xiànzài yào qù yīyuàn|going to the hospital now]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[现在能吃甜的|xiànzài néng chī tián de|can eat sweet things now]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[中午|zhōngwǔ|The medicine taken] [吃|chī|at noon] [的|de|(possessive)] [药|yào|(medicine)] [没什么|méi shénme|isn’t of much] [用|yòng|use]」。</div>
        </div>
        <div class="q" id="L16-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [老高，|lǎo Gāo,|Old Gao,] [你|nǐ|you] [说|shuō|say] [我们|wǒmen|we] [给|gěi|to] [孩子|háizi|child] [起|qǐ|give] [什么|shénme|what] [名字|míngzi|name] [好？|hǎo?|is good?]</div>
          <div class="zh stem">[男：|Nán:|M:] [如果|rúguǒ|if] [是|shì|it's] [男孩儿，|nánháir,|a boy,] [就|jiù|then] [叫|jiào|call] [高山，|Gāo Shān,|Gao Shan,] [如果|rúguǒ|if] [是|shì|it's] [女孩儿，|nǚháir,|a girl,] [就|jiù|then] [叫|jiào|call] [高静，|Gāo Jìng,|Gao Jing,] [怎么样？|zěnmeyàng?|how about?]</div>
          <div class="sent-en">W: Old Gao, what name should we give the child?<br>M: If it's a boy, call him Gao Shan; if a girl, Gao Jing. How about that?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|what name does the man] [打算|dǎsuàn|plan] [给|gěi|to give] [女儿|nǚ’ér|his daughter] [起|qǐ|(give)] [什么|shénme|what] [名字？|míngzi?|name?]</div>
          <div class="sent-en">Q: What name does the man plan to give his daughter?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[老高|lǎo Gāo|Old Gao]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[高山|Gāo Shān|Gao Shan]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[高静|Gāo Jìng|Gao Jing]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[如果|rúguǒ|If] [是|shì|it’s] [女孩儿，|nǚháir|a girl,] [就|jiù|then] [叫|jiào|call her] [高静|Gāo Jìng|Gao Jing]」。</div>
        </div>

        <h4 id="L16-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L16-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [今天|jīntiān|today] [回来|huílái|came back] [得|de|(complement)] [有点儿|yǒudiǎnr|a bit] [晚|wǎn|late] [啊。|a.|(exclamation)]</div>
          <div class="zh stem">[男：|Nán:|M:] [今天|jīntiān|today] [不|bù|not] [知道|zhīdào|know] [怎么|zěnme|why] [了，|le,|,] [特别|tèbié|especially] [累，|lěi,|tired,] [回家|huí jiā|home] [的|de|(possessive)] [时候|shíhou|when] [累|lèi|tired] [得|de|(complement)] [我|wǒ|I] [在|zài|on] [公共汽车|gōnggòng qìchē|bus] [上|shàng|on] [就|jiù|then] [睡着|shuì zháo|fell asleep] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [有时候|yǒu shíhou|sometimes] [也|yě|also] [在|zài|on] [车|chē|the bus] [上|shàng|on] [睡|shuì|sleep] [一会儿。|yíhuìr.|a while.]</div>
          <div class="zh stem">[男：|Nán:|M:] [但是|dànshì|but] [我|wǒ|I] [坐过站|zuò guò zhàn|missed my stop] [了，|le,|,] [只好|zhǐhǎo|had to] [下了车|xià le chē|get off] [再|zài|then] [往回坐。|wǎng huí zuò.|ride back.]</div>
          <div class="sent-en">W: You came back a bit late today.<br>M: I don't know what's wrong today — especially tired. On the way home I was so tired I fell asleep on the bus.<br>W: I sometimes sleep a while on the bus too.<br>M: But I missed my stop, so I had to get off and ride back.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [为什么|wèishénme|why] [回来|huílái|came back] [晚|wǎn|late] [了？|le?|?]</div>
          <div class="sent-en">Q: Why did the man come back late?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[一直工作|yìzhí gōngzuò|kept working]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[坐错车了|zuò cuò chē le|took the wrong bus]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[坐过站了|zuò guò zhàn le|missed his stop]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[我|wǒ|I] [坐|zuò|rode] [过|guò|past] [站|zhàn|the stop] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L16-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[男：|Nán:|M:] [周新，|Zhōu Xīn,|Zhou Xin,] [好久不见！|hǎojiǔ bú jiàn!|Long time no see!] [你|nǐ|you] [还是|háishi|still] [那么|nàme|so] [年轻、|niánqīng,|young,] [漂亮。|piàoliang.|pretty.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [对不起，|duìbuqǐ,|Sorry,] [请问|qǐngwèn|excuse me] [您|nín|you] [是？|shì?|are?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [是|shì|am] [常亮|Cháng Liàng|Chang Liang] [啊，|a,|,] [你|nǐ|you] [不|bù|not] [认识|rènshi|recognize] [我|wǒ|me] [了？|le?|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [常亮？|Cháng Liàng?|Chang Liang?] [你|nǐ|you] [现在|xiànzài|now] [怎么|zěnme|why] [变|biàn|became] [得|de|(complement)] [这么|zhème|so] [瘦？|shòu?|thin?] [瘦|shòu|thin] [得|de|(complement)] [我|wǒ|I] [都|dōu|even] [不|bù|not] [认识|rènshi|recognize] [你|nǐ|you] [了。|le.|(change)]</div>
          <div class="sent-en">M: Zhou Xin, long time no see! You're still so young and pretty.<br>W: Sorry, who are you?<br>M: I'm Chang Liang — don't you recognize me?<br>W: Chang Liang? How did you become so thin? So thin that I don't even recognize you.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不认识男的|bú rènshi nánde|doesn't know the man]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[变瘦了|biàn shòu le|got thin]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[没想到男的这么瘦|méi xiǎngdào nánde zhème shòu|didn't expect the man to be so thin]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[瘦|shòu|So thin that] [得|de|(complement)] [我|wǒ|I] [都|dōu|even] [不|bù|don’t] [认识|rènshi|recognize] [你|nǐ|you] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L16-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[男：|Nán:|M:] [听说|tīngshuō|heard] [上个月|shàng ge yuè|last month] [小白|Xiǎobái|Xiaobai] [生了|shēng le|gave birth to] [个|ge|a] [儿子？|érzi?|son?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是|shì|yes] [啊，|a,|,] [那|nà|that] [孩子|háizi|child] [特别|tèbié|especially] [可爱，|kě'ài,|cute,] [出生|chūshēng|born] [时|shí|when] [特别|tèbié|especially] [胖，|pàng,|fat,] [四公斤|sì gōngjīn|4 kilos] [呢，|ne,|(emphasis)] [他们|tāmen|they] [高兴|gāoxìng|happy] [得|de|(complement)] [一晚上|yì wǎnshang|all night] [没睡。|méi shuì.|didn't sleep.]</div>
          <div class="zh stem">[男：|Nán:|M:] [孩子|háizi|child] [长|zhǎng|look] [得|de|(complement)] [像|xiàng|like] [谁？|shéi?|who?] [像|xiàng|like] [小白|Xiǎobái|Xiaobai] [还是|háishi|or] [像|xiàng|like] [她丈夫？|tā zhàngfu?|her husband?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [鼻子|bízi|nose] [像|xiàng|like] [爸爸，|bàba,|dad,] [高高的，|gāogāo de,|tall,] [眼睛|yǎnjìng|eyes] [像|xiàng|like] [妈妈，|māma,|mom,] [大大的，|dàdà de,|big,] [头发|tóufa|hair] [也|yě|also] [像|xiàng|like] [妈妈，|māma,|mom,] [黑黑的。|hēihēi de.|black.]</div>
          <div class="sent-en">M: I heard Xiaobai had a son last month?<br>W: Yes, that child is especially cute — born especially fat, 4 kilos. They were so happy they didn't sleep all night.<br>M: Who does the child look like? Xiaobai or her husband?<br>W: Nose like Dad — tall; eyes like Mom — big; hair also like Mom — black.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [小白|Xiǎobái|Xiaobai’s] [的|de|(possessive)] [孩子，|háizi,|child,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about Xiaobai's child?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不太胖|bú tài pàng|not too fat]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[大眼睛|dà yǎnjìng|big eyes]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[小鼻子|xiǎo bízi|small nose]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[眼睛|yǎnjìng|Eyes] [像|xiàng|like] [妈妈，|māma,|Mom’s,] [大大|dàdà|big] [的|de|(nominalizer)]」。</div>
        </div>
        <div class="q" id="L16-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [睡|shuì|sleep] [不|bù|not] [着，|zháo,|fall asleep,] [怎么办|zěnme bàn|what to do] [啊？|a?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [喝杯|hē bēi|drink a cup of] [热牛奶，|rè niúnǎi,|hot milk,] [能|néng|can] [帮助|bāngzhù|help] [你|nǐ|you] [快点儿|kuài diǎnr|quickly] [睡，|shuì,|sleep,] [也|yě|also] [能|néng|can] [睡|shuì|sleep] [得|de|(complement)] [好。|hǎo.|well.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [热牛奶？|rè niúnǎi?|Hot milk?] [我|wǒ|I] [是|shì|am] [热|rè|hot] [得|de|(complement)] [睡|shuì|sleep] [不|bù|not] [着，|zháo,|fall asleep,] [喝|hē|drink] [热|rè|hot] [的|de|(nominalizer)] [更|gèng|even more] [睡|shuì|sleep] [不|bù|not] [着|zháo|fall asleep] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [如果|rúguǒ|if] [觉得|juéde|feel] [太热，|tài rè,|too hot,] [就|jiù|then] [喝杯|hē bēi|drink a cup of] [冰可乐|bīng kělè|iced cola] [吧，|ba,|,] [甜甜|tiántián|sweet] [的，|de,|,] [很|hěn|very] [舒服。|shūfu.|comfortable.]</div>
          <div class="sent-en">W: I can't sleep — what should I do?<br>M: Drink a cup of hot milk — it can help you fall asleep faster and sleep better.<br>W: Hot milk? I can't sleep because I'm hot — drinking hot things makes it worse.<br>M: If you feel too hot, drink a cup of iced cola — sweet and very comfortable.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|what would be better for the woman] [喝|hē|to drink] [什么|shénme|(what)] [比较|bǐjiào|(better)] [好？|hǎo?|(good)?]</div>
          <div class="sent-en">Q: What would be better for the woman to drink?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[热牛奶|rè niúnǎi|hot milk]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[冰可乐|bīng kělè|iced cola]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[热水|rè shuǐ|hot water]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[就|jiù|Just] [喝|hē|drink] [杯|bēi|a glass of] [冰可乐|bīng kělè|iced cola] [吧|ba|(suggestion)]」。</div>
        </div>
        <div class="q" id="L16-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这个|zhège|this] [城市|chéngshì|city] [真|zhēn|really] [不错，|búcuò,|nice,] [干净、|gānjìng,|clean,] [安静、|ānjìng,|quiet,] [漂亮。|piàoliang.|beautiful.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [超市、|chāoshì,|Supermarkets,] [洗衣店、|xǐyīdiàn,|laundries,] [饭馆、|fànguǎn,|restaurants,] [咖啡店，|kāfēidiàn,|cafés,] [都有，|dōu yǒu,|all there,] [很|hěn|very] [方便。|fāngbiàn.|convenient.]</div>
          <div class="zh stem">[男：|Nán:|M:] [人|rén|People] [和|hé|and] [人|rén|people] [的|de|(possessive)] [关系|guānxi|relationships] [也|yě|also] [不错，|búcuò,|good,] [遇到|yùdào|when encountering] [问题|wèntí|problems] [时，|shí,|when,] [别人|biérén|others] [都|dōu|all] [愿意|yuànyì|are willing to] [帮助|bāngzhù|help] [你。|nǐ.|you.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [如果|rúguǒ|if] [这个|zhège|this] [地方|dìfang|place] [有|yǒu|had] [地铁，|dìtiě,|a subway,] [那|nà|then] [就|jiù|would] [更|gèng|even more] [好|hǎo|good] [了。|le.|(change)]</div>
          <div class="sent-en">M: This city is really nice — clean, quiet, beautiful.<br>W: Supermarkets, laundries, restaurants, cafés — all there, very convenient.<br>M: People's relationships are good too — when you encounter problems, others are willing to help.<br>W: If this place had a subway, it'd be even better.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [这个|zhège|this] [城市，|chéngshì,|city,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about this city?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[有地铁|yǒu dìtiě|has a subway]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[人很好|rén hěn hǎo|the people are nice]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不太安静|bú tài ānjìng|not very quiet]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[人|rén|People’s] [和|hé|relations] [人|rén|with each other] [的|de|(possessive)] [关系|guānxi|(relations)] [也|yě|are also] [不错|búcuò|good]……[别人|biérén|others] [都|dōu|all] [愿意|yuànyì|are willing] [帮助|bāngzhù|to help] [你|nǐ|you]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L16-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L16-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[你的|nǐ de|your] [鼻子|bízi|nose] [红红|hónghóng|red] [的？|de?|(question)] [怎么|zěnme|what] [了？|le?|(change)]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[我|wǒ|my] [的|de|(possessive)] [牙|yá|tooth] [有点儿|yǒudiǎnr|a bit] [疼，|téng,|hurts,] [您|nín|you] [帮|bāng|help] [我|wǒ|me] [看看|kàn kan|take a look] [吧。|ba.|(suggestion)]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[不到|bú dào|less than] [200 米|èrbǎi mǐ|200 meters] [了，|le,|,] [我们|wǒmen|we] [要|yào|need to] [不要|bú yào|or not] [先|xiān|first] [休息|xiūxi|rest] [一下？|yíxià?|a bit?]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[我们|wǒmen|we] [给|gěi|for] [小方|Xiǎofāng|Xiaofang] [的|de|(possessive)] [孩子|háizi|child] [买|mǎi|buy] [皮鞋|píxié|leather shoes] [还是|háishi|or] [买|mǎi|buy] [帽子？|màozi?|a hat?]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[他|tā|He] [是|shì|is] [我们学校|wǒmen xuéxiào|our school] [的|de|(possessive)] [校长，|xiàozhǎng,|principal,] [姓|xìng|surname] [周。|Zhōu.|Zhou.]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [去|qù|go] [那儿|nàr|there] [吗？|ma?|(question)] （E）</div>
          <div class="sent-en">Do you know how to get there? — (E) Of course. We take the bus first, then transfer to the subway.</div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L16-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[还有|háiyǒu|How much] [多远？|duō yuǎn?|further?] [我|wǒ|I] [累|lèi|tired] [得|de|(complement)] [一步|yí bù|one step] [也|yě|also] [不|bù|not] [想|xiǎng|want to] [走|zǒu|walk] [了。|le.|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">How much further? I'm so tired I don't want to take another step.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L16-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[她|tā|her] [儿子|érzi|son] [只有|zhǐyǒu|only] [两个月|liǎng ge yuè|two months] [大，|dà,|old,] [不用|búyòng|no need to] [穿|chuān|wear] [皮鞋，|píxié,|leather shoes,] [买|mǎi|buy] [个|ge|a] [小帽子|xiǎo màozi|little hat] [吧。|ba.|(suggestion)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Her son is only two months old — no need for leather shoes. Buy a little hat.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L16-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[好，|hǎo,|OK,] [你|nǐ|you] [坐|zuò|sit] [这边|zhèbiān|here] [吧，|ba,|,] [我|wǒ|I] [给|gěi|to] [你|nǐ|you] [检查|jiǎnchá|check] [一下。|yíxià.|a bit.] （<span class="blank">　</span>）</div>
          <div class="sent-en">OK, sit here — let me check.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L16-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[前边|qiánbiān|In front] [那个|nàge|that] [高高|gāogāo|tall] [的、|de,|,] [瘦瘦|shòushòu|thin] [的|de|(possessive)] [老人|lǎorén|old man] [是|shì|is] [谁？|shéi?|who?] （<span class="blank">　</span>）</div>
          <div class="sent-en">Who's that tall, thin old man in front?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L16-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[没事，|méi shì,|It's fine,] [可能|kěnéng|maybe] [是|shì|it's] [外边|wàibiān|outside] [太冷|tài lěng|too cold] [了，|le,|,] [还|hái|also] [刮|guā|blowing] [大风。|dàfēng.|strong wind.] （<span class="blank">　</span>）</div>
          <div class="sent-en">It's fine — maybe it's too cold outside and windy.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L16-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L16-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[城市|chéngshì|city]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[头发|tóufa|hair]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[鼻子|bízi|nose]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[认为|rènwéi|think]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[关系|guānxi|relationship]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[她|tā|she] [说话|shuōhuà|speaks] [的|de|(possessive)] （E [声音|shēngyīn|voice]） [多|duō|how] [好听|hǎotīng|nice] [啊！|a!|!]</div>
          <div class="sent-en">Her voice is so nice!</div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L16-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[我|wǒ|I] [感冒|gǎnmào|caught a cold] [了，|le,|,] （<span class="blank">　</span>） [不|bù|not] [舒服。|shūfu.|comfortable.]</div>
          <div class="sent-en">I caught a cold — my nose isn't comfortable.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L16-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[我|wǒ|I] （<span class="blank">　</span>） [现在|xiànzài|now] [上网|shàngwǎng|going online] [看|kàn|reading] [新闻|xīnwén|news] [比|bǐ|than] [以前|yǐqián|before] [方便|fāngbiàn|convenient] [多|duō|much] [了。|le.|(change)]</div>
          <div class="sent-en">I think reading news online is much more convenient than before.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L16-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[今天|jīntiān|today] [洗澡|xǐzǎo|showering] [的|de|(possessive)] [时候|shíhou|when] [我|wǒ|I] [发现|fāxiàn|discovered] [我|wǒ|my] [的|de|(possessive)] （<span class="blank">　</span>） [长|zhǎng|grew] [了|le|(past)] [不少。|bùshǎo.|quite a bit.]</div>
          <div class="sent-en">When showering today I discovered my hair has grown quite a bit.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L16-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [我|wǒ|I] [看|kàn|see] [你|nǐ|you] [和|hé|and] [新来的|xīn lái de|newly arrived] [小丽|Xiǎolì|Xiaoli] [每天|měitiān|every day] [下班|xiàbān|after work] [都|dōu|all] [一起|yìqǐ|together] [走。|zǒu.|walk.]</div>
          <div class="zh">[B：|B:|B:] [是，|shì,|Yes,] [我们|wǒmen|we] [以前|yǐqián|before] [就|jiù|already] [是|shì|were] [同学，|tóngxué,|classmates,] （<span class="blank">　</span>） [一直|yìzhí|always] [很|hěn|very] [好。|hǎo.|good.]</div>
          <div class="sent-en">A: I see you and the newly arrived Xiaoli walking together after work every day.<br>B: Yes, we were classmates before — our relationship has always been good.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L16-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [最近|zuìjìn|Recently] [工作|gōngzuò|work] [太累|tài lèi|too tiring] [了，|le,|,] [我|wǒ|I] [真|zhēn|really] [想|xiǎng|want to] [好好儿|hǎohāor|well] [休息|xiūxi|rest] [一下。|yíxià.|a bit.]</div>
          <div class="zh">[B：|B:|B:] [那|nà|then] [你|nǐ|you] [去|qù|go to] [别的|biéde|other] （<span class="blank">　</span>） [玩儿玩儿|wánr wanr|play] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">A: Work has been too tiring lately — I really want to rest.<br>B: Then go play in another city.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L16-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L16-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[您|nín|you] [有|yǒu|have] [体检|tǐjiǎn|physical examination] [的|de|(possessive)] [习惯|xíguàn|habit] [吗？|ma?|(question)] [很多|hěnduō|many] [人|rén|people] [都|dōu|all] [认为|rènwéi|think] [体检|tǐjiǎn|physical exams] [没|méi|not] [那么|nàme|so] [重要，|zhòngyào,|important,] [觉得|juéde|feel] [自己|zìjǐ|own] [身体|shēntǐ|body] [很|hěn|very] [健康。|jiànkāng.|healthy.] [其实，|qíshí,|Actually,] [我们|wǒmen|we] [应该|yīnggāi|should] [每年|měi nián|every year] [做|zuò|do] [一次|yí cì|one] [体检，|tǐjiǎn,|physical exam,] [这样|zhèyàng|this way] [可以|kěyǐ|can] [让|ràng|let] [自己|zìjǐ|oneself] [放心，|fàngxīn,|be at ease,] [也|yě|also] [让|ràng|let] [家人|jiārén|family] [放心。|fàngxīn.|be at ease.] [如果|rúguǒ|if] [有|yǒu|there is] [什么|shénme|any] [病，|bìng,|disease,] [也|yě|also] [可以|kěyǐ|can] [早点儿|zǎo diǎnr|early] [知道|zhīdào|know] [早点儿|zǎo diǎnr|early] [看。|kàn.|treat.]</div>
          <div class="sent-en">Do you have the habit of physical exams? Many people think physical exams aren't that important and feel they're healthy. Actually, we should do a physical exam once a year — this way you're at ease and your family is too. If there's any illness, you can know early and treat early.</div>
          <div class="zh ask">★ [关于|guānyú|about] [体检，|tǐjiǎn,|physical exams,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">★ What can we know about physical exams?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不太重要|bú tài zhòngyào|not very important]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[应该每年一次|yīnggāi měi nián yí cì|should do once a year]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[没病的人不用体检|méi bìng de rén búyòng tǐjiǎn|healthy people don't need it]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我们|wǒmen|We] [每年|měinián|every year] [做|zuò|have] [一次|yí cì|one] [体检|tǐjiǎn|physical exam]」。</div>
        </div>
        <div class="q" id="L16-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[我|wǒ|I] [是|shì|am] [新兴饭店|Xīnxīng Fàndiàn|Xinxing Restaurant] [的|de|(possessive)] [经理，|jīnglǐ,|manager,] [我|wǒ|I] [和|hé|and] [我|wǒ|my] [的|de|(possessive)] [服务员|fúwùyuán|waiters] [很|hěn|very] [高兴|gāoxìng|happy] [为|wèi|to] [您|nín|you] [服务。|fúwù.|serve.] [如果|rúguǒ|if] [您|nín|you] [对|duì|to] [我们|wǒmen|our] [的|de|(possessive)] [服务|fúwù|service] [很|hěn|very] [满意，|mǎnyì,|satisfied,] [就|jiù|then] [请|qǐng|please] [告诉|gàosu|tell] [您|nín|your] [的|de|(possessive)] [朋友；|péngyou;|friends;] [如果|rúguǒ|if] [您|nín|you] [对|duì|to] [我们|wǒmen|our] [的|de|(possessive)] [服务|fúwù|service] [不|bù|not] [满意，|mǎnyì,|satisfied,] [就|jiù|then] [请|qǐng|please] [告诉|gàosu|tell] [我们。|wǒmen.|us.] [新兴饭店|Xīnxīng Fàndiàn|Xinxing Restaurant] [祝|zhù|wishes] [您|nín|you] [生活、|shēnghuó,|life,] [工作|gōngzuò|work] [事事|shìshì|everything] [开心。|kāixīn.|happy.]</div>
          <div class="sent-en">I'm the manager of Xinxing Restaurant. My waiters and I are happy to serve you. If you're satisfied with our service, tell your friends; if not, tell us. Xinxing Restaurant wishes you happiness in life and work.</div>
          <div class="zh ask">★ [如果|rúguǒ|If] [认为|rènwéi|you think] [这家|zhè jiā|this] [饭店|fàndiàn|restaurant’s] [的|de|(possessive)] [饭菜|fàncài|food] [不错，|búcuò,|is good,] [我们|wǒmen|we] [可以：|kěyǐ:|can:]</div>
          <div class="sent-en">★ If you think this restaurant's food is good, we can: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[告诉大家|gàosu dàjiā|tell everyone]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[告诉饭店|gàosu fàndiàn|tell the restaurant]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[来这儿工作|lái zhèr gōngzuò|come work here]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[如果|rúguǒ|If] [满意，|mǎnyì,|satisfied,] [请|qǐng|please] [告诉|gàosu|tell] [您|nín|your] [的|de|(possessive)] [朋友|péngyou|friends]」。</div>
        </div>
        <div class="q" id="L16-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[我|wǒ|my] [爸妈|bà mā|parents] [都|dōu|both] [是|shì|are] [北方人，|běifāng rén,|Northerners,] [但是|dànshì|but] [我|wǒ|I] [从小|cóngxiǎo|since childhood] [跟|gēn|with] [爷爷奶奶|yéye nǎinai|grandpa and grandma] [在|zài|in] [南方|nánfāng|the South] [长大，|zhǎngdà,|grew up,] [一直|yìzhí|always] [没|méi|never] [见过|jiàn guò|seen] [雪。|xuě.|snow.] [去年|qùnián|last year] [搬回|bān huí|moved back to] [北京|Běijīng|Beijing] [后，|hòu,|after,] [虽然|suīrán|although] [这儿|zhèr|here] [的|de|(possessive)] [冬天|dōngtiān|winter] [很冷，|hěn lěng,|is very cold,] [我|wǒ|I] [还|hái|still] [不太|bú tài|not quite] [习惯，|xíguàn,|used to,] [但是|dànshì|but] [我|wǒ|I] [终于|zhōngyú|finally] [第一次|dì yī cì|for the first time] [见到了|jiàndào le|saw] [雪，|xuě,|snow,] [雪花| xuěhuā|snowflakes] [白白的，|báibái de,|white,] [特别|tèbié|especially] [漂亮，|piàoliang,|beautiful,] [我|wǒ|I] [高兴|gāoxìng|happy] [得|de|(complement)] [在|zài|in] [雪地|xuědì|the snow] [里|li|inside] [玩儿|wánr|played] [了|le|(past)] [一天，|yì tiān,|all day,] [如果|rúguǒ|if] [每天|měitiān|every day] [都|dōu|all] [能|néng|can] [看到|kàndào|see] [雪，|xuě,|snow,] [那|nà|then] [就|jiù|would] [太|tài|too] [好|hǎo|good] [了。|le.|(change)]</div>
          <div class="sent-en">My parents are both Northerners, but I grew up in the South with my grandparents and had never seen snow. After moving back to Beijing last year — although it's very cold and I'm not quite used to it — I finally saw snow for the first time. Snowflakes are white and especially beautiful. I was so happy I played in the snow all day. If I could see snow every day, that would be wonderful.</div>
          <div class="zh ask">★ [我：|wǒ:|I:]</div>
          <div class="sent-en">★ I: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[没见过雪|méi jiàn guò xuě|hasn't seen snow]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[每天都能看到雪|měitiān dōu néng kàndào xuě|can see snow every day]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[喜欢雪|xǐhuan xuě|likes snow]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[高兴|gāoxìng|So happy] [得|de|(complement)] [在|zài|(in)] [雪地|xuě dì|the snow] [里|li|(in)] [玩儿|wánr|played] [了|le|(past)] [一天|yì tiān|all day]」→ [喜欢|xǐhuan|likes] [雪。|xuě|snow.]</div>
        </div>
        <div class="q" id="L16-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[我们|wǒmen|we] [每天|měitiān|every day] [都|dōu|all] [刷牙，|shuā yá,|brush teeth,] [但|dàn|but] [你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [刷牙|shuā yá|brush teeth] [吗？|ma?|(question)] [你|nǐ|your] [的|de|(possessive)] [牙|yá|teeth] [健康|jiànkāng|healthy] [吗？|ma?|(question)] [牙医|yáyī|The dentist] [告诉|gàosu|tells] [我们，|wǒmen,|us:] [刷牙|shuā yá|brushing] [应该|yīnggāi|should] [每天|měitiān|every day] [刷|shuā|brush] [三次，|sān cì,|three times,] [每次|měi cì|each time] [最少|zuìshǎo|at least] [要|yào|need to] [刷|shuā|brush] [三分钟，|sān fēnzhōng,|three minutes,] [这样|zhèyàng|this way] [才|cái|only then] [能|néng|can] [把|bǎ|(BA)] [牙|yá|teeth] [刷|shuā|brush] [干净。|gānjìng.|clean.] [还有，|háiyǒu,|Also,] [每年|měi nián|every year] [应该|yīnggāi|should] [最少|zuìshǎo|at least] [检查|jiǎnchá|check] [一次|yí cì|once] [牙，|yá,|teeth,] [如果|rúguǒ|if] [牙|yá|teeth] [不|bù|not] [舒服，|shūfu,|comfortable,] [就|jiù|then] [要|yào|need to] [马上|mǎshàng|immediately] [去|qù|go to] [医院。|yīyuàn.|the hospital.]</div>
          <div class="sent-en">We all brush our teeth every day — but do you know how to brush? Are your teeth healthy? The dentist tells us: brushing should be three times a day, at least three minutes each time, so you can brush your teeth clean. Also, you should have your teeth checked at least once a year; if your teeth aren't comfortable, go to the hospital right away.</div>
          <div class="zh ask">★ [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">★ From this passage, what can we know?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[刷牙的时间越长越好|shuā yá de shíjiān yuè cháng yuè hǎo|the longer brushing, the better]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[每天刷两次牙就可以|měitiān shuā liǎng cì yá jiù kěyǐ|brushing twice a day is enough]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[每年都要去医院检查牙|měi nián dōu yào qù yīyuàn jiǎnchá yá|should check teeth at the hospital every year]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[每年|měinián|Every year] [应该|yīnggāi|you should] [最少|zuìshǎo|at least] [检查|jiǎnchá|check] [一次|yí cì|once] [牙|yá|your teeth]」。</div>
        </div>
        <div class="q" id="L16-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[去年，|qùnián,|Last year,] [我|wǒ|my] [丈夫|zhàngfu|husband] [自己|zìjǐ|himself] [开|kāi|opened] [了|le|(past)] [个|ge|(MW)] [公司，|gōngsī,|company,] [每天|měitiān|every day] [忙|máng|busy] [得|de|(complement)] [都|dōu|even] [没有|méiyǒu|no] [时间|shíjiān|time] [吃饭，|chīfàn,|to eat,] [好几次|hǎo jǐ cì|several times] [都|dōu|all] [累|lèi|tired] [得|de|(complement)] [一句话|yí jù huà|a word] [也|yě|also] [不|bù|not] [想|xiǎng|want to] [说，|shuō,|say,] [到了家|dào le jiā|when getting home] [就|jiù|then] [睡觉，|shuìjiào,|sleep,] [我|wǒ|I] [真|zhēn|really] [担心|dānxīn|worry] [他|tā|him] [累坏|lèi huài|collapse from exhaustion] [了。|le.|(change)] [今天|jīntiān|today] [晚上|wǎnshang|evening] [丈夫|zhàngfu|husband] [回来|huílái|comes back] [后，|hòu,|after,] [我|wǒ|I] [打算|dǎsuàn|plan to] [告诉|gàosu|tell] [他：|tā:|him:] [下个月|xià ge yuè|next month] [不|bù|not] [工作，|gōngzuò,|work,] [一起|yìqǐ|together] [出去|chūqù|go out] [旅游，|lǚyóu,|travel,] [到|dào|to] [一个|yí ge|a] [安静|ānjìng|quiet] [的|de|(possessive)] [城市|chéngshì|city] [去|qù|go] [好好儿|hǎohāor|well] [休息|xiūxi|rest] [一下。|yíxià.|a bit.]</div>
          <div class="sent-en">Last year my husband started his own company. Every day he was so busy he didn't even have time to eat — several times he was so tired he didn't want to say a word, and went to sleep as soon as he got home. I really worry he'll collapse. Tonight, after he comes back, I plan to tell him: next month, don't work — let's travel together to a quiet city and rest well.</div>
          <div class="zh ask">★ [我|wǒ|My] [丈夫：|zhàngfu:|husband:]</div>
          <div class="sent-en">★ My husband: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[工作特别忙|gōngzuò tèbié máng|work is especially busy]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不喜欢说话|bù xǐhuan shuōhuà|doesn't like to talk]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[下个月搬家|xià ge yuè bānjiā|will move next month]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[每天|měitiān|Every day] [忙|máng|so busy] [得|de|(complement)] [都|dōu|even] [没有|méiyǒu|has no] [时间|shíjiān|time] [吃饭|chīfàn|to eat]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L16-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L16-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[跳|tiào|jump] [起来|qǐlái|up] [高兴|gāoxìng|happy] [弟弟|dìdi|younger brother] [得|de|(complement)] [了|le|(change)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[弟弟|dìdi|My brother] [高兴|gāoxìng|was so happy] [得|de|(complement)] [跳起来|tiào qǐlái|he jumped up] [了。|le|(change)]<div class="sent-en">Younger brother was so happy he jumped up.</div></div>
        </div>
        <div class="write-item" id="L16-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[大|dà|big] [大|dà|big] [小狗|xiǎogǒu|puppy] [的|de|(possessive)] [的|de|(possessive)] [眼睛|yǎnjìng|eyes]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[小狗|xiǎogǒu|The puppy’s] [的|de|(possessive)] [眼睛|yǎnjìng|eyes] [大大|dàdà|are big] [的。|de|(nominalizer)]<div class="sent-en">The puppy's eyes are big.</div></div>
        </div>
        <div class="write-item" id="L16-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[玩儿|wánr|play] [天气|tiānqì|weather] [就|jiù|then] [我们|wǒmen|we] [明天|míngtiān|tomorrow] [公园|gōngyuán|park] [去|qù|go] [好|hǎo|good]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[明天|míngtiān|If the weather] [天气|tiānqì|(weather)] [好|hǎo|is good] [我们|wǒmen|we’ll] [就|jiù|(then)] [去|qù|go to] [公园|gōngyuán|the park] [玩儿。|wánr|to play.]<div class="sent-en">If the weather is good tomorrow, we'll go to the park.</div></div>
        </div>
        <div class="write-item" id="L16-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[走路|zǒulù|walk] [不能|bùnéng|cannot] [疼|téng|hurt] [腿|tuǐ|leg] [得|de|(complement)] [我的|wǒ de|my]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|My] [的|de|(possessive)] [腿|tuǐ|leg] [疼|téng|hurts so much] [得|de|(complement)] [不能|bùnéng|I can’t] [走路。|zǒulù|walk.]<div class="sent-en">My leg hurts so much I can't walk.</div></div>
        </div>
        <div class="write-item" id="L16-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[甜|tián|sweet] [的|de|(nominalizer)] [甜|tián|sweet] [水果店|shuǐguǒdiàn|fruit shop] [的|de|(possessive)] [西瓜|xīguā|watermelon]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[水果店|shuǐguǒ diàn|The watermelon at the fruit shop] [的|de|(possessive)] [西瓜|xīguā|(watermelon)] [甜甜|tiántián|is sweet] [的。|de|(nominalizer)]<div class="sent-en">The watermelon at the fruit shop is sweet.</div></div>
        </div>

        <h4 id="L16-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L16-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[这个|zhège|this] <span class="blank-input"><span class="input-py">chéng</span><input type="text" data-ans="城"></span> [市|shì|city] [的|de|(possessive)] [街道|jiēdào|streets] [非常|fēicháng|very] [干净，|gānjìng,|clean,] [路边|lùbiān|roadside] [有|yǒu|has] [很多|hěnduō|many] [树。|shù.|trees.]</div>
          <div class="sent-en">This city's streets are very clean — many trees along the roadside.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[城|chéng|city]（[城市|chéngshì|city]）</span></div>
        </div>
        <div class="write-item" id="L16-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[妻子|qīzi|wife] [知道|zhīdào|knows] [我|wǒ|I] [明天|míngtiān|tomorrow] [参加|cānjiā|attend] [面试，|miànshì,|interview,] [为|wèi|for] [我|wǒ|me] [买|mǎi|bought] [了|le|(past)] [一双|yì shuāng|a pair of] [新|xīn|new] <span class="blank-input"><span class="input-py">pí</span><input type="text" data-ans="皮"></span> [鞋。|xié.|shoes.]</div>
          <div class="sent-en">My wife knows I have an interview tomorrow and bought me a new pair of leather shoes.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[皮|pí|leather]（[皮鞋|píxié|leather shoes]）</span></div>
        </div>
        <div class="write-item" id="L16-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[弟弟|dìdi|younger brother] [的|de|(possessive)] [眼睛|yǎnjìng|eyes] [大大的，|dàdà de,|big,] <span class="blank-input"><span class="input-py">bí</span><input type="text" data-ans="鼻"></span> [子|zi|nose] [高高的，|gāogāo de,|tall,] [可爱|kě'ài|cute] [极|jí|extremely] [了。|le.|(change)]</div>
          <div class="sent-en">My younger brother has big eyes and a tall nose — extremely cute.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[鼻|bí|nose]（[鼻子|bízi|nose]）</span></div>
        </div>
        <div class="write-item" id="L16-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[爷爷|yéye|Grandpa] [已经|yǐjīng|already] [80 岁|bāshí suì|80 years old] [了，|le,|,] [每年|měi nián|every year] [都|dōu|all] [要|yào|needs to] [去|qù|go] [做|zuò|do] [一次|yí cì|one] [健康|jiànkāng|health] <span class="blank-input"><span class="input-py">jiǎn</span><input type="text" data-ans="检"></span> [查。|chá.|check.]</div>
          <div class="sent-en">Grandpa is already 80 — he needs a health check once a year.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[检|jiǎn|check]（[检查|jiǎnchá|check]）</span></div>
        </div>
        <div class="write-item" id="L16-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[你|nǐ|you] [吃|chī|ate] [了|le|(past)] [那么|nàme|so] [多|duō|much] [甜|tián|sweet] [东西，|dōngxi,|things,] [快|kuài|quickly] [去|qù|go] [把|bǎ|(BA)] <span class="blank-input"><span class="input-py">yá</span><input type="text" data-ans="牙"></span> [刷|shuā|brush] [干净。|gānjìng.|clean.]</div>
          <div class="sent-en">You ate so many sweet things — hurry and brush your teeth clean.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[牙|yá|tooth]</span></div>
        </div>

        <h4 id="L16-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L16-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[小丽|Xiǎolì|Xiaoli] [每天|měitiān|every day] [早上|zǎoshang|morning] [都|dōu|all] [要|yào|needs to] [先|xiān|first] [去|qù|go to] [公园|gōngyuán|park] [跑|pǎo|run] [两千|liǎngqiān|2000] <span class="blank-input"><input type="text" data-ans="米"></span>，[再|zài|then] <span class="blank-input"><input type="text" data-ans="来"></span> [公司|gōngsī|company] [上班。|shàngbān.|work.]</div>
          <div class="zh" style="margin-top:6px;">[米|mǐ|meter]　[来|lái|come]</div>
          <div class="sent-en">Xiaoli runs 2000 meters in the park before coming to work every morning.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[米|mǐ|(as in 千米 “kilometer”)]、[来|lái|come]</div>
        </div>
        <div class="write-item" id="L16-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[周秘书，|Zhōu mìshū,|Secretary Zhou,] <span class="blank-input"><input type="text" data-ans="如"></span> [果|guǒ|fruit] [白|Bái|Bai] [小|xiǎo|little] <span class="blank-input"><input type="text" data-ans="姐"></span> [回来|huílái|comes back] [了，|le,|,] [请|qǐng|please] [你|nǐ|you] [让|ràng|let] [她|tā|her] [给|gěi|to] [我|wǒ|me] [打个|dǎ ge|make a] [电话。|diànhuà.|call.]</div>
          <div class="zh" style="margin-top:6px;">[如|rú|if]　[姐|jiě|sister]</div>
          <div class="sent-en">Secretary Zhou, if Miss Bai comes back, please have her call me.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[如|rú|(as in 如果 “if”)]、[姐|jiě|(as in 姐姐 “sister”)]</div>
        </div>
        <div class="write-item" id="L16-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[这儿|zhèr|here] [附|fù|near] <span class="blank-input"><input type="text" data-ans="近"></span> [有个|yǒu ge|there is a] [超市，|chāoshì,|supermarket,] [我们|wǒmen|we] [进去|jìnqù|go in] [买|mǎi|buy] [几|jǐ|a few] <span class="blank-input"><input type="text" data-ans="斤"></span> [水果|shuǐguǒ|fruit] [吧。|ba.|(suggestion)]</div>
          <div class="zh" style="margin-top:6px;">[近|jìn|near]　[斤|jīn|jin]</div>
          <div class="sent-en">There's a supermarket nearby — let's go in and buy a few jin of fruit.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[近|jìn|(as in 最近 “recently”)]、[斤|jīn|(as in 公斤 “kilogram”)]</div>
        </div>
        <div class="write-item" id="L16-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[医生|yīshēng|The dentist] [检|jiǎn|check] <span class="blank-input"><input type="text" data-ans="查"></span> [完|wán|after finishing] [我|wǒ|my] [的|de|(possessive)] [牙|yá|teeth] [后，|hòu,|later,] [让|ràng|told] [我|wǒ|me] [少|shǎo|less] [吃|chī|eat] [些|xiē|some] <span class="blank-input"><input type="text" data-ans="香"></span> [蕉、|jiāo,|bananas,] [蛋糕|dàngāo|cake] [这样|zhèyàng|this kind of] [甜|tián|sweet] [的|de|(possessive)] [东西。|dōngxi.|things.]</div>
          <div class="zh" style="margin-top:6px;">[查|chá|check]　[香|xiāng|fragrant]</div>
          <div class="sent-en">After checking my teeth, the dentist told me to eat fewer sweet things like bananas and cake.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[查|chá|(as in 检查 “check”)]、[香|xiāng|(as in 香蕉 “banana”)]</div>
        </div>
        <div class="write-item" id="L16-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[天气|tiānqì|weather] [越来越|yuè lái yuè|more and more] [冷，|lěng,|cold,] [我|wǒ|I] [怕|pà|fear] [你|nǐ|you] [感|gǎn|catch] <span class="blank-input"><input type="text" data-ans="冒"></span>，[所以|suǒyǐ|so] [给|gěi|to] [你|nǐ|you] [买|mǎi|bought] [了|le|(past)] [个|ge|a] <span class="blank-input"><input type="text" data-ans="帽"></span> [子。|zi.|hat.]</div>
          <div class="zh" style="margin-top:6px;">[冒|mào|risk]　[帽|mào|hat]</div>
          <div class="sent-en">The weather is getting colder — I was afraid you'd catch a cold, so I bought you a hat.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[冒|mào|(as in 感冒 “catch a cold”)]、[帽|mào|(as in 帽子 “hat”)]</div>
        </div>

        <h4 id="L16-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L16-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[明|míng|bright] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[明天|míngtiān|tomorrow]、[聪明|cōngming|smart]</div></div>
        </div>
        <div class="write-item" id="L16-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[休|xiū|rest] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[休息|xiūxi|rest]、[休学|xiūxué|suspend schooling]</div></div>
        </div>
        <div class="write-item" id="L16-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[从|cóng|from] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[从来|cónglái|never/always]、[从小|cóngxiǎo|since childhood]</div></div>
        </div>
        <div class="write-item" id="L16-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[看|kàn|look] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[看书|kàn shū|read]、[看见|kànjiàn|see]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L16-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小丽|Xiǎolì|Xiaoli] [认为|rènwéi|thinks] [一个人|yí ge rén|a person] [不能|bùnéng|cannot] [总|zǒng|always] [住在|zhù zài|live in] [同一个|tóng yí ge|the same] <span class="blank-input review-blank"><span class="input-py">chéngshì</span><input type="text" data-ans="城市"></span>，[应该|yīnggāi|should] [去|qù|go to] [其他地方|qítā dìfang|other places] [看看。|kàn kan.|take a look.] [周经理|Zhōu jīnglǐ|Manager Zhou] [年轻时|niánqīng shí|when young] [也|yě|also] [这么|zhème|so] [想，|xiǎng,|thought,] <span class="blank-input review-blank"><span class="input-py">kěshì</span><input type="text" data-ans="可是"></span> [那时候|nà shíhou|at that time] [没有|méiyǒu|didn't have] [钱，|qián,|money,] [他|tā|he] <span class="blank-input review-blank"><span class="input-py">méi</span><input type="text" data-ans="没"></span> [去|qù|go] [旅游|lǚyóu|travel] [了。|le.|(change)] [现在|xiànzài|now] [钱|qián|money] [不|bù|not] [是|shì|is] [问题|wèntí|problem] [了，|le,|,] [但是|dànshì|but] [他|tā|he] [忙|máng|busy] [得|de|(complement)] <span class="blank-input review-blank"><span class="input-py">méi shíjiān</span><input type="text" data-ans="没时间"></span>，[下了班|xià le bān|after work] [就|jiù|then] [想|xiǎng|want to] [睡觉。|shuìjiào.|sleep.]</div>
          <div class="sent-en">Xiaoli thinks a person can't always live in the same city — should go see other places. Manager Zhou thought the same when young, but had no money then and didn't travel. Now money isn't a problem, but he's so busy he has no time — after work he just wants to sleep.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[城市|chéngshì|city]、[可是|kěshì|but]、[没|méi|didn't]、[没时间|méi shíjiān|no time]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小丽|Xiǎolì|Xiaoli] [同事|tóngshì|colleague] [的|de|(possessive)] [女儿|nǚ'ér|daughter] [胖胖|pàngpàng|chubby] [的，|de,|,] <span class="blank-input review-blank"><span class="input-py">yàngzi</span><input type="text" data-ans="样子"></span> [很|hěn|very] [可爱，|kě'ài,|cute,] [现在|xiànzài|now] [已经|yǐjīng|already] [25|èrshíwǔ|25] <span class="blank-input review-blank"><span class="input-py">suì</span><input type="text" data-ans="岁"></span> [了，|le,|,] [快|kuài|almost] [1 米|yī mǐ|1 meter] [了。|le.|(change)] [她|tā|she] [鼻子|bízi|nose] [小小的，|xiǎoxiǎo de,|small,] <span class="blank-input review-blank"><span class="input-py">tóufa</span><input type="text" data-ans="头发"></span> [黑黑|hēihēi|black] [的，|de,|,] [长|zhǎng|grow] [得|de|(complement)] [像|xiàng|like] [爸爸。|bàba.|dad.] [刚|gāng|just] [出生|chūshēng|born] [时|shí|when] [同事|tóngshì|colleague] [的|de|(possessive)] [丈夫|zhàngfu|husband] [一个晚上|yí ge wǎnshang|one whole night] [都|dōu|all] [没|méi|not] [睡着。|shuì zháo.|fall asleep.] [小丽|Xiǎolì|Xiaoli] [给|gěi|to] [她|tā|her] [的|de|(possessive)] [女儿|nǚ'ér|daughter] [买|mǎi|bought] [了|le|(past)] [两件|liǎng jiàn|two] [礼物：|lǐwù:|gifts:] [小|xiǎo|small] <span class="blank-input review-blank"><span class="input-py">píxié</span><input type="text" data-ans="皮鞋"></span> [和|hé|and] [小帽子，|xiǎo màozi,|little hat,] [都|dōu|all] [很|hěn|very] [漂亮。|piàoliang.|pretty.]</div>
          <div class="sent-en">Xiaoli's colleague's daughter is chubby and cute-looking — already 25 years old and almost 1 meter tall. She has a small nose and black hair, looking like her dad. When she was just born, the colleague's husband didn't sleep at all for a whole night. Xiaoli bought her daughter two gifts: little leather shoes and a little hat — both very pretty.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[样子|yàngzi|looks]、[岁|suì|years old]、[头发|tóufa|hair]、[皮鞋|píxié|leather shoes]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[17] = {
  navLabel:'第17课',
  html: `
    <div class="lesson">
      <h2>第 17 课　谁都有办法看好你的“病”
        <span class="title-py">Dì shíqī kè · Shéi dōu yǒu bànfǎ kànhǎo nǐ de “bìng”</span>
        <small>Lesson 17 · Everybody is able to cure your "disease"</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L17-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图17.png" alt="听力图17" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图17.png</b></span>
        </div>

        <div class="q" id="L17-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|your] [的|de|(possessive)] [早饭|zǎofàn|breakfast] [只有|zhǐyǒu|only] [一杯|yì bēi|a cup of] [咖啡|kāfēi|coffee] [和|hé|and] [一小块儿|yì xiǎo kuàir|a small piece of] [蛋糕，|dàngāo,|cake,] [吃|chī|eat] [不|bù|not] [饱。|bǎo.|full.] [要|yào|want] [不要|bú yào|or not] [再|zài|again] [来|lái|have] [一个|yí ge|an] [鸡蛋|jīdàn|egg] [或者|huòzhě|or] [水果？|shuǐguǒ?|fruit?]</div>
          <div class="zh stem">[男：|Nán:|M:] [没|méi|no] [办法，|bànfǎ,|way,] [为了|wèile|in order to] [瘦|shòu|thin] [一点儿，|yìdiǎnr,|a bit,] [我|wǒ|I] [必须|bìxū|must] [少|shǎo|eat less] [吃。|chī.|eat.]</div>
          <div class="sent-en">W: Your breakfast is only a cup of coffee and a small piece of cake — not enough. Want an egg or some fruit?<br>M: No way — to get a bit thinner, I have to eat less.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[一份|yí fèn|a] [早餐|zǎocān|breakfast]）</div>
        </div>
        <div class="q" id="L17-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[男：|Nán:|M:] [雪|xuě|snow] [下|xià|falls] [得|de|(complement)] [真|zhēn|really] [大，|dà,|heavy,] [谁|shéi|who] [都|dōu|even] [没|méi|didn't] [想到|xiǎngdào|expect] [今年|jīnnián|this year] [冬天|dōngtiān|winter] [能|néng|can] [下|xià|fall] [这么|zhème|such] [大|dà|heavy] [的|de|(possessive)] [雪。|xuě.|snow.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是|shì|yes] [啊，|a,|,] [你|nǐ|you] [看|kàn|look] [孩子们|háizimen|children] [玩儿|wánr|play] [得|de|(complement)] [多|duō|how] [高兴。|gāoxìng.|happy.]</div>
          <div class="sent-en">M: It's snowing so heavily — nobody expected such a heavy snow this winter.<br>W: Yeah, look how happily the children are playing.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[孩子们|háizimen|children] [玩雪|wán xuě|playing in the snow]）</div>
        </div>
        <div class="q" id="L17-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[男1：|Nán1:|M1:] [经理，|jīnglǐ,|Manager,] [下个星期|xià ge xīngqī|next week] [我|wǒ|I] [想|xiǎng|want to] [请|qǐng|ask for] [三天|sān tiān|three days] [假，|jià,|leave,] [可以|kěyǐ|may] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男2：|Nán2:|M2:] [这个月|zhège yuè|this month] [你|nǐ|you] [已经|yǐjīng|already] [请|qǐng|asked for] [了|le|(past)] [两个星期|liǎng ge xīngqī|two weeks] [假了，|jià le,|leave,] [不|bù|not] [能|néng|can] [再|zài|again] [请了。|qǐng le.|ask.]</div>
          <div class="sent-en">M1: Manager, I want to ask for three days off next week, may I?<br>M2: You've already taken two weeks off this month — you can't ask for more.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[办公室|bàngōngshì|office] / [请假|qǐng jià|asking for leave]）</div>
        </div>
        <div class="q" id="L17-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你们好，|nǐmen hǎo,|Hello,] [我|wǒ|I] [是|shì|am] [你们|nǐmen|your] [的|de|(possessive)] [新邻居，|xīn línjū,|new neighbor,] [昨天|zuótiān|yesterday] [刚|gāng|just] [搬过来。|bān guòlái.|moved over.] [这|zhè|this] [是|shì|is] [我|wǒ|my] [妻子。|qīzi.|wife.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [欢迎|huānyíng|welcome] [你们！|nǐmen!|you!] [这|zhè|this] [是|shì|is] [我|wǒ|my] [丈夫。|zhàngfu.|husband.] [我们|wǒmen|we] [在|zài|have lived] [这儿|zhèr|here] [住|zhù|lived] [了|le|(past)] [五年|wǔ nián|five years] [了，|le,|,] [对|duì|to] [这儿|zhèr|here] [很|hěn|very] [了解，|liǎojiě,|know well,] [以后|yǐhòu|later] [有|yǒu|if there's] [什么|shénme|any] [问题|wèntí|problem] [都|dōu|all] [可以|kěyǐ|can] [来|lái|come to] [找|zhǎo|find] [我们。|wǒmen.|us.]</div>
          <div class="sent-en">M: Hello, we're your new neighbors — just moved in yesterday. This is my wife.<br>W: Welcome! This is my husband. We've lived here five years and know the area well — if you have any problems, come find us.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[新邻居|xīn línjū|new neighbors] [见面|jiànmiàn|meeting]）</div>
        </div>
        <div class="q" id="L17-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [玩儿了|wánr le|played] [这么|zhème|so] [长时间，|cháng shíjiān,|long,] [我|wǒ|I] [渴|kě|thirsty] [了，|le,|,] [我|wǒ|I] [先|xiān|first] [喝点儿|hē diǎnr|drink some] [水。|shuǐ.|water.] [你|nǐ|you] [不|bù|not] [渴|kě|thirsty] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [不渴，|bù kě,|not thirsty,] [你喝吧，|nǐ hē ba,|you drink,] [我|wǒ|I] [等|děng|wait for] [会儿|huìr|a while] [你。|nǐ.|you.] [喝完|hē wán|after drinking] [了|le|(change)] [我们|wǒmen|we] [去|qù|go to] [前边|qiánbiān|the front] [玩儿。|wánr.|play.]</div>
          <div class="sent-en">W: We've played so long — I'm thirsty. Let me drink some water first. Aren't you thirsty?<br>M: I'm not. You drink — I'll wait for you. After you drink, let's go play in front.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[孩子们|háizimen|children] [玩累|wán lèi|tired from playing] [了|le|(change)] [喝水|hē shuǐ|drinking water]）</div>
        </div>

        <h4 id="L17-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L17-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[明天|míngtiān|tomorrow] [早上|zǎoshang|morning] [请|qǐng|please] [大家|dàjiā|everyone] [8 点|bā diǎn|8 o'clock] [以前|yǐqián|before] [到|dào|arrive at] [公司|gōngsī|company] [会议室，|huìyìshì,|meeting room,] [做好|zuò hǎo|prepare] [开会|kāihuì|meeting] [的|de|(possessive)] [准备。|zhǔnbèi.|preparation.] [明天|míngtiān|tomorrow] [的|de|(possessive)] [会议|huìyì|meeting] [非常|fēicháng|very] [重要，|zhòngyào,|important,] [谁|shéi|whoever] [都|dōu|all] [不|bù|cannot] [能|néng|can] [迟到，|chídào,|be late,] [也|yě|also] [不|bù|not] [能|néng|can] [请假。|qǐngjià.|ask for leave.]</div>
          <div class="sent-en">Everyone please arrive at the company meeting room before 8 tomorrow morning to prepare for the meeting. Tomorrow's meeting is very important — no one can be late or ask for leave.</div>
          <div class="zh stem">★ [明天|míngtiān|Tomorrow] [早上|zǎoshang|morning] [有|yǒu|there is] [一个|yí ge|a] [重要|zhòngyào|important] [的|de|(possessive)] [会议。|huìyì.|meeting.]</div>
          <div class="sent-en">★ There's an important meeting tomorrow morning.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[明天|míngtiān|tomorrow’s] [的|de|(possessive)] [会议|huìyì|meeting] [非常|fēicháng|is very] [重要|zhòngyào|important]」→ [重要|zhòngyào|important] [会议。|huìyì|meeting.]" data-expl-en="'Tomorrow's meeting is very important' — important meeting."></div>
        </div>
        <div class="q" id="L17-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[为了|wèile|To make things] [方便|fāngbiàn|convenient for] [大家，|dàjiā,|everyone,] [楼下|lóuxià|downstairs] [新开|xīn kāi|newly opened] [了|le|(past)] [一家|yì jiā|a] [药店，|yàodiàn,|pharmacy,] [24 小时|èrshísì xiǎoshí|24 hours] [不|bù|not] [休息，|xiūxi,|close,] [什么|shénme|whenever] [时候|shíhou|when] [去|qù|go] [都|dōu|all] [能|néng|can] [买到|mǎi dào|buy] [药，|yào,|medicine,] [几点|jǐ diǎn|what time] [去|qù|go] [看|kàn|look] [都|dōu|all] [有人|yǒu rén|someone] [工作。|gōngzuò.|working.]</div>
          <div class="sent-en">For everyone's convenience, a new pharmacy opened downstairs. It's open 24 hours — you can buy medicine whenever and there's always someone there.</div>
          <div class="zh stem">★ [那家|nà jiā|that] [药店|yàodiàn|pharmacy] [晚上|wǎnshang|evening] [不|bù|cannot] [能|néng|can] [买药。|mǎi yào.|buy medicine.]</div>
          <div class="sent-en">★ That pharmacy can't sell medicine in the evening.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [说|shuō|says it’s] 24 [小时|xiǎoshí|hours] [不|bù|without] [休息，|xiūxi,|closing,] [晚上|wǎnshang|and at night] [也|yě|also] [能|néng|you can] [买药。|mǎi yào|buy medicine.]" data-expl-en="Open 24 hours — can buy medicine at night too."></div>
        </div>
        <div class="q" id="L17-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[我们|wǒmen|we] [在|zài|in] [生活|shēnghuó|life] [中|zhōng|middle] [遇到|yùdào|encounter] [问题|wèntí|problems] [时，|shí,|when,] [不|bù|cannot] [能|néng|can] [什么|shénme|everything] [事情|shìqing|thing] [都|dōu|all] [请|qǐng|ask] [别人|biérén|others] [帮忙，|bāngmáng,|help,] [因为|yīnwèi|because] [有些|yǒuxiē|some] [事情|shìqing|things] [必须|bìxū|must] [要|yào|need to] [自己|zìjǐ|oneself] [来|lái|to] [做|zuò|make] [选择|xuǎnzé|choices] [和|hé|and] [决定。|juédìng.|decisions.]</div>
          <div class="sent-en">When we encounter problems in life, we can't ask others to help with everything, because some things must be decided and chosen by ourselves.</div>
          <div class="zh stem">★ [有|yǒu|When having] [问题|wèntí|problems] [时，|shí,|when,] [我们|wǒmen|we] [应该|yīnggāi|should] [自己|zìjǐ|ourselves] [想|xiǎng|think of] [办法。|bànfǎ.|solutions.]</div>
          <div class="sent-en">★ When we have problems, we should think of solutions ourselves.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[必须|bìxū|must] [自己|zìjǐ|make] [来|lái|(make)] [做|zuò|(make)] [选择|xuǎnzé|choices] [和|hé|and] [决定|juédìng|decisions] [自己|zìjǐ|(yourself)]」→ [自己|zìjǐ|think of] [想办法。|xiǎng bànfǎ|a way yourself.]" data-expl-en="'Must choose and decide by ourselves' — think of solutions ourselves."></div>
        </div>
        <div class="q" id="L17-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[学校|xuéxiào|The school] [这个|zhège|this] [学期|xuéqī|semester] [要|yào|will] [举行|jǔxíng|hold] [一次|yí cì|a] [汉字比赛，|Hànzì bǐsài,|Chinese character competition,] [比赛|bǐsài|competition] [是|shì|is] [根据|gēnjù|according to] [要求|yāoqiú|requirements] [写|xiě|write] [汉字，|Hànzì,|Chinese characters,] [一共|yígòng|in total] [写|xiě|write] [100 个，|yìbǎi ge,|100,] [谁|shéi|whoever] [有|yǒu|has] [兴趣|xìngqù|interest] [都|dōu|all] [可以|kěyǐ|can] [参加。|cānjiā.|participate.]</div>
          <div class="sent-en">The school will hold a Chinese character competition this semester. The competition is writing characters according to requirements — 100 in total. Anyone interested can participate.</div>
          <div class="zh stem">★ [汉字比赛|Hànzì bǐsài|Chinese character competition] [时|shí|when] [写|xiě|write] [什么|shénme|whatever] [都|dōu|all] [可以。|kěyǐ.|is OK.]</div>
          <div class="sent-en">★ During the Chinese character competition, you can write whatever you want.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [说|shuō|says]「[根据|gēnjù|write the characters] [要求|yāoqiú|as required] [写|xiě|(write)] [汉字|Hànzì|(characters)]」，[不是|bú shì|not] [想|xiǎng|writing] [写|xiě|(write)] [什么|shénme|whatever] [就|jiù|(then)] [写|xiě|you want] [什么。|shénme|(whatever).]" data-expl-en="'According to requirements' — not whatever you want."></div>
        </div>
        <div class="q" id="L17-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[大家好，|dàjiā hǎo,|Hello everyone,] [这个|zhège|this] [学期|xuéqī|semester] [我们班|wǒmen bān|our class] [新来了|xīn lái le|newly came] [2 个|liǎng ge|2] [同学，|tóngxué,|classmates,] [一共|yígòng|in total] [21 个|èrshíyī ge|21] [学生。|xuésheng.|students.] [现在，|xiànzài,|Now,] [请|qǐng|please] [新同学|xīn tóngxué|new classmates] [给|gěi|to] [大家|dàjiā|everyone] [介绍介绍|jièshào jièshào|introduce] [自己，|zìjǐ,|themselves,] [大家|dàjiā|everyone] [欢迎。|huānyíng.|welcome.]</div>
          <div class="sent-en">Hello everyone. This semester our class has 2 new students — 21 students in total. Now, please let the new students introduce themselves. Everyone, welcome.</div>
          <div class="zh stem">★ [有|yǒu|There are] [3 个|sān ge|3] [同学|tóngxué|classmates] [要|yào|need to] [介绍|jièshào|introduce] [自己。|zìjǐ.|themselves.]</div>
          <div class="sent-en">★ There are 3 classmates who need to introduce themselves.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[新来了|xīn lái le|Newly came] 2 [个|ge|(MW)] [同学，|tóngxué,|students,] [不是|bú shì|not] 3 [个。|ge|(MW).]" data-expl-en="2 new classmates came, not 3."></div>
        </div>

        <h4 id="L17-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L17-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [不是|bú shì|didn't] [去|qù|go to] [超市|chāoshì|supermarket] [吗？|ma?|(question)] [怎么|zěnme|why] [什么|shénme|nothing] [都|dōu|all] [没|méi|not] [买？|mǎi?|buy?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [在|zài|at] [超市|chāoshì|supermarket] [里|li|inside] [拿了|ná le|picked up] [两瓶|liǎng píng|two bottles of] [牛奶，|niúnǎi,|milk,] [三个|sān ge|three] [面包，|miànbāo,|bread,] [还|hái|also] [拿了|ná le|picked up] [条|tiáo|a] [鱼。|yú.|fish.] [后来|hòulái|later] [发现|fāxiàn|discovered] [没带|méi dài|didn't bring] [钱包，|qiánbāo,|wallet,] [只好|zhǐhǎo|had to] [都|dōu|all] [放回去|fàng huíqù|put back] [了。|le.|(change)]</div>
          <div class="sent-en">M: Didn't you go to the supermarket? Why didn't you buy anything?<br>W: I picked up two bottles of milk, three loaves of bread, and a fish, then discovered I hadn't brought my wallet, so I had to put them all back.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|what did the woman] [买|mǎi|buy] [什么|shénme|(what)] [回来|huílái|and bring back] [了？|le?|?]</div>
          <div class="sent-en">Q: What did the woman buy and bring back?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[两瓶牛奶|liǎng píng niúnǎi|two bottles of milk]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[一条鱼|yì tiáo yú|a fish]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[什么都没买|shénme dōu méi mǎi|bought nothing]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[没带|méi dài|She didn’t bring] [钱包，|qiánbāo,|her wallet,] [什么|shénme|so she] [都|dōu|(all)] [放回|fàng huí|put everything] [去|qù|back] [了，|le,|(change),] [所以|suǒyǐ|so] [什么|shénme|she bought] [都|dōu|(all)] [没|méi|no-] [买。|mǎi|thing.]</div>
        </div>
        <div class="q" id="L17-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [走了|zǒu le|walked] [这么|zhème|so] [长时间，|cháng shíjiān,|long,] [渴|kě|thirsty] [了|le|(change)] [吧？|ba?|(question)] [快|kuài|quickly] [坐下来|zuò xiàlái|sit down] [休息休息，|xiūxi xiūxi,|rest,] [你|nǐ|you] [想|xiǎng|want to] [喝点儿|hē diǎnr|drink some] [什么？|shénme?|what?]</div>
          <div class="zh stem">[男：|Nán:|M:] [喝|hē|drink] [什么|shénme|whatever] [都|dōu|all] [行，|xíng,|OK,] [先|xiān|first] [来杯|lái bēi|bring a cup of] [冰水，|bīng shuǐ,|iced water,] [然后|ránhòu|then] [再|zài|again] [看看|kàn kan|see] [这儿|zhèr|here] [有|yǒu|has] [什么|shénme|what] [好喝|hǎohē|tasty] [的|de|(possessive)] [饮料。|yǐnliào.|drinks.]</div>
          <div class="sent-en">W: We've walked so long — thirsty? Sit down and rest. What would you like to drink?<br>M: Anything's fine. First an iced water, then let's see what tasty drinks they have here.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[口渴|kǒu kě|thirsty]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[什么都不想喝|shénme dōu bù xiǎng hē|doesn't want to drink anything]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不想喝冰水|bù xiǎng hē bīng shuǐ|doesn't want iced water]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[先|xiān|First] [来|lái|bring] [杯|bēi|a glass of] [冰水|bīng shuǐ|iced water]」→ [渴|kě|thirsty] [了。|le|(change)]</div>
        </div>
        <div class="q" id="L17-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[男：|Nán:|M:] [听说|tīngshuō|heard] [你|nǐ|you] [和|hé|and] [丈夫|zhàngfu|husband] [去|qù|went] [旅游|lǚyóu|traveling] [了？|le?|(change)] [去了|qù le|went to] [哪些|nǎxiē|which] [地方？|dìfang?|places?] [怎么样？|zěnmeyàng?|how was it?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我们|wǒmen|we] [打算|dǎsuàn|planned to] [坐|zuò|take] [飞机|fēijī|plane] [去|qù|go to] [国外，|guówài,|abroad,] [找个|zhǎo ge|find a] [安静|ānjìng|quiet] [的|de|(possessive)] [城市，|chéngshì,|city,] [好好儿|hǎohāor|well] [休息休息，|xiūxi xiūxi,|rest,] [后来|hòulái|later] [儿子|érzi|son] [生病|shēngbìng|got sick] [了，|le,|,] [为了|wèile|in order to] [照顾|zhàogù|take care of] [他，|tā,|him,] [哪儿|nǎr|nowhere] [都|dōu|all] [没|méi|didn't] [去。|qù.|go.]</div>
          <div class="sent-en">M: I heard you and your husband went traveling? Where did you go? How was it?<br>W: We planned to fly abroad, find a quiet city, and rest well. Then my son got sick — to take care of him, we didn't go anywhere.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|where did the woman] [去|qù|go] [哪儿|nǎr|(where)] [旅游|lǚyóu|travel] [了？|le?|?]</div>
          <div class="sent-en">Q: Where did the woman go traveling?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[国外|guówài|abroad]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[很多城市|hěnduō chéngshì|many cities]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[什么地方都没去|shénme dìfang dōu méi qù|went nowhere]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[哪儿|nǎr|nowhere] [都|dōu|(all)] [没|méi|didn’t] [去|qù|go]」。</div>
        </div>
        <div class="q" id="L17-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [冬冬，|Dōngdong,|Dongdong,] [你|nǐ|you] [怎么|zěnme|why] [这么|zhème|so] [快|kuài|fast] [就|jiù|then] [考完|kǎo wán|finished the exam] [了？|le?|(change)] [做完题|zuò wán tí|after finishing questions] [应该|yīnggāi|should] [检查检查，|jiǎnchá jiǎnchá,|check over,] [看看|kàn kan|see] [有没有|yǒu méiyǒu|if there are] [写错|xiě cuò|written wrong] [的|de|(possessive)] [字。|zì.|characters.]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [已经|yǐjīng|already] [检查过|jiǎnchá guò|checked] [了，|le,|,] [今天|jīntiān|today] [的|de|(possessive)] [考试题|kǎoshì tí|exam questions] [特别|tèbié|especially] [简单，|jiǎndān,|simple,] [所以|suǒyǐ|so] [很快|hěn kuài|very quickly] [就|jiù|then] [做完|zuò wán|finished] [了。|le.|(change)]</div>
          <div class="sent-en">W: Dongdong, how did you finish so fast? After finishing you should check for wrong characters.<br>M: I already checked — today's exam questions were especially easy, so I finished quickly.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [冬冬，|Dōngdong,|Dongdong,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about Dongdong?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[觉得考试不容易|juéde kǎoshì bù róngyì|finds the exam hard]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[写得很慢|xiě de hěn màn|writes slowly]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[题都检查过了|tí dōu jiǎnchá guò le|has checked all questions]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[我|wǒ|I] [已经|yǐjīng|already] [检查|jiǎnchá|checked] [过|guò|(experience)] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L17-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [昨天|zuótiān|yesterday] [跑完步|pǎo wán bù|after running] [以后|yǐhòu|later] [就|jiù|then] [一直|yìzhí|always] [腿疼，|tuǐ téng,|leg hurts,] [请|qǐng|please] [您|nín|you] [帮|bāng|help] [我|wǒ|me] [检查检查，|jiǎnchá jiǎnchá,|check,] [看看|kàn kan|see] [用|yòng|need] [不|bù|not] [用|yòng|need] [吃点儿|chī diǎnr|take some] [药。|yào.|medicine.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [太久|tài jiǔ|too long] [没|méi|haven't] [运动|yùndòng|exercised] [了，|le,|,] [所以|suǒyǐ|so] [腿疼。|tuǐ téng.|leg hurts.] [以后|yǐhòu|From now on] [多|duō|more] [出去|chūqù|go out] [运动运动，|yùndòng yùndòng,|exercise,] [不用|búyòng|no need to] [吃药。|chī yào.|take medicine.]</div>
          <div class="sent-en">M: After running yesterday my leg has been hurting — please check and see if I need medicine.<br>W: You haven't exercised for too long, so your leg hurts. Exercise more from now on — no medicine needed.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|what relationship] [可能|kěnéng|might] [是|shì|(is)] [什么|shénme|(what)] [关系？|guānxi?|(relationship)?]</div>
          <div class="sent-en">Q: What relationship might they have?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[经理和秘书|jīnglǐ hé mìshū|manager and secretary]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[医生和病人|yīshēng hé bìngrén|doctor and patient]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[丈夫和妻子|zhàngfu hé qīzi|husband and wife]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[女的|nǚde|The woman] [说|shuō|says]「[不用|búyòng|no need to] [吃药，|chī yào,|take medicine,] [多|duō|just] [运动|yùndòng|exercise more]」→ [不太|bú tài|not really] [像|xiàng|like] [医生，|yīshēng,|a doctor,] [更|gèng|but] [像|xiàng|more like] [妻子。|qīzi|a wife.]</div>
        </div>

        <h4 id="L17-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L17-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[男：|Nán:|M:] [老师，|lǎoshī,|Teacher,] [我|wǒ|I] [可以|kěyǐ|may] [请|qǐng|ask for] [几天|jǐ tiān|a few days] [假吗？|jià ma?|leave?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [小雨，|Xiǎoyǔ,|Xiaoyu,] [你|nǐ|you] [看看，|kàn kan,|look,] [这个|zhège|this] [学期|xuéqī|semester] [你|nǐ|you] [都|dōu|all] [请了|qǐng le|asked for] [几次|jǐ cì|how many times] [假了？|jià le?|leave?]</div>
          <div class="zh stem">[男：|Nán:|M:] [老师，|lǎoshī,|Teacher,] [对不起，|duìbuqǐ,|sorry,] [上个月|shàng ge yuè|last month] [是|shì|was] [我妈妈|wǒ māma|my mom] [来|lái|came to] [北京，|Běijīng,|Beijing,] [我|wǒ|I] [带|dài|took] [她|tā|her] [在|zài|in] [中国|Zhōngguó|China] [旅游，|lǚyóu,|traveling,] [然后|ránhòu|then] [是|shì|it was] [我姐姐|wǒ jiějie|my sister] [来，|lái,|coming,] [前几天|qián jǐ tiān|a few days ago] [是|shì|it was] [我|wǒ|I] [病|bìng|sick] [了，|le,|,] [下个星期|xià ge xīngqī|next week] [我女朋友|wǒ nǚpéngyou|my girlfriend] [要|yào|is going to] [来看|lái kàn|come see] [我。|wǒ.|me.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [小雨，|Xiǎoyǔ,|Xiaoyu,] [如果|rúguǒ|if] [你|nǐ|you] [再|zài|again] [不|bù|not] [来|lái|come to] [上课，|shàngkè,|class,] [就|jiù|then] [什么|shénme|nothing] [都|dōu|all] [听不|tīng bu|can't hear] [懂|dǒng|understand] [了。|le.|(change)]</div>
          <div class="sent-en">M: Teacher, may I ask for a few days off?<br>W: Xiaoyu, look — how many times have you asked for leave this semester?<br>M: Teacher, sorry. Last month my mom came to Beijing and I took her traveling; then my sister came; a few days ago I was sick; next week my girlfriend is coming to see me.<br>W: Xiaoyu, if you don't come to class again, you won't understand anything.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[经常不来上课|jīngcháng bù lái shàngkè|often doesn't come to class]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[什么都听得懂|shénme dōu tīng de dǒng|understands everything]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[没请过假|méi qǐng guò jià|hasn't asked for leave]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[这个|zhège|this] [学期|xuéqī|semester] [你|nǐ|you] [都|dōu|have] [请|qǐng|asked for] [了|le|(past)] [几次|jǐ cì|how many times] [假|jià|leave] [了？|le?|?]」→ [经常|jīngcháng|often] [不|bù|doesn’t] [来|lái|come to] [上课。|shàngkè|class.]</div>
        </div>
        <div class="q" id="L17-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [在|zài|are] [听|tīng|listening to] [新闻？|xīnwén?|news?] [太阳|tàiyáng|sun] [从|cóng|from] [西边|xībiān|west] [出来|chūlái|came out] [了？|le?|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [对|duì|to] [新闻|xīnwén|news] [没|méi|no] [兴趣，|xìngqù,|interest,] [主要|zhǔyào|mainly] [是|shì|is] [想|xiǎng|want to] [提高提高|tígāo tígāo|improve] [我|wǒ|my] [的|de|(possessive)] [汉语|Hànyǔ|Chinese] [水平。|shuǐpíng.|level.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [一个|yí ge|a whole] [学期|xuéqī|semester] [都|dōu|all] [没|méi|not] [认真|rènzhēn|seriously] [学习|xuéxí|studied] [了，|le,|,] [现在|xiànzài|now] [才|cái|only then] [开始|kāishǐ|start] [努力？|nǔlì?|work hard?]</div>
          <div class="zh stem">[男：|Nán:|M:] [明天|míngtiān|tomorrow] [就要|jiù yào|is about to] [考试|kǎoshì|take an exam] [了，|le,|,] [我|wǒ|I] [要|yào|need to] [复习复习。|fùxí fùxí.|review.]</div>
          <div class="sent-en">W: You're listening to the news? The sun rose from the west?<br>M: I'm not interested in news — mainly I want to improve my Chinese.<br>W: You haven't studied seriously all semester — only now working hard?<br>M: The exam is tomorrow — I need to review.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|why does the man] [为什么|wèishénme|(why)] [听|tīng|listen to] [新闻？|xīnwén?|the news?]</div>
          <div class="sent-en">Q: Why does the man listen to the news?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[天气很好|tiānqì hěn hǎo|the weather is nice]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[喜欢新闻|xǐhuan xīnwén|likes news]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[准备考试|zhǔnbèi kǎoshì|preparing for an exam]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[明天|míngtiān|Tomorrow] [就要|jiù yào|(about to)] [考试|kǎoshì|take an exam] [了，|le,|(change),] [我|wǒ|I] [要|yào|need to] [复习|fùxí|review] [复习|fùxí|(review)]」。</div>
        </div>
        <div class="q" id="L17-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [有点儿|yǒudiǎnr|a bit] [饿|è|hungry] [了，|le,|,] [我们|wǒmen|we] [出去|chūqù|go out] [找个|zhǎo ge|find a] [人少|rén shǎo|fewer people] [点儿的|diǎnr de|a bit] [饭馆|fànguǎn|restaurant] [吃饭|chīfàn|eat] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [这个|zhège|this] [时间，|shíjiān,|time,] [哪个|nǎ ge|which] [饭馆|fànguǎn|restaurant] [人|rén|people] [都|dōu|all] [多，|duō,|many,] [我们|wǒmen|we] [在家|zài jiā|at home] [吃|chī|eat] [吧，|ba,|,] [自己|zìjǐ|ourselves] [做。|zuò.|cook.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好，|hǎo,|OK,] [家里|jiā li|home] [有鱼，|yǒu yú,|has fish,] [有鸡蛋，|yǒu jīdàn,|eggs,] [还有|háiyǒu|also] [牛肉。|niúròu.|beef.] [牛肉|niúròu|Beef] [你|nǐ|you] [想|xiǎng|want to] [怎么|zěnme|how] [吃？|chī?|eat?] [跟|gēn|with] [鸡蛋|jīdàn|eggs] [一起|yìqǐ|together] [做|zuò|cook] [还是|háishi|or] [跟|gēn|with] [别的|biéde|other] [菜|cài|dishes] [一起|yìqǐ|together] [做？|zuò?|cook?]</div>
          <div class="zh stem">[男：|Nán:|M:] [怎么|zěnme|however] [做|zuò|cook] [都|dōu|all] [行，|xíng,|OK,] [我|wǒ|I] [什么|shénme|everything] [都|dōu|all] [爱|ài|love] [吃。|chī.|eat.] [需要|xūyào|need] [我|wǒ|me] [帮忙|bāngmáng|help] [吗？|ma?|(question)]</div>
          <div class="sent-en">W: I'm a bit hungry — let's go out and find a restaurant with fewer people.<br>M: At this time every restaurant is crowded. Let's eat at home and cook ourselves.<br>W: OK. We have fish, eggs, and beef at home. How do you want the beef — with eggs or with other vegetables?<br>M: However is fine — I love everything. Need my help?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[想去饭馆吃|xiǎng qù fànguǎn chī|wants to eat at a restaurant]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不想吃牛肉|bù xiǎng chī niúròu|doesn't want beef]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[什么都喜欢吃|shénme dōu xǐhuan chī|likes everything]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[我|wǒ|I] [什么|shénme|(what)] [都|dōu|(all)] [爱|ài|love] [吃|chī|to eat]」。</div>
        </div>
        <div class="q" id="L17-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [在|zài|in] [国外|guówài|abroad] [留学|líuxué|studying] [这几年|zhè jǐ nián|these years] [怎么样？|zěnmeyàng?|how was it?] [那里|nàli|there] [的|de|(possessive)] [生活|shēnghuó|life] [习惯|xíguàn|used to] [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [那个|nàge|that] [地方|dìfang|place] [的|de|(possessive)] [人|rén|people] [很|hěn|very] [热情，|rèqíng,|warm,] [学习|xuéxí|study] [环境|huánjìng|environment] [也|yě|also] [不错，|búcuò,|is good,] [学校|xuéxiào|school] [里|li|inside] [有|yǒu|has] [两个|liǎng ge|two] [图书馆。|túshūguǎn.|libraries.] [但是|dànshì|but] [天气|tiānqì|weather] [我|wǒ|I] [还|hái|still] [不|bù|not] [太|tài|quite] [习惯。|xíguàn.|used to.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [怎么？|zěnme?|Why?] [那儿|nàr|there] [的|de|(possessive)] [天气|tiānqì|weather] [跟|gēn|with] [我们|wǒmen|us] [这儿|zhèr|here] [不|bù|not] [一样|yíyàng|the same] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [冬天|dōngtiān|Winter] [特别|tèbié|especially] [长，|cháng,|long,] [从|cóng|from] [11 月|shíyī yuè|November] [到|dào|to] [第二年|dì èr nián|the following year] [3 月|sān yuè|March] [都|dōu|all] [比较|bǐjiào|relatively] [冷。|lěng.|cold.] [下大雪|xià dàxuě|When it snows heavily] [的|de|(possessive)] [时候，|shíhou,|when,] [哪儿|nǎr|nowhere] [都|dōu|all] [不|bù|cannot] [能|néng|can] [去，|qù,|go,] [只能|zhǐnéng|can only] [在|zài|in] [房间|fángjiān|room] [里|li|inside] [看书。|kàn shū.|read.]</div>
          <div class="sent-en">W: How was studying abroad these years? Did you get used to life there?<br>M: The people there are warm, the study environment is nice, the school has two libraries. But I'm still not quite used to the weather.<br>W: Why? Is the weather there different from here?<br>M: Winter is especially long — from November to March it's relatively cold. When it snows heavily, you can't go anywhere — can only read in the room.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[喜欢那里的冬天|xǐhuan nàli de dōngtiān|likes the winter there]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不喜欢那里的学习环境|bù xǐhuan nàli de xuéxí huánjìng|doesn't like the study environment]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[不习惯那里的天气|bù xíguàn nàli de tiānqì|not used to the weather there]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[天气|tiānqì|The weather] [我|wǒ|I] [还|hái|still] [不太|bú tài|not quite] [习惯|xíguàn|used to]」。</div>
        </div>
        <div class="q" id="L17-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [在|zài|on] [椅子|yǐzi|chair] [上|shàng|on] [坐|zuò|sat] [了|le|(past)] [一个|yí ge|a] [多|duō|more than] [小时|xiǎoshí|hour] [了，|le,|,] [一句话|yí jù huà|not a word] [都|dōu|even] [不|bù|not] [说，|shuō,|say,] [怎么|zěnme|what's wrong] [了？|le?|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [上了|shàng le|taught] [一天|yì tiān|a whole day] [课，|kè,|class,] [给|gěi|to] [学生|xuéshēng|students] [讲|jiǎng|teach] [中国|Zhōngguó|Chinese] [历史，|lìshǐ,|history,] [现在|xiànzài|now] [什么|shénme|nothing] [都|dōu|all] [不|bù|not] [想说。|xiǎng shuō.|want to say.]</div>
          <div class="zh stem">[男：|Nán:|M:] [那|nà|then] [你|nǐ|you] [先|xiān|first] [休息休息，|xiūxi xiūxi,|rest,] [一会儿|yíhuìr|in a moment] [我|wǒ|I] [带|dài|take] [你|nǐ|you] [出去|chūqù|go out] [吃饭。|chīfàn.|eat.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [现在|xiànzài|now] [哪儿|nǎr|nowhere] [都|dōu|all] [不|bù|not] [想|xiǎng|want to] [去，|qù,|go,] [就|jiù|just] [想|xiǎng|want to] [在|zài|at] [家|jiā|home] [睡觉。|shuìjiào.|sleep.] [我们|wǒmen|we] [晚点儿|wǎn diǎnr|a bit later] [再|zài|again] [吃饭|chīfàn|eat] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: You've sat in the chair for over an hour without saying a word — what's wrong?<br>W: I taught all day, teaching students Chinese history — now I don't want to say anything.<br>M: Then rest a while — in a moment I'll take you out to eat.<br>W: I don't want to go anywhere — I just want to sleep at home. Let's eat a bit later.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[坐着上课|zuò zhe shàngkè|teaches sitting down]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[是老师|shì lǎoshī|is a teacher]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[什么地方都想去|shénme dìfang dōu xiǎng qù|wants to go everywhere]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[给|gěi|To] [学生|xuéshēng|students] [讲|jiǎng|teach] [中国历史|Zhōngguó lìshǐ|Chinese history]」→ [是|shì|is] [老师。|lǎoshī|a teacher.]</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L17-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L17-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[你|nǐ|you] [几点|jǐ diǎn|what time] [来|lái|come] [都|dōu|all] [可以，|kěyǐ,|OK,] [明天|míngtiān|tomorrow] [上午|shàngwǔ|morning] [我|wǒ|I] [不忙。|bù máng.|not busy.]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[这次|zhè cì|this time] [是|shì|is] [我叔叔|wǒ shūshu|my uncle] [病|bìng|sick] [了，|le,|,] [我|wǒ|I] [要|yào|need to] [去|qù|go to] [医院|yīyuàn|hospital] [照顾|zhàogù|take care of] [他。|tā.|him.]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[月月，|Yuèyue,|Yueyue,] [你|nǐ|you] [有|yǒu|have] [什么|shénme|what] [爱好？|àihào?|hobbies?] [喜欢|xǐhuan|like] [音乐|yīnyuè|music] [还是|háishi|or] [画画儿？|huà huàr?|drawing?]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[今晚|jīnwǎn|tonight] [吃|chī|ate] [得|de|(complement)] [太饱|tài bǎo|too full] [了，|le,|,] [吃|chī|ate] [了|le|(past)] [很多|hěnduō|much] [米饭，|mǐfàn,|rice,] [饭后|fànhòu|after dinner] [还|hái|also] [吃|chī|ate] [了|le|(past)] [三块|sān kuài|three pieces of] [西瓜。|xīguā.|watermelon.]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[那儿|nàr|there] [一年四季|yì nián sì jì|all year round] [都|dōu|all] [像|xiàng|like] [春天|chūntiān|spring] [一样，|yíyàng,|the same,] [哪个|nǎ ge|which] [季节|jìjié|season] [去|qù|go] [都|dōu|all] [很|hěn|very] [舒服。|shūfu.|comfortable.]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [去|qù|go] [那儿|nàr|there] [吗？|ma?|(question)] （E）</div>
          <div class="sent-en">Do you know how to get there? — (E) Of course. We take the bus first, then transfer to the subway.</div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L17-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[周经理，|Zhōu jīnglǐ,|Manager Zhou,] [明天|míngtiān|tomorrow] [上午|shàngwǔ|morning] [您|nín|you] [什么时候|shénme shíhou|when] [方便？|fāngbiàn?|convenient?] （<span class="blank">　</span>）</div>
          <div class="sent-en">Manager Zhou, when are you free tomorrow morning?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L17-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[我|wǒ|I] [也|yě|also] [没|méi|didn't] [少|shǎo|eat less] [吃，|chī,|,] [我们|wǒmen|we] [出去|chūqù|go out] [走走，|zǒu zou,|walk,] [运动运动|yùndòng yùndòng|exercise] [吧。|ba.|(suggestion)] （<span class="blank">　</span>）</div>
          <div class="sent-en">I ate a lot too — let's go out for a walk and exercise.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L17-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[什么时候|shénme shíhou|When] [去|qù|go to] [那个|nàge|that] [城市|chéngshì|city] [旅游|lǚyóu|travel] [比较|bǐjiào|relatively] [好？|hǎo?|good?] （<span class="blank">　</span>）</div>
          <div class="sent-en">When is a good time to travel to that city?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L17-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[听说|tīngshuō|heard] [你|nǐ|you] [又|yòu|again] [去|qù|went to] [跟|gēn|with] [经理|jīnglǐ|manager] [请假|qǐngjià|ask for leave] [了？|le?|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">I heard you went to ask the manager for leave again?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L17-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[我的|wǒ de|My] [爱好|àihào|hobbies] [很多，|hěnduō,|are many,] [对|duì|to] [什么|shénme|everything] [都|dōu|all] [很|hěn|very] [感兴趣。|gǎn xìngqù.|interested.] （<span class="blank">　</span>）</div>
          <div class="sent-en">I have many hobbies — I'm interested in everything.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L17-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L17-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[办法|bànfǎ|way]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[一共|yígòng|in total]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[决定|juédìng|decide]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[渴|kě|thirsty]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[选择|xuǎnzé|choose]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[她|tā|she] [说话|shuōhuà|speaks] [的|de|(possessive)] （E [声音|shēngyīn|voice]） [多|duō|how] [好听|hǎotīng|nice] [啊！|a!|!]</div>
          <div class="sent-en">Her voice is so nice!</div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L17-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[我|wǒ|I] （<span class="blank">　</span>） [找个|zhǎo ge|find a] [老师，|lǎoshī,|teacher,] [下课|xià kè|after class] [以后|yǐhòu|later] [帮|bāng|help] [我|wǒ|me] [练习练习|liànxí liànxí|practice] [汉语。|Hànyǔ.|Chinese.]</div>
          <div class="sent-en">I've decided to find a teacher to practice Chinese with after class.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L17-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[不是|bú shì|Not] [什么|shénme|every] [时间|shíjiān|time] [锻炼|duànliàn|exercising] [身体|shēntǐ|body] [都|dōu|all] [好，|hǎo,|good,] [必须|bìxū|must] （<span class="blank">　</span>） [“对”|“duì”|"right"] [的|de|(possessive)] [时间。|shíjiān.|time.]</div>
          <div class="sent-en">Not every time is good for exercising — you must choose the "right" time.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L17-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[我|wǒ|I] [买了|mǎi le|bought] [两双|liǎng shuāng|two pairs of] [皮鞋，|píxié,|leather shoes,] [三条|sān tiáo|three pairs of] [裤子，|kùzi,|trousers,] （<span class="blank">　</span>） [是|shì|is] [一千块。|yìqiān kuài.|1000 yuan.]</div>
          <div class="sent-en">I bought two pairs of leather shoes and three pairs of trousers — 1000 yuan in total.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L17-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [你|nǐ|you] [怎么|zěnme|why] [总是|zǒngshì|always] [这么|zhème|so] [瘦，|shòu,|thin,] [你|nǐ|you] [有|yǒu|have] [什么|shénme|what] [好|hǎo|good] （<span class="blank">　</span>） [吗？|ma?|(question)]</div>
          <div class="zh">[B：|B:|B:] [我|wǒ|I] [也|yě|also] [不|bù|not] [知道，|zhīdào,|know,] [其实|qíshí|actually] [我|wǒ|I] [吃|chī|ate] [得|de|(complement)] [不少。|bùshǎo.|quite a lot.]</div>
          <div class="sent-en">A: Why are you always so thin? Do you have any good method?<br>B: I don't know either — actually I eat quite a lot.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L17-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [我|wǒ|I] [太|tài|too] （<span class="blank">　</span>） [了，|le,|,] [快|kuài|quickly] [把|bǎ|(BA)] [饮料|yǐnliào|drink] [给|gěi|to] [我。|wǒ.|me.]</div>
          <div class="zh">[B：|B:|B:] [运动|yùndòng|exercise] [以后|yǐhòu|after] [不|bù|not] [能|néng|can] [马上|mǎshàng|immediately] [喝水，|hē shuǐ,|drink water,] [你|nǐ|you] [休息|xiūxi|rest] [一会儿|yíhuìr|a while] [再|zài|then] [喝|hē|drink] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">A: I'm so thirsty — give me the drink quickly.<br>B: After exercising you can't drink water right away — rest a bit first.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L17-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L17-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[我|wǒ|I] [刚来|gāng lái|just came to] [这儿|zhèr|here] [工作|gōngzuò|work] [的|de|(possessive)] [时候，|shíhou,|when,] [谁|shéi|no one] [都|dōu|all] [不|bù|not] [认识，|rènshi,|knew,] [哪儿|nǎr|nowhere] [都|dōu|all] [不|bù|not] [了解。|liǎojiě.|understood.] [每天|měitiān|every day] [一个人|yí ge rén|alone] [上班，|shàngbān,|went to work,] [一个人|yí ge rén|alone] [回家，|huí jiā,|went home,] [周末|zhōumò|weekends] [哪儿|nǎr|nowhere] [也|yě|also] [不|bù|not] [去。|qù.|went.] [现在|xiànzài|now] [不一样了，|bù yíyàng le,|it's different,] [我|wǒ|I] [和|hé|and] [公司|gōngsī|company] [的|de|(possessive)] [同事|tóngshì|colleagues] [经常|jīngcháng|often] [一起|yìqǐ|together] [开车|kāichē|drive] [出去|chūqù|out] [玩儿，|wánr,|to play,] [下了班|xià le bān|after work] [还|hái|also] [一起去|yìqǐ qù|go together to] [体育馆|tǐyùguǎn|gym] [运动运动，|yùndòng yùndòng,|exercise,] [每天|měitiān|every day] [都|dōu|all] [特别|tèbié|especially] [开心。|kāixīn.|happy.]</div>
          <div class="sent-en">When I first came here to work, I knew no one and understood nothing. Every day I went to work alone, went home alone, and on weekends went nowhere. Now it's different — I often drive out with company colleagues, and after work we go to the gym together. Every day is especially happy.</div>
          <div class="zh ask">★ [我|wǒ|I] [以前：|yǐqián:|used to:]</div>
          <div class="sent-en">★ I used to: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[认识很多人|rènshi hěnduō rén|knew many people]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[经常出去玩儿|jīngcháng chūqù wánr|often went out to play]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[对这个地方不太了解|duì zhège dìfang bú tài liǎojiě|didn't know this place well]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[哪儿|nǎr|knew nothing] [都|dōu|(all)] [不|bù|not] [了解|liǎojiě|about anywhere]」。</div>
        </div>
        <div class="q" id="L17-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[考|kǎo|Taking] [大学|dàxué|university] [时，|shí,|when,] [很多|hěnduō|many] [学生|xuéshēng|students] [都|dōu|all] [不|bù|not] [知道|zhīdào|know] [自己|zìjǐ|themselves] [要|yào|should] [上|shàng|attend] [哪个|nǎ ge|which] [大学。|dàxué.|university.] [他们|tāmen|they] [经常|jīngcháng|often] [看|kàn|look at] [别人|biérén|others] [选|xuǎn|choose] [什么，|shénme,|what,] [自己|zìjǐ|themselves] [就|jiù|then] [选|xuǎn|choose] [什么。|shénme.|what.] [其实，|qíshí,|Actually,] [要|yào|should] [根据|gēnjù|according to] [自己|zìjǐ|own] [的|de|(possessive)] [兴趣|xìngqù|interests] [和|hé|and] [爱好|àihào|hobbies] [选择|xuǎnzé|choose] [大学|dàxué|university] [和|hé|and] [学|xué|study] [什么，|shénme,|what,] [谁|shéi|no one] [都|dōu|all] [不|bù|cannot] [能|néng|can] [帮|bāng|help] [你|nǐ|you] [做|zuò|make] [决定，|juédìng,|decisions,] [因为|yīnwèi|because] [没有|méiyǒu|no] [人|rén|one] [比|bǐ|than] [你|nǐ|you] [更|gèng|more] [了解|liǎojiě|understand] [自己。|zìjǐ.|yourself.]</div>
          <div class="sent-en">When applying to university, many students don't know which university they want to attend. They often see what others choose and choose the same. Actually, you should choose university and major based on your own interests and hobbies — no one can decide for you, because no one understands you better than yourself.</div>
          <div class="zh ask">★ [选择|xuǎnzé|Choosing] [大学：|dàxué:|a university:]</div>
          <div class="sent-en">★ Choosing a university: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[要根据兴趣|yào gēnjù xìngqù|should be based on interests]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[要看别人怎么做|yào kàn biérén zěnme zuò|should see what others do]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[要请爸爸妈妈决定|yào qǐng bàba māma juédìng|should ask parents to decide]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[要|yào|You should] [根据|gēnjù|choose] [自己|zìjǐ|based on] [的|de|(possessive)] [兴趣|xìngqù|interests] [和|hé|and] [爱好|àihào|hobbies] [选择|xuǎnzé|(choose)] [大学|dàxué|a university]」。</div>
        </div>
        <div class="q" id="L17-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[我|wǒ|my] [三岁|sān suì|three-year-old] [大|dà|old] [的|de|(possessive)] [女儿|nǚ'ér|daughter] [走到|zǒu dào|walks to] [哪儿|nǎr|wherever] [都|dōu|all] [要|yào|wants to] [带着|dài zhe|carry] [一本|yì běn|a] [叫|jiào|called] [《小狗笑笑》|“Xiǎogǒu Xiàoxiao”|"Puppy Xiaoxiao"] [的|de|(possessive)] [故事书，|gùshishū,|storybook,] [看见|kànjiàn|seeing] [谁|shéi|whoever] [都|dōu|all] [要|yào|wants to] [讲讲|jiǎng jiang|tell] [书里|shū li|in the book] [的|de|(possessive)] [故事。|gùshi.|story.] [虽然|suīrán|although] [书|shū|book] [上|shàng|on] [的|de|(possessive)] [字|zì|characters] [她|tā|she] [还|hái|still] [不|bù|not] [能|néng|can] [都|dōu|all] [看懂，|kàn dǒng,|understand,] [但是|dànshì|but] [经常|jīngcháng|often] [看着|kàn zhe|looking at] [画儿|huàr|pictures] [讲|jiǎng|tells] [给|gěi|to] [我|wǒ|me] [听。|tīng.|listen.] [现在，|xiànzài,|Now,] [我|wǒ|I] [也|yě|also] [很|hěn|very] [喜欢|xǐhuan|like] [笑笑，|Xiàoxiao,|Xiaoxiao,] [它|tā|it] [长|zhǎng|grow] [得|de|(complement)] [可爱|kě'ài|cute] [极|jí|extremely] [了，|le,|,] [谁|shéi|whoever] [见|jiàn|sees] [了|le|(past)] [它|tā|it] [都|dōu|all] [喜欢。|xǐhuan.|likes.]</div>
          <div class="sent-en">My three-year-old daughter carries a storybook called "Puppy Xiaoxiao" wherever she goes. She wants to tell the story to whoever she sees. Although she can't understand all the characters yet, she often tells me the story while looking at the pictures. Now I also like Xiaoxiao — it's extremely cute; everyone who sees it likes it.</div>
          <div class="zh ask">★ [我|wǒ|My] [女儿：|nǚ’ér:|daughter:]</div>
          <div class="sent-en">★ My daughter: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[喜爱《小狗笑笑》|xǐ'ài “Xiǎogǒu Xiàoxiao”|loves "Puppy Xiaoxiao"]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[只给妈妈讲故事|zhǐ gěi māma jiǎng gùshi|only tells Mom stories]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不认识字|bú rènshi zì|doesn't know characters]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[走|zǒu|She takes this book] [到|dào|wherever] [哪儿|nǎr|(wherever)] [都|dōu|(all)] [带|dài|she goes] [着|zhe|(progressive)] [这本书|zhè běn shū|(this book)] → [喜爱|xǐ’ài|loves] [它。|tā|it.]</div>
        </div>
        <div class="q" id="L17-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[谁|shéi|Everyone] [都|dōu|all] [知道|zhīdào|knows] [健康|jiànkāng|health] [很|hěn|very] [重要，|zhòngyào,|important,] [怎么|zěnme|how] [吃|chī|eat] [最|zuì|most] [健康|jiànkāng|healthily] [呢？|ne?|(question)] [中国|Zhōngguó|China] [有句话|yǒu jù huà|has a saying] [叫|jiào|called] [“早吃好，|“zǎo chī hǎo,|"eat well in the morning,] [午吃饱，|wǔ chī bǎo,|eat full at noon,] [晚吃少”。|wǎn chī shǎo”.|eat little in the evening".] [早饭|zǎofàn|Breakfast] [后|hòu|after] [人们|rénmen|people] [开始|kāishǐ|start] [一天|yì tiān|a day] [的|de|(possessive)] [学习|xuéxí|study] [和|hé|and] [工作，|gōngzuò,|work,] [所以|suǒyǐ|so] [一定|yídìng|definitely] [要|yào|must] [吃|chī|eat] [得|de|(complement)] [好。|hǎo.|well.] [一般来说，|yìbān lái shuō,|Generally speaking,] [牛奶|niúnǎi|milk] [和|hé|and] [鸡蛋|jīdàn|eggs] [是|shì|are] [不错|búcuò|not bad] [的|de|(possessive)] [选择。|xuǎnzé.|choices.] [下午|xiàwǔ|In the afternoon] [还|hái|still] [要|yào|need to] [工作、|gōngzuò,|work,] [学习，|xuéxí,|study,] [所以|suǒyǐ|so] [午饭|wǔfàn|lunch] [不|bù|not] [能|néng|can] [少|shǎo|eat little] [吃，|chī,|eat,] [要|yào|must] [吃|chī|eat] [得|de|(complement)] [饱|bǎo|full] [一点儿。|yìdiǎnr.|a bit.] [晚饭|wǎnfàn|Dinner] [不|bù|not] [是|shì|is] [吃|chī|eat] [多少|duōshao|how much] [都|dōu|all] [可以，|kěyǐ,|OK,] [也|yě|also] [不|bù|not] [是|shì|is] [几点|jǐ diǎn|what time] [吃|chī|eat] [都|dōu|all] [可以。|kěyǐ.|OK.] [因为|yīnwèi|because] [饭后|fànhòu|after meals] [不久|bùjiǔ|soon] [就要|jiù yào|will] [睡觉|shuìjiào|sleep] [了，|le,|,] [所以|suǒyǐ|so] [要|yào|should] [早点儿|zǎo diǎnr|early] [吃，|chī,|eat,] [也|yě|also] [不|bù|cannot] [能|néng|can] [多|duō|eat much] [吃。|chī.|eat.]</div>
          <div class="sent-en">Everyone knows health is important — how to eat most healthily? There's a Chinese saying: "Eat well in the morning, eat full at noon, eat little in the evening." After breakfast people start a day of study and work, so you must eat well. Generally, milk and eggs are good choices. In the afternoon there's still work and study, so lunch can't be small — eat a bit full. Dinner isn't about how much or when — because soon after dinner you'll sleep, eat early and don't eat much.</div>
          <div class="zh ask">★ [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道：|zhīdào:|know:]</div>
          <div class="sent-en">★ From this passage, we can know: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[早饭要早点儿吃|zǎofàn yào zǎo diǎnr chī|breakfast should be eaten early]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[吃了晚饭就应该睡觉|chī le wǎnfàn jiù yīnggāi shuìjiào|should sleep right after dinner]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[中午一定要吃饱|zhōngwǔ yídìng yào chī bǎo|must eat full at noon]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[午饭|wǔfàn|You shouldn’t skimp on lunch,] [不能|bùnéng|(shouldn’t)] [少吃，|shǎo chī,|(eat little),] [要|yào|you should] [吃|chī|eat] [得|de|(complement)] [饱|bǎo|your fill] [一点儿|yìdiǎnr|a bit]」。</div>
        </div>
        <div class="q" id="L17-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[我|wǒ|my] [爷爷|yéye|grandpa] [是|shì|is] [个|ge|a] [热心人，|rèxīn rén,|warm-hearted person,] [谁|shéi|whose] [的|de|(possessive)] [忙|máng|help] [他|tā|he] [都|dōu|all] [愿意|yuànyì|is willing to] [帮。|bāng.|help.] [谁|shéi|whose] [的|de|(possessive)] [车|chē|car] [坏|huài|broke] [了，|le,|,] [哪家|nǎ jiā|whose] [的|de|(possessive)] [孩子|háizi|child] [病|bìng|sick] [了，|le,|,] [谁|shéi|whose] [的|de|(possessive)] [狗|gǒu|dog] [找|zhǎo|can't find] [不|bù|not] [到|dào|found] [了，|le,|,] [爷爷|yéye|Grandpa] [都|dōu|all] [过去|guòqù|goes over to] [帮忙。|bāngmáng.|help.] [他|tā|he] [常|cháng|often] [说：|shuō:|says:] [大家|dàjiā|everyone] [都|dōu|all] [是|shì|are] [邻居，|línjū,|neighbors,] [帮忙|bāngmáng|helping] [是|shì|is] [应该|yīnggāi|should] [的。|de.|(nominalizer)] [如果|rúguǒ|if] [遇到|yùdào|encountering] [问题，|wèntí,|problems,] [没有|méiyǒu|no] [人|rén|one] [愿意|yuànyì|willing] [帮忙，|bāngmáng,|to help,] [人|rén|people] [和|hé|and] [人|rén|people] [的|de|(possessive)] [关系|guānxi|relationship] [就|jiù|would] [越来越|yuè lái yuè|more and more] [远|yuǎn|distant] [了。|le.|(change)]</div>
          <div class="sent-en">My grandpa is a warm-hearted person — he's willing to help anyone. Whose car broke, whose child is sick, whose dog can't be found — Grandpa goes over to help. He often says: everyone is a neighbor, helping is what we should do. If you encounter problems and no one is willing to help, people's relationships grow more and more distant.</div>
          <div class="zh ask">★ [爷爷：|yéye:|Grandpa:]</div>
          <div class="sent-en">★ Grandpa: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[遇到了问题|yùdào le wèntí|encountered a problem]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[经常帮别人|jīngcháng bāng biérén|often helps others]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不知道要帮谁|bù zhīdào yào bāng shéi|doesn't know who to help]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[谁|shéi|whoever’s] [的|de|(possessive)] [忙|máng|help] [他|tā|he] [都|dōu|all] [愿意|yuànyì|is willing] [帮|bāng|to give]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L17-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L17-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[去|qù|go] [哪儿|nǎr|wherever] [都|dōu|all] [妻子|qīzi|wife] [没|méi|hasn't] [过|guò|been]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[妻子|qīzi|My wife] [哪儿|nǎr|hasn’t been] [都|dōu|(all)] [没|méi|not] [去过。|qù guò|anywhere.]<div class="sent-en">Wife hasn't been anywhere.</div></div>
        </div>
        <div class="write-item" id="L17-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[名字|míngzi|name] [他的|tā de|his] [都|dōu|all] [谁|shéi|everyone] [知道|zhīdào|knows]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[谁|shéi|Everyone] [都|dōu|(all)] [知道|zhīdào|knows] [他|tā|his] [的|de|(possessive)] [名字。|míngzi|name.]<div class="sent-en">Everyone knows his name.</div></div>
        </div>
        <div class="write-item" id="L17-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[可以|kěyǐ|can] [都|dōu|all] [怎么|zěnme|how] [我们|wǒmen|we] [去|qù|go] [那儿|nàr|there]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我们|wǒmen|We] [怎么|zěnme|however] [去|qù|go] [那儿|nàr|there] [都|dōu|(all)] [可以。|kěyǐ|is fine.]<div class="sent-en">We can go there however we like.</div></div>
        </div>
        <div class="write-item" id="L17-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[喝|hē|drink] [什么|shénme|nothing] [现在|xiànzài|now] [妹妹|mèimei|younger sister] [都|dōu|all] [不|bù|not] [想|xiǎng|want to]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[现在|xiànzài|Now] [妹妹|mèimei|my sister] [什么|shénme|noth-] [都|dōu|(all)] [不|bù|ing] [想|xiǎng|wants] [喝。|hē|to drink.]<div class="sent-en">Younger sister doesn't want to drink anything now.</div></div>
        </div>
        <div class="write-item" id="L17-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[时候|shíhou|when] [打电话|dǎ diànhuà|call] [我|wǒ|me] [给|gěi|to] [什么|shénme|whenever] [你|nǐ|you] [可以|kěyǐ|can] [都|dōu|all]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|You] [什么|shénme|when-] [时候|shíhou|(when)] [给|gěi|to] [我|wǒ|me] [打电话|dǎ diànhuà|call] [都|dōu|(all)] [可以。|kěyǐ|anytime.]<div class="sent-en">You can call me anytime.</div></div>
        </div>

        <h4 id="L17-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L17-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[经理，|jīnglǐ,|Manager,] [我|wǒ|I] [想|xiǎng|want to] [请|qǐng|ask for] [一个星期|yí ge xīngqī|a week] <span class="blank-input"><span class="input-py">jià</span><input type="text" data-ans="假"></span>，[可以|kěyǐ|may] [吗？|ma?|(question)]</div>
          <div class="sent-en">Manager, I want to ask for a week of leave, may I?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[假|jià|leave]（[请假|qǐngjià|ask for leave]）</span></div>
        </div>
        <div class="write-item" id="L17-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[明天|míngtiān|tomorrow] [一|yī|in total] <span class="blank-input"><span class="input-py">gòng</span><input type="text" data-ans="共"></span> [8 个人|bā ge rén|8 people] [去|qù|go to] [机场，|jīchǎng,|airport,] [我们|wǒmen|we] [需要|xūyào|need] [两辆车。|liǎng liàng chē.|two cars.]</div>
          <div class="sent-en">Tomorrow 8 people in total are going to the airport — we need two cars.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[共|gòng|total]（[一共|yígòng|in total]）</span></div>
        </div>
        <div class="write-item" id="L17-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[我想|wǒ xiǎng|I want to] [快点儿|kuài diǎnr|quickly] [提高|tígāo|improve] [汉语|Hànyǔ|Chinese] [水平，|shuǐpíng,|level,] [你|nǐ|you] [有|yǒu|have] [什么|shénme|what] [好|hǎo|good] [办|bàn|method] <span class="blank-input"><span class="input-py">fǎ</span><input type="text" data-ans="法"></span> [吗？|ma?|(question)]</div>
          <div class="sent-en">I want to improve my Chinese quickly — do you have any good methods?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[法|fǎ|method]（[办法|bànfǎ|way]）</span></div>
        </div>
        <div class="write-item" id="L17-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[在|zài|at] [这家|zhè jiā|this] [公司|gōngsī|company] [工作|gōngzuò|worked] [了|le|(past)] [几年|jǐ nián|a few years] [以后，|yǐhòu,|after,] [她|tā|she] <span class="blank-input"><span class="input-py">jué</span><input type="text" data-ans="决"></span> [定|dìng|decide] [找|zhǎo|find] [一个|yí ge|a] [新|xīn|new] [工作。|gōngzuò.|job.]</div>
          <div class="sent-en">After working at this company for a few years, she decided to find a new job.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[决|jué|decide]（[决定|juédìng|decide]）</span></div>
        </div>
        <div class="write-item" id="L17-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[这个|zhège|this] [地方|dìfang|place] [的|de|(possessive)] <span class="blank-input"><span class="input-py">dōng</span><input type="text" data-ans="冬"></span> [天|tiān|day] [很|hěn|very] [舒服，|shūfu,|comfortable,] [一点儿也|yìdiǎnr yě|not at all] [不|bù|not] [冷。|lěng.|cold.]</div>
          <div class="sent-en">This place's winter is very comfortable — not cold at all.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[冬|dōng|winter]（[冬天|dōngtiān|winter]）</span></div>
        </div>

        <h4 id="L17-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L17-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[根|gēn|According to] <span class="blank-input"><input type="text" data-ans="据"></span> [邻|lín|neighbor] <span class="blank-input"><input type="text" data-ans="居"></span> [说|shuō|says] [的|de|(possessive)] [话，|huà,|words,] [大家|dàjiā|everyone] [很快|hěn kuài|quickly] [就|jiù|then] [找到|zhǎo dào|found] [了|le|(past)] [那个|nàge|that] [孩子。|háizi.|child.]</div>
          <div class="zh" style="margin-top:6px;">[据|jù|according to]　[居|jū|reside]</div>
          <div class="sent-en">According to what the neighbor said, everyone quickly found that child.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[据|jù|(as in 根据 “according to”)]、[居|jū|(as in 邻居 “neighbor”)]</div>
        </div>
        <div class="write-item" id="L17-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[你|nǐ|you] [刚|gāng|just] [吃|chī|ate] <span class="blank-input"><input type="text" data-ans="饱"></span>，[最好|zuì hǎo|best] [不|bù|not] [要|yào|should] [马上|mǎshàng|immediately] <span class="blank-input"><input type="text" data-ans="跑"></span> [步，|bù,|run,] [对|duì|to] [身体|shēntǐ|body] [不好。|bù hǎo.|not good.]</div>
          <div class="zh" style="margin-top:6px;">[饱|bǎo|full]　[跑|pǎo|run]</div>
          <div class="sent-en">You just ate and are full — best not to run immediately; not good for your body.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[饱|bǎo|(as in 吃饱 “eat one’s fill”)]、[跑|pǎo|(as in 跑步 “run”)]</div>
        </div>
        <div class="write-item" id="L17-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[天|tiān|It's] [黑|hēi|dark,] [路|lù|road] [不|bù|not] [好走，|hǎo zǒu,|easy to walk,] [我|wǒ|I] [有点儿|yǒudiǎnr|a bit] [担|dān|worry] <span class="blank-input"><input type="text" data-ans="心"></span> [女儿，|nǚ'ér,|daughter,] [所以|suǒyǐ|so] [必|bì|must] <span class="blank-input"><input type="text" data-ans="须"></span> [出去|chūqù|go out] [看看。|kàn kan.|take a look.]</div>
          <div class="zh" style="margin-top:6px;">[心|xīn|heart]　[须|xū|must]</div>
          <div class="sent-en">It's dark and the road is hard to walk — I'm a bit worried about my daughter, so I must go out and check.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[心|xīn|(as in 关心 “care about”)]、[须|xū|(as in 必须 “must”)]</div>
        </div>
        <div class="write-item" id="L17-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[你|nǐ|you] [不|bù|aren't] [是|shì|you] [口|kǒu|mouth] <span class="blank-input"><input type="text" data-ans="渴"></span> [了|le|(change)] [吗？|ma?|(question)] [我|wǒ|I] [带|dài|brought] [了|le|(past)] [冰茶，|bīngchá,|iced tea,] [给|gěi|to] [你|nǐ|you] <span class="blank-input"><input type="text" data-ans="喝"></span> [点儿。|diǎnr.|some.]</div>
          <div class="zh" style="margin-top:6px;">[渴|kě|thirsty]　[喝|hē|drink]</div>
          <div class="sent-en">Aren't you thirsty? I brought iced tea — let me give you some.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[渴|kě|(as in 渴了 “thirsty”)]、[喝|hē|drink]</div>
        </div>
        <div class="write-item" id="L17-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[如果|rúguǒ|If] [要|yào|want to] <span class="blank-input"><input type="text" data-ans="洗"></span> [车，|chē,|wash car,] [一定|yídìng|definitely] [要|yào|need to] <span class="blank-input"><input type="text" data-ans="选"></span> [择|zé|choose] [一家|yì jiā|a] [服务|fúwù|service] [好|hǎo|good] [的|de|(possessive)] [店，|diàn,|shop,] [不|bù|not] [能|néng|can] [只|zhǐ|only] [想|xiǎng|think about] [着|zhe|(progressive)] [便宜。|piányi.|cheap.]</div>
          <div class="zh" style="margin-top:6px;">[洗|xǐ|wash]　[选|xuǎn|choose]</div>
          <div class="sent-en">If you want to wash your car, you must choose a shop with good service — can't just think about cheapness.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[洗|xǐ|(as in 洗手 “wash hands”)]、[选|xuǎn|(as in 选择 “choose”)]</div>
        </div>

        <h4 id="L17-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L17-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[园|yuán|garden] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[公园|gōngyuán|park]、[花园|huāyuán|flower garden]</div></div>
        </div>
        <div class="write-item" id="L17-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[病|bìng|illness] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[生病|shēngbìng|get sick]、[有病|yǒu bìng|sick]</div></div>
        </div>
        <div class="write-item" id="L17-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[问|wèn|ask] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[问题|wèntí|question]、[问你|wèn nǐ|ask you]</div></div>
        </div>
        <div class="write-item" id="L17-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[闻|wén|hear] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[新闻|xīnwén|news]、[听闻|tīngwén|hear of]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L17-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小丽|Xiǎolì|Xiaoli] [的|de|(possessive)] [同事|tóngshì|colleague] [很想|hěn xiǎng|really wanted to] [认识|rènshi|know] [那个|nàge|that] [高高|gāogāo|tall] [的|de|(possessive)] [男人，|nánrén,|man,] [就|jiù|then] [问|wèn|asked] [小丽|Xiǎolì|Xiaoli] [对|duì|to] [他|tā|him] [是不是|shì bú shì|if] <span class="blank-input review-blank"><span class="input-py">liǎojiě</span><input type="text" data-ans="了解"></span>。
            [小丽|Xiǎolì|Xiaoli] [告诉|gàosu|told] [同事|tóngshì|colleague] [他们|tāmen|they] [过去|guòqù|used to be] <span class="blank-input review-blank"><span class="input-py">línjū</span><input type="text" data-ans="邻居"></span>，[后来|hòulái|later] [是|shì|were] [大学同学，|dàxué tóngxué,|university classmates,] [那个|nàge|that] [男人|nánrén|man] [有很多|yǒu hěnduō|has many]
            <span class="blank-input review-blank"><span class="input-py">àihào</span><input type="text" data-ans="爱好"></span>，[都会。|dōu huì.|all can do.] [但是|dànshì|but] [小丽|Xiǎolì|Xiaoli] [不|bù|cannot] [能|néng|can] [把|bǎ|(BA)] [他|tā|him] [介绍|jièshào|introduce] [给|gěi|to] [同事，|tóngshì,|colleague,] [因为|yīnwèi|because] [他|tā|he] [现在|xiànzài|now] [是|shì|is] [小丽|Xiǎolì|Xiaoli] [的|de|(possessive)]
            <span class="blank-input review-blank"><span class="input-py">zhàngfu</span><input type="text" data-ans="丈夫"></span>。
          </div>
          <div class="sent-en">Xiaoli's colleague really wanted to know that tall man, so she asked Xiaoli if she knew him. Xiaoli told her colleague they used to be neighbors, then university classmates. The man has many hobbies and can do them all. But Xiaoli can't introduce him to the colleague, because he's now Xiaoli's husband.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[了解|liǎojiě|know]、[邻居|línjū|neighbor]、[爱好|àihào|hobby]、[丈夫|zhàngfu|husband]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [周太太|Zhōu tàitai|Mrs. Zhou] [最近|zuìjìn|recently] [觉得|juéde|feels] [哪儿|nǎr|nowhere] [都|dōu|all] [不|bù|not] [舒服，|shūfu,|well,] [想|xiǎng|wants to] [去|qù|go to] [医院|yīyuàn|hospital]
            <span class="blank-input review-blank"><span class="input-py">jiǎnchá jiǎnchá</span><input type="text" data-ans="检查检查"></span>。
            [周经理|Zhōu jīnglǐ|Manager Zhou] [觉得|juéde|feels]
            <span class="blank-input review-blank"><span class="input-py">shéi</span><input type="text" data-ans="谁"></span>
            [都|dōu|all] [有|yǒu|has] [办法|bànfǎ|ways] [看好|kànhǎo|cure] [她|tā|her] [的|de|(possessive)] [“病”，|“bìng”,|"disease",] [因为|yīnwèi|because] [太太|tàitai|wife] [三年|sān nián|three years] [没|méi|hasn't] [运动|yùndòng|exercised] [了，|le,|,] [每天|měitiān|every day] [吃|chī|ate] [了|le|(past)] [就|jiù|then] [睡。|shuì.|slept.] [为了|wèile|for]
            <span class="blank-input review-blank"><span class="input-py">jiànkāng</span><input type="text" data-ans="健康"></span>，[周太太|Zhōu tàitai|Mrs. Zhou] [决定|juédìng|decided] [从明天起|cóng míngtiān qǐ|starting tomorrow] [每天|měitiān|every day] [去|qù|go]
            <span class="blank-input review-blank"><span class="input-py">pǎobù</span><input type="text" data-ans="跑步"></span>。
          </div>
          <div class="sent-en">Mrs. Zhou hasn't been feeling well anywhere recently and wants to go to the hospital for a check. Manager Zhou feels everyone has a way to cure her "disease", because she hasn't exercised in three years — every day she eats and sleeps. For health, Mrs. Zhou decided to start running every day starting tomorrow.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[检查检查|jiǎnchá jiǎnchá|check]、[谁|shéi|whoever]、[健康|jiànkāng|health]、[跑步|pǎobù|run]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[18] = {
  navLabel:'第18课',
  html: `
    <div class="lesson">
      <h2>第 18 课　我相信他们会同意的
        <span class="title-py">Dì shíbā kè · Wǒ xiāngxìn tāmen huì tóngyì de</span>
        <small>Lesson 18 · I believe they'll agree</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L18-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图18.png" alt="听力图18" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图18.png</b></span>
        </div>

        <div class="q" id="L18-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[男：|Nán:|M:] [孩子|háizi|The child] [怎么|zěnme|why] [了，|le,|,] [变化|biànhuà|changed] [这么|zhème|so] [大，|dà,|much,] [我|wǒ|I] [真|zhēn|really] [没|méi|cannot] [办法|bànfǎ|help] [相信。|xiāngxìn.|believe it.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [自己|zìjǐ|myself] [也|yě|also] [没|méi|didn't] [想到，|xiǎngdào,|expect,] [他|tā|he] [一个星期|yí ge xīngqī|one week] [就|jiù|then] [瘦|shòu|got thinner] [了|le|(change)] [五斤。|wǔ jīn.|by five jin.]</div>
          <div class="sent-en">M: What happened to the child? Such a big change — I really can't believe it.<br>W: I didn't expect it either — he lost five jin in one week.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[体重|tǐzhòng|weight] [变化|biànhuà|changes] / [称重|chēng zhòng|weighing]）</div>
        </div>
        <div class="q" id="L18-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [下星期|xià xīngqī|next week] [去|qù|go to] [北京？|Běijīng?|Beijing?] [你|nǐ|your] [的|de|(possessive)] [那只|nà zhī|that] [狗|gǒu|dog] [怎么办？|zěnme bàn?|what will you do?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [有个|yǒu ge|have a] [同学|tóngxué|classmate] [很|hěn|very] [喜欢|xǐhuan|likes] [小动物，|xiǎo dòngwù,|small animals,] [她|tā|she] [同意|tóngyì|agreed] [帮|bāng|help] [我|wǒ|me] [照顾|zhàogù|take care of] [几天。|jǐ tiān.|a few days.]</div>
          <div class="sent-en">W: You're going to Beijing next week? What about your dog?<br>M: I have a classmate who likes small animals — she agreed to take care of it for a few days.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[一个人|yí ge rén|a person] [牵着|qiān zhe|walking] [狗|gǒu|a dog]）</div>
        </div>
        <div class="q" id="L18-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这|zhè|this] [是|shì|is] [你|nǐ|your] [儿子？|érzi?|son?] [他|tā|he] [跟|gēn|with] [你|nǐ|you] [长|zhǎng|grows] [得|de|(complement)] [真|zhēn|really] [像|xiàng|alike] [啊。|a.|(exclamation)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是，|shì,|Yes,] [但是|dànshì|but] [他|tā|his] [的|de|(possessive)] [嘴|zuǐ|mouth] [更|gèng|more] [像|xiàng|like] [他爸爸。|tā bàba.|his dad.]</div>
          <div class="sent-en">M: Is this your son? He really looks like you!<br>W: Yes, but his mouth looks more like his dad.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[母亲|mǔqīn|a mother] [和|hé|and] [儿子|érzi|her son]）</div>
        </div>
        <div class="q" id="L18-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这|zhè|this] [是|shì|is] [黄老师|Huáng lǎoshī|Teacher Huang] [的|de|(possessive)] [画儿|huàr|painting] [吧，|ba,|,] [他|tā|his] [的|de|(possessive)] [画儿|huàr|paintings] [都|dōu|all] [非常|fēicháng|very] [有名。|yǒumíng.|famous.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [对，|duì,|Yes,] [我|wǒ|I] [买|mǎi|bought] [这|zhè|this] [画儿|huàr|painting] [花|huā|spent] [了|le|(past)] [三万块|sān wàn kuài|30000 yuan] [呢。|ne.|(emphasis)]</div>
          <div class="sent-en">M: This is Teacher Huang's painting, right? His paintings are all very famous.<br>W: Yes — I spent 30000 yuan on this painting.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[一幅|yì fú|a] [画|huà|painting]）</div>
        </div>
        <div class="q" id="L18-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [怎么|zěnme|why] [总是|zǒngshì|always] [带|dài|take] [孩子|háizi|the child] [到|dào|to] [动物园|dòngwùyuán|the zoo] [看|kàn|see] [动物，|dòngwù,|animals,] [能不能|néng bu néng|could you] [换个|huàn ge|change to another] [地方？|dìfang?|place?]</div>
          <div class="zh stem">[男：|Nán:|M:] [这|zhè|this] [你|nǐ|you] [就|jiù|then] [不|bù|not] [知道|zhīdào|know] [了|le|(change)] [吧，|ba,|,] [动物园|dòngwùyuán|the zoo] [不但|búdàn|not only] [环境|huánjìng|environment] [好，|hǎo,|is good,] [而且|érqiě|but also] [孩子|háizi|the child] [对|duì|to] [动物|dòngwù|animals] [很|hěn|very] [感兴趣。|gǎn xìngqù.|is interested.]</div>
          <div class="sent-en">W: Why do you always take the child to the zoo to see animals? Can't you go somewhere else?<br>M: You don't get it — the zoo not only has a good environment, but the child is also very interested in animals.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[动物园|dòngwùyuán|a zoo]）</div>
        </div>

        <h4 id="L18-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L18-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[聪明|cōngming|Smart] [的|de|(possessive)] [人|rén|people] [只要|zhǐyào|as long as] [看到|kàndào|see] [机会，|jīhuì,|opportunities,] [就|jiù|then] [会|huì|will] [想|xiǎng|think of] [办法|bànfǎ|ways] [拿到，|ná dào,|to get them,] [因为|yīnwèi|because] [他们|tāmen|they] [知道，|zhīdào,|know,] [很多时候|hěnduō shíhou|often] [机会|jīhuì|opportunities] [只有|zhǐyǒu|only] [一次。|yí cì.|come once.]</div>
          <div class="sent-en">Smart people think of ways to seize opportunities whenever they see them, because they know that often opportunities come only once.</div>
          <div class="zh stem">★ [聪明人|cōngming rén|Smart people] [知道|zhīdào|know] [机会|jīhuì|opportunities] [不常|bù cháng|don't often] [有。|yǒu.|come.]</div>
          <div class="sent-en">★ Smart people know opportunities don't come often.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[机会|jīhuì|The opportunity] [只有|zhǐyǒu|comes only] [一次|yí cì|once]」→ [机会|jīhuì|opportunities] [不|bù|do] [常|cháng|not come] [有|yǒu|often.]" data-expl-en="'Opportunities come only once' — they don't come often."></div>
        </div>
        <div class="q" id="L18-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[小云，|Xiǎoyún,|Xiaoyun,] [你|nǐ|you] [从|cóng|from] [动物园|dòngwùyuán|the zoo] [出来|chūlái|come out] [后，|hòu,|after,] [向|xiàng|toward] [左|zuǒ|left] [走，|zǒu,|walk,] [到了|dào le|arrive at] [地铁站|dìtiě zhàn|the subway station] [以后|yǐhòu|after] [再|zài|then] [向|xiàng|toward] [右|yòu|right] [走，|zǒu,|walk,] [然后|ránhòu|then] [就|jiù|then] [能|néng|can] [看到|kàndào|see] [体育馆|tǐyùguǎn|the gymnasium] [了。|le.|(change)]</div>
          <div class="sent-en">Xiaoyun, after you come out of the zoo, walk left. After you reach the subway station, walk right, then you'll see the gymnasium.</div>
          <div class="zh stem">★ [小云|Xiǎoyún|Xiaoyun] [要|yào|is going to] [去|qù|go to] [体育馆。|tǐyùguǎn.|the gymnasium.]</div>
          <div class="sent-en">★ Xiaoyun is going to the gymnasium.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[告诉|gàosu|Telling] [他|tā|him] [怎么|zěnme|how] [去|qù|to get to] [体育馆，|tǐyùguǎn,|the gym,] [说明|shuōmíng|showing] [他|tā|he] [要|yào|is going] [去|qù|to] [体育馆。|tǐyùguǎn|the gym.]" data-expl-en="Telling him how to get to the gymnasium means he's going there."></div>
        </div>
        <div class="q" id="L18-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[关于|guānyú|About] [中国|Zhōngguó|Chinese] [的|de|(possessive)] [节日，|jiérì,|festivals,] [除了|chúle|besides] [春节|Chūnjié|the Spring Festival] [以外，|yǐwài,|,] [别的|biéde|others] [我|wǒ|I] [都|dōu|all] [不|bù|not] [了解，|liǎojiě,|know,] [但是|dànshì|but] [我|wǒ|I] [打算|dǎsuàn|plan to] [找|zhǎo|find] [一个|yí ge|a] [中国|Zhōngguó|Chinese] [老师|lǎoshī|teacher] [教教|jiāo jiao|teach] [我。|wǒ.|me.]</div>
          <div class="sent-en">About Chinese festivals — besides the Spring Festival, I don't know the others. But I plan to find a Chinese teacher to teach me.</div>
          <div class="zh stem">★ [关于|guānyú|About] [中国|Zhōngguó|China] [的|de|(possessive)] [春节，|Chūnjié,|the Spring Festival,] [他|tā|he] [比较|bǐjiào|relatively] [了解。|liǎojiě.|knows.]</div>
          <div class="sent-en">★ About China's Spring Festival, he knows it relatively well.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[除了|chúle|Apart from] [春节|Chūnjié|Spring Festival] [以外，|yǐwài,|(besides),] [别的|biéde|the rest] [都|dōu|all] [不|bù|not] [了解|liǎojiě|known]」→ [对|duì|knows] [春节|Chūnjié|Spring Festival] [比较|bǐjiào|quite] [了解。|liǎojiě|well.]" data-expl-en="'Besides the Spring Festival, I don't know others' — he knows the Spring Festival."></div>
        </div>
        <div class="q" id="L18-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[那个|nàge|That] [宾馆|bīnguǎn|hotel] [离|lí|from] [我们学校|wǒmen xuéxiào|our school] [很近，|hěn jìn,|is very close,] [不但|búdàn|not only] [环境|huánjìng|environment] [很好，|hěn hǎo,|is good,] [而且|érqiě|but also] [不太贵，|bú tài guì,|not too expensive,] [每次|měi cì|every time] [有|yǒu|there are] [同学|tóngxué|classmates] [或者|huòzhě|or] [朋友|péngyou|friends] [来，|lái,|coming,] [我|wǒ|I] [都|dōu|all] [会|huì|will] [带|dài|take] [他们|tāmen|them] [去|qù|go to] [那儿|nàr|there] [住。|zhù.|stay.]</div>
          <div class="sent-en">That hotel is close to our school — not only good environment, but also not too expensive. Whenever classmates or friends come, I take them there to stay.</div>
          <div class="zh stem">★ [他|tā|he] [认为|rènwéi|thinks] [那个|nàge|that] [宾馆|bīnguǎn|hotel] [不错。|búcuò.|is nice.]</div>
          <div class="sent-en">★ He thinks that hotel is nice.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[环境|huánjìng|Good environment] [好、|hǎo,|(good),] [不太|bú tài|not too] [贵|guì|expensive] → [不错。|búcuò|not bad.]" data-expl-en="Good environment, not expensive — nice."></div>
        </div>
        <div class="q" id="L18-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[我|wǒ|I] [学习|xuéxí|have been learning] [汉语|Hànyǔ|Chinese] [一年多了，|yì nián duō le,|for over a year,] [水平|shuǐpíng|level] [一般。|yìbān.|is average.] [我|wǒ|I] [能|néng|can] [听懂|tīngdǒng|understand] [中国人|Zhōngguó rén|Chinese people] [说|shuō|speak] [的|de|(possessive)] [一些|yìxiē|some] [简单|jiǎndān|simple] [的|de|(possessive)] [句子，|jùzi,|sentences,] [也|yě|also] [可以|kěyǐ|can] [说|shuō|speak] [一点儿。|yìdiǎnr.|a little.] [我|wǒ|I] [相信|xiāngxìn|believe] [明年|míngnián|next year] [我|wǒ|I] [一定|yídìng|definitely] [会|huì|will] [说|shuō|speak] [得|de|(complement)] [更好|gèng hǎo|better] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">I've been learning Chinese for over a year — my level is average. I can understand some simple sentences Chinese people say, and can speak a little. I believe next year I'll definitely speak better.</div>
          <div class="zh stem">★ [他|tā|his] [的|de|(possessive)] [汉语|Hànyǔ|Chinese] [水平|shuǐpíng|level] [很|hěn|very] [高。|gāo.|high.]</div>
          <div class="sent-en">★ His Chinese level is very high.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [说|shuō|says]「[水平|shuǐpíng|the level] [一般|yìbān|is average]」，[不是|bú shì|not] [很|hěn|very] [高。|gāo|high.]" data-expl-en="'Level is average' — not very high."></div>
        </div>

        <h4 id="L18-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L18-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [明天|míngtiān|tomorrow] [上午|shàngwǔ|morning] [要|yào|are going to] [去|qù|go] [哪儿，|nǎr,|where,] [陪|péi|accompany] [我|wǒ|me] [去|qù|go to] [医院|yīyuàn|hospital] [吧？|ba?|(suggestion)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [要|yào|am going to] [带|dài|take] [学生|xuéshēng|students] [去|qù|go to] [动物园|dòngwùyuán|the zoo] [看|kàn|see] [大熊猫，|dàxióngmāo,|giant pandas,] [后天|hòutiān|the day after tomorrow] [行|xíng|OK] [吗？|ma?|(question)]</div>
          <div class="sent-en">M: Where are you going tomorrow morning? Come with me to the hospital, OK?<br>W: I'm taking students to the zoo to see the giant pandas — is the day after tomorrow OK?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|what is the woman] [最|zuì|most] [可能|kěnéng|likely] [是|shì|(is)] [做|zuò|doing] [什么|shénme|(what)] [的？|de?|(job)?]</div>
          <div class="sent-en">Q: What is the woman most likely to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[司机|sījī|driver]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[老师|lǎoshī|teacher]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[医生|yīshēng|doctor]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[带|dài|Taking] [学生|xuéshēng|students] [去|qù|to] [动物园|dòngwùyuán|the zoo]」→ [老师。|lǎoshī|a teacher.]</div>
        </div>
        <div class="q" id="L18-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [昨晚|zuówǎn|last night] [的|de|(possessive)] [《动物世界》|“Dòngwù Shìjiè”|"Animal World"] [你|nǐ|you] [看|kàn|watched] [了|le|(past)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [没有，|méiyǒu,|No,] [我|wǒ|I] [最近|zuìjìn|recently] [忙着|máng zhe|busy] [准备|zhǔnbèi|preparing] [下周|xià zhōu|next week] [的|de|(possessive)] [比赛，|bǐsài,|competition,] [很少|hěn shǎo|rarely] [看|kàn|watch] [电视。|diànshì.|TV.]</div>
          <div class="sent-en">W: Did you watch "Animal World" last night?<br>M: No — I've been busy preparing for next week's competition and rarely watch TV.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|why has the man] [最近|zuìjìn|recently] [为什么|wèishénme|(why)] [很少|hěn shǎo|rarely] [看|kàn|watched] [电视？|diànshì?|TV?]</div>
          <div class="sent-en">Q: Why has the man rarely watched TV recently?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不爱看电视|bú ài kàn diànshì|doesn't like TV]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[常去动物园|cháng qù dòngwùyuán|often goes to the zoo]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[在准备比赛|zài zhǔnbèi bǐsài|is preparing for a competition]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[忙|máng|Busy] [着|zhe|(progressive)] [准备|zhǔnbèi|preparing for] [下周|xià zhōu|next week’s] [的|de|(possessive)] [比赛|bǐsài|competition]」。</div>
        </div>
        <div class="q" id="L18-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [奇怪，|qíguài,|Strange,] [我|wǒ|I] [记得|jìde|remember] [把|bǎ|(BA)] [手机|shǒujī|phone] [放进|fàng jìn|put into] [包|bāo|bag] [里|li|inside] [了，|le,|,] [怎么|zěnme|why] [找|zhǎo|can't find] [不|bù|not] [到|dào|find] [了？|le?|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [别|bié|don't] [着急，|zháojí,|worry,] [我|wǒ|I] [给|gěi|to] [你|nǐ|you] [打|dǎ|make] [个|ge|a] [电话，|diànhuà,|call,] [就|jiù|then] [知道|zhīdào|know] [在|zài|at] [哪儿|nǎr|where] [了。|le.|(change)]</div>
          <div class="sent-en">W: Strange — I remember putting my phone in my bag, why can't I find it?<br>M: Don't worry — I'll call you and we'll know where it is.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|why does the man] [为什么|wèishénme|(why)] [要|yào|(want to)] [给|gěi|call] [女的|nǚde|the woman] [打电话？|dǎ diànhuà?|(phone)?]</div>
          <div class="sent-en">Q: Why does the man want to call the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[帮她找手机|bāng tā zhǎo shǒujī|help her find the phone]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[找她有事情|zhǎo tā yǒu shìqing|has something for her]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[跟女的见面|gēn nǚde jiànmiàn|meet with her]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[打电话|dǎ diànhuà|Calling] [就|jiù|then] [能|néng|can] [听到|tīngdào|hear] [手机|shǒujī|the phone] [响，|xiǎng,|ring,] [从而|zōng’ér|so as to] [找到|zhǎodào|find] [手机。|shǒujī|the phone.]</div>
        </div>
        <div class="q" id="L18-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [不会|bú huì|cannot] [骑|qí|ride] [自行车？|zìxíngchē?|a bicycle?]</div>
          <div class="zh stem">[男：|Nán:|M:] [是|shì|yes] [的，|de,|,] [在|zài|in] [我们|wǒmen|our] [那儿|nàr|place,] [很少|hěn shǎo|rarely] [有|yǒu|have] [机会|jīhuì|the chance] [骑。|qí.|to ride.]</div>
          <div class="sent-en">W: You can't ride a bicycle?<br>M: Right — in our place there's rarely a chance to ride.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[经常骑自行车|jīngcháng qí zìxíngchē|often rides a bicycle]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[上班不能骑车|shàngbān bùnéng qí chē|cannot ride to work]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[不会骑自行车|bú huì qí zìxíngchē|cannot ride a bicycle]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[是的|shì de|Yes]」[承认|chéngrèn|admits] [不会|bú huì|she can’t] [骑|qí|ride]」。</div>
        </div>
        <div class="q" id="L18-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [吃饭|chīfàn|Eating] [不能|bùnéng|cannot] [吃|chī|eat] [太饱，|tài bǎo,|too full,] [那|nà|that] [对|duì|to] [你|nǐ|your] [的|de|(possessive)] [身体|shēntǐ|body] [不好。|bù hǎo.|is not good.]</div>
          <div class="zh stem">[男：|Nán:|M:] [关于|guānyú|about] [这|zhè|this] [一点，|yì diǎn,|point,] [我|wǒ|I] [同意，|tóngyì,|agree,] [可是|kěshì|but] [吃|chī|eat] [太少，|tài shǎo,|too little,] [我|wǒ|I] [晚上|wǎnshang|at night] [睡|shuì|sleep] [不|bù|not] [着觉。|zháo jiào.|fall asleep.]</div>
          <div class="sent-en">W: You shouldn't eat too full — not good for your health.<br>M: I agree about that, but if I eat too little, I can't fall asleep at night.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[身体不好|shēntǐ bù hǎo|health is bad]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[吃得很饱|chī de hěn bǎo|eats very full]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[吃得很少|chī de hěn shǎo|eats very little]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[吃|chī|If I eat] [太少，|tài shǎo,|too little,] [我|wǒ|I] [晚上|wǎnshang|at night] [睡不着觉|shuì bu zháo jiào|can’t sleep]」→ [他|tā|he] [吃|chī|ate] [得|de|(complement)] [很|hěn|very] [饱。|bǎo|full.]</div>
        </div>

        <h4 id="L18-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L18-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [这|zhè|this] [是|shì|is] [你|nǐ|your] [小时候|xiǎo shíhou|childhood] [的|de|(possessive)] [照片？|zhàopiàn?|photo?]</div>
          <div class="zh stem">[男：|Nán:|M:] [是，|shì,|Yes,] [我|wǒ|I] [小时候|xiǎo shíhou|as a child] [比较|bǐjiào|relatively] [矮。|ǎi.|short.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [现在|xiànzài|now] [有|yǒu|have] [一米九|yì mǐ jiǔ|1.9 meters] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [一米九一，|yì mǐ jiǔ yī,|1.91 meters,] [我|wǒ|I] [都|dōu|even] [不|bù|not] [相信|xiāngxìn|believe] [自己|zìjǐ|myself] [能|néng|can] [长|zhǎng|grow] [这么|zhème|so] [高。|gāo.|tall.]</div>
          <div class="sent-en">W: Is this your childhood photo?<br>M: Yes — I was relatively short as a child.<br>W: Are you 1.9 meters now?<br>M: 1.91 — I can't even believe I could grow so tall.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [小时候|xiǎo shíhou|as a child] [怎么样？|zěnmeyàng?|how was he?]</div>
          <div class="sent-en">Q: How was the man as a child?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[喜欢照相|xǐhuan zhàoxiàng|liked taking photos]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[长得很矮|zhǎng de hěn ǎi|was very short]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[长得很高|zhǎng de hěn gāo|was very tall]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|I] [小时候|xiǎo shíhou|as a child] [比较|bǐjiào|was quite] [矮|ǎi|short]」。</div>
        </div>
        <div class="q" id="L18-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [怎么|zěnme|why] [买票|mǎi piào|buying tickets] [买|mǎi|took] [了|le|(past)] [这么|zhème|so] [久？|jiǔ?|long?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [节日|jiérì|On holidays] [里|li|inside] [来|lái|come to] [动物园|dòngwùyuán|the zoo] [的|de|(possessive)] [人|rén|people] [特别|tèbié|especially] [多。|duō.|many.]</div>
          <div class="zh stem">[男：|Nán:|M:] [怎么|zěnme|why] [那么|nàme|so] [多|duō|many] [人|rén|people] [啊？|a?|(exclamation)] [我们|wǒmen|our] [的|de|(possessive)] [票|piào|tickets] [买到|mǎi dào|bought] [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [买到|mǎi dào|bought] [了，|le,|,] [今天|jīntiān|today] [不但|búdàn|not only] [来|lái|came] [了|le|(past)] [很多|hěnduō|many] [北京人，|Běijīng rén,|Beijingers,] [而且|érqiě|but also] [还有|háiyǒu|there are] [很多|hěnduō|many] [外地人。|wàidì rén.|out-of-towners.]</div>
          <div class="sent-en">M: Why did it take you so long to buy tickets?<br>W: On holidays, especially many people come to the zoo.<br>M: Why are there so many? Did we get tickets?<br>W: Yes — not only many Beijingers came today, but also many out-of-towners.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|why did it take the woman] [为什么|wèishénme|(why)] [买票|mǎi piào|to buy tickets] [花|huā|(spend)] [了|le|(past)] [很|hěn|a] [长|cháng|long] [时间？|shíjiān?|time?]</div>
          <div class="sent-en">Q: Why did it take the woman a long time to buy tickets?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[她是外地人|tā shì wàidì rén|she's an out-of-towner]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[买票的人多|mǎi piào de rén duō|many people buying tickets]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[开门比较晚|kāimén bǐjiào wǎn|the gate opens late]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[来|lái|People coming to] [动物园|dòngwùyuán|the zoo] [的|de|(nominalizer)] [人|rén|(people)] [特别|tèbié|especially] [多|duō|many]」。</div>
        </div>
        <div class="q" id="L18-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [今天|jīntiān|today] [我们|wǒmen|we] [还|hái|still] [去|qù|go to] [国家体育馆|Guójiā Tǐyùguǎn|the National Gymnasium] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [只要|zhǐyào|as long as] [你|nǐ|you] [不|bù|not] [累，|lěi,|tired,] [我们|wǒmen|we] [就|jiù|then] [去。|qù.|go.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|then] [你|nǐ|you] [等|děng|wait for] [我|wǒ|me] [一会儿，|yíhuìr,|a moment,] [我|wǒ|I] [先|xiān|first] [洗个澡。|xǐ ge zǎo.|take a shower.]</div>
          <div class="zh stem">[男：|Nán:|M:] [行，|xíng,|OK,] [我|wǒ|I] [去|qù|go] [洗车。|xǐ chē.|wash the car.]</div>
          <div class="sent-en">W: Are we still going to the National Gymnasium today?<br>M: As long as you're not tired, we'll go.<br>W: Then wait a moment — I'll take a shower first.<br>M: OK, I'll go wash the car.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|what does the woman] [现在|xiànzài|now] [要|yào|want] [做|zuò|to do] [什么？|shénme?|(what)?]</div>
          <div class="sent-en">Q: What does the woman want to do now?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[去体育馆|qù tǐyùguǎn|go to the gymnasium]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[洗澡|xǐzǎo|take a shower]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[洗车|xǐ chē|wash the car]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|I] [先|xiān|first] [洗个澡|xǐ ge zǎo|take a shower]」。</div>
        </div>
        <div class="q" id="L18-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[男：|Nán:|M:] [听说|tīngshuō|heard] [这家|zhè jiā|this] [饭馆|fànguǎn|restaurant] [的|de|(possessive)] [羊肉|yángròu|mutton] [非常|fēicháng|very] [有名，|yǒumíng,|famous,] [要|yào|want to] [不要|bú yào|or not] [来|lái|have] [一盘？|yì pán?|a plate?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [不|bù|not] [吃|chī|eat] [牛羊肉，|niú yáng ròu,|beef or mutton,] [有|yǒu|is there] [没有|méiyǒu|any] [别的|biéde|other] [菜？|cài?|dish?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [看看|kàn kan|look at] [菜单，|càidān,|the menu,] [你|nǐ|you] [看|kàn|look at] [这个|zhège|this] [鱼|yú|fish] [怎么样？|zěnmeyàng?|how about?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [行，|xíng,|OK,] [只要|zhǐyào|as long as] [你|nǐ|you] [喜欢|xǐhuan|like,] [我们|wǒmen|we] [就|jiù|then] [点。|diǎn.|order it.]</div>
          <div class="sent-en">M: I heard this restaurant's mutton is very famous — want a plate?<br>W: I don't eat beef or mutton. Is there anything else?<br>M: Let me look at the menu — how about this fish?<br>W: OK — as long as you like it, we'll order it.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [那家|nà jiā|what is that] [饭馆|fànguǎn|restaurant’s] [的|de|(possessive)] [什么|shénme|(what)] [很|hěn|very] [有名？|yǒumíng?|famous for?]</div>
          <div class="sent-en">Q: What is that restaurant famous for?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[羊肉|yángròu|mutton]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[牛肉|niúròu|beef]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[鱼|yú|fish]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[这家|zhè jiā|This] [饭馆|fànguǎn|restaurant’s] [的|de|(possessive)] [羊肉|yángròu|lamb] [非常|fēicháng|is very] [有名|yǒumíng|famous]」。</div>
        </div>
        <div class="q" id="L18-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [奇怪，|qíguài,|Strange,] [这段|zhè duàn|this period of] [时间|shíjiān|time] [怎么|zěnme|why] [没|méi|haven't] [看见|kànjiàn|seen] [小周|Xiǎo Zhōu|Xiao Zhou] [来|lái|come to] [上班？|shàngbān?|work?] [她|tā|she] [病|bìng|sick] [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [不|bù|not] [知道|zhīdào|know] [吗？|ma?|(question)] [公司|gōngsī|the company] [已经|yǐjīng|already] [送|sòng|sent] [她|tā|her] [去|qù|to] [外地|wàidì|other places] [学习|xuéxí|to study] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [是|shì|really] [吗？|ma?|(question)] [她|tā|she] [有|yǒu|has] [这么|zhème|such] [好|hǎo|good] [的|de|(possessive)] [机会|jīhuì|opportunity] [啊。|a.|(exclamation)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [小周|Xiǎo Zhōu|Xiao Zhou] [工作|gōngzuò|works] [认真，|rènzhēn,|seriously,] [经理|jīnglǐ|the manager] [当然|dāngrán|of course] [让|ràng|let] [她|tā|her] [去。|qù.|go.]</div>
          <div class="sent-en">M: Strange — why haven't I seen Xiao Zhou at work lately? Is she sick?<br>W: Don't you know? The company sent her to study elsewhere.<br>M: Really? She has such a good opportunity.<br>W: Xiao Zhou works seriously — of course the manager let her go.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [小周|Xiǎo Zhōu|why didn’t Xiao Zhou] [为什么|wèishénme|(why)] [没来|méi lái|come] [上班？|shàngbān?|to work?]</div>
          <div class="sent-en">Q: Why didn't Xiao Zhou come to work?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[去学习了|qù xuéxí le|went to study]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[生病了|shēngbìng le|got sick]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[工作不认真|gōngzuò bù rènzhēn|doesn't work seriously]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[公司|gōngsī|The company] [已经|yǐjīng|already] [送|sòng|sent] [她|tā|her] [去|qù|to] [外地|wàidì|other places] [学习|xuéxí|to study] [了|le|(change)]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L18-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L18-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[你|nǐ|you] [怎么|zěnme|why] [一直|yìzhí|always] [看着|kàn zhe|look at] [我，|wǒ,|me,] [怎么|zěnme|what's wrong] [了？|le?|(change)]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[请慢走，|qǐng màn zǒu,|Take care,] [欢迎|huānyíng|welcome] [您|nín|you] [下次|xià cì|next time] [再来|zài lái|come again] [我们|wǒmen|our] [这儿|zhèr|place] [玩儿。|wánr.|to visit.]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[我|wǒ|I] [也|yě|also] [觉得|juéde|feel] [很|hěn|very] [奇怪，|qíguài,|strange,] [她|tā|she] [过去|guòqù|used to] [不|bù|not] [是|shì|be] [这样|zhèyàng|like this] [的。|de.|(nominalizer)]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[楼下|lóuxià|downstairs] [这只|zhè zhī|this] [小狗|xiǎogǒu|puppy] [是|shì|is] [谁家|shéi jiā|whose family] [的？|de?|(nominalizer)]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[中国人|Zhōngguó rén|Chinese people's] [的|de|(possessive)] [人名|rénmíng|names] [一般|yìbān|generally] [都|dōu|all] [没|méi|aren't] [那么|nàme|that] [简单。|jiǎndān.|simple.]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [去|qù|go] [那儿|nàr|there] [吗？|ma?|(question)] （E）</div>
          <div class="sent-en">Do you know how to get there? — (E) Of course. We take the bus first, then transfer to the subway.</div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L18-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[我|wǒ|I] [同意，|tóngyì,|agree,] [根据|gēnjù|according to] [我|wǒ|my] [的|de|(possessive)] [了解，|liǎojiě,|understanding,] [这|zhè|this] [是|shì|is] [一种|yì zhǒng|a kind of] [文化。|wénhuà.|culture.] （<span class="blank">　</span>）</div>
          <div class="sent-en">I agree — from my understanding, this is a kind of culture.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L18-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[你|nǐ|you] [刚才|gāngcái|just now] [吃|chī|ate] [什么|shénme|what] [了，|le,|,] [嘴|zuǐ|mouth] [上|shàng|on] [有|yǒu|there is] [一个|yí ge|a] [东西。|dōngxi.|thing.] （<span class="blank">　</span>）</div>
          <div class="sent-en">What did you just eat? There's something on your mouth.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L18-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[真|zhēn|really] [奇怪，|qíguài,|strange,] [附近|fùjìn|nearby] [人家|rénjiā|households] [里|li|inside] [没有|méiyǒu|don't have] [这种|zhè zhǒng|this kind of] [狗。|gǒu.|dog.] （<span class="blank">　</span>）</div>
          <div class="sent-en">How strange — none of the nearby households have this kind of dog.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L18-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[好的，|hǎo de,|OK,] [有机会|yǒu jīhuì|when there's a chance] [我|wǒ|I] [一定|yídìng|definitely] [会|huì|will] [再来|zài lái|come again] [的，|de,|,] [再见。|zàijiàn.|goodbye.] （<span class="blank">　</span>）</div>
          <div class="sent-en">OK — when there's a chance, I'll definitely come again. Goodbye.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L18-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[小丽|Xiǎolì|Xiaoli] [最近|zuìjìn|recently] [经常|jīngcháng|often] [迟到，|chídào,|is late,] [你|nǐ|you] [是|shì|are] [她|tā|her] [的|de|(possessive)] [好朋友，|hǎo péngyou,|good friend,] [你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|what happened] [了|le|(change)] [吗？|ma?|(question)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Xiaoli has been often late lately — you're her good friend, do you know what happened?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L18-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L18-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[相信|xiāngxìn|believe]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[地|de|(adverbial marker)]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[只要|zhǐyào|as long as]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[机会|jīhuì|opportunity]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[关于|guānyú|about]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[她|tā|she] [说话|shuōhuà|speaks] [的|de|(possessive)] （E [声音|shēngyīn|voice]） [多|duō|how] [好听|hǎotīng|nice] [啊！|a!|!]</div>
          <div class="sent-en">Her voice is so nice!</div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L18-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">（<span class="blank">　</span>） [出国|chūguó|going abroad] [学习|xuéxí|to study] [的|de|(possessive)] [事，|shì,|matter,] [我|wǒ|I] [还有|háiyǒu|still have] [几个|jǐ ge|a few] [问题。|wèntí.|questions.]</div>
          <div class="sent-en">About going abroad to study, I still have a few questions.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L18-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[很多|hěnduō|Many] [人|rén|people] [都|dōu|all] [想|xiǎng|want to] [去|qù|go to] [大城市|dà chéngshì|big cities] [工作，|gōngzuò,|work,] [因为|yīnwèi|because] （<span class="blank">　</span>） [多一些。|duō yìxiē.|there are more.]</div>
          <div class="sent-en">Many people want to work in big cities because there are more opportunities.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L18-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[你|nǐ|you] [别|bié|don't] [着急，|zháojí,|worry,] [慢慢|mànman|slowly] （<span class="blank">　</span>） [说。|shuō.|say.]</div>
          <div class="sent-en">Don't worry, speak slowly.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L18-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [明天|míngtiān|tomorrow] [我|wǒ|I] [一定|yídìng|definitely] [不会|bú huì|won't] [迟到|chídào|be late] [了。|le.|(change)]</div>
          <div class="zh">[B：|B:|B:] [你|nǐ|you] [说|shuō|say] [什么|shénme|what] [我|wǒ|I] [都|dōu|all] [不会|bú huì|won't] （<span class="blank">　</span>） [的。|de.|(nominalizer)]</div>
          <div class="sent-en">A: I definitely won't be late tomorrow.<br>B: I won't believe anything you say.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L18-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [爸爸，|bàba,|Dad,] [周末|zhōumò|weekend] [我|wǒ|I] [想|xiǎng|want to] [去|qù|go to] [公园|gōngyuán|the park] [玩儿。|wánr.|to play.]</div>
          <div class="zh">[B：|B:|B:] [好啊，|hǎo a,|Sure,] （<span class="blank">　</span>） [不下雨，|bú xià yǔ,|it doesn't rain,] [我|wǒ|I] [就|jiù|then] [带|dài|take] [你|nǐ|you] [去。|qù.|go.]</div>
          <div class="sent-en">A: Dad, I want to go to the park this weekend.<br>B: Sure — as long as it doesn't rain, I'll take you.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L18-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L18-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[有人|yǒurén|Someone] [问|wèn|asked] [我|wǒ|me] [长|zhǎng|grow] [得|de|(complement)] [像|xiàng|like] [谁，|shéi,|who,] [关于|guānyú|about] [这个|zhège|this] [问题，|wèntí,|question,] [我|wǒ|I] [觉得|juéde|feel] [很|hěn|very] [难|nán|hard] [回答。|huídá.|to answer.] [家里人|jiā li rén|Family members] [一般|yìbān|generally] [觉得，|juéde,|feel,] [我|wǒ|my] [的|de|(possessive)] [鼻子|bízi|nose] [和|hé|and] [嘴|zuǐ|mouth] [像|xiàng|like] [我爸爸，|wǒ bàba,|my dad,] [我|wǒ|my] [的|de|(possessive)] [眼睛|yǎnjìng|eyes] [像|xiàng|like] [我妈妈，|wǒ māma,|my mom,] [所以|suǒyǐ|so] [我|wǒ|I] [有机会|yǒu jīhuì|when I have the chance] [就|jiù|then] [会|huì|will] [跟|gēn|with] [他们|tāmen|them] [比一比。|bǐ yi bǐ.|compare.] [我|wǒ|I] [发现，|fāxiàn,|discovered,] [我|wǒ|my] [的|de|(possessive)] [鼻子、|bízi,|nose,] [嘴|zuǐ|mouth] [和|hé|and] [眼睛|yǎnjìng|eyes] [不但|búdàn|not only] [像|xiàng|like] [我爸爸，|wǒ bàba,|my dad,] [而且|érqiě|but also] [也|yě|also] [像|xiàng|like] [我妈妈，|wǒ māma,|my mom,] [但是|dànshì|but] [比|bǐ|than] [他们|tāmen|them] [的|de|(possessive)] [都|dōu|all] [好看。|hǎokàn.|better looking.] [你|nǐ|you] [看，|kàn,|look,] [我|wǒ|I] [是不是|shì bú shì|aren't I] [很|hěn|very] [自信？|zìxìn?|confident?]</div>
          <div class="sent-en">Someone asked me who I look like. About this question, I find it hard to answer. Family generally feel my nose and mouth look like my dad, my eyes look like my mom, so when I have the chance I compare. I discovered my nose, mouth, and eyes not only look like my dad but also like my mom — but better looking than both. See, aren't I confident?</div>
          <div class="zh ask">★ [我|wǒ|Who do I] [觉得|juéde|think] [谁|shéi|(who)] [好看？|hǎokàn?|is good-looking?]</div>
          <div class="sent-en">★ Who do I think is good-looking?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[爸爸|bàba|dad]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[妈妈|māma|mom]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[自己|zìjǐ|myself]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[比|bǐ|(Better)-looking] [他们|tāmen|than them] [的|de|(nominalizer)] [都|dōu|all] [好看|hǎokàn|(good-looking)]」→ [觉得|juéde|thinks] [自己|zìjǐ|she herself] [好看。|hǎokàn|is pretty.]</div>
        </div>
        <div class="q" id="L18-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[以前|yǐqián|Before,] [我|wǒ|I] [是|shì|was] [一家|yì jiā|a] [旅游公司|lǚyóu gōngsī|travel agency] [的|de|(possessive)] [经理，|jīnglǐ,|manager,] [有|yǒu|had] [机会|jīhuì|opportunities] [去|qù|go to] [很多|hěnduō|many] [国家。|guójiā.|countries.] [我|wǒ|I] [去|qù|went to] [很多|hěnduō|many] [城市|chéngshì|cities] [旅游|lǚyóu|traveled] [过，|guò,|(past),] [吃|chī|eaten] [过|guò|(past)] [很多|hěnduō|many] [有名|yǒumíng|famous] [的|de|(possessive)] [菜，|cài,|dishes,] [但是|dànshì|but] [如果|rúguǒ|if] [你|nǐ|you] [问|wèn|ask] [我|wǒ|me] [“世界上|“shìjiè shang|"in the world] [最好|zuì hǎo|the best] [的|de|(possessive)] [地方|dìfang|place] [是|shì|is] [哪儿？|nǎr?|where?] [最好吃|zuì hǎochī|the most delicious] [的|de|(possessive)] [是|shì|is] [哪种|nǎ zhǒng|which kind of] [菜？”，|cài?”,|dish?",] [我|wǒ|I] [相信|xiāngxìn|believe] [我|wǒ|I] [一定|yídìng|definitely] [会|huì|will] [回答：|huídá:|answer:] [“最好|“zuì hǎo|“the best] [的|de|(possessive)] [地方|dìfang|place] [是|shì|is] [我|wǒ|my] [家，|jiā,|home,] [最好吃|zuì hǎochī|the most delicious] [的|de|(possessive)] [是|shì|is] [妈妈|māma|Mom] [为|wèi|for] [我|wǒ|me] [做|zuò|made] [的|de|(possessive)] [菜。”|cài.”|dish."]</div>
          <div class="sent-en">Before, I was the manager of a travel agency and had opportunities to go to many countries. I traveled to many cities and ate many famous dishes. But if you ask me "What's the best place in the world? What's the most delicious dish?", I believe I'll definitely answer: "The best place is my home, the most delicious is the dish Mom made for me."</div>
          <div class="zh ask">★ [我：|wǒ:|I:]</div>
          <div class="sent-en">★ I: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[是旅游公司的经理|shì lǚyóu gōngsī de jīnglǐ|am a travel agency manager]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[很喜欢做菜|hěn xǐhuan zuòcài|really likes cooking]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[去过很多城市|qù guò hěnduō chéngshì|have been to many cities]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[去过|qù guò|Has traveled to] [很多|hěnduō|many] [城市|chéngshì|cities] [旅游|lǚyóu|(traveled)] [过|guò|(experience)]」。</div>
        </div>
        <div class="q" id="L18-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[你|nǐ|you] [刚到|gāng dào|just arrived at] [我们|wǒmen|our] [这儿|zhèr|place] [可能|kěnéng|might] [会|huì|will] [觉得|juéde|feel] [很|hěn|very] [奇怪，|qíguài,|strange,] [我们|wǒmen|our] [这儿|zhèr|place] [的|de|(possessive)] [冬天|dōngtiān|winter] [很冷，|hěn lěng,|is very cold,] [夏天|xiàtiān|summer] [很热，|hěn rè,|is very hot,] [春天|chūntiān|spring] [的|de|(possessive)] [天气|tiānqì|weather] [很好，|hěn hǎo,|is very good,] [不冷|bù lěng|not cold] [不热，|bù rè,|not hot,] [但是|dànshì|but] [这|zhè|this] [段|duàn|period of] [时间|shíjiān|time] [不|bù|not] [长，|cháng,|long,] [冬天|dōngtiān|winter] [过完|guò wán|after passing] [很快|hěn kuài|very quickly] [就|jiù|then] [到|dào|arrive at] [夏天|xiàtiān|summer] [了。|le.|(change)] [所以|suǒyǐ|so] [你|nǐ|you] [不用|búyòng|no need to] [买|mǎi|buy] [那么|nàme|so] [多|duō|many] [春天|chūntiān|spring] [穿|chuān|wear] [的|de|(possessive)] [衣服，|yīfu,|clothes,] [相信|xiāngxìn|believe] [你|nǐ|you] [住|zhù|living] [的|de|(possessive)] [时间|shíjiān|time] [长|cháng|long] [了，|le,|(change)] [就|jiù|then] [会|huì|will] [慢慢|mànman|slowly] [地|de|(adverbial)] [习惯|xíguàn|get used to it] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">You might find it strange when you first arrive — our winters are very cold, summers very hot, spring weather is very good, neither cold nor hot, but this period isn't long. Winter passes and summer comes quickly. So you don't need to buy many spring clothes — believe me, after living here a while you'll slowly get used to it.</div>
          <div class="zh ask">★ [我们|wǒmen|Our] [这里：|zhèli:|place:]</div>
          <div class="sent-en">★ Our place here: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[天气很奇怪|tiānqì hěn qíguài|weather is strange]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[春天不长|chūntiān bù cháng|spring isn't long]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[四季都不冷|sì jì dōu bù lěng|none of the four seasons is cold]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[这|zhè|The season] [段|duàn|(period)] [时间|shíjiān|doesn’t] [不|bù|not] [长|cháng|last long]」→ [春天|chūntiān|spring] [不|bù|is] [长。|cháng|short.]</div>
        </div>
        <div class="q" id="L18-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[今天|jīntiān|Today] [我|wǒ|I] [买了|mǎi le|bought] [很多|hěnduō|many] [铅笔，|qiānbǐ,|pencils,] [这些|zhèxiē|these] [铅笔|qiānbǐ|pencils] [都|dōu|all] [是|shì|are] [为|wèi|for] [我儿子|wǒ érzi|my son] [买|mǎi|bought] [的，|de,|,] [这|zhè|this] [段|duàn|period of] [时间|shíjiān|time] [他|tā|he] [在|zài|is] [学|xué|learning] [画画儿，|huà huàr,|drawing,] [他|tā|he] [最爱|zuì ài|loves most] [画|huà|draw] [小动物，|xiǎo dòngwù,|small animals,] [小狗、|xiǎogǒu,|puppies,] [小猫、|xiǎomāo,|kittens,] [小鱼|xiǎoyú|small fish] [什么|shénme|such as] [的，|de,|,] [然后|ránhòu|then] [给|gěi|to] [这些|zhèxiē|these] [小动物|xiǎo dòngwù|small animals] [画上|huà shàng|paint on] [不一样|bù yíyàng|different] [的|de|(possessive)] [颜色。|yánsè.|colors.] [我|wǒ|I] [相信，|xiāngxìn,|believe,] [只要|zhǐyào|as long as] [他|tā|he] [认真|rènzhēn|seriously] [学习|xuéxí|studies] [画画儿，|huà huàr,|drawing,] [以后|yǐhòu|in the future] [一定|yídìng|definitely] [会|huì|will] [是|shì|be] [一个|yí ge|a] [有名|yǒumíng|famous] [的|de|(possessive)] [画家|huàjiā|painter] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">Today I bought many pencils for my son. Lately he's been learning to draw. He loves drawing small animals — puppies, kittens, small fish — then painting them different colors. I believe as long as he studies seriously, he'll definitely be a famous painter in the future.</div>
          <div class="zh ask">★ [我|wǒ|My] [儿子：|érzi:|son:]</div>
          <div class="sent-en">★ My son: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[是一个画家|shì yí ge huàjiā|is a painter]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[喜欢画小动物|xǐhuan huà xiǎo dòngwù|likes drawing small animals]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[买了很多铅笔|mǎi le hěnduō qiānbǐ|bought many pencils]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[他|tā|He] [最爱|zuì ài|most loves] [画|huà|drawing] [小动物|xiǎo dòngwù|small animals]」。</div>
        </div>
        <div class="q" id="L18-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[奶奶|nǎinai|Grandma] [以前|yǐqián|before] [是|shì|was] [他们学校|tāmen xuéxiào|their school] [里|li|inside] [有名|yǒumíng|famous] [的|de|(possessive)] [音乐|yīnyuè|music] [老师，|lǎoshī,|teacher,] [她|tā|she] [不但|búdàn|not only] [歌|gē|songs] [唱|chàng|sang] [得|de|(complement)] [特别|tèbié|especially] [好听，|hǎotīng,|well,] [而且|érqiě|but also] [对|duì|to] [人|rén|people] [也|yě|also] [非常|fēicháng|very] [热情，|rèqíng,|warm,] [大家|dàjiā|everyone] [都|dōu|all] [很|hěn|very] [喜欢|xǐhuan|liked] [她。|tā.|her.] [最近|zuìjìn|Recently] [这|zhè|this] [段|duàn|period of] [时间，|shíjiān,|time,] [奶奶|nǎinai|Grandma] [身体|shēntǐ|health] [不|bù|not] [太|tài|quite] [舒服，|shūfu,|well,] [很多|hěnduō|many] [人|rén|people] [都|dōu|all] [来|lái|came] [家里|jiā li|home] [看|kàn|visit] [她，|tā,|her,] [有的|yǒude|some] [人|rén|people] [还是|háishi|even] [从|cóng|from] [外地|wàidì|other places] [来|lái|came] [的，|de,|,] [没来|méi lái|those who didn't come] [的|de|(possessive)] [人|rén|people] [也|yě|also] [都|dōu|all] [打电话|dǎ diànhuà|called] [向|xiàng|to] [她|tā|her] [问好。|wènhǎo.|send regards.] [他们|tāmen|they] [说，|shuō,|say,] [只要|zhǐyào|as long as] [奶奶|nǎinai|Grandma] [心里|xīnli|in her heart] [高兴，|gāoxìng,|happy,] [病|bìng|illness] [很快|hěn kuài|quickly] [就|jiù|then] [会|huì|will] [好|hǎo|get better] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">Grandma used to be a famous music teacher at their school. Not only did she sing especially well, but she was also very warm — everyone liked her. Recently Grandma hasn't been feeling well. Many people came to visit her at home — some even from out of town. Those who didn't come called to send regards. They say as long as Grandma is happy in her heart, she'll get better quickly.</div>
          <div class="zh ask">★ [关于|guānyú|About] [奶奶，|nǎinai,|Grandma,] [可以|kěyǐ|we can] [知道：|zhīdào:|know:]</div>
          <div class="sent-en">★ About Grandma, we can know: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[学生们都很喜欢她|xuéshengmen dōu hěn xǐhuan tā|students all like her]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[她的学生都在外地|tā de xuésheng dōu zài wàidì|her students are all out of town]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[常给学生打电话|cháng gěi xuésheng dǎ diànhuà|often calls students]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[大家|dàjiā|Everyone] [都|dōu|all] [很|hěn|really] [喜欢|xǐhuan|likes] [她|tā|her]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L18-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L18-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[关于|guānyú|about] [我想买|wǒ xiǎng mǎi|I want to buy] [一本|yì běn|a] [动物|dòngwù|animal] [的|de|(possessive)] [书|shū|book]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|I] [想|xiǎng|want] [买|mǎi|to buy] [一本|yì běn|a] [关于|guānyú|about] [动物|dòngwù|animals] [的|de|(possessive)] [书。|shū|book.]<div class="sent-en">I want to buy a book about animals.</div></div>
        </div>
        <div class="write-item" id="L18-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[我相信|wǒ xiāngxìn|I believe] [同意|tóngyì|agree] [妈妈|māma|Mom] [的|de|(nominalizer)] [会|huì|will]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|I] [相信|xiāngxìn|believe] [妈妈|māma|Mom] [会|huì|will] [同意|tóngyì|agree] [的。|de|(nominalizer)]<div class="sent-en">I believe Mom will agree.</div></div>
        </div>
        <div class="write-item" id="L18-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[旅游|lǚyóu|travel] [有机会|yǒu jīhuì|when there's a chance] [我就去|wǒ jiù qù|I'll go] [只要|zhǐyào|as long as] [别的国家|biéde guójiā|other countries]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[只要|zhǐyào|As long as] [有|yǒu|there’s] [机会|jīhuì|a chance,] [我|wǒ|I’ll] [就|jiù|(then)] [去|qù|go to] [别的|biéde|other] [国家|guójiā|countries] [旅游。|lǚyóu|traveling.]<div class="sent-en">As long as there's a chance, I'll travel to other countries.</div></div>
        </div>
        <div class="write-item" id="L18-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[大家|dàjiā|everyone] [看着我|kàn zhe wǒ|looking at me] [地|de|(adverbial marker)] [奇怪|qíguài|strangely] [都|dōu|all]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[大家|dàjiā|Everyone] [都|dōu|all] [奇怪地|qíguài de|strangely] [看着|kàn zhe|looked at] [我。|wǒ|me.]<div class="sent-en">Everyone looked at me strangely.</div></div>
        </div>
        <div class="write-item" id="L18-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[问路|wèn lù|ask for directions] [向我|xiàng wǒ|toward me] [外地人|wàidì rén|out-of-towner] [一个|yí ge|a]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[一个|yí ge|An] [外地人|wàidì rén|out-of-towner] [向|xiàng|asked] [我|wǒ|me] [问路。|wèn lù|for directions.]<div class="sent-en">An out-of-towner asked me for directions.</div></div>
        </div>

        <h4 id="L18-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L18-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[你|nǐ|you] [要|yào|need to] [多|duō|more] <span class="blank-input"><span class="input-py">xiàng</span><input type="text" data-ans="向"></span> [小丽|Xiǎolì|Xiaoli] [学习，|xuéxí,|learn from,] [你看|nǐ kàn|look at] [她，|tā,|her,] [做事|zuòshì|doing things] [总是|zǒngshì|always] [很|hěn|very] [认真。|rènzhēn.|serious.]</div>
          <div class="sent-en">You should learn from Xiaoli — look at her, she's always very serious.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[向|xiàng|toward]</span></div>
        </div>
        <div class="write-item" id="L18-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[这|zhè|this] <span class="blank-input"><span class="input-py">zhī</span><input type="text" data-ans="只"></span> [小猫|xiǎomāo|kitten] [很|hěn|very] [可爱，|kě'ài,|cute,] [它|tā|it] [叫|jiào|is called] [什么|shénme|what] [名字？|míngzi?|name?]</div>
          <div class="sent-en">This kitten is very cute — what's its name?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[只|zhī|(MW for animals)]</span></div>
        </div>
        <div class="write-item" id="L18-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[关于|guānyú|About] [你们|nǐmen|your] <span class="blank-input"><span class="input-py">guó</span><input type="text" data-ans="国"></span> [家，|jiā,|country,] [你|nǐ|you] [能|néng|can] [简单|jiǎndān|briefly] [介绍|jièshào|introduce] [一下|yíxià|a bit] [吗？|ma?|(question)]</div>
          <div class="sent-en">Can you briefly introduce your country?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[国|guó|country]</span></div>
        </div>
        <div class="write-item" id="L18-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[妈妈|māma|Mom] [不|bù|didn't] [同意|tóngyì|agree] [他|tā|him] [出去|chūqù|go out] [玩儿，|wánr,|to play,] [他|tā|he] [生气|shēngqì|angrily] <span class="blank-input"><span class="input-py">de</span><input type="text" data-ans="地"></span> [回|huí|went back] [房间|fángjiān|to his room] [了。|le.|(change)]</div>
          <div class="sent-en">Mom didn't let him go out to play — he angrily went back to his room.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[地|de|(adverbial marker)]</span></div>
        </div>
        <div class="write-item" id="L18-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[我|wǒ|I] [最|zuì|most] [喜欢|xǐhuan|like] [小狗，|xiǎogǒu,|puppies,] [你|nǐ|you] [最|zuì|most] [喜欢|xǐhuan|like] [哪种|nǎ zhǒng|which kind of] <span class="blank-input"><span class="input-py">dòng</span><input type="text" data-ans="动"></span> [物？|wù?|animal?]</div>
          <div class="sent-en">I like puppies most — which kind of animal do you like most?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[动|dòng|moving]（[动物|dòngwù|animal]）</span></div>
        </div>

        <h4 id="L18-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L18-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[关|guān|About] <span class="blank-input"><input type="text" data-ans="于"></span> [城市|chéngshì|city] [环境|huánjìng|environment] [的|de|(possessive)] [问题，|wèntí,|problem,] [我们|wǒmen|we] [认为|rènwéi|think] [最|zuì|most] [重要|zhòngyào|important] [的|de|(possessive)] [是|shì|is] [把|bǎ|(BA)] [街道|jiēdào|streets] [打扫|dǎsǎo|clean] <span class="blank-input"><input type="text" data-ans="干"></span> [净。|jìng.|clean.]</div>
          <div class="zh" style="margin-top:6px;">[于|yú|at]　[干|gān|dry]</div>
          <div class="sent-en">About the city's environment, we think the most important thing is keeping the streets clean.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[于|yú|(as in 关于 “about”)]、[干|gàn|(as in 干净 “clean”)]</div>
        </div>
        <div class="write-item" id="L18-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[这|zhè|these] <span class="blank-input"><input type="text" data-ans="几"></span> [个人|ge rén|people] [中，|zhōng,|among,] [你|nǐ|you] [是|shì|are] [最|zuì|most] [聪明|cōngming|smart] [的，|de,|,] [所以|suǒyǐ|so] [你|nǐ|you] [有|yǒu|have] <span class="blank-input"><input type="text" data-ans="机"></span> [会|huì|opportunity] [来|lái|to come to] [我们公司|wǒmen gōngsī|our company] [工作。|gōngzuò.|work.]</div>
          <div class="zh" style="margin-top:6px;">[几|jǐ|several]　[机|jī|machine]</div>
          <div class="sent-en">Among these people, you're the smartest, so you have the opportunity to work at our company.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[几|jǐ|(as in 几个 “a few”)]、[机|jī|(as in 机会 “opportunity”)]</div>
        </div>
        <div class="write-item" id="L18-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[小丽|Xiǎolì|Xiaoli] <span class="blank-input"><input type="text" data-ans="和"></span> [小刚|Xiǎogāng|Xiaogang] [要|yào|are going to] [去|qù|go to] [看|kàn|visit] [朋友，|péngyou,|a friend,] [但是|dànshì|but] [他们|tāmen|they] [不|bù|don't] [知道|zhīdào|know] [买|mǎi|buy] [哪|nǎ|which] <span class="blank-input"><input type="text" data-ans="种"></span> [水果|shuǐguǒ|fruit] [好。|hǎo.|is good.]</div>
          <div class="zh" style="margin-top:6px;">[和|hé|and]　[种|zhǒng|kind]</div>
          <div class="sent-en">Xiaoli and Xiaogang are going to visit a friend, but they don't know which kind of fruit to buy.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[和|hé|(as in 和…一样 “same as”)]、[种|zhǒng|(as in 一种 “a kind”)]</div>
        </div>
        <div class="write-item" id="L18-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[请你|qǐng nǐ|Please] [相信，|xiāngxìn,|believe,] [这件事|zhè jiàn shì|this matter] [我|wǒ|I] [不|bù|not] [但|dàn|only] <span class="blank-input"><input type="text" data-ans="自"></span> [己|jǐ|self] [就|jiù|then] [能|néng|can] [做，|zuò,|do,] [而|ér|but] <span class="blank-input"><input type="text" data-ans="且"></span> [能|néng|can] [做|zuò|do] [得|de|(complement)] [很好。|hěn hǎo.|very well.]</div>
          <div class="zh" style="margin-top:6px;">[自|zì|self]　[且|qiě|moreover]</div>
          <div class="sent-en">Please believe me — I can not only do this matter myself, but also do it very well.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[自|zì|(as in 自己 “oneself”)]、[且|qiě|(as in 而且 “moreover”)]</div>
        </div>
        <div class="write-item" id="L18-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[这个|zhège|this] [地|dì|place] <span class="blank-input"><input type="text" data-ans="方"></span> [的|de|(possessive)] [房子|fángzi|house] [太贵|tài guì|too expensive] [了，|le,|,] [那么|nàme|so] [小|xiǎo|small] [就|jiù|then] [需要|xūyào|needs] [三百多|sānbǎi duō|over 300] <span class="blank-input"><input type="text" data-ans="万"></span>。|.</div>
          <div class="zh" style="margin-top:6px;">[方|fāng|square]　[万|wàn|ten thousand]</div>
          <div class="sent-en">Houses in this area are too expensive — such a small one costs over 3 million.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[方|fāng|(as in 地方 “place”)]、[万|wàn|(as in 千万 “must”)]</div>
        </div>

        <h4 id="L18-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L18-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[园|yuán|garden] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[公园|gōngyuán|park]、[花园|huāyuán|flower garden]</div></div>
        </div>
        <div class="write-item" id="L18-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[病|bìng|illness] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[生病|shēngbìng|get sick]、[有病|yǒu bìng|sick]</div></div>
        </div>
        <div class="write-item" id="L18-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[问|wèn|ask] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[问题|wèntí|question]、[问你|wèn nǐ|ask you]</div></div>
        </div>
        <div class="write-item" id="L18-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[闻|wén|hear] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[新闻|xīnwén|news]、[听闻|tīngwén|hear of]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L18-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小明|Xiǎomíng|Xiaoming] [看见|kànjiàn|saw] [一只|yì zhī|a]
            <span class="blank-input review-blank"><span class="input-py">zhǐ</span><input type="text" data-ans="只"></span>
            [可爱|kě'ài|cute] [的|de|(possessive)] [小狗，|xiǎogǒu,|puppy,] [眼睛|yǎnjìng|eyes] [大大的，|dàdà de,|big,]
            <span class="blank-input review-blank"><span class="input-py">zuǐ</span><input type="text" data-ans="嘴"></span>
            [小小的，|xiǎoxiǎo de,|small,] [想|xiǎng|wants to] [买|mǎi|buy] [回去。|huíqù.|back.] [妈妈|māma|Mom] [不|bù|not] [同意，|tóngyì,|agree,] [因为|yīnwèi|because] [她|tā|she] [觉得|juéde|feels]
            <span class="blank-input review-blank"><span class="input-py">dòngwù</span><input type="text" data-ans="动物"></span>
            [需要|xūyào|need] [人|rén|people] [照顾，|zhàogù,|to take care of,] [但是|dànshì|but] [这|zhè|this]
            <span class="blank-input review-blank"><span class="input-py">duàn</span><input type="text" data-ans="段"></span>
            [时间|shíjiān|time] [小明|Xiǎomíng|Xiaoming] [自己|zìjǐ|his own] [的|de|(possessive)] [衣服|yīfu|clothes] [都|dōu|all] [不|bù|not] [洗，|xǐ,|wash,] [是|shì|is] [不会|bú huì|cannot] [照顾|zhàogù|take care of] [小狗|xiǎogǒu|the puppy] [的。|de.|(nominalizer)] [小明|Xiǎomíng|Xiaoming] [说，|shuō,|says,]
            <span class="blank-input review-blank"><span class="input-py">zhǐyào</span><input type="text" data-ans="只要"></span>
            [妈妈|māma|Mom] [给|gěi|to] [他|tā|him] [买，|mǎi,|buy,] [他|tā|he] [就|jiù|then] [能|néng|can] [照顾好|zhàogù hǎo|take good care of] [小狗。|xiǎogǒu.|the puppy.]</div>
          <div class="sent-en">Xiaoming saw a cute puppy with big eyes and a small mouth and wanted to buy it and take it home. Mom didn't agree, because she feels animals need people to take care of them, and lately Xiaoming doesn't even wash his own clothes — he can't take care of a puppy. Xiaoming says that as long as Mom buys it for him, he can take good care of it.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[只|zhǐ|(MW for animals)]、[嘴|zuǐ|mouth]、[动物|dòngwù|animal]、[段|duàn|period of]、[只要|zhǐyào|as long as]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [一个|yí ge|A] [学生|xuéshēng|student] [去|qù|went to] [公司|gōngsī|a company] [找工作，|zhǎo gōngzuò,|to find a job,] [他|tā|he] [认为|rènwéi|feels] [这家|zhè jiā|this] [公司|gōngsī|company] [不但|búdàn|not only] [很|hěn|very]
            <span class="blank-input review-blank"><span class="input-py">yǒumíng</span><input type="text" data-ans="有名"></span>
            [，|,|,] [而且|érqiě|but also] [工作|gōngzuò|work] [环境|huánjìng|environment] [好。|hǎo.|is good.] [但是|dànshì|but] [经理|jīnglǐ|the manager] [告诉|gàosu|told] [他，|tā,|him,] [这个|zhège|this] [工作|gōngzuò|job] [有点儿|yǒudiǎnr|a bit] [累，|lěi,|tiring,] [需要|xūyào|requires] [经常|jīngcháng|often] [去|qù|go] [外地，|wàidì,|to other places,] [不知道|bù zhīdào|don't know] [他|tā|his] [的|de|(possessive)] [家人|jiārén|family] [能不能|néng bu néng|can]
            <span class="blank-input review-blank"><span class="input-py">tóngyì</span><input type="text" data-ans="同意"></span>。
            [他|tā|he] [觉得|juéde|feels] [没|méi|no] [问题，|wèntí,|problem,] [只要|zhǐyào|as long as] [他|tā|he] [愿意，|yuànyì,|willing,] [他|tā|his] [家人|jiārén|family]
            <span class="blank-input review-blank"><span class="input-py">huì</span><input type="text" data-ans="会"></span>
            [同意|tóngyì|agree] [的。|de.|(nominalizer)] [他|tā|he] [相信|xiāngxìn|believes] [自己|zìjǐ|himself] [会|huì|will] [有|yǒu|have] [这个|zhège|this] [工作|gōngzuò|job]
            <span class="blank-input review-blank"><span class="input-py">jīhuì</span><input type="text" data-ans="机会"></span>
            [的。|de.|(nominalizer)] [经理|jīnglǐ|The manager] [告诉|gàosu|told] [他|tā|him] [明天|míngtiān|tomorrow] [来|lái|to come] [上班，|shàngbān,|to work,] [他|tā|he] [很|hěn|very] [高兴|gāoxìng|happy] [有|yǒu|to have] [这个|zhège|this] [工作|gōngzuò|job] [机会，|jīhuì,|opportunity,] [他|tā|he] [说|shuō|says] [他|tā|he] [会|huì|will] [努力|nǔlì|work hard] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">A student went to a company to find a job. He feels this company is not only famous but also has a good work environment. But the manager told him this job is a bit tiring — it requires often going to other places — he doesn't know if his family will agree. He feels there's no problem — as long as he's willing, his family will agree. He believes he'll have this job opportunity. The manager told him to come to work tomorrow. He's very happy to have this job opportunity and says he'll work hard.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[有名|yǒumíng|famous]、[同意|tóngyì|agree]、[会|huì|will]、[机会|jīhuì|opportunity]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[19] = {
  navLabel:'第19课',
  html: `
    <div class="lesson">
      <h2>第 19 课　你没看出来吗
        <span class="title-py">Dì shíjiǔ kè · Nǐ méi kàn chūlái ma</span>
        <small>Lesson 19 · Didn't you recognise him?</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L19-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图19.png" alt="听力图19" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图19.png</b></span>
        </div>

        <div class="q" id="L19-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你看，|nǐ kàn,|Look,] [树上|shù shang|on the tree] [那|nà|that] [只|zhī|(MW)] [鸟，|niǎo,|bird,] [红红的，|hónghóng de,|red,] [嘴|zuǐ|beak] [小小的，|xiǎoxiǎo de,|small,] [是|shì|is] [什么|shénme|what] [鸟？|niǎo?|bird?]</div>
          <div class="zh stem">[男：|Nán:|M:] [不|bù|don't] [知道，|zhīdào,|know,] [我|wǒ|I] [也|yě|also] [是|shì|am] [第一次|dì yī cì|the first time] [见。|jiàn.|seeing it.]</div>
          <div class="sent-en">W: Look, that bird on the tree — red with a small beak. What kind of bird is it?<br>M: I don't know — it's my first time seeing it too.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[一只|yì zhī|a] [鸟|niǎo|bird]）</div>
        </div>
        <div class="q" id="L19-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[男：|Nán:|M:] [别|bié|don't] [害怕，|hàipà,|be afraid,] [不要|bú yào|don't] [动，|dòng,|move,] [让|ràng|let] [我|wǒ|me] [看|kàn|look] [一下|yíxià|a bit] [你|nǐ|your] [的|de|(possessive)] [耳朵。|ěrduo.|ear.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [医生，|yīshēng,|Doctor,] [怎么样？|zěnmeyàng?|how is it?] [没事|méi shì|nothing wrong] [吧？|ba?|(question)] [我|wǒ|I] [最近|zuìjìn|recently] [总是|zǒngshì|always] [听不清|tīng bu qīng|can't hear clearly] [别人|biérén|others] [说话。|shuōhuà.|speak.]</div>
          <div class="sent-en">M: Don't be afraid, don't move — let me look at your ear.<br>W: Doctor, how is it? Nothing wrong, right? Lately I can't hear others clearly.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[医生|yīshēng|a doctor] [检查|jiǎnchá|examining] [耳朵|ěrduo|the ear]）</div>
        </div>
        <div class="q" id="L19-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [都|dōu|already] [几点|jǐ diǎn|what time] [了，|le,|,] [儿子|érzi|son] [的|de|(possessive)] [房间|fángjiān|room] [里|li|inside] [一点儿|yìdiǎnr|not a bit of] [声音|shēngyīn|sound] [都|dōu|even] [没有，|méiyǒu,|none,] [他|tā|he] [还|hái|still] [在|zài|is] [睡觉|shuìjiào|sleeping] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [没有，|méiyǒu,|No,] [他|tā|he] [已经|yǐjīng|already] [起床|qǐchuáng|got up] [了，|le,|,] [现在|xiànzài|now] [在|zài|is] [洗脸|xǐ liǎn|washing his face] [呢。|ne.|(emphasis)]</div>
          <div class="sent-en">W: It's so late and there's not a sound from our son's room — is he still sleeping?<br>M: No, he's already up and washing his face.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[男孩|nánhái|a boy] [在|zài|is] [洗脸|xǐ liǎn|washing his face]）</div>
        </div>
        <div class="q" id="L19-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [会|huì|can] [骑马？|qí mǎ?|ride a horse?] [跟|gēn|with] [谁|shéi|who] [学|xué|learned] [的？|de?|(nominalizer)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|my] [爷爷，|yéye,|grandpa,] [他|tā|he] [很|hěn|very] [喜欢|xǐhuan|likes] [骑马，|qí mǎ,|riding horses,] [而且|érqiě|and] [骑|qí|rides] [得|de|(complement)] [很好。|hěn hǎo.|very well.]</div>
          <div class="sent-en">M: You can ride a horse? Who did you learn from?<br>W: My grandpa — he loves riding horses and rides very well.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[骑马|qí mǎ|riding a horse]）</div>
        </div>
        <div class="q" id="L19-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [穿|chuān|are wearing] [的|de|(possessive)] [这件|zhè jiàn|this] [红色|hóngsè|red] [运动服|yùndòngfú|sportswear] [真|zhēn|really] [好看。|hǎokàn.|nice.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [谢谢，|xièxie,|Thanks,] [我|wǒ|I] [觉得|juéde|feel] [穿上|chuān shàng|putting on] [它，|tā,|it,] [让|ràng|let] [我|wǒ|me] [年轻|niánqīng|young] [了|le|(change)] [不少。|bùshǎo.|quite a bit.]</div>
          <div class="sent-en">M: This red sportswear you're wearing looks really nice.<br>W: Thanks — I feel putting it on makes me look much younger.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[穿|chuān|wearing] [红色|hóngsè|red] [运动服|yùndòngfú|sportswear] [的|de|(possessive)] [人|rén|person]）</div>
        </div>

        <h4 id="L19-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L19-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[上下班|shàng xià bān|Commuting] [的|de|(possessive)] [时候，|shíhou,|when,] [我|wǒ|I] [都|dōu|all] [会|huì|will] [经过|jīngguò|pass by] [这|zhè|this] [条|tiáo|(MW)] [街。|jiē.|street.] [街道|jiēdào|The street] [两边|liǎngbiān|on both sides] [的|de|(possessive)] [树，|shù,|trees,] [还有|háiyǒu|and also] [树上|shù shang|on the trees] [的|de|(possessive)] [小鸟，|xiǎoniǎo,|little birds,] [会|huì|will] [使|shǐ|make] [我|wǒ|me] [觉得|juéde|feel] [很|hěn|very] [快乐。|kuàilè.|happy.]</div>
          <div class="sent-en">When commuting, I always pass by this street. The trees on both sides and the little birds on the trees make me happy.</div>
          <div class="zh stem">★ [他|tā|he] [每天|měitiān|every day] [上下班|shàng xià bān|commuting] [都|dōu|all] [很|hěn|very] [快乐。|kuàilè.|happy.]</div>
          <div class="sent-en">★ He's very happy commuting every day.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[会|huì|would] [让|ràng|make] [我|wǒ|me] [觉得|juéde|feel] [很快乐|hěn kuàilè|very happy]」→ [上下班|shàng xià bān|commuting] [很|hěn|is] [快乐。|kuàilè|happy.]" data-expl-en="'Makes me happy' — commuting is happy."></div>
        </div>
        <div class="q" id="L19-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[最近，|zuìjìn,|Recently,] [我家|wǒ jiā|my family] [小雨|Xiǎoyǔ|Xiaoyu] [一直|yìzhí|always] [哭，|kū,|crying,] [说|shuō|saying] [耳朵|ěrduo|ear] [疼。|téng.|hurts.] [我|wǒ|I] [带|dài|took] [他|tā|him] [去|qù|to] [医院，|yīyuàn,|the hospital,] [但是|dànshì|but] [医生|yīshēng|the doctor] [说|shuō|said] [他|tā|his] [的|de|(possessive)] [耳朵|ěrduo|ears] [没|méi|no] [问题，|wèntí,|problem,] [不用|búyòng|no need to] [吃药，|chī yào,|take medicine,] [多|duō|more] [喝些|hē xiē|drink some] [水|shuǐ|water] [就|jiù|then] [可以|kěyǐ|is fine] [了。|le.|(change)]</div>
          <div class="sent-en">Recently our Xiaoyu keeps crying, saying his ear hurts. I took him to the hospital, but the doctor said there's no problem with his ears — no need for medicine, just drink more water.</div>
          <div class="zh stem">★ [小雨|Xiǎoyǔ|Xiaoyu] [哭|kū|cries] [是|shì|is] [因为|yīnwèi|because] [耳朵|ěrduo|ear] [有|yǒu|has] [问题|wèntí|a problem] [了。|le.|(change)]</div>
          <div class="sent-en">★ Xiaoyu cries because there's a problem with his ear.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[医生|yīshēng|The doctor] [说|shuō|said] [耳朵|ěrduo|the ear] [没|méi|has no] [问题。|wèntí|problem.]" data-expl-en="The doctor said no ear problem."></div>
        </div>
        <div class="q" id="L19-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[这张|zhè zhāng|This] [照片|zhàopiàn|photo] [让|ràng|makes] [我|wǒ|me] [想起|xiǎngqǐ|think of] [了|le|(past)] [我|wǒ|my] [的|de|(possessive)] [家，|jiā,|home,] [以前|yǐqián|before] [我家|wǒ jiā|my family] [住在|zhù zài|lived by] [黄河|Huánghé|the Yellow River] [边上，|biān shang,|side,] [后来|hòulái|later] [因为|yīnwèi|because of] [爸爸|bàba|Dad] [工作|gōngzuò|work] [的|de|(possessive)] [关系|guānxi|reasons] [搬|bān|moved] [到|dào|to] [了|le|(past)] [这里。|zhèlǐ.|here.]</div>
          <div class="sent-en">This photo makes me think of my home. Before, my family lived by the Yellow River; later, because of Dad's work, we moved here.</div>
          <div class="zh stem">★ [他|tā|he] [以前|yǐqián|before] [住在|zhù zài|lived near] [黄河|Huánghé|the Yellow River] [附近。|fùjìn.|nearby.]</div>
          <div class="sent-en">★ He used to live near the Yellow River.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[以前|yǐqián|My family used to live] [我|wǒ|(my)] [家|jiā|(home)] [住|zhù|(live)] [在|zài|by] [黄河|Huánghé|the Yellow River] [边上|biān shang|(side)]」。" data-expl-en="'Before, my family lived by the Yellow River.'"></div>
        </div>
        <div class="q" id="L19-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[我|wǒ|I] [一直|yìzhí|always] [在|zài|have been] [找|zhǎo|looking for] [这本书，|zhè běn shū,|this book,] [没想到|méi xiǎngdào|didn't expect] [今天|jīntiān|today] [下班|xiàbān|after work] [路过|lùguò|passing by] [一家|yì jiā|a] [书店|shūdiàn|bookstore] [时|shí|when] [看见|kànjiàn|saw] [了|le|(past)] [它，|tā,|it,] [我|wǒ|I] [太|tài|so] [高兴|gāoxìng|happy] [了。|le.|(change)]</div>
          <div class="sent-en">I've been looking for this book. Unexpectedly, today after work I passed by a bookstore and saw it — I'm so happy.</div>
          <div class="zh stem">★ [他|tā|he] [终于|zhōngyú|finally] [找到|zhǎo dào|found] [那本|nà běn|that] [书|shū|book] [了。|le.|(change)]</div>
          <div class="sent-en">★ He finally found that book.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[看见|kànjiàn|saw] [它|tā|it] [了|le|(change)]」→ [终于|zhōngyú|finally] [找到。|zhǎodào|found it.]" data-expl-en="'Saw it' — finally found it."></div>
        </div>
        <div class="q" id="L19-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[你看，|nǐ kàn,|Look,] [这张|zhè zhāng|this] [照片|zhàopiàn|photo] [是|shì|was] [前年|qiánnián|the year before last] [夏天|xiàtiān|summer] [照|zhào|taken] [的，|de,|,] [那时|nà shí|at that time] [她|tā|she] [比较|bǐjiào|relatively] [瘦，|shòu,|thin,] [还是|háishi|still] [短头发。|duǎn tóufa.|short hair.]</div>
          <div class="sent-en">Look, this photo was taken the summer before last. At that time she was relatively thin and still had short hair.</div>
          <div class="zh stem">★ [现在|xiànzài|now] [她|tā|she] [是|shì|has] [长头发。|cháng tóufa.|long hair.]</div>
          <div class="sent-en">★ Now she has long hair.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[那时|nà shí|Back then] [还是|háishì|still] [短头发|duǎn tóufa|had short hair]」→ [现在|xiànzài|now] [应该|yīnggāi|should] [是|shì|have] [长头发。|cháng tóufa|long hair.]" data-expl-en="'Still short hair then' — so now she has long hair."></div>
        </div>

        <h4 id="L19-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L19-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [哭|kū|crying] [了？|le?|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [没有|méiyǒu|No] [啊，|a,|,] [刚才|gāngcái|just now] [风|fēng|wind] [刮|guā|blew] [得|de|(complement)] [太大，|tài dà,|too hard,] [眼睛|yǎnjìng|eyes] [里|li|inside] [进|jìn|got] [东西|dōngxi|something] [了。|le.|(change)]</div>
          <div class="sent-en">W: You're crying?<br>M: No — the wind was too strong just now and something got in my eye.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|what happened to] [怎么|zěnme|the man] [了？|le?|?]</div>
          <div class="sent-en">Q: What happened to the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[他不高兴了|tā bù gāoxìng le|he's unhappy]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[眼睛里有东西|yǎnjìng li yǒu dōngxi|something in his eye]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不喜欢刮风|bù xǐhuan guā fēng|doesn't like wind]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[眼睛|yǎnjìng|Something] [进|jìn|got into] [了|le|(past)] [东西|dōngxi|her eye]」。</div>
        </div>
        <div class="q" id="L19-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [小心点儿，|xiǎoxīn diǎnr,|Be careful,] [别|bié|don't] [骑|qí|ride] [太快了。|tài kuài le.|too fast.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [放心，|fàngxīn,|Relax,] [我|wǒ|I] [又|yòu|again] [不是|bú shì|not] [第一次|dì yī cì|the first time] [骑马。|qí mǎ.|riding a horse.]</div>
          <div class="sent-en">M: Be careful, don't ride too fast.<br>W: Relax — it's not my first time riding a horse.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [是|shì|(is)] [什么|shénme|what] [意思？|yìsi?|meaning?]</div>
          <div class="sent-en">Q: What does the woman mean?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[她骑得不快|tā qí de bù kuài|she doesn't ride fast]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[她不太小心|tā bú tài xiǎoxīn|she's not careful]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[她会骑马|tā huì qí mǎ|she can ride a horse]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[不是|bú shì|not] [第一次|dì yī cì|the first time] [骑马|qí mǎ|riding a horse]」→ [她|tā|she] [会|huì|can] [骑马。|qí mǎ|ride a horse.]</div>
        </div>
        <div class="q" id="L19-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[男：|Nán:|M:] [都|dōu|It's] [这么|zhème|so] [晚|wǎn|late] [了，|le,|,] [你|nǐ|you] [怎么|zěnme|why] [还|hái|still] [吃|chī|eating] [糖？|táng?|candy?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [不|bù|won't] [吃|chī|eat] [了，|le,|,] [我|wǒ|I] [现在|xiànzài|now] [就|jiù|then] [去|qù|go] [刷牙|shuā yá|brush teeth] [洗脸。|xǐ liǎn.|wash face.]</div>
          <div class="sent-en">M: It's so late — why are you still eating candy?<br>W: I won't eat any more — I'll go brush my teeth and wash my face now.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|what does the woman] [打算|dǎsuàn|plan] [做|zuò|to do] [什么？|shénme?|(what)?]</div>
          <div class="sent-en">Q: What does the woman plan to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[睡觉|shuìjiào|sleep]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[吃糖|chī táng|eat candy]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[刷牙洗脸|shuā yá xǐ liǎn|brush teeth and wash face]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[我|wǒ|I] [现在|xiànzài|now] [就|jiù|(then)] [去|qù|go] [刷牙|shuā yá|brush my teeth] [洗脸|xǐ liǎn|and wash my face]」。</div>
        </div>
        <div class="q" id="L19-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [终于|zhōngyú|finally] [来|lái|came] [了，|le,|,] [船|chuán|the boat] [马上|mǎshàng|is about to] [就|jiù|then] [开|kāi|depart] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [没|méi|didn't] [想到|xiǎngdào|expect] [坐|zuò|taking] [公共汽车|gōnggòng qìchē|the bus] [要|yào|would] [花|huā|take] [这么|zhème|so] [长时间，|cháng shíjiān,|long,] [早|zǎo|earlier] [知道|zhīdào|known] [就|jiù|then] [打车|dǎ chē|take a taxi] [来|lái|came] [了。|le.|(change)]</div>
          <div class="sent-en">M: You're finally here — the boat is about to leave.<br>W: I didn't expect the bus to take so long — if I'd known earlier, I would've taken a taxi.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|how did the woman] [是|shì|(is)] [怎么|zěnme|(how)] [来|lái|come] [这儿|zhèr|here] [的？|de?|(nominalizer)?]</div>
          <div class="sent-en">Q: How did the woman come here?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[坐船|zuò chuán|by boat]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[坐公共汽车|zuò gōnggòng qìchē|by bus]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[打车|dǎ chē|by taxi]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[没想到|méi xiǎngdào|Didn’t expect] [坐|zuò|taking] [公共汽车|gōnggòng qìchē|the bus] [要|yào|would] [花|huā|take] [这么|zhème|so] [长|cháng|much] [时间|shíjiān|time]」→ [坐|zuò|took] [了|le|(past)] [公共汽车。|gōnggòng qìchē|the bus.]</div>
        </div>
        <div class="q" id="L19-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[男：|Nán:|M:] [过生日|guò shēngrì|On your birthday] [要|yào|should] [吃|chī|eat] [面条，|miàntiáo,|noodles,] [这|zhè|this] [是|shì|is] [我|wǒ|my] [第一次|dì yī cì|first time] [做|zuò|making] [面条，|miàntiáo,|noodles,] [看看|kàn kan|see] [好吃|hǎochī|tasty] [不|bù|not] [好吃。|hǎochī.|tasty.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [一定|yídìng|definitely] [很|hěn|very] [好吃，|hǎochī,|tasty,] [谢谢|xièxie|thank] [你！|nǐ!|you!]</div>
          <div class="sent-en">M: On your birthday you should eat noodles. This is my first time making noodles — let's see if they're tasty.<br>W: They must be tasty. Thank you!</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|why is the man] [为什么|wèishénme|(why)] [要|yào|making] [做|zuò|(making)] [面条？|miàntiáo?|noodles?]</div>
          <div class="sent-en">Q: Why is the man making noodles?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[他喜欢做面条|tā xǐhuan zuò miàntiáo|he likes making noodles]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[女的过生日|nǚde guò shēngrì|it's her birthday]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[面条很好吃|miàntiáo hěn hǎochī|noodles are tasty]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[过生日|guò shēngrì|You eat noodles] [要|yào|(should)] [吃|chī|(eat)] [面条|miàntiáo|on your birthday]」→ [女的|nǚde|it’s the woman’s] [生日。|shēngrì|birthday.]</div>
        </div>

        <h4 id="L19-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L19-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [刚才|gāngcái|just now] [你|nǐ|you] [去|qù|went to] [后面|hòumiàn|the back] [的|de|(possessive)] [花园|huāyuán|garden] [了？|le?|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [没有，|méiyǒu,|No,] [我|wǒ|I] [一直|yìzhí|always] [在|zài|at] [家里|jiā li|home] [玩儿|wánr|playing] [电脑游戏。|diànnǎo yóuxì.|computer games.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|then] [是|shì|is] [我|wǒ|I] [看错|kàn cuò|saw wrong] [了，|le,|,] [那个|nàge|that] [人|rén|person] [看上去|kàn shàngqù|looked] [真|zhēn|really] [像|xiàng|like] [你。|nǐ.|you.]</div>
          <div class="zh stem">[男：|Nán:|M:] [花园|huāyuán|The garden] [里|li|inside] [没有|méiyǒu|has no] [灯，|dēng,|lights,] [看错|kàn cuò|seeing wrong] [了|le|(change)] [也|yě|also] [不|bù|not] [奇怪。|qíguài.|strange.]</div>
          <div class="sent-en">W: Did you go to the garden in the back just now?<br>M: No — I've been at home playing computer games.<br>W: Then I saw wrong — that person really looked like you.<br>M: There are no lights in the garden; seeing wrong isn't strange.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[喜欢玩儿游戏|xǐhuan wánr yóuxì|likes playing games]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[看错了一个人|kàn cuò le yí ge rén|saw the wrong person]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[去开花园的灯|qù kāi huāyuán de dēng|went to turn on the garden lights]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[是|shì|It was] [我|wǒ|I] [看错|kàn cuò|who misread] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L19-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[男：|Nán:|M:] [小丽，|Xiǎolì,|Xiaoli,] [你|nǐ|you] [怎么|zěnme|what's wrong] [了？|le?|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [刚才|gāngcái|just now] [游泳|yóuyǒng|swimming] [时|shí|when] [耳朵|ěrduo|ear] [进|jìn|got] [水|shuǐ|water] [了，|le,|,] [现在|xiànzài|now] [耳朵|ěrduo|ear] [里|li|inside] [一直|yìzhí|always] [不|bù|not] [舒服。|shūfu.|comfortable.]</div>
          <div class="zh stem">[男：|Nán:|M:] [过来，|guòlái,|Come,] [我|wǒ|I] [帮|bāng|help] [你|nǐ|you] [看|kàn|look] [一下。|yíxià.|a bit.] [现在|xiànzài|now] [好些|hǎoxiē|better] [了|le|(change)] [吗？|ma?|(question)] [下次|xià cì|next time] [小心|xiǎoxīn|careful] [点儿。|diǎnr.|a bit.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好多了，|hǎo duō le,|Much better,] [让|ràng|let] [你|nǐ|you] [担心|dānxīn|worry] [了。|le.|(change)]</div>
          <div class="sent-en">M: Xiaoli, what's wrong?<br>W: Just now when swimming, water got in my ear — now my ear keeps feeling uncomfortable.<br>M: Come, let me look. Better now? Be careful next time.<br>W: Much better — sorry to make you worry.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [怎么|zěnme|what’s wrong] [了？|le?|?]</div>
          <div class="sent-en">Q: What's wrong with the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[担心男的身体|dānxīn nán de shēntǐ|worried about the man's health]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[耳朵进水了|ěrduo jìn shuǐ le|water in her ear]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[游泳很小心|yóuyǒng hěn xiǎoxīn|swam carefully]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[耳朵|ěrduo|Water] [进|jìn|got into] [水|shuǐ|(water)] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L19-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [先生，|xiānsheng,|Sir,] [您看|nín kàn|look at] [这件|zhè jiàn|this] [衬衫|chènshān|shirt] [怎么样？|zěnmeyàng?|how about?]</div>
          <div class="zh stem">[男：|Nán:|M:] [还|hái|fairly] [不错，|búcuò,|good,] [除了|chúle|besides] [白色，|báisè,|white,] [还有|háiyǒu|also] [其他|qítā|other] [颜色|yánsè|colors] [的|de|(nominalizer)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [还有|háiyǒu|There's also] [蓝色|lánsè|blue] [和|hé|and] [黑色|hēisè|black] [的，|de,|,] [拿|ná|bring] [一件|yí jiàn|one] [您|nín|you] [试试？|shì shi?|try?]</div>
          <div class="zh stem">[男：|Nán:|M:] [好，|hǎo,|OK,] [蓝色|lánsè|Blue] [会|huì|will] [让|ràng|make] [我|wǒ|my] [的|de|(possessive)] [脸|liǎn|face] [看上去|kàn shàngqù|look] [更|gèng|more] [年轻|niánqīng|young] [些。|xiē.|a bit.]</div>
          <div class="sent-en">W: Sir, how about this shirt?<br>M: It's fairly good — besides white, are there other colors?<br>W: There's blue and black — bring one for you to try?<br>M: OK, blue will make my face look a bit younger.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|which color shirt] [想|xiǎng|does the man] [试|shì|want to] [哪种|nǎ zhǒng|(which)] [颜色|yánsè|color] [的|de|(possessive)] [衬衫？|chènshān?|try?]</div>
          <div class="sent-en">Q: Which color shirt does the man want to try?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[白色|báisè|white]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[蓝色|lánsè|blue]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[黑色|hēisè|black]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[蓝色|lánsè|Blue] [会|huì|will] [让|ràng|make] [我|wǒ|my] [的|de|(possessive)] [脸|liǎn|face] [看上去|kàn shàngqù|look] [更|gèng|even] [年轻|niánqīng|younger] [些|xiē|(a bit)]」。</div>
        </div>
        <div class="q" id="L19-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|your] [的|de|(possessive)] [脸色|liǎnsè|complexion] [看上去|kàn shàngqù|looks] [不|bù|not] [太|tài|quite] [好，|hǎo,|good,] [哪儿|nǎr|where] [不|bù|not] [舒服|shūfu|comfortable] [啊？|a?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [感冒|gǎnmào|caught a cold] [了，|le,|,] [都|dōu|already] [快|kuài|almost] [一个星期|yí ge xīngqī|a week] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [去|qù|go to] [药店|yàodiàn|the pharmacy] [给|gěi|to] [你|nǐ|you] [买点儿|mǎi diǎnr|buy some] [药|yào|medicine] [吧，|ba,|,] [买|mǎi|buy] [西药|xīyào|Western medicine] [还是|háishi|or] [中药？|zhōngyào?|Chinese medicine?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好，|hǎo,|OK,] [买点儿|mǎi diǎnr|buy some] [中药|zhōngyào|Chinese medicine] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: Your complexion doesn't look too good — where are you uncomfortable?<br>W: I've caught a cold — it's been almost a week.<br>M: Let me go to the pharmacy and buy you some medicine — Western or Chinese?<br>W: OK, buy some Chinese medicine.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[感冒了|gǎnmào le|caught a cold]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[没洗脸|méi xǐ liǎn|didn't wash her face]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[要买西药|yào mǎi xīyào|wants Western medicine]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[我|wǒ|I] [感冒|gǎnmào|caught a cold] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L19-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [回国|huí guó|Going back] [的|de|(possessive)] [船票|chuán piào|boat ticket] [买好|mǎi hǎo|bought] [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [坐船|zuò chuán|Taking a boat] [虽然|suīrán|although] [便宜，|piányi,|cheap,] [但是|dànshì|but] [太慢|tài màn|too slow] [了，|le,|,] [要|yào|takes] [十四个小时。|shísì ge xiǎoshí.|14 hours.]</div>
          <div class="zh stem">[男：|Nán:|M:] [那|nà|then] [我们|wǒmen|we] [还是|háishi|still] [坐|zuò|take] [飞机|fēijī|the plane] [吧，|ba,|,] [你|nǐ|you] [去|qù|go] [买|mǎi|buy] [两张|liǎng zhāng|two] [机票，|jīpiào,|plane tickets,] [下周末|xià zhōumò|next weekend] [的。|de.|(nominalizer)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好的，|hǎo de,|OK,] [我|wǒ|I] [现在|xiànzài|now] [就|jiù|right away] [去。|qù.|go.]</div>
          <div class="sent-en">M: Have you bought the boat tickets back home?<br>W: Taking a boat is cheap but too slow — 14 hours.<br>M: Then let's take the plane — go buy two tickets for next weekend.<br>W: OK, I'll go right now.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|what is the woman] [要|yào|going] [去|qù|to] [做|zuò|do] [什么？|shénme?|(what)?]</div>
          <div class="sent-en">Q: What is the woman going to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[买船票|mǎi chuán piào|buy boat tickets]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[买机票|mǎi jīpiào|buy plane tickets]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[回国|huí guó|go back home]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[你|nǐ|You] [去|qù|go] [买|mǎi|to buy] [两张|liǎng zhāng|two] [机票|jīpiào|plane tickets]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L19-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L19-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[什么|shénme|What] [事|shì|matter] [让|ràng|makes] [我们|wǒmen|our] [女儿|nǚ'ér|daughter] [这么|zhème|so] [高兴？|gāoxìng?|happy?]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[慢点儿，|màn diǎnr,|Slow down,] [我|wǒ|I] [这|zhè|this] [是|shì|is] [第一次|dì yī cì|the first time] [骑马。|qí mǎ.|riding a horse.]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[坐船|zuò chuán|By boat] [或者|huòzhě|or] [坐|zuò|by] [火车|huǒchē|train] [都|dōu|both] [可以，|kěyǐ,|OK,] [你|nǐ|you] [想|xiǎng|want to] [怎么|zěnme|how] [去？|qù?|go?]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[经过|jīngguò|After] [高中|gāozhōng|high school] [三年|sān nián|three years] [的|de|(possessive)] [认真学习，|rènzhēn xuéxí,|studying seriously,] [弟弟|dìdi|younger brother] [终于|zhōngyú|finally] [考上|kǎo shàng|got into] [了|le|(past)] [大学。|dàxué.|university.]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[这|zhè|Is this] [是|shì|the] [你|nǐ|you] [做|zuò|made] [的|de|(possessive)] [饭|fàn|meal] [吗？|ma?|(question)] [看起来|kàn qǐlái|looks] [真|zhēn|really] [好吃。|hǎochī.|tasty.]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [去|qù|go] [那儿|nàr|there] [吗？|ma?|(question)] （E）</div>
          <div class="sent-en">Do you know how to get there? — (E) Of course. We take the bus first, then transfer to the subway.</div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L19-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[坐船|zuò chuán|By boat] [去|qù|go] [吧，|ba,|,] [我|wǒ|I] [还|hái|still] [没|méi|never] [坐过|zuò guò|taken] [呢。|ne.|(emphasis)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Let's go by boat — I've never taken one.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L19-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[别害怕，|bié hàipà,|Don't be afraid,] [它|tā|it] [很|hěn|very] [听话，|tīnghuà,|obedient,] [你|nǐ|you] [把|bǎ|(BA)] [脚|jiǎo|feet] [放好，|fàng hǎo,|place well,] [眼睛|yǎnjìng|eyes] [看着|kàn zhe|looking] [前面。|qiánmiàn.|ahead.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Don't be afraid — it's very obedient. Place your feet well and look ahead.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L19-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[来，|lái,|Come,] [我们|wǒmen|we] [一起|yìqǐ|together] [吃|chī|eat] [吧。|ba.|(suggestion)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Come, let's eat together.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L19-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[太好了，|tài hǎo le,|Great,] [我|wǒ|I] [真|zhēn|really] [为|wèi|for] [他|tā|him] [高兴。|gāoxìng.|happy.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Great — I'm really happy for him.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L19-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[她|tā|she] [穿|chuān|wore] [了|le|(past)] [条|tiáo|(MW)] [蓝色|lánsè|blue] [的|de|(possessive)] [裙子|qúnzi|skirt] [跟|gēn|with] [同学|tóngxué|classmates] [跳舞，|tiàowǔ,|dancing,] [同学|tóngxué|classmates] [说|shuō|said] [她|tā|she] [漂亮|piàoliang|pretty] [极|jí|extremely] [了。|le.|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">She wore a blue skirt to dance with classmates — they said she was extremely pretty.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L19-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L19-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[耳朵|ěrduo|ear]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[经过|jīngguò|pass by]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[短|duǎn|short]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[过|guò|past]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[哭|kū|cry]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[她|tā|she] [说话|shuōhuà|speaks] [的|de|(possessive)] （E [声音|shēngyīn|voice]） [多|duō|how] [好听|hǎotīng|nice] [啊！|a!|!]</div>
          <div class="sent-en">Her voice is so nice!</div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L19-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[你看，|nǐ kàn,|Look,] [这|zhè|this] [是|shì|is] [我|wǒ|I] [上次|shàng cì|last time] [坐|zuò|riding] [火车|huǒchē|the train] （<span class="blank">　</span>） [黄河|Huánghé|the Yellow River] [时|shí|when] [的|de|(possessive)] [照片。|zhàopiàn.|photo.]</div>
          <div class="sent-en">Look, this is my photo from last time riding the train past the Yellow River.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L19-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[小冬|Xiǎodōng|Xiaodong] [又|yòu|again] （<span class="blank">　</span>） [了，|le,|,] [你|nǐ|you] [有|yǒu|have] [什么|shénme|what] [办法|bànfǎ|way] [吗？|ma?|(question)]</div>
          <div class="sent-en">Xiaodong is crying again — do you have any way to deal with it?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L19-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[一会儿|yíhuìr|In a moment] [你|nǐ|you] [去|qù|go] [洗脸|xǐ liǎn|wash your face] [的|de|(possessive)] [时候，|shíhou,|when,] [别忘了|bié wàng le|don't forget] [也|yě|also] [把|bǎ|(BA)] （<span class="blank">　</span>） [洗|xǐ|wash] [一下。|yíxià.|a bit.]</div>
          <div class="sent-en">When you go wash your face in a moment, don't forget to wash your ears too.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L19-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [这件|zhè jiàn|this] [运动服|yùndòngfú|sportswear] [有点儿|yǒudiǎnr|a bit] （<span class="blank">　</span>），[你|nǐ|you] [给|gěi|to] [我|wǒ|me] [拿|ná|bring] [一件|yí jiàn|one] [长|cháng|long] [的|de|(nominalizer)] [吧。|ba.|(suggestion)]</div>
          <div class="zh">[B：|B:|B:] [行，|xíng,|OK,] [我|wǒ|I] [现在|xiànzài|now] [去|qù|go] [给|gěi|to] [你|nǐ|you] [拿。|ná.|get it.]</div>
          <div class="sent-en">A: This sportswear is a bit short — bring me a long one.<br>B: OK, I'll go get it for you now.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L19-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [这个周末|zhège zhōumò|this weekend] [你|nǐ|you] [打算|dǎsuàn|plan to] [怎么|zěnme|how] （<span class="blank">　</span>）？</div>
          <div class="zh">[B：|B:|B:] [邻居|línjū|neighbor] [请|qǐng|invited] [我们|wǒmen|us] [去|qù|go to] [他家|tā jiā|his home] [玩儿|wánr|to play] [游戏。|yóuxì.|games.]</div>
          <div class="sent-en">A: How do you plan to spend this weekend?<br>B: Our neighbor invited us to his home to play games.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L19-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L19-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[我|wǒ|I] [小时候|xiǎo shíhou|when I was little] [住在|zhù zài|lived in] [中国|Zhōngguó|China] [最南边|zuì nánbiān|the southernmost part,] [一直|yìzhí|always] [没|méi|never] [见过|jiàn guò|seen] [雪。|xuě.|snow.] [前年|qiánnián|The year before last] [我|wǒ|I] [搬到|bān dào|moved to] [北京|Běijīng|Beijing] [了。|le.|(change)] [虽然|suīrán|although] [这儿|zhèr|here] [的|de|(possessive)] [冬天|dōngtiān|winter] [很冷，|hěn lěng,|is very cold,] [我|wǒ|I] [还|hái|still] [不太|bú tài|not quite] [习惯，|xíguàn,|used to it,] [但是|dànshì|but] [我|wǒ|I] [终于|zhōngyú|finally] [见到|jiàndào|saw] [雪|xuě|snow] [了，|le,|,] [雪花儿|xuěhuār|snowflakes] [白白|báibái|white] [的，|de,|,] [特别|tèbié|especially] [漂亮。|piàoliang.|beautiful.] [我|wǒ|I] [高兴|gāoxìng|happy] [得|de|(complement)] [站|zhàn|stood] [在|zài|in] [雪地|xuědì|the snow] [里|li|inside] [照|zhào|took] [了|le|(past)] [很多|hěnduō|many] [照片，|zhàopiàn,|photos,] [我|wǒ|I] [想|xiǎng|want to] [洗出来|xǐ chūlái|develop] [几张|jǐ zhāng|a few] [照片，|zhàopiàn,|photos,] [发|fā|send] [给|gěi|to] [我|wǒ|my] [南方|nánfāng|the South] [的|de|(possessive)] [朋友们|péngyoumen|friends] [看，|kàn,|see,] [让|ràng|let] [他们|tāmen|them] [也|yě|also] [高兴高兴。|gāoxìng gāoxìng.|be happy.]</div>
          <div class="sent-en">When I was little I lived in the southernmost part of China and never saw snow. The year before last I moved to Beijing. Although the winter here is very cold and I'm not quite used to it, I finally saw snow — snowflakes are white and especially beautiful. I was so happy I stood in the snow and took many photos. I want to develop a few and send them to my friends in the South so they can be happy too.</div>
          <div class="zh ask">★ [我：|wǒ:|I:]</div>
          <div class="sent-en">★ I: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[以前没见过雪|yǐqián méi jiàn guò xuě|hadn't seen snow before]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[喜欢很冷的天气|xǐhuan hěn lěng de tiānqì|likes very cold weather]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[洗了下雪的照片|xǐ le xià xuě de zhàopiàn|developed snow photos]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[一直|yìzhí|has] [没|méi|never] [见过|jiàn guò|seen] [雪|xuě|snow]」。</div>
        </div>
        <div class="q" id="L19-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[年轻人|niánqīng rén|Young people] [刚开始|gāng kāishǐ|just starting] [工作|gōngzuò|working] [的|de|(possessive)] [时候，|shíhou,|when,] [没有|méiyǒu|no] [车|chē|car] [也|yě|also] [没有|méiyǒu|no] [房，|fáng,|house,] [但是|dànshì|but] [不用|búyòng|no need to] [着急，|zháojí,|worry,] [虽然|suīrán|although] [现在|xiànzài|now] [有的|yǒude|the things you have] [东西|dōngxi|things] [不|bù|not] [多，|duō,|many,] [但|dàn|but] [只要|zhǐyào|as long as] [努力|nǔlì|work hard] [工作，|gōngzuò,|working,] [这些|zhèxiē|these] [东西|dōngxi|things] [早晚|zǎowǎn|sooner or later] [都|dōu|all] [会|huì|will] [有|yǒu|have] [的，|de,|,] [人们|rénmen|people] [常|cháng|often] [说|shuō|say] [的|de|(possessive)] [“面包|“miànbāo|"bread] [会|huì|will] [有|yǒu|have] [的，|de,|,] [牛奶|niúnǎi|milk] [也|yě|also] [会|huì|will] [有|yǒu|have] [的”|de”|too"] [就是|jiùshì|is] [这个|zhège|this] [意思。|yìsi.|meaning.]</div>
          <div class="sent-en">When young people first start working, they may not have a car or a house, but there's no need to worry. Although there isn't much now, as long as you work hard, sooner or later you'll have these things. This is what people mean by "Bread will be there, milk will be there too."</div>
          <div class="zh ask">★ [这|zhè|This] [段话|duàn huà|passage] [告诉|gàosu|tells] [我们：|wǒmen:|us:]</div>
          <div class="sent-en">★ This passage tells us: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[要努力工作|yào nǔlì gōngzuò|should work hard]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不用着急买车|búyòng zháojí mǎi chē|no need to hurry to buy a car]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不能有很多东西|bùnéng yǒu hěnduō dōngxi|cannot have many things]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[只要|zhǐyào|As long as] [努力|nǔlì|you work hard,] [工作，|gōngzuò,|(work hard),] [这些|zhèxiē|these] [东西|dōngxi|things] [早晚|zǎowǎn|sooner or later] [都|dōu|all] [会|huì|will] [有|yǒu|be yours] [的|de|(nominalizer)]」。</div>
        </div>
        <div class="q" id="L19-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[这次|zhè cì|This] [旅游，|lǚyóu,|trip,] [我们|wǒmen|we] [去|qù|went to] [了|le|(past)] [不少|bùshǎo|quite a few] [地方，|dìfang,|places,] [每个|měi ge|every] [地方|dìfang|place] [都|dōu|all] [让|ràng|let] [我|wǒ|me] [非常|fēicháng|very] [难忘。|nánwàng.|unforgettable.] [有的|yǒude|Some] [城市|chéngshì|cities] [有|yǒu|have] [地铁，|dìtiě,|subways,] [有的|yǒude|some] [城市|chéngshì|cities] [有|yǒu|have] [火车，|huǒchē,|trains,] [有的|yǒude|some] [城市|chéngshì|cities] [可以|kěyǐ|can] [骑|qí|ride] [自行车，|zìxíngchē,|bicycles,] [有的|yǒude|some] [城市|chéngshì|cities] [还|hái|also] [可以|kěyǐ|can] [骑马。|qí mǎ.|ride horses.] [有的|yǒude|Some] [城市|chéngshì|cities] [更|gèng|even more] [有意思，|yǒu yìsi,|interesting,] [河|hé|the river] [就是|jiùshì|is] [“街道”，|“jiēdào”,|the "street",] [船|chuán|the boat] [就是|jiùshì|is] [“公共汽车”，|“gōnggòng qìchē”,|the "bus",] [你|nǐ|you] [能|néng|can] [说|shuō|say] [出来|chūlái|tell] [这个|zhège|this] [城市|chéngshì|city] [在|zài|is] [哪儿|nǎr|where] [吗？|ma?|(question)]</div>
          <div class="sent-en">On this trip we went to quite a few places — every place was unforgettable. Some cities have subways, some have trains, some you can ride bicycles, some you can even ride horses. Some cities are even more interesting — the river is the "street", the boat is the "bus". Can you tell where this city is?</div>
          <div class="zh ask">★ [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道：|zhīdào:|know:]</div>
          <div class="sent-en">★ From this passage, we can know: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[我想不起来城市的名字|wǒ xiǎng bu qǐlái chéngshì de míngzi|I can't remember the city's name]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[我常常坐地铁去旅行|wǒ chángcháng zuò dìtiě qù lǚxíng|I often travel by subway]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[有的城市出门要坐船|yǒude chéngshì chūmén yào zuò chuán|in some cities you go out by boat]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[船|chuán|The boat] [就是|jiùshì|is] [公共汽车|gōnggòng qìchē|the bus]」。</div>
        </div>
        <div class="q" id="L19-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[我|wǒ|I] [想|xiǎng|want to] [买辆|mǎi liàng|buy a] [十万块|shíwàn kuài|100,000 yuan] [左右|zuǒyòu|around] [的|de|(possessive)] [车，|chē,|car,] [有了|yǒu le|with a] [车|chē|car] [以后，|yǐhòu,|later,] [会|huì|will] [更|gèng|more] [方便|fāngbiàn|convenient] [的。|de.|(nominalizer)] [开车|kāichē|Driving] [上下班，|shàng xià bān,|to and from work,] [路上|lù shang|on the way] [经过|jīngguò|pass by] [孩子|háizi|the child] [的|de|(possessive)] [学校，|xuéxiào,|school,] [可以|kěyǐ|can] [接送|jiēsòng|pick up and drop off] [他|tā|him] [上下学。|shàng xià xué.|to and from school.] [一个星期|yí ge xīngqī|A week] [的|de|(possessive)] [工作|gōngzuò|work] [学习|xuéxí|study] [以后，|yǐhòu,|later,] [我们|wǒmen|we] [都|dōu|all] [很累，|hěn lèi,|are tired,] [到了|dào le|when it comes to] [周末，|zhōumò,|the weekend,] [可以|kěyǐ|can] [开车|kāichē|drive] [出去|chūqù|go out] [玩儿玩儿，|wánr wanr,|to play,] [蓝蓝|lánlán|blue] [的|de|(possessive)] [天，|tiān,|sky,] [白白|báibái|white] [的|de|(possessive)] [云，|yún,|clouds,] [绿绿|lǜlǜ|green] [的|de|(possessive)] [草地，|cǎodì,|grass,] [会|huì|will] [让|ràng|make] [我们|wǒmen|us] [觉得|juéde|feel] [舒服|shūfu|comfortable] [多|duō|much] [了。|le.|(change)]</div>
          <div class="sent-en">I want to buy a car for around 100,000 yuan. With a car, life will be more convenient. Driving to and from work, I pass by the child's school on the way and can pick him up and drop him off. After a week of work and study we're all tired — on weekends we can drive out to play. The blue sky, white clouds, green grass will make us feel much more comfortable.</div>
          <div class="zh ask">★ [他|tā|Why is he] [为什么|wèishénme|(why)] [要|yào|buying] [买|mǎi|(buying)] [车？|chē?|a car?]</div>
          <div class="sent-en">★ Why is he buying a car?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[车很便宜|chē hěn piányi|the car is cheap]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[会很方便|huì hěn fāngbiàn|it'll be convenient]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[坐着舒服|zuò zhe shūfu|comfortable to sit in]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[有|yǒu|With] [了|le|(past)] [车|chē|a car] [以后，|yǐhòu,|(after),] [会|huì|it’ll be] [更|gèng|more] [方便|fāngbiàn|convenient] [的|de|(nominalizer)]」。</div>
        </div>
        <div class="q" id="L19-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[去年|qùnián|Last year] [秋天|qiūtiān|autumn] [我|wǒ|I] [回|huí|went back to] [南方|nánfāng|the South] [老家|lǎojiā|hometown] [了，|le,|,] [那里|nàli|there] [有|yǒu|has] [高大|gāodà|tall] [的|de|(possessive)] [树，|shù,|trees,] [还有|háiyǒu|and also] [很多|hěnduō|many] [我|wǒ|I] [叫不出来|jiào bu chūlái|can't name] [名字|míngzi|names] [的|de|(possessive)] [花花草草，|huāhuā cǎocǎo,|plants and flowers,] [漂亮|piàoliang|beautiful] [极|jí|extremely] [了。|le.|(change)] [每年|měi nián|Every year] [快到|kuài dào|approaching] [冬天|dōngtiān|winter] [的|de|(possessive)] [时候，|shíhou,|when,] [北方|běifāng|the North] [很多|hěnduō|many] [鸟|niǎo|birds] [都|dōu|all] [会|huì|will] [飞|fēi|fly] [到|dào|to] [这儿|zhèr|here] [来，|lái,|come,] [在这儿|zài zhèr|here] [过冬，|guòdōng,|to spend the winter,] [等到|děng dào|until] [第二年|dì èr nián|the following year] [春天|chūntiān|spring] [再|zài|then] [飞|fēi|fly] [回去。|huíqù.|back.] [孩子们|háizimen|The children] [都|dōu|all] [很|hěn|very] [喜欢|xǐhuan|like] [这些|zhèxiē|these] [可爱|kě'ài|cute] [的|de|(possessive)] [鸟，|niǎo,|birds,] [不|bù|not] [愿意|yuànyì|willing] [让|ràng|let] [它们|tāmen|them] [离开。|líkāi.|leave.]</div>
          <div class="sent-en">Last autumn I went back to my hometown in the South. There were tall trees and many plants and flowers I can't name — extremely beautiful. Every year when winter approaches, many birds from the North fly here to spend the winter, then fly back the following spring. The children all love these cute birds and don't want them to leave.</div>
          <div class="zh ask">★ [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道：|zhīdào:|know:]</div>
          <div class="sent-en">★ From this passage, we can know: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[我的老家在中国北方|wǒ de lǎojiā zài Zhōngguó běifāng|my hometown is in northern China]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[老家冬天有很多鸟|lǎojiā dōngtiān yǒu hěnduō niǎo|hometown has many birds in winter]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[孩子不想离开老家|háizi bù xiǎng líkāi lǎojiā|children don't want to leave home]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[快|kuài|When] [到|dào|it’s] [冬天|dōngtiān|nearly winter,] [的|de|(possessive)] [时候，|shíhou,|(time),] [很多|hěnduō|many] [鸟|niǎo|birds] [都|dōu|all] [飞|fēi|fly] [到|dào|to] [这儿|zhèr|here] [来|lái|to] [过冬|guò dōng|spend the winter]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L19-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L19-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[停|tíng|stopped] [慢慢|mànman|slowly] [下来|xiàlái|down] [地|de|(adverbial marker)] [船|chuán|boat]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[船|chuán|The boat] [慢慢|mànman|slowly] [地|de|(adverbial)] [停下来|tíng xiàlái|stopped] [了。|le|(change)]<div class="sent-en">The boat slowly stopped.</div></div>
        </div>
        <div class="write-item" id="L19-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[是在哪儿|shì zài nǎr|where] [我想不起来|wǒ xiǎng bu qǐlái|I can't remember] [这张照片|zhè zhāng zhàopiàn|this photo] [照|zhào|taken] [的|de|(nominalizer)] [了|le|(change)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|I] [想不起来|xiǎng bu qǐlái|can’t remember] [这张|zhè zhāng|this] [照片|zhàopiàn|photo] [是|shì|was] [在|zài|(at)] [哪儿|nǎr|where] [照|zhào|taken] [的|de|(nominalizer)] [了。|le|(change)]<div class="sent-en">I can't remember where this photo was taken.</div></div>
        </div>
        <div class="write-item" id="L19-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[看出来|kàn chūlái|tell] [你能|nǐ néng|can you] [他们的脸|tāmen de liǎn|their faces] [不一样|bù yíyàng|different] [吗|ma|(question)] [有什么|yǒu shénme|what]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|Can you] [能|néng|(can)] [看出来|kàn chūlái|tell] [他们|tāmen|their] [的|de|(possessive)] [脸|liǎn|faces] [有|yǒu|have] [什么|shénme|what] [不一样|bù yíyàng|differences] [吗？|ma?|(question)]<div class="sent-en">Can you tell how their faces are different?</div></div>
        </div>
        <div class="write-item" id="L19-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[安静下来|ānjìng xiàlái|calm down] [鸟的叫声|niǎo de jiàoshēng|the bird's call] [能让|néng ràng|can make] [她|tā|her]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[鸟|niǎo|The bird’s] [的|de|(possessive)] [叫声|jiàoshēng|call] [能|néng|can] [让|ràng|make] [她|tā|her] [安静|ānjìng|calm] [下来。|xiàlái|down.]<div class="sent-en">The bird's call can make her calm down.</div></div>
        </div>
        <div class="write-item" id="L19-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[让你的脸|ràng nǐ de liǎn|make your face] [很白|hěn bái|very white] [看上去|kàn shàngqù|look] [这件衣服|zhè jiàn yīfu|this piece of clothing]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[这件|zhè jiàn|This piece of] [衣服|yīfu|clothing] [让|ràng|makes] [你|nǐ|your] [的|de|(possessive)] [脸|liǎn|face] [看上去|kàn shàngqù|look] [很|hěn|very] [白。|bái|white.]<div class="sent-en">This piece of clothing makes your face look very white.</div></div>
        </div>

        <h4 id="L19-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L19-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[骑|qí|Riding] <span class="blank-input"><span class="input-py">mǎ</span><input type="text" data-ans="马"></span> [让|ràng|makes] [我|wǒ|me] [觉得|juéde|feel] [很|hěn|very] [快乐。|kuàilè.|happy.]</div>
          <div class="sent-en">Riding a horse makes me feel very happy.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[马|mǎ|horse]</span></div>
        </div>
        <div class="write-item" id="L19-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[看上去|kàn shàngqù|It seems] [这|zhè|this] <span class="blank-input"><span class="input-py">wèi</span><input type="text" data-ans="位"></span> [先生|xiānsheng|gentleman] [很|hěn|very] [喜欢|xǐhuan|likes] [小孩子。|xiǎoháizi.|children.]</div>
          <div class="sent-en">This gentleman seems to really like children.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[位|wèi|(polite MW for people)]</span></div>
        </div>
        <div class="write-item" id="L19-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[你|nǐ|you] [想起来|xiǎng qǐlái|remember] [了|le|(change)] [吗？|ma?|(question)] [前年|qiánnián|the year before last] [你|nǐ|you] [是在哪儿|shì zài nǎr|where] <span class="blank-input"><span class="input-py">guò</span><input type="text" data-ans="过"></span> [的|de|(nominalizer)] [春节？|Chūnjié?|the Spring Festival?]</div>
          <div class="sent-en">Do you remember? Where did you spend the Spring Festival the year before last?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[过|guò|spend]</span></div>
        </div>
        <div class="write-item" id="L19-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[秋天|qiūtiān|After autumn] [以后，|yǐhòu,|,] [天|tiān|days] [会|huì|will] [变得|biàn de|become] [越来越|yuè lái yuè|more and more] <span class="blank-input"><span class="input-py">duǎn</span><input type="text" data-ans="短"></span>，[很早|hěn zǎo|very early] [就|jiù|then] [会|huì|will] [黑|hēi|get dark] [下来。|xiàlái.|down.]</div>
          <div class="sent-en">After autumn, the days will get shorter and shorter and it gets dark very early.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[短|duǎn|short]</span></div>
        </div>
        <div class="write-item" id="L19-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh"><span class="blank-input"><span class="input-py">jīng</span><input type="text" data-ans="经"></span> [过|guò|pass] [超市|chāoshì|supermarket] [的|de|(possessive)] [时候，|shíhou,|when,] [你|nǐ|you] [帮|bāng|help] [我|wǒ|me] [买|mǎi|buy] [一瓶|yì píng|a bottle of] [可乐。|kělè.|cola.]</div>
          <div class="sent-en">When you pass by the supermarket, buy me a bottle of cola.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[经|jīng|pass]（[经过|jīngguò|pass by]）</span></div>
        </div>

        <h4 id="L19-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L19-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[天气|tiānqì|The weather] [真好，|zhēn hǎo,|is really nice,] [天|tiān|the sky] [是|shì|is] <span class="blank-input"><input type="text" data-ans="蓝"></span> [色的，|sè de,|blue,] [我们|wǒmen|we] [出去|chūqù|go out] [打|dǎ|play] <span class="blank-input"><input type="text" data-ans="篮"></span> [球|qiú|ball] [吧。|ba.|(suggestion)]</div>
          <div class="zh" style="margin-top:6px;">[蓝|lán|blue]　[篮|lán|basket]</div>
          <div class="sent-en">The weather is really nice — the sky is blue. Let's go out and play basketball.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[蓝|lán|(as in 蓝色 “blue”)]、[篮|lán|(as in 篮球 “basketball”)]</div>
        </div>
        <div class="write-item" id="L19-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[刚才|gāngcái|Just now] [我|wǒ|I] [去|qù|went to] [超市|chāoshì|the supermarket] [买|mǎi|to buy] <span class="blank-input"><input type="text" data-ans="鸡"></span> [蛋|dàn|eggs] [了，|le,|,] [回来|huílái|coming back] [的|de|(possessive)] [路上|lù shang|on the way] [看见|kànjiàn|saw] [了|le|(past)] [一只|yì zhī|a] [很|hěn|very] [奇怪|qíguài|strange] [的|de|(possessive)] <span class="blank-input"><input type="text" data-ans="鸟"></span>。|.</div>
          <div class="zh" style="margin-top:6px;">[鸟|niǎo|bird]　[鸡|jī|chicken]</div>
          <div class="sent-en">Just now I went to the supermarket to buy eggs. On the way back I saw a very strange bird.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[鸡|jī|(as in 鸡蛋 “egg”)]、[鸟|niǎo|bird]</div>
        </div>
        <div class="write-item" id="L19-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[姐，|jiě,|Sister,] [你|nǐ|you] [怎么|zěnme|why] [又|yòu|again] <span class="blank-input"><input type="text" data-ans="哭"></span> [了，|le,|,] [我|wǒ|I] [看|kàn|see] [你|nǐ|you] [刚才|gāngcái|just now] [还|hái|still] <span class="blank-input"><input type="text" data-ans="笑"></span> [得|de|(complement)] [很|hěn|very] [高兴|gāoxìng|happy] [啊。|a.|(exclamation)]</div>
          <div class="zh" style="margin-top:6px;">[哭|kū|cry]　[笑|xiào|laugh]</div>
          <div class="sent-en">Sister, why are you crying again? I saw you laughing happily just now.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[哭|kū|cry]、[笑|xiào|(as in 笑话 “joke”)]</div>
        </div>
        <div class="write-item" id="L19-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[我|wǒ|I] <span class="blank-input"><input type="text" data-ans="自"></span> [己|jǐ|self] [去|qù|go to] [医院|yīyuàn|the hospital] [就|jiù|then] [行，|xíng,|OK,] [没|méi|no] [什么|shénme|what] [大|dà|big] [的|de|(possessive)] [问题，|wèntí,|problem,] [就是|jiùshì|just] <span class="blank-input"><input type="text" data-ans="耳"></span> [朵|duo|ear] [有点儿|yǒudiǎnr|a bit] [不|bù|not] [舒服。|shūfu.|comfortable.]</div>
          <div class="zh" style="margin-top:6px;">[自|zì|self]　[耳|ěr|ear]</div>
          <div class="sent-en">I can go to the hospital by myself — no big problem, just my ear is a bit uncomfortable.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[自|zì|(as in 自己 “oneself”)]、[耳|ěr|(as in 耳朵 “ear”)]</div>
        </div>
        <div class="write-item" id="L19-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[我|wǒ|I] [又|yòu|again] [长高|zhǎng gāo|grew taller] [了，|le,|,] [你|nǐ|you] [看|kàn|see] [我|wǒ|my] [的|de|(possessive)] [衣服|yīfu|clothes] [就|jiù|then] <span class="blank-input"><input type="text" data-ans="知"></span> [道|dào|know] [了，|le,|,] [都|dōu|all] <span class="blank-input"><input type="text" data-ans="短"></span> [了。|le.|(change)]</div>
          <div class="zh" style="margin-top:6px;">[短|duǎn|short]　[知|zhī|know]</div>
          <div class="sent-en">I've grown taller again — you can tell from my clothes, they're all too short.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[知|zhī|(as in 知道 “know”)]、[短|duǎn|(as in 短裤 “shorts”)]</div>
        </div>

        <h4 id="L19-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L19-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[花|huā|flower] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[花瓶|huāpíng|vase]、[鲜花|xiānhuā|fresh flowers]</div></div>
        </div>
        <div class="write-item" id="L19-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[客|kè|guest] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[客人|kèrén|guest]、[做客|zuòkè|be a guest]</div></div>
        </div>
        <div class="write-item" id="L19-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[意|yì|meaning] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[意思|yìsi|meaning]、[愿意|yuànyì|willing]</div></div>
        </div>
        <div class="write-item" id="L19-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[帮|bāng|help] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[帮忙|bāngmáng|help]、[帮助|bāngzhù|help]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L19-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [最近|zuìjìn|Recently] [女儿|nǚ'ér|daughter] [跟|gēn|with] [以前|yǐqián|before] [不一样了，|bù yíyàng le,|is different,] [她|tā|she] [喜欢|xǐhuan|likes] [把|bǎ|(BA)] [头发|tóufa|hair] [放在|fàng zài|put] [耳朵|ěrduo|ear] [后面，|hòumiàn,|behind,] [使|shǐ|making] [她|tā|her] [的|de|(possessive)]
            <span class="blank-input review-blank"><span class="input-py">liǎn</span><input type="text" data-ans="脸"></span>
            [看|kàn|looks] [漂亮|piàoliang|prettier] [一些。|yìxiē.|a bit.] [爸爸|bàba|Dad] [想|xiǎng|remembers] <span class="blank-input review-blank"><span class="input-py">qǐlái</span><input type="text" data-ans="起来"></span>
            [她|tā|she] [小时候|xiǎo shíhou|when little] [喜欢|xǐhuan|liked]
            <span class="blank-input review-blank"><span class="input-py">duǎn</span><input type="text" data-ans="短"></span>
            [头发，|tóufa,|hair,] [像|xiàng|like] [男孩子|nánháizi|boys] [一样。|yíyàng.|the same.]</div>
          <div class="sent-en">Recently my daughter is different from before — she likes putting her hair behind her ears to make her face look a bit prettier. Dad remembers when she was little she liked short hair, like a boy.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[脸|liǎn|face]、[起来|qǐlái|up]、[短|duǎn|short]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小丽|Xiǎolì|Xiaoli] [洗|xǐ|washed] [了|le|(past)] [几|jǐ|several]
            <span class="blank-input review-blank"><span class="input-py">zhāng</span><input type="text" data-ans="张"></span>
            [骑马|qí mǎ|horse riding] [比赛|bǐsài|competition] [的|de|(possessive)] [照片，|zhàopiàn,|photos,] [但|dàn|but] [同事|tóngshì|the colleague] [没|méi|didn't]
            <span class="blank-input review-blank"><span class="input-py">kàn chūlái</span><input type="text" data-ans="看出来"></span>
            [那|nà|the one] [骑|qí|riding] [得|de|(complement)] [最快|zuì kuài|fastest] [的|de|(nominalizer)] [是|shì|is] [小刚。|Xiǎogāng.|Xiaogang.] [因为|yīnwèi|because] [运动服|yùndòngfú|sportswear] [让|ràng|makes] [小刚|Xiǎogāng|Xiaogang] [看上去|kàn shàngqù|look] [很|hěn|very] [年轻，|niánqīng,|young,] [小刚|Xiǎogāng|Xiaogang] [今天|jīntiān|today] [穿|chuān|wore] [的|de|(possessive)]
            <span class="blank-input review-blank"><span class="input-py">xīfú</span><input type="text" data-ans="西服"></span>
            [让|ràng|makes] [他|tā|him] [看上去|kàn shàngqù|look] [像|xiàng|like] [40 岁。|sìshí suì.|40 years old.]</div>
          <div class="sent-en">Xiaoli developed a few photos of a horse riding competition, but the colleague didn't recognize that the fastest rider was Xiaogang. Because the sportswear made Xiaogang look very young — the suit he wore today made him look like 40.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[张|zhāng|(MW for photos)]、[看出来|kàn chūlái|recognize]、[西服|xīfú|suit]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[20] = {
  navLabel:'第20课',
  html: `
    <div class="lesson">
      <h2>第 20 课　我被他影响了
        <span class="title-py">Dì èrshí kè · Wǒ bèi tā yǐngxiǎng le</span>
        <small>Lesson 20 · I've been influenced by him</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L20-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图20.png" alt="听力图20" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图20.png</b></span>
        </div>

        <div class="q" id="L20-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [奶奶|nǎinai|Grandma] [喜欢|xǐhuan|likes] [那个|nàge|that] [新买的|xīn mǎi de|newly bought] [照相机|zhàoxiàngjī|camera] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [喜欢，|xǐhuan,|She likes it,] [她|tā|she] [说|shuō|says] [很好用，|hěn hǎo yòng,|it's easy to use,] [她|tā|she] [很|hěn|very] [满意。|mǎnyì.|satisfied.]</div>
          <div class="sent-en">W: Does Grandma like the newly bought camera?<br>M: Yes, she says it's easy to use and she's very satisfied.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[老人|lǎorén|an old man] [拿|ná|holding] [相机|xiāngjī|a camera] [拍照|pāi zhào|taking photos]）</div>
        </div>
        <div class="q" id="L20-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [来|lái|come] [洗碗筷，|xǐ wǎnkuài,|wash the dishes and chopsticks,] [你|nǐ|you] [去|qù|go] [看|kàn|watch] [电视|diànshì|TV] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [不用，|búyòng,|No need,] [你|nǐ|you] [把|bǎ|(BA)] [桌子|zhuōzi|table] [上|shàng|on] [的|de|(possessive)] [鱼|yú|fish] [放|fàng|put] [冰箱|bīngxiāng|fridge] [里|li|inside] [就|jiù|then] [可以了。|kěyǐ le.|is fine.]</div>
          <div class="sent-en">M: Let me wash the dishes and chopsticks — you go watch TV.<br>W: No need — just put the fish on the table into the fridge.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[洗碗|xǐ wǎn|washing dishes] / [把|bǎ|(BA)] [鱼|yú|the fish] [放|fàng|into] [冰箱|bīngxiāng|the fridge]）</div>
        </div>
        <div class="q" id="L20-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [北方人|Běifāng rén|Northerners] [是不是|shì bú shì|is it that] [都|dōu|all] [像|xiàng|like] [你|nǐ|you] [一样|yíyàng|the same] [这么|zhème|so] [喜欢|xǐhuan|like] [吃|chī|eating] [面？|miàn?|noodles?]</div>
          <div class="zh stem">[男：|Nán:|M:] [不一定，|bù yídìng,|Not necessarily,] [东北人|Dōngběi rén|Northeasterners] [就|jiù|then] [更|gèng|more] [爱|ài|love] [吃|chī|eating] [米饭。|mǐfàn.|rice.]</div>
          <div class="sent-en">W: Do all Northerners like eating noodles as much as you?<br>M: Not necessarily — Northeasterners prefer rice.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[一碗|yì wǎn|a bowl of] [米饭|mǐfàn|rice] / [面条|miàntiáo|noodles]）</div>
        </div>
        <div class="q" id="L20-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [今天|jīntiān|today] [风|fēng|wind] [太|tài|too] [大|dà|strong] [了，|le,|,] [伞|sǎn|umbrellas] [都|dōu|all] [要|yào|are about to] [被|bèi|by] [刮走|guā zǒu|be blown away] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [真|zhēn|really] [希望|xīwàng|hope] [明天|míngtiān|tomorrow] [天气|tiānqì|weather] [能|néng|can] [好点儿。|hǎo diǎnr.|be a bit better.]</div>
          <div class="sent-en">W: The wind is so strong today — umbrellas are about to be blown away.<br>M: I really hope the weather will be better tomorrow.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[大风|dàfēng|strong wind]）</div>
        </div>
        <div class="q" id="L20-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [怎么|zěnme|why] [这么|zhème|so] [难过|nánguò|sad] [啊？|a?|(question)] [怎么|zěnme|what happened] [了？|le?|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [昨天|zuótiān|yesterday] [给我|gěi wǒ|for me] [买的|mǎi de|bought] [蛋糕|dàngāo|cake] [被|bèi|by] [弟弟|dìdi|younger brother] [和|hé|and] [妹妹|mèimei|younger sister] [吃|chī|eaten] [了。|le.|(change)]</div>
          <div class="sent-en">W: Why are you so sad? What happened?<br>M: The cake you bought me yesterday was eaten by my younger brother and sister.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[蛋糕|dàngāo|the cake] [被|bèi|was] [吃|chī|eaten] / [难过|nánguò|sad] [的|de|(possessive)] [人|rén|person]）</div>
        </div>

        <h4 id="L20-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L20-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[春天|chūntiān|Spring] [来了，|lái le,|has come,] [公园里|gōngyuán li|in the park] [的|de|(possessive)] [花儿|huār|flowers] [都|dōu|all] [开|kāi|bloomed] [了，|le,|,] [多么|duōme|how] [漂亮|piàoliang|beautiful] [啊，|a,|,] [如果|rúguǒ|if] [带上|dài shàng|bringing] [照相机|zhàoxiàngjī|a camera] [就|jiù|would be] [好|hǎo|good] [了。|le.|(change)]</div>
          <div class="sent-en">Spring has come and the flowers in the park have all bloomed — how beautiful! If only I'd brought a camera.</div>
          <div class="zh stem">★ [他|tā|he] [没带|méi dài|didn't bring] [照相机。|zhàoxiàngjī.|the camera.]</div>
          <div class="sent-en">★ He didn't bring the camera.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[如果|rúguǒ|If only] [带上|dài shàng|I had brought] [照相机|zhàoxiàngjī|the camera] [就|jiù|(then)] [好|hǎo|(good)] [了|le|(change)]」[说明|shuōmíng|showing] [他|tā|he] [没带。|méi dài|didn’t bring it.]" data-expl-en="'If only I'd brought a camera' — he didn't bring it."></div>
        </div>
        <div class="q" id="L20-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[今天|jīntiān|Today] [中午|zhōngwǔ|noon] [在|zài|at] [商店|shāngdiàn|the shop] [买|mǎi|buying] [东西|dōngxi|things] [时，|shí,|when,] [服务员|fúwùyuán|the attendant] [说|shuō|said] [我|wǒ|my] [这|zhè|this] [张|zhāng|(MW)] [信用卡|xìnyòngkǎ|credit card] [不|bù|cannot] [能|néng|can] [用|yòng|be used] [了。|le.|(change)] [我|wǒ|I] [打算|dǎsuàn|plan to] [下午|xiàwǔ|afternoon] [去|qù|go to] [银行|yínháng|the bank] [问问|wèn wen|ask] [是|shì|what's] [怎么回事。|zěnme huí shì.|going on.]</div>
          <div class="sent-en">At noon today when I was buying things at the shop, the attendant said my credit card couldn't be used. I plan to go to the bank this afternoon to ask what's going on.</div>
          <div class="zh stem">★ [那家|nà jiā|that] [店|diàn|shop] [不|bù|cannot] [能|néng|can] [用|yòng|use] [信用卡。|xìnyòngkǎ.|credit cards.]</div>
          <div class="sent-en">★ That shop can't use credit cards.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It’s]「[我|wǒ|my] [的|de|(possessive)] [这张|zhè zhāng|this] [信用卡|xìnyòngkǎ|credit card] [不能|bùnéng|can’t] [用|yòng|be used] [了|le|(change)]」，[不是|bú shì|not] [店|diàn|the store] [不能|bùnéng|can’t] [用。|yòng|be used.]" data-expl-en="'My card can't be used' — not that the shop can't take cards."></div>
        </div>
        <div class="q" id="L20-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[难过|nánguò|When sad] [的|de|(possessive)] [时候|shíhou|when,] [我们|wǒmen|we] [应该|yīnggāi|should] [做|zuò|do] [一些|yìxiē|some] [真正|zhēnzhèng|truly] [能|néng|can] [使|shǐ|make] [自己|zìjǐ|oneself] [快乐|kuàilè|happy] [的|de|(possessive)] [事，|shì,|things,] [像|xiàng|like] [听音乐、|tīng yīnyuè,|listening to music,] [玩儿游戏|wánr yóuxì|playing games] [或者|huòzhě|or] [去|qù|go] [运动，|yùndòng,|to exercise,] [这些|zhèxiē|these] [都|dōu|all] [是|shì|are] [不错|búcuò|not bad] [的|de|(possessive)] [选择。|xuǎnzé.|choices.]</div>
          <div class="sent-en">When we're sad, we should do things that truly make us happy — like listening to music, playing games or exercising. These are all good choices.</div>
          <div class="zh stem">★ [不|bù|When] [高兴|gāoxìng|unhappy] [时|shí|when] [做|zuò|do] [什么|shénme|anything] [都|dōu|all] [不|bù|not] [好。|hǎo.|good.]</div>
          <div class="sent-en">★ When unhappy, doing anything is no good.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [说|shuō|says] [有|yǒu|there are] [很多|hěnduō|many] [不错|búcuò|good] [的|de|(possessive)] [办法。|bànfǎ|solutions.]" data-expl-en="The text says there are many good options."></div>
        </div>
        <div class="q" id="L20-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[爱|ài|Love] [可以|kěyǐ|can] [是|shì|be] [爸爸妈妈|bàba māma|parents] [对|duì|to] [孩子|háizi|children] [的|de|(possessive)] [照顾，|zhàogù,|care,] [可以|kěyǐ|can] [是|shì|be] [丈夫|zhàngfu|husband] [对|duì|to] [妻子|qīzi|wife] [的|de|(possessive)] [关心，|guānxīn,|concern,] [也|yě|also] [可以|kěyǐ|can] [是|shì|be] [你|nǐ|you] [对|duì|to] [朋友|péngyou|friends] [的|de|(possessive)] [帮助。|bāngzhù.|help.]</div>
          <div class="sent-en">Love can be parents' care for children, a husband's concern for his wife, or your help to friends.</div>
          <div class="zh stem">★ [爱|ài|Love] [有|yǒu|has] [很多|hěnduō|many] [种。|zhǒng.|kinds.]</div>
          <div class="sent-en">★ There are many kinds of love.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[列举|lièjǔ|It lists] [了|le|(past)] [三种|sān zhǒng|three kinds of] [爱|ài|love] → [爱|ài|love] [有|yǒu|has] [很多种。|hěnduō zhǒng|many kinds.]" data-expl-en="Lists three kinds of love — there are many kinds."></div>
        </div>
        <div class="q" id="L20-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[你别|nǐ bié|Don't] [难过|nánguò|be sad] [了，|le,|,] [我们|wǒmen|we] [一起|yìqǐ|together] [帮|bāng|help] [你|nǐ|you] [想|xiǎng|think of] [办法。|bànfǎ.|solutions.] [先|xiān|first] [把|bǎ|(BA)] [这个|zhège|this] [最|zuì|most] [难|nán|difficult] [的|de|(possessive)] [问题|wèntí|problem] [解决|jiějué|solve] [了，|le,|,] [其他|qítā|other] [问题|wèntí|problems] [就|jiù|then] [容易|róngyì|easy] [多|duō|much] [了。|le.|(change)]</div>
          <div class="sent-en">Don't be sad — let's help you think of solutions. First solve the hardest problem, then the others become much easier.</div>
          <div class="zh stem">★ [问题|wèntí|The problem] [已经|yǐjīng|already] [被|bèi|by] [他们|tāmen|them] [解决|jiějué|solved] [了。|le.|(change)]</div>
          <div class="sent-en">★ The problem has already been solved by them.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="「[先|xiān|First] [解决|jiějué|solve it]」[说明|shuōmíng|showing] [还|hái|it’s] [没|méi|not] [解决。|jiějué|solved yet.]" data-expl-en="'First solve' means not yet solved."></div>
        </div>

        <h4 id="L20-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L20-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[男：|Nán:|M:] [妹妹，|mèimei,|Little sister,] [明天|míngtiān|tomorrow] [是|shì|is] [你|nǐ|your] [的|de|(possessive)] [生日，|shēngrì,|birthday,] [我|wǒ|I] [给|gěi|to] [你|nǐ|you] [买了|mǎi le|bought] [本|běn|a] [汉语|Hànyǔ|Chinese] [字典。|zìdiǎn.|dictionary.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [怎么|zěnme|how] [知道|zhīdào|knew] [我|wǒ|I] [在|zài|am] [学|xué|learning] [汉语？|Hànyǔ?|Chinese?] [我|wǒ|I] [还|hái|even] [一直|yìzhí|always] [觉得|juéde|felt] [你|nǐ|you] [不|bù|not] [关心|guānxīn|care about] [我|wǒ|my] [的|de|(possessive)] [学习|xuéxí|study] [呢。|ne.|(emphasis)]</div>
          <div class="sent-en">M: Little sister, tomorrow is your birthday — I bought you a Chinese dictionary.<br>W: How did you know I'm learning Chinese? I always felt you didn't care about my studies.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[今天过生日|jīntiān guò shēngrì|has a birthday today]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[买了本字典|mǎi le běn zìdiǎn|got a dictionary]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[正在学汉语|zhèngzài xué Hànyǔ|is learning Chinese]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[女的|nǚde|The woman] [在|zài|is] [学|xué|studying] [汉语，|Hànyǔ,|Chinese,] [字典|zìdiǎn|the dictionary] [是|shì|was] [男|nán|bought] [给|gěi|for] [她|tā|her] [买|mǎi|(bought)] [的。|de|(nominalizer)] [选项|xuǎnxiàng|Option] B [表述|biǎoshù|is inaccurate,] [不准，|bù zhǔn,|(inaccurate),] [选|xuǎn|choose] C [最|zuì|most] [合适。|héshì|appropriate.]</div>
        </div>
        <div class="q" id="L20-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [放心，|fàngxīn,|Relax,] [你|nǐ|you] [就|jiù|just] [听|tīng|listen to] [我|wǒ|my] [的|de|(possessive)] [吧，|ba,|,] [只有|zhǐyǒu|only by] [往|wǎng|toward] [东|dōng|east] [走|zǒu|going] [才|cái|only then] [能|néng|can] [到|dào|arrive at] [国家公园。|Guójiā Gōngyuán.|the National Park.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [但是|dànshì|but] [从|cóng|from] [地图|dìtú|the map] [上|shàng|on] [看，|kàn,|looking,] [走|zǒu|going] [南边|nánbiān|the south] [那条路|nà tiáo lù|that road] [才|cái|only then] [对。|duì.|is right.] [我们|wǒmen|we] [还是|háishi|still] [去|qù|go to] [车站|chēzhàn|the station] [问问|wèn wen|ask] [那些|nàxiē|those] [等车|děng chē|waiting for the bus] [的|de|(possessive)] [人|rén|people] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: Relax, just listen to me — only by going east can you reach the National Park.<br>W: But from the map, the southern road is the right one. Let's go to the station and ask those waiting for the bus.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|how does the man think] [觉得|juéde|(think)] [到|dào|to get to] [国家公园|guójiā gōngyuán|the national park] [怎么|zěnme|(how)] [走？|zǒu?|(go)?]</div>
          <div class="sent-en">Q: How does the man think one should get to the national park?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[往东走|wǎng dōng zǒu|go east]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[往南走|wǎng nán zǒu|go south]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[往车站那边走|wǎng chēzhàn nàbiān zǒu|go toward the station]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[只有|zhǐyǒu|Only] [往|wǎng|by going] [东|dōng|east] [走|zǒu|(going)] [才|cái|can you] [能|néng|(can)] [到|dào|reach] [国家公园|guójiā gōngyuán|the national park]」。</div>
        </div>
        <div class="q" id="L20-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[男：|Nán:|M:] [快点儿，|kuài diǎnr,|Hurry,] [拿上|ná shàng|pick up] [帽子|màozi|the hat] [走|zǒu|let's go] [吧，|ba,|,] [明天|míngtiān|tomorrow] [你|nǐ|you] [再|zài|then] [找|zhǎo|look for] [书。|shū.|the book.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [没|méi|wasn't] [找|zhǎo|looking for] [书，|shū,|the book,] [出去|chūqù|going out] [玩儿|wánr|to play] [还是|háishi|still] [得|děi|have to] [带上|dài shàng|bring] [地图|dìtú|the map] [啊，|a,|,] [被|bèi|by] [你|nǐ|you] [放|fàng|put] [哪儿|nǎr|where] [了？|le?|(change)]</div>
          <div class="sent-en">M: Hurry, pick up the hat and let's go — look for the book tomorrow.<br>W: I wasn't looking for the book — when going out to play we still need the map. Where did you put it?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|what is the woman] [在|zài|(is)] [找|zhǎo|looking for] [什么？|shénme?|(what)?]</div>
          <div class="sent-en">Q: What is the woman looking for?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[帽子|màozi|hat]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[书|shū|book]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[地图|dìtú|map]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[还是|háishì|We still] [得|děi|need] [带上|dài shàng|to bring] [地图|dìtú|a map] [啊，|a,|(exclamation),] [被|bèi|where did] [你|nǐ|you] [放|fàng|put] [哪儿|nǎr|it] [了？|le?|?]」</div>
        </div>
        <div class="q" id="L20-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [看见|kànjiàn|Seen] [我|wǒ|my] [的|de|(possessive)] [运动服|yùndòngfú|sportswear] [了|le|(change)] [吗？|ma?|(question)] [怎么|zěnme|why] [找|zhǎo|can't find] [不|bù|not] [到|dào|it] [了？|le?|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [是不是|shì bú shì|is it that] [被|bèi|by] [笑笑|Xiàoxiao|Xiaoxiao] [穿走|chuān zǒu|worn away] [了？|le?|(change)] [她|tā|she] [刚才|gāngcái|just now] [说|shuō|said] [要|yào|was going to] [出去|chūqù|go out] [跑步。|pǎobù.|running.]</div>
          <div class="sent-en">W: Have you seen my sportswear? Why can't I find it?<br>M: Could it have been taken by Xiaoxiao? She just said she was going out for a run.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[在找运动服|zài zhǎo yùndòngfú|is looking for sportswear]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[准备去跑步|zhǔnbèi qù pǎobù|is going running]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[穿好了运动服|chuān hǎo le yùndòngfú|has put on the sportswear]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[我|wǒ|my] [的|de|(possessive)] [运动服|yùndòngfú|sportswear]……[找不到|zhǎo bu dào|can’t find it]」。</div>
        </div>
        <div class="q" id="L20-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|my] [的|de|(possessive)] [房卡|fángkǎ|room card] [找|zhǎo|can't find] [不|bù|not] [到|dào|it] [了，|le,|,] [我|wǒ|I] [怎么|zěnme|how] [进去|jìnqù|get in] [啊？|a?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [给|gěi|to] [服务员|fúwùyuán|the attendant] [打|dǎ|make] [个|ge|a] [电话，|diànhuà,|call,] [他们|tāmen|they] [会|huì|will] [帮|bāng|help] [你|nǐ|you] [想|xiǎng|think of] [办法|bànfǎ|a solution] [解决|jiějué|to solve] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">M: I can't find my room card — how do I get in?<br>W: Call the attendant — they'll think of a solution.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [现在|xiànzài|now] [要|yào|is going to] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What is the man going to do now?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[去找服务员|qù zhǎo fúwùyuán|go find the attendant]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[去拿房卡|qù ná fángkǎ|go get the room card]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[回房间去|huí fángjiān qù|go back to the room]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[女的|nǚde|The woman] [让|ràng|had] [他|tā|him] [给|gěi|call] [服务员|fúwùyuán|the attendant] [打电话，|dǎ diànhuà,|(call),] [让|ràng|to have] [服务员|fúwùyuán|the attendant] [帮|bāng|help] [想办法。|xiǎng bànfǎ|think of a way.]</div>
        </div>

        <h4 id="L20-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L20-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [这么|zhème|so] [着急，|zháojí,|anxious,] [是|shì|are] [要|yào|going to] [去|qù|go] [哪儿|nǎr|where] [啊？|a?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [去|qù|go to] [银行|yínháng|the bank,] [我|wǒ|my] [的|de|(possessive)] [信用卡|xìnyòngkǎ|credit card] [该|gāi|should] [还钱|huán qián|repay] [了。|le.|(change)] [你|nǐ|you] [去|qù|go] [哪儿？|nǎr?|where?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [去|qù|go to] [教室|jiàoshì|the classroom] [上课。|shàngkè.|to have class.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [这个|zhège|this] [照相机|zhàoxiàngjī|camera] [是|shì|is] [小晴|Xiǎoqíng|Xiaoqing] [的，|de,|,] [请|qǐng|please] [你|nǐ|you] [帮|bāng|help] [我|wǒ|me] [还|huán|return] [给|gěi|to] [她|tā|her] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: You're in such a hurry — where are you going?<br>W: I'm going to the bank to repay my credit card. Where are you going?<br>M: I'm going to the classroom for class.<br>W: This camera is Xiaoqing's — please help me return it to her.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|what is the man] [要|yào|going] [去|qù|to] [做|zuò|do] [什么？|shénme?|(what)?]</div>
          <div class="sent-en">Q: What is the man going to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[去银行还钱|qù yínháng huán qián|go to the bank to repay money]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[去教室上课|qù jiàoshì shàngkè|go to the classroom for class]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[去借照相机|qù jiè zhàoxiàngjī|go borrow a camera]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|I] [去|qù|go to] [教室|jiàoshì|the classroom] [上课|shàngkè|for class]」。</div>
        </div>
        <div class="q" id="L20-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[男：|Nán:|M:] [小云，|Xiǎoyún,|Xiaoyun,] [这个|zhège|this] [照相机|zhàoxiàngjī|camera] [是|shì|is] [你|nǐ|you] [要|yào|were] [找|zhǎo|looking for] [的|de|(nominalizer)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是|shì|yes] [啊，|a,|,] [太|tài|so] [谢谢|xièxie|thank] [你|nǐ|you] [了。|le.|(change)] [刚才|gāngcái|just now] [我|wǒ|I] [觉得|juéde|felt] [找|zhǎo|can't find] [不|bù|not] [到|dào|it] [了，|le,|,] [还|hái|even] [很|hěn|very] [难过。|nánguò.|sad.] [你|nǐ|you] [在|zài|where] [哪儿|nǎr|did] [找到|zhǎo dào|find] [的？|de?|(nominalizer)]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [是|shì|was] [在|zài|in] [教室|jiàoshì|the classroom] [找到|zhǎo dào|found] [的，|de,|,] [一定|yídìng|must] [是|shì|have been] [被|bèi|by] [你|nǐ|you] [忘|wàng|forgotten] [在|zài|in] [教室|jiàoshì|the classroom] [里|li|inside] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [真|zhēn|really] [奇怪，|qíguài,|strange,] [教室|jiàoshì|the classroom] [我|wǒ|I] [也|yě|also] [找过|zhǎo guò|looked in] [了，|le,|,] [怎么|zěnme|why] [没|méi|didn't] [发现|fāxiàn|find] [呢？|ne?|(question)]</div>
          <div class="sent-en">M: Xiaoyun, is this the camera you were looking for?<br>W: Yes — thank you so much. Just now I couldn't find it and was very sad. Where did you find it?<br>M: I found it in the classroom — you must have left it there.<br>W: How strange — I looked in the classroom too, why didn't I find it?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|why is the woman] [为什么|wèishénme|(why)] [难过？|nánguò|sad?]</div>
          <div class="sent-en">Q: Why is the woman sad?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[找不到照相机|zhǎo bu dào zhàoxiàngjī|couldn't find the camera]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[忘了去教室|wàng le qù jiàoshì|forgot to go to the classroom]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[男的不帮她找|nánde bù bāng tā zhǎo|the man didn't help her look]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[找不到，|zhǎo bu dào,|Can’t find it,] [还|hái|and] [很|hěn|very] [难过|nánguò|sad]」。</div>
        </div>
        <div class="q" id="L20-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [觉得|juéde|feel] [这样|zhèyàng|this way] [做，|zuò,|doing,] [客人|kèrén|the guest] [是|shì|will] [不会|bú huì|not] [满意|mǎnyì|be satisfied] [的。|de.|(nominalizer)]</div>
          <div class="zh stem">[男：|Nán:|M:] [那|nà|then] [你|nǐ|you] [有|yǒu|have] [更好|gèng hǎo|better] [的|de|(possessive)] [办法|bànfǎ|way] [来|lái|to] [解决|jiějué|solve] [这个|zhège|this] [问题|wèntí|problem] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [觉得|juéde|feel] [可以|kěyǐ|can] [给|gěi|to] [客人|kèrén|the guest] [换|huàn|exchange] [一个|yí ge|a] [房间，|fángjiān,|room,] [他|tā|he] [离开|líkāi|leaves] [时，|shí,|when,] [我们|wǒmen|we] [还|hái|also] [可以|kěyǐ|can] [找车|zhǎo chē|arrange a car] [送|sòng|take] [他|tā|him] [去|qù|to] [机场。|jīchǎng.|the airport.]</div>
          <div class="zh stem">[男：|Nán:|M:] [行，|xíng,|OK,] [那|nà|then] [你|nǐ|you] [去|qù|go] [帮|bāng|help] [他|tā|him] [换|huàn|exchange] [张|zhāng|(MW)] [房卡|fángkǎ|room card] [吧。|ba.|(suggestion)]</div>
          <div class="zh ask">[问：|Wèn:|Q:] [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: From this passage, what can we know?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[客人已经离开了|kèrén yǐjīng líkāi le|the guest has already left]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[客人对房间很满意|kèrén duì fángjiān hěn mǎnyì|the guest is satisfied with the room]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[客人可以换个房间|kèrén kěyǐ huàn ge fángjiān|the guest can change rooms]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[可以|kěyǐ|You can] [给|gěi|(for)] [客人|kèrén|the guest] [换|huàn|change] [一个|yí ge|to another] [房间|fángjiān|room]」。</div>
        </div>
        <div class="q" id="L20-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[男：|Nán:|M:] [电梯|diàntī|The elevator] [来|lái|has come] [了，|le,|,] [您|nín|you] [小心|xiǎoxīn|careful] [点儿。|diǎnr.|a bit.] [您|nín|your] [的|de|(possessive)] [脚|jiǎo|foot] [怎么样|zěnmeyàng|how is it] [了？|le?|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [谢谢|xièxie|thank] [你|nǐ|you] [送|sòng|for seeing] [我|wǒ|me] [回来。|huílái.|home.] [脚|jiǎo|foot] [好|hǎo|better] [一些了，|yìxiē le,|a bit,] [只要|zhǐyào|as long as] [再|zài|another] [休息|xiūxi|rest] [几天，|jǐ tiān,|few days,] [就|jiù|then] [能|néng|can] [跟|gēn|with] [你们|nǐmen|you] [出去|chūqù|go out] [跳舞|tiàowǔ|to dance] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [那|nà|that] [太好了，|tài hǎo le,|great,] [只有|zhǐyǒu|only] [您|nín|you] [来了，|lái le,|came,] [我们|wǒmen|we] [才|cái|only then] [能|néng|can] [跳|tiào|dance] [得|de|(complement)] [更|gèng|more] [快乐。|kuàilè.|happily.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [跟|gēn|with] [你们|nǐmen|you] [一起|yìqǐ|together] [玩儿|wánr|playing] [我|wǒ|I] [也|yě|also] [更|gèng|more] [快乐，|kuàilè,|happy,] [我|wǒ|I] [多么|duōme|how] [希望|xīwàng|hope] [早点儿|zǎo diǎnr|early] [好|hǎo|get better] [啊。|a.|(exclamation)]</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不能再跳舞了|bùnéng zài tiàowǔ le|cannot dance anymore]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[脚就快好了|jiǎo jiù kuài hǎo le|her foot is almost healed]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[坐电梯不小心|zuò diàntī bù xiǎoxīn|wasn't careful in the elevator]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[再|zài|after] [休息|xiūxi|a few more days of rest,] [几天|jǐ tiān|(a few days)] [就|jiù|(then)] [能|néng|can]……[跳舞|tiàowǔ|dance] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L20-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [小姐，|xiǎojiě,|Miss,] [这双|zhè shuāng|this pair of] [黑色|hēisè|black] [的|de|(possessive)] [皮鞋|píxié|leather shoes] [多少|duōshao|how much] [钱？|qián?|money?] [有|yǒu|do you have] [43 号|sìshísān hào|size 43] [的|de|(possessive)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [六百八，|liùbǎi bā,|680,] [帮|bāng|help] [您|nín|you] [找双|zhǎo shuāng|find a pair] [43 号|sìshísān hào|of size 43] [的|de|(possessive)] [试试？|shì shi?|to try?]</div>
          <div class="zh stem">[男：|Nán:|M:] [这么|zhème|so] [贵，|guì,|expensive,] [是|shì|are they] [真|zhēn|real] [牛皮|niúpí|cowhide] [的|de|(possessive)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [当然|dāngrán|Of course] [了，|le,|,] [只有|zhǐyǒu|only] [真的|zhēn de|real] [好|hǎo|good] [牛皮|niúpí|cowhide] [做出来|zuò chūlái|made] [的|de|(possessive)] [鞋，|xié,|shoes,] [穿|chuān|wearing] [着|zhe|(progressive)] [才|cái|only then] [舒服。|shūfu.|are comfortable.]</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [最|zuì|most] [可能|kěnéng|likely] [在|zài|are] [哪儿？|nǎr?|where?]</div>
          <div class="sent-en">Q: Where are they most likely to be?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[饭馆|fànguǎn|restaurant]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[商店|shāngdiàn|shop]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[动物园|dòngwùyuán|zoo]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[在|zài|Discussing buying] [讨论|tǎolùn|(discussing)] [买|mǎi|leather shoes,] [皮鞋、|píxié,|(leather shoes),] [价格、|jiàgé,|prices,] [试鞋|shì xié|trying them on] → [商店。|shāngdiàn|a shop.]</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L20-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L20-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[真为|zhēn wèi|Really for] [你|nǐ|you] [高兴！|gāoxìng!|happy!] [希望|xīwàng|hope] [你|nǐ|you] [以后|yǐhòu|in the future] [能|néng|can] [有|yǒu|have] [更好|gèng hǎo|better] [的|de|(possessive)] [成绩。|chéngjì.|results.]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[在|zài|In] [中国，|Zhōngguó,|China,] [北方|běifāng|the North] [的|de|(possessive)] [冬天|dōngtiān|winter] [非常|fēicháng|is very] [冷，|lěng,|cold,] [特别是|tèbié shì|especially] [东北。|Dōngběi.|the Northeast.]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[只有|zhǐyǒu|Only by] [想办法|xiǎng bànfǎ|thinking of ways] [让|ràng|to make] [客人|kèrén|the guest] [满意，|mǎnyì,|satisfied,] [才|cái|only then] [能|néng|can] [解决|jiějué|solve] [这个|zhège|this] [问题。|wèntí.|problem.]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[先生，|xiānsheng,|Sir,] [等等，|děng děng,|wait,] [您|nín|you] [把|bǎ|(BA)] [照相机|zhàoxiàngjī|the camera] [忘|wàng|forgot] [在|zài|in] [车上|chē shang|the car] [了。|le.|(change)]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[我|wǒ|my] [的|de|(possessive)] [照相机|zhàoxiàngjī|camera] [被|bèi|by] [弟弟|dìdi|younger brother] [借走|jiè zǒu|borrowed] [了。|le.|(change)]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [去|qù|go] [那儿|nàr|there] [吗？|ma?|(question)] （E）</div>
          <div class="sent-en">Do you know how to get there? — (E) Of course. We take the bus first, then transfer to the subway.</div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L20-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[谢谢老师！|xièxie lǎoshī!|Thank you, teacher!] [我|wǒ|I] [一定|yídìng|definitely] [会|huì|will] [努力|nǔlì|work hard] [的。|de.|(nominalizer)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Thank you, teacher! I'll definitely work hard.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L20-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[你|nǐ|your] [的|de|(possessive)] [照相机|zhàoxiàngjī|camera] [借给|jiè gěi|lend to] [我|wǒ|me] [用|yòng|use] [几天|jǐ tiān|a few days] [吧？|ba?|(suggestion)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Lend me your camera for a few days?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L20-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[刚才|gāngcái|Just now] [太|tài|so] [着急|zháojí|anxious] [了，|le,|,] [真是|zhēn shì|really] [谢谢|xièxie|thank] [你。|nǐ.|you.] （<span class="blank">　</span>）</div>
          <div class="sent-en">I was so anxious just now — thank you so much.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L20-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[我们|wǒmen|our] [的|de|(possessive)] [客人|kèrén|guests] [越来越|yuè lái yuè|fewer and fewer] [少，|shǎo,|,] [这|zhè|this] [真|zhēn|really] [是|shì|is] [一个|yí ge|a] [问题|wèntí|problem] [啊。|a.|(exclamation)] （<span class="blank">　</span>）</div>
          <div class="sent-en">We have fewer and fewer guests — this is really a problem.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L20-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[去年|qùnián|Last year] [冬天|dōngtiān|winter] [我|wǒ|I] [刚|gāng|just] [到|dào|arrived at] [那儿|nàr|there] [就|jiù|then] [感冒|gǎnmào|caught a cold] [了。|le.|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Last winter I caught a cold as soon as I arrived there.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L20-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L20-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[试|shì|try]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[碗|wǎn|bowl]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[只有|zhǐyǒu|only]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[信用卡|xìnyòngkǎ|credit card]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[房卡|fángkǎ|room card]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[她|tā|she] [说话|shuōhuà|speaks] [的|de|(possessive)] （E [声音|shēngyīn|voice]） [多|duō|how] [好听|hǎotīng|nice] [啊！|a!|!]</div>
          <div class="sent-en">Her voice is so nice!</div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L20-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[我|wǒ|I] [不|bù|don't] [知道|zhīdào|know] [把|bǎ|(BA)] （<span class="blank">　</span>） [忘|wàng|forgot] [在|zài|at] [哪儿|nǎr|where] [了，|le,|,] [现在|xiànzài|now] [只能|zhǐnéng|can only] [叫|jiào|call] [服务员|fúwùyuán|the attendant] [帮|bāng|help] [我|wǒ|me] [开门了。|kāimén le.|open the door.]</div>
          <div class="sent-en">I don't know where I left the room card — now I can only ask the attendant to help me open the door.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L20-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">（<span class="blank">　</span>） [被|bèi|by] [我|wǒ|my] [妹妹|mèimei|younger sister] [拿走了。|ná zǒu le.|taken away.]</div>
          <div class="sent-en">My credit card was taken away by my younger sister.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L20-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[请|qǐng|please] [一个|yí ge|a] [同学|tóngxué|classmate] [来|lái|come to] [听写|tīngxiě|dictate] [生词，|shēngcí,|new words,] [谁|shéi|who] [来|lái|will] （<span class="blank">　</span>） [一下？|yíxià?|a bit?]</div>
          <div class="sent-en">Let a classmate come dictate the new words — who will try?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L20-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [今天|jīntiān|today] [晚上|wǎnshang|evening] [谁|shéi|who] [洗|xǐ|wash] （<span class="blank">　</span>）？</div>
          <div class="zh">[B：|B:|B:] [昨天|zuótiān|yesterday] [是|shì|was] [我，|wǒ,|me,] [今天|jīntiān|today] [应该|yīnggāi|should] [是|shì|be] [你|nǐ|you] [了。|le.|(change)]</div>
          <div class="sent-en">A: Who washes the bowls tonight?<br>B: Yesterday it was me, today it should be you.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L20-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [我|wǒ|my] [的|de|(possessive)] [历史|lìshǐ|history] [老师|lǎoshī|teacher] [让|ràng|asked] [我|wǒ|me] [回家|huí jiā|home] [多|duō|more] [复习。|fùxí.|review.]</div>
          <div class="zh">[B：|B:|B:] [对|duì|right] [啊，|a,|,] （<span class="blank">　</span>） [多|duō|more] [复习|fùxí|review] [才|cái|only then] [能|néng|can] [提高|tígāo|improve] [成绩。|chéngjì.|results.]</div>
          <div class="sent-en">A: My history teacher asked me to review more at home.<br>B: Right — only by reviewing more can you improve your results.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L20-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L20-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[去年|qùnián|Last year] [我|wǒ|I] [跟|gēn|with] [同事|tóngshì|colleagues] [一起|yìqǐ|together] [去|qù|went to] [南方|nánfāng|the South] [的|de|(possessive)] [一个|yí ge|a] [城市|chéngshì|city] [旅行，|lǚxíng,|traveling,] [有|yǒu|there was] [一次|yí cì|one time] [我和|wǒ hé|my colleague and I] [同事|tóngshì|colleague] [找人|zhǎo rén|asked someone] [问路，|wèn lù,|for directions,] [他们|tāmen|they] [总是|zǒngshì|always] [回答|huídá|answered] [“向左走”|“xiàng zuǒ zǒu”|"go left"] [或者|huòzhě|or] [“向右走”。|“xiàng yòu zǒu”.|"go right".] [我们|wǒmen|we] [才|cái|only then] [发现|fāxiàn|discovered] [那里|nàli|there] [的|de|(possessive)] [人|rén|people] [不|bù|not] [习惯|xíguàn|are used to] [说|shuō|saying] [“东南西北”，|“dōng nán xī běi”,|"east, south, west, north",] [只|zhǐ|only] [说|shuō|say] [“左”|“zuǒ”|"left"] [或者|huòzhě|or] [“右”，|“yòu”,|"right",] [只有|zhǐyǒu|only] [在|zài|when] [看|kàn|looking at] [地图|dìtú|the map] [的|de|(possessive)] [时候，|shíhou,|when,] [才|cái|only then] [会|huì|will] [说|shuō|say] [“东南西北”。|“dōng nán xī běi”.|"east, south, west, north".]</div>
          <div class="sent-en">Last year I went with colleagues to a city in the South. Once my colleague and I asked someone for directions; they always answered "go left" or "go right". We discovered the people there aren't used to saying "east, south, west, north" — they only say "left" or "right". Only when looking at a map do they say "east, south, west, north".</div>
          <div class="zh ask">★ [那个|nàge|When do people in that] [城市|chéngshì|city] [的|de|(possessive)] [人，|rén,|(people),] [什么|shénme|(when)] [时候|shíhou|say] [说|shuō|say]“[东南西北|dōng nán xī běi|east, south, west, north]”？</div>
          <div class="sent-en">★ When do people in that city say “east, south, west, north”?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[问路的时候|wèn lù de shíhou|when asking for directions]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[看地图的时候|kàn dìtú de shíhou|when looking at a map]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[去旅行的时候|qù lǚxíng de shíhou|when traveling]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[只有|zhǐyǒu|Only] [看|kàn|when looking at] [地图|dìtú|a map] [的|de|(possessive)] [时候，|shíhou,|(time),] [才|cái|(only then)] [会|huì|will] [说|shuō|say] [东南西北|dōng nán xī běi|east, south, west, north]」。</div>
        </div>
        <div class="q" id="L20-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[“笑一笑，|“xiào yi xiào,|"Smile once,] [十年少”，|shí nián shào”,|ten years younger",] [这|zhè|this] [是|shì|is] [中国人|Zhōngguó rén|Chinese people] [常|cháng|often] [说|shuō|say] [的|de|(possessive)] [一句话，|yí jù huà,|a saying,] [意思|yìsi|meaning] [是|shì|is] [笑|xiào|laughter] [的|de|(possessive)] [作用|zuòyòng|effect] [很大，|hěn dà,|is great,] [笑一笑|xiào yi xiào|smiling] [会|huì|will] [让|ràng|make] [人|rén|people] [年轻|niánqīng|younger] [很多。|hěnduō.|much.] [只有|zhǐyǒu|Only] [常常|chángcháng|often] [笑，|xiào,|laughing,] [才|cái|only then] [能|néng|can] [使|shǐ|make] [自己|zìjǐ|oneself] [年轻，|niánqīng,|young,] [不|bù|not] [容易|róngyì|easily] [变老。|biàn lǎo.|grow old.] [所以|suǒyǐ|so] [我们|wǒmen|we] [每天|měitiān|every day] [都|dōu|all] [应该|yīnggāi|should] [在|zài|in] [工作|gōngzuò|work] [和|hé|and] [学习|xuéxí|study] [中，|zhōng,|among,] [多|duō|more] [想想|xiǎng xiang|think about] [高兴|gāoxìng|happy] [的|de|(possessive)] [事，|shì,|things,] [试着|shì zhe|trying] [让|ràng|to make] [自己|zìjǐ|oneself] [更|gèng|more] [快乐。|kuàilè.|happy.]</div>
          <div class="sent-en">"Smile once, ten years younger" — this is a saying Chinese people often use. It means laughter has a great effect: smiling makes you look much younger. Only by often laughing can you stay young and not easily age. So we should think more about happy things in work and study and try to make ourselves happier.</div>
          <div class="zh ask">★ [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道：|zhīdào:|know:]</div>
          <div class="sent-en">★ From this passage, we can know: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[现在的人不快乐|xiànzài de rén bù kuàilè|people today aren't happy]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[笑能使人变年轻|xiào néng shǐ rén biàn niánqīng|laughter can make people younger]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[工作中没有高兴事|gōngzuò zhōng méiyǒu gāoxìng shì|there are no happy things at work]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[笑一笑|xiào yi xiào|A smile] [会|huì|will] [让|ràng|make] [人|rén|people] [年轻|niánqīng|much younger] [很多|hěnduō|(a lot)]」。</div>
        </div>
        <div class="q" id="L20-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[不要|bú yào|Don't] [总|zǒng|always] [觉得|juéde|feel] [别人|biérén|others'] [的|de|(possessive)] [事情|shìqing|matters] [跟|gēn|with] [自己|zìjǐ|oneself] [没有|méiyǒu|have no] [关系，|guānxi,|relationship,] [认真地|rènzhēn de|carefully] [做好|zuò hǎo|doing well] [自己|zìjǐ|one's own] [的|de|(possessive)] [事情|shìqing|things] [就|jiù|then] [可以|kěyǐ|is enough] [了。|le.|(change)] [关心|guānxīn|Caring about] [别人，|biérén,|others,] [自己|zìjǐ|oneself] [也|yě|also] [会|huì|will] [觉得|juéde|feel] [很|hěn|very] [快乐。|kuàilè.|happy.] [所以|suǒyǐ|so] [要|yào|should] [多|duō|more] [跟|gēn|with] [朋友|péngyou|friends] [在一起，|zài yìqǐ,|together,] [帮助|bāngzhù|helping] [朋友|péngyou|friends] [就是|jiùshì|is] [帮助|bāngzhù|helping] [自己，|zìjǐ,|oneself,] [只有|zhǐyǒu|only by] [经常|jīngcháng|often] [帮助|bāngzhù|helping] [别人，|biérén,|others,] [当|dāng|when] [你|nǐ|you] [需要|xūyào|need] [帮助|bāngzhù|help] [的|de|(possessive)] [时候，|shíhou,|time,] [别人|biérén|others] [才|cái|only then] [会|huì|will] [愿意|yuànyì|be willing to] [帮助|bāngzhù|help] [你。|nǐ.|you.]</div>
          <div class="sent-en">Don't always feel others' matters have nothing to do with you — just do your own things well carefully. Caring about others also makes you feel happy. So spend more time with friends — helping friends is helping yourself. Only by often helping others will they be willing to help you when you need it.</div>
          <div class="zh ask">★ [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道：|zhīdào:|know:]</div>
          <div class="sent-en">★ From this passage, we can know: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[自己的事最重要|zìjǐ de shì zuì zhòngyào|own matters are most important]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[要学会帮助别人|yào xuéhuì bāngzhù biérén|should learn to help others]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[多让朋友帮自己|duō ràng péngyou bāng zìjǐ|ask friends to help you more]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[帮助|bāngzhù|Helping] [朋友|péngyou|friends] [就是|jiùshì|is] [帮助|bāngzhù|helping] [自己|zìjǐ|yourself]……[经常|jīngcháng|often] [帮助|bāngzhù|help] [别人|biérén|others]」。</div>
        </div>
        <div class="q" id="L20-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[小米|Xiǎomǐ|Xiaomi] [给|gěi|to] [我们|wǒmen|us] [写信|xiě xìn|wrote a letter] [了，|le,|,] [她|tā|she] [在|zài|in] [信|xìn|the letter] [里|li|inside] [说|shuō|said] [了|le|(past)] [很多|hěnduō|many] [谢谢|xièxie|thank] [我们|wǒmen|us] [的|de|(possessive)] [话，|huà,|words,] [说|shuō|saying] [我们|wǒmen|we] [不但|búdàn|not only] [很|hěn|very] [关心|guānxīn|cared about] [她，|tā,|her,] [而且|érqiě|but also] [还|hái|also] [帮|bāng|helped] [她|tā|her] [女儿|nǚ'ér|daughter] [解决|jiějué|solve] [了|le|(past)] [工作|gōngzuò|work] [的|de|(possessive)] [问题。|wèntí.|problem.] [在|zài|In] [信|xìn|the letter] [里，|li,|,] [她|tā|she] [还|hái|also] [说|shuō|said] [跟|gēn|with] [我们|wǒmen|us] [在一起|zài yìqǐ|together] [的|de|(possessive)] [那|nà|that] [段|duàn|period of] [时间|shíjiān|time] [是|shì|was] [多么|duōme|so] [让|ràng|making] [人|rén|one] [难忘|nánwàng|unforgettable] [啊。|a.|(exclamation)] [她|tā|she] [说|shuō|says] [如果|rúguǒ|if] [明年|míngnián|next year] [有|yǒu|there's] [机会，|jīhuì,|a chance,] [她|tā|she] [还|hái|will] [会|huì|come] [回来看|huílái kàn|come back to see] [我们|wǒmen|us] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">Xiaomi wrote us a letter. In it she said many words of thanks, saying we not only cared about her but also helped solve her daughter's work problem. In the letter she also said the time spent with us was so unforgettable. She says if there's a chance next year, she'll come back to see us.</div>
          <div class="zh ask">★ [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道：|zhīdào:|know:]</div>
          <div class="sent-en">★ From this passage, we can know: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[小米的工作问题被解决了|Xiǎomǐ de gōngzuò wèntí bèi jiějué le|Xiaomi's work problem was solved]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[小米明年一定回来看我们|Xiǎomǐ míngnián yídìng huílái kàn wǒmen|Xiaomi will definitely come back next year]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[小米写信谢谢我们|Xiǎomǐ xiě xìn xièxie wǒmen|Xiaomi wrote to thank us]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[给|gěi|Wrote] [我们|wǒmen|us] [写信|xiě xìn|a letter]……[说|shuō|saying] [了|le|(past)] [很多|hěnduō|many] [谢谢|xièxie|thanks to] [我们|wǒmen|us] [的|de|(possessive)] [话|huà|words]」。</div>
        </div>
        <div class="q" id="L20-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[你|nǐ|you] [知道|zhīdào|know] [吗，|ma,|(question)] [动物|dòngwù|animals] [虽然|suīrán|although] [不|bù|cannot] [会|huì|can] [说话，|shuōhuà,|speak,] [但是|dànshì|but] [其实|qíshí|actually] [很|hěn|very] [聪明。|cōngming.|smart.] [你看|nǐ kàn|look at] [我家|wǒ jiā|my family] [的|de|(possessive)] [小猫，|xiǎomāo,|the kitten,] [总是|zǒngshì|always] [能|néng|can] [看出来|kàn chūlái|tell] [我|wǒ|I] [是|shì|am] [高兴|gāoxìng|happy] [还是|háishi|or] [难过。|nánguò.|sad.] [我|wǒ|I] [高兴|gāoxìng|happy] [的|de|(possessive)] [时候，|shíhou,|when,] [它|tā|it] [会|huì|will] [在|zài|by] [我|wǒ|my] [身边|shēnbiān|side] [跟|gēn|with] [我|wǒ|me] [玩儿，|wánr,|play,] [高兴地|gāoxìng de|happily] [叫着。|jiào zhe.|crying.] [要是|yào shì|if] [它|tā|it] [觉得|juéde|feels] [我|wǒ|I] [难过，|nánguò,|sad,] [它|tā|it] [就|jiù|then] [会|huì|will] [很|hěn|very] [安静|ānjìng|quietly] [地|de|(adverbial)] [看着|kàn zhe|looking at] [我。|wǒ.|me.] [最|zuì|most] [让|ràng|makes] [我|wǒ|me] [觉得|juéde|feel] [奇怪|qíguài|strange] [的|de|(possessive)] [是，|shì,|is,] [它|tā|it] [一般|yìbān|generally] [不|bù|doesn't] [会|huì|will] [生气，|shēngqì,|get angry,] [但是|dànshì|but] [只要|zhǐyào|as long as] [我|wǒ|I] [去|qù|go to] [动物园|dòngwùyuán|the zoo] [玩儿，|wánr,|to play,] [它|tā|it] [就|jiù|then] [会|huì|will] [变得|biàn de|become] [非常|fēicháng|very] [不|bù|not] [高兴。|gāoxìng.|happy.]</div>
          <div class="sent-en">Did you know? Although animals can't speak, they're actually very smart. Look at my kitten — it can always tell whether I'm happy or sad. When I'm happy, it plays with me by my side, crying happily. If it feels I'm sad, it looks at me very quietly. What makes me feel strangest is: it generally doesn't get angry, but as long as I go to the zoo to play, it becomes very unhappy.</div>
          <div class="zh ask">★ [我|wǒ|My] [家|jiā|family’s] [的|de|(possessive)] [小猫：|xiǎomāo:|kitten:]</div>
          <div class="sent-en">★ My family's kitten: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[非常聪明|fēicháng cōngming|very smart]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[经常不高兴|jīngcháng bù gāoxìng|often unhappy]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[喜欢去动物园|xǐhuan qù dòngwùyuán|likes going to the zoo]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[其实|qíshí|Actually] [很|hěn|very] [聪明|cōngming|clever]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L20-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L20-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[冬天的时候|dōngtiān de shíhou|in winter] [看看|kàn kan|take a look] [我决定|wǒ juédìng|I decided] [去东北|qù Dōngběi|to go to the Northeast]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|I] [决定|juédìng|decided] [冬天|dōngtiān|in winter] [的|de|(possessive)] [时候|shíhou|(time)] [去|qù|to go to] [东北|Dōngběi|the Northeast] [看看。|kàn kan|and take a look.]<div class="sent-en">I've decided to go see the Northeast in winter.</div></div>
        </div>
        <div class="write-item" id="L20-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[洗干净了|xǐ gānjìng le|washed clean] [被|bèi|by] [都|dōu|all] [妈妈|māma|Mom] [碗筷|wǎnkuài|the dishes and chopsticks]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[碗筷|wǎnkuài|The dishes and chopsticks] [都|dōu|all] [被|bèi|(passive)] [妈妈|māma|Mom] [洗|xǐ|washed] [干净|gānjìng|clean] [了。|le|(change)]<div class="sent-en">The dishes and chopsticks were all washed clean by Mom.</div></div>
        </div>
        <div class="write-item" id="L20-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[对中文|duì Zhōngwén|in Chinese] [只有|zhǐyǒu|only] [你才能|nǐ cái néng|can you] [感兴趣|gǎn xìngqù|be interested] [学好|xué hǎo|learn well]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[只有|zhǐyǒu|Only if] [对|duì|you’re interested in] [中文|Zhōngwén|Chinese] [感兴趣|gǎn xìngqù|(interested)] [你|nǐ|can you] [才|cái|(only then)] [能|néng|(can)] [学好。|xué hǎo|learn it well.]<div class="sent-en">Only if you're interested in Chinese can you learn it well.</div></div>
        </div>
        <div class="write-item" id="L20-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[帮你解决|bāng nǐ jiějué|help you solve] [试着|shì zhe|trying] [我|wǒ|I] [电脑的问题|diànnǎo de wèntí|the computer problem]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|I’ll] [试着|shì zhe|try] [帮|bāng|to help] [你|nǐ|you] [解决|jiějué|solve] [电脑|diànnǎo|the computer] [的|de|(possessive)] [问题。|wèntí|problem.]<div class="sent-en">I'll try to help you solve the computer problem.</div></div>
        </div>
        <div class="write-item" id="L20-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[小皮鞋|xiǎo píxié|little leather shoes] [多么|duōme|how] [可爱|kě'ài|cute] [啊|a|(exclamation)] [你看|nǐ kàn|look at] [这双|zhè shuāng|this pair of]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|Look how] [看|kàn|(look)] [这双|zhè shuāng|this pair of] [小皮鞋|xiǎo píxié|little leather shoes] [多么|duōme|how] [可爱|kě’ài|cute] [啊。|a|(exclamation)]<div class="sent-en">Look how cute this pair of little leather shoes is.</div></div>
        </div>

        <h4 id="L20-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L20-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[别|bié|don't] [难|nán|sad] <span class="blank-input"><span class="input-py">guò</span><input type="text" data-ans="过"></span> [了，|le,|,] [下次|xià cì|next time] [你|nǐ|you] [一定|yídìng|definitely] [能|néng|can] [考好|kǎo hǎo|do well on the exam] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">Don't be sad — you'll definitely do well next time.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[过|guò|(as in 难过 "sad")]</span></div>
        </div>
        <div class="write-item" id="L20-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[谢谢|xièxie|Thanks for] [你|nǐ|your] [的|de|(possessive)] [关|guān|care] <span class="blank-input"><span class="input-py">xīn</span><input type="text" data-ans="心"></span>，[我|wǒ|I] [现在|xiànzài|now] [很好。|hěn hǎo.|am very well.]</div>
          <div class="sent-en">Thanks for your care — I'm very well now.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[心|xīn|heart]（[关心|guānxīn|care]）</span></div>
        </div>
        <div class="write-item" id="L20-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[这次|zhè cì|this time] [考试，|kǎoshì,|exam,] [我|wǒ|my] [的|de|(possessive)] [数学|shùxué|math] <span class="blank-input"><span class="input-py">chéng</span><input type="text" data-ans="成"></span> [绩|jì|results] [最好。|zuì hǎo.|are the best.]</div>
          <div class="sent-en">On this exam, my math results are the best.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[成|chéng|achieve]（[成绩|chéngjì|results]）</span></div>
        </div>
        <div class="write-item" id="L20-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[妈妈|māma|Mom] [说|shuō|says] [只有|zhǐyǒu|only by] [写完|xiě wán|finishing] [作业，|zuòyè,|homework,] <span class="blank-input"><span class="input-py">cái</span><input type="text" data-ans="才"></span> [能|néng|can] [玩儿|wánr|play] [游戏。|yóuxì.|games.]</div>
          <div class="sent-en">Mom says only after finishing homework can I play games.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[才|cái|only then]</span></div>
        </div>
        <div class="write-item" id="L20-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[你|nǐ|you] [是|shì|when] [什么|shénme|what] [时候|shíhou|time] [有|yǒu|had] [信用|xìnyòng|credit] <span class="blank-input"><span class="input-py">kǎ</span><input type="text" data-ans="卡"></span> [的？|de?|card?]</div>
          <div class="sent-en">When did you get a credit card?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[卡|kǎ|card]（[信用卡|xìnyòngkǎ|credit card]）</span></div>
        </div>

        <h4 id="L20-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L20-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[你|nǐ|you] [可以|kěyǐ|can] [去|qù|go to] <span class="blank-input"><input type="text" data-ans="东"></span> [门|mén|gate] [坐|zuò|take] [公共汽|gōnggòng qì|public] <span class="blank-input"><input type="text" data-ans="车"></span>。|.</div>
          <div class="zh" style="margin-top:6px;">[东|dōng|east]　[车|chē|vehicle]</div>
          <div class="sent-en">You can go to the east gate to take the bus.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[东|dōng|(as in 东边 “east”)]、[车|chē|(as in 公共汽车 “bus”)]</div>
        </div>
        <div class="write-item" id="L20-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[这件事|zhè jiàn shì|this matter] [怎么|zěnme|how] [解|jiě|solve] <span class="blank-input"><input type="text" data-ans="决"></span>，[你|nǐ|you] <span class="blank-input"><input type="text" data-ans="快"></span> [帮|bāng|help] [我|wǒ|me] [想|xiǎng|think of] [想办法|xiǎng bànfǎ|solutions] [吧。|ba.|(suggestion)]</div>
          <div class="zh" style="margin-top:6px;">[决|jué|decide]　[快|kuài|quickly]</div>
          <div class="sent-en">How to solve this matter — quickly help me think of a way.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[决|jué|(as in 决定 “decide”)]、[快|kuài|(as in 快乐 “happy”)]</div>
        </div>
        <div class="write-item" id="L20-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[公|gōng|public] <span class="blank-input"><input type="text" data-ans="园"></span> [里|li|inside] [的|de|(possessive)] [花|huā|flowers] [多|duō|how] <span class="blank-input"><input type="text" data-ans="么"></span> [漂亮|piàoliang|beautiful] [啊！|a!|(exclamation)]</div>
          <div class="zh" style="margin-top:6px;">[园|yuán|garden]　[么|me|(particle)]</div>
          <div class="sent-en">How beautiful the flowers in the park are!</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[园|yuán|(as in 公园 “park”)]、[么|me|(as in 这么 “so”)]</div>
        </div>
        <div class="write-item" id="L20-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[你别|nǐ bié|Don't] <span class="blank-input"><input type="text" data-ans="难"></span> [过了，|guò le,|be sad,] [下次|xià cì|next time] [我|wǒ|I] [帮你|bāng nǐ|help you] <span class="blank-input"><input type="text" data-ans="准"></span> [备，|bèi,|prepare,] [一定|yídìng|definitely] [会|huì|will] [没|méi|no] [问题|wèntí|problem] [的。|de.|(nominalizer)]</div>
          <div class="zh" style="margin-top:6px;">[难|nán|difficult]　[准|zhǔn|ready]</div>
          <div class="sent-en">Don't be sad — next time I'll help you prepare; there'll definitely be no problem.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[难|nán|hard]、[准|zhǔn|(as in 准备 “prepare”)]</div>
        </div>
        <div class="write-item" id="L20-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[这个|zhège|this] [电|diàn|electric] <span class="blank-input"><input type="text" data-ans="视"></span> [节目|jiémù|program] [很|hěn|very] [有意思，|yǒu yìsi,|interesting,] [我|wǒ|I] [很|hěn|really] [想|xiǎng|want to] [看，|kàn,|watch,] [但是|dànshì|but] [电视|diànshì|the TV] [怎么|zěnme|why] [被|bèi|by] [爸爸|bàba|Dad] [关|guān|turned off] [上了？|shàng le?|(change)]</div>
          <div class="zh" style="margin-top:6px;">[视|shì|see]　[被|bèi|by]</div>
          <div class="sent-en">This TV program is very interesting — I really want to watch it, but why has the TV been turned off by Dad?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[视|shì|(as in 电视 “TV”)]、[被|bèi|(passive marker)]</div>
        </div>

        <h4 id="L20-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L20-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[园|yuán|garden] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[公园|gōngyuán|park]、[花园|huāyuán|flower garden]</div></div>
        </div>
        <div class="write-item" id="L20-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[病|bìng|illness] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[生病|shēngbìng|get sick]、[有病|yǒu bìng|sick]</div></div>
        </div>
        <div class="write-item" id="L20-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[问|wèn|ask] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[问题|wèntí|question]、[问你|wèn nǐ|ask you]</div></div>
        </div>
        <div class="write-item" id="L20-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[闻|wén|hear] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[新闻|xīnwén|news]、[听闻|tīngwén|hear of]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L20-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小丽|Xiǎolì|Xiaoli] [找不到|zhǎo bu dào|can't find] [她|tā|her] [的|de|(possessive)]
            <span class="blank-input review-blank"><span class="input-py">zhàoxiàngjī</span><input type="text" data-ans="照相机"></span>
            [了，|le,|,] [可能|kěnéng|maybe] [被|bèi|by]
            <span class="blank-input review-blank"><span class="input-py">biérén</span><input type="text" data-ans="别人"></span>
            [拿走|ná zǒu|taken] [了。|le.|(change)] [她|tā|she] [有点儿|yǒudiǎnr|a bit]
            <span class="blank-input review-blank"><span class="input-py">nánguò</span><input type="text" data-ans="难过"></span>。
            [同事|tóngshì|colleague] [让|ràng|asked] [她|tā|her] [去|qù|go to] [公司|gōngsī|company]
            <span class="blank-input review-blank"><span class="input-py">dōngmén</span><input type="text" data-ans="东门"></span>
            [外|wài|outside] [的|de|(possessive)] [大|dà|big] [商场|shāngchǎng|mall] [再|zài|again] [买|mǎi|buy] [一个，|yí ge,|one,] [但是|dànshì|but] [这个月|zhège yuè|this month] [她|tā|her] [的|de|(possessive)]
            <span class="blank-input review-blank"><span class="input-py">xìnyòngkǎ</span><input type="text" data-ans="信用卡"></span>
            [里|li|inside] [的|de|(possessive)] [钱|qián|money] [已经|yǐjīng|already] [花|huā|spent] [得|de|(complement)] [差不多|chàbuduō|almost all] [了。|le.|(change)]</div>
          <div class="sent-en">Xiaoli can't find her camera — it may have been taken by someone. She's a bit sad. Her colleague asked her to buy another one at the big mall outside the company's east gate, but the money on her credit card this month is already almost spent.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[照相机|zhàoxiàngjī|camera]、[别人|biérén|others]、[难过|nánguò|sad]、[东门|dōngmén|east gate]、[信用卡|xìnyòngkǎ|credit card]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小明|Xiǎomíng|Xiaoming] [的|de|(possessive)] [朋友|péngyou|friend] [最近|zuìjìn|recently] [突然|tūrán|suddenly]
            <span class="blank-input review-blank"><span class="input-py">duì</span><input type="text" data-ans="对"></span>
            [体育|tǐyù|sports] [感兴趣|gǎn xìngqù|interested] [起来了，|qǐlái le,|(change)] [因为|yīnwèi|because] [她|tā|her]
            <span class="blank-input review-blank"><span class="input-py">nánpéngyou</span><input type="text" data-ans="男朋友"></span>
            [很|hěn|very] [喜欢|xǐhuan|likes] [看|kàn|watching] [足球|zúqiú|football] [比赛，|bǐsài,|matches.] [她|tā|she] [是|shì|was] [被|bèi|by]
            <span class="blank-input review-blank"><span class="input-py">nánpéngyou</span><input type="text" data-ans="男朋友"></span>
            [影响|yǐngxiǎng|influenced] [的。|de.|(nominalizer)] [除了|chúle|Besides] [足球，|zúqiú,|football,] [她|tā|she] [还|hái|also] [天天|tiāntiān|every day] [上网|shàngwǎng|goes online] [玩儿|wánr|to play] [游戏，|yóuxì,|games,]
            <span class="blank-input review-blank"><span class="input-py">chéngjì</span><input type="text" data-ans="成绩"></span>
            [差|chà|poor] [极|jí|extremely] [了。|le.|(change)]</div>
          <div class="sent-en">Xiaoming's friend suddenly became interested in sports recently, because her boyfriend loves watching football matches — she was influenced by him. Besides football, she also goes online to play games every day — her grades are extremely poor.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[对|duì|to]、[男朋友|nánpéngyou|boyfriend]、[男朋友|nánpéngyou|boyfriend]、[成绩|chéngjì|grades]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[21] = {
  navLabel:'模拟卷',
  html: `
    <div class="lesson">
      <h2>HSK（三级）模拟试卷
        <span class="title-py">HSK (Sān jí) Mónǐ Shìjuàn</span>
        <small>HSK Level 3 Model Test · 共 80 题</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L21-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图模拟卷1.png" alt="听力图模拟卷1" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图模拟卷1.png</b></span>
        </div>

        <div class="q" id="L21-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[男：|Nán:|M:] [刚才|gāngcái|just now] [那个|nàge|that] [拿着|ná zhe|holding] [伞|sǎn|umbrella] [走进|zǒu jìn|walking into] [电梯|diàntī|the elevator] [的|de|(possessive)] [人|rén|person] [是|shì|is] [谁，|shéi,|who,] [你|nǐ|you] [认识|rènshi|know] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [他|tā|he] [是|shì|is] [我|wǒ|my] [以前|yǐqián|former] [在|zài|at] [银行|yínháng|the bank] [工作|gōngzuò|working] [时|shí|when] [的|de|(possessive)] [同事。|tóngshì.|colleague.]</div>
          <div class="sent-en">M: Who was that person holding an umbrella who just walked into the elevator? Do you know him?<br>W: He's my former colleague from when I worked at the bank.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C</div>
        </div>
        <div class="q" id="L21-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[男：|Nán:|M:] [喂，|wèi,|Hello,] [你|nǐ|you] [怎么|zěnme|why] [还|hái|still] [没|méi|not] [到？|dào?|arrive?] [现在|xiànzài|now] [都|dōu|already] [八点|bā diǎn|8 o'clock] [一刻|yí kè|a quarter] [了，|le,|,] [还有|háiyǒu|still] [一刻钟|yí kèzhōng|a quarter of an hour] [电影|diànyǐng|the movie] [就|jiù|then] [开始|kāishǐ|starts] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [已经|yǐjīng|already] [在|zài|on] [路上|lù shang|the way] [了，|le,|,] [车|chē|cars] [有点儿|yǒudiǎnr|a bit] [多。|duō.|many.] [你|nǐ|you] [先进去|xiān jìnqù|go in first] [坐着|zuò zhe|sitting] [等|děng|wait for] [我|wǒ|me] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: Hello, why haven't you arrived yet? It's already 8:15 and the movie starts in a quarter of an hour.<br>W: I'm on my way — there are a lot of cars. Go in and sit and wait for me.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A</div>
        </div>
        <div class="q" id="L21-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[男1：|Nán1:|M1:] [这|zhè|this] [蛋糕|dàngāo|cake] [又|yòu|both] [好吃,|hǎochī,|tasty,] [又|yòu|and] [漂亮，|piàoliang,|pretty,] [你|nǐ|you] [怎么|zěnme|why] [不|bù|not] [来|lái|have] [一块？|yí kuài?|a piece?]</div>
          <div class="zh stem">[男2：|Nán2:|M2:] [我|wǒ|I] [最近|zuìjìn|recently] [牙疼，|yá téng,|toothache,] [都|dōu|already] [疼|téng|hurt] [了|le|(past)] [四五天|sì wǔ tiān|four or five days] [了，|le,|,] [一口|yì kǒu|one mouthful] [甜|tián|sweet] [的|de|(nominalizer)] [也|yě|also] [不能|bùnéng|cannot] [吃。|chī.|eat.]</div>
          <div class="sent-en">M1: This cake is both tasty and pretty — why don't you have a piece?<br>M2: I've had a toothache lately — hurting for four or five days. I can't eat even one bite of sweet things.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E</div>
        </div>
        <div class="q" id="L21-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|your] [的|de|(possessive)] [眼睛|yǎnjìng|eyes] [黑黑|hēihēi|dark] [的，|de,|,] [怎么|zěnme|like] [跟|gēn|with] [大熊猫|dàxióngmāo|giant pandas] [一样？|yíyàng?|the same?]</div>
          <div class="zh stem">[男：|Nán:|M:] [要|yào|am going to] [考试|kǎoshì|have an exam] [了，|le,|,] [我|wǒ|I] [还|hái|still] [没|méi|not] [准备|zhǔnbèi|prepared] [好，|hǎo,|,] [我|wǒ|I] [已经|yǐjīng|already] [在|zài|at] [书桌|shūzhuō|the desk] [前|qián|in front of] [坐|zuò|sat] [了|le|(past)] [一天|yì tiān|a whole day] [了，|le,|,] [一个字|yí ge zì|a single word] [也|yě|also] [没|méi|not] [看|kàn|read] [进去。|jìnqù.|absorb.]</div>
          <div class="sent-en">W: Your eyes are so dark — like a giant panda's!<br>M: I'm going to have an exam but I'm not ready. I've sat at my desk a whole day and haven't absorbed a single word.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F</div>
        </div>
        <div class="q" id="L21-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[男：|Nán:|M:] [医生，|yīshēng,|Doctor,] [我|wǒ|my] [的|de|(possessive)] [狗|gǒu|dog] [吃|chī|took] [了|le|(past)] [三天|sān tiān|three days] [药，|yào,|medicine,] [您|nín|you] [再|zài|again] [为|wèi|for] [它|tā|it] [检查|jiǎnchá|check] [一下，|yíxià,|a bit,] [看看|kàn kan|see] [是不是|shì bú shì|whether] [已经|yǐjīng|already] [好|hǎo|better] [了？|le?|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [没什么|méi shénme|no] [大|dà|big] [问题|wèntí|problem] [了，|le,|,] [也|yě|also] [不用|búyòng|no need to] [吃药|chī yào|take medicine] [了。|le.|(change)] [记得|jìde|remember] [别|bié|don't] [用|yòng|use] [冷水|lěng shuǐ|cold water] [给|gěi|for] [它|tā|it] [洗澡。|xǐzǎo.|bath.]</div>
          <div class="sent-en">M: Doctor, my dog has taken medicine for three days. Please check it again and see if it's better.<br>W: No more big problem, and no need to take medicine. Just remember not to bathe it in cold water.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B</div>
        </div>

        <h4 id="L21-l1b">[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图模拟卷2.png" alt="听力图模拟卷2" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图模拟卷2.png</b></span>
        </div>

        <div class="q" id="L21-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [帮|bāng|help] [我|wǒ|me] [上网|shàngwǎng|go online] [买|mǎi|buy] [双|shuāng|a pair of] [皮鞋|píxié|leather shoes] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [看看，|kàn kan,|take a look,] [我|wǒ|I] [觉得|juéde|feel] [这双|zhè shuāng|this pair] [不错。|búcuò.|is nice.]</div>
          <div class="sent-en">M: Help me buy a pair of leather shoes online.<br>W: Let me see — I think this pair is nice.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>D</div>
        </div>
        <div class="q" id="L21-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[男：|Nán:|M:] [节日快乐，|jiérì kuàilè,|Happy holiday,] [这|zhè|this] [是|shì|is] [我|wǒ|I] [送给|sòng gěi|giving] [你|nǐ|you] [的|de|(possessive)] [礼物。|lǐwù.|gift.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [谢谢|xièxie|thank] [你，|nǐ,|you,] [我|wǒ|I] [现在|xiànzài|now] [高兴|gāoxìng|happy] [极|jí|extremely] [了！|le!|(change)]</div>
          <div class="sent-en">M: Happy holiday — this is a gift for you.<br>W: Thank you! I'm extremely happy now!</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E</div>
        </div>
        <div class="q" id="L21-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [记得|jìde|remember] [你|nǐ|you] [请|qǐng|asked for] [了|le|(past)] [三天|sān tiān|three days] [假，|jià,|leave,] [怎么|zěnme|why] [今天|jīntiān|today] [就|jiù|then] [来|lái|came] [了？|le?|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [今天|jīntiān|today] [的|de|(possessive)] [会议|huìyì|meeting] [很|hěn|very] [重要，|zhòngyào,|important,] [我|wǒ|I] [必须|bìxū|must] [来。|lái.|come.]</div>
          <div class="sent-en">W: I remember you asked for three days off — why are you back today?<br>M: Today's meeting is very important — I must come.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C</div>
        </div>
        <div class="q" id="L21-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [怎么|zěnme|why] [今天|jīntiān|today] [就|jiù|then] [出来|chūlái|came out] [跑步|pǎobù|running] [了？|le?|(change)] [感冒|gǎnmào|cold] [好|hǎo|better] [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [吃|chī|took] [了|le|(past)] [药，|yào,|medicine,] [休息|xiūxi|rested] [了|le|(past)] [两天，|liǎng tiān,|two days,] [现在|xiànzài|now] [已经|yǐjīng|already] [好|hǎo|better] [了。|le.|(change)]</div>
          <div class="sent-en">M: Why are you out running today? Is your cold better?<br>W: I took medicine, rested two days, and now I'm already better.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B</div>
        </div>
        <div class="q" id="L21-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [忘|wàng|forgot] [带|dài|to bring] [钱包|qiánbāo|wallet] [了，|le,|,] [你|nǐ|you] [带|dài|bring] [钱|qián|money] [了|le|(past)] [吗？|ma?|(question)] [借|jiè|lend] [我|wǒ|me] [点儿|diǎnr|a bit] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [需要|xūyào|need] [多少|duōshao|how much] [钱？|qián?|money?] [我|wǒ|I] [这儿|zhèr|here] [有|yǒu|have] [50。|wǔshí.|50.]</div>
          <div class="sent-en">W: I forgot to bring my wallet — did you bring money? Lend me some.<br>M: How much do you need? I have 50 here.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A</div>
        </div>

        <h4 id="L21-l2">[第二部分|dì èr bùfen|Part 2]　[第 11–20 题：|dì 11–20 tí:|Q 11–20:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L21-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[以前|yǐqián|Before,] [我|wǒ|I] [总|zǒng|always] [觉得|juéde|felt] [有|yǒu|having] [了|le|(past)] [钱，|qián,|money,] [什么|shénme|everything] [都|dōu|all] [能|néng|can] [买到。|mǎi dào.|be bought.] [但是|dànshì|but] [现在|xiànzài|now] [我|wǒ|I] [觉得|juéde|feel] [健康|jiànkāng|health] [比|bǐ|than] [什么|shénme|anything] [都|dōu|all] [重要。|zhòngyào.|is important.]</div>
          <div class="sent-en">Before, I always felt that with money, everything could be bought. But now I feel health is more important than anything.</div>
          <div class="zh stem">★ [现在|xiànzài|Now] [他|tā|he] [还|hái|still] [不|bù|doesn't] [知道|zhīdào|know] [什么|shénme|what] [是|shì|is] [最|zuì|most] [重要|zhòngyào|important] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">★ Now he still doesn't know what is most important.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[他|tā|He] [说|shuō|says]「[健康|jiànkāng|health] [比|bǐ|is more important] [什么|shénme|than any-] [都|dōu|(all)] [重要|zhòngyào|thing]」，[他|tā|he] [知道|zhīdào|knows] [什么|shénme|what] [最|zuì|most] [重要。|zhòngyào|matters.]" data-expl-en="He says 'health is more important than anything' — he knows."></div>
        </div>
        <div class="q" id="L21-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[我们医院|wǒmen yīyuàn|Our hospital] [的|de|(possessive)] [小常|Xiǎo Cháng|Xiao Chang] [是|shì|is] [个|ge|a] [又|yòu|both] [聪明|cōngming|smart] [又|yòu|and] [努力|nǔlì|hardworking] [的|de|(possessive)] [医生，|yīshēng,|doctor,] [而且|érqiě|and] [对|duì|to] [谁|shéi|everyone] [都|dōu|all] [很|hěn|very] [热情。|rèqíng.|warm.] [谁|shéi|Whoever] [见|jiàn|sees] [了|le|(past)] [他|tā|him] [都|dōu|all] [喜欢。|xǐhuan.|likes him.]</div>
          <div class="sent-en">Xiao Chang at our hospital is both smart and hardworking, and warm to everyone. Whoever sees him likes him.</div>
          <div class="zh stem">★ [大家|dàjiā|Everyone] [都|dōu|all] [喜欢|xǐhuan|likes] [常医生。|Cháng yīshēng.|Dr. Chang.]</div>
          <div class="sent-en">★ Everyone likes Dr. Chang.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[谁|shéi|Everyone] [见|jiàn|who meets] [了|le|(past)] [他|tā|him] [都|dōu|all] [喜欢|xǐhuan|likes him]」→ [大家|dàjiā|everyone] [都|dōu|all] [喜欢|xǐhuan|likes] [他。|tā|him.]" data-expl-en="'Whoever sees him likes him' — everyone likes him."></div>
        </div>
        <div class="q" id="L21-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[虽然|suīrán|Although] [我家|wǒ jiā|my family] [有|yǒu|has] [辆|liàng|(MW)] [车，|chē,|car,] [想|xiǎng|whenever] [什么|shénme|when] [时候|shíhou|when] [开|kāi|drive] [就|jiù|then] [什么时候|shénme shíhou|when] [开，|kāi,|drive,] [但是|dànshì|but] [上下班|shàng xià bān|commuting] [时间，|shíjiān,|time,] [坐|zuò|taking] [地铁|dìtiě|the subway] [比|bǐ|than] [开车|kāichē|driving] [快|kuài|fast] [多了。|duō le.|much.]</div>
          <div class="sent-en">Although my family has a car and can drive whenever we want, during commute times taking the subway is much faster than driving.</div>
          <div class="zh stem">★ [上下班|shàng xià bān|Commuting] [时间|shíjiān|time] [他|tā|he] [不|bù|doesn't] [愿意|yuànyì|want to] [坐|zuò|take] [地铁。|dìtiě.|the subway.]</div>
          <div class="sent-en">★ During commute times he doesn't want to take the subway.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[说|shuō|Saying]「[坐|zuò|taking] [地铁|dìtiě|the subway] [比|bǐ|is much faster] [开车|kāichē|than driving] [快|kuài|(fast)] [多|duō|(much)] [了|le|(change)]」，[说明|shuōmíng|showing] [他|tā|he] [更|gèng|would rather] [愿意|yuànyì|prefer] [坐|zuò|take] [地铁。|dìtiě|the subway.]" data-expl-en="Says the subway is faster — he prefers it."></div>
        </div>
        <div class="q" id="L21-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[我家|wǒ jiā|My family's] [书桌|shūzhuō|desk] [上|shàng|on] [放着|fàng zhe|placed] [一本|yì běn|a] [旧书，|jiù shū,|old book,] [哥哥|gēge|elder brother] [说|shuō|says] [这本书|zhè běn shū|this book] [对|duì|to] [他|tā|his] [的|de|(possessive)] [影响|yǐngxiǎng|influence] [很大，|hěn dà,|was great,] [我|wǒ|I] [也|yě|also] [打算|dǎsuàn|plan to] [有|yǒu|when I have] [时间|shíjiān|time] [的|de|(possessive)] [时候|shíhou|when] [认真|rènzhēn|carefully] [读读。|dú du.|read it.]</div>
          <div class="sent-en">There's an old book on our family's desk. My elder brother says this book had a great influence on him. I also plan to read it carefully when I have time.</div>
          <div class="zh stem">★ [哥哥|gēge|Elder brother] [让|ràng|asked] [我|wǒ|me] [认真|rènzhēn|carefully] [读书。|dúshū.|read books.]</div>
          <div class="sent-en">★ Elder brother asked me to read carefully.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It’s]「[我|wǒ|I] [打算|dǎsuàn|plan] [读读|dú du|to read it]」，[不是|bú shì|not] [哥哥|gēge|my brother] [让|ràng|asking] [我|wǒ|me] [读。|dú|to read.]" data-expl-en="'I plan to read it' — not that brother asked me to."></div>
        </div>
        <div class="q" id="L21-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[昨晚|zuówǎn|Last night] [跟|gēn|with] [几个|jǐ ge|a few] [大学同学|dàxué tóngxué|university classmates] [聊天，|liáotiān,|chatting,] [十年|shí nián|ten years] [不见，|bú jiàn,|not seeing each other,] [大家|dàjiā|everyone's] [的|de|(possessive)] [变化|biànhuà|changes] [都|dōu|all] [很大，|hěn dà,|are big,] [跟|gēn|from] [年轻|niánqīng|young] [的|de|(possessive)] [时候|shíhou|time] [一点儿也|yìdiǎnr yě|not at all] [不|bù|not] [一样|yíyàng|the same] [了。|le.|(change)]</div>
          <div class="sent-en">Last night I chatted with a few university classmates. Not having seen each other for ten years, everyone has changed a lot — completely different from when we were young.</div>
          <div class="zh stem">★ [他|tā|He] [和|hé|and] [这些|zhèxiē|these] [同学|tóngxué|classmates] [已经|yǐjīng|already] [很长时间|hěn cháng shíjiān|a long time] [没|méi|not] [见面|jiànmiàn|met] [了。|le.|(change)]</div>
          <div class="sent-en">★ He and these classmates haven't met for a long time.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[十年|shí nián|Ten years] [不|bù|not] [见|jiàn|seen]」→ [很|hěn|a very] [长|cháng|long] [时间|shíjiān|time] [没|méi|without] [见面。|jiànmiàn|meeting.]" data-expl-en="'Not seen for ten years' — long time."></div>
        </div>
        <div class="q" id="L21-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[住在|zhù zài|living on] [一层|yī céng|the first floor] [真|zhēn|really] [好，|hǎo,|is nice,] [不|bù|unlike] [像|xiàng|us,] [我们，|wǒmen,|,] [只要|zhǐyào|whenever] [电梯|diàntī|the elevator] [坏|huài|breaks] [了，|le,|,] [就|jiù|then] [得|děi|have to] [爬|pá|climb] [上去。|shàngqù.|up.]</div>
          <div class="sent-en">Living on the first floor is really nice — unlike us, whenever the elevator breaks we have to climb up.</div>
          <div class="zh stem">★ [我们|wǒmen|We] [住|zhù|live] [在|zài|on] [一层。|yī céng.|the first floor.]</div>
          <div class="sent-en">★ We live on the first floor.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="「[不|bù|not] [像|xiàng|like] [我们|wǒmen|us]」→ [我们|wǒmen|we] [不|bù|don’t] [住|zhù|live on] [一层。|yī céng|the first floor.]" data-expl-en="'Unlike us' — we don't live on the first floor."></div>
        </div>
        <div class="q" id="L21-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[小黄，|Xiǎo Huáng,|Xiao Huang,] [没关系，|méi guānxi,|It's OK,] [如果|rúguǒ|if] [今天|jīntiān|today] [你|nǐ|you] [没|méi|don't] [时间，|shíjiān,|have time,] [就|jiù|then] [明天|míngtiān|tomorrow] [再|zài|again] [来。|lái.|come.] [明天|míngtiān|tomorrow] [不|bù|not] [行|xíng|work] [的|de|(possessive)] [话，|huà,|if,] [后天|hòutiān|the day after tomorrow] [来|lái|coming] [也|yě|also] [不|bù|not] [晚。|wǎn.|too late.]</div>
          <div class="sent-en">Xiao Huang, it's OK — if you don't have time today, come tomorrow. If tomorrow doesn't work, the day after tomorrow isn't too late.</div>
          <div class="zh stem">★ [小黄|Xiǎo Huáng|Xiao Huang] [这几天|zhè jǐ tiān|these few days] [哪天|nǎ tiān|whichever day] [来|lái|coming] [都|dōu|all] [行。|xíng.|is fine.]</div>
          <div class="sent-en">★ Xiao Huang can come any of these days.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[今天、|jīntiān,|Today,] [明天、|míngtiān,|tomorrow,] [后天|hòutiān|or the day after] [都|dōu|all] [可以|kěyǐ|work] → [哪|nǎ|any] [天|tiān|day] [来|lái|coming] [都|dōu|all] [行。|xíng|is fine.]" data-expl-en="Today, tomorrow, or the day after — any day is fine."></div>
        </div>
        <div class="q" id="L21-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[这个|zhège|this] [周末|zhōumò|weekend] [小丽|Xiǎolì|Xiaoli] [想|xiǎng|wants] [去|qù|go] [旅行，|lǚxíng,|traveling,] [她|tā|she] [问|wèn|asked] [我|wǒ|me] [去|qù|go] [哪儿|nǎr|where] [好，|hǎo,|is good,] [我|wǒ|I] [说|shuō|said] [这|zhè|these] [几天|jǐ tiān|few days] [南方|nánfāng|the South] [天气|tiānqì|weather] [不|bù|not] [好，|hǎo,|good,] [让|ràng|let] [她|tā|her] [去|qù|go to] [北方|běifāng|the North] [看看。|kàn kan.|take a look.]</div>
          <div class="sent-en">This weekend Xiaoli wants to travel. She asked me where would be good — I said the South's weather isn't good these days, so let her go to the North.</div>
          <div class="zh stem">★ [我|wǒ|I] [让|ràng|asked] [小丽|Xiǎolì|Xiaoli] [去|qù|go to] [北方|běifāng|the North] [旅行。|lǚxíng.|travel.]</div>
          <div class="sent-en">★ I asked Xiaoli to travel to the North.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[让|ràng|letting] [她|tā|her] [去|qù|go] [北方|běifāng|to the North] [看看|kàn kan|to take a look]」。" data-expl-en="'Let her go to the North.'"></div>
        </div>
        <div class="q" id="L21-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[今天|jīntiān|Today] [上课|shàngkè|in class] [的|de|(possessive)] [时候，|shíhou,|when,] [我|wǒ|I] [问|wèn|asked] [了|le|(past)] [老师|lǎoshī|the teacher] [一个|yí ge|a] [问题，|wèntí,|question,] [他|tā|he] [说|shuō|said] [想一想，|xiǎng yi xiǎng,|think about it,] [明天|míngtiān|tomorrow] [再|zài|then] [回答|huídá|answer] [我。|wǒ.|me.]</div>
          <div class="sent-en">In class today I asked the teacher a question. He said to think about it and he'd answer me tomorrow.</div>
          <div class="zh stem">★ [老师|lǎoshī|The teacher] [让|ràng|asked] [我|wǒ|me] [想一想，|xiǎng yi xiǎng,|to think about it,] [明天|míngtiān|tomorrow] [回答|huídá|answer] [问题。|wèntí.|the question.]</div>
          <div class="sent-en">★ The teacher asked me to think about it and answer the question tomorrow.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It’s] [老师|lǎoshī|the teacher] [说|shuō|saying]「[想一想，|xiǎng yi xiǎng,|think about it,] [明天|míngtiān|and answer me] [再|zài|(then)] [回答|huídá|answer] [我|wǒ|me]」→ [老师|lǎoshī|the teacher] [要|yào|needs to] [想，|xiǎng,|think,] [明天|míngtiān|and tomorrow] [回答|huídá|answer] [我。|wǒ|me.]" data-expl-en="The teacher wants to think and answer me tomorrow."></div>
        </div>
        <div class="q" id="L21-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[小刚|Xiǎogāng|Xiaogang] [明天|míngtiān|tomorrow] [让|ràng|invited] [我们|wǒmen|us] [去|qù|go to] [他家|tā jiā|his home] [做客，|zuòkè,|as guests,] [他|tā|he] [给|gěi|to] [我|wǒ|me] [画|huà|drew] [了|le|(past)] [一张|yì zhāng|a] [地图，|dìtú,|map,] [你|nǐ|you] [看，|kàn,|look,] [先|xiān|first] [坐|zuò|take] [地铁，|dìtiě,|the subway,] [然后|ránhòu|then] [坐|zuò|take] [公共汽车。|gōnggòng qìchē.|the bus.] [车站|chēzhàn|The bus stop] [附近|fùjìn|nearby] [有|yǒu|there is] [一个|yí ge|a] [超市，|chāoshì,|supermarket,] [我们|wǒmen|we] [买点儿|mǎi diǎnr|buy some] [水果|shuǐguǒ|fruit] [带|dài|to take] [过去|guòqù|over] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">Xiaogang invited us to his home tomorrow. He drew me a map — look, first take the subway, then take the bus. There's a supermarket near the stop; let's buy some fruit to bring.</div>
          <div class="zh stem">★ [去|qù|Going to] [小刚家|Xiǎogāng jiā|Xiaogang's home] [要|yào|need to] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|the bus,] [然后|ránhòu|then] [坐|zuò|take] [地铁。|dìtiě.|the subway.]</div>
          <div class="sent-en">★ To get to Xiaogang's home, first take the bus, then the subway.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It’s]「[先|xiān|first] [坐|zuò|take] [地铁，|dìtiě,|the subway,] [然后|ránhòu|then] [坐|zuò|take] [公共汽车|gōnggòng qìchē|the bus]」，[顺序|shùnxù|the order] [说|shuō|was said] [反|fǎn|backwards] [了。|le|(change)]" data-expl-en="'First subway, then bus' — the order is reversed."></div>
        </div>

        <h4 id="L21-l3">[第三部分|dì sān bùfen|Part 3]　[第 21–30 题：|dì 21–30 tí:|Q 21–30:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L21-q21">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh stem">[男：|Nán:|M:] [小方，|Xiǎofāng,|Xiaofang,] [你|nǐ|you] [看见|kànjiàn|see] [大明|Dàmíng|Daming] [了|le|(change)] [吗？|ma?|(question)] [我|wǒ|I] [怎么|zěnme|why] [找|zhǎo|can't find] [不|bù|not] [到|dào|him] [他|tā|him] [了？|le?|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [刚才|gāngcái|just now] [他|tā|he] [接|jiē|answered] [了|le|(past)] [个|ge|a] [电话|diànhuà|phone call] [就|jiù|then] [跑下楼|pǎo xià lóu|ran downstairs] [去|qù|went] [了，|le,|,] [好像|hǎoxiàng|seems] [有|yǒu|has] [急事。|jí shì.|urgent business.]</div>
          <div class="sent-en">M: Xiaofang, have you seen Daming? I can't find him anywhere.<br>W: Just now he answered a phone call and ran downstairs — he seemed to be in a hurry.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [大明，|Dàmíng,|Daming,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about Daming?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[不在楼上|bú zài lóushàng|not upstairs]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[在接电话|zài jiē diànhuà|is on the phone]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[在运动|zài yùndòng|is exercising]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[跑|pǎo|ran] [下楼|xià lóu|downstairs] [去|qù|(went)] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L21-q22">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh stem">[男：|Nán:|M:] [雪|xuě|snow] [越下越大，|yuè xià yuè dà,|is falling heavier and heavier,] [已经|yǐjīng|already] [下|xià|fallen] [了|le|(past)] [一天|yì tiān|a whole day] [了，|le,|,] [哪儿|nǎr|nowhere] [都|dōu|all] [不|bù|cannot] [能|néng|can] [去，|qù,|go,] [多|duō|so] [没意思|méi yìsi|boring] [啊！|a!|(exclamation)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [跟|gēn|from] [你|nǐ|you] [不|bù|not] [一样，|yíyàng,|the same,] [我|wǒ|I] [希望|xīwàng|hope] [再|zài|even more] [多|duō|more] [下|xià|falls] [点儿，|diǎnr,|a bit,] [我|wǒ|I] [最|zuì|most] [喜欢|xǐhuan|like] [雪|xuě|snow] [了。|le.|(change)]</div>
          <div class="sent-en">M: The snow is falling heavier and heavier — it's been snowing a whole day and we can't go anywhere. How boring!<br>W: I'm not like you — I hope it snows even more. I like snow the most.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[特别喜欢雪|tèbié xǐhuan xuě|especially likes snow]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[不喜欢下大雪|bù xǐhuan xià dàxuě|doesn't like heavy snow]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不想出去|bù xiǎng chūqù|doesn't want to go out]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[哪儿|nǎr|nowhere] [都|dōu|(all)] [不能|bùnéng|can’t] [去|qù|go] [多没意思|duō méi yìsi|how boring] [啊|a|(exclamation)]」。</div>
        </div>
        <div class="q" id="L21-q23">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [要|yào|want] [一杯|yì bēi|a cup of] [黑咖啡，|hēi kāfēi,|black coffee,] [再|zài|then] [来|lái|have] [一块|yí kuài|a piece of] [香蕉|xiāngjiāo|banana] [蛋糕。|dàngāo.|cake.] [小刚，|Xiǎogāng,|Xiaogang,] [你|nǐ|you] [要|yào|want to] [来点儿|lái diǎnr|have some] [什么？|shénme?|what?]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [喝|hē|drink] [什么|shénme|whatever] [我|wǒ|I] [就|jiù|then] [喝|hē|drink] [什么，|shénme,|what,] [你|nǐ|you] [吃|chī|eat] [什么|shénme|whatever] [我|wǒ|I] [就|jiù|then] [吃|chī|eat] [什么。|shénme.|what.]</div>
          <div class="sent-en">W: I'd like a cup of black coffee and a piece of banana cake. Xiaogang, what would you like?<br>M: Whatever you drink, I'll drink; whatever you eat, I'll eat.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|what does the man] [打算|dǎsuàn|plan] [喝|hē|to drink] [什么？|shénme?|(what)?]</div>
          <div class="sent-en">Q: What does the man plan to drink?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[香蕉牛奶|xiāngjiāo niúnǎi|banana milk]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[牛奶咖啡|niúnǎi kāfēi|milk coffee]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[黑咖啡|hēi kāfēi|black coffee]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[你|nǐ|Whatever] [喝|hē|you drink,] [什么|shénme|(what)] [我|wǒ|I’ll] [就|jiù|(then)] [喝|hē|drink] [什么|shénme|(it)]」。</div>
        </div>
        <div class="q" id="L21-q24">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh stem">[女1：|Nǚ1:|W1:] [小丽，|Xiǎolì,|Xiaoli,] [几月|jǐ yuè|several months] [不见，|bú jiàn,|not seeing,] [你|nǐ|you] [比|bǐ|than] [以前|yǐqián|before] [瘦|shòu|thinner] [多|duō|much] [了！|le!|(change)] [脸色|liǎnsè|complexion] [看上去|kàn shàngqù|looks] [也|yě|also] [比|bǐ|than] [以前|yǐqián|before] [好|hǎo|better] [得|de|(complement)] [多。|duō.|much.]</div>
          <div class="zh stem">[女2：|Nǚ2:|W2:] [那|nà|that] [是|shì|is] [因为|yīnwèi|because] [我|wǒ|I] [最近|zuìjìn|recently] [一直|yìzhí|always] [锻炼，|duànliàn,|exercising,] [跑步|pǎobù|running] [或者|huòzhě|or] [游泳。|yóuyǒng.|swimming.]</div>
          <div class="sent-en">W1: Xiaoli, we haven't seen each other for months — you're much thinner than before! Your complexion looks much better too.<br>W2: That's because I've been exercising lately — running or swimming.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [最近|zuìjìn|how has Xiaoli] [小丽|Xiǎolì|(Xiaoli)] [怎么样？|zěnmeyàng?|been lately?]</div>
          <div class="sent-en">Q: How has Xiaoli been lately?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[脸色不好|liǎnsè bù hǎo|complexion is bad]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[很胖|hěn pàng|very fat]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[经常运动|jīngcháng yùndòng|often exercises]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[一直|yìzhí|has been] [锻炼，|duànliàn,|exercising,] [跑步|pǎobù|running] [或者|huòzhě|or] [游泳|yóuyǒng|swimming]」。</div>
        </div>
        <div class="q" id="L21-q25">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [今天|jīntiān|today] [笑|xiào|smiled] [了|le|(past)] [一天，|yì tiān,|all day,] [有|yǒu|is there] [什么|shénme|something] [事|shì|that] [让|ràng|makes] [你|nǐ|you] [这么|zhème|so] [高兴？|gāoxìng?|happy?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我们|wǒmen|our] [的|de|(possessive)] [儿子|érzi|son] [在|zài|in] [汉字比赛|Hànzì bǐsài|the Chinese character competition] [中|zhōng|middle] [拿|ná|got] [了|le|(past)] [第一，|dì yī,|first place,] [我|wǒ|I] [能|néng|can] [不|bù|not] [高兴|gāoxìng|be happy] [吗？|ma?|(question)]</div>
          <div class="sent-en">M: You've been smiling all day — what has made you so happy?<br>W: Our son won first place in the Chinese character competition — how could I not be happy?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[她儿子没得第一|tā érzi méi dé dì yī|her son didn't get first]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[她很高兴|tā hěn gāoxìng|she's very happy]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[她不太高兴|tā bú tài gāoxìng|she's not happy]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|How] [能|néng|could] [不|bù|not] [高兴|gāoxìng|be happy] [吗？|ma?|(rhetorical)]」= [非常|fēicháng|very] [高兴。|gāoxìng|happy.]</div>
        </div>
        <div class="q" id="L21-q26">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [上网|shàngwǎng|go online] [看看，|kàn kan,|take a look,] [经理|jīnglǐ|the manager] [给|gěi|to] [我们|wǒmen|us] [发|fā|sent] [电子邮件|diànzǐ yóujiàn|email] [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [刚才|gāngcái|just now] [我|wǒ|I] [就|jiù|already] [看见|kànjiàn|saw] [了，|le,|,] [放心|fàngxīn|relax] [吧，|ba,|,] [我|wǒ|I] [已经|yǐjīng|already] [给|gěi|to] [他|tā|him] [回|huí|replied] [邮件|yóujiàn|to the email] [了。|le.|(change)]</div>
          <div class="sent-en">M: Go online and check — has the manager sent us an email?<br>W: I saw it just now. Don't worry, I've already replied to him.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [让|ràng|asks] [女的|nǚde|the woman] [做|zuò|to do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the man ask the woman to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[发电子邮件|fā diànzǐ yóujiàn|send email]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[上网看邮件|shàngwǎng kàn yóujiàn|go online to check email]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[回电子邮件|huí diànzǐ yóujiàn|reply to email]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[你|nǐ|Go] [上网|shàngwǎng|online] [看看，|kàn kan,|and check] [经理|jīnglǐ|whether the manager] [给|gěi|sent] [我们|wǒmen|us] [发|fā|(sent)] [电子邮件|diànzǐ yóujiàn|an email] [了|le|(past)] [吗？|ma?|(question)]」</div>
        </div>
        <div class="q" id="L21-q27">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [刚才|gāngcái|just now] [经理|jīnglǐ|the manager] [又|yòu|again] [生气|shēngqì|got angry] [了，|le,|,] [问|wèn|asked] [我|wǒ|me] [为什么|wèishénme|why] [最近|zuìjìn|recently] [总|zǒng|always] [迟到。|chídào.|late.]</div>
          <div class="zh stem">[男：|Nán:|M:] [没关系，|méi guānxi,|It's OK,] [现在|xiànzài|now] [经理|jīnglǐ|the manager] [都|dōu|even] [不|bù|not] [愿意|yuànyì|bother to] [问|wèn|ask] [我|wǒ|me] [为什么|wèishénme|why] [迟到|chídào|late] [了。|le.|(change)]</div>
          <div class="sent-en">W: The manager got angry again just now — he asked me why I'm always late lately.<br>M: It's OK — now the manager won't even bother to ask me why I'm late.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [是|shì|(is)] [什么|shénme|what] [意思？|yìsi?|meaning?]</div>
          <div class="sent-en">Q: What does the man mean?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[他不想生气|tā bù xiǎng shēngqì|he doesn't want to get angry]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[他总是迟到|tā zǒngshì chídào|he's always late]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[经理知道他为什么迟到|jīnglǐ zhīdào tā wèishénme chídào|the manager knows why he's late]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[经理|jīnglǐ|The manager] [都|dōu|doesn’t even] [不愿意|bú yuànyì|want to] [问|wèn|ask] [我|wǒ|me] [为什么|wèishénme|why] [迟到|chídào|I’m late] [了|le|(change)]」[说明|shuōmíng|showing] [他|tā|he] [总|zǒng|always] [迟到。|chídào|is late.]</div>
        </div>
        <div class="q" id="L21-q28">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [昨晚|zuówǎn|last night] [九点|jiǔ diǎn|9 o'clock] [左右|zuǒyòu|around] [我|wǒ|I] [给|gěi|to] [你|nǐ|you] [打电话，|dǎ diànhuà,|called,] [你|nǐ|you] [不|bù|not] [在|zài|at] [家。|jiā.|home.]</div>
          <div class="zh stem">[男：|Nán:|M:] [那个|nàge|that] [时候|shíhou|time] [我|wǒ|I] [一般|yìbān|generally] [在|zài|am] [洗澡，|xǐzǎo,|showering,] [听不见|tīng bu jiàn|can't hear] [电话。|diànhuà.|the phone.]</div>
          <div class="sent-en">W: I called you around nine o'clock last night, but you weren't home.<br>M: At that time I'm usually taking a shower, so I can't hear the phone.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|why didn’t the man] [昨晚|zuówǎn|last night] [为什么|wèishénme|(why)] [没|méi|not] [接|jiē|answer] [电话？|diànhuà?|the phone?]</div>
          <div class="sent-en">Q: Why didn't the man answer the phone last night?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[太晚了|tài wǎn le|too late]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不在家|bú zài jiā|not home]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[在洗澡|zài xǐzǎo|was showering]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[那个|nàge|At that] [时候|shíhou|time] [我|wǒ|I] [一般|yìbān|usually] [在|zài|am] [洗澡|xǐzǎo|taking a shower,] [听不见|tīng bu jiàn|so I can’t hear] [电话|diànhuà|the phone]」。</div>
        </div>
        <div class="q" id="L21-q29">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [怎么|zěnme|why] [才|cái|only now] [给|gěi|to] [司机|sījī|the driver] [打电话，|dǎ diànhuà,|call,] [飞机|fēijī|the plane] [就|jiù|is about to] [要|yào|take off] [起飞|qǐfēi|take off] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [对不起，|duìbuqǐ,|Sorry,] [刚才|gāngcái|just now] [开会，|kāihuì,|in a meeting,] [忘记|wàngjì|forgot] [了，|le,|,] [现在|xiànzài|now] [才|cái|only then] [想起来。|xiǎng qǐlái.|remembered.]</div>
          <div class="sent-en">M: Why did you only just call the driver? The plane is about to take off.<br>W: Sorry, I was in a meeting just now and forgot — I only remembered now.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|what did the woman] [忘|wàng|forget] [了|le|(past)] [什么？|shénme?|(what)?]</div>
          <div class="sent-en">Q: What did the woman forget?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[找护照|zhǎo hùzhào|find passport]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[坐飞机|zuò fēijī|take the plane]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[打电话|dǎ diànhuà|make a call]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[刚才|gāngcái|I was] [开会，|kāihuì,|in a meeting just now,] [忘记|wàngjì|so I forgot] [了|le|(past)]」→ [忘|wàng|forgot] [了|le|(past)] [给|gěi|to call] [司机|sījī|the driver] [打电话。|dǎ diànhuà|(call).]</div>
        </div>
        <div class="q" id="L21-q30">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh stem">[男：|Nán:|M:] [别|bié|don't] [哭|kū|cry] [了，|le,|,] [这次|zhè cì|this time] [考试|kǎoshì|exam] [成绩|chéngjì|results] [不|bù|not] [好，|hǎo,|good,] [以后|yǐhòu|later] [再|zài|again] [努力|nǔlì|work hard] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [担心|dānxīn|worry] [以后|yǐhòu|later] [不|bù|cannot] [能|néng|can] [在|zài|at] [这儿|zhèr|here] [学习|xuéxí|study] [了。|le.|(change)]</div>
          <div class="sent-en">M: Don't cry. You didn't do well on this exam, but just work harder next time.<br>W: I'm worried I won't be able to study here anymore.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|why is the woman] [为什么|wèishénme|(why)] [哭？|kū|crying?]</div>
          <div class="sent-en">Q: Why is the woman crying?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[考试没考好|kǎoshì méi kǎo hǎo|didn't do well on the exam]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[学习不努力|xuéxí bù nǔlì|didn't work hard]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不想学习了|bù xiǎng xuéxí le|doesn't want to study]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[这次|zhè cì|this time’s] [考试|kǎoshì|exam] [成绩|chéngjì|score] [不好|bù hǎo|isn’t good]」。</div>
        </div>

        <h4 id="L21-l4">[第四部分|dì sì bùfen|Part 4]　[第 31–40 题：|dì 31–40 tí:|Q 31–40:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L21-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[男：|Nán:|M:] [喂，|wèi,|Hello,] [请问|qǐngwèn|may I ask] [您|nín|you] [是|shì|are] [方丽丽|Fāng Lìlì|Fang Lili] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [是，|shì,|am,] [您|nín|you] [是|shì|are] [哪位？|nǎ wèi?|who?]</div>
          <div class="zh stem">[男：|Nán:|M:] [您|nín|your] [要|yào|wanted] [的|de|(possessive)] [生日|shēngrì|birthday] [蛋糕|dàngāo|cake] [已经|yǐjīng|already] [送到|sòng dào|delivered to] [您|nín|your] [公司|gōngsī|company] [楼下|lóuxià|downstairs] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好的，|hǎo de,|OK,] [我|wǒ|I] [马上|mǎshàng|right away] [就|jiù|then] [下楼|xià lóu|downstairs] [去|qù|go] [拿。|ná.|get it.]</div>
          <div class="sent-en">M: Hello, are you Fang Lili?<br>W: Yes, who is this?<br>M: The birthday cake you ordered has already been delivered downstairs to your company.<br>W: OK, I'll go downstairs to get it right away.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|what does the woman] [现在|xiànzài|now] [要|yào|want] [做|zuò|to do] [什么？|shénme?|(what)?]</div>
          <div class="sent-en">Q: What does the woman want to do now?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[上楼|shàng lóu|go upstairs]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[下楼|xià lóu|go downstairs]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[去蛋糕店|qù dàngāo diàn|go to the cake shop]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|I’ll] [马上|mǎshàng|right away] [就|jiù|(then)] [下楼|xià lóu|go downstairs] [去|qù|to] [拿|ná|get it]」。</div>
        </div>
        <div class="q" id="L21-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [小刚，|Xiǎogāng,|Xiaogang,] [小刚！|Xiǎogāng!|Xiaogang!] [你|nǐ|you] [怎么|zěnme|how] [坐着|zuò zhe|sitting] [睡着|shuì zháo|fell asleep] [了？|le?|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [有点儿|yǒudiǎnr|a bit] [累，|lěi,|tired,] [打算|dǎsuàn|planned to] [休息|xiūxi|rest] [一会儿，|yíhuìr,|a while,] [没想到|méi xiǎngdào|didn't expect] [睡着|shuì zháo|to fall asleep] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [也|yě|also] [跟|gēn|like] [你|nǐ|you] [一样，|yíyàng,|the same,] [这|zhè|these] [几天|jǐ tiān|days] [总是|zǒngshì|always] [觉得|juéde|feel] [很累。|hěn lèi.|very tired.]</div>
          <div class="zh stem">[男：|Nán:|M:] [这个月|zhège yuè|this month] [的|de|(possessive)] [工作|gōngzuò|work] [比|bǐ|than] [以前|yǐqián|before] [忙|máng|busy] [多|duō|much] [了，|le,|,] [每天|měitiān|every day] [工作|gōngzuò|work] [八九个|bā jiǔ ge|eight or nine] [小时，|xiǎoshí,|hours,] [能|néng|can] [不|bù|not] [累|lěi|tired] [吗？|ma?|(question)]</div>
          <div class="sent-en">W: Xiaogang, Xiaogang! How did you fall asleep sitting here?<br>M: I was a bit tired and planned to rest for a while — I didn't expect to fall asleep.<br>W: I'm the same as you — I've been feeling very tired these past few days.<br>M: This month's work is much busier than before — working eight or nine hours a day, how could I not be tired?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[一点儿也不累|yìdiǎnr yě bú lèi|not tired at all]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[站着睡着了|zhàn zhe shuì zháo le|fell asleep standing]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[觉得很累|juéde hěn lèi|feels very tired]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[这几天|zhè jǐ tiān|These past few days] [总是|zǒngshì|always] [觉得|juéde|feel] [很|hěn|very] [累|lèi|tired]」。</div>
        </div>
        <div class="q" id="L21-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[男1：|Nán1:|M1:] [东西|dōngxi|things] [都|dōu|all] [在|zài|are] [楼下|lóuxià|downstairs] [了，|le,|,] [我们|wǒmen|we] [怎么|zěnme|how] [搬？|bān?|move?]</div>
          <div class="zh stem">[男2：|Nán2:|M2:] [先|xiān|first] [搬|bān|move] [大|dà|the big ones] [的，|de,|,] [再|zài|then] [搬|bān|move] [小|xiǎo|the small ones] [的，|de,|,] [最后|zuìhòu|last] [把|bǎ|(BA)] [衣服、|yīfu,|clothes,] [鞋|xié|shoes] [和|hé|and] [书|shū|books] [拿上来。|ná shànglái.|bring up.]</div>
          <div class="zh stem">[男1：|Nán1:|M1:] [那|nà|then] [我们|wǒmen|we] [先|xiān|first] [把|bǎ|(BA)] [床|chuáng|the bed] [和|hé|and] [桌子|zhuōzi|the table] [搬上来，|bān shànglái,|move up,] [然后|ránhòu|then] [再|zài|then] [搬|bān|move] [冰箱|bīngxiāng|the fridge] [和|hé|and] [椅子。|yǐzi.|the chairs.]</div>
          <div class="zh stem">[男2：|Nán2:|M2:] [床|chuáng|The bed] [你|nǐ|you] [一个人|yí ge rén|alone] [搬|bān|can't move] [不|bù|not] [起来，|qǐlái,|up,] [我|wǒ|I] [跟|gēn|with] [你|nǐ|you] [一起|yìqǐ|together] [吧。|ba.|(suggestion)] [小心|xiǎoxīn|careful] [点儿。|diǎnr.|a bit.]</div>
          <div class="sent-en">M1: The things are all downstairs — how should we move them?<br>M2: Move the big ones first, then the small ones, and finally bring up the clothes, shoes and books.<br>M1: Then let's first move up the bed and the table, then move the fridge and the chairs.<br>M2: You can't move the bed alone — let me do it with you. Be careful.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|what do they] [打算|dǎsuàn|plan] [先|xiān|first] [搬|bān|to move] [什么？|shénme?|(what)?]</div>
          <div class="sent-en">Q: What do they plan to move first?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[床|chuáng|the bed]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[冰箱|bīngxiāng|the fridge]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[书|shū|books]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[我们|wǒmen|Let’s] [先|xiān|first] [把|bǎ|(BA)] [床|chuáng|the bed] [和|hé|and] [桌子|zhuōzi|table] [搬|bān|move] [上来|shànglái|up]」。</div>
        </div>
        <div class="q" id="L21-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [这么多|zhème duō|so many] [新|xīn|new] [电影，|diànyǐng,|movies,] [我们|wǒmen|we] [看|kàn|watch] [什么？|shénme?|what?]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [想|xiǎng|want to] [看|kàn|watch] [什么|shénme|what] [我们|wǒmen|we] [就|jiù|then] [看|kàn|watch] [什么。|shénme.|that.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [买|mǎi|buy] [几点|jǐ diǎn|what time] [的|de|(possessive)] [票|piào|tickets] [呢？|ne?|(question)] [七点|qī diǎn|7 o'clock] [的|de|(possessive)] [还是|háishi|or] [八点半|bā diǎn bàn|8:30] [的？|de?|(nominalizer)]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [说|shuō|say] [看|kàn|watch] [几点|jǐ diǎn|what time] [的|de|(possessive)] [我们|wǒmen|we] [就|jiù|then] [看|kàn|watch] [几点|jǐ diǎn|what time] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">W: So many new movies — which one shall we watch?<br>M: We'll watch whatever you want to watch.<br>W: What time should we buy tickets for — the seven o'clock or the eight-thirty one?<br>M: Whichever time you say, we'll watch that one.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|which showing of the movie] [想|xiǎng|does the man] [看|kàn|want to] [几点|jǐ diǎn|(what time)] [的|de|(possessive)] [电影？|diànyǐng?|see?]</div>
          <div class="sent-en">Q: Which showing of the movie does the man want to see?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[七点的|qī diǎn de|the 7 o'clock one]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[八点半的|bā diǎn bàn de|the 8:30 one]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[几点的都可以|jǐ diǎn de dōu kěyǐ|either is fine]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[你|nǐ|Whichever] [说|shuō|(you say)] [看|kàn|time you] [几点|jǐ diǎn|(what time)] [的|de|(possessive)] [我们|wǒmen|we’ll] [就|jiù|(then)] [看|kàn|watch] [几点|jǐ diǎn|that time] [的|de|(one)]」。</div>
        </div>
        <div class="q" id="L21-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[女1：|Nǚ1:|W1:] [那个|nàge|that] [又|yòu|both] [高|gāo|tall] [又|yòu|and] [瘦|shòu|thin] [的|de|(possessive)] [女孩儿|nǚháir|girl] [是|shì|is] [谁？|shéi?|who?]</div>
          <div class="zh stem">[女2：|Nǚ2:|W2:] [哪个？|nǎ ge?|Which one?] [是|shì|is it] [穿着|chuān zhe|wearing] [绿裙子|lǜ qúnzi|the green skirt] [的|de|(nominalizer)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女1：|Nǚ1:|W1:] [不是，|bú shì,|No,] [是|shì|it's] [那个|nàge|that one] [穿着|chuān zhe|wearing] [白裤子|bái kùzi|white trousers,] [站着|zhàn zhe|standing,] [唱歌|chànggē|singing] [的。|de.|(nominalizer)]</div>
          <div class="zh stem">[女2：|Nǚ2:|W2:] [那|nà|that] [是|shì|is] [小方，|Xiǎofāng,|Xiaofang,] [我们公司|wǒmen gōngsī|our company] [新来的|xīn lái de|newly arrived] [同事。|tóngshì.|colleague.]</div>
          <div class="sent-en">W1: Who is that tall, thin girl?<br>W2: Which one? The one in the green skirt?<br>W1: No, the one in white trousers, standing and singing.<br>W2: That's Xiaofang — a newly arrived colleague at our company.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [小方，|Xiǎofāng,|Xiaofang,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about Xiaofang?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[又胖又高|yòu pàng yòu gāo|both fat and tall]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[穿着白裤子|chuān zhe bái kùzi|wearing white trousers]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[穿着绿裙子|chuān zhe lǜ qúnzi|wearing a green skirt]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[穿着|chuān zhe|wearing] [白裤子，|bái kùzi,|white trousers,] [站|zhàn|standing] [着|zhe|(progressive)] [唱歌|chànggē|singing] [的|de|(nominalizer)]」。</div>
        </div>
        <div class="q" id="L21-q36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [看看，|kàn kan,|Look,] [又|yòu|again] [八点|bā diǎn|8 o'clock] [多|duō|past] [了，|le,|,] [你|nǐ|you] [怎么|zěnme|why] [每天|měitiān|every day] [都|dōu|all] [迟到。|chídào.|late.]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [也|yě|also] [不|bù|don't] [想|xiǎng|want to] [迟到，|chídào,|be late,] [但是|dànshì|but] [没|méi|no] [办法|bànfǎ|way] [啊。|a.|(exclamation)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [每天|měitiān|every day] [七点半|qī diǎn bàn|7:30] [才|cái|only then] [起床，|qǐchuáng,|get up,] [还|hái|also] [要|yào|need to] [洗澡、|xǐzǎo,|shower,] [吃饭，|chīfàn,|eat,] [能|néng|can] [不|bù|not] [迟到|chídào|be late] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [那|nà|then] [我|wǒ|I] [以后|yǐhòu|from now on] [到|dào|arrive at] [公司|gōngsī|the company] [再|zài|then] [吃饭。|chīfàn.|eat.]</div>
          <div class="sent-en">W: Look, it's past eight again — how are you late every single day?<br>M: I don't want to be late either, but there's no way.<br>W: You don't get up until seven-thirty every day, and you still have to shower and eat — how could you not be late?<br>M: Then from now on I'll eat at the company.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|what does the woman think] [认为|rènwéi|(think)] [男的|nánde|the man] [应该|yīnggāi|should] [怎么办？|zěnme bàn?|do?]</div>
          <div class="sent-en">Q: What does the woman think the man should do?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[早点儿起床|zǎo diǎnr qǐchuáng|get up earlier]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[到公司吃饭|dào gōngsī chīfàn|eat at the company]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[每天都迟到|měitiān dōu chídào|be late every day]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[女的|nǚde|The woman] [认为|rènwéi|thinks] [他|tā|he] [起|qǐ|got up] [得|de|(complement)] [太晚。|tài wǎn|too late.]</div>
        </div>
        <div class="q" id="L21-q37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [昨天|zuótiān|yesterday] [去|qù|went to] [医院|yīyuàn|the hospital] [检查|jiǎnchá|for a checkup] [了|le|(past)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [就|jiù|just] [去|qù|went to] [买|mǎi|buy] [了|le|(past)] [点儿|diǎnr|some] [感冒药，|gǎnmào yào,|cold medicine,] [现在|xiànzài|now] [已经|yǐjīng|already] [觉得|juéde|feel] [好|hǎo|better] [多|duō|much] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [要|yào|need to] [多|duō|more] [注意|zhùyì|pay attention to] [身体，|shēntǐ,|health,] [如果|rúguǒ|if] [不|bù|not] [舒服，|shūfu,|well,] [就|jiù|then] [要|yào|need to] [马上|mǎshàng|immediately] [去|qù|go to] [医院。|yīyuàn.|the hospital.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [放心|fàngxīn|relax] [吧，|ba,|,] [我|wǒ|I] [会|huì|will] [多|duō|more] [注意|zhùyì|pay attention] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">M: Did you go to the hospital for a checkup yesterday?<br>W: I just went to buy some cold medicine — I already feel much better now.<br>M: You should pay more attention to your health — if you don't feel well, go to the hospital right away.<br>W: Don't worry, I'll be more careful.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[很担心男的|hěn dānxīn nánde|is worried about the man]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[去医院检查了|qù yīyuàn jiǎnchá le|went for a hospital checkup]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[吃了感冒药|chī le gǎnmào yào|took cold medicine]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[就|jiù|just] [买|mǎi|bought] [了|le|(past)] [点儿|diǎnr|some] [感冒药，|gǎnmào yào,|cold medicine,] [现在|xiànzài|now] [已经|yǐjīng|already] [觉得|juéde|feel] [好|hǎo|much] [多|duō|better] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L21-q38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [儿子，|érzi,|Son,] [以后|yǐhòu|from now on] [出门，|chūmén,|going out,] [你|nǐ|you] [要|yào|need to] [叫|jiào|call] [我|wǒ|me] [姐姐。|jiějie.|older sister.]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [为什么|wèishénme|why] [让|ràng|ask] [我|wǒ|me] [叫|jiào|call] [你|nǐ|you] [姐姐？|jiějie?|older sister?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [这样|zhèyàng|this way] [别人|biérén|others] [会|huì|will] [觉得|juéde|feel] [我|wǒ|I] [看上去|kàn shàngqù|look] [很|hěn|very] [年轻。|niánqīng.|young.]</div>
          <div class="zh stem">[男：|Nán:|M:] [那|nà|then] [我|wǒ|I] [叫|jiào|call] [你|nǐ|you] [奶奶|nǎinai|grandma] [吧，|ba,|,] [你|nǐ|you] [看上去|kàn shàngqù|look] [更|gèng|even more] [年轻。|niánqīng.|young.]</div>
          <div class="sent-en">W: Son, from now on when we go out, you should call me "older sister."<br>M: Why do you want me to call you "older sister"?<br>W: This way others will think I look very young.<br>M: Then I'll call you "grandma" — you'd look even younger.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|who is the woman] [是|shì|(is)] [男的|nánde|the man’s] [的|de|(possessive)] [什么|shénme|what] [人？|rén?|person?]</div>
          <div class="sent-en">Q: Who is the woman to the man?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[妈妈|māma|mom]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[姐姐|jiějie|older sister]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[奶奶|nǎinai|grandma]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[儿子|érzi|Her son]」→ [妈妈。|māma|a mother.]</div>
        </div>
        <div class="q" id="L21-q39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [昨天|zuótiān|yesterday] [下午|xiàwǔ|afternoon] [怎么|zěnme|why] [没|méi|not] [参加|cānjiā|attend] [篮球比赛|lánqiú bǐsài|the basketball match] [啊？|a?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [对不起，|duìbuqǐ,|Sorry,] [同屋|tóngwū|my roommate] [的|de|(possessive)] [照相机|zhàoxiàngjī|camera] [找|zhǎo|can't find] [不|bù|not] [到|dào|it] [了，|le,|,] [我|wǒ|I] [跟|gēn|with] [他|tā|him] [找|zhǎo|looked] [了|le|(past)] [一个|yí ge|a whole] [下午。|xiàwǔ.|afternoon.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你们|nǐmen|you] [找到|zhǎo dào|find] [了|le|(past)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [没|méi|No] [找到，|zhǎo dào,|found it,] [不知道|bù zhīdào|don't know] [被|bèi|by] [谁|shéi|who] [拿走|ná zǒu|taken] [了。|le.|(change)]</div>
          <div class="sent-en">W: Why didn't you join the basketball match yesterday afternoon?<br>M: Sorry — my roommate's camera was missing, so I looked for it with him all afternoon.<br>W: Did you find it?<br>M: No, we didn't. We don't know who took it.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [昨天下午|zuótiān xiàwǔ|what did the man do] [男的|nánde|(the man)] [做|zuò|(do)] [什么|shénme|(what)] [了？|le?|yesterday afternoon?]</div>
          <div class="sent-en">Q: What did the man do yesterday afternoon?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[打篮球|dǎ lánqiú|played basketball]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[找照相机|zhǎo zhàoxiàngjī|looked for the camera]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[找同屋|zhǎo tóngwū|looked for the roommate]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[跟|gēn|with] [同屋|tóngwū|my roommate] [找|zhǎo|searched] [了|le|(past)] [一个|yí ge|all] [下午|xiàwǔ|afternoon]」。</div>
        </div>
        <div class="q" id="L21-q40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh stem">[男：|Nán:|M:] [明天|míngtiān|tomorrow] [过节，|guòjié,|is a holiday,] [你|nǐ|you] [和|hé|and] [你|nǐ|your] [男朋友|nánpéngyou|boyfriend] [来|lái|come to] [我家|wǒ jiā|my home] [吃饭吧，|chīfàn ba,|for a meal,] [我|wǒ|my] [太太|tàitai|wife] [做饭。|zuòfàn.|cooks.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好啊，|hǎo a,|Sure,] [听说|tīngshuō|heard] [你|nǐ|your] [太太|tàitai|wife] [做|zuò|made] [的|de|(possessive)] [菜|cài|dishes] [特别|tèbié|especially] [好吃。|hǎochī.|tasty.]</div>
          <div class="zh stem">[男：|Nán:|M:] [是|shì|yes] [的，|de,|,] [结婚|jiéhūn|marriage] [以前|yǐqián|before] [她|tā|she] [没|méi|didn't] [做|zuò|make] [过|guò|(past)] [菜，|cài,|dishes,] [结婚|jiéhūn|marriage] [以后|yǐhòu|after] [才|cái|only then] [对|duì|to] [做菜|zuòcài|cooking] [有|yǒu|have] [兴趣。|xìngqù.|interest.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|then] [我|wǒ|my] [男朋友|nánpéngyou|boyfriend] [想|xiǎng|wants] [吃|chī|to eat] [到|dào|to] [我|wǒ|me] [做|zuò|make] [的|de|(possessive)] [菜|cài|dishes] [还|hái|still] [要|yào|needs to] [再|zài|again] [等等。|děng děng.|wait.]</div>
          <div class="sent-en">M: Tomorrow is a holiday — come to my home with your boyfriend for a meal. My wife will cook.<br>W: Sure! I heard your wife's cooking is especially delicious.<br>M: Yes — before we got married she never cooked; it was only after marriage that she became interested in cooking.<br>W: Then my boyfriend will have to wait a while longer to taste my cooking.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[做菜特别好吃|zuòcài tèbié hǎochī|makes especially tasty dishes]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[现在不会做菜|xiànzài bú huì zuòcài|doesn't know how to cook now]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[对做菜感兴趣|duì zuòcài gǎn xìngqù|is interested in cooking]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|my] [男朋友|nánpéngyou|boyfriend] [想吃|xiǎng chī|wants to eat] [到|dào|(to)] [我|wǒ|the food] [做|zuò|(make)] [的|de|(possessive)] [菜|cài|dish]」「[还要|hái yào|will] [再|zài|have to] [等等|děng děng|wait]」[说明|shuōmíng|showing] [她|tā|she] [现在|xiànzài|now] [还|hái|still] [不会|bú huì|can’t] [做。|zuò|cook.]</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L21-r1">[第一部分|dì yī bùfen|Part 1]　[第 41–50 题：|dì 41–50 tí:|Q 41–50:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L21-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[周末|zhōumò|On the weekend] [我们|wǒmen|we] [去|qù|go] [哪儿？|nǎr?|where?] [去|qù|go to] [公园|gōngyuán|the park] [还是|háishi|or] [去|qù|go to] [听|tīng|listen to] [音乐会？|yīnyuèhuì?|a concert?]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[这家店|zhè jiā diàn|This shop's] [的|de|(possessive)] [冷饮|lěngyǐn|cold drinks] [和|hé|and] [热饮|rèyǐn|hot drinks] [都|dōu|both] [很|hěn|very] [不错，|búcuò,|good,] [你|nǐ|you] [想|xiǎng|want to] [喝点儿|hē diǎnr|drink some] [什么？|shénme?|what?]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[常老师，|Cháng lǎoshī,|Teacher Chang,] [欢迎|huānyíng|welcome] [您|nín|you] [来|lái|to come to] [我们学校|wǒmen xuéxiào|our school] [工作。|gōngzuò.|work.]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[别|bié|don't] [着急，|zháojí,|worry,] [我|wǒ|I] [帮|bāng|help] [你|nǐ|you] [一起|yìqǐ|together] [找。|zhǎo.|look.] [你|nǐ|you] [是不是|shì bú shì|is it that] [放|fàng|put] [在|zài|in] [包|bāo|the bag] [里|li|inside] [了？|le?|(change)]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|the bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|to the subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[其实|qíshí|Actually] [我|wǒ|I] [一直|yìzhí|always] [都|dōu|all] [对|duì|to] [爬山|pá shān|mountain climbing] [感兴趣，|gǎn xìngqù,|have been interested,] [只是|zhǐshì|only] [工作|gōngzuò|work] [太忙，|tài máng,|too busy,] [没|méi|no] [时间|shíjiān|time] [去。|qù.|to go.]</span></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L21-opt-r1">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[你|nǐ|you] [最近|zuìjìn|recently] [很|hěn|really] [喜欢|xǐhuan|like] [爬山|pá shān|mountain climbing] [啊？|a?|(question)] （<span class="blank">　</span>）</div>
          <div class="sent-en">You really like mountain climbing lately?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L21-opt-r1">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[我|wǒ|I] [记得|jìde|remember] [把|bǎ|(BA)] [地图|dìtú|the map] [放|fàng|put] [在|zài|in] [行李箱|xínglixiāng|the suitcase] [里|li|inside] [了，|le,|,] [怎么|zěnme|why] [找|zhǎo|can't find] [不|bù|not] [到|dào|it] [了？|le?|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">I remember putting the map in the suitcase — why can't I find it?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L21-opt-r1">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[我|wǒ|I] [来|lái|want] [一杯|yì bēi|a cup of] [热茶|rè chá|hot tea] [吧，|ba,|,] [冬天|dōngtiān|winter] [喝|hē|drinking] [点儿|diǎnr|some] [热|rè|hot] [的|de|(nominalizer)] [舒服。|shūfu.|is comfortable.] （<span class="blank">　</span>）</div>
          <div class="sent-en">I'd like a cup of hot tea — in winter drinking something hot feels good.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L21-opt-r1">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[周校长，|Zhōu xiàozhǎng,|Principal Zhou,] [谢谢|xièxie|thank] [您|nín|you] [给|gěi|to] [我|wǒ|me] [这个|zhège|this] [机会，|jīhuì,|opportunity,] [我|wǒ|I] [一定|yídìng|definitely] [努力|nǔlì|work hard] [教课。|jiāokè.|teaching.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Principal Zhou, thank you for this opportunity — I'll definitely work hard teaching.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L21-opt-r1">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[我|wǒ|I] [更|gèng|more] [愿意|yuànyì|willing] [在|zài|at] [家|jiā|home] [休息，|xiūxi,|rest,] [上上网，|shàng shang wǎng,|go online,] [玩儿玩儿|wánr wanr|play] [电脑游戏。|diànnǎo yóuxì.|computer games.] （<span class="blank">　</span>）</div>
          <div class="sent-en">I'd rather rest at home, go online, and play computer games.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <div class="opt-table" id="L21-opt-r1b">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[怎么|zěnme|Why] [那么|nàme|so] [多|duō|many] [人|rén|people] [愿意|yuànyì|are willing to] [搬|bān|move] [到|dào|to] [城市|chéngshì|the city] [里|li|inside] [来？|lái?|come?]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[那个|nàge|That] [笑|xiào|smiling] [得|de|(complement)] [甜甜|tiántián|sweetly] [的|de|(possessive)] [女孩儿|nǚháir|girl] [是|shì|is] [谁？|shéi?|who?]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[我|wǒ|my] [洗好|xǐ hǎo|washed] [的|de|(possessive)] [菜|cài|vegetables] [呢？|ne?|(question)] [刚才|gāngcái|just now] [还|hái|still] [放|fàng|were put] [在|zài|at] [这儿|zhèr|here] [呢。|ne.|(emphasis)]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[听说|tīngshuō|heard] [你|nǐ|you] [昨天|zuótiān|yesterday] [去|qù|went to] [看|kàn|see] [电影|diànyǐng|a movie] [了，|le,|,] [有意思|yǒu yìsi|interesting] [吗？|ma?|(question)]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[外边|wàibiān|Outside] [的|de|(possessive)] [天气|tiānqì|weather] [多|duō|how] [好|hǎo|nice] [啊，|a,|,] [我们|wǒmen|we] [出去|chūqù|go out] [玩儿|wánr|to play] [吧。|ba.|(suggestion)]</span></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L21-opt-r1b">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[我|wǒ|I] [把|bǎ|(BA)] [它|tā|it] [放回|fàng huí|put back] [冰箱|bīngxiāng|the fridge] [里|li|inside] [去|qù|went] [了，|le,|,] [你|nǐ|you] [现在|xiànzài|now] [要|yào|need to] [用|yòng|use] [吗？|ma?|(question)] （<span class="blank">　</span>）</div>
          <div class="sent-en">I put it back in the fridge — do you need it now?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L21-opt-r1b">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[这里|zhèlǐ|Here] [的|de|(possessive)] [工作|gōngzuò|job] [机会|jīhuì|opportunities] [多|duō|are many] [得|de|(complement)] [多。|duō.|many.] （<span class="blank">　</span>）</div>
          <div class="sent-en">There are many more job opportunities here.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L21-opt-r1b">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[我|wǒ|I] [觉得|juéde|feel] [还可以，|hái kěyǐ,|it's OK,] [是|shì|it's] [一个|yí ge|a] [关于|guānyú|about] [黄河|Huánghé|the Yellow River] [的|de|(possessive)] [故事。|gùshi.|story.] （<span class="blank">　</span>）</div>
          <div class="sent-en">I feel it's OK — a story about the Yellow River.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L21-opt-r1b">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[那|nà|that] [是|shì|is] [我|wǒ|my] [邻居|línjū|neighbor] [的|de|(possessive)] [女儿，|nǚ'ér,|daughter,] [来，|lái,|come,] [我|wǒ|I] [给|gěi|to] [你|nǐ|you] [介绍|jièshào|introduce] [一下|yíxià|a bit] [吧。|ba.|(suggestion)] （<span class="blank">　</span>）</div>
          <div class="sent-en">That's my neighbor's daughter — come, let me introduce you.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button></div>
        </div>
        <div class="q match-q" data-answer="E" data-table-id="L21-opt-r1b">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[一会儿|yíhuìr|In a moment] [再|zài|then] [去|qù|go] [吧，|ba,|,] [妈妈|māma|Mom] [说|shuō|says] [只有|zhǐyǒu|only by] [写完|xiě wán|finishing] [作业，|zuòyè,|homework,] [才|cái|only then] [能|néng|can] [出去|chūqù|go out] [玩儿。|wánr.|to play.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Let's go later — Mom says only after finishing homework can I go out to play.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button></div>
        </div>

        <h4 id="L21-r2">[第二部分|dì èr bùfen|Part 2]　[第 51–60 题：|dì 51–60 tí:|Q 51–60:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L21-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[几乎|jīhū|almost]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[中间|zhōngjiān|middle]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[满意|mǎnyì|satisfied]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[清楚|qīngchu|clear]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[回答|huídá|answer]</span></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L21-opt-r2">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[我们班|wǒmen bān|Our class's] [小明|Xiǎomíng|Xiaoming] [总是|zǒngshì|is always] [第一个|dì yī ge|the first] （<span class="blank">　</span>） [老师|lǎoshī|the teacher] [的|de|(possessive)] [问题。|wèntí.|question.]</div>
          <div class="sent-en">Our classmate Xiaoming is always the first to answer the teacher's questions.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L21-opt-r2">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[妹妹|mèimei|My sister] [画|huà|drew] [的|de|(possessive)] [熊猫|xióngmāo|panda] （<span class="blank">　</span>） [跟|gēn|like] [真|zhēn|the real one] [的|de|(nominalizer)] [一样。|yíyàng.|the same.]</div>
          <div class="sent-en">The panda my sister drew looks almost like the real one.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L21-opt-r2">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[看，|kàn,|Look,] [站|zhàn|standing] [在|zài|in] （<span class="blank">　</span>） [的|de|(possessive)] [是|shì|is] [这次|zhè cì|this time's] [比赛|bǐsài|competition] [的|de|(possessive)] [第一，|dì yī,|first place,] [大山。|Dàshān.|Dashan.]</div>
          <div class="sent-en">Look, standing in the middle is this competition's first place, Dashan.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L21-opt-r2">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[来|lái|Coming] [吃饭|chīfàn|to eat] [的|de|(possessive)] [客人|kèrén|guests] [对|duì|to] [这家|zhè jiā|this] [饭馆|fànguǎn|restaurant's] [的|de|(possessive)] [服务|fúwù|service] [都|dōu|all] [特别|tèbié|especially] （<span class="blank">　</span>）。</div>
          <div class="sent-en">Guests who come to eat are especially satisfied with this restaurant's service.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L21-opt-r2">
          <div class="qhead"><span class="num">55</span></div>
          <div class="zh">[虽然|suīrán|Although] [我们|wǒmen|we] [离|lí|from] [得|de|(complement)] [很|hěn|very] [远，|yuǎn,|far,] [但是|dànshì|but] [他|tā|his] [声音|shēngyīn|voice] [很大，|hěn dà,|is loud,] [所以|suǒyǐ|so] [听|tīng|hearing] [得|de|(complement)] （<span class="blank">　</span>）。</div>
          <div class="sent-en">Although we're far away, his voice is loud, so we can hear clearly.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <div class="opt-table" id="L21-opt-r2b">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[结束|jiéshù|end]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[新闻|xīnwén|news]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[刷牙|shuā yá|brush teeth]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[爱好|àihào|hobby]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[出来|chūlái|out]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[水平|shuǐpíng|level]</span></div>
        </div>
        <div class="q match-q" data-answer="E" data-table-id="L21-opt-r2b">
          <div class="qhead"><span class="num">56</span></div>
          <div class="zh">[A：|A:|A:] [照片|zhàopiàn|The photos] [洗|xǐ|developed] （<span class="blank">　</span>） [了|le|(change)] [吗？|ma?|(question)] [给|gěi|to] [我|wǒ|me] [看看。|kàn kan.|take a look.]</div>
          <div class="zh">[B：|B:|B:] [下午|xiàwǔ|Afternoon] [去|qù|go] [拿，|ná,|to get,] [回来|huílái|coming back] [给|gěi|to] [你|nǐ|you] [看。|kàn.|see.]</div>
          <div class="sent-en">A: Are the photos developed? Let me see.<br>B: I'll go get them in the afternoon and show you when I'm back.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L21-opt-r2b">
          <div class="qhead"><span class="num">57</span></div>
          <div class="zh">[A：|A:|A:] [你|nǐ|you] [每天|měitiān|every day] [早上|zǎoshang|morning] [都|dōu|all] [看|kàn|read] [报纸|bàozhǐ|the newspaper] [吗？|ma?|(question)]</div>
          <div class="zh">[B：|B:|B:] [是|shì|yes] [的，|de,|,] [我|wǒ|I] [习惯|xíguàn|am used to] [早上|zǎoshang|morning] [看看|kàn kan|reading] （<span class="blank">　</span>）。</div>
          <div class="sent-en">A: Do you read the newspaper every morning?<br>B: Yes — I'm used to reading news in the morning.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L21-opt-r2b">
          <div class="qhead"><span class="num">58</span></div>
          <div class="zh">[A：|A:|A:] [会议|huìyì|The meeting] （<span class="blank">　</span>） [以后，|yǐhòu,|after,] [别忘了|bié wàng le|don't forget] [把|bǎ|(BA)] [灯|dēng|the lights] [关|guān|turned off] [了。|le.|(change)]</div>
          <div class="zh">[B：|B:|B:] [放心|fàngxīn|relax] [吧，|ba,|,] [我|wǒ|I] [会|huì|will] [关|guān|turn off] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">A: After the meeting ends, don't forget to turn off the lights.<br>B: Relax — I'll turn them off.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L21-opt-r2b">
          <div class="qhead"><span class="num">59</span></div>
          <div class="zh">[A：|A:|A:] [最近|zuìjìn|Recently] [你|nǐ|your] [的|de|(possessive)] [汉语|Hànyǔ|Chinese] （<span class="blank">　</span>） [提高|tígāo|improved] [了|le|(past)] [不少。|bùshǎo.|quite a bit.]</div>
          <div class="zh">[B：|B:|B:] [是|shì|really] [吗，|ma,|(question)] [太好了，|tài hǎo le,|great,] [老师|lǎoshī|the teacher] [也|yě|also] [说|shuō|says] [我|wǒ|my] [的|de|(possessive)] [汉语|Hànyǔ|Chinese] [越来越|yuè lái yuè|better and better] [好|hǎo|is] [了。|le.|(change)]</div>
          <div class="sent-en">A: Your Chinese level has improved a lot recently.<br>B: Really? Great — the teacher also says my Chinese is getting better and better.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L21-opt-r2b">
          <div class="qhead"><span class="num">60</span></div>
          <div class="zh">[A：|A:|A:] [你|nǐ|you] [怎么|zěnme|why] [准备|zhǔnbèi|getting ready] [睡觉|shuìjiào|to sleep] [了？|le?|(change)] [你|nǐ|you] （<span class="blank">　</span>） [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="zh">[B：|B:|B:] [我|wǒ|I] [忘|wàng|forgot] [了，|le,|,] [我|wǒ|I] [现在|xiànzài|now] [就|jiù|right away] [去。|qù.|go.]</div>
          <div class="sent-en">A: Why are you getting ready to sleep? Have you brushed your teeth?<br>B: I forgot — I'll go right now.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L21-r3">[第三部分|dì sān bùfen|Part 3]　[第 61–70 题：|dì 61–70 tí:|Q 61–70:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L21-q61">
          <div class="qhead"><span class="num">61</span></div>
          <div class="zh stem">[很多|hěnduō|Many] [人|rén|people] [喜欢|xǐhuan|like] [边|biān|while] [开车|kāichē|driving] [边|biān|while] [做|zuò|doing] [别|bié|other] [的|de|(possessive)] [事：|shì:|things:] [开着车|kāi zhe chē|driving] [喝咖啡，|hē kāfēi,|drinking coffee,] [开着车|kāi zhe chē|driving] [打电话，|dǎ diànhuà,|calling,] [开着车|kāi zhe chē|driving] [听|tīng|listening to] [音乐。|yīnyuè.|music.] [这样|zhèyàng|Doing so] [做|zuò|doing] [对|duì|to] [自己、|zìjǐ,|oneself,] [对|duì|to] [别人|biérén|others] [都|dōu|all] [不|bù|not] [好，|hǎo,|good,] [特别是|tèbié shì|especially] [晚上|wǎnshang|at night] [或者|huòzhě|or] [下大雨|xià dàyǔ|in heavy rain] [的|de|(possessive)] [时候，|shíhou,|when,] [看不清|kàn bu qīng|can't see clearly] [路，|lù,|the road,] [更|gèng|more] [容易|róngyì|easily] [出事。|chūshì.|have accidents.]</div>
          <div class="sent-en">Many people like doing other things while driving: drinking coffee, making calls, listening to music. Doing so is bad for yourself and others — especially at night or in heavy rain, you can't see the road clearly and accidents happen more easily.</div>
          <div class="zh ask">★ [开车|kāichē|When driving] [的|de|(possessive)] [时候：|shíhou:|(time):]</div>
          <div class="sent-en">★ When driving: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[应该喝杯咖啡|yīnggāi hē bēi kāfēi|should drink a cup of coffee]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[经常下大雨|jīngcháng xià dàyǔ|often rains heavily]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[最好别听音乐|zuì hǎo bié tīng yīnyuè|best not to listen to music]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[边|biān|(while)] [开车|kāichē|driving] [边|biān|(and)] [做别|zuò bié|doing other] [的|de|(possessive)] [事|shì|things]……[对|duì|for] [自己、|zìjǐ,|yourself] [对|duì|and for] [别人|biérén|others] [都|dōu|all] [不好|bù hǎo|it’s bad]」。</div>
        </div>
        <div class="q" id="L21-q62">
          <div class="qhead"><span class="num">62</span></div>
          <div class="zh stem">[我|wǒ|I] [是|shì|was] [在|zài|in] [南方|nánfāng|the South] [出生|chūshēng|born] [的，|de,|,] [四岁|sì suì|four years old] [的|de|(possessive)] [时候|shíhou|when] [跟|gēn|with] [爸爸|bàba|Dad] [妈妈|māma|Mom] [来到|lái dào|came to] [北方，|běifāng,|the North,] [在|zài|in] [这儿|zhèr|here] [住|zhù|lived] [了|le|(past)] [二十个|èrshí ge|twenty] [春夏秋冬|chūn xià qiū dōng|springs, summers, autumns, winters] [了。|le.|(change)] [现在，|xiànzài,|Now,] [南方|nánfāng|the South] [我|wǒ|I] [已经|yǐjīng|already] [记|jì|remember] [不|bù|not] [清楚|qīngchu|clearly] [了，|le,|,] [我|wǒ|I] [对|duì|to] [北方|běifāng|the North] [更|gèng|more] [了解，|liǎojiě,|know well,] [早就|zǎo jiù|long ago] [习惯|xíguàn|got used to] [了|le|(past)] [吃|chī|eating] [北方菜，|běifāng cài,|Northern dishes,] [说话|shuōhuà|speaking] [也|yě|also] [跟|gēn|like] [北方人|běifāng rén|Northerners] [一样。|yíyàng.|the same.]</div>
          <div class="sent-en">I was born in the South. At four I came to the North with Mom and Dad and have lived here for twenty springs, summers, autumns, and winters. Now I can't remember the South clearly — I know the North better, long ago got used to Northern dishes, and speak like a Northerner too.</div>
          <div class="zh ask">★ [我：|wǒ:|I:]</div>
          <div class="sent-en">★ I: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[在北方住了二十年了|zài běifāng zhù le èrshí nián le|lived in the North for 20 years]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[在北方出生|zài běifāng chūshēng|born in the North]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[对北方还不习惯|duì běifāng hái bù xíguàn|not yet used to the North]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[住|zhù|lived for] [了|le|(past)] [二十个|èrshí ge|twenty] [春夏秋冬|chūn xià qiū dōng|springs, summers, autumns and winters]」。</div>
        </div>
        <div class="q" id="L21-q63">
          <div class="qhead"><span class="num">63</span></div>
          <div class="zh stem">[我家|wǒ jiā|My family] [住在|zhù zài|lives on] [十层，|shí céng,|the 10th floor,] [楼里|lóu li|in the building] [有|yǒu|there are] [两个|liǎng ge|two] [电梯。|diàntī.|elevators.] [每天|měitiān|Every day] [回家|huí jiā|coming home] [时|shí|when,] [我|wǒ|I] [都|dōu|all] [坐到|zuò dào|ride to] [五层，|wǔ céng,|the 5th floor,] [然后|ránhòu|then] [走|zǒu|walk] [上去。|shàngqù.|up.] [如果|rúguǒ|if] [你|nǐ|you] [也|yě|also] [跟|gēn|like] [我|wǒ|me] [一样，|yíyàng,|the same,] [住|zhù|live] [得|de|(complement)] [高，|gāo,|high,] [工作|gōngzuò|work] [忙，|máng,|busy,] [又|yòu|also] [没|méi|no] [时间|shíjiān|time] [出去|chūqù|to go out] [运动，|yùndòng,|to exercise,] [就|jiù|then] [跟|gēn|with] [我|wǒ|me] [一起|yìqǐ|together] [爬楼|pá lóu|climb stairs] [吧，|ba,|,] [这|zhè|this] [也|yě|also] [是|shì|is] [一种|yì zhǒng|a kind of] [不错|búcuò|not bad] [的|de|(possessive)] [锻炼。|duànliàn.|exercise.]</div>
          <div class="sent-en">My family lives on the 10th floor; the building has two elevators. Every day when I come home, I ride to the 5th floor, then walk up. If you're like me — living high up, busy at work, no time to exercise — then climb stairs with me. This is also a good kind of exercise.</div>
          <div class="zh ask">★ [我|wǒ|I] [认为：|rènwéi:|think:]</div>
          <div class="sent-en">★ I think: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[楼里应该有两个电梯|lóu li yīnggāi yǒu liǎng ge diàntī|the building should have two elevators]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[爬楼是很好的运动|pá lóu shì hěn hǎo de yùndòng|climbing stairs is good exercise]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[健康不太重要|jiànkāng bú tài zhòngyào|health isn't very important]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[也|yě|is also] [是|shì|(is)] [一种|yì zhǒng|a] [不错|búcuò|good] [的|de|(possessive)] [锻炼|duànliàn|exercise]」。</div>
        </div>
        <div class="q" id="L21-q64">
          <div class="qhead"><span class="num">64</span></div>
          <div class="zh stem">[为了|wèile|For] [方便，|fāngbiàn,|convenience,] [很多|hěnduō|many] [人|rén|people] [都|dōu|all] [喜欢|xǐhuan|like] [去|qù|to go to] [商店|shāngdiàn|the shop] [买|mǎi|to buy] [蛋糕|dàngāo|cake] [吃。|chī.|to eat.] [其实，|qíshí,|Actually,] [自己|zìjǐ|yourself] [在家|zài jiā|at home] [做|zuò|making it] [也|yě|also] [很|hěn|very] [简单，|jiǎndān,|simple,] [用|yòng|using] [鸡蛋、|jīdàn,|eggs,] [牛奶|niúnǎi|milk] [就|jiù|then] [可以|kěyǐ|can] [做。|zuò.|make.] [如果|rúguǒ|if] [想|xiǎng|want to] [吃|chī|eat] [水果|shuǐguǒ|fruit] [蛋糕，|dàngāo,|cake,] [还|hái|also] [可以|kěyǐ|can] [买|mǎi|buy] [一些|yìxiē|some] [水果|shuǐguǒ|fruit] [放进去。|fàng jìnqù.|put in.] [自己|zìjǐ|Homemade] [做|zuò|made] [的|de|(possessive)] [比|bǐ|than] [店里|diàn li|the shop's] [的|de|(possessive)] [健康|jiànkāng|healthier] [得多，|de duō,|much,] [也|yě|also] [更好吃，|gèng hǎochī,|tastier,] [更新鲜。|gèng xīnxiān.|fresher.]</div>
          <div class="sent-en">For convenience, many people like buying cake from the shop. Actually, making it at home is simple — using eggs and milk. If you want fruit cake, put in some fruit. Homemade is much healthier than shop-bought, tastier and fresher.</div>
          <div class="zh ask">★ [自己|zìjǐ|Making] [做|zuò|(making)] [蛋糕：|dàngāo:|a cake yourself:]</div>
          <div class="sent-en">★ Making a cake yourself: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[特别难|tèbié nán|especially hard]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不用牛奶和鸡蛋|búyòng niúnǎi hé jīdàn|no need for milk and eggs]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[比商店卖的健康|bǐ shāngdiàn mài de jiànkāng|healthier than shop-bought]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[自己|zìjǐ|Homemade] [做|zuò|(made)] [的|de|(nominalizer)] [比|bǐ|is much] [店里|diàn li|store-bought] [的|de|(nominalizer)] [健康|jiànkāng|healthier] [得|de|(complement)] [多|duō|(much)]」。</div>
        </div>
        <div class="q" id="L21-q65">
          <div class="qhead"><span class="num">65</span></div>
          <div class="zh stem">[我家的|wǒ jiā de|Across from my home] [街对面|jiē duìmiàn|across the street] [有|yǒu|there is] [一个|yí ge|a] [图书城。|túshūchéng.|book mall.] [最近|zuìjìn|Recently] [那里|nàli|there] [正在|zhèngzài|is] [举办|jǔbàn|holding] [世界|shìjiè|World] [图书节，|túshū jié,|Book Festival,] [从|cóng|from] [6 月 15 号|liù yuè shíwǔ hào|June 15th] [到|dào|to] [7 月 15 号，|qī yuè shíwǔ hào,|July 15th,] [买 100 送 20。|mǎi yìbǎi sòng èrshí.|spend 100 get 20.] [如果|rúguǒ|if] [买|mǎi|buy] [了|le|(past)] [100 元|yìbǎi yuán|100 yuan] [的|de|(possessive)] [书，|shū,|books,] [就|jiù|then] [送|sòng|get] [20 元|èrshí yuán|20 yuan] [书票，|shū piào,|book vouchers,] [可以|kěyǐ|can] [在|zài|in] [图书城|túshūchéng|the book mall] [买书，|mǎi shū,|buy books,] [也|yě|also] [可以|kěyǐ|can] [在|zài|on] [一层|yī céng|the first floor] [的|de|(possessive)] [咖啡店|kāfēidiàn|café] [买|mǎi|buy] [饮料。|yǐnliào.|drinks.]</div>
          <div class="sent-en">Across the street from my home is a book mall. Recently it's holding the World Book Festival — from June 15th to July 15th, spend 100 get 20. If you buy 100 yuan of books, you get 20 yuan of vouchers that can be used to buy books at the mall or buy drinks at the café on the first floor.</div>
          <div class="zh ask">★ [世界图书节|Shìjiè Túshū Jié|During World Book Day,] [时，|shí,|(when),] [在|zài|buying] [这个|zhège|100 yuan’s worth of] [图书城|túshū chéng|books at this bookstore] [买|mǎi|(buy)] 100 [块钱|kuài qián|(100 yuan)] [的|de|(possessive)] [书：|shū:|(books):]</div>
          <div class="sent-en">★ During World Book Day, buying 100 yuan's worth of books at this bookstore: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不用付钱|búyòng fù qián|don't need to pay]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[送一杯咖啡|sòng yì bēi kāfēi|get a free cup of coffee]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[送书票|sòng shū piào|get book vouchers]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[送|sòng|You get] 20 [元|yuán|yuan] [书票|shū piào|book vouchers]」。</div>
        </div>
        <div class="q" id="L21-q66">
          <div class="qhead"><span class="num">66</span></div>
          <div class="zh stem">[我|wǒ|I] [昨天|zuótiān|yesterday] [不|bù|not] [是|shì|is it that] [告诉|gàosu|told] [你，|nǐ,|you,] [早上|zǎoshang|morning] [起来|qǐlái|getting up] [不要|bú yào|don't] [马上|mǎshàng|immediately] [吃|chī|eat] [香蕉|xiāngjiāo|bananas] [吗？|ma?|(question)] [怎么|zěnme|why] [又|yòu|again] [吃|chī|ate] [了？|le?|(change)] [吃|chī|eating] [东西|dōngxi|things] [一定|yídìng|definitely] [要|yào|need to] [选择|xuǎnzé|choose] [“对”|“duì”|the "right"] [的|de|(possessive)] [时间，|shíjiān,|time,] [就|jiù|just] [像|xiàng|like] [香蕉，|xiāngjiāo,|bananas,] [不|bù|can't] [能|néng|can] [想|xiǎng|whenever you want] [什么|shénme|when] [时候|shíhou|when] [吃|chī|to eat] [就|jiù|then] [什么|shénme|when] [时候|shíhou|when] [吃，|chī,|eat,] [最好|zuì hǎo|best] [饭后|fànhòu|after meals] [吃，|chī,|eat,] [很饿|hěn è|very hungry] [的|de|(possessive)] [时候|shíhou|when] [不要|bú yào|don't] [吃，|chī,|eat,] [对|duì|to] [身体|shēntǐ|health] [不好。|bù hǎo.|not good.]</div>
          <div class="sent-en">Didn't I tell you yesterday not to eat bananas right after getting up in the morning? Why did you eat them again? You must choose the "right" time to eat — like bananas, you can't eat them whenever you want. Best to eat after meals; don't eat when very hungry — not good for your health.</div>
          <div class="zh ask">★ [什么|shénme|When] [时候|shíhou|is the best time] [吃|chī|to eat] [香蕉|xiāngjiāo|bananas] [最好？|zuì hǎo?|(best)?]</div>
          <div class="sent-en">★ When is the best time to eat bananas?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[吃完饭以后|chī wán fàn yǐhòu|after eating a meal]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[很饿的时候|hěn è de shíhou|when very hungry]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[想吃的时候|xiǎng chī de shíhou|whenever you want]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[最好|zuì hǎo|It’s best] [饭后|fàn hòu|after meals] [吃|chī|to eat]」。</div>
        </div>
        <div class="q" id="L21-q67">
          <div class="qhead"><span class="num">67</span></div>
          <div class="zh stem">[昨天|zuótiān|Yesterday] [我|wǒ|I] [坐|zuò|took] [出租车|chūzūchē|a taxi] [的|de|(possessive)] [时候，|shíhou,|when,] [司机|sījī|the driver] [说|shuō|said] [有|yǒu|there was] [一个|yí ge|a] [人|rén|person] [喝酒|hē jiǔ|drinking] [喝|hē|drank] [多|duō|too much] [了，|le,|,] [上车|shàng chē|getting in the car] [以后，|yǐhòu,|after,] [除了|chúle|except for] [一句|yí jù|one sentence] [“我要回家”，|“wǒ yào huí jiā”,|"I want to go home",] [什么|shénme|nothing] [都|dōu|all] [没|méi|not] [说，|shuō,|said,] [就|jiù|then] [睡着|shuì zháo|fell asleep] [了。|le.|(change)] [司机|sījī|The driver] [想：|xiǎng:|thought:] [“我|“wǒ|"I] [知道|zhīdào|know] [你|nǐ|your] [家|jiā|home] [在|zài|is at] [哪儿|nǎr|where] [啊？”|a?”|?"] [所以|suǒyǐ|so] [他|tā|he] [休息|xiūxi|rested] [了|le|(past)] [一会儿，|yíhuìr,|a while,] [然后|ránhòu|then] [对|duì|to] [那个|nàge|that] [人|rén|person] [说：|shuō:|said:] [“到家|dào jiā|arrived home] [了！”|le!”|!"] [那个|nàge|that] [人|rén|person] [真的|zhēn de|really] [下车|xià chē|got out] [了。|le.|(change)]</div>
          <div class="sent-en">Yesterday when I took a taxi, the driver said there was a drunk man who, after getting in, said nothing but "I want to go home" and fell asleep. The driver thought: "How would I know where your home is?" So he rested a while, then told the man: "We're home!" The man really got out.</div>
          <div class="zh ask">★ [那个|nàge|Where did that] [人|rén|person] [在|zài|(at)] [哪儿|nǎr|where] [下|xià|get off] [的|de|(possessive)] [车？|chē?|the car?]</div>
          <div class="sent-en">★ Where did that person get off?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[他家附近|tā jiā fùjìn|near his home]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[车站附近|chēzhàn fùjìn|near the station]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[上车的地方|shàng chē de dìfang|where he got in]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[司机|sījī|The driver] [没|méi|hadn’t] [开车，|kāichē,|driven,] [那|nà|so that] [人|rén|person] [实际|shíjì|actually] [还|hái|was still] [在|zài|at] [上车|shàng chē|the place where he got on] [的|de|(possessive)] [地方。|dìfang|(place).]</div>
        </div>
        <div class="q" id="L21-q68">
          <div class="qhead"><span class="num">68</span></div>
          <div class="zh stem">[周末|zhōumò|On the weekend] [跟|gēn|with] [女朋友|nǚpéngyou|my girlfriend] [上街|shàng jiē|going out] [买|mǎi|to buy] [东西，|dōngxi,|things,] [走|zǒu|walked] [了|le|(past)] [一个|yí ge|a whole] [小时，|xiǎoshí,|hour,] [我|wǒ|I] [看|kàn|saw] [她|tā|her] [很累，|hěn lèi,|was very tired,] [就|jiù|then] [帮|bāng|help] [她|tā|her] [拿|ná|carry] [包。|bāo.|the bag.] [经过|jīngguò|Passing by] [一个|yí ge|a] [商店|shāngdiàn|shop] [的|de|(possessive)] [时候，|shíhou,|when,] [我|wǒ|I] [遇见|yùjiàn|met] [了|le|(past)] [以前|yǐqián|former] [的|de|(possessive)] [老同学，|lǎo tóngxué,|old classmate,] [就|jiù|then] [跟|gēn|with] [他|tā|him] [一边|yìbiān|while] [聊天|liáotiān|chatting] [一边|yìbiān|while] [往|wǎng|toward] [前|qián|ahead] [走。|zǒu.|walking.] [突然|tūrán|Suddenly] [我|wǒ|I] [想起来|xiǎng qǐlái|remembered] [女朋友|nǚpéngyou|my girlfriend] [还|hái|still] [在|zài|in] [商店|shāngdiàn|the shop] [里，|li,|inside,] [就|jiù|then] [马上|mǎshàng|immediately] [回去|huíqù|went back] [看，|kàn,|to look,] [她|tā|she] [说|shuō|said] [她|tā|she] [等|děng|waited] [了|le|(past)] [我|wǒ|me] [半天|bàntiān|a long time] [了，|le,|,] [什么|shénme|nothing] [都|dōu|all] [没|méi|not] [买，|mǎi,|bought,] [因为|yīnwèi|because] [刚才|gāngcái|just now] [要|yào|was about to] [买|mǎi|buy] [东西|dōngxi|things] [的|de|(possessive)] [时候|shíhou|when] [才|cái|only then] [发现，|fāxiàn,|discovered,] [她|tā|her] [的|de|(possessive)] [钱包|qiánbāo|wallet] [在|zài|is in] [我|wǒ|my] [这儿。|zhèr.|place.]</div>
          <div class="sent-en">On the weekend I went shopping with my girlfriend. We walked an hour, I saw she was tired, so I carried her bag. Passing a shop, I met an old classmate and chatted while walking forward. Suddenly I remembered my girlfriend was still in the shop, so I went back. She said she'd waited a long time and bought nothing, because just as she was going to buy she discovered her wallet was with me.</div>
          <div class="zh ask">★ [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道：|zhīdào:|know:]</div>
          <div class="sent-en">★ From this passage, we can know: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[女朋友是我的老同学|nǚpéngyou shì wǒ de lǎo tóngxué|my girlfriend is my old classmate]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[女朋友在商店里等我|nǚpéngyou zài shāngdiàn li děng wǒ|my girlfriend waited for me in the shop]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[女朋友买了很多东西|nǚpéngyou mǎi le hěnduō dōngxi|my girlfriend bought many things]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[她|tā|She] [等|děng|waited for] [了|le|(past)] [我|wǒ|me] [半天|bàntiān|a long time]」。</div>
        </div>
        <div class="q" id="L21-q69">
          <div class="qhead"><span class="num">69</span></div>
          <div class="zh stem">[我|wǒ|I] [在|zài|in] [中国|Zhōngguó|China] [已经|yǐjīng|already] [留学|líuxué|studied abroad] [一年|yì nián|for a year] [了，|le,|,] [马上|mǎshàng|soon] [要|yào|am going to] [离开|líkāi|leave] [北京|Běijīng|Beijing] [回国|huí guó|go back home] [了，|le,|,] [但是|dànshì|but] [我|wǒ|I] [现在|xiànzài|now] [礼物|lǐwù|gifts] [还|hái|still] [没|méi|not] [买|mǎi|buy] [好，|hǎo,|,] [送给|sòng gěi|to give] [妈妈|māma|Mom] [和|hé|and] [家里人|jiā li rén|family members] [的|de|(possessive)] [礼物|lǐwù|gifts] [很|hěn|very] [容易|róngyì|easy] [买，|mǎi,|to buy,] [送给|sòng gěi|to give] [朋友|péngyou|friends] [的|de|(possessive)] [礼物|lǐwù|gifts] [很|hěn|very] [难|nán|hard] [买，|mǎi,|to buy,] [因为|yīnwèi|because] [只有|zhǐyǒu|only by] [送给|sòng gěi|giving] [他们|tāmen|them] [喜欢|xǐhuan|like] [的|de|(possessive)] [礼物，|lǐwù,|gifts,] [他们|tāmen|they] [才|cái|only then] [会|huì|will] [高兴。|gāoxìng.|be happy.] [我|wǒ|I] [不|bù|not] [太|tài|quite] [了解|liǎojiě|know] [他们|tāmen|their] [的|de|(possessive)] [爱好，|àihào,|hobbies,] [不|bù|not] [知道|zhīdào|know] [应该|yīnggāi|should] [买|mǎi|buy] [什么|shénme|what] [好。|hǎo.|is good.]</div>
          <div class="sent-en">I've studied in China for a year. Soon I'll leave Beijing and go home, but I still haven't bought the gifts. Gifts for Mom and family are easy; gifts for friends are hard, because only by giving them what they like will they be happy. I don't quite know their hobbies, so I don't know what to buy.</div>
          <div class="zh ask">★ [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道：|zhīdào:|know:]</div>
          <div class="sent-en">★ From this passage, we can know: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[我马上要回北京了|wǒ mǎshàng yào huí Běijīng le|I'm about to return to Beijing]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[我了解家人的爱好|wǒ liǎojiě jiārén de àihào|I know my family's hobbies]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[朋友不喜欢礼物|péngyou bù xǐhuan lǐwù|friends don't like gifts]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[给|gěi|Buying gifts for] [家里人|jiā li rén|family members] [买|mǎi|(buying)] [礼物|lǐwù|gifts] [很|hěn|is very] [容易，|róngyì,|easy,] [说明|shuōmíng|showing] [了解|liǎojiě|he knows] [家人。|jiārén|his family.]</div>
        </div>
        <div class="q" id="L21-q70">
          <div class="qhead"><span class="num">70</span></div>
          <div class="zh stem">[我|wǒ|my] [爷爷|yéye|grandpa] [已经|yǐjīng|already] [七十多岁|qīshí duō suì|over seventy] [了，|le,|,] [但是|dànshì|but] [他|tā|he] [还|hái|still] [觉得|juéde|feels] [自己|zìjǐ|himself] [很|hěn|very] [年轻，|niánqīng,|young,] [他|tā|his] [身体|shēntǐ|health] [很|hěn|very] [好，|hǎo,|good,] [大家|dàjiā|everyone] [都|dōu|all] [叫|jiào|calls] [他|tā|him] [“健康爷爷”。|“Jiànkāng Yéye”.|"Grandpa Health".] [他|tā|he] [每天|měitiān|every day] [早上|zǎoshang|morning] [六点|liù diǎn|6 o'clock] [就|jiù|then] [起床，|qǐchuáng,|gets up,] [起了床|qǐ le chuáng|after getting up] [就|jiù|then] [出去|chūqù|goes out] [锻炼|duànliàn|to exercise] [身体。|shēntǐ.|his body.] [我们|wǒmen|our] [家|jiā|family] [附近|fùjìn|nearby] [有|yǒu|there is] [一个|yí ge|a] [公园，|gōngyuán,|park,] [只要|zhǐyào|as long as] [不|bù|not] [刮风、|guā fēng,|windy,] [下雨，|xià yǔ,|rainy,] [他|tā|he] [都|dōu|all] [要|yào|needs to] [走|zǒu|walk] [半个小时|bàn ge xiǎoshí|half an hour] [到|dào|to] [那儿，|nàr,|there,] [然后|ránhòu|then] [在|zài|in] [那儿|nàr|there] [跟|gēn|with] [老朋友|lǎo péngyou|old friends] [聊天。|liáotiān.|chat.]</div>
          <div class="sent-en">My grandpa is over seventy, but he still feels very young. His health is very good; everyone calls him "Grandpa Health". Every day he gets up at 6, then goes out to exercise. Near our home is a park; as long as it's not windy or rainy, he walks half an hour there and chats with old friends.</div>
          <div class="zh ask">★ [我|wǒ|My] [爷爷：|yéye:|grandpa:]</div>
          <div class="sent-en">★ My grandpa: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[现在很年轻|xiànzài hěn niánqīng|is very young now]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[每天去公园|měitiān qù gōngyuán|goes to the park every day]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[身体很健康|shēntǐ hěn jiànkāng|is very healthy]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[大家|dàjiā|Everyone] [都|dōu|all] [叫|jiào|calls] [他|tā|him] [健康爷爷|jiànkāng yéye|Grandpa Health]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L21-w1">[第一部分|dì yī bùfen|Part 1]　[第 71–75 题：|dì 71–75 tí:|Q 71–75:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L21-w71">
          <div class="qhead"><span class="num">71</span></div>
          <div class="zh">[兴趣|xìngqù|interest] [感|gǎn|feel] [画画儿|huà huàr|drawing] [对|duì|to] [妹妹|mèimei|younger sister] [很|hěn|very]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[妹妹|mèimei|My sister] [对|duì|is very interested in] [画画儿|huà huàr|drawing] [很|hěn|(very)] [感兴趣。|gǎn xìngqù|(interested).]<div class="sent-en">My younger sister is very interested in drawing.</div></div>
        </div>
        <div class="write-item" id="L21-w72">
          <div class="qhead"><span class="num">72</span></div>
          <div class="zh">[饿|è|hungry] [我|wǒ|I] [一点儿|yìdiǎnr|at all] [现在|xiànzài|now] [不|bù|not] [也|yě|also]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|I] [现在|xiànzài|now] [一点儿|yìdiǎnr|at all] [也|yě|(even)] [不|bù|not] [饿。|è|hungry.]<div class="sent-en">I'm not hungry at all now.</div></div>
        </div>
        <div class="write-item" id="L21-w73">
          <div class="qhead"><span class="num">73</span></div>
          <div class="zh">[放|fàng|placed] [一瓶|yì píng|a bottle of] [桌子|zhuōzi|table] [着|zhe|(progressive)] [上|shàng|on] [饮料|yǐnliào|drink]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[桌子|zhuōzi|There’s a bottle of] [上|shàng|on the table] [放着|fàng zhe|(placed)] [一瓶|yì píng|(a bottle of)] [饮料。|yǐnliào|drink.]<div class="sent-en">There's a bottle of drink on the table.</div></div>
        </div>
        <div class="write-item" id="L21-w74">
          <div class="qhead"><span class="num">74</span></div>
          <div class="zh">[安静|ānjìng|quiet] [哪儿|nǎr|wherever] [哪儿|nǎr|there] [就|jiù|then] [学习|xuéxí|study] [去|qù|go] [我|wǒ|I]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[哪儿|nǎr|Wherever] [安静|ānjìng|it’s quiet,] [我|wǒ|that’s] [就|jiù|where] [去|qù|I] [哪儿|nǎr|(where)] [学习。|xuéxí|study.]<div class="sent-en">I study wherever it's quiet.</div></div>
        </div>
        <div class="write-item" id="L21-w75">
          <div class="qhead"><span class="num">75</span></div>
          <div class="zh">[牛奶|niúnǎi|milk] [去|qù|go] [进|jìn|into] [放|fàng|put] [冰箱|bīngxiāng|fridge] [把|bǎ|(BA)] [请|qǐng|please]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[请|qǐng|Please] [把|bǎ|(BA)] [牛奶|niúnǎi|the milk] [放|fàng|put] [进|jìn|into] [冰箱|bīngxiāng|the fridge] [去。|qù|(go).]<div class="sent-en">Please put the milk into the fridge.</div></div>
        </div>

        <h4 id="L21-w2">[第二部分|dì èr bùfen|Part 2]　[第 76–80 题：|dì 76–80 tí:|Q 76–80:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L21-w76">
          <div class="qhead"><span class="num">76</span></div>
          <div class="zh">[你|nǐ|you] [怎么|zěnme|why] [现在|xiànzài|now] [才|cái|only then] [回来？|huílái?|come back?] [我|wǒ|I] [和|hé|and] [你|nǐ|your] [妈妈|māma|mom] [都|dōu|all] [很|hěn|very] <span class="blank-input"><span class="input-py">dān</span><input type="text" data-ans="担"></span> [心。|xīn.|worry.]</div>
          <div class="sent-en">Why are you only back now? Your mom and I were very worried.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[担|dān|carry]（[担心|dānxīn|worry]）</span></div>
        </div>
        <div class="write-item" id="L21-w77">
          <div class="qhead"><span class="num">77</span></div>
          <div class="zh">[为了|wèile|In order to] <span class="blank-input"><span class="input-py">tí</span><input type="text" data-ans="提"></span> [高|gāo|high] [汉语|Hànyǔ|Chinese] [水平，|shuǐpíng,|level,] [他|tā|he] [每天|měitiān|every day] [跟|gēn|with] [中国朋友|Zhōngguó péngyou|Chinese friends] [练习。|liànxí.|practices.]</div>
          <div class="sent-en">To improve his Chinese, he practices with Chinese friends every day.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[提|tí|raise]（[提高|tígāo|improve]）</span></div>
        </div>
        <div class="write-item" id="L21-w78">
          <div class="qhead"><span class="num">78</span></div>
          <div class="zh"><span class="blank-input"><span class="input-py">zhōng</span><input type="text" data-ans="终"></span> [于|yú|at] [考完试|kǎo wán shì|finished the exam] [了，|le,|,] [走，|zǒu,|Let's go,] [我们|wǒmen|we] [去|qù|go] [好好儿|hǎohāor|well] [玩儿玩儿！|wánr wanr!|have fun!]</div>
          <div class="sent-en">Finally finished the exam — let's go have fun!</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[终|zhōng|end]（[终于|zhōngyú|finally]）</span></div>
        </div>
        <div class="write-item" id="L21-w79">
          <div class="qhead"><span class="num">79</span></div>
          <div class="zh">[我|wǒ|I] [带了|dài le|brought] [两把|liǎng bǎ|two] [伞，|sǎn,|umbrellas,] [可以|kěyǐ|can] <span class="blank-input"><span class="input-py">jiè</span><input type="text" data-ans="借"></span> [给|gěi|to] [你|nǐ|you] [一把。|yì bǎ.|one.]</div>
          <div class="sent-en">I brought two umbrellas — I can lend you one.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[借|jiè|lend]</span></div>
        </div>
        <div class="write-item" id="L21-w80">
          <div class="qhead"><span class="num">80</span></div>
          <div class="zh">[这儿的|zhèr de|Here] <span class="blank-input"><span class="input-py">xià</span><input type="text" data-ans="夏"></span> [天|tiān|day] [没有|méiyǒu|doesn't have] [我们国家|wǒmen guójiā|our country] [那么|nàme|so] [热，|rè,|hot,] [很|hěn|very] [舒服。|shūfu.|comfortable.]</div>
          <div class="sent-en">Summer here isn't as hot as in our country — very comfortable.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[夏|xià|summer]（[夏天|xiàtiān|summer]）</span></div>
        </div>
      </div>
    </div>
  `
};
