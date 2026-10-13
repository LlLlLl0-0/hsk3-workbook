window.LESSONS = window.LESSONS || {};
const _ph11 = (n, t, py, en) => `
<div class="lesson">
  <h2>第 ${n} 课　${t}<span class="title-py">${py}</span><small>Lesson ${n} · ${en}</small></h2>
  <div class="part"><h3>[一、听力|Yī tīnglì|1. Listening]</h3><div class="placeholder">📝 第 ${n} 课 · 待填充</div></div>
  <div class="part"><h3>[二、阅读|Èr yuèdú|2. Reading]</h3><div class="placeholder">📝 待填充</div></div>
  <div class="part"><h3>[三、书写|Sān shūxiě|3. Writing]</h3><div class="placeholder">📝 待填充</div></div>
  <div class="part"><h3>[四、复习|Sì fùxí|4. Review]</h3><div class="placeholder">📝 待填充</div></div>
</div>`;

window.LESSONS[11] = {
  navLabel:'第11课',
  html: `
    <div class="lesson">
      <h2>第 11 课　别忘了把空调关了
        <span class="title-py">Dì shíyī kè · Bié wàngle bǎ kōngtiáo guān le</span>
        <small>Lesson 11 · Don't forget to turn off the air conditioner</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L11-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图11.png" alt="听力图11" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图11.png</b></span>
        </div>

        <div class="q" id="L11-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这个|zhège|this] [花瓶|huāpíng|vase] [真|zhēn|really] [漂亮，|piàoliang,|pretty,] [在哪儿|zài nǎr|where] [买|mǎi|bought] [的？|de?|(nominalizer)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我家|wǒ jiā|my home] [楼下|lóuxià|downstairs] [的|de|(possessive)] [商店，|shāngdiàn,|shop,] [我|wǒ|I] [带|dài|take] [你|nǐ|you] [去|qù|go] [看看。|kàn kan.|have a look.]</div>
          <div class="sent-en">M: This vase is really pretty — where did you buy it?<br>W: The shop downstairs from my home. I'll take you to see.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[花瓶|huāpíng|a vase]）</div>
        </div>
        <div class="q" id="L11-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[男：|Nán:|M:] [把|bǎ|(BA)] [词典|cídiǎn|dictionary] [还给|huán gěi|return to] [我|wǒ|me] [吧，|ba,|,] [我|wǒ|I] [要|yào|need to] [用|yòng|use] [一下。|yíxià.|a bit.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好，|hǎo,|OK,] [方便|fāngbiàn|convenient] [的|de|(possessive)] [时候|shíhou|time] [再|zài|again] [借|jiè|lend] [我|wǒ|me] [用用。|yòng yong.|use.]</div>
          <div class="sent-en">M: Return the dictionary to me — I need to use it.<br>W: OK. Lend it to me again when convenient.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[词典|cídiǎn|a dictionary]）</div>
        </div>
        <div class="q" id="L11-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [饭菜|fàncài|food] [都|dōu|all] [做好|zuò hǎo|is ready] [了，|le,|,] [把|bǎ|(BA)] [电脑|diànnǎo|computer] [关|guān|turn off] [了|le|(change)] [吧？|ba?|(suggestion)] [先|xiān|first] [吃饭。|chīfàn.|eat.]</div>
          <div class="zh stem">[男：|Nán:|M:] [好的，|hǎo de,|OK,] [我|wǒ|I] [马上|mǎshàng|right away] [就|jiù|then] [来。|lái.|come.]</div>
          <div class="sent-en">W: The food is ready — turn off the computer and eat first.<br>M: OK, I'll come right away.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[电脑|diànnǎo|a computer]）</div>
        </div>
        <div class="q" id="L11-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [运动会|yùndònghuì|sports meet] [什么时候|shénme shíhou|when] [结束？|jiéshù?|end?]</div>
          <div class="zh stem">[男：|Nán:|M:] [五点|wǔ diǎn|5 o'clock] [左右|zuǒyòu|around] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W: When does the sports meet end?<br>M: Around 5 o'clock.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[运动会|yùndònghuì|sports meet] / [观众|guānzhòng|spectators]）</div>
        </div>
        <div class="q" id="L11-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[男：|Nán:|M:] [服务员，|fúwùyuán,|Waiter,] [这儿|zhèr|here] [只有|zhǐyǒu|only] [一双|yì shuāng|one pair] [筷子，|kuàizi,|chopsticks,] [请|qǐng|please] [再|zài|again] [给|gěi|to] [我们|wǒmen|us] [拿|ná|bring] [一双。|yì shuāng.|one pair.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好的，|hǎo de,|OK,] [请|qǐng|please] [您|nín|you] [等|děng|wait] [一下，|yíxià,|a moment,] [马上|mǎshàng|right away] [来。|lái.|come.]</div>
          <div class="sent-en">M: Waiter, there's only one pair of chopsticks here — please bring us another pair.<br>W: OK, please wait a moment, coming right away.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[筷子|kuàizi|chopsticks]）</div>
        </div>

        <h4 id="L11-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L11-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[小周，|Xiǎo Zhōu,|Xiao Zhou,] [你|nǐ|you] [帮|bāng|help] [我|wǒ|me] [看看|kàn kan|take a look at] [笔记本电脑|bǐjìběn diànnǎo|laptop] [吧。|ba.|(suggestion)] [昨天|zuótiān|yesterday] [我|wǒ|I] [还|hái|still] [能|néng|can] [看|kàn|check] [电子邮件|diànzǐ yóujiàn|email,] [今天|jīntiān|today] [突然|tūrán|suddenly] [就|jiù|then] [打不开|dǎ bu kāi|can't open] [了，|le,|,] [不知道|bù zhīdào|don't know] [是|shì|is] [怎么|zěnme|what] [回事。|huí shì.|matter.]</div>
          <div class="sent-en">Xiao Zhou, help me check my laptop. Yesterday I could still check email, today it suddenly won't open — I don't know what's wrong.</div>
          <div class="zh stem">★ [他的|tā de|his] [电脑|diànnǎo|computer] [出|chū|had] [了|le|(past)] [点儿|diǎnr|some] [问题。|wèntí.|problem.]</div>
          <div class="sent-en">★ His computer has a problem.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[电脑|diànnǎo|The computer] [打不开|dǎ bu kāi|won’t turn on] [了|le|(change)] = [出|chū|has] [了|le|(past)] [问题。|wèntí|a problem.]" data-expl-en="Computer won't open = has a problem."></div>
        </div>
        <div class="q" id="L11-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[教室里|jiàoshì li|In the classroom] [人|rén|people] [太多|tài duō|too many] [了，|le,|,] [我们|wǒmen|we] [去|qù|go to] [图书馆|túshūguǎn|library] [学习|xuéxí|study] [吧，|ba,|,] [那儿|nàr|there] [比较|bǐjiào|relatively] [安静。|ānjìng.|quiet.]</div>
          <div class="sent-en">There are too many people in the classroom — let's go to the library to study, it's quieter there.</div>
          <div class="zh stem">★ [他|tā|he] [打算|dǎsuàn|plans to] [去|qù|go to] [图书馆|túshūguǎn|library] [学习。|xuéxí.|study.]</div>
          <div class="sent-en">★ He plans to go to the library to study.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[我们|wǒmen|Let’s] [去|qù|go to] [图书馆|túshūguǎn|the library] [学习|xuéxí|to study] [吧|ba|(suggestion)]」= [打算|dǎsuàn|plans] [去。|qù|to go.]" data-expl-en="'Let's go to the library to study' = plans to."></div>
        </div>
        <div class="q" id="L11-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[住|zhù|living] [在|zài|at] [这儿|zhèr|here] [真|zhēn|really] [不错，|búcuò,|nice,] [附近|fùjìn|nearby] [环境|huánjìng|environment] [很好，|hěn hǎo,|is good,] [离|lí|from] [我|wǒ|my] [上班|shàngbān|work] [的|de|(possessive)] [医院|yīyuàn|hospital] [也|yě|also] [不|bù|not] [远，|yuǎn,|far,] [上下班|shàng xià bān|commuting] [都|dōu|all] [不用|búyòng|don't need to] [坐|zuò|take] [地铁|dìtiě|subway] [了，|le,|,] [骑自行车|qí zìxíngchē|ride a bike] [就|jiù|just] [可以。|kěyǐ.|can.]</div>
          <div class="sent-en">Living here is really nice — good environment nearby, close to my hospital, no need to take the subway for commuting, just ride a bike.</div>
          <div class="zh stem">★ [他|tā|he] [以前|yǐqián|before] [骑自行车|qí zìxíngchē|rode a bike] [上班。|shàngbān.|to work.]</div>
          <div class="sent-en">★ He used to ride a bike to work.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[现在|xiànzài|Now] [骑车|qí chē|rides a bike] [上班，|shàngbān,|to work,] [不是|bú shì|not] [以前。|yǐqián|before.]" data-expl-en="He rides a bike NOW, not before."></div>
        </div>
        <div class="q" id="L11-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[什么|shénme|What] [是|shì|is] [快乐？|kuàilè?|happiness?] [结束|jiéshù|Finish] [一天|yì tiān|a day] [的|de|(possessive)] [工作|gōngzuò|work] [以后，|yǐhòu,|after,] [你|nǐ|you] [和|hé|and] [家人|jiārén|family] [一起|yìqǐ|together] [吃|chī|eat] [晚饭，|wǎnfàn,|dinner,] [说说|shuō shuo|talk about] [白天|báitiān|daytime] [的|de|(possessive)] [事情，|shìqing,|things,] [这|zhè|this] [不|bù|isn't] [就是|jiùshì|just] [快乐|kuàilè|happiness] [吗？|ma?|(question)]</div>
          <div class="sent-en">What is happiness? After finishing a day's work, eating dinner with family and talking about the day — isn't that happiness?</div>
          <div class="zh stem">★ [跟|gēn|with] [家人|jiārén|family] [一起|yìqǐ|together] [吃|chī|eat] [晚饭|wǎnfàn|dinner] [很|hěn|very] [快乐。|kuàilè.|happy.]</div>
          <div class="sent-en">★ Eating dinner with family is very happy.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[这|zhè|Isn’t] [不|bù|(not)] [就是|jiùshì|this] [快乐|kuàilè|happiness] [吗？|ma?|(rhetorical)]」= [很|hěn|very] [快乐。|kuàilè|happy.]" data-expl-en="'Isn't that happiness?' = very happy."></div>
        </div>
        <div class="q" id="L11-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[你|nǐ|you] [把|bǎ|(BA)] [桌子|zhuōzi|table] [上|shàng|on] [的|de|(possessive)] [杯子|bēizi|cup] [给|gěi|to] [我|wǒ|me] [，|,|,] [我|wǒ|I] [去|qù|go] [洗|xǐ|wash] [一下。|yíxià.|a bit.] [你|nǐ|you] [去|qù|go] [楼下|lóuxià|downstairs] [买|mǎi|buy] [几瓶|jǐ píng|a few bottles of] [啤酒|píjiǔ|beer] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">Pass me the cup on the table — I'll wash it. You go downstairs and buy a few bottles of beer.</div>
          <div class="zh stem">★ [啤酒|píjiǔ|Beer] [在|zài|is on] [桌子|zhuōzi|table] [上。|shàng.|on.]</div>
          <div class="sent-en">★ Beer is on the table.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[啤酒|píjiǔ|The beer is for] [是|shì|(is)] [让|ràng|the other] [对方|duìfāng|person] [去|qù|to go] [楼下|lóu xià|downstairs] [买，|mǎi,|and buy,] [不是|bú shì|not] [已经|yǐjīng|already] [在|zài|on] [桌子|zhuōzi|the table] [上。|shàng|(top).]" data-expl-en="The beer is to be bought downstairs, not already on the table."></div>
        </div>

        <h4 id="L11-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L11-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [看一下|kàn yíxià|take a look at] [地图，|dìtú,|map,] [这儿|zhèr|here] [附近|fùjìn|nearby] [有|yǒu|is there] [眼镜店|yǎnjìng diàn|glasses shop] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [地铁站|dìtiě zhàn|subway station] [旁边|pángbiān|next to] [有|yǒu|there is] [一个，|yí ge,|one,] [在|zài|at] [地铁站|dìtiě zhàn|subway station] [的|de|(possessive)] [北边。|běibiān.|north side.]</div>
          <div class="sent-en">M: Look at the map — is there a glasses shop nearby?<br>W: There's one next to the subway station, on the north side.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [在|zài|is] [找|zhǎo|looking for] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What is the man looking for?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[地铁站|dìtiě zhàn|subway station]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[眼镜店|yǎnjìng diàn|glasses shop]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[地图|dìtú|map]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[附近|fùjìn|Is there] [有|yǒu|(there)] [眼镜店|yǎnjìng diàn|an optical shop] [吗？|ma?|nearby?]」</div>
        </div>
        <div class="q" id="L11-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [妹妹|mèimei|younger sister] [怎么|zěnme|what's wrong] [了？|le?|(change)] [病|bìng|sick] [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [可能|kěnéng|maybe] [饿|è|hungry] [了，|le,|,] [你|nǐ|you] [把|bǎ|(BA)] [奶瓶|nǎipíng|baby bottle] [给|gěi|to] [我|wǒ|me] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: What's wrong with little sister? Is she sick?<br>W: Maybe she's hungry. Pass me the baby bottle.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [要|yào|is going to] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What is the woman going to do?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[给妹妹喝牛奶|gěi mèimei hē niúnǎi|feed sister milk]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[去超市买牛奶|qù chāoshì mǎi niúnǎi|go buy milk]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[带妹妹去医院|dài mèimei qù yīyuàn|take sister to hospital]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[要|yào|Wants] [奶瓶|nǎipíng|a bottle] [给|gěi|for] [妹妹|mèimei|her sister] [喝|hē|to drink] [牛奶。|niúnǎi|milk.]</div>
        </div>
        <div class="q" id="L11-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[男：|Nán:|M:] [会议|huìyì|meeting] [结束|jiéshù|ends] [后，|hòu,|after,] [你|nǐ|you] [记得|jìde|remember] [把|bǎ|(BA)] [空调|kōngtiáo|air conditioner] [和|hé|and] [灯|dēng|lights] [都|dōu|all] [关|guān|turn off] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好的，|hǎo de,|OK,] [我|wǒ|I] [知道|zhīdào|know] [了，|le,|,] [明天|míngtiān|tomorrow] [见。|jiàn.|see you.]</div>
          <div class="sent-en">M: After the meeting ends, remember to turn off the air conditioner and lights.<br>W: OK, I know. See you tomorrow.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [最|zuì|most] [可能|kěnéng|likely] [是|shì|have] [什么|shénme|what] [关系？|guānxi?|relationship?]</div>
          <div class="sent-en">Q: What relationship are they most likely to have?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[同事|tóngshì|colleagues]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[经理和客人|jīnglǐ hé kèrén|manager and guest]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[医生和病人|yīshēng hé bìngrén|doctor and patient]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[一起|yìqǐ|Attend meetings] [开会、|kāihuì,|together,] [关|guān|turn off] [空调|kōngtiáo|the AC] [和|hé|and] [灯|dēng|lights] → [同事。|tóngshì|colleagues.]</div>
        </div>
        <div class="q" id="L11-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [明天|míngtiān|tomorrow] [出去|chūqù|go out] [开会，|kāihuì,|for a meeting,] [你|nǐ|you] [能|néng|can] [帮|bāng|help] [我|wǒ|me] [照顾|zhàogù|take care of] [一下|yíxià|a bit] [小雨|Xiǎoyǔ|Xiaoyu] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [行，|xíng,|OK,] [没问题，|méi wèntí,|no problem,] [我|wǒ|I] [每天|měitiān|every day] [都|dōu|all] [带|dài|take] [她|tā|her] [去|qù|go to] [公园|gōngyuán|park] [玩儿。|wánr.|play.]</div>
          <div class="sent-en">W: I'm going out for a meeting tomorrow — can you help take care of Xiaoyu?<br>M: Sure, no problem. I'll take her to the park to play every day.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [要|yào|is going to] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What is the man going to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[出去开会|chūqù kāihuì|go out for a meeting]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[照顾小雨|zhàogù Xiǎoyǔ|take care of Xiaoyu]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[和女的去公园|hé nǚde qù gōngyuán|go to the park with the woman]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[没问题，|méi wèntí,|No problem,] [我|wǒ|I] [每天|měitiān|every day] [都|dōu|(all)] [带|dài|take] [她|tā|her] [去|qù|to] [公园|gōngyuán|the park] [玩儿|wánr|to play]」。</div>
        </div>
        <div class="q" id="L11-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|my] [的|de|(possessive)] [那本|nà běn|that] [历史书|lìshǐ shū|history book] [呢，|ne,|(question)] [你|nǐ|you] [看见|kànjiàn|saw] [了|le|(past)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [昨天|zuótiān|yesterday] [让|ràng|asked] [我|wǒ|me] [去|qù|go to] [图书馆|túshūguǎn|library] [把|bǎ|(BA)] [书|shū|book] [还|huán|return] [了，|le,|,] [你|nǐ|you] [忘|wàng|forgot] [了？|le?|(change)]</div>
          <div class="sent-en">W: Where's my history book? Did you see it?<br>M: You asked me to return it to the library yesterday — did you forget?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [是|shì|(is)] [什么|shénme|what] [意思？|yìsi?|meaning?]</div>
          <div class="sent-en">Q: What does the man mean?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[让女的去还书|ràng nǚde qù huán shū|tells her to return the book]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[书已经还了|shū yǐjīng huán le|the book is already returned]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[女的忘了还书|nǚde wàng le huán shū|she forgot to return the book]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[昨天|zuótiān|Yesterday] [让|ràng|told] [我|wǒ|me] [把|bǎ|(BA)] [书|shū|the book] [还|huán|to return] [了|le|(change)]」→ [书|shū|the book] [已经|yǐjīng|already] [还|huán|returned] [了。|le|(change)]</div>
        </div>

        <h4 id="L11-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L11-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [空调|kōngtiáo|air conditioner] [下面|xiàmiàn|under] [怎么|zěnme|why] [这么|zhème|so] [多|duō|much] [水？|shuǐ?|water?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [也|yě|also] [是|shì|am] [刚|gāng|just] [看见，|kànjiàn,|saw,] [我|wǒ|I] [已经|yǐjīng|already] [打电话|dǎ diànhuà|called] [叫|jiào|to ask] [人|rén|someone] [来|lái|to come] [看|kàn|look] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [问|wèn|ask] [他们|tāmen|them] [什么时候|shénme shíhou|when] [到|dào|arrive] [了|le|(past)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [他们|tāmen|they] [说|shuō|say] [今天|jīntiān|today] [周日|zhōu rì|Sunday,] [比较|bǐjiào|relatively] [忙，|máng,|busy,] [下午|xiàwǔ|afternoon] [才能|cái néng|can] [来。|lái.|come.]</div>
          <div class="sent-en">W: Why is there so much water under the air conditioner?<br>M: I just saw it too — I've called someone to look.<br>W: Did you ask when they'll arrive?<br>M: They said today's Sunday and they're busy — they can only come in the afternoon.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [为什么|wèishénme|why] [要|yào|(does he)] [打电话？|dǎ diànhuà?|make a call?]</div>
          <div class="sent-en">Q: Why does the man want to make a call?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[今天比较忙|jīntiān bǐjiào máng|today is busy]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[空调有问题|kōngtiáo yǒu wèntí|the air conditioner has a problem]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[叫人来换水|jiào rén lái huàn shuǐ|ask someone to change the water]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[空调|kōngtiáo|There’s lots of water] [下面|xiàmiàn|under] [有|yǒu|(there’s)] [很多|hěnduō|(lots of)] [水|shuǐ|water] → [空调|kōngtiáo|the AC] [有|yǒu|has] [问题。|wèntí|a problem.]</div>
        </div>
        <div class="q" id="L11-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [要|yào|am going to] [去|qù|go] [跑步，|pǎobù,|run,] [你|nǐ|you] [去|qù|go] [不|bù|not] [去？|qù?|go?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [已经|yǐjīng|already] [洗完澡|xǐ wán zǎo|finished showering] [了，|le,|,] [不|bù|not] [想|xiǎng|want to] [出去|chūqù|go out] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [要|yào|need to] [带点儿|dài diǎnr|bring some] [什么|shénme|what] [东西|dōngxi|things] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [回来|huílái|come back] [时，|shí,|when,] [在|zài|at] [楼下|lóuxià|downstairs] [超市|chāoshì|supermarket] [买|mǎi|buy] [斤|jīn|a jin of] [香蕉|xiāngjiāo|bananas] [和|hé|and] [两瓶|liǎng píng|two bottles of] [牛奶|niúnǎi|milk] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: I'm going running — coming?<br>W: I've already showered and don't want to go out.<br>M: Need me to bring anything?<br>W: When you come back, buy a jin of bananas and two bottles of milk from the supermarket downstairs.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [为什么|wèishénme|why] [不|bù|doesn’t] [去|qù|go] [跑步？|pǎobù?|running?]</div>
          <div class="sent-en">Q: Why doesn't the woman go running?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[已经洗澡了|yǐjīng xǐzǎo le|already showered]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不喜欢出去跑步|bù xǐhuan chūqù pǎobù|doesn't like running outside]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[想去超市买东西|xiǎng qù chāoshì mǎi dōngxi|wants to buy things at the supermarket]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[我|wǒ|I] [已经|yǐjīng|already] [洗完澡|xǐ wán zǎo|had a shower] [了，|le,|(change),] [不|bù|don’t] [想|xiǎng|want] [出去|chūqù|to go out] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L11-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|my] [的|de|(possessive)] [笔记本电脑|bǐjìběn diànnǎo|laptop] [太旧|tài jiù|too old] [了，|le,|,] [我|wǒ|I] [想|xiǎng|want to] [换|huàn|change] [一个，|yí ge,|one,] [你|nǐ|you] [说|shuō|say] [买|mǎi|buy] [个|ge|(MW)] [什么|shénme|what] [样|yàng|kind] [的|de|(possessive)] [好？|hǎo?|is good?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [用|yòng|use] [的|de|(possessive)] [这个|zhège|this] [就|jiù|just] [不错，|búcuò,|is good,] [也|yě|also] [不|bù|not] [大，|dà,|big,] [带着|dài zhe|carrying] [很|hěn|very] [方便。|fāngbiàn.|convenient.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [贵|guì|expensive] [不贵？|bú guì?|or not?]</div>
          <div class="zh stem">[男：|Nán:|M:] [有点儿|yǒudiǎnr|a bit] [贵，|guì,|expensive,] [我|wǒ|I] [去年|qùnián|last year] [买|mǎi|bought] [的|de|(possessive)] [时候|shíhou|when] [九千，|jiǔqiān,|9000,] [听说|tīngshuō|heard] [现在|xiànzài|now] [卖|mài|sells for] [八千|bāqiān|8000] [左右。|zuǒyòu.|around.]</div>
          <div class="sent-en">W: My laptop is too old — I want to change it. What kind should I buy?<br>M: Mine is good — not big, convenient to carry.<br>W: Expensive?<br>M: A bit — I bought it for 9000 last year; I heard it's around 8000 now.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的|nánde|the man’s] [的|de|(possessive)] [电脑，|diànnǎo,|computer,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man's computer?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[比以前便宜了|bǐ yǐqián piányi le|cheaper than before]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[太旧了|tài jiù le|too old]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[又大又方便|yòu dà yòu fāngbiàn|big and convenient]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[去年|qùnián|Last year] [九千，|jiǔ qiān,|9000,] [现在|xiànzài|now] [八千|bā qiān|8000] [左右|zuǒyòu|or so] → [便宜|piányi|cheaper] [了。|le|(change)]</div>
        </div>
        <div class="q" id="L11-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [周先生，|Zhōu xiānsheng,|Mr. Zhou,] [我|wǒ|my] [公司|gōngsī|company] [突然|tūrán|suddenly] [有|yǒu|has] [事，|shì,|something,] [您|nín|you] [能|néng|can] [帮|bāng|help] [我|wǒ|me] [去|qù|go] [接|jiē|pick up] [一下|yíxià|a bit] [孩子|háizi|child] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [没问题，|méi wèntí,|No problem,] [我|wǒ|I] [带|dài|take] [她|tā|her] [来|lái|come to] [我家|wǒ jiā|my home] [吃|chī|eat] [晚饭。|wǎnfàn.|dinner.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好的，|hǎo de,|OK,] [太|tài|so] [谢谢|xièxie|thank] [你|nǐ|you] [了，|le,|,] [我|wǒ|I] [八点|bā diǎn|8 o'clock] [左右|zuǒyòu|around] [去|qù|go] [接|jiē|pick up] [她|tā|her] [回来。|huílái.|back.]</div>
          <div class="zh stem">[男：|Nán:|M:] [别客气，|bié kèqi,|You're welcome,] [你|nǐ|you] [不|bù|also] [也|yě|also] [总是|zǒngshì|always] [帮|bāng|help] [我|wǒ|me] [照顾|zhàogù|take care of] [小狗|xiǎogǒu|puppy] [吗？|ma?|(question)]</div>
          <div class="sent-en">W: Mr. Zhou, something suddenly came up at my company — can you help pick up my child?<br>M: No problem — I'll bring her to my home for dinner.<br>W: OK, thanks so much. I'll pick her up around 8.<br>M: You're welcome — don't you always help take care of my puppy?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[来周先生家吃晚饭|lái Zhōu xiānsheng jiā chī wǎnfàn|comes to Mr. Zhou's for dinner]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[每天八点左右下班|měitiān bā diǎn zuǒyòu xiàbān|gets off around 8 every day]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[总是照顾周先生的小狗|zǒngshì zhàogù Zhōu xiānsheng de xiǎogǒu|always takes care of Mr. Zhou's puppy]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[你|nǐ|Don’t you] [不也|bù yě|(also)] [总是|zǒngshì|always] [帮|bāng|help] [我|wǒ|me] [照顾|zhàogù|take care of] [小狗|xiǎogǒu|the puppy] [吗？|ma?|(rhetorical)]」</div>
        </div>
        <div class="q" id="L11-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [妈，|mā,|Mom,] [我|wǒ|I] [跟|gēn|with] [同学|tóngxué|classmates] [去|qù|go] [打篮球。|dǎ lánqiú.|play basketball.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [明天|míngtiān|tomorrow] [不是|bú shì|aren't] [还要|háiyào|still need to] [考试|kǎoshì|take an exam] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [没关系，|méi guānxi,|It's OK,] [我|wǒ|I] [已经|yǐjīng|already] [复习|fùxí|reviewed] [好|hǎo|well] [了，|le,|,] [玩儿|wánr|play] [一会儿|yíhuìr|a while] [就|jiù|then] [回来。|huílái.|come back.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好吧，|hǎo ba,|OK,] [你|nǐ|your] [的|de|(possessive)] [电脑|diànnǎo|computer] [关|guān|turned off] [了|le|(past)] [没有？|méiyǒu?|or not?]</div>
          <div class="sent-en">M: Mom, I'm going to play basketball with classmates.<br>W: Don't you have an exam tomorrow?<br>M: It's OK, I've already reviewed — I'll be back after playing a while.<br>W: Alright. Have you turned off your computer?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [要|yào|is going to] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What is the man going to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[玩儿电脑|wánr diànnǎo|play on the computer]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[打篮球|dǎ lánqiú|play basketball]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[复习考试|fùxí kǎoshì|review for the exam]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|I] [跟|gēn|with] [同学|tóngxué|classmates] [去|qù|go] [打篮球|dǎ lánqiú|to play basketball]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L11-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L11-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[都|dōu|It's] [这么|zhème|so] [晚|wǎn|late] [了，|le,|,] [今天|jīntiān|today] [别|bié|don't] [看书|kàn shū|read] [了，|le,|,] [快|kuài|quickly] [睡觉|shuìjiào|sleep] [吧。|ba.|(suggestion)]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[你|nǐ|you] [什么时候|shénme shíhou|when] [来|lái|come] [找|zhǎo|find] [我，|wǒ,|me,] [我们|wǒmen|we] [一起|yìqǐ|together] [去|qù|go to] [图书馆|túshūguǎn|library] [吧。|ba.|(suggestion)]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[我|wǒ|I] [昨天|zuótiān|yesterday] [没|méi|not] [来，|lái,|come,] [把|bǎ|(BA)] [你|nǐ|your] [的|de|(possessive)] [笔记本|bǐjìběn|notebook] [借|jiè|lend] [我|wǒ|me] [看看|kàn kan|take a look] [吧。|ba.|(suggestion)]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[我|wǒ|I] [今天|jīntiān|today] [是|shì|am] [开车|kāichē|driving] [来|lái|came] [的，|de,|,] [你们|nǐmen|you] [喝|hē|drink] [吧。|ba.|(suggestion)]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[不是，|bú shì,|No,] [我|wǒ|I] [去|qù|go to] [参加|cānjiā|attend] [一个|yí ge|a] [会议，|huìyì,|meeting,] [下星期三|xià xīngqī sān|next Wednesday] [回来。|huílái.|come back.]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [去|qù|go] [那儿|nàr|there] [吗？|ma?|(question)] （E）</div>
          <div class="sent-en">Do you know how to get there? — (E) Of course. We take the bus first, then transfer to the subway.</div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L11-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[中午|zhōngwǔ|noon] [吃完饭，|chī wán fàn,|after eating,] [一点|yì diǎn|1 o'clock] [左右，|zuǒyòu,|around,] [怎么样？|zěnmeyàng?|how about?] （<span class="blank">　</span>）</div>
          <div class="sent-en">After lunch, around 1 o'clock — how about that?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L11-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[你|nǐ|you] [带|dài|bringing] [这么多|zhème duō|so many] [东西，|dōngxi,|things,] [又|yòu|again] [要|yào|going to] [出去|chūqù|go out] [旅游|lǚyóu|travel] [吗？|ma?|(question)] （<span class="blank">　</span>）</div>
          <div class="sent-en">You're bringing so many things — going traveling again?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L11-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[我|wǒ|I] [习惯|xíguàn|am used to] [睡觉|shuìjiào|sleeping] [以前|yǐqián|before] [看|kàn|reading] [会儿|huìr|a while] [书|shū|book] [了，|le,|,] [不|bù|not] [看书|kàn shū|read] [我|wǒ|I] [睡不着。|shuì bu zháo.|can't sleep.] （<span class="blank">　</span>）</div>
          <div class="sent-en">I'm used to reading a while before sleeping — I can't sleep without reading.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L11-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[周经理，|Zhōu jīnglǐ,|Manager Zhou,] [您|nín|you] [怎么|zěnme|why] [一口|yì kǒu|one mouthful] [酒|jiǔ|wine] [都|dōu|even] [不|bù|not] [喝？|hē?|drink?] （<span class="blank">　</span>）</div>
          <div class="sent-en">Manager Zhou, why aren't you drinking any wine?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L11-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[对不起，|duìbuqǐ,|Sorry,] [我|wǒ|I] [忘|wàng|forgot] [带|dài|to bring] [了，|le,|,] [明天|míngtiān|tomorrow] [给|gěi|to] [你|nǐ|you] [吧。|ba.|(suggestion)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Sorry, I forgot to bring it — I'll give it to you tomorrow.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L11-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L11-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[结束|jiéshù|end]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[图书馆|túshūguǎn|library]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[地铁|dìtiě|subway]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[习惯|xíguàn|habit]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[关|guān|turn off]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[她|tā|she] [说话|shuōhuà|speaks] [的|de|(possessive)] （E [声音|shēngyīn|voice]） [多|duō|how] [好听|hǎotīng|nice] [啊！|a!|!]</div>
          <div class="sent-en">Her voice is so nice!</div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L11-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[我们|wǒmen|we] [一会儿|yíhuìr|in a moment] [在|zài|at] （<span class="blank">　</span>） [门口|ménkǒu|entrance] [见面|jiànmiàn|meet] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">Let's meet at the library entrance in a moment.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L11-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[你|nǐ|you] [去|qù|go to] [经理|jīnglǐ|manager] [的|de|(possessive)] [办公室|bàngōngshì|office] [把|bǎ|(BA)] [灯|dēng|lights] （<span class="blank">　</span>） [了。|le.|(change)]</div>
          <div class="sent-en">Go to the manager's office and turn off the lights.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L11-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[我|wǒ|I] [想|xiǎng|want to] [住在|zhù zài|live near] （<span class="blank">　</span>） [站|zhàn|station] [附近，|fùjìn,|nearby,] [这样|zhèyàng|this way] [去|qù|to] [别|bié|other] [的|de|(possessive)] [地方|dìfang|places] [很|hěn|very] [方便。|fāngbiàn.|convenient.]</div>
          <div class="sent-en">I want to live near a subway station, so it's convenient to go elsewhere.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L11-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [今天|jīntiān|today] [晚上|wǎnshang|evening] [的|de|(possessive)] [音乐会|yīnyuèhuì|concert] [几点|jǐ diǎn|what time] （<span class="blank">　</span>）？</div>
          <div class="zh">[B：|B:|B:] [十点|shí diǎn|10 o'clock] [左右，|zuǒyòu,|around,] [你|nǐ|you] [还有|háiyǒu|still have] [事情|shìqing|things] [吗？|ma?|(question)]</div>
          <div class="sent-en">A: What time does tonight's concert end?<br>B: Around 10. Do you have other plans?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L11-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [给|gěi|for] [你|nǐ|you] [买|mǎi|buy] [件|jiàn|(MW)] [衬衫|chènshān|shirt] [吧，|ba,|,] [在|zài|at] [银行|yínháng|bank] [上班|shàngbān|work] [穿|chuān|wear] [衬衫|chènshān|shirt] [好|hǎo|better] [一些。|yìxiē.|a bit.]</div>
          <div class="zh">[B：|B:|B:] [我|wǒ|I] [还|hái|still] [不|bù|not] [太|tài|quite] （<span class="blank">　</span>） [穿|chuān|wear] [衬衫。|chènshān.|shirts.]</div>
          <div class="sent-en">A: Let me buy you a shirt — it's better to wear a shirt at the bank.<br>B: I'm still not quite used to wearing shirts.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L11-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L11-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[我|wǒ|I] [每天|měitiān|every day] [下班|xiàbān|after work] [都|dōu|all] [坐|zuò|take] [地铁|dìtiě|subway] [回家，|huí jiā,|home,] [在|zài|on] [地铁上|dìtiě shang|the subway,] [我|wǒ|I] [更|gèng|more] [喜欢|xǐhuan|like] [站着，|zhàn zhe,|standing,] [因为|yīnwèi|because] [我|wǒ|I] [已经|yǐjīng|already] [在|zài|at] [办公室|bàngōngshì|office] [里|li|in] [坐|zuò|sat] [了|le|(past)] [一天|yì tiān|a day] [了。|le.|(change)]</div>
          <div class="sent-en">Every day after work I take the subway home. On the subway I prefer standing because I've already sat in the office for a whole day.</div>
          <div class="zh ask">★ [我|wǒ|Why am I] [为什么|wèishénme|(why)] [在|zài|on] [地铁|dìtiě|the subway] [上|shàng|(on)] [站|zhàn|standing] [着？|zhe?|(progressive)?]</div>
          <div class="sent-en">★ Why am I standing on the subway?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[地铁上人很多|dìtiě shang rén hěn duō|the subway is crowded]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[我不累|wǒ bú lèi|I'm not tired]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[我坐了一天了|wǒ zuò le yì tiān le|I've sat all day]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[已经|yǐjīng|already] [在|zài|in] [办公室|bàngōngshì|the office] [里|li|(inside)] [坐|zuò|sat] [了|le|(past)] [一天|yì tiān|all day] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L11-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[看书|kàn shū|When reading] [时|shí|when] [会|huì|will] [看到|kàndào|see] [一些|yìxiē|some] [历史上|lìshǐ shang|in history] [的|de|(possessive)] [人|rén|people] [或者|huòzhě|or] [国家|guójiā|countries] [的|de|(possessive)] [名字，|míngzi,|names,] [这些|zhèxiē|these] [字|zì|characters] [现在|xiànzài|now] [很多|hěnduō|many] [都|dōu|all] [不|bù|not] [用|yòng|used] [了，|le,|,] [想要|xiǎngyào|wanting] [知道|zhīdào|to know] [这些|zhèxiē|these] [字|zì|characters] [的|de|(possessive)] [读音|dúyīn|pronunciation] [和|hé|and] [意思|yìsi|meaning] [就|jiù|then] [要|yào|need] [字典|zìdiǎn|dictionary] [的|de|(possessive)] [帮助，|bāngzhù,|help,] [所以|suǒyǐ|so] [有本|yǒu běn|having a] [字典|zìdiǎn|dictionary] [很|hěn|very] [方便。|fāngbiàn.|convenient.]</div>
          <div class="sent-en">When reading you'll see names of historical people or countries — many of these characters aren't used now. To know their pronunciation and meaning you need a dictionary, so having one is very convenient.</div>
          <div class="zh ask">★ [看书|kàn shū|When reading] [时|shí|(when)] [会|huì|you’ll] [看到：|kàndào:|see:]</div>
          <div class="sent-en">★ When reading, you'll see: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[不认识的字|bú rènshi de zì|unfamiliar characters]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[现在的名人|xiànzài de míngrén|current famous people]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[汉字的读音|Hànzì de dúyīn|pronunciation of characters]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[这些|zhèxiē|these] [字|zì|characters] [现在|xiànzài|now] [很多|hěnduō|many] [都|dōu|all] [不|bù|not] [用|yòng|used] [了|le|(change)]」→ [不|bù|can’t] [认识|rènshi|recognize] [的|de|(possessive)] [字。|zì|characters.]</div>
        </div>
        <div class="q" id="L11-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[中国|Zhōngguó|China] [有|yǒu|has] [一句话|yí jù huà|a saying] [叫|jiào|called] [“有借有还，|“yǒu jiè yǒu huán,|"borrow and return,] [再借不难”，|zài jiè bù nán”,|borrowing again is easy",] [是|shì|means] [说|shuō|saying] [向|xiàng|from] [别人|biérén|others] [借|jiè|borrowed] [的|de|(possessive)] [东西，|dōngxi,|things,] [用完|yòng wán|after using] [就|jiù|then] [要|yào|need to] [还，|huán,|return,] [这样|zhèyàng|this way] [下次|xià cì|next time] [你|nǐ|you] [再|zài|again] [借|jiè|borrow] [东西|dōngxi|things] [的|de|(possessive)] [时候，|shíhou,|when,] [他们|tāmen|they] [还|hái|still] [会|huì|will] [借给|jiè gěi|lend to] [你。|nǐ.|you.]</div>
          <div class="sent-en">There's a Chinese saying "borrow and return, borrowing again is easy" — it means if you return things you borrowed, people will still lend to you next time.</div>
          <div class="zh ask">★ [借|jiè|When you borrow] [了|le|(past)] [别人|biérén|someone else’s] [的|de|(possessive)] [东西：|dōngxi:|things:]</div>
          <div class="sent-en">★ When you borrow someone else's things: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[别用太长时间|bié yòng tài cháng shíjiān|don't use it too long]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[要记得还|yào jìde huán|remember to return it]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不能再借|bùnéng zài jiè|cannot borrow again]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[用完|yòng wán|After using it] [就|jiù|you should] [要|yào|(should)] [还|huán|return it]」。</div>
        </div>
        <div class="q" id="L11-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[我|wǒ|my] [爸爸妈妈|bàba māma|parents] [都|dōu|both] [是|shì|are] [北方人，|běifāng rén,|Northerners,] [但是|dànshì|but] [我|wǒ|I] [一直|yìzhí|always] [住在|zhù zài|lived in] [南方，|nánfāng,|the South,] [所以|suǒyǐ|so] [没|méi|never] [见过|jiàn guò|seen] [雪。|xuě.|snow.] [搬到|bān dào|After moving to] [北京|Běijīng|Beijing] [以后，|yǐhòu,|,] [虽然|suīrán|although] [这儿|zhèr|here] [的|de|(possessive)] [天气|tiānqì|weather] [很冷，|hěn lěng,|is very cold,] [我|wǒ|I] [还|hái|still] [不太|bú tài|not quite] [习惯，|xíguàn,|used to it,] [但是|dànshì|but] [我|wǒ|I] [见到|jiàndào|saw] [雪|xuě|snow] [了，|le,|,] [我|wǒ|I] [很|hěn|very] [高兴。|gāoxìng.|happy.]</div>
          <div class="sent-en">My parents are both Northerners, but I always lived in the South, so I'd never seen snow. After moving to Beijing — although it's very cold and I'm not used to it — I saw snow, and I'm very happy.</div>
          <div class="zh ask">★ [她：|tā:|She:]</div>
          <div class="sent-en">★ She: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不想搬家|bù xiǎng bānjiā|doesn't want to move]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[见到雪了|jiàndào xuě le|has seen snow]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[习惯北京的天气|xíguàn Běijīng de tiānqì|used to Beijing's weather]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|I] [见到|jiàndào|saw] [雪|xuě|snow] [了，|le,|(change),] [我|wǒ|I] [很|hěn|very] [高兴|gāoxìng|happy]」。</div>
        </div>
        <div class="q" id="L11-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[下班后，|xiàbān hòu,|After work,] [我们|wǒmen|we] [一起|yìqǐ|together] [去|qù|go] [喝|hē|drink] [啤酒|píjiǔ|beer] [吧，|ba,|,] [就|jiù|just] [在|zài|at] [公司|gōngsī|company] [旁边，|pángbiān,|next to,] [以前|yǐqián|before] [是|shì|was] [六十元|liùshí yuán|60 yuan] [一个人，|yí ge rén,|per person,] [现在|xiànzài|now] [是|shì|is] [三十元|sānshí yuán|30 yuan] [一个人，|yí ge rén,|per person,] [想|xiǎng|want to] [喝|hē|drink] [几瓶|jǐ píng|how many bottles] [就|jiù|then] [可以|kěyǐ|can] [喝|hē|drink] [几瓶，|jǐ píng,|that many bottles,] [还|hái|also] [送|sòng|give] [一些|yìxiē|some] [吃的。|chī de.|food.] [你|nǐ|your] [那个|nàge|that] [朋友|péngyou|friend] [姓|xìng|surname] [什么，|shénme,|what,] [我|wǒ|I] [忘记|wàngjì|forgot] [了，|le,|,] [叫|jiào|call] [他|tā|him] [也|yě|also] [来|lái|come] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">After work let's drink beer — right next to the company. It used to be 60 yuan per person, now 30, drink as many bottles as you want, and they give some food. What's your friend's surname? I forgot. Invite him too.</div>
          <div class="zh ask">★ [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道：|zhīdào:|know:]</div>
          <div class="sent-en">★ From this passage, we can know: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[我忘记我朋友的名字了|wǒ wàngjì wǒ péngyou de míngzi le|I forgot my friend's name]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[三十元可以喝一瓶啤酒|sānshí yuán kěyǐ hē yì píng píjiǔ|30 yuan for one bottle of beer]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[喝啤酒比以前便宜了|hē píjiǔ bǐ yǐqián piányi le|drinking beer is cheaper than before]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[以前|yǐqián|Before] [六十，|liùshí,|60,] [现在|xiànzài|now] [三十|sānshí|30] → [便宜|piányi|cheaper] [了。|le|(change)]</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L11-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L11-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[左右|zuǒyòu|around] [上地铁|shàng dìtiě|get on the subway] [我每天|wǒ měitiān|I every day] [七点|qī diǎn|7 o'clock]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|I] [每天|měitiān|every day] [七点|qī diǎn|around 7] [左右|zuǒyòu|(around)] [上|shàng|get on] [地铁。|dìtiě|the subway.]<div class="sent-en">I get on the subway around 7 every day.</div></div>
        </div>
        <div class="write-item" id="L11-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[几点|jǐ diǎn|what time] [图书馆|túshūguǎn|library] [关门|guānmén|close]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[图书馆|túshūguǎn|What time does the library] [几点|jǐ diǎn|(what time)] [关门？|guānmén|close?]<div class="sent-en">What time does the library close?</div></div>
        </div>
        <div class="write-item" id="L11-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[喝了|hē le|drank] [我昨天|wǒ zuótiān|I yesterday] [啤酒|píjiǔ|beer] [两瓶|liǎng píng|two bottles]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|I] [昨天|zuótiān|yesterday] [喝|hē|drank] [了|le|(past)] [两瓶|liǎng píng|two bottles of] [啤酒。|píjiǔ|beer.]<div class="sent-en">I drank two bottles of beer yesterday.</div></div>
        </div>
        <div class="write-item" id="L11-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[参加|cānjiā|participate in] [运动会|yùndònghuì|sports meet] [今年的|jīnnián de|this year's] [你|nǐ|you] [吗|ma|(question)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|Are you] [参加|cānjiā|participating in] [今年|jīnnián|this year’s] [的|de|(possessive)] [运动会|yùndònghuì|sports meet] [吗？|ma?|(question)]<div class="sent-en">Are you participating in this year's sports meet?</div></div>
        </div>
        <div class="write-item" id="L11-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[别|bié|don't] [忘了|wàng le|forget] [手机|shǒujī|phone] [你|nǐ|you] [把|bǎ|(BA)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|Don’t] [别|bié|(don’t)] [把|bǎ|(BA)] [手机|shǒujī|your phone] [忘|wàng|forget] [了。|le|(change)]<div class="sent-en">Don't forget your phone.</div></div>
        </div>

        <h4 id="L11-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L11-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[这个|zhège|this] [笔记|bǐjì|notebook] <span class="blank-input"><span class="input-py">běn</span><input type="text" data-ans="本"></span> [电脑|diànnǎo|computer] [太贵|tài guì|too expensive] [了。|le.|(change)]</div>
          <div class="sent-en">This laptop is too expensive.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[本|běn|(as in 笔记本 "notebook")]</span></div>
        </div>
        <div class="write-item" id="L11-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[早睡早起|zǎo shuì zǎo qǐ|early to bed early to rise] [是|shì|is] [一个|yí ge|a] [好|hǎo|good] <span class="blank-input"><span class="input-py">xí</span><input type="text" data-ans="习"></span> [惯。|guàn.|habit.]</div>
          <div class="sent-en">Early to bed and early to rise is a good habit.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[习|xí|habit]（[习惯|xíguàn|habit]）</span></div>
        </div>
        <div class="write-item" id="L11-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[今天的|jīntiān de|today's] <span class="blank-input"><span class="input-py">huì</span><input type="text" data-ans="会"></span> [议|yì|meeting] [几点|jǐ diǎn|what time] [结束？|jiéshù?|end?]</div>
          <div class="sent-en">What time does today's meeting end?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[会|huì|meeting]（[会议|huìyì|meeting]）</span></div>
        </div>
        <div class="write-item" id="L11-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[我|wǒ|I] [从|cóng|from] [图书馆|túshūguǎn|library] [借了|jiè le|borrowed] [一本|yì běn|a] [英汉|Yīng-Hàn|English-Chinese] <span class="blank-input"><span class="input-py">cí</span><input type="text" data-ans="词"></span> [典。|diǎn.|dictionary.]</div>
          <div class="sent-en">I borrowed an English-Chinese dictionary from the library.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[词|cí|word]（[词典|cídiǎn|dictionary]）</span></div>
        </div>
        <div class="write-item" id="L11-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[房间里|fángjiān li|in the room] [的|de|(possessive)] <span class="blank-input"><span class="input-py">dēng</span><input type="text" data-ans="灯"></span> [怎么|zěnme|why] [还|hái|still] [开着|kāi zhe|is on] [呢？|ne?|(question)]</div>
          <div class="sent-en">Why is the light in the room still on?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[灯|dēng|lamp/light]</span></div>
        </div>

        <h4 id="L11-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L11-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[家里的|jiā li de|home's] [空|kōng|air] <span class="blank-input"><input type="text" data-ans="调"></span> [坏了，|huài le,|broke,] <span class="blank-input"><input type="text" data-ans="周"></span> [末|mò|end] [我|wǒ|I] [要|yào|need to] [叫|jiào|call] [人|rén|someone] [来|lái|to come] [看看。|kàn kan.|take a look.]</div>
          <div class="zh" style="margin-top:6px;">[周|zhōu|week]　[调|tiáo|adjust]</div>
          <div class="sent-en">The air conditioner at home broke — I need to call someone this weekend.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[调|tiáo|(as in 空调 “air conditioner”)]、[周|zhōu|(as in 周末 “weekend”)]</div>
        </div>
        <div class="write-item" id="L11-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[昨|zuó|yesterday] <span class="blank-input"><input type="text" data-ans="天"></span> [你|nǐ|you] [离开|líkāi|left] [的|de|(possessive)] [时候|shíhou|when] [忘记|wàngjì|forgot] <span class="blank-input"><input type="text" data-ans="关"></span> [灯|dēng|lights] [了。|le.|(change)]</div>
          <div class="zh" style="margin-top:6px;">[天|tiān|day]　[关|guān|close]</div>
          <div class="sent-en">When you left yesterday, you forgot to turn off the lights.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[天|tiān|(as in 今天 “today”)]、[关|guān|(as in 关门 “close”)]</div>
        </div>
        <div class="write-item" id="L11-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[你|nǐ|you] [帮|bāng|help] [我|wǒ|me] [把|bǎ|(BA)] <span class="blank-input"><input type="text" data-ans="这"></span> [本|běn|(MW)] [数学书|shùxué shū|math book] <span class="blank-input"><input type="text" data-ans="还"></span> [了|le|(change)] [吧。|ba.|(suggestion)]</div>
          <div class="zh" style="margin-top:6px;">[这|zhè|this]　[还|huán|return]</div>
          <div class="sent-en">Please help me return this math book.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[这|zhè|(as in 这个 “this”)]、[还|huán|(as in 还书 “return a book”)]</div>
        </div>
        <div class="write-item" id="L11-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh"><span class="blank-input"><input type="text" data-ans="快"></span> [点儿，|diǎnr,|Hurry,] [2 号桌|èr hào zhuō|table 2] [还|hái|still] [少|shǎo|lacks] [一双|yì shuāng|one pair] <span class="blank-input"><input type="text" data-ans="筷"></span> [子。|zi.|chopsticks.]</div>
          <div class="zh" style="margin-top:6px;">[快|kuài|fast]　[筷|kuài|chopsticks]</div>
          <div class="sent-en">Hurry — table 2 still needs a pair of chopsticks.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[快|kuài|(as in 快乐 “happy”)]、[筷|kuài|(as in 筷子 “chopsticks”)]</div>
        </div>
        <div class="write-item" id="L11-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[你看|nǐ kàn|Look] <span class="blank-input"><input type="text" data-ans="错"></span> [了，|le,|wrong,] [我|wǒ|I] <span class="blank-input"><input type="text" data-ans="借"></span> [的|de|(possessive)] [不是|bú shì|isn't] [这本|zhè běn|this] [书。|shū.|book.]</div>
          <div class="zh" style="margin-top:6px;">[错|cuò|wrong]　[借|jiè|borrow]</div>
          <div class="sent-en">You're mistaken — the book I borrowed isn't this one.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[错|cuò|(as in 不错 “not bad”)]、[借|jiè|(as in 借书 “borrow a book”)]</div>
        </div>

        <h4 id="L11-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L11-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[花|huā|flower] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[花瓶|huāpíng|vase]、[鲜花|xiānhuā|fresh flowers]</div></div>
        </div>
        <div class="write-item" id="L11-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[客|kè|guest] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[客人|kèrén|guest]、[做客|zuòkè|be a guest]</div></div>
        </div>
        <div class="write-item" id="L11-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[意|yì|meaning] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[意思|yìsi|meaning]、[愿意|yuànyì|willing]</div></div>
        </div>
        <div class="write-item" id="L11-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[帮|bāng|help] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[帮忙|bāngmáng|help]、[帮助|bāngzhù|help]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L11-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [开会|kāihuì|During the meeting] [的|de|(possessive)] [时候，|shíhou,|when,] [小丽|Xiǎolì|Xiaoli] [告诉|gàosu|tells] [周明，|Zhōu Míng,|Zhou Ming,] [王经理|Wáng jīnglǐ|Manager Wang] [两点|liǎng diǎn|2 o'clock]
            <span class="blank-input review-blank"><span class="input-py">zuǒyòu</span><input type="text" data-ans="左右"></span>
            [来了个|lái le ge|came a] [电话，|diànhuà,|call,] [说|shuō|saying] [他|tā|he] [已经|yǐjīng|already] [坐下来|zuò xiàlái|sat down] [公司|gōngsī|company] [了。|le.|(change)] [周明|Zhōu Míng|Zhou Ming] [告诉|gàosu|tells] [小丽|Xiǎolì|Xiaoli] [会议|huìyì|meeting]
            <span class="blank-input review-blank"><span class="input-py">jiéshù</span><input type="text" data-ans="结束"></span>
            [后，|hòu,|after,] [别|bié|don't]
            <span class="blank-input review-blank"><span class="input-py">wàngjì</span><input type="text" data-ans="忘记"></span>
            [把|bǎ|(BA)]
            <span class="blank-input review-blank"><span class="input-py">kōngtiáo</span><input type="text" data-ans="空调"></span>
            [关|guān|turn off] [了。|le.|(change)]
          </div>
          <div class="sent-en">During the meeting, Xiaoli told Zhou Ming that Manager Wang called around 2 o'clock, saying he had already arrived at the company. Zhou Ming told Xiaoli to remember to turn off the air conditioner after the meeting.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[左右|zuǒyòu|around]、[结束|jiéshù|end]、[忘记|wàngjì|forget]、[空调|kōngtiáo|air conditioner]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [今天|jīntiān|today] [是|shì|is] [爸爸|bàba|Dad] [的|de|(possessive)] [生日，|shēngrì,|birthday,] [所以|suǒyǐ|so] [妈妈|māma|Mom] [做|zuò|made] [了|le|(past)] [很多|hěnduō|many] [菜。|cài.|dishes.] [妈妈|māma|Mom] [让|ràng|asks] [儿子|érzi|son] [去|qù|to] [拿|ná|get]
            <span class="blank-input review-blank"><span class="input-py">kuàizi</span><input type="text" data-ans="筷子"></span>，[还差|hái chà|still short]
            <span class="blank-input review-blank"><span class="input-py">yì shuāng</span><input type="text" data-ans="一双"></span>。
            [儿子|érzi|son] [想|xiǎng|wants] [让|ràng|let] [爸爸|bàba|Dad] [喝点儿|hē diǎnr|drink some]
            <span class="blank-input review-blank"><span class="input-py">píjiǔ</span><input type="text" data-ans="啤酒"></span>，[但是|dànshì|but] [医生|yīshēng|the doctor] [说|shuō|said] [爸爸|bàba|Dad] [一|yī|even one]
            <span class="blank-input review-blank"><span class="input-py">kǒu</span><input type="text" data-ans="口"></span>
            [酒|jiǔ|wine] [都|dōu|even] [不能|bùnéng|cannot] [喝，|hē,|drink,] [所以|suǒyǐ|so] [不能|bùnéng|cannot] [让|ràng|let] [他|tā|him] [看见|kànjiàn|see] [酒|jiǔ|wine]
            <span class="blank-input review-blank"><span class="input-py">píngzi</span><input type="text" data-ans="瓶子"></span>。
          </div>
          <div class="sent-en">Today is Dad's birthday, so Mom made many dishes. Mom asked the son to get chopsticks — still short one pair. The son wanted Dad to drink some beer, but the doctor said Dad can't drink even a sip of wine, so they can't let him see the bottles.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[筷子|kuàizi|chopsticks]、[一双|yì shuāng|one pair]、[啤酒|píjiǔ|beer]、[口|kǒu|mouthful]、[瓶子|píngzi|bottle]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[12] = {
  navLabel:'第12课',
  html: `
    <div class="lesson">
      <h2>第 12 课　把重要的东西放在我这儿吧
        <span class="title-py">Dì shí'èr kè · Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba</span>
        <small>Lesson 12 · Leave the important items with me</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L12-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图12.png" alt="听力图12" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图12.png</b></span>
        </div>

        <div class="q" id="L12-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[女1：|Nǚ1:|W1:] [你的|nǐ de|your] [腿|tuǐ|leg] [好点|hǎo diǎn|better] [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女2：|Nǚ2:|W2:] [还有点儿|hái yǒudiǎnr|still a bit] [疼。|téng.|painful.] [今天|jīntiān|today] [太阳|tàiyáng|sun] [不错，|búcuò,|is nice,] [你|nǐ|you] [带|dài|take] [我|wǒ|me] [出去|chūqù|go out] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W1: Is your leg better?<br>W2: Still a bit painful. The sun is nice today — take me out.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[一个人|yí ge rén|a person] [推着|tuī zhe|pushing] [轮椅|lúnyǐ|a wheelchair]）</div>
        </div>
        <div class="q" id="L12-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [能|néng|can] [帮|bāng|help] [我|wǒ|me] [把|bǎ|(BA)] [这些|zhèxiē|these] [行李箱|xínglixiāng|suitcases] [放到|fàng dào|put on] [上面|shàngmiàn|top] [吗？|ma?|(question)] [我|wǒ|I] [搬不动。|bān bu dòng.|can't move them.]</div>
          <div class="zh stem">[男：|Nán:|M:] [可以，|kěyǐ,|Sure,] [我|wǒ|I] [来|lái|come] [搬|bān|move] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W: Can you help me put these suitcases up there? I can't move them.<br>M: Sure, let me do it.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[行李箱|xínglixiāng|a suitcase]）</div>
        </div>
        <div class="q" id="L12-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [对不起，|duìbuqǐ,|Sorry,] [先生，|xiānsheng,|sir,] [飞机|fēijī|plane] [马上|mǎshàng|is about to] [就|jiù|then] [要|yào|take off] [起飞|qǐfēi|take off] [了，|le,|,] [请|qǐng|please] [您|nín|you] [关上|guān shàng|turn off] [手机。|shǒujī.|phone.]</div>
          <div class="zh stem">[男：|Nán:|M:] [好的，|hǎo de,|OK,] [我|wǒ|I] [知道|zhīdào|know] [了。|le.|(change)]</div>
          <div class="sent-en">W: Sorry sir, the plane is about to take off — please turn off your phone.<br>M: OK, I know.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[飞机|fēijī|On the plane] [上|shàng|(board)]）</div>
        </div>
        <div class="q" id="L12-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [黑板上|hēibǎn shang|on the blackboard] [的|de|(possessive)] [那个|nàge|that] [字|zì|character] [怎么|zěnme|how] [读？|dú?|read?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [也|yě|also] [不|bù|not] [认识，|rènshi,|know,] [我|wǒ|I] [查|chá|look up] [一下|yíxià|a bit] [字典，|zìdiǎn,|dictionary,] [找到|zhǎo dào|find] [了|le|(past)] [告诉|gàosu|tell] [你。|nǐ.|you.]</div>
          <div class="sent-en">W: How do you read that character on the blackboard?<br>M: I don't know either — let me check the dictionary and tell you when I find it.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[黑板|hēibǎn|a blackboard]）</div>
        </div>
        <div class="q" id="L12-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [会议|huìyì|meeting] [早就|zǎo jiù|long ago] [开始|kāishǐ|started] [了，|le,|,] [你|nǐ|you] [怎么|zěnme|why] [现在|xiànzài|now] [还|hái|still] [没|méi|not] [来？|lái?|come?]</div>
          <div class="zh stem">[男：|Nán:|M:] [别|bié|don't] [生气，|shēngqì,|be angry,] [我|wǒ|I] [十分钟|shí fēnzhōng|10 minutes] [就|jiù|then] [到。|dào.|arrive.]</div>
          <div class="sent-en">W: The meeting started long ago — why aren't you here yet?<br>M: Don't be angry, I'll be there in 10 minutes.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[一个人|yí ge rén|a person] [在|zài|is] [打电话|dǎ diànhuà|on the phone] / [看表|kàn biǎo|checking the time]）</div>
        </div>

        <h4 id="L12-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L12-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[我|wǒ|my] [的|de|(possessive)] [包|bāo|bag] [忘|wàng|forgot] [在|zài|in] [出租车|chūzūchē|taxi] [上|shàng|on] [了，|le,|,] [钱包、|qiánbāo,|wallet,] [手机|shǒujī|phone] [和|hé|and] [护照|hùzhào|passport] [都|dōu|all] [在|zài|are] [里面。|lǐmiàn.|inside.]</div>
          <div class="sent-en">I left my bag in the taxi — wallet, phone and passport are all inside.</div>
          <div class="zh stem">★ [他|tā|he] [是|shì|is] [出租车|chūzūchē|taxi] [司机。|sījī.|driver.]</div>
          <div class="sent-en">★ He is a taxi driver.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[他|tā|He] [是|shì|is] [乘客，|chéngkè,|a passenger,] [不是|bú shì|not] [司机。|sījī|the driver.]" data-expl-en="He is a passenger, not a driver."></div>
        </div>
        <div class="q" id="L12-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[我|wǒ|I] [很|hěn|very] [喜欢|xǐhuan|like] [画画儿，|huà huàr,|drawing,] [但是|dànshì|but] [没有|méiyǒu|no] [人|rén|one] [教过|jiāo guò|taught] [我，|wǒ,|me,] [我|wǒ|I] [都|dōu|all] [是|shì|am] [自己|zìjǐ|self] [学|xué|learned] [的，|de,|,] [你|nǐ|you] [看|kàn|look] [这个|zhège|this] [小狗|xiǎogǒu|puppy] [就是|jiùshì|is] [我|wǒ|I] [画|huà|drew] [的，|de,|,] [可爱|kě'ài|cute] [吗？|ma?|(question)]</div>
          <div class="sent-en">I love drawing, but no one taught me — I learned by myself. Look, this puppy is what I drew. Cute?</div>
          <div class="zh stem">★ [他|tā|he] [不|bù|not] [喜欢|xǐhuan|like] [跟|gēn|with] [老师|lǎoshī|teacher] [学|xué|learn] [画画儿。|huà huàr.|drawing.]</div>
          <div class="sent-en">★ He doesn't like learning drawing from a teacher.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [只|zhǐ|only] [说|shuō|says] [没人|méi rén|no one] [教过|jiāo guò|taught] [他，|tā,|him,] [自己|zìjǐ|he] [学|xué|learned] [的，|de,|by himself,] [并|bìng|and does] [没有|méiyǒu|not] [说|shuō|say] [不|bù|doesn’t] [喜欢|xǐhuan|like] [跟|gēn|with] [老师|lǎoshī|a teacher] [学。|xué|to learn.]" data-expl-en="The text only says no one taught him; it doesn't say he dislikes learning from a teacher."></div>
        </div>
        <div class="q" id="L12-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[老师，|lǎoshī,|Teacher,] [您|nín|you] [昨天|zuótiān|yesterday] [讲|jiǎng|explained] [的|de|(possessive)] [那|nà|those] [几个|jǐ ge|few] [题，|tí,|questions,] [我|wǒ|I] [今天|jīntiān|today] [就|jiù|then] [忘|wàng|forgot] [了，|le,|,] [您|nín|you] [能|néng|can] [再|zài|again] [教|jiāo|teach] [我|wǒ|me] [一次|yí cì|once] [吗？|ma?|(question)]</div>
          <div class="sent-en">Teacher, I already forgot those few questions you explained yesterday — can you teach me once more?</div>
          <div class="zh stem">★ [老师|lǎoshī|Teacher] [昨天|zuótiān|yesterday] [没|méi|didn't] [讲|jiǎng|explain] [明白。|míngbai.|clearly.]</div>
          <div class="sent-en">★ The teacher didn't explain clearly yesterday.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It’s] [学生|xuéshēng|the student] [自己|zìjǐ|himself] [忘|wàng|who forgot,] [了，|le,|(change),] [不是|bú shì|not] [老师|lǎoshī|the teacher] [没|méi|not] [讲|jiǎng|explaining] [明白。|míngbai|clearly.]" data-expl-en="The student forgot; the teacher explained clearly."></div>
        </div>
        <div class="q" id="L12-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[爸爸|bàba|Dad] [找了|zhǎo le|looked] [很长时间|hěn cháng shíjiān|for a long time] [都|dōu|all] [没|méi|not] [找到|zhǎo dào|find] [他的|tā de|his] [护照，|hùzhào,|passport,] [我|wǒ|I] [今天|jīntiān|today] [上午|shàngwǔ|morning] [帮|bāng|help] [他|tā|him] [洗|xǐ|wash] [衣服|yīfu|clothes] [的|de|(possessive)] [时候，|shíhou,|when,] [在|zài|in] [他|tā|his] [那条|nà tiáo|that] [蓝色|lánsè|blue] [的|de|(possessive)] [裤子|kùzi|trousers] [里|li|inside] [找到|zhǎo dào|found] [了。|le.|(change)]</div>
          <div class="sent-en">Dad looked for his passport for a long time and couldn't find it. This morning when I helped him wash clothes, I found it in his blue trousers.</div>
          <div class="zh stem">★ [爸爸|bàba|Dad] [洗衣服|xǐ yīfu|washing clothes] [的|de|(possessive)] [时候|shíhou|when] [发现|fāxiàn|discovered] [了|le|(past)] [护照。|hùzhào.|passport.]</div>
          <div class="sent-en">★ Dad discovered the passport when washing clothes.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It was] [我|wǒ|I] [洗衣服|xǐ yīfu|doing laundry] [时|shí|when] [发现|fāxiàn|found] [的，|de,|(it),] [不是|bú shì|not] [爸爸。|bàba|Dad.]" data-expl-en="I found it when washing clothes, not Dad."></div>
        </div>
        <div class="q" id="L12-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[我们|wǒmen|we] [需要|xūyào|need to] [换|huàn|change] [新的|xīn de|new] [桌子|zhuōzi|tables] [和|hé|and] [椅子，|yǐzi,|chairs,] [你|nǐ|you] [什么时候|shénme shíhou|when] [有|yǒu|have] [时间，|shíjiān,|time,] [跟|gēn|with] [我|wǒ|me] [一起|yìqǐ|together] [去|qù|go] [看看？|kàn kan?|take a look?]</div>
          <div class="sent-en">We need to replace the tables and chairs — when do you have time to go look with me?</div>
          <div class="zh stem">★ [桌子|zhuōzi|tables] [和|hé|and] [椅子|yǐzi|chairs] [都|dōu|all] [旧|jiù|old] [了。|le.|(change)]</div>
          <div class="sent-en">★ The tables and chairs are all old.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[需要|xūyào|They need] [换|huàn|to replace with] [新|xīn|new] [的，|de,|(ones),] [说明|shuōmíng|showing] [旧|jiù|the old ones] [的|de|(nominalizer)] [都|dōu|are all] [旧|jiù|worn out] [了。|le|(change)]" data-expl-en="Need to replace = the old ones are worn out."></div>
        </div>

        <h4 id="L12-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L12-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [喂，|wèi,|Hello,] [我|wǒ|I] [已经|yǐjīng|already] [到|dào|arrived at] [公园|gōngyuán|park] [西门|xīmén|west gate] [了，|le,|,] [你|nǐ|you] [是|shì|are] [在|zài|at] [北门|běimén|north gate] [吗，|ma,|(question)] [我|wǒ|I] [过去|guòqù|go over] [找|zhǎo|find] [你|nǐ|you] [吧？|ba?|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [别|bié|don't] [过来|guòlái|come over] [了，|le,|,] [我|wǒ|I] [快|kuài|soon] [到|dào|arrive at] [西门|xīmén|west gate] [了。|le.|(change)]</div>
          <div class="sent-en">W: Hello, I'm already at the park's west gate — are you at the north gate? Let me come find you.<br>M: Don't come over — I'm almost at the west gate.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [现在|xiànzài|now] [在|zài|is] [哪儿？|nǎr?|where?]</div>
          <div class="sent-en">Q: Where is the woman now?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[公园里边|gōngyuán lǐbian|inside the park]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[公园西门|gōngyuán xīmén|park west gate]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[公园北门|gōngyuán běimén|park north gate]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|I] [已经|yǐjīng|already] [到|dào|arrived at] [公园|gōngyuán|the park’s] [西门|xīmén|west gate] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L12-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [决定|juédìng|decided] [从|cóng|from] [明天|míngtiān|tomorrow] [开始|kāishǐ|start] [每天|měitiān|every day] [跑|pǎo|run] [一千米。|yìqiānmǐ.|1000 meters.]</div>
          <div class="zh stem">[男：|Nán:|M:] [真的|zhēn de|really] [吗？|ma?|(question)] [太阳|tàiyáng|sun] [从|cóng|from] [西边|xībiān|west] [出来|chūlái|come out] [了？|le?|(change)]</div>
          <div class="sent-en">W: I've decided to run 1000 meters every day starting tomorrow.<br>M: Really? Is the sun rising from the west?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [是|shì|(is)] [什么|shénme|what] [意思？|yìsi?|meaning?]</div>
          <div class="sent-en">Q: What does the man mean?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[太阳从西边出来|tàiyáng cóng xībiān chūlái|the sun rises from the west]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[女的不可能每天跑步|nǚde bù kěnéng měitiān pǎobù|she can't possibly run every day]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[明天要跑一千米|míngtiān yào pǎo yìqiānmǐ|will run 1000 meters tomorrow]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　“[太阳|tàiyáng|The sun] [从|cóng|rising] [西边|xībiān|in the west] [出来|chūlái|(coming out)]”[表示|biǎoshì|means] [不可能。|bù kěnéng|impossible.]</div>
        </div>
        <div class="q" id="L12-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [把|bǎ|(BA)] [护照|hùzhào|passport] [放|fàng|put] [在|zài|in] [行李箱|xínglixiāng|suitcase] [里|li|inside] [了|le|(past)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [没有，|méiyǒu,|No,] [在|zài|in] [我|wǒ|my] [包|bāo|bag] [里|li|inside] [呢，|ne,|(emphasis)] [这样|zhèyàng|this way] [拿着|ná zhe|holding] [比较|bǐjiào|relatively] [方便。|fāngbiàn.|convenient.]</div>
          <div class="sent-en">M: Did you put your passport in the suitcase?<br>W: No, it's in my bag — easier to hold this way.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [护照|hùzhào|The passport] [在|zài|is] [哪儿？|nǎr?|where?]</div>
          <div class="sent-en">Q: Where is the passport?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[行李箱里|xínglixiāng li|in the suitcase]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[包里|bāo li|in the bag]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[手里|shǒu li|in the hand]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[在|zài|It’s] [我|wǒ|my] [包|bāo|bag] [里|li|in] [呢|ne|(particle)]」。</div>
        </div>
        <div class="q" id="L12-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [请问，|qǐngwèn,|Excuse me,] [学校|xuéxiào|school] [附近|fùjìn|nearby] [有|yǒu|is there] [中国银行|Zhōngguó Yínháng|Bank of China] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [有，|yǒu,|Yes,] [出了|chū le|after exiting] [西门|xīmén|west gate,] [向|xiàng|toward] [左|zuǒ|left] [走|zǒu|walk] [两百米|liǎngbǎi mǐ|200 meters] [就|jiù|then] [能|néng|can] [看见。|kànjiàn.|see.]</div>
          <div class="sent-en">W: Excuse me, is there a Bank of China near the school?<br>M: Yes, exit the west gate, walk 200 meters left and you'll see it.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [要|yào|is going] [去|qù|to] [哪儿？|nǎr?|where?]</div>
          <div class="sent-en">Q: Where is the woman going?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[学校|xuéxiào|school]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[银行|yínháng|bank]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[西门|xīmén|west gate]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[她|tā|She] [在|zài|is] [找|zhǎo|looking for] [中国银行|Zhōngguó Yínháng|the Bank of China.]</div>
        </div>
        <div class="q" id="L12-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [火车站|huǒchēzhàn|train station] [离|lí|from] [这儿|zhèr|here] [很|hěn|very] [远，|yuǎn,|far,] [坐车|zuò chē|taking a vehicle] [不太|bú tài|not very] [方便，|fāngbiàn,|convenient,] [我|wǒ|I] [开车|kāichē|drive] [送|sòng|take] [你|nǐ|you] [去。|qù.|there.]</div>
          <div class="zh stem">[男：|Nán:|M:] [不用了，|búyòng le,|No need,] [谢谢您，|xièxie nín,|thank you,] [我|wǒ|I] [还是|háishi|still] [自己|zìjǐ|myself] [打|dǎ|hail] [出租车|chūzūchē|taxi] [去|qù|go] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W: The train station is far from here — taking a vehicle isn't convenient. I'll drive you there.<br>M: No need, thanks. I'll just take a taxi myself.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [打算|dǎsuàn|plans] [怎么|zěnme|how] [去|qù|to get to] [火车站？|huǒchē zhàn?|the train station?]</div>
          <div class="sent-en">Q: How does the man plan to get to the train station?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[开车|kāichē|drive]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[打车|dǎ chē|take a taxi]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[坐公共汽车|zuò gōnggòng qìchē|take a bus]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[自己|zìjǐ|To take] [打|dǎ|(take)] [出租车|chūzūchē|a taxi] [去|qù|(go)]」。</div>
        </div>

        <h4 id="L12-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L12-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这是|zhè shì|this is] [你|nǐ|you] [画|huà|drew] [的|de|(possessive)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [太阳|tàiyáng|sun] [是|shì|is] [我|wǒ|I] [画|huà|drew] [的，|de,|,] [小猫|xiǎomāo|kitten] [是|shì|is] [妹妹|mèimei|younger sister] [画|huà|drew] [的。|de.|(nominalizer)]</div>
          <div class="zh stem">[男：|Nán:|M:] [真|zhēn|really] [好看，|hǎokàn,|nice,] [画好|huà hǎo|finished] [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [还|hái|still] [没有，|méiyǒu,|not yet,] [我|wǒ|I] [想|xiǎng|want to] [在|zài|at] [这儿|zhèr|here] [再|zài|again] [画点儿|huà diǎnr|draw some] [花儿。|huār.|flowers.]</div>
          <div class="sent-en">M: Did you draw this?<br>W: The sun is mine, the kitten is my sister's.<br>M: Really nice. Finished?<br>W: Not yet — I want to draw some flowers here.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [还|hái|also] [准备|zhǔnbèi|plans] [画|huà|to paint] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What else does the woman plan to paint?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[太阳|tàiyáng|sun]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[小猫|xiǎomāo|kitten]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[花儿|huār|flowers]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[我|wǒ|I] [想|xiǎng|want] [在|zài|(at)] [这儿|zhèr|here] [再|zài|to paint] [画点儿|huà diǎnr|some] [花儿|huār|flowers]」。</div>
        </div>
        <div class="q" id="L12-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [吃好|chī hǎo|finished eating] [了|le|(change)] [吗？|ma?|(question)] [要不要|yào bú yào|do you want] [再|zài|again] [来点儿|lái diǎnr|some more] [米饭？|mǐfàn?|rice?]</div>
          <div class="zh stem">[男：|Nán:|M:] [不|bù|not] [吃|chī|eat] [了。|le.|(change)] [家里|jiā li|home] [还有|háiyǒu|still have] [西瓜|xīguā|watermelon] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [还有|háiyǒu|still have] [半个，|bàn ge,|half,] [你|nǐ|you] [自己|zìjǐ|yourself] [拿|ná|take] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [好的。|hǎo de.|OK.]</div>
          <div class="sent-en">W: Finished eating? Want more rice?<br>M: No more. Is there still watermelon at home?<br>W: There's half left — get it yourself.<br>M: OK.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[帮女的拿西瓜|bāng nǚde ná xīguā|helps her get watermelon]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[想再吃点儿米饭|xiǎng zài chī diǎnr mǐfàn|wants more rice]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[想吃点儿西瓜|xiǎng chī diǎnr xīguā|wants some watermelon]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[家里|jiā li|Is there] [还|hái|still] [有|yǒu|(there)] [西瓜|xīguā|watermelon] [吗？|ma?|at home?]」[表示|biǎoshì|means] [想|xiǎng|wants] [吃|chī|to eat] [西瓜。|xīguā|watermelon.]</div>
        </div>
        <div class="q" id="L12-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[男：|Nán:|M:] [喂，|wèi,|Hello,] [是|shì|is this] [小马|Xiǎo Mǎ|Xiao Ma] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是|shì|yes] [我，|wǒ,|me,] [周经理，|Zhōu jīnglǐ,|Manager Zhou,] [您|nín|you] [有|yǒu|have] [什么|shénme|what] [事？|shì?|matter?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [明天|míngtiān|tomorrow] [十点|shí diǎn|10 o'clock] [要|yào|am going to] [去|qù|go to] [火车站|huǒchēzhàn|train station] [接|jiē|pick up] [个|ge|(MW)] [人。|rén.|person.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好的，|hǎo de,|OK,] [我|wǒ|I] [知道|zhīdào|know] [了，|le,|,] [我|wǒ|I] [让|ràng|ask] [司机|sījī|driver] [明天|míngtiān|tomorrow] [九点|jiǔ diǎn|9 o'clock] [前|qián|before] [到|dào|arrive] [楼下|lóuxià|downstairs] [等|děng|wait for] [您。|nín.|you.]</div>
          <div class="sent-en">M: Hello, is this Xiao Ma?<br>W: Yes, Manager Zhou. What's up?<br>M: I'm going to the train station at 10 tomorrow to pick someone up.<br>W: OK, I know. I'll have the driver wait downstairs before 9.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [明天|míngtiān|tomorrow] [要|yào|is going to] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What is the man going to do tomorrow?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[去接人|qù jiē rén|pick someone up]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[坐火车|zuò huǒchē|take a train]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[找司机|zhǎo sījī|find a driver]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[去|qù|Go to] [火车站|huǒchē zhàn|the train station] [接|jiē|to pick up] [个|ge|(MW)] [人|rén|person]」。</div>
        </div>
        <div class="q" id="L12-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [会|huì|can] [骑|qí|ride] [自行车|zìxíngchē|bicycle] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [当然，|dāngrán,|Of course,] [我|wǒ|I] [以前|yǐqián|before] [经常|jīngcháng|often] [骑车|qí chē|rode] [去|qù|go] [上课。|shàngkè.|to class.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|then] [你|nǐ|you] [教教|jiāo jiao|teach] [我|wǒ|me] [吧，|ba,|,] [我|wǒ|I] [一直|yìzhí|always] [想|xiǎng|wanted to] [学。|xué.|learn.]</div>
          <div class="zh stem">[男：|Nán:|M:] [可以啊，|kěyǐ a,|Sure,] [你|nǐ|you] [什么时候|shénme shíhou|when] [有|yǒu|have] [时间？|shíjiān?|time?]</div>
          <div class="sent-en">W: Can you ride a bike?<br>M: Of course — I used to ride to class often.<br>W: Then teach me — I've always wanted to learn.<br>M: Sure, when do you have time?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [要|yào|is going to] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What is the man going to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[骑车去上课|qí chē qù shàngkè|ride to class]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[教女的骑车|jiāo nǚde qí chē|teach her to ride]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[学骑自行车|xué qí zìxíngchē|learn to ride]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[你|nǐ|Please] [教教|jiāo jiao|teach] [我|wǒ|me] [吧|ba|(suggestion)]」→ [他|tā|he] [教|jiāo|teaches] [她|tā|her] [骑车。|qí chē|to ride a bike.]</div>
        </div>
        <div class="q" id="L12-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [怎么|zěnme|why] [才|cái|just] [来，|lái,|come,] [都|dōu|already] [八点一刻|bā diǎn yí kè|8:15] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [对不起，|duìbuqǐ,|Sorry,] [来|lái|coming] [机场|jīchǎng|airport] [的|de|(possessive)] [路上|lù shang|on the way] [才|cái|only then] [发现|fāxiàn|discovered] [没带|méi dài|didn't bring] [护照。|hùzhào.|passport.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [出门|chūmén|leaving home] [的|de|(possessive)] [时候|shíhou|when] [你|nǐ|you] [怎么|zěnme|why] [不|bù|not] [好好儿|hǎohāor|carefully] [看看|kàn kan|look] [呢？|ne?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [一直|yìzhí|always] [给|gěi|to] [我|wǒ|me] [打电话，|dǎ diànhuà,|calling,] [我|wǒ|I] [很|hěn|very] [着急，|zháojí,|anxious,] [就|jiù|then] [出|chū|had] [了|le|(past)] [问题。|wèntí.|a problem.]</div>
          <div class="sent-en">W: Why are you so late? It's already 8:15.<br>M: Sorry — on the way to the airport I discovered I didn't bring my passport.<br>W: Why didn't you check carefully when leaving?<br>M: You kept calling me and I was anxious, so something went wrong.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|what happened to] [怎么|zěnme|the man] [了？|le?|?]</div>
          <div class="sent-en">Q: What happened to the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[来机场晚了|lái jīchǎng wǎn le|came to the airport late]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[找不到护照了|zhǎo bu dào hùzhào le|couldn't find his passport]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[忘了给女的打电话|wàng le gěi nǚde dǎ diànhuà|forgot to call her]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[发现|fāxiàn|Found] [没带|méi dài|he didn’t bring] [护照|hùzhào|his passport]」→ [找不到|zhǎo bu dào|can’t find] [护照。|hùzhào|the passport.]</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L12-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L12-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[你|nǐ|you] [怎么|zěnme|why] [现在|xiànzài|now] [才|cái|only then] [给|gěi|to] [周经理|Zhōu jīnglǐ|Manager Zhou] [写|xiě|write] [信？|xìn?|letter?]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[我|wǒ|I] [想|xiǎng|want to] [学|xué|learn] [画画儿，|huà huàr,|drawing,] [你|nǐ|you] [帮|bāng|help] [我|wǒ|me] [找|zhǎo|find] [一个|yí ge|a] [老师|lǎoshī|teacher] [教|jiāo|teach] [我|wǒ|me] [吧。|ba.|(suggestion)]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[请问|qǐngwèn|excuse me] [您|nín|you] [需要|xūyào|need] [什么|shénme|what] [帮助|bāngzhù|help] [吗？|ma?|(question)]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[你|nǐ|you] [看|kàn|look] [桌子|zhuōzi|table] [下边|xiàbiān|under] [的|de|(possessive)] [那个|nàge|that] [箱子|xiāngzi|box] [里|li|inside] [有没有？|yǒu méiyǒu?|is there?]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[我|wǒ|I] [担心|dānxīn|worry] [路上|lù shang|on the road] [车|chē|cars] [太多，|tài duō,|too many,] [不好走。|bù hǎo zǒu.|hard to go.]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [去|qù|go] [那儿|nàr|there] [吗？|ma?|(question)] （E）</div>
          <div class="sent-en">Do you know how to get there? — (E) Of course. We take the bus first, then transfer to the subway.</div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L12-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[我|wǒ|I] [找不到|zhǎo bu dào|can't find] [行李箱|xínglixiāng|suitcase] [了，|le,|,] [您|nín|you] [帮|bāng|help] [我|wǒ|me] [找找|zhǎo zhao|look for] [吧。|ba.|(suggestion)] （<span class="blank">　</span>）</div>
          <div class="sent-en">I can't find my suitcase — please help me look for it.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L12-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[飞机|fēijī|plane] [十点|shí diǎn|10 o'clock] [才|cái|only then] [起飞，|qǐfēi,|takes off,] [你|nǐ|you] [怎么|zěnme|why] [现在|xiànzài|now] [就|jiù|then] [要|yào|want to] [走？|zǒu?|leave?] （<span class="blank">　</span>）</div>
          <div class="sent-en">The plane takes off at 10 — why are you leaving now?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L12-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[你|nǐ|you] [想|xiǎng|want to] [学|xué|learn] [画画儿，|huà huàr,|drawing,] [真是|zhēn shì|really] [太阳|tàiyáng|sun] [从|cóng|from] [西边|xībiān|west] [出来|chūlái|comes out] [了。|le.|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">You want to learn drawing — the sun really rises from the west.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L12-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[你|nǐ|you] [把|bǎ|(BA)] [我|wǒ|my] [的|de|(possessive)] [护照|hùzhào|passport] [放|fàng|put] [在|zài|at] [哪儿|nǎr|where] [了？|le?|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Where did you put my passport?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L12-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[对不起，|duìbuqǐ,|Sorry,] [小丽|Xiǎolì|Xiaoli] [才|cái|only then] [把|bǎ|(BA)] [他|tā|his] [的|de|(possessive)] [电子邮箱|diànzǐ yóuxiāng|email] [告诉|gàosu|told] [我。|wǒ.|me.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Sorry, Xiaoli only just told me his email.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L12-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L12-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[司机|sījī|driver]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[起飞|qǐfēi|take off]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[发现|fāxiàn|discover]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[自己|zìjǐ|self]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[包|bāo|bag]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[她|tā|she] [说话|shuōhuà|speaks] [的|de|(possessive)] （E [声音|shēngyīn|voice]） [多|duō|how] [好听|hǎotīng|nice] [啊！|a!|!]</div>
          <div class="sent-en">Her voice is so nice!</div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L12-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[我|wǒ|I] [回来|huílái|came back] [了，|le,|,] [真|zhēn|really] [累|lěi|tired] [啊，|a,|,] [帮|bāng|help] [我|wǒ|me] [把|bǎ|(BA)] （<span class="blank">　</span>） [放|fàng|put] [在|zài|on] [桌子|zhuōzi|table] [上|shàng|on] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">I'm back and really tired — help me put my bag on the table.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L12-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[你|nǐ|you] [给|gěi|to] （<span class="blank">　</span>） [打个|dǎ ge|make a] [电话，|diànhuà,|call,] [让|ràng|ask] [他|tā|him] [下午|xiàwǔ|afternoon] [三点|sān diǎn|3 o'clock] [来|lái|to come] [接|jiē|pick up] [我。|wǒ.|me.]</div>
          <div class="sent-en">Call the driver and ask him to come pick me up at 3 pm.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L12-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[我|wǒ|I] （<span class="blank">　</span>） [你|nǐ|you] [最近|zuìjìn|recently] [总是|zǒngshì|always] [上课|shàngkè|in class] [睡觉，|shuìjiào,|sleeping,] [你|nǐ|you] [晚上|wǎnshang|at night] [几点|jǐ diǎn|what time] [睡|shuì|sleep] [啊？|a?|(question)]</div>
          <div class="sent-en">I've noticed you always sleep in class lately — what time do you sleep at night?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L12-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [我们|wǒmen|our] [的|de|(possessive)] [飞机|fēijī|plane] [几点|jǐ diǎn|what time] （<span class="blank">　</span>）？</div>
          <div class="zh">[B：|B:|B:] [下午|xiàwǔ|afternoon] [三点|sān diǎn|3 o'clock] [四十分，|sìshí fēn,|40 minutes,] [还有|háiyǒu|still have] [一个小时。|yí ge xiǎoshí.|one hour.]</div>
          <div class="sent-en">A: What time does our plane take off?<br>B: 3:40 pm — still one hour to go.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L12-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [你|nǐ|you] [帮|bāng|help] [我|wǒ|me] [把|bǎ|(BA)] [衣服|yīfu|clothes] [洗|xǐ|wash] [了|le|(change)] [吧。|ba.|(suggestion)]</div>
          <div class="zh">[B：|B:|B:] [这些|zhèxiē|these] [都是|dōu shì|are all] [你|nǐ|your] [的|de|(possessive)] [衣服，|yīfu,|clothes,] [你|nǐ|you] （<span class="blank">　</span>） [洗|xǐ|wash] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">A: Help me wash the clothes.<br>B: These are all your clothes — wash them yourself.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L12-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L12-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[有|yǒu|There is] [个|ge|a] [词语|cíyǔ|word] [叫|jiào|called] [“老小孩儿”，|“lǎoxiǎoháir”,|"old child",] [意思|yìsi|meaning] [是|shì|is] [人|rén|people] [老|lǎo|old] [了|le|(change)] [有时候|yǒu shíhou|sometimes] [跟|gēn|like] [小孩儿|xiǎoháir|children] [一样，|yíyàng,|the same,] [容易|róngyì|easily] [高兴，|gāoxìng,|happy,] [也|yě|also] [容易|róngyì|easily] [生气。|shēngqì.|angry.]</div>
          <div class="sent-en">There's a word "old child", meaning old people are sometimes like children — easily happy and easily angry.</div>
          <div class="zh ask">★ [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道|zhīdào|know] [老人：|lǎorén:|the old man:]</div>
          <div class="sent-en">★ From this passage, we can know the old man: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[总是生气|zǒngshì shēngqì|always angry]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[很喜欢小孩儿|hěn xǐhuan xiǎoháir|likes children very much]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[有些地方跟小孩儿一样|yǒuxiē dìfang gēn xiǎoháir yíyàng|in some ways like children]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[跟|gēn|acts] [小孩儿|xiǎoháir|like a child] [一样|yíyàng|(the same)]」。</div>
        </div>
        <div class="q" id="L12-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[妻子|qīzi|wife] [今天|jīntiān|today] [不|bù|not] [舒服，|shūfu,|well,] [我|wǒ|I] [把|bǎ|(BA)] [她|tā|her] [送到|sòng dào|took to] [了|le|(past)] [医院，|yīyuàn,|hospital,] [医生|yīshēng|doctor] [看|kàn|looked] [了|le|(past)] [以后|yǐhòu|after] [说|shuō|said] [没有|méiyǒu|no] [大|dà|big] [的|de|(possessive)] [问题，|wèntí,|problem,] [可能|kěnéng|maybe] [是|shì|is] [最近|zuìjìn|recently] [工作|gōngzuò|work] [太|tài|too] [忙、|máng,|busy,] [太|tài|too] [累|lěi|tired] [了，|le,|,] [让|ràng|let] [她|tā|her] [在|zài|at] [家里|jiā li|home] [休息|xiūxi|rest] [几天。|jǐ tiān.|a few days.]</div>
          <div class="sent-en">My wife wasn't feeling well today. I took her to the hospital; the doctor said there's no big problem — maybe she's been too busy and tired lately. She should rest at home for a few days.</div>
          <div class="zh ask">★ [妻子|qīzi|wife]：</div>
          <div class="sent-en">★ Wife: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[需要休息|xūyào xiūxi|needs rest]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[自己去医院了|zìjǐ qù yīyuàn le|went to the hospital herself]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[已经休息几天了|yǐjīng xiūxi jǐ tiān le|already rested a few days]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[让|ràng|Told] [她|tā|her] [在|zài|(at)] [家里|jiā li|home] [休息|xiūxi|to rest] [几天|jǐ tiān|for a few days]」。</div>
        </div>
        <div class="q" id="L12-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[我|wǒ|I] [是|shì|am] [新来的|xīn lái de|newly arrived] [司机，|sījī,|driver,] [姓|xìng|surname] [高，|Gāo,|Gao,] [您|nín|you] [叫|jiào|call] [我|wǒ|me] [小高|Xiǎo Gāo|Xiao Gao] [就|jiù|just] [可以|kěyǐ|can] [了。|le.|(change)] [来，|lái,|Come,] [把|bǎ|(BA)] [您|nín|your] [的|de|(possessive)] [行李箱|xínglixiāng|suitcase] [给|gěi|to] [我，|wǒ,|me,] [我|wǒ|I] [放|fàng|put] [在|zài|in] [车|chē|car] [的|de|(possessive)] [后边。|hòubiān.|back.] [您|nín|you] [带好|dài hǎo|have ready] [护照|hùzhào|passport] [和|hé|and] [机票|jīpiào|ticket] [了|le|(past)] [吗？|ma?|(question)] [我们|wǒmen|we] [现在|xiànzài|now] [就|jiù|then] [去|qù|go to] [机场。|jīchǎng.|airport.]</div>
          <div class="sent-en">I'm the new driver, surname Gao — just call me Xiao Gao. Come, give me your suitcase, I'll put it in the back of the car. Do you have your passport and ticket ready? We're going to the airport now.</div>
          <div class="zh ask">★ [小高：|Xiǎo Gāo:|Xiao Gao:]</div>
          <div class="sent-en">★ Xiao Gao: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[要去坐飞机|yào qù zuò fēijī|is going to fly]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[在机场工作|zài jīchǎng gōngzuò|works at the airport]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[是一个司机|shì yí ge sījī|is a driver]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[我|wǒ|I] [是|shì|am] [新来的|xīn lái de|the newly arrived] [司机|sījī|driver]」。</div>
        </div>
        <div class="q" id="L12-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[周明|Zhōu Míng|Zhou Ming] [是|shì|is] [我爸爸|wǒ bàba|my dad] [的|de|(possessive)] [同学，|tóngxué,|classmate,] [也|yě|also] [是|shì|is] [他|tā|his] [现在|xiànzài|current] [的|de|(possessive)] [同事。|tóngshì.|colleague.] [我|wǒ|I] [小|xiǎo|young] [的|de|(possessive)] [时候，|shíhou,|when,] [他|tā|he] [有时候|yǒu shíhou|sometimes] [带|dài|took] [我|wǒ|me] [出去|chūqù|out] [玩儿，|wánr,|to play,] [还|hái|also] [教会|jiāo huì|taught] [了|le|(past)] [我|wǒ|me] [游泳。|yóuyǒng.|swimming.] [明天|míngtiān|tomorrow] [是|shì|is] [他|tā|his] [的|de|(possessive)] [生日，|shēngrì,|birthday,] [我|wǒ|I] [要|yào|am going to] [去|qù|go] [给|gěi|to] [他|tā|him] [买|mǎi|buy] [一个|yí ge|a] [大|dà|big] [的|de|(possessive)] [蛋糕。|dàngāo.|cake.]</div>
          <div class="sent-en">Zhou Ming is my dad's classmate and current colleague. When I was little he sometimes took me out to play and taught me to swim. Tomorrow is his birthday — I'm going to buy him a big cake.</div>
          <div class="zh ask">★ [周明：|Zhōu Míng:|Zhou Ming:]</div>
          <div class="sent-en">★ Zhou Ming: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[是我的同学|shì wǒ de tóngxué|is my classmate]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[喜欢游泳|xǐhuan yóuyǒng|likes swimming]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[明天过生日|míngtiān guò shēngrì|has a birthday tomorrow]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[明天|míngtiān|Tomorrow] [是|shì|is] [他|tā|his] [的|de|(possessive)] [生日|shēngrì|birthday]」。</div>
        </div>
        <div class="q" id="L12-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[有|yǒu|There are] [的|de|(possessive)] [事儿|shìr|things] [就是|jiùshì|are just] [很|hěn|very] [有意思，|yǒu yìsi,|interesting,] [我|wǒ|I] [昨天|zuótiān|yesterday] [才|cái|only then] [发现，|fāxiàn,|discovered,] [你|nǐ|you] [给|gěi|to] [小张|Xiǎo Zhāng|Xiao Zhang] [介绍|jièshào|introduced] [的|de|(possessive)] [男朋友|nánpéngyou|boyfriend] [是|shì|is] [我|wǒ|my] [妻子|qīzi|wife] [以前|yǐqián|before] [的|de|(possessive)] [事。|shì.|matter.] [我们|wǒmen|we] [以前|yǐqián|before] [见过|jiàn guò|met] [面，|miàn,|,] [还|hái|also] [一起|yìqǐ|together] [吃过饭，|chī guò fàn,|eaten,] [那个|nàge|that] [时候|shíhou|time] [我|wǒ|I] [就|jiù|then] [想|xiǎng|wanted to] [把|bǎ|(BA)] [他|tā|him] [介绍|jièshào|introduce] [给|gěi|to] [小张。|Xiǎo Zhāng.|Xiao Zhang.]</div>
          <div class="sent-en">Some things are just interesting. Yesterday I discovered that the boyfriend you introduced to Xiao Zhang is my wife's ex. We met before and even ate together — at that time I wanted to introduce him to Xiao Zhang.</div>
          <div class="zh ask">★ [小张|Xiǎo Zhāng|Xiao Zhang’s] [的|de|(possessive)] [男朋友|nánpéngyou|boyfriend] [是|shì|is] [我|wǒ|my] [妻子：|qīzi:|wife:]</div>
          <div class="sent-en">★ Xiao Zhang's boyfriend is my wife's: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[以前的同事|yǐqián de tóngshì|former colleague]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[以前的丈夫|yǐqián de zhàngfu|former husband]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[以前的男朋友|yǐqián de nánpéngyou|former boyfriend]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[我|wǒ|my] [妻子|qīzi|wife’s] [以前|yǐqián|past] [的|de|(possessive)] [事|shì|matters]」[指|zhǐ|refers to] [以前|yǐqián|her former] [的|de|(possessive)] [男朋友。|nánpéngyou|boyfriend.]</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L12-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L12-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[护照|hùzhào|passport] [桌子上|zhuōzi shang|on the table] [放到|fàng dào|put on] [请把|qǐng bǎ|please (BA)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[请|qǐng|Please] [把|bǎ|(BA)] [护照|hùzhào|the passport] [放|fàng|put] [到|dào|on] [桌子|zhuōzi|the table] [上。|shàng|(top).]<div class="sent-en">Please put the passport on the table.</div></div>
        </div>
        <div class="write-item" id="L12-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[需要|xūyào|need] [笔记本|bǐjìběn|notebook] [买个|mǎi ge|buy a] [电脑|diànnǎo|computer] [我|wǒ|I]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|I] [需要|xūyào|need] [买|mǎi|to buy] [个|ge|a] [笔记本电脑|bǐjìběn diànnǎo|laptop.]<div class="sent-en">I need to buy a laptop.</div></div>
        </div>
        <div class="write-item" id="L12-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[写字|xiě zì|write characters] [黑板上|hēibǎn shang|on the blackboard] [在|zài|at] [你|nǐ|you] [习惯|xíguàn|are used to] [吗|ma|(question)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|Are you] [习惯|xíguàn|used to] [在|zài|writing] [黑板|hēibǎn|on the blackboard] [上|shàng|(on)] [写字|xiě zì|(writing)] [吗？|ma?|(question)]<div class="sent-en">Are you used to writing on the blackboard?</div></div>
        </div>
        <div class="write-item" id="L12-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[超市|chāoshì|supermarket] [自己|zìjǐ|yourself] [吧|ba|(suggestion)] [你|nǐ|you] [去|qù|go]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|Go to] [自己|zìjǐ|the supermarket] [去|qù|(go)] [超市|chāoshì|(supermarket)] [吧。|ba|yourself.]<div class="sent-en">Go to the supermarket yourself.</div></div>
        </div>
        <div class="write-item" id="L12-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[起飞|qǐfēi|take off] [半个小时|bàn ge xiǎoshí|half an hour] [还有|háiyǒu|still have] [就|jiù|then] [了|le|(change)] [飞机|fēijī|plane]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[飞机|fēijī|The plane] [还|hái|(still)] [有|yǒu|has] [半个小时|bàn ge xiǎoshí|half an hour] [就|jiù|before] [起飞|qǐfēi|take-off] [了。|le|(change)]<div class="sent-en">The plane will take off in half an hour.</div></div>
        </div>

        <h4 id="L12-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L12-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[今天|jīntiān|today] [没有|méiyǒu|no] <span class="blank-input"><span class="input-py">tài</span><input type="text" data-ans="太"></span> [阳，|yáng,|sun,] [天气|tiānqì|weather] [很|hěn|very] [冷。|lěng.|cold.]</div>
          <div class="sent-en">There's no sun today — the weather is very cold.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[太|tài|(as in 太阳 "sun")]</span></div>
        </div>
        <div class="write-item" id="L12-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[地铁站|dìtiě zhàn|subway station] <span class="blank-input"><span class="input-py">xī</span><input type="text" data-ans="西"></span> [边|biān|side] [有|yǒu|there is] [一个|yí ge|a] [咖啡店。|kāfēidiàn.|café.]</div>
          <div class="sent-en">There's a café on the west side of the subway station.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[西|xī|west]</span></div>
        </div>
        <div class="write-item" id="L12-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[请|qǐng|please] [你|nǐ|you] [把|bǎ|(BA)] <span class="blank-input"><span class="input-py">bāo</span><input type="text" data-ans="包"></span> [给|gěi|to] [我。|wǒ.|me.]</div>
          <div class="sent-en">Please pass me the bag.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[包|bāo|bag]</span></div>
        </div>
        <div class="write-item" id="L12-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[老师|lǎoshī|teacher] [今天|jīntiān|today] [教|jiāo|teaches] [我们|wǒmen|us] <span class="blank-input"><span class="input-py">huà</span><input type="text" data-ans="画"></span> [小猫。|xiǎomāo.|kittens.]</div>
          <div class="sent-en">The teacher teaches us to draw kittens today.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[画|huà|draw]</span></div>
        </div>
        <div class="write-item" id="L12-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[这个|zhège|this] <span class="blank-input"><span class="input-py">xíng</span><input type="text" data-ans="行"></span> [李箱|lǐxiāng|suitcase] [是|shì|is] [谁|shéi|whose] [的？|de?|(nominalizer)]</div>
          <div class="sent-en">Whose suitcase is this?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[行|xíng|(as in 行李箱 "suitcase")]</span></div>
        </div>

        <h4 id="L12-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L12-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[你|nǐ|you] <span class="blank-input"><input type="text" data-ans="已"></span> [经|jīng|already] [不|bù|not] [是|shì|are] [小孩子|xiǎoháizi|child] [了，|le,|,] [要|yào|need to] [照顾好|zhàogù hǎo|take good care of] [自|zì|self] <span class="blank-input"><input type="text" data-ans="己"></span>。</div>
          <div class="zh" style="margin-top:6px;">[已|yǐ|already]　[己|jǐ|self]</div>
          <div class="sent-en">You're not a child anymore — take good care of yourself.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[已|yǐ|(as in 已经 “already”)]、[己|jǐ|(as in 自己 “oneself”)]</div>
        </div>
        <div class="write-item" id="L12-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[飞机|fēijī|The plane] [就要|jiù yào|is about to] <span class="blank-input"><input type="text" data-ans="起"></span> [飞|fēi|take off] [了，|le,|,] [我们|wǒmen|we] [没有|méiyǒu|no] [时间|shíjiān|time] [去|qù|go to] <span class="blank-input"><input type="text" data-ans="超"></span> [市|shì|market] [了。|le.|(change)]</div>
          <div class="zh" style="margin-top:6px;">[起|qǐ|rise]　[超|chāo|super]</div>
          <div class="sent-en">The plane is about to take off — we don't have time to go to the supermarket.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[起|qǐ|(as in 起飞 “take off”)]、[超|chāo|(as in 超市 “supermarket”)]</div>
        </div>
        <div class="write-item" id="L12-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[以前|yǐqián|Before,] [我们|wǒmen|we] [是|shì|were] <span class="blank-input"><input type="text" data-ans="同"></span> [学，|xué,|classmates,] [现在|xiànzài|now] [他|tā|he] [是|shì|is] [我|wǒ|my] <span class="blank-input"><input type="text" data-ans="司"></span> [机。|jī.|driver.]</div>
          <div class="zh" style="margin-top:6px;">[同|tóng|same]　[司|sī|(as in 司机 "driver")]</div>
          <div class="sent-en">We used to be classmates; now he's my driver.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[同|tóng|(as in 同事 “colleague”)]、[司|sī|(as in 公司 “company”)]</div>
        </div>
        <div class="write-item" id="L12-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[真|zhēn|really] [生|shēng|angry] <span class="blank-input"><input type="text" data-ans="气"></span>，[我|wǒ|I] [刚|gāng|just] [到|dào|arrived at] [车站，|chēzhàn,|station,] [公共|gōnggòng|public] <span class="blank-input"><input type="text" data-ans="汽"></span> [车|chē|bus] [就|jiù|then] [离开|líkāi|left] [了。|le.|(change)]</div>
          <div class="zh" style="margin-top:6px;">[气|qì|air]　[汽|qì|steam]</div>
          <div class="sent-en">How annoying — I just got to the station and the bus left.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[气|qì|(as in 客气 “polite”)]、[汽|qì|(as in 汽车 “car”)]</div>
        </div>
        <div class="write-item" id="L12-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[我|wǒ|I] [发|fā|noticed] <span class="blank-input"><input type="text" data-ans="现"></span> [你|nǐ|you] [最近|zuìjìn|recently] [越来越|yuè lái yuè|more and more] [爱|ài|like] [看|kàn|watch] [电|diàn|TV] <span class="blank-input"><input type="text" data-ans="视"></span> [了。|le.|(change)]</div>
          <div class="zh" style="margin-top:6px;">[现|xiàn|appear]　[视|shì|see]</div>
          <div class="sent-en">I've noticed you like watching TV more and more lately.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[现|xiàn|(as in 现在 “now”)]、[视|shì|(as in 电视 “TV”)]</div>
        </div>

        <h4 id="L12-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L12-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[花|huā|flower] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[送花|sòng huā|give flowers]、[买花|mǎi huā|buy flowers]</div></div>
        </div>
        <div class="write-item" id="L12-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[客|kè|guest] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[客人|kèrén|guest]、[做客|zuòkè|be a guest]</div></div>
        </div>
        <div class="write-item" id="L12-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[意|yì|meaning] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[愿意|yuànyì|willing]、[满意|mǎnyì|satisfied]</div></div>
        </div>
        <div class="write-item" id="L12-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[帮|bāng|help] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[帮助|bāngzhù|help]、[帮忙|bāngmáng|help]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L12-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小丽|Xiǎolì|Xiaoli] [觉得|juéde|feels] [今天|jīntiān|today]
            <span class="blank-input review-blank"><span class="input-py">tàiyáng</span><input type="text" data-ans="太阳"></span>
            [从|cóng|from]
            <span class="blank-input review-blank"><span class="input-py">xībiān</span><input type="text" data-ans="西边"></span>
            [出来|chūlái|comes out] [了，|le,|,] [因为|yīnwèi|because] [小刚|Xiǎogāng|Xiaogang] [12 点|shí'èr diǎn|12 o'clock] [以前|yǐqián|before] [就|jiù|then] [要|yào|is going to] [睡觉|shuìjiào|sleep] [了。|le.|(change)] [小刚|Xiǎogāng|Xiaogang] [说，|shuō,|says,] [他的|tā de|his] [经理|jīnglǐ|manager]
            <span class="blank-input review-blank"><span class="input-py">shēngqì</span><input type="text" data-ans="生气"></span>
            [了，|le,|,] [明天|míngtiān|tomorrow] [小刚|Xiǎogāng|Xiaogang] [8 点|bā diǎn|8 o'clock] [不|bù|not] [到，|dào,|arrive,] [以后|yǐhòu|from now on] [就|jiù|then] [别|bié|don't] [去|qù|go] [上班|shàngbān|to work] [了。|le.|(change)]
          </div>
          <div class="sent-en">Xiaoli feels the sun rose from the west today, because Xiaogang is going to sleep before 12. Xiaogang says his manager got angry — if he doesn't arrive by 8 tomorrow, he shouldn't come to work anymore.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[太阳|tàiyáng|sun]、[西边|xībiān|west]、[生气|shēngqì|angry]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小刚|Xiǎogāng|Xiaogang] [去|qù|went to] [机场|jīchǎng|airport] [迟到|chídào|late] [了，|le,|,] [因为|yīnwèi|because] [他|tā|he] [去|qù|to] [机场|jīchǎng|airport] [的|de|(possessive)] [路上|lù shang|on the way] [才|cái|only then] [发现|fāxiàn|discovered] [忘带|wàng dài|forgot to bring]
            <span class="blank-input review-blank"><span class="input-py">hùzhào</span><input type="text" data-ans="护照"></span>
            [了。|le.|(change)] [到了|dào le|Arriving at] [机场，|jīchǎng,|the airport,] [他|tā|he] [跟|gēn|with] [周经理|Zhōu jīnglǐ|Manager Zhou] [借钱，|jiè qián,|borrowed money,] [因为|yīnwèi|because]
            <span class="blank-input review-blank"><span class="input-py">sījī</span><input type="text" data-ans="司机"></span>
            [把|bǎ|(BA)] [他|tā|him] [送到|sòng dào|took to] [机场|jīchǎng|airport] [的|de|(possessive)] [时候，|shíhou,|when,] [他|tā|he] [又|yòu|again] [发现|fāxiàn|discovered] [自己|zìjǐ|himself] [忘记|wàngjì|forgot] [带|dài|to bring] [了。|le.|(change)] [飞机|fēijī|plane] [就要|jiù yào|is about to]
            <span class="blank-input review-blank"><span class="input-py">qǐfēi</span><input type="text" data-ans="起飞"></span>
            [了，|le,|,] [周经理|Zhōu jīnglǐ|Manager Zhou] [让|ràng|asked] [小刚|Xiǎogāng|Xiaogang] [把|bǎ|(BA)] [重要|zhòngyào|important] [的|de|(possessive)] [东西|dōngxi|things] [放在|fàng zài|put with] [他|tā|him] [那儿。|nàr.|there.]</div>
          <div class="sent-en">Xiaogang was late to the airport because on the way he discovered he'd forgotten his passport. At the airport he borrowed money from Manager Zhou because when the driver took him to the airport he again discovered he'd forgotten to bring it. The plane is about to take off — Manager Zhou asked Xiaogang to leave the important things with him.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[护照|hùzhào|passport]、[司机|sījī|driver]、[起飞|qǐfēi|take off]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[13] = {
  navLabel:'第13课',
  html: `
    <div class="lesson">
      <h2>第 13 课　我是走回来的
        <span class="title-py">Dì shísān kè · Wǒ shì zǒu huílái de</span>
        <small>Lesson 13 · I walked back</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L13-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图13.png" alt="听力图13" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图13.png</b></span>
        </div>

        <div class="q" id="L13-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [爷爷，|yéye,|Grandpa,] [这本书|zhè běn shū|this book] [我|wǒ|I] [没看过，|méi kàn guò,|haven't read,] [是|shì|is it] [您|nín|you] [新买|xīn mǎi|newly bought] [的|de|(possessive)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [这是|zhè shì|this is] [爷爷|yéye|Grandpa] [送给|sòng gěi|given to] [你|nǐ|you] [的|de|(possessive)] [生日|shēngrì|birthday] [礼物。|lǐwù.|gift.]</div>
          <div class="sent-en">W: Grandpa, I haven't read this book — did you just buy it?<br>M: This is Grandpa's birthday gift for you.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[爷爷|yéye|grandpa] [和|hé|and] [孙女|sūnnǚ|granddaughter] [一起|yìqǐ|together] [看书|kàn shū|reading]）</div>
        </div>
        <div class="q" id="L13-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [终于|zhōngyú|finally] [来|lái|came] [了！|le!|(change)] [箱子|xiāngzi|box] [里|li|inside] [东西|dōngxi|things] [太多，|tài duō,|too many,] [我|wǒ|I] [刚才|gāngcái|just now] [搬了|bān le|moved] [几次|jǐ cì|several times] [都|dōu|all] [没|méi|not] [搬起来。|bān qǐlái.|lift it up.]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [放下电话|fàng xià diànhuà|after hanging up] [马上|mǎshàng|immediately] [就|jiù|then] [跑过来|pǎo guòlái|ran over] [了。|le.|(change)] [来，|lái,|Come,] [我|wǒ|I] [帮|bāng|help] [你|nǐ|you] [搬下去。|bān xiàqù.|move it down.]</div>
          <div class="sent-en">W: You're finally here! There are too many things in the box — I tried several times but couldn't lift it.<br>M: I ran over right after hanging up. Come, let me help you move it down.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[两个人|liǎng ge rén|two people] [搬|bān|carrying] [箱子|xiāngzi|boxes]）</div>
        </div>
        <div class="q" id="L13-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [看|kàn|look] [我家|wǒ jiā|my family] [小狗|xiǎogǒu|puppy] [多|duō|how] [喜欢|xǐhuan|likes] [你，|nǐ,|you,] [见了|jiàn le|when seeing] [你|nǐ|you] [就|jiù|then] [跑过去|pǎo guòqù|runs over] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [它|tā|it] [这么|zhème|so] [快|kuài|fast] [跑过来|pǎo guòlái|runs over] [是|shì|is] [因为|yīnwèi|because] [我|wǒ|I] [拿着|ná zhe|holding] [好吃|hǎochī|tasty] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">M: Look how much my puppy likes you — it runs over as soon as it sees you.<br>W: It runs over so fast because I'm holding something tasty.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[小狗|xiǎogǒu|a puppy] [跑|pǎo|running] [向|xiàng|toward] [人|rén|a person]）</div>
        </div>
        <div class="q" id="L13-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[男：|Nán:|M:] [好久不见！|hǎojiǔ bú jiàn!|Long time no see!] [没想到|méi xiǎngdào|didn't expect] [在|zài|at] [这儿|zhèr|here] [遇到|yùdào|to meet] [你|nǐ|you] [了。|le.|(change)] [你|nǐ|you] [来|lái|came to] [这儿|zhèr|here] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [来|lái|came to] [这家|zhè jiā|this] [公司|gōngsī|company] [面试，|miànshì,|for an interview,] [刚|gāng|just] [面完，|miàn wán,|finished,] [走，|zǒu,|Let's go,] [我们|wǒmen|we] [边走边聊。|biān zǒu biān liáo.|chat while walking.]</div>
          <div class="sent-en">M: Long time no see! Didn't expect to meet you here. What are you here for?<br>W: I came to this company for an interview — just finished. Let's chat while we walk.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[两个人|liǎng ge rén|two people] [在|zài|on] [路上|lù shang|the road] [边走边聊|biān zǒu biān liáo|chatting while walking]）</div>
        </div>
        <div class="q" id="L13-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [看|kàn|look] [这|zhè|this] [孩子|háizi|child] [怎么|zěnme|what's wrong] [了，|le,|,] [我|wǒ|I] [过去|guòqù|go over] [帮|bāng|help] [他|tā|him] [一下。|yíxià.|a bit.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [别|bié|don't] [帮|bāng|help] [他，|tā,|him,] [让|ràng|let] [他|tā|him] [自己|zìjǐ|himself] [站起来，|zhàn qǐlái,|stand up,] [他|tā|he] [一定|yídìng|definitely] [可以。|kěyǐ.|can.]</div>
          <div class="sent-en">M: Look what's wrong with that child — let me go help him.<br>W: Don't help him. Let him stand up by himself — he definitely can.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[小孩|xiǎohái|a child] [摔倒|shuāidǎo|fell] [在|zài|on] [地上|dì shang|the ground]）</div>
        </div>

        <h4 id="L13-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L13-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[住在|zhù zài|living next to] [我家|wǒ jiā|my home] [旁边|pángbiān|next to] [的|de|(possessive)] [是|shì|is] [个|ge|a] [老人，|lǎorén,|old person,] [他|tā|he] [很|hěn|very] [热情，|rèqíng,|warm,] [喜欢|xǐhuan|likes] [帮助|bāngzhù|helping] [大家。|dàjiā.|everyone.] [大家|dàjiā|everyone] [有|yǒu|has] [了|le|(past)] [问题，|wèntí,|problems,] [都|dōu|all] [愿意|yuànyì|are willing to] [请|qǐng|ask] [他|tā|him] [帮忙。|bāngmáng.|for help.]</div>
          <div class="sent-en">Living next to my home is an old man. He's warm and likes helping everyone. When people have problems, they're all willing to ask him for help.</div>
          <div class="zh stem">★ [那位|nà wèi|that] [老人|lǎorén|old man] [遇到|yùdào|met with] [了|le|(past)] [问题。|wèntí.|a problem.]</div>
          <div class="sent-en">★ That old man has encountered a problem.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It’s] [别人|biérén|others] [有|yǒu|having] [问题|wèntí|problems] [请|qǐng|who ask] [他|tā|him] [帮忙，|bāngmáng,|for help,] [不是|bú shì|not] [他|tā|he] [遇到|yùdào|ran into] [了|le|(past)] [问题。|wèntí|problems.]" data-expl-en="Others have problems and ask him; he didn't encounter a problem."></div>
        </div>
        <div class="q" id="L13-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[过去，|guòqù,|In the past,] [我|wǒ|I] [喜欢|xǐhuan|liked] [每天|měitiān|every day] [早上|zǎoshang|morning] [起床|qǐchuáng|getting up] [后，|hòu,|after,] [一边|yìbiān|while] [吃|chī|eating] [早饭|zǎofàn|breakfast] [一边|yìbiān|while] [看|kàn|reading] [报纸。|bàozhǐ.|newspaper.] [现在|xiànzài|now] [我|wǒ|I] [没有|méiyǒu|don't have] [这个|zhège|this] [习惯|xíguàn|habit] [了，|le,|,] [因为|yīnwèi|because] [太|tài|too] [忙|máng|busy] [了，|le,|,] [没|méi|no] [时间|shíjiān|time] [了。|le.|(change)]</div>
          <div class="sent-en">In the past I liked reading the newspaper while eating breakfast every morning. Now I don't have this habit because I'm too busy and have no time.</div>
          <div class="zh stem">★ [他|tā|he] [一直|yìzhí|always] [一边|yìbiān|while] [吃|chī|eating] [早饭|zǎofàn|breakfast] [一边|yìbiān|while] [看|kàn|reading] [报纸。|bàozhǐ.|newspaper.]</div>
          <div class="sent-en">★ He always reads the newspaper while eating breakfast.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="「[过去|guòqù|used to] [喜欢|xǐhuan|like]……[现在|xiànzài|now] [没有|méiyǒu|no longer] [这个|zhège|have this] [习惯|xíguàn|habit] [了|le|(change)]」，[说明|shuōmíng|showing] [现在|xiànzài|now] [不|bù|doesn’t] [这样|zhèyàng|do so] [了。|le|(change)]" data-expl-en="He used to but no longer does — so not 'always'."></div>
        </div>
        <div class="q" id="L13-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[早上|zǎoshang|In the morning] [我|wǒ|I] [起了床|qǐ le chuáng|got up] [就|jiù|then] [出门|chūmén|left home] [了，|le,|,] [到了|dào le|when I got to] [半路|bànlù|halfway,] [发现|fāxiàn|discovered] [没带|méi dài|didn't bring] [电脑|diànnǎo|computer] [和|hé|and] [钱包，|qiánbāo,|wallet,] [又|yòu|again] [开回去|kāi huíqù|drove back] [拿，|ná,|to get them,] [到|dào|arrived at] [公司|gōngsī|company] [的|de|(possessive)] [时候|shíhou|when] [已经|yǐjīng|already] [十点半|shí diǎn bàn|10:30] [了。|le.|(change)]</div>
          <div class="sent-en">This morning I got up and left home. Halfway there I discovered I hadn't brought my computer and wallet, so I drove back to get them and arrived at the company at 10:30.</div>
          <div class="zh stem">★ [他|tā|he] [是|shì|was] [开车|kāichē|driving] [来|lái|to come] [公司|gōngsī|company] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">★ He came to the company by car.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[又|yòu|drove] [开|kāi|(drove)] [回去|huíqù|back] [拿|ná|to get it]」[说明|shuōmíng|showing] [他|tā|he] [是|shì|(is)] [开车|kāichē|(drove)] [来|lái|here] [的。|de|(nominalizer)]" data-expl-en="'Drove back to get them' shows he came by car."></div>
        </div>
        <div class="q" id="L13-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[妈妈|māma|Mom] [忙|máng|busy] [了|le|(past)] [一天，|yì tiān,|a whole day,] [回家|huí jiā|back home] [还|hái|also] [要|yào|needs to] [做饭。|zuòfàn.|cook.] [我|wǒ|I] [让|ràng|asked] [她|tā|her] [坐下来|zuò xiàlái|sit down] [休息|xiūxi|rest] [一会儿，|yíhuìr,|a while,] [但|dàn|but] [她|tā|she] [总是|zǒngshì|always] [边笑|biān xiào|smiling] [边说：|biān shuō:|and saying:] [“为你|“wèi nǐ|"For you] [和你爸|hé nǐ bà|and your dad] [做饭，|zuòfàn,|cooking,] [我|wǒ|I] [很|hěn|very] [高兴。”|gāoxìng.”|happy."]</div>
          <div class="sent-en">Mom is busy all day, and when she comes home she still has to cook. I ask her to sit down and rest, but she always smiles and says: "Cooking for you and your dad makes me happy."</div>
          <div class="zh stem">★ [爸爸|bàba|Dad] [很|hěn|very] [喜欢|xǐhuan|likes] [做饭。|zuòfàn.|cooking.]</div>
          <div class="sent-en">★ Dad likes cooking very much.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It’s] [妈妈|māma|Mom] [做饭，|zuòfàn,|who cooks,] [不是|bú shì|not] [爸爸。|bàba|Dad.]" data-expl-en="Mom is the one cooking, not Dad."></div>
        </div>
        <div class="q" id="L13-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[方校长|Fāng xiàozhǎng|Principal Fang] [的|de|(possessive)] [办公室|bàngōngshì|office] [过去|guòqù|used to] [在|zài|be on] [四层，|sì céng,|the 4th floor,] [她|tā|she] [每天|měitiān|every day] [都|dōu|all] [爬上去。|pá shàngqù.|climbed up.] [上个月|shàng ge yuè|last month] [搬到|bān dào|moved to] [十二层|shí'èr céng|the 12th floor] [以后，|yǐhòu,|after,] [她|tā|she] [开始|kāishǐ|started] [坐|zuò|taking] [电梯，|diàntī,|the elevator,] [不|bù|not] [爬楼|pá lóu|climb stairs] [了。|le.|(change)]</div>
          <div class="sent-en">Principal Fang's office used to be on the 4th floor and she climbed up every day. After moving to the 12th floor last month, she started taking the elevator and no longer climbs.</div>
          <div class="zh stem">★ [以前|yǐqián|Before,] [方校长|Fāng xiàozhǎng|Principal Fang] [喜欢|xǐhuan|liked] [爬山。|pá shān.|mountain climbing.]</div>
          <div class="sent-en">★ Before, Principal Fang liked mountain climbing.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It’s] [爬|pá|climbing] [楼梯，|lóutī,|the stairs,] [不是|bú shì|not] [爬山。|pá shān|a mountain.]" data-expl-en="Climbing stairs, not mountain climbing."></div>
        </div>

        <h4 id="L13-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L13-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [怎么|zěnme|why] [这么|zhème|so] [累？|lěi?|tired?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [电梯|diàntī|elevator] [坏了，|huài le,|broke,] [我|wǒ|I] [是|shì|am] [爬上来|pá shànglái|climbed up] [的。|de.|(nominalizer)] [快|kuài|quickly] [给|gěi|to] [我|wǒ|me] [喝口|hē kǒu|drink a mouthful of] [水。|shuǐ.|water.]</div>
          <div class="sent-en">M: Why are you so tired?<br>W: The elevator broke — I climbed up. Give me some water quickly.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|why is the woman] [为什么|wèishénme|(why)] [很|hěn|so] [累？|lèi|tired?]</div>
          <div class="sent-en">Q: Why is the woman so tired?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[她去爬山了|tā qù pá shān le|she went mountain climbing]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[她喝了很多水|tā hē le hěnduō shuǐ|she drank a lot of water]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[她是走上楼来的|tā shì zǒu shàng lóu lái de|she walked upstairs]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[我|wǒ|I] [是|shì|(is)] [爬|pá|climbed] [上来|shànglái|up] [的|de|(nominalizer)]」→ [走|zǒu|walked] [上楼|shàng lóu|upstairs] [来|lái|(come)] [的。|de|(nominalizer)]</div>
        </div>
        <div class="q" id="L13-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [超市|chāoshì|supermarket] [离|lí|from] [家|jiā|home] [这么|zhème|so] [远，|yuǎn,|far,] [我们|wǒmen|we] [真的|zhēn de|really] [要|yào|have to] [走回去|zǒu huíqù|walk back] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [只有|zhǐyǒu|only] [三站，|sān zhàn,|three stops,] [我们|wǒmen|we] [边走边聊，|biān zǒu biān liáo,|chat while walking,] [一会儿|yíhuìr|in a moment] [就|jiù|then] [到家|dào jiā|get home] [了。|le.|(change)] [多走走|duō zǒu zou|walking more] [还|hái|also] [能|néng|can] [锻炼|duànliàn|exercise] [身体，|shēntǐ,|the body,] [不|bù|isn't it] [是|shì|is] [吗？|ma?|(question)]</div>
          <div class="sent-en">M: The supermarket is so far from home — do we really have to walk back?<br>W: It's only three stops. We'll chat while walking and be home in no time. Walking more is also good exercise, isn't it?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [想|xiǎng|wants] [做|zuò|to do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the woman want to do?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[走回家去|zǒu huí jiā qù|walk home]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[聊天儿|liáotiānr|chat]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[去超市|qù chāoshì|go to the supermarket]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[边走边聊，|biān zǒu biān liáo,|Chatting while walking,] [一会儿|yíhuìr|in a moment] [就|jiù|(then)] [到|dào|reach] [家|jiā|home] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L13-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [真的|zhēn de|really] [要|yào|are going to] [出国？|chūguó?|go abroad?] [去|qù|to] [那么|nàme|so] [远|yuǎn|far] [的|de|(possessive)] [地方，|dìfang,|place,] [不是|bú shì|isn't it] [想|xiǎng|want to] [回来|huílái|come back] [就|jiù|then] [能|néng|can] [回来|huílái|come back] [的，|de,|,] [你爸妈|nǐ bà mā|your parents] [多|duō|how] [想|xiǎng|miss] [你|nǐ|you] [啊！|a!|(exclamation)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [他们|tāmen|they] [说|shuō|say] [年轻人|niánqīng rén|young people] [应该|yīnggāi|should] [走出去，|zǒu chūqù,|go out,] [多|duō|more] [看看|kàn kan|see] [外边|wàibiān|outside] [的|de|(possessive)] [人|rén|people] [和|hé|and] [事。|shì.|things.]</div>
          <div class="sent-en">M: Are you really going abroad? It's so far — you can't just come back whenever you want. Your parents will miss you so much!<br>W: They say young people should go out and see more of the world.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[已经不年轻了|yǐjīng bù niánqīng le|no longer young]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[很想爸妈|hěn xiǎng bà mā|misses her parents]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[要去国外|yào qù guówài|is going abroad]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[真的|zhēn de|really] [要|yào|going to] [出国|chūguó|go abroad]」。</div>
        </div>
        <div class="q" id="L13-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[男：|Nán:|M:] [那么|nàme|so] [多|duō|many] [车，|chē,|cars,] [吃饭|chīfàn|eating] [的|de|(possessive)] [人|rén|people] [真|zhēn|really] [不少。|bùshǎo.|quite a few.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我们|wǒmen|we] [把|bǎ|(BA)] [车|chē|car] [放在|fàng zài|park at] [这儿，|zhèr,|here,] [走过去|zǒu guòqù|walk over] [吧，|ba,|,] [也|yě|also] [不|bù|not] [远，|yuǎn,|far,] [两分钟|liǎng fēnzhōng|two minutes] [就|jiù|then] [到|dào|arrive] [了。|le.|(change)]</div>
          <div class="sent-en">M: So many cars — quite a lot of people eating here.<br>W: Let's park the car here and walk over — it's not far, only two minutes.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [现在|xiànzài|now] [最|zuì|most] [可能|kěnéng|likely] [在|zài|are] [哪儿？|nǎr?|where?]</div>
          <div class="sent-en">Q: Where are they most likely to be now?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[饭馆门口|fànguǎn ménkǒu|in front of the restaurant]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[饭馆里边|fànguǎn lǐbian|inside the restaurant]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[离饭馆不远的地方|lí fànguǎn bù yuǎn de dìfang|not far from the restaurant]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[要|yào|He had to] [停车|tíng chē|park] [走过去，|zǒu guòqù,|and walk over,] [说明|shuōmíng|showing] [还|hái|still] [在|zài|in] [离|lí|(from)] [饭馆|fànguǎn|the restaurant] [不|bù|not] [远|yuǎn|far] [的|de|(possessive)] [地方。|dìfang|place.]</div>
        </div>
        <div class="q" id="L13-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [几号|jǐ hào|what date] [到|dào|arrive in] [北京？|Běijīng?|Beijing?] [票|piào|ticket] [买好了|mǎi hǎo le|bought] [没有？|méiyǒu?|yet?]</div>
          <div class="zh stem">[男：|Nán:|M:] [别|bié|don't] [担心，|dānxīn,|worry,] [我|wǒ|I] [下个|xià ge|next] [星期六|xīngqīliù|Saturday] [就|jiù|then] [飞|fēi|fly] [回去|huíqù|back] [了。|le.|(change)]</div>
          <div class="sent-en">W: What date will you arrive in Beijing? Have you bought the ticket?<br>M: Don't worry — I'll fly back next Saturday.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|how does the man] [怎么|zěnme|(how)] [回|huí|get back] [北京？|Běijīng?|to Beijing?]</div>
          <div class="sent-en">Q: How does the man get back to Beijing?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[坐火车|zuò huǒchē|by train]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[坐飞机|zuò fēijī|by plane]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[开车|kāichē|by car]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[飞|fēi|Fly] [回去|huíqù|back]」→ [坐|zuò|take] [飞机。|fēijī|a plane.]</div>
        </div>

        <h4 id="L13-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L13-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[男：|Nán:|M:] [您好，|nín hǎo,|Hello,] [昨天|zuótiān|yesterday] [从|cóng|from] [你们|nǐmen|your] [洗衣店|xǐyīdiàn|laundry] [拿回去|ná huíqù|taken back] [的|de|(possessive)] [衣服|yīfu|clothes] [不是|bú shì|aren't] [我|wǒ|my] [的。|de.|(nominalizer)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [这件|zhè jiàn|this] [衣服|yīfu|clothes] [不是|bú shì|isn't] [您的？|nín de?|yours?]</div>
          <div class="zh stem">[男：|Nán:|M:] [您看，|nín kàn,|Look,] [我|wǒ|I] [叫|jiào|am called] [“方明”，|“Fāng Míng”,|"Fang Ming",] [这|zhè|this] [上面|shàngmiàn|on it] [写|xiě|says] [的|de|(possessive)] [是|shì|is] [“方朋”。|“Fāng Péng”.|"Fang Peng".]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [一定|yídìng|definitely] [是|shì|is] [服务员|fúwùyuán|attendant] [边|biān|while] [听音乐|tīng yīnyuè|listening to music] [边|biān|while] [工作，|gōngzuò,|working,] [拿错|ná cuò|took the wrong one] [了。|le.|(change)] [真|zhēn|really] [对不起，|duìbuqǐ,|sorry,] [您|nín|you] [先|xiān|first] [坐下来|zuò xiàlái|sit down] [喝点儿水，|hē diǎnr shuǐ,|drink some water,] [我|wǒ|I] [马上|mǎshàng|right away] [就|jiù|then] [去|qù|to] [给|gěi|to] [您|nín|you] [换。|huàn.|exchange.]</div>
          <div class="sent-en">M: Hello, the clothes I picked up from your laundry yesterday aren't mine.<br>W: This isn't yours?<br>M: Look, my name is "Fang Ming", but this says "Fang Peng".<br>W: It must be an attendant who was listening to music while working and took the wrong one. I'm really sorry — sit down and have some water, I'll exchange it right away.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[叫“方朋”|jiào “Fāng Péng”|is called "Fang Peng"]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[在商店买衣服|zài shāngdiàn mǎi yīfu|bought clothes at the store]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[在洗衣店换衣服|zài xǐyīdiàn huàn yīfu|exchanges clothes at the laundry]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[他|tā|He] [要|yào|is going] [去|qù|to] [洗衣店|xǐyīdiàn|the laundry] [把|bǎ|to] [拿错|ná cuò|wrongly taken] [的|de|(possessive)] [衣服|yīfu|clothes] [换|huàn|exchange] [回来。|huílái|back.]</div>
        </div>
        <div class="q" id="L13-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [小周，|Xiǎo Zhōu,|Xiao Zhou,] [你|nǐ|you] [现在|xiànzài|now] [要|yào|are going to] [回公司|huí gōngsī|go back to the company] [吗？|ma?|(question)] [你|nǐ|you] [是|shì|did] [开车|kāichē|drive] [来|lái|come] [的|de|(possessive)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [是|shì|am] [走过来|zǒu guòlái|walked here] [的，|de,|,] [车|chē|car] [放在|fàng zài|parked at] [公司|gōngsī|company] [门口|ménkǒu|entrance] [了。|le.|(change)] [怎么了，|zěnme le,|What's up,] [有事|yǒu shì|something] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [能|néng|can] [帮|bāng|help] [我|wǒ|me] [给|gěi|to] [老周|lǎo Zhōu|Old Zhou] [带回去|dài huíqù|take back] [点儿|diǎnr|some] [东西|dōngxi|things] [吗？|ma?|(question)] [他|tā|he] [放在|fàng zài|left at] [我|wǒ|my] [这儿|zhèr|place] [好长时间|hǎo cháng shíjiān|for a long time] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [明天|míngtiān|tomorrow] [可以|kěyǐ|OK] [吗？|ma?|(question)] [明天|míngtiān|tomorrow] [我|wǒ|I] [还|hái|still] [来|lái|come to] [你们|nǐmen|your] [这儿，|zhèr,|place,] [到时候|dào shíhou|then] [开车|kāichē|drive] [过来。|guòlái.|over.]</div>
          <div class="sent-en">W: Xiao Zhou, are you going back to the company now? Did you drive here?<br>M: I walked here — the car is parked at the company entrance. What's up?<br>W: Can you help me take some things back to Old Zhou? He left them at my place for a long time.<br>M: Tomorrow, OK? I'll come here again tomorrow and drive over then.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [想|xiǎng|wants] [请|qǐng|to ask] [男的|nánde|the man] [做|zuò|to do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the woman want to ask the man to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[回公司|huí gōngsī|go back to the company]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[给老周带东西|gěi lǎo Zhōu dài dōngxi|take things to Old Zhou]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[开车|kāichē|drive]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[帮|bāng|Help] [我|wǒ|me] [给|gěi|take] [老周|Lǎo Zhōu|Old Zhou] [带回去|dài huíqù|back] [点儿|diǎnr|some] [东西|dōngxi|things]」。</div>
        </div>
        <div class="q" id="L13-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[男：|Nán:|M:] [刚才|gāngcái|just now] [从|cóng|from] [电梯|diàntī|elevator] [里|li|in] [走出去|zǒu chūqù|walked out] [的|de|(possessive)] [那个|nàge|that] [瘦瘦的|shòushòu de|thin] [女孩儿|nǚháir|girl] [你|nǐ|you] [认识？|rènshi?|know?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [对，|duì,|Yes,] [是|shì|is] [我|wǒ|my] [以前|yǐqián|former] [的|de|(possessive)] [同事，|tóngshì,|colleague,] [听说|tīngshuō|heard] [现在|xiànzài|now] [都|dōu|already] [是|shì|is] [经理|jīnglǐ|manager] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [以后|yǐhòu|Later] [你|nǐ|you] [介绍|jièshào|introduce] [我们|wǒmen|us] [认识|rènshi|know] [一下|yíxià|a bit] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [没问题。|méi wèntí.|No problem.]</div>
          <div class="sent-en">M: Do you know that thin girl who just walked out of the elevator?<br>W: Yes, she's my former colleague. I heard she's a manager now.<br>M: Introduce us sometime.<br>W: No problem.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [在|zài|in] [电梯|diàntī|the elevator] [里|li|(inside)] [遇到|yùdào|met] [了|le|(past)] [谁？|shéi?|whom?]</div>
          <div class="sent-en">Q: Whom did the woman meet in the elevator?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[司机|sījī|driver]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[服务员|fúwùyuán|attendant]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[过去的同事|guòqù de tóngshì|former colleague]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[是|shì|It’s] [我|wǒ|my] [以前|yǐqián|former] [的|de|(possessive)] [同事|tóngshì|colleague]」。</div>
        </div>
        <div class="q" id="L13-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[男：|Nán:|M:] [服务员，|fúwùyuán,|Waiter,] [来瓶|lái píng|bring a bottle of] [红酒。|hóngjiǔ.|red wine.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [不是|bú shì|didn't] [开车|kāichē|drive] [了|le|(past)] [吗，|ma,|(question)] [能|néng|can] [喝酒|hē jiǔ|drink alcohol] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [今天|jīntiān|today] [是|shì|is] [你|nǐ|your] [的|de|(possessive)] [生日，|shēngrì,|birthday,] [喝几口|hē jǐ kǒu|drink a few sips] [没关系。|méi guānxi.|doesn't matter.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|then] [你|nǐ|your] [的|de|(possessive)] [车|chē|car] [今天|jīntiān|today] [放在|fàng zài|park at] [这儿|zhèr|here] [吧，|ba,|,] [明天|míngtiān|tomorrow] [再|zài|again] [过来|guòlái|come over] [开回去。|kāi huíqù.|drive back.]</div>
          <div class="sent-en">M: Waiter, bring a bottle of red wine.<br>W: Didn't you drive here? Can you drink?<br>M: Today is your birthday — a few sips won't matter.<br>W: Then park your car here today and come back tomorrow to drive it back.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[今天是他生日|jīntiān shì tā shēngrì|today is his birthday]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[没开车来|méi kāichē lái|didn't drive here]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[想喝点儿酒|xiǎng hē diǎnr jiǔ|wants to drink some wine]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[来|lái|Bring] [瓶|píng|a bottle of] [红酒|hóngjiǔ|red wine]」[说明|shuōmíng|showing] [他|tā|he] [想|xiǎng|wants] [喝点儿|hē diǎnr|some] [酒。|jiǔ|wine.]</div>
        </div>
        <div class="q" id="L13-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [走累|zǒu lěi|tired from walking] [了|le|(change)] [吧？|ba?|(question)] [我们|wǒmen|we] [去|qù|go to] [“太阳咖啡店”|“Tàiyáng Kāfēidiàn”|"Sun Café"] [坐|zuò|sit] [一会儿|yíhuìr|a while] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那家|nà jiā|that] [店|diàn|shop] [在|zài|on] [三层，|sān céng,|the 3rd floor,] [也|yě|also] [没有|méiyǒu|has no] [电梯，|diàntī,|elevator,] [要|yào|need to] [走上去，|zǒu shàngqù,|walk up,] [喝完|hē wán|after drinking] [咖啡|kāfēi|coffee] [还|hái|still] [要|yào|need to] [走下来，|zǒu xiàlái,|walk down,] [我|wǒ|my] [腿|tuǐ|leg] [疼。|téng.|hurts.]</div>
          <div class="zh stem">[男：|Nán:|M:] [那|nà|then] [去|qù|go to] [“西西蛋糕店”|“Xīxi Dàngāodiàn”|"Xixi Cake Shop"] [吧，|ba,|,] [有|yǒu|has] [电梯。|diàntī.|elevator.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好啊好啊，|hǎo a hǎo a,|Great,] [那家|nà jiā|that] [店|diàn|shop] [在|zài|on] [高层，|gāocéng,|a high floor,] [从上边|cóng shàngbiān|from above] [看下去，|kàn xiàqù,|looking down,] [特别|tèbié|especially] [漂亮。|piàoliang.|beautiful.]</div>
          <div class="sent-en">M: Tired from walking? Let's sit in "Sun Café" for a while.<br>W: That shop is on the 3rd floor and has no elevator — we'd have to walk up, and walk down after coffee. My leg hurts.<br>M: Then let's go to "Xixi Cake Shop" — it has an elevator.<br>W: Great, that shop is on a high floor — looking down from there is especially beautiful.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [要|yào|is going] [去|qù|to] [哪儿？|nǎr?|where?]</div>
          <div class="sent-en">Q: Where is the woman going?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[太阳咖啡店|Tàiyáng Kāfēidiàn|Sun Café]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[西西蛋糕店|Xīxi Dàngāodiàn|Xixi Cake Shop]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[西西咖啡店|Xīxi Kāfēidiàn|Xixi Café]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[好啊好啊|hǎo a hǎo a|Sure, sure]」[同意|tóngyì|agrees] [去|qù|to go to] [西西|Xīxi|Xixi] [蛋糕店。|dàngāo diàn|Cake Shop.]</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L13-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L13-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[你|nǐ|you] [下班|xiàbān|after work] [有|yǒu|have] [时间|shíjiān|time] [吗？|ma?|(question)] [能|néng|can] [跟|gēn|with] [我|wǒ|me] [聊聊|liáo liao|chat] [吗？|ma?|(question)]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[这|zhè|this] [是|shì|is] [谁|shéi|whose] [的|de|(possessive)] [照片？|zhàopiàn?|photo?] [让|ràng|let] [我|wǒ|me] [也|yě|also] [看看|kàn kan|take a look] [吧。|ba.|(suggestion)]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[是|shì|It's] [她，|tā,|her,] [刚|gāng|just] [进来|jìnlái|came in] [就|jiù|then] [出去|chūqù|went out] [了，|le,|,] [很|hěn|very] [着急。|zháojí.|anxious.]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[咖啡|kāfēi|Coffee] [和|hé|and] [牛奶|niúnǎi|milk] [都|dōu|both] [买回来|mǎi huílái|bought back] [了|le|(change)] [吗？|ma?|(question)]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[都|dōu|Almost] [快|kuài|almost] [到家|dào jiā|home] [了，|le,|,] [车|chē|car] [坏了，|huài le,|broke down,] [所以|suǒyǐ|so] [我|wǒ|I] [走回来|zǒu huílái|walked back] [了。|le.|(change)]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [去|qù|go] [那儿|nàr|there] [吗？|ma?|(question)] （E）</div>
          <div class="sent-en">Do you know how to get there? — (E) Of course. We take the bus first, then transfer to the subway.</div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L13-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[刚才|gāngcái|just now] [走出去|zǒu chūqù|walked out] [的|de|(possessive)] [那个人|nàge rén|that person] [是|shì|is] [谁？|shéi?|who?] [是|shì|is it] [笑笑？|Xiàoxiao?|Xiaoxiao?] （<span class="blank">　</span>）</div>
          <div class="sent-en">Who was that person who just walked out? Was it Xiaoxiao?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L13-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[你|nǐ|you] [怎么|zěnme|why] [走回来|zǒu huílái|walked back] [了？|le?|(change)] [你|nǐ|your] [的|de|(possessive)] [车|chē|car] [呢？|ne?|(question)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Why did you walk back? Where's your car?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L13-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[牛奶|niúnǎi|Milk] [都|dōu|all] [卖完|mài wán|sold out] [了，|le,|,] [我|wǒ|I] [只|zhǐ|only] [买回来|mǎi huílái|bought back] [一些|yìxiē|some] [咖啡。|kāfēi.|coffee.] （<span class="blank">　</span>）</div>
          <div class="sent-en">The milk was all sold out — I only bought back some coffee.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L13-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[是|shì|It's] [小李|Xiǎo Lǐ|Xiao Li] [女儿|nǚ'ér|daughter] [的|de|(possessive)] [照片，|zhàopiàn,|photo,] [你|nǐ|you] [坐过来|zuò guòlái|sit over] [一点儿，|yìdiǎnr,|a bit,] [我们|wǒmen|we] [一起|yìqǐ|together] [看。|kàn.|look.] （<span class="blank">　</span>）</div>
          <div class="sent-en">It's a photo of Xiao Li's daughter — come sit closer and we'll look together.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L13-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[好啊，|hǎo a,|Sure,] [去|qù|go to] [公司|gōngsī|company] [楼下|lóuxià|downstairs] [的|de|(possessive)] [咖啡店|kāfēidiàn|café] [吧，|ba,|,] [边喝|biān hē|drink while] [边聊。|biān liáo.|chat while.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Sure, let's go to the café downstairs from the company — drink and chat.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L13-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L13-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[爷爷|yéye|grandpa]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[礼物|lǐwù|gift]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[过去|guòqù|go over]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[一般|yìbān|generally]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[经常|jīngcháng|often]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[她|tā|she] [说话|shuōhuà|speaks] [的|de|(possessive)] （E [声音|shēngyīn|voice]） [多|duō|how] [好听|hǎotīng|nice] [啊！|a!|!]</div>
          <div class="sent-en">Her voice is so nice!</div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L13-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[爸爸|bàba|Dad] [妈妈|māma|Mom] [在|zài|at] [饭馆|fànguǎn|restaurant] [等|děng|waiting for] [我们|wǒmen|us] [呢，|ne,|(emphasis)] [我们|wǒmen|we] [快|kuài|quickly] （<span class="blank">　</span>） [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">Mom and Dad are waiting for us at the restaurant — let's go over quickly.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L13-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[这是|zhè shì|This is] [我|wǒ|I] [为|wèi|for] [你|nǐ|you] [买|mǎi|bought] [的|de|(possessive)] [生日|shēngrì|birthday] （<span class="blank">　</span>），[你|nǐ|you] [打开|dǎkāi|open] [看看，|kàn kan,|take a look,] [喜欢|xǐhuan|like] [不喜欢？|bù xǐhuan?|or not?]</div>
          <div class="sent-en">This is the birthday gift I bought you. Open it and see — do you like it?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L13-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[我|wǒ|my] （<span class="blank">　</span>） [今年|jīnnián|this year] [快|kuài|almost] [九十岁|jiǔshí suì|90 years old] [了，|le,|,] [身体|shēntǐ|health] [特别|tèbié|especially] [好，|hǎo,|good,] [他|tā|he] [走路|zǒulù|walks] [比|bǐ|than] [我|wǒ|me] [都|dōu|even] [快。|kuài.|faster.]</div>
          <div class="sent-en">My grandpa is almost 90 this year — his health is especially good, he even walks faster than me.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L13-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [这几天|zhè jǐ tiān|These days] [我|wǒ|my] [眼睛|yǎnjìng|eyes] [看|kàn|see] [东西|dōngxi|things] [不|bù|not] [太|tài|quite] [清楚。|qīngchu.|clearly.]</div>
          <div class="zh">[B：|B:|B:] [你|nǐ|you] [应该|yīnggāi|should] （<span class="blank">　</span>） [出去|chūqù|go out] [走走，|zǒu zou,|walk around,] [看看|kàn kan|look at] [远方|yuǎnfāng|the distance] [的|de|(possessive)] [绿树，|lǜshù,|green trees,] [别|bié|don't] [总|zǒng|always] [坐在|zuò zài|sit at] [电脑|diànnǎo|computer] [前。|qián.|in front of.]</div>
          <div class="sent-en">A: My eyesight hasn't been too clear these days.<br>B: You should go out often, look at green trees in the distance, and not always sit in front of the computer.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L13-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [只有|zhǐyǒu|Only] [你|nǐ|you] [一个人|yí ge rén|alone] [吃|chī|eating] [晚饭|wǎnfàn|dinner] [吗？|ma?|(question)] [你|nǐ|your] [丈夫|zhàngfu|husband] [呢？|ne?|(question)]</div>
          <div class="zh">[B：|B:|B:] [我|wǒ|my] [丈夫|zhàngfu|husband] （<span class="blank">　</span>） [八点半|bā diǎn bàn|8:30] [才|cái|only then] [回来，|huílái,|comes back,] [所以|suǒyǐ|so] [不|bù|not] [在|zài|at] [家|jiā|home] [吃。|chī.|eat.]</div>
          <div class="sent-en">A: Are you eating dinner alone? Where's your husband?<br>B: My husband generally doesn't come back until 8:30, so he doesn't eat at home.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L13-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L13-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[我|wǒ|my] [最大|zuì dà|greatest] [的|de|(possessive)] [兴趣|xìngqù|interest] [是|shì|is] [看书。|kàn shū.|reading.] [没事|méi shì|when free] [的|de|(possessive)] [时候，|shíhou,|time,] [经常|jīngcháng|often] [找|zhǎo|find] [一个|yí ge|a] [安静|ānjìng|quiet] [的|de|(possessive)] [地方，|dìfang,|place,] [静静地|jìngjìng de|quietly] [坐下来|zuò xiàlái|sit down] [边|biān|while] [喝茶|hē chá|drinking tea] [边|biān|while] [读书。|dúshū.|reading.] [看累|kàn lěi|tired from reading] [了|le|(change)] [的|de|(possessive)] [时候，|shíhou,|when,] [站起来|zhàn qǐlái|stand up] [看看|kàn kan|look at] [远方|yuǎnfāng|the distance] [的|de|(possessive)] [绿树，|lǜshù,|green trees,] [或者|huòzhě|or] [运动|yùndòng|exercise] [一下。|yíxià.|a bit.] [这|zhè|this] [就是|jiùshì|is] [我|wǒ|my] [最大|zuì dà|greatest] [的|de|(possessive)] [快乐。|kuàilè.|happiness.]</div>
          <div class="sent-en">My greatest interest is reading. When free, I often find a quiet place, sit down quietly, drink tea and read. When tired, I stand up and look at green trees in the distance, or exercise a bit. This is my greatest happiness.</div>
          <div class="zh ask">★ [我|wǒ|I] [喜欢：|xǐhuan:|like:]</div>
          <div class="sent-en">★ I like: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[坐下来看远方|zuò xiàlái kàn yuǎnfāng|sit down and look into the distance]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[站起来看书|zhàn qǐlái kàn shū|stand up and read]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[坐下来读书|zuò xiàlái dúshū|sit down and read]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[静静地|jìngjìng de|Quietly] [坐下来|zuò xiàlái|sitting down] [边|biān|(while)] [喝茶|hē chá|drinking tea] [边|biān|(and)] [读书|dúshū|reading]」。</div>
        </div>
        <div class="q" id="L13-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[你们看，|nǐmen kàn,|Look,] [这|zhè|this] [就是|jiùshì|is] [我家|wǒ jiā|my family] [的|de|(possessive)] [小狗，|xiǎogǒu,|puppy,] [花花。|Huāhua.|Huahua.] [它|tā|it] [经常|jīngcháng|often] [跑出去|pǎo chūqù|runs out] [帮|bāng|help] [我|wǒ|me] [拿|ná|get] [今天|jīntiān|today] [的|de|(possessive)] [报纸，|bàozhǐ,|newspaper,] [还|hái|also] [能|néng|can] [帮|bāng|help] [我|wǒ|me] [照顾|zhàogù|take care of] [女儿，|nǚ'ér,|daughter,] [跟|gēn|with] [她|tā|her] [玩儿。|wánr.|play.] [最|zuì|most] [有意思|yǒu yìsi|interesting] [的|de|(possessive)] [是|shì|is] [它|tā|it] [可以|kěyǐ|can] [站起来|zhàn qǐlái|stand up] [走路，|zǒulù,|walk,] [还|hái|also] [能|néng|can] [边|biān|while] [走|zǒu|walking] [边|biān|while] [叫。|jiào.|barking.] [花花|Huāhua|Huahua] [这么|zhème|so] [聪明，|cōngming,|smart,] [大家|dàjiā|everyone] [都|dōu|all] [喜欢|xǐhuan|like] [它。|tā.|it.]</div>
          <div class="sent-en">Look, this is my family's puppy, Huahua. It often runs out to get today's newspaper for me, and can also help take care of my daughter and play with her. Most interestingly, it can stand up and walk, and even bark while walking. Huahua is so smart — everyone likes it.</div>
          <div class="zh ask">★ [花花：|Huāhua:|Huahua:]</div>
          <div class="sent-en">★ Huahua: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[能站着走路|néng zhàn zhe zǒulù|can walk standing up]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不会站着|bú huì zhàn zhe|cannot stand]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[总是跑出去玩儿|zǒngshì pǎo chūqù wánr|always runs out to play]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[可以|kěyǐ|can] [站起来|zhàn qǐlái|stand up] [走路|zǒulù|and walk]」。</div>
        </div>
        <div class="q" id="L13-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[昨天|zuótiān|yesterday] [我|wǒ|I] [一天|yì tiān|all day] [都|dōu|all] [没|méi|not] [带|dài|bring] [手机，|shǒujī,|phone,] [回到|huídào|back] [家|jiā|home] [看见|kànjiàn|saw] [有|yǒu|there were] [8 个|bā ge|8] [电话，|diànhuà,|calls,] [都|dōu|all] [是|shì|were] [姐姐|jiějie|elder sister] [打过来|dǎ guòlái|called] [的。|de.|(nominalizer)] [我|wǒ|I] [突然|tūrán|suddenly] [想到：|xiǎngdào:|realized:] [姐姐|jiějie|elder sister] [今天|jīntiān|today] [要|yào|was going to] [飞回|fēi huí|fly back to] [美国|Měiguó|America] [去，|qù,|,] [她|tā|she] [一定|yídìng|must have] [是|shì|been] [想|xiǎng|wanting] [在|zài|before] [上飞机|shàng fēijī|boarding] [前|qián|before] [跟|gēn|with] [我|wǒ|me] [说|shuō|talk] [会儿|huìr|a while] [话。|huà.|words.] [等|děng|By the time] [我|wǒ|I] [给|gěi|to] [她|tā|her] [打回去|dǎ huíqù|called back] [的|de|(possessive)] [时候，|shíhou,|time,] [姐姐|jiějie|elder sister] [已经|yǐjīng|already] [关机|guānjī|turned off the phone] [了。|le.|(change)]</div>
          <div class="sent-en">Yesterday I didn't bring my phone all day. When I got home I saw 8 calls, all from my elder sister. I suddenly realized: my sister was flying back to America today — she must have wanted to talk to me before boarding. By the time I called back, her phone was already off.</div>
          <div class="zh ask">★ [我：|wǒ:|I:]</div>
          <div class="sent-en">★ I: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[忘了带手机|wàng le dài shǒujī|forgot to bring the phone]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不想接姐姐的电话|bù xiǎng jiē jiějie de diànhuà|didn't want to answer sister's calls]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[给姐姐打了8个电话|gěi jiějie dǎ le bā ge diànhuà|called sister 8 times]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[一天|yì tiān|all day] [都|dōu|(all)] [没带|méi dài|didn’t bring] [手机|shǒujī|the phone]」。</div>
        </div>
        <div class="q" id="L13-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[中国人|Zhōngguó rén|Chinese people] [常|cháng|often] [说|shuō|say] [“一心不可二用”，|“yì xīn bù kě èr yòng”,|"one mind cannot be used for two things",] [意思|yìsi|meaning] [是|shì|is] [做|zuò|doing] [这|zhè|this] [件事|jiàn shì|thing] [的|de|(possessive)] [时候|shíhou|time] [不要|bú yào|don't] [同时|tóngshí|at the same time] [做|zuò|do] [那|nà|that] [件事。|jiàn shì.|thing.] [我|wǒ|my] [女儿|nǚ'ér|daughter] [一点儿也|yìdiǎnr yě|not at all] [不|bù|not] [这么|zhème|so] [想，|xiǎng,|thinks,] [她|tā|she] [经常|jīngcháng|often] [一心多用，|yì xīn duō yòng,|multitasks,] [回到|huídào|back] [家|jiā|home] [总是|zǒngshì|always] [边|biān|while] [听音乐|tīng yīnyuè|listening to music] [边|biān|while] [吃苹果|chī píngguǒ|eating apples] [边|biān|while] [看书。|kàn shū.|reading.] [这样|zhèyàng|This way] [学习，|xuéxí,|studying,] [能|néng|can] [知道|zhīdào|know] [书上|shū shang|in the book] [说|shuō|says] [的|de|(possessive)] [是|shì|is] [什么|shénme|what] [吗？|ma?|(question)]</div>
          <div class="sent-en">Chinese people often say "one mind cannot be used for two things" — meaning don't do two things at the same time. My daughter doesn't think so at all; she often multitasks. When she gets home she always listens to music, eats apples and reads at the same time. Can she know what the book says studying this way?</div>
          <div class="zh ask">★ [女儿|nǚ’ér|My daughter] [经常：|jīngcháng:|often:]</div>
          <div class="sent-en">★ My daughter often: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[同时做很多事|tóngshí zuò hěnduō shì|does many things at once]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[学习|xuéxí|studies]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[只做一件事|zhǐ zuò yí jiàn shì|only does one thing]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[她|tā|She] [经常|jīngcháng|often] [一心多用|yì xīn duō yòng|multitasks]」。</div>
        </div>
        <div class="q" id="L13-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[我丈夫|wǒ zhàngfu|My husband] [这次|zhè cì|this time] [出国|chūguó|went abroad] [给|gěi|to] [每个|měi ge|every] [家人|jiārén|family member] [都|dōu|all] [带回来|dài huílái|brought back] [一件|yí jiàn|a] [礼物。|lǐwù.|gift.] [我爸爸|wǒ bàba|My dad] [是|shì|got] [一瓶|yì píng|a bottle of] [好酒，|hǎo jiǔ,|good wine,] [我妈妈|wǒ māma|my mom] [是|shì|got] [一件|yí jiàn|a] [漂亮的|piàoliang de|beautiful] [衣服，|yīfu,|clothes,] [给|gěi|to] [我|wǒ|me] [的|de|(possessive)] [礼物|liwu|gift] [是|shì|is] [画。|huà.|a painting.] [因为|yīnwèi|because] [我|wǒ|I] [最|zuì|most] [喜欢|xǐhuan|like] [画画儿，|huà huàr,|drawing,] [所以|suǒyǐ|so] [我|wǒ|I] [觉得|juéde|feel] [这|zhè|this] [是|shì|is] [他|tā|he] [带回来|dài huílái|brought back] [的|de|(possessive)] [最|zuì|most] [特别|tèbié|special] [的|de|(possessive)] [礼物。|lǐwù.|gift.]</div>
          <div class="sent-en">My husband went abroad this time and brought back a gift for every family member. My dad got a bottle of good wine, my mom got a beautiful piece of clothing, and my gift is a painting. Since I love drawing most, I feel this is the most special gift he brought back.</div>
          <div class="zh ask">★ [丈夫|zhàngfu|My husband] [给|gěi|brought] [我|wǒ|me] [带回来：|dài huílái:|back:]</div>
          <div class="sent-en">★ My husband brought me back: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[三件礼物|sān jiàn lǐwù|three gifts]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[一件衣服|yí jiàn yīfu|a piece of clothing]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[一件特别的礼物|yí jiàn tèbié de lǐwù|a special gift]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[我|wǒ|I] [觉得|juéde|think] [这|zhè|this] [是|shì|is] [他|tā|he] [带回来|dài huílái|brought back] [的|de|(nominalizer)] [最|zuì|the most] [特别|tèbié|special] [的|de|(possessive)] [礼物|lǐwù|gift]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L13-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L13-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[一边|yìbiān|while] [聊天儿|liáotiānr|chat] [走路|zǒulù|walk] [我们|wǒmen|we] [一边|yìbiān|while]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我们|wǒmen|We] [一边|yìbiān|(while)] [走路|zǒulù|walk] [一边|yìbiān|(and)] [聊天儿|liáotiānr|chat.]<div class="sent-en">We chat while walking.</div></div>
        </div>
        <div class="write-item" id="L13-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[出去|chūqù|out] [跑|pǎo|ran] [谁|shéi|who] [刚才|gāngcái|just now] [了|le|(change)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[刚才|gāngcái|Who] [谁|shéi|(who)] [跑|pǎo|ran] [出去|chūqù|out] [了？|le?|just now?]<div class="sent-en">Who ran out just now?</div></div>
        </div>
        <div class="write-item" id="L13-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[别|bié|don't] [开车|kāichē|drive] [一边|yìbiān|while] [打电话|dǎ diànhuà|call] [请|qǐng|please] [一边|yìbiān|while]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[请|qǐng|Please] [别|bié|don’t] [一边|yìbiān|(while)] [开车|kāichē|drive] [一边|yìbiān|(and)] [打电话。|dǎ diànhuà|make calls.]<div class="sent-en">Please don't call while driving.</div></div>
        </div>
        <div class="write-item" id="L13-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[就要|jiù yào|is about to] [过|guò|pass] [开|kāi|drive] [火车|huǒchē|train] [来|lái|came] [了|le|(change)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[火车|huǒchē|The train] [就要|jiù yào|is about to] [开|kāi|(come)] [过来|guòlái|over] [了。|le|(change)]<div class="sent-en">The train is about to come.</div></div>
        </div>
        <div class="write-item" id="L13-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[同学们|tóngxuémen|classmates] [走|zǒu|walk] [教室|jiàoshì|classroom] [去|qù|go] [出|chū|out] [都|dōu|all] [了|le|(change)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[同学们|tóngxuémen|The students] [都|dōu|all] [走出|zǒu chū|walked out of] [教室|jiàoshì|the classroom] [去|qù|(out)] [了。|le|(change)]<div class="sent-en">All the students have walked out of the classroom.</div></div>
        </div>

        <h4 id="L13-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L13-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[送给|sòng gěi|give] [你|nǐ|you] [一个|yí ge|a] [小|xiǎo|small] <span class="blank-input"><span class="input-py">lǐ</span><input type="text" data-ans="礼"></span> [物，|wù,|gift,] [希望|xīwàng|hope] [你|nǐ|you] [能|néng|can] [喜欢。|xǐhuan.|like.]</div>
          <div class="sent-en">I'm giving you a small gift — hope you like it.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[礼|lǐ|gift]（[礼物|lǐwù|gift]）</span></div>
        </div>
        <div class="write-item" id="L13-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [我|wǒ|I] [在|zài|on] [回来|huílái|coming back] [的|de|(possessive)] [路上|lù shang|on the way] <span class="blank-input"><span class="input-py">yù</span><input type="text" data-ans="遇"></span> [到|dào|met] [谁|shéi|who] [了|le|(past)] [吗？|ma?|(question)]</div>
          <div class="sent-en">Do you know who I met on my way back?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[遇|yù|meet]（[遇到|yùdào|meet]）</span></div>
        </div>
        <div class="write-item" id="L13-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[在家|zài jiā|at home] [吃|chī|eat] [吧，|ba,|,] [我|wǒ|I] [忙|máng|busy] [了|le|(past)] [一天|yì tiān|a whole day] [刚|gāng|just] [回来，|huílái,|came back,] [不|bù|not] <span class="blank-input"><span class="input-py">yuàn</span><input type="text" data-ans="愿"></span> [意|yì|willing] [再|zài|again] [出去|chūqù|go out] [了。|le.|(change)]</div>
          <div class="sent-en">Let's eat at home — I've been busy all day and just got back; I don't want to go out again.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[愿|yuàn|willing]（[愿意|yuànyì|willing]）</span></div>
        </div>
        <div class="write-item" id="L13-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[你|nǐ|you] [应|yīng|should] <span class="blank-input"><span class="input-py">gāi</span><input type="text" data-ans="该"></span> [多|duō|more] [走出去|zǒu chūqù|go out] [运动，|yùndòng,|exercise,] [少|shǎo|less] [在家|zài jiā|at home] [看|kàn|watch] [电视。|diànshì.|TV.]</div>
          <div class="sent-en">You should go out and exercise more, and watch less TV at home.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[该|gāi|should]（[应该|yīnggāi|should]）</span></div>
        </div>
        <div class="write-item" id="L13-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[我们|wǒmen|we] [在|zài|at] [一个|yí ge|the same] [公司|gōngsī|company] [上班，|shàngbān,|work,] <span class="blank-input"><span class="input-py">jīng</span><input type="text" data-ans="经"></span> [常见面，|cháng jiànmiàn,|see each other often,] [我|wǒ|I] [对|duì|to] [她|tā|her] [很|hěn|very] [了解。|liǎojiě.|know well.]</div>
          <div class="sent-en">We work at the same company and see each other often — I know her well.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[经|jīng|(as in 经常 "often")]</span></div>
        </div>

        <h4 id="L13-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L13-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[我|wǒ|I] [忘|wàng|forgot] [了|le|(past)] [给|gěi|to] [妻子|qīzi|wife] [买|mǎi|buy] [礼|li|gift] <span class="blank-input"><input type="text" data-ans="物"></span>，[只好|zhǐhǎo|had to] [在|zài|at] [机|jī|machine] <span class="blank-input"><input type="text" data-ans="场"></span> [买|mǎi|buy] [一个。|yí ge.|one.]</div>
          <div class="zh" style="margin-top:6px;">[物|wù|thing]　[场|chǎng|place]</div>
          <div class="sent-en">I forgot to buy a gift for my wife, so I had to buy one at the airport.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[物|wù|(as in 礼物 “gift”)]、[场|chǎng|(as in 操场 “playground”)]</div>
        </div>
        <div class="write-item" id="L13-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[别|bié|don't] [总|zǒng|always] [坐|zuò|sit] [着，|zhe,|,] [站|zhàn|stand] <span class="blank-input"><input type="text" data-ans="起"></span> [来|lái|up] [出去|chūqù|go out] [走走，|zǒu zou,|walk around,] [去|qù|go to] <span class="blank-input"><input type="text" data-ans="超"></span> [市|shì|market] [买点儿|mǎi diǎnr|buy some] [东西|dōngxi|things] [回来。|huílái.|back.]</div>
          <div class="zh" style="margin-top:6px;">[起|qǐ|rise]　[超|chāo|super]</div>
          <div class="sent-en">Don't always sit — stand up and go out for a walk, go to the supermarket and buy some things.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[起|qǐ|(as in 起飞 “take off”)]、[超|chāo|(as in 超市 “supermarket”)]</div>
        </div>
        <div class="write-item" id="L13-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[年|nián|year] <span class="blank-input"><input type="text" data-ans="轻"></span> [人|rén|person] [工作|gōngzuò|working] [到|dào|until] [下午|xiàwǔ|afternoon] [三四点|sān sì diǎn|3 or 4 o'clock] [的|de|(possessive)] [时候|shíhou|when] <span class="blank-input"><input type="text" data-ans="经"></span> [常|cháng|often] [有点儿|yǒudiǎnr|a bit] [饿，|è,|hungry,] [这个|zhège|this] [时候|shíhou|time] [可以|kěyǐ|can] [吃点儿|chī diǎnr|eat some] [水果。|shuǐguǒ.|fruit.]</div>
          <div class="zh" style="margin-top:6px;">[轻|qīng|light]　[经|jīng|(as in 经常 "often")]</div>
          <div class="sent-en">When young people work until 3 or 4 pm they often get a bit hungry — they can eat some fruit then.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[轻|qīng|(as in 年轻 “young”)]、[经|jīng|(as in 经常 “often”)]</div>
        </div>
        <div class="write-item" id="L13-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[医生，|yīshēng,|Doctor,] [我|wǒ|I] [应|yīng|should] <span class="blank-input"><input type="text" data-ans="该"></span> [什么时候|shénme shíhou|when] [给|gěi|to] <span class="blank-input"><input type="text" data-ans="孩"></span> [子|zi|child] [吃药？|chī yào?|take medicine?] [饭前|fànqián|before meals] [还是|háishi|or] [饭后？|fànhòu?|after meals?]</div>
          <div class="zh" style="margin-top:6px;">[该|gāi|should]　[孩|hái|child]</div>
          <div class="sent-en">Doctor, when should I give my child the medicine? Before or after meals?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[该|gāi|(as in 应该 “should”)]、[孩|hái|(as in 孩子 “child”)]</div>
        </div>
        <div class="write-item" id="L13-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[这|zhè|This] [是|shì|is] [我们公司|wǒmen gōngsī|our company] [的|de|(possessive)] [新车，|xīn chē,|new car,] [对|duì|to] <span class="blank-input"><input type="text" data-ans="环"></span> [境|jìng|environment] [很好，|hěn hǎo,|good,] [也|yě|also] [不|bù|not] [容易|róngyì|easily] <span class="blank-input"><input type="text" data-ans="坏"></span>。|.</div>
          <div class="zh" style="margin-top:6px;">[环|huán|ring]　[坏|huài|break]</div>
          <div class="sent-en">This is our company's new car — good for the environment and not easily broken.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[环|huán|(as in 环境 “environment”)]、[坏|huài|bad]</div>
        </div>

        <h4 id="L13-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L13-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[花|huā|flower] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[送花|sòng huā|give flowers]、[买花|mǎi huā|buy flowers]</div></div>
        </div>
        <div class="write-item" id="L13-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[客|kè|guest] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[客人|kèrén|guest]、[做客|zuòkè|be a guest]</div></div>
        </div>
        <div class="write-item" id="L13-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[意|yì|meaning] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[愿意|yuànyì|willing]、[满意|mǎnyì|satisfied]</div></div>
        </div>
        <div class="write-item" id="L13-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[帮|bāng|help] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[帮助|bāngzhù|help]、[帮忙|bāngmáng|help]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L13-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小刚|Xiǎogāng|Xiaogang]
            <span class="blank-input review-blank"><span class="input-py">zǒu</span><input type="text" data-ans="走"></span>
            [回来|huílái|came back] [了，|le,|,] [还|hái|also] [买回来|mǎi huílái|bought back] [很多|hěnduō|many] [东西。|dōngxi.|things.] [他|tā|he] [给|gěi|to]
            <span class="blank-input review-blank"><span class="input-py">yéye</span><input type="text" data-ans="爷爷"></span>
            [买了|mǎi le|bought] [一瓶|yì píng|a bottle of] [红酒，|hóngjiǔ,|red wine,] [明天|míngtiān|tomorrow] [他|tā|he] [和|hé|and] [小丽|Xiǎolì|Xiaoli] [一起|yìqǐ|together]
            <span class="blank-input review-blank"><span class="input-py">guòqù</span><input type="text" data-ans="过去"></span>。
            [小丽|Xiǎolì|Xiaoli] [问|wèn|asked] [小刚|Xiǎogāng|Xiaogang] [给|gěi|for] [她|tā|her] [买|mǎi|bought] [什么|shénme|what] [了，|le,|,] [小丽|Xiǎolì|Xiaoli] [让|ràng|asked] [小刚|Xiǎogāng|Xiaogang] [快点儿|kuài diǎnr|quickly] [小刚|Xiǎogāng|Xiaogang] [说|shuō|say] [他|tā|he] [自己|zìjǐ|himself] [就是|jiùshì|is] [最好|zuì hǎo|the best] [的|de|(possessive)]
            <span class="blank-input review-blank"><span class="input-py">lǐwù</span><input type="text" data-ans="礼物"></span>。
          </div>
          <div class="sent-en">Xiaogang walked back and also bought many things. He bought a bottle of red wine for Grandpa — tomorrow he and Xiaoli will go over together. Xiaoli asked what he bought for her; she told him to hurry and he said he himself was the best gift.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[走|zǒu|walk]、[爷爷|yéye|grandpa]、[过去|guòqù|go over]、[礼物|lǐwù|gift]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小丽|Xiǎolì|Xiaoli]
            <span class="blank-input review-blank"><span class="input-py">yìbān</span><input type="text" data-ans="一般"></span>
            [很少|hěn shǎo|rarely] [去|qù|go to] [电影院|diànyǐngyuàn|cinema] [看|kàn|watch] [电影，|diànyǐng,|movies,] [她|tā|she] [更|gèng|more]
            <span class="blank-input review-blank"><span class="input-py">yuànyì</span><input type="text" data-ans="愿意"></span>
            [在家|zài jiā|at home] [看|kàn|watch] [电视，|diànshì,|TV,] [因为|yīnwèi|because] [可以|kěyǐ|can] [边|biān|while] [吃|chī|eat]
            <span class="blank-input review-blank"><span class="input-py">biān</span><input type="text" data-ans="边"></span>
            [看，|kàn,|watching,] [坐久|zuò jiǔ|sitting too long] [了|le|(change)] [还|hái|also] [可以|kěyǐ|can]
            <span class="blank-input review-blank"><span class="input-py">zhàn qǐlái</span><input type="text" data-ans="站起来"></span>
            [休息|xiūxi|rest] [一会儿。|yíhuìr.|a while.] [同事|tóngshì|colleague] [觉得|juéde|feels] [小丽|Xiǎolì|Xiaoli]
            <span class="blank-input review-blank"><span class="input-py">gāi</span><input type="text" data-ans="该"></span>
            [多|duō|more] [出去|chūqù|go out] [走走，|zǒu zou,|walk around,] [这样|zhèyàng|this way] [生活|shēnghuó|life] [更|gèng|more] [有意思。|yǒu yìsi.|interesting.]</div>
          <div class="sent-en">Xiaoli generally rarely goes to the cinema; she'd rather watch TV at home because she can eat while watching and stand up to rest after sitting too long. Her colleague feels she should go out more — that would make life more interesting.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[一般|yìbān|generally]、[愿意|yuànyì|willing]、[边|biān|while]、[站起来|zhàn qǐlái|stand up]、[该|gāi|should]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[14] = {
  navLabel:'第14课',
  html: `
    <div class="lesson">
      <h2>第 14 课　你把水果拿过来
        <span class="title-py">Dì shísì kè · Nǐ bǎ shuǐguǒ ná guòlái</span>
        <small>Lesson 14 · Please bring the fruit here</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L14-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图14.png" alt="听力图14" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图14.png</b></span>
        </div>

        <div class="q" id="L14-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|my] [的|de|(possessive)] [伞，|sǎn,|umbrella,] [我|wǒ|my] [的|de|(possessive)] [伞！|sǎn!|umbrella!]</div>
          <div class="zh stem">[男：|Nán:|M:] [怎么|zěnme|why] [突然|tūrán|suddenly] [刮|guā|blow] [大风|dàfēng|strong wind] [了，|le,|,] [把|bǎ|(BA)] [伞|sǎn|umbrella] [都|dōu|even] [刮跑|guā pǎo|blown away] [了！|le!|(change)]</div>
          <div class="sent-en">W: My umbrella, my umbrella!<br>M: Why did the wind suddenly pick up and blow the umbrella away!</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[大风|dàfēng|The wind] [把|bǎ|(BA)] [伞|sǎn|an umbrella] [刮跑|guā pǎo|blowing away]）</div>
        </div>
        <div class="q" id="L14-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [怎么|zěnme|why] [把|bǎ|(BA)] [冰箱|bīngxiāng|fridge] [里|li|inside] [的|de|(possessive)] [东西|dōngxi|things] [都|dōu|all] [吃完|chī wán|finished eating] [了？|le?|(change)] [我们|wǒmen|we] [今晚|jīnwǎn|tonight] [吃|chī|eat] [什么|shénme|what] [啊？|a?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [不|bù|not] [在|zài|at] [家|jiā|home] [这|zhè|these] [几天，|jǐ tiān,|few days,] [我|wǒ|I] [一直|yìzhí|always] [没|méi|not] [出去。|chūqù.|go out.]</div>
          <div class="sent-en">W: Why did you eat everything in the fridge? What will we eat tonight?<br>M: You weren't home these days, so I never went out.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[空|kōng|an empty] [冰箱|bīngxiāng|fridge]）</div>
        </div>
        <div class="q" id="L14-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[男：|Nán:|M:] [小常，|Xiǎo Cháng,|Xiao Chang,] [这些|zhèxiē|these] [盘子|pánzi|plates] [都|dōu|all] [要|yào|need to] [洗|xǐ|wash] [干净。|gānjìng.|clean.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好，|hǎo,|OK,] [我|wǒ|I] [先|xiān|first] [把|bǎ|(BA)] [杯子|bēizi|cups] [洗完，|xǐ wán,|finish washing,] [然后|ránhòu|then] [再|zài|again] [洗|xǐ|wash] [盘子。|pánzi.|plates.]</div>
          <div class="sent-en">M: Xiao Chang, all these plates need to be washed clean.<br>W: OK, I'll finish washing the cups first, then wash the plates.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[洗碗|xǐ wǎn|washing dishes]）</div>
        </div>
        <div class="q" id="L14-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[男：|Nán:|M:] [先生，|xiānsheng,|Sir,] [今天|jīntiān|today] [的|de|(possessive)] [鱼|yú|fish] [很|hěn|very] [新鲜，|xīnxiān,|fresh,] [您|nín|you] [要|yào|want to] [不要|bú yào|or not] [来|lái|have] [一条？|yì tiáo?|one?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我们|wǒmen|we] [先|xiān|first] [看看|kàn kan|take a look at] [菜单，|càidān,|menu,] [然后|ránhòu|then] [再|zài|again] [点菜，|diǎn cài,|order,] [好|hǎo|good] [吗？|ma?|(question)]</div>
          <div class="sent-en">M: Sir, today's fish is very fresh — would you like one?<br>W: Let's look at the menu first, then order, OK?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[看|kàn|looking at] [菜单|càidān|the menu]）</div>
        </div>
        <div class="q" id="L14-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[男：|Nán:|M:] [爷爷奶奶，|yéye nǎinai,|Grandpa, Grandma,] [你们|nǐmen|you] [别|bié|don't] [说话，|shuōhuà,|talk,] [今天|jīntiān|today] [我|wǒ|I] [来|lái|come] [给|gěi|to] [你们|nǐmen|you] [讲故事。|jiǎng gùshi.|tell stories.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好啊，|hǎo a,|OK,] [爷爷奶奶|yéye nǎinai|Grandpa and Grandma] [最|zuì|most] [喜欢|xǐhuan|like] [听|tīng|listen to] [你|nǐ|you] [讲故事|jiǎng gùshi|tell stories] [了。|le.|(change)]</div>
          <div class="sent-en">M: Grandpa, Grandma, don't talk — today I'll tell you a story.<br>W: OK, Grandpa and Grandma love listening to your stories.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[给|gěi|telling] [爷爷|yéye|grandpa] [奶奶|nǎinai|and grandma] [讲|jiǎng|(telling)] [故事|gùshi|a story]）</div>
        </div>

        <h4 id="L14-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L14-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[今天早上|jīntiān zǎoshang|This morning] [我|wǒ|my] [妻子|qīzi|wife] [把|bǎ|(BA)] [车|chē|car] [开出去|kāi chūqù|drove out] [了，|le,|,] [要|yào|will] [很晚|hěn wǎn|very late] [才|cái|only then] [回来。|huílái.|come back.] [儿子|érzi|son] [9 点|jiǔ diǎn|9 o'clock] [要|yào|needs to] [去|qù|go to] [学校|xuéxiào|school] [上课，|shàngkè,|class,] [我|wǒ|I] [只好|zhǐhǎo|had to] [带|dài|take] [他|tā|him] [坐|zuò|take] [地铁。|dìtiě.|subway.]</div>
          <div class="sent-en">This morning my wife drove the car out and won't be back until very late. My son has to go to school at 9, so I had to take him on the subway.</div>
          <div class="zh stem">★ [他|tā|he] [今天|jīntiān|today] [坐|zuò|takes] [地铁|dìtiě|subway] [去|qù|to] [上课。|shàngkè.|class.]</div>
          <div class="sent-en">★ He takes the subway to class today.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It’s] [爸爸|bàba|Dad] [带|dài|taking] [儿子|érzi|his son] [坐|zuò|on] [地铁，|dìtiě,|the subway,] [不是|bú shì|not] [他|tā|he] [爸爸|bàba|(Dad)] [去|qù|going] [上课。|shàngkè|to class.]" data-expl-en="Dad takes the son on the subway; it's not Dad going to class."></div>
        </div>
        <div class="q" id="L14-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[常阿姨|Cháng āyí|Aunt Chang] [住在|zhù zài|lives] [我家|wǒ jiā|my home] [楼下，|lóuxià,|downstairs,] [她|tā|she] [经常|jīngcháng|often] [把|bǎ|(BA)] [我|wǒ|me] [叫下去|jiào xiàqù|calls down] [听|tīng|listen to] [她|tā|her] [唱歌。|chànggē.|singing.] [我|wǒ|I] [很|hěn|very] [喜欢|xǐhuan|like] [她|tā|her] [的|de|(possessive)] [声音。|shēngyīn.|voice.] [有时候|yǒu shíhou|sometimes] [我|wǒ|I] [还|hái|also] [和|hé|and] [她|tā|her] [一起|yìqǐ|together] [唱|chàng|sing] [呢。|ne.|(emphasis)]</div>
          <div class="sent-en">Aunt Chang lives downstairs. She often calls me down to listen to her sing. I really like her voice. Sometimes I even sing with her.</div>
          <div class="zh stem">★ [常阿姨|Cháng āyí|Aunt Chang] [的|de|(possessive)] [声音|shēngyīn|voice] [很|hěn|very] [大。|dà.|loud.]</div>
          <div class="sent-en">★ Aunt Chang's voice is very loud.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [只|zhǐ|only] [说|shuō|says] [喜欢|xǐhuan|he likes] [她|tā|her] [的|de|(possessive)] [声音，|shēngyīn,|voice,] [没|méi|not] [说|shuō|say] [声音|shēngyīn|the voice] [大。|dà|is loud.]" data-expl-en="The text only says he likes her voice, not that it's loud."></div>
        </div>
        <div class="q" id="L14-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[方叔叔|Fāng shūshu|Uncle Fang] [爱|ài|loves] [看|kàn|watch] [教|jiāo|teaching] [做饭|zuòfàn|cooking] [的|de|(possessive)] [节目。|jiémù.|programs.] [每天|měitiān|every day] [晚上|wǎnshang|evening] [不到|bú dào|before] [七点半，|qī diǎn bàn,|7:30,] [都|dōu|all] [坐|zuò|sit] [在|zài|at] [电视|diànshì|TV] [前|qián|in front of] [等着|děng zhe|waiting for] [节目|jiémù|program] [开始。|kāishǐ.|start.] [看完|kàn wán|after watching] [了|le|(change)] [他|tā|he] [马上|mǎshàng|immediately] [就|jiù|then] [开始|kāishǐ|starts] [做，|zuò,|cooking,] [做好|zuò hǎo|after cooking] [了|le|(change)] [饭|fàn|meal] [就|jiù|then] [请|qǐng|invite] [大家|dàjiā|everyone] [来|lái|to come] [吃。|chī.|eat.]</div>
          <div class="sent-en">Uncle Fang loves watching cooking programs. Every evening before 7:30 he sits in front of the TV waiting for the program to start. After watching, he immediately starts cooking, and when the meal is ready he invites everyone to eat.</div>
          <div class="zh stem">★ [方叔叔|Fāng shūshu|Uncle Fang] [喜欢|xǐhuan|likes] [做饭。|zuòfàn.|cooking.]</div>
          <div class="sent-en">★ Uncle Fang likes cooking.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[爱|ài|Loves] [看|kàn|watching] [做饭|zuòfàn|cooking] [节目、|jiémù,|shows,] [看完|kàn wán|then cooks] [就|jiù|(then)] [做、|zuò,|(cooks),] [做好|zuò hǎo|and when done] [请|qǐng|invites] [大家|dàjiā|everyone] [吃|chī|to eat] → [喜欢|xǐhuan|likes] [做饭。|zuòfàn|cooking.]" data-expl-en="Loves cooking shows, cooks right after, invites everyone — likes cooking."></div>
        </div>
        <div class="q" id="L14-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[一天|yì tiān|A day] [的|de|(possessive)] [工作|gōngzuò|work] [结束|jiéshù|ends] [后，|hòu,|after,] [小周|Xiǎo Zhōu|Xiao Zhou] [总是|zǒngshì|always] [最后|zuìhòu|last] [一个|yí ge|one] [离开|líkāi|leaves] [公司|gōngsī|company] [的。|de.|(nominalizer)] [她|tā|she] [每天|měitiān|every day] [都|dōu|all] [要|yào|needs to] [先|xiān|first] [把|bǎ|(BA)] [办公室|bàngōngshì|office] [打扫|dǎsǎo|clean] [干净，|gānjìng,|clean,] [然后|ránhòu|then] [才|cái|only then] [回家。|huí jiā.|go home.]</div>
          <div class="sent-en">After a day's work, Xiao Zhou is always the last to leave the company. Every day she first cleans the office, and only then goes home.</div>
          <div class="zh stem">★ [小周|Xiǎo Zhōu|Xiao Zhou] [回家|huí jiā|goes home] [以前|yǐqián|before] [要|yào|needs to] [打扫|dǎsǎo|clean] [办公室。|bàngōngshì.|office.]</div>
          <div class="sent-en">★ Xiao Zhou cleans the office before going home.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[先|xiān|First] [打扫|dǎsǎo|clean up] [干净，|gānjìng,|thoroughly,] [然后|ránhòu|then] [才|cái|only then] [回家|huí jiā|go home]」→ [回家|huí jiā|before going home] [前|qián|(before)] [要|yào|must] [打扫。|dǎsǎo|clean up.]" data-expl-en="'First cleans, then goes home' — cleans before going home."></div>
        </div>
        <div class="q" id="L14-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[方叔叔|Fāng shūshu|Uncle Fang] [和|hé|and] [白阿姨|Bái āyí|Aunt Bai] [特别|tèbié|especially] [热情，|rèqíng,|warm,] [每次|měi cì|every time] [我|wǒ|I] [去|qù|go to] [他们|tāmen|their] [家|jiā|home] [做客，|zuòkè,|as a guest,] [都|dōu|all] [要|yào|will] [从|cóng|from] [冰箱|bīngxiāng|fridge] [里|li|inside] [拿出|ná chū|take out] [很多|hěnduō|many] [吃|chī|eating] [的、|de,|things,] [喝|hē|drinking] [的|de|(possessive)] [来。|lái.|things.] [吃完|chī wán|after eating] [饭|fàn|meal] [还|hái|also] [让|ràng|let] [我|wǒ|me] [把|bǎ|(BA)] [饮料、|yǐnliào,|drinks,] [水果|shuǐguǒ|fruit] [带|dài|take] [回家。|huí jiā.|home.]</div>
          <div class="sent-en">Uncle Fang and Aunt Bai are especially warm. Every time I visit them, they take out lots of food and drinks from the fridge. After the meal they even let me take drinks and fruit home.</div>
          <div class="zh stem">★ [去|qù|When going to] [方叔叔|Fāng shūshu|Uncle Fang] [家|jiā|home] [时，|shí,|when,] [我|wǒ|I] [要|yào|need to] [带|dài|bring] [很多|hěnduō|many] [东西|dōngxi|things] [去。|qù.|there.]</div>
          <div class="sent-en">★ When going to Uncle Fang's home, I need to bring many things.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It’s] [他们|tāmen|they] [给|gěi|who give] [我|wǒ|me] [东西|dōngxi|things] [带回家，|dài huí jiā,|to take home,] [不是|bú shì|not] [我|wǒ|I] [带|dài|taking] [很多|hěnduō|many] [东西|dōngxi|things] [去。|qù|there.]" data-expl-en="They give me things to take home, not the other way round."></div>
        </div>

        <h4 id="L14-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L14-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[男：|Nán:|M:] [我们|wǒmen|we] [买点儿|mǎi diǎnr|buy some] [香蕉|xiāngjiāo|bananas] [吧，|ba,|,] [家里|jiā li|home] [没有|méiyǒu|no] [水果|shuǐguǒ|fruit] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [买|mǎi|buy] [西瓜|xīguā|watermelon] [吧，|ba,|,] [这些|zhèxiē|these] [香蕉|xiāngjiāo|bananas] [像|xiàng|seem] [是|shì|to be] [放|fàng|put] [了|le|(past)] [很久|hěn jiǔ|a long time] [了。|le.|(change)]</div>
          <div class="sent-en">M: Let's buy some bananas — there's no fruit at home.<br>W: Buy watermelon — these bananas look like they've been sitting for a long time.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [觉得|juéde|thinks] [香蕉|xiāngjiāo|the bananas] [怎么样？|zěnmeyàng?|how are they?]</div>
          <div class="sent-en">Q: What does the woman think of the bananas?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[不新鲜|bù xīnxiān|not fresh]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[太贵了|tài guì le|too expensive]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[很新鲜|hěn xīnxiān|very fresh]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[像是|xiàng shì|They look like they’ve been] [放|fàng|sitting] [了|le|(past)] [很久|hěn jiǔ|for a long time] [了|le|(change)]」→ [不新鲜。|bù xīnxiān|not fresh.]</div>
        </div>
        <div class="q" id="L14-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|your] [的|de|(possessive)] [熊猫|xióngmāo|panda] [画|huà|drawing] [得|de|(complement)] [真好，|zhēn hǎo,|so good,] [像|xiàng|like] [真|zhēn|real] [的|de|(nominalizer)] [一样。|yíyàng.|the same.] [我|wǒ|I] [要|yào|need] [多久|duō jiǔ|how long] [才|cái|only then] [可以|kěyǐ|can] [像|xiàng|like] [你|nǐ|you] [一样？|yíyàng?|the same?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [这|zhè|this] [不是|bú shì|isn't] [时间|shíjiān|time] [的|de|(possessive)] [问题，|wèntí,|question,] [主要|zhǔyào|mainly] [是|shì|is] [要|yào|need to] [有|yǒu|have] [兴趣。|xìngqù.|interest.]</div>
          <div class="sent-en">M: Your panda drawing is so good, like a real one. How long until I can be like you?<br>W: It's not a matter of time — mainly you need to have interest.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|how well does the woman] [画|huà|draw] [熊猫|xióngmāo|pandas] [画|huà|(draw)] [得|de|(complement)] [怎么样？|zěnmeyàng?|(how)?]</div>
          <div class="sent-en">Q: How well does the woman draw pandas?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[画了很长时间|huà le hěn cháng shíjiān|drew for a long time]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[画得很像|huà de hěn xiàng|draws very realistically]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[画得不好看|huà de bù hǎokàn|doesn't draw nicely]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[像|xiàng|(looks)] [真的|zhēn de|real] [一样|yíyàng|(the same)]」→ [画|huà|drawn] [得|de|(complement)] [很|hěn|very] [像。|xiàng|alike.]</div>
        </div>
        <div class="q" id="L14-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|your] [女儿|nǚ'ér|daughter] [像|xiàng|resembles] [谁？|shéi?|who?] [你|nǐ|you] [还是|háishi|or] [她爸爸？|tā bàba?|her dad?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [小时候|xiǎo shíhou|when little] [像|xiàng|resembled] [我，|wǒ,|me,] [现在|xiànzài|now] [越来越|yuè lái yuè|more and more] [像|xiàng|resembles] [她爸爸|tā bàba|her dad] [了。|le.|(change)]</div>
          <div class="sent-en">M: Who does your daughter look like? You or her dad?<br>W: When she was little she looked like me; now she looks more and more like her dad.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女儿，|nǚ’ér,|the daughter,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the daughter?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[以前像妈妈|yǐqián xiàng māma|used to look like Mom]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[以前像爸爸|yǐqián xiàng bàba|used to look like Dad]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[现在像妈妈|xiànzài xiàng māma|now looks like Mom]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[小时候|xiǎo shíhou|When little] [像|xiàng|resembled] [我|wǒ|me]」→ [以前|yǐqián|used to] [像|xiàng|resemble] [妈妈。|māma|Mom.]</div>
        </div>
        <div class="q" id="L14-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这个|zhège|this] [字|zì|character] [有|yǒu|has] [几个|jǐ ge|how many] [读音？|dúyīn?|pronunciations?] [我|wǒ|I] [记得|jìde|remember] [只|zhǐ|only] [有|yǒu|has] [一个。|yí ge.|one.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [记得|jìde|remember] [有|yǒu|has] [两个。|liǎng ge.|two.] [你|nǐ|you] [帮|bāng|help] [我|wǒ|me] [把|bǎ|(BA)] [词典|cídiǎn|dictionary] [拿过来，|ná guòlái,|bring over,] [我们|wǒmen|we] [一起|yìqǐ|together] [看看。|kàn kan.|take a look.]</div>
          <div class="sent-en">M: How many pronunciations does this character have? I remember only one.<br>W: I remember two. Bring me the dictionary and we'll look together.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [想|xiǎng|want to] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do they want to know?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[词典在哪儿|cídiǎn zài nǎr|where the dictionary is]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[这个字怎么写|zhège zì zěnme xiě|how to write this character]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[这个字怎么读|zhège zì zěnme dú|how to read this character]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[讨论|tǎolùn|They discuss]「[有|yǒu|how many] [几个|jǐ ge|(how many)] [读音|dúyīn|readings]」→ [想|xiǎng|want to] [知道|zhīdào|know] [怎么|zěnme|how] [读。|dú|to read it.]</div>
        </div>
        <div class="q" id="L14-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[男：|Nán:|M:] [快|kuài|quickly] [来看|lái kàn|come look] [啊，|a,|,] [这个|zhège|this] [节目|jiémù|program] [太|tài|too] [有意思|yǒu yìsi|interesting] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [在|zài|am] [洗盘子|xǐ pánzi|washing dishes] [呢，|ne,|(emphasis)] [你|nǐ|you] [把|bǎ|(BA)] [电视|diànshì|TV] [声音|shēngyīn|sound] [开|kāi|turn] [大|dà|louder] [一点儿。|yìdiǎnr.|a bit.]</div>
          <div class="sent-en">M: Come look quickly — this program is so interesting!<br>W: I'm washing dishes. Turn the TV sound up a bit.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [想|xiǎng|wants] [让|ràng|to have] [男的|nánde|the man] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the woman want the man to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[洗盘子|xǐ pánzi|wash dishes]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[看节目|kàn jiémù|watch the program]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[把声音开大|bǎ shēngyīn kāi dà|turn the sound up]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[你|nǐ|You] [把|bǎ|(BA)] [电视|diànshì|the TV] [声音|shēngyīn|volume] [开|kāi|turn] [大|dà|up] [一点儿|yìdiǎnr|a bit]」。</div>
        </div>

        <h4 id="L14-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L14-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[男：|Nán:|M:] [叔叔|shūshu|Uncle] [和|hé|and] [阿姨|āyí|Auntie] [第一次|dì yī cì|first time] [来|lái|come to] [我们|wǒmen|our] [家，|jiā,|home,] [是不是|shì bú shì|are they] [走错路|zǒu cuò lù|took the wrong way] [了？|le?|(change)] [已经|yǐjīng|already] [三点零五|sān diǎn líng wǔ|3:05] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [先|xiān|first] [把|bǎ|(BA)] [盘子|pánzi|plates] [洗|xǐ|wash] [一下，|yíxià,|a bit,] [再|zài|then] [从|cóng|from] [冰箱|bīngxiāng|fridge] [里|li|inside] [把|bǎ|(BA)] [香蕉、|xiāngjiāo,|bananas,] [苹果、|píngguǒ,|apples,] [饮料|yǐnliào|drinks] [拿出来|ná chūlái|take out] [放好，|fàng hǎo,|put ready,] [然后|ránhòu|then] [我们|wǒmen|we] [下楼|xià lóu|downstairs] [去|qù|go] [等|děng|wait for] [他们。|tāmen.|them.]</div>
          <div class="zh stem">[男：|Nán:|M:] [这些|zhèxiē|these] [我|wǒ|I] [早就|zǎo jiù|long ago] [准备|zhǔnbèi|prepared] [好|hǎo|well] [了。|le.|(change)] [这些|zhèxiē|these] [水果|shuǐguǒ|fruit] [少|shǎo|few] [不少？|bù shǎo?|or not?] [要|yào|need to] [不要|bú yào|or not] [再|zài|again] [买点儿？|mǎi diǎnr?|buy some more?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [不少。|bù shǎo.|Not few.] [快|kuài|quickly] [把|bǎ|(BA)] [衣服|yīfu|clothes] [穿好，|chuān hǎo,|put on,] [我们|wǒmen|we] [下去|xiàqù|go down] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: Uncle and Auntie are coming to our home for the first time — did they get lost? It's already 3:05.<br>W: First wash the plates, then take bananas, apples, and drinks out of the fridge and put them ready, then we'll go downstairs to wait for them.<br>M: I've already prepared all that. Is this fruit enough? Should we buy more?<br>W: It's enough. Put on your clothes quickly, let's go down.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [现在|xiànzài|now] [要|yào|are going to] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What are they going to do now?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[洗盘子|xǐ pánzi|wash plates]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[买水果|mǎi shuǐguǒ|buy fruit]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[下楼|xià lóu|go downstairs]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[快|kuài|Hurry] [把|bǎ|(BA)] [衣服|yīfu|clothes] [穿好，|chuān hǎo,|put on,] [我们|wǒmen|let’s] [下去|xiàqù|go down] [吧|ba|(suggestion)]」。</div>
        </div>
        <div class="q" id="L14-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [雨|yǔ|rain] [下|xià|falls] [得|de|(complement)] [真|zhēn|really] [大。|dà.|heavy.] [你|nǐ|your] [的|de|(possessive)] [车|chē|car] [放|fàng|parked] [哪儿|nǎr|where] [了？|le?|(change)] [我们|wǒmen|we] [快点儿|kuài diǎnr|quickly] [跑过去。|pǎo guòqù.|run over.]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [就|jiù|just] [在|zài|at] [这儿|zhèr|here] [等，|děng,|wait,] [我|wǒ|I] [先|xiān|first] [过去|guòqù|go over] [把|bǎ|(BA)] [车|chē|car] [开|kāi|drive] [过来，|guòlái,|over,] [然后|ránhòu|then] [你|nǐ|you] [再|zài|then] [上车。|shàng chē.|get in.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|then] [我|wǒ|I] [把|bǎ|(BA)] [伞|sǎn|umbrella] [给|gěi|to] [你，|nǐ,|you,] [你|nǐ|you] [拿着|ná zhe|holding] [伞|sǎn|umbrella] [走|zǒu|walk] [过去。|guòqù.|over.]</div>
          <div class="zh stem">[男：|Nán:|M:] [刮|guā|blows] [这么|zhème|such] [大|dà|big] [的|de|(possessive)] [风，|fēng,|wind,] [伞|sǎn|umbrella] [没有|méiyǒu|has no] [用。|yòng.|use.]</div>
          <div class="sent-en">W: It's raining so hard. Where's your car? Let's run over.<br>M: You wait here — I'll go over first and drive the car over, then you get in.<br>W: Then I'll give you the umbrella to walk over with.<br>M: With such strong wind, the umbrella is useless.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [现在|xiànzài|now] [要|yào|is going to] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What is the man going to do now?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[开车|kāichē|drive the car]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[买伞|mǎi sǎn|buy an umbrella]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[跑步|pǎobù|run]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[我|wǒ|I] [先|xiān|first] [过去|guòqù|go over] [把|bǎ|(BA)] [车|chē|the car] [开|kāi|drive] [过来|guòlái|over]」。</div>
        </div>
        <div class="q" id="L14-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [在|zài|are] [看|kàn|watching] [什么|shénme|what] [呢？|ne?|(question)] [一直|yìzhí|always] [笑。|xiào.|laughing.]</div>
          <div class="zh stem">[男：|Nán:|M:] [这个|zhège|this] [节目|jiémù|program] [里|li|in] [的|de|(possessive)] [小猫|xiǎomāo|kitten] [小狗|xiǎogǒu|puppy] [特别|tèbié|especially] [有意思，|yǒu yìsi,|interesting,] [你|nǐ|you] [先|xiān|first] [过来|guòlái|come over] [看，|kàn,|watch,] [一会儿|yíhuìr|in a moment] [再|zài|then] [打扫|dǎsǎo|clean] [房间。|fángjiān.|room.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [把|bǎ|(BA)] [电视|diànshì|TV] [声音|shēngyīn|sound] [关小|guān xiǎo|turn down] [点儿，|diǎnr,|a bit,] [儿子|érzi|son] [明天|míngtiān|tomorrow] [考试，|kǎoshì,|has an exam,] [正|zhèng|is] [复习|fùxí|reviewing] [呢，|ne,|(emphasis)] [别|bié|don't] [影响|yǐngxiǎng|disturb] [他。|tā.|him.]</div>
          <div class="zh stem">[男：|Nán:|M:] [好，|hǎo,|OK,] [你|nǐ|you] [快|kuài|quickly] [过来|guòlái|come over] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W: What are you watching? You keep laughing.<br>M: The kittens and puppies in this program are so funny — come over and watch, clean the room later.<br>W: Turn the TV sound down — our son has an exam tomorrow and is reviewing, don't disturb him.<br>M: OK, come over quickly.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [现在|xiànzài|now] [要|yào|wants] [让|ràng|to have] [女的|nǚde|the woman] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the man want the woman to do now?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[把电视声音关小|bǎ diànshì shēngyīn guān xiǎo|turn down the TV]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[把房间打扫干净|bǎ fángjiān dǎsǎo gānjìng|clean the room]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[过来看电视节目|guòlái kàn diànshì jiémù|come watch the program]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[你|nǐ|Come] [快点|kuàidiǎn|quickly] [过来|guòlái|over] [吧|ba|(suggestion)]」→ [过来|guòlái|come over] [看|kàn|to watch] [节目。|jiémù|the show.]</div>
        </div>
        <div class="q" id="L14-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [这|zhè|this] [椅子|yǐzi|chair] [有点儿|yǒudiǎnr|a bit] [矮，|ǎi,|low,] [坐着|zuò zhe|sitting] [不|bù|not] [舒服。|shūfu.|comfortable.]</div>
          <div class="zh stem">[男：|Nán:|M:] [没关系，|méi guānxi,|It's OK,] [我们|wǒmen|we] [去|qù|go] [那边|nàbiān|over there] [看看，|kàn kan,|take a look,] [那儿|nàr|there] [也|yě|also] [有。|yǒu.|has some.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [这层|zhè céng|this floor] [有|yǒu|has] [桌子|zhuōzi|tables] [吗？|ma?|(question)] [今天|jīntiān|today] [把|bǎ|(BA)] [桌子、|zhuōzi,|tables,] [椅子|yǐzi|chairs] [都|dōu|all] [一起|yìqǐ|together] [换|huàn|change] [了|le|(change)] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [好，|hǎo,|OK,] [我们|wǒmen|we] [先|xiān|first] [看|kàn|look at] [椅子，|yǐzi,|chairs,] [再|zài|then] [看|kàn|look at] [桌子，|zhuōzi,|tables,] [然后|ránhòu|then] [去|qù|go] [吃饭。|chīfàn.|eat.]</div>
          <div class="sent-en">W: This chair is a bit low and uncomfortable to sit on.<br>M: It's OK — let's look over there, they have some too.<br>W: Does this floor have tables? Let's change both the tables and chairs today.<br>M: OK, first look at chairs, then tables, then go eat.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [在|zài|are] [做|zuò|doing] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What are they doing?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[看房子|kàn fángzi|looking at houses]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[买桌椅|mǎi zhuōyǐ|buying tables and chairs]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[找饭馆|zhǎo fànguǎn|looking for a restaurant]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[把|bǎ|(BA)] [桌子、|zhuōzi,|the table] [椅子|yǐzi|and chairs] [都|dōu|all] [一起|yìqǐ|together] [换|huàn|replace] [了|le|(change)] [吧|ba|(suggestion)]」→ [在|zài|is] [买|mǎi|buying] [桌椅。|zhuōyǐ|furniture.]</div>
        </div>
        <div class="q" id="L14-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [姐，|jiě,|Sis,] [你|nǐ|you] [听，|tīng,|listen,] [外边|wàibiān|outside] [是|shì|is] [谁|shéi|whose] [的|de|(possessive)] [声音？|shēngyīn?|voice?] [是不是|shì bú shì|is it] [爸爸|bàba|Dad] [回来|huílái|came back] [了？|le?|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [听不见|tīng bu jiàn|can't hear] [啊，|a,|,] [你|nǐ|you] [把|bǎ|(BA)] [音乐|yīnyuè|music] [声音|shēngyīn|sound] [关小|guān xiǎo|turn down] [些。|xiē.|a bit.]</div>
          <div class="zh stem">[男：|Nán:|M:] [不是|bú shì|It's not] [爸爸，|bàba,|Dad,] [是|shì|it's] [楼上|lóushàng|upstairs] [的|de|(possessive)] [周叔叔|Zhōu shūshu|Uncle Zhou] [在|zài|is] [说话。|shuōhuà.|talking.] [那|nà|then] [我|wǒ|I] [听歌|tīng gē|listen to songs] [了|le|(change)] [啊。|a.|(exclamation)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [别|bié|don't] [把|bǎ|(BA)] [声音|shēngyīn|sound] [开|kāi|turn] [那么|nàme|so] [大，|dà,|loud,] [我|wǒ|I] [想|xiǎng|want to] [安静|ānjìng|be quiet] [一会儿。|yíhuìr.|a while.]</div>
          <div class="sent-en">M: Sis, listen — whose voice is that outside? Is Dad back?<br>W: I can't hear. Turn the music down a bit.<br>M: It's not Dad — it's Uncle Zhou upstairs talking. Then I'll listen to songs.<br>W: Don't turn it up so loud — I want some quiet.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|why does the woman] [为什么|wèishénme|(why)] [让|ràng|ask] [男的|nánde|the man] [把|bǎ|to] [声音|shēngyīn|turn the sound] [关小？|guān xiǎo?|down?]</div>
          <div class="sent-en">Q: Why does the woman ask the man to turn the sound down?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[爸爸回来了|bàba huílái le|Dad came back]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[她要唱歌|tā yào chànggē|she wants to sing]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[她想安静一会儿|tā xiǎng ānjìng yíhuìr|she wants some quiet]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[我|wǒ|I] [想|xiǎng|want] [安静|ānjìng|some quiet] [一会儿|yíhuìr|for a while]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L14-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L14-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[好的，|hǎo de,|OK,] [周经理，|Zhōu jīnglǐ,|Manager Zhou,] [我|wǒ|I] [已经|yǐjīng|already] [把|bǎ|(BA)] [名单|míngdān|name list] [准备|zhǔnbèi|prepared] [好|hǎo|well] [了。|le.|(change)]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[老师，|lǎoshī,|Teacher,] [这个|zhège|this] [故事|gùshi|story] [要|yào|needs to] [写|xiě|write] [多少|duōshao|how many] [个|ge|(MW)] [字？|zì?|characters?]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[你|nǐ|you] [送完|sòng wán|after sending] [孩子|háizi|child] [就|jiù|then] [来|lái|come to] [办公室|bàngōngshì|office] [吗？|ma?|(question)]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[先|xiān|first] [放|fàng|put] [牛奶，|niúnǎi,|milk,] [1 分钟|yī fēnzhōng|1 minute] [以后|yǐhòu|after] [再|zài|then] [放|fàng|put] [鸡蛋。|jīdàn.|eggs.]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[爸爸，|bàba,|Dad,] [下午|xiàwǔ|afternoon] [你|nǐ|you] [来|lái|come] [接|jiē|pick up] [我|wǒ|me] [吧。|ba.|(suggestion)]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [去|qù|go] [那儿|nàr|there] [吗？|ma?|(question)] （E）</div>
          <div class="sent-en">Do you know how to get there? — (E) Of course. We take the bus first, then transfer to the subway.</div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L14-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[我|wǒ|I] [先|xiān|first] [送|sòng|send] [孩子，|háizi,|child,] [再|zài|then] [把|bǎ|(BA)] [衣服|yīfu|clothes] [送到|sòng dào|send to] [洗衣店，|xǐyīdiàn,|laundry,] [然后|ránhòu|then] [去|qù|go to] [上班。|shàngbān.|work.] （<span class="blank">　</span>）</div>
          <div class="sent-en">First I'll send the child, then take the clothes to the laundry, then go to work.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L14-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[这个|zhège|this] [菜|cài|dish] [怎么|zěnme|how] [做？|zuò?|make?] [先|xiān|first] [放|fàng|put] [鸡蛋|jīdàn|eggs] [再|zài|then] [放|fàng|put] [牛奶|niúnǎi|milk] [吗？|ma?|(question)] （<span class="blank">　</span>）</div>
          <div class="sent-en">How do you make this dish? First eggs then milk?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L14-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[好，|hǎo,|OK,] [我|wǒ|I] [先|xiān|first] [去|qù|go to] [公司|gōngsī|company] [接|jiē|pick up] [你|nǐ|your] [妈妈，|māma,|mom,] [然后|ránhòu|then] [到|dào|to] [学校|xuéxiào|school] [接|jiē|pick up] [你。|nǐ.|you.] （<span class="blank">　</span>）</div>
          <div class="sent-en">OK, first I'll pick up your mom at the company, then pick you up at school.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L14-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[请|qǐng|please] [同学们|tóngxuémen|classmates] [用|yòng|use] [黑板上|hēibǎn shang|on the blackboard] [的|de|(possessive)] [这|zhè|these] [10 个|shí ge|10] [词|cí|words] [写|xiě|write] [一个|yí ge|a] [小|xiǎo|short] [故事。|gùshi.|story.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Students, use these 10 words on the blackboard to write a short story.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L14-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[小刚，|Xiǎogāng,|Xiaogang,] [明天|míngtiān|tomorrow] [都|dōu|all] [有|yǒu|has] [谁|shéi|who] [参加|cānjiā|attend] [会议？|huìyì?|meeting?] [你|nǐ|you] [把|bǎ|(BA)] [名单|míngdān|name list] [拿过来。|ná guòlái.|bring over.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Xiaogang, who is attending the meeting tomorrow? Bring me the name list.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L14-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L14-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[打扫|dǎsǎo|clean]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[然后|ránhòu|then]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[节目|jiémù|program]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[简单|jiǎndān|simple]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[洗澡|xǐzǎo|shower]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[她|tā|she] [说话|shuōhuà|speaks] [的|de|(possessive)] （E [声音|shēngyīn|voice]） [多|duō|how] [好听|hǎotīng|nice] [啊！|a!|!]</div>
          <div class="sent-en">Her voice is so nice!</div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L14-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[游泳|yóuyǒng|Swimming] [以前|yǐqián|before] [应该|yīnggāi|should] [先|xiān|first] [吃点儿|chī diǎnr|eat some] [饭，|fàn,|food,] （<span class="blank">　</span>） [休息|xiūxi|rest] [半个小时。|bàn ge xiǎoshí.|half an hour.]</div>
          <div class="sent-en">Before swimming, you should eat a little, then rest for half an hour.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L14-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[小丽，|Xiǎolì,|Xiaoli,] [会议室|huìyìshì|meeting room] （<span class="blank">　</span>） [干净|gānjìng|clean] [了|le|(change)] [吗？|ma?|(question)] [别忘了|bié wàng le|don't forget] [把|bǎ|(BA)] [椅子|yǐzi|chairs] [放回去。|fàng huíqù.|put back.]</div>
          <div class="sent-en">Xiaoli, is the meeting room cleaned? Don't forget to put the chairs back.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L14-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[天气|tiānqì|weather] [这么|zhème|so] [热，|rè,|hot,] [回家|huí jiā|home] [以后|yǐhòu|after] [你|nǐ|you] [先|xiān|first] （<span class="blank">　</span>） [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">It's so hot — take a shower first when you get home.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L14-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [小丽，|Xiǎolì,|Xiaoli,] [我|wǒ|my] [的|de|(possessive)] [包|bāo|bag] [找不到|zhǎo bu dào|can't find] [了，|le,|,] [你|nǐ|you] [过来|guòlái|come over] [帮|bāng|help] [我|wǒ|me] [找找。|zhǎo zhao.|look.]</div>
          <div class="zh">[B：|B:|B:] [我|wǒ|I] [看完|kàn wán|finish watching] [了|le|(past)] [这个|zhège|this] （<span class="blank">　</span>） [就|jiù|then] [过去|guòqù|come over] [帮|bāng|help] [你。|nǐ.|you.]</div>
          <div class="sent-en">A: Xiaoli, I can't find my bag — come help me look.<br>B: I'll come help you after I finish watching this program.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L14-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [你|nǐ|you] [做|zuò|made] [的|de|(possessive)] [这个|zhège|this] [菜|cài|dish] [真|zhēn|really] [好吃，|hǎochī,|tasty,] [你|nǐ|you] [是|shì|how] [怎么|zěnme|did] [做|zuò|make] [的？|de?|(nominalizer)]</div>
          <div class="zh">[B：|B:|B:] [很|hěn|very] （<span class="blank">　</span>），[先|xiān|first] [把|bǎ|(BA)] [羊肉|yángròu|mutton] [放进去，|fàng jìnqù,|put in,] [再|zài|then] [放些|fàng xiē|put some] [牛奶|niúnǎi|milk] [和|hé|and] [菜，|cài,|vegetables,] [等|děng|wait] [半个小时|bàn ge xiǎoshí|half an hour] [就|jiù|then] [做好|zuò hǎo|is ready] [了。|le.|(change)]</div>
          <div class="sent-en">A: This dish you made is really tasty — how did you make it?<br>B: Very simple — first put in the mutton, then some milk and vegetables, wait half an hour and it's ready.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L14-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L14-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[小时候，|xiǎo shíhou,|When I was little,] [每年|měi nián|every year] [12 月 25 号|shí'èr yuè èrshíwǔ hào|December 25th] [那天|nà tiān|that day] [早上，|zǎoshang,|morning,] [我|wǒ|I] [都|dōu|all] [能|néng|can] [看到|kàndào|see] [床上|chuáng shang|on the bed] [放着|fàng zhe|placed] [一件|yí jiàn|a] [礼物。|lǐwù.|gift.] [妈妈|māma|Mom] [告诉|gàosu|told] [我，|wǒ,|me,] [那|nà|that] [是|shì|was] [前一天|qián yì tiān|the day before] [晚上|wǎnshang|night] [一个|yí ge|a] [穿|chuān|wearing] [红衣服|hóng yīfu|red clothes] [的|de|(possessive)] [老爷爷|lǎoyéye|old man] [把|bǎ|(BA)] [礼物|lǐwù|gift] [送来|sòng lái|delivered] [的。|de.|(nominalizer)] [现在|xiànzài|now] [我|wǒ|I] [懂|dǒng|understand] [了：|le:|(change)] [其实|qíshí|actually] [妈妈|māma|Mom] [就是|jiùshì|is] [那个|nàge|that] [老人，|lǎorén,|old person,] [是|shì|it was] [她|tā|she] [在|zài|when] [我|wǒ|I] [睡着|shuì zháo|fell asleep] [的|de|(possessive)] [时候|shíhou|time] [把|bǎ|(BA)] [礼物|lǐwù|gift] [放在|fàng zài|placed on] [我|wǒ|my] [床上|chuáng shang|bed] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">When I was little, every year on the morning of December 25th I would see a gift on my bed. Mom told me it was delivered the night before by an old man in red clothes. Now I understand: actually Mom was that old person — she put the gift on my bed while I was asleep.</div>
          <div class="zh ask">★ [我|wǒ|Now I] [现在|xiànzài|(now)] [明白，|míngbai,|understand,] [礼物：|lǐwù:|gifts:]</div>
          <div class="sent-en">★ Now I understand — gifts: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[是妈妈送来的|shì māma sòng lái de|was given by Mom]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[是老爷爷送来的|shì lǎoyéye sòng lái de|was given by an old man]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[是我爷爷送来的|shì wǒ yéye sòng lái de|was given by my grandpa]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[其实|qíshí|Actually,] [妈妈|māma|Mom] [就是|jiùshì|is] [那个|nàge|that] [老人|lǎorén|old man]」。</div>
        </div>
        <div class="q" id="L14-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[有|yǒu|There are] [很多|hěnduō|many] [人|rén|people] [问|wèn|ask] [什么时候|shénme shíhou|when] [吃|chī|eating] [水果|shuǐguǒ|fruit] [比较|bǐjiào|relatively] [健康，|jiànkāng,|healthy,] [在|zài|on] [今天|jīntiān|today] [的|de|(possessive)] [《健康 123》|“Jiànkāng 123”|"Health 123"] [节目|jiémù|program] [里，|li,|in,] [我|wǒ|I] [来|lái|come] [告诉|gàosu|tell] [大家|dàjiā|everyone] [怎么|zěnme|how] [吃|chī|eat] [水果|shuǐguǒ|fruit] [对|duì|to] [身体|shēntǐ|body] [最好。|zuì hǎo.|best.] [其实，|qíshí,|Actually,] [上午|shàngwǔ|morning] [吃|chī|eating] [水果|shuǐguǒ|fruit] [最|zuì|most] [健康，|jiànkāng,|healthy,] [晚饭后|wǎnfàn hòu|after dinner] [和|hé|and] [睡觉前|shuìjiào qián|before bed] [最好|zuì hǎo|best] [不要|bú yào|not] [吃。|chī.|eat.] [吃|chī|eating] [水果|shuǐguǒ|fruit] [的|de|(possessive)] [时间|shíjiān|time] [应该|yīnggāi|should] [在|zài|be] [饭前|fànqián|before meals] [1 到 2 小时。|yī dào èr xiǎoshí.|1 to 2 hours.] [当然，|dāngrán,|Of course,] [一定|yídìng|definitely] [要|yào|must] [把|bǎ|(BA)] [水果|shuǐguǒ|fruit] [洗|xǐ|wash] [干净|gānjìng|clean] [再|zài|then] [吃。|chī.|eat.]</div>
          <div class="sent-en">Many people ask when eating fruit is healthier. On today's "Health 123" program, I'll tell everyone how to eat fruit for the best health. Actually, eating fruit in the morning is healthiest; after dinner and before bed it's best not to eat. Fruit should be eaten 1 to 2 hours before meals. Of course, you must wash the fruit clean before eating.</div>
          <div class="zh ask">★ [什么|shénme|When] [时候|shíhou|is the best time] [吃|chī|to eat] [水果|shuǐguǒ|fruit] [最好？|zuì hǎo?|(best)?]</div>
          <div class="sent-en">★ When is the best time to eat fruit?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[午饭前 1-2 小时|wǔfàn qián yī dào èr xiǎoshí|1-2 hours before lunch]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[晚饭后 1-2 小时|wǎnfàn hòu yī dào èr xiǎoshí|1-2 hours after dinner]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[睡觉前 1-2 小时|shuìjiào qián yī dào èr xiǎoshí|1-2 hours before bed]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[饭前|fàn qián|1 to 2 hours] 1 [到|dào|before] 2 [小时|xiǎoshí|meals]」。</div>
        </div>
        <div class="q" id="L14-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[你|nǐ|you] [一定|yídìng|certainly] [喝过|hē guò|drunk] [茶，|chá,|tea,] [也|yě|also] [吃过|chī guò|eaten] [水果。|shuǐguǒ.|fruit.] [但|dàn|But] [你|nǐ|you] [喝过|hē guò|drunk] [水果茶|shuǐguǒ chá|fruit tea] [吗？|ma?|(question)] [自己|zìjǐ|yourself] [做过|zuò guò|made] [水果茶|shuǐguǒ chá|fruit tea] [吗？|ma?|(question)] [自己|zìjǐ|yourself] [做|zuò|made] [的|de|(possessive)] [比|bǐ|than] [外边|wàibiān|outside] [买|mǎi|bought] [的|de|(possessive)] [健康|jiànkāng|healthier] [得多。|de duō.|much.] [其实|qíshí|Actually] [做|zuò|making] [水果茶|shuǐguǒ chá|fruit tea] [很|hěn|very] [简单，|jiǎndān,|simple,] [先|xiān|first] [把|bǎ|(BA)] [茶|chá|tea] [放进|fàng jìn|put into] [杯子，|bēizi,|cup,] [再|zài|then] [放|fàng|put] [一些|yìxiē|some] [热水，|rè shuǐ,|hot water,] [然后|ránhòu|then] [把|bǎ|(BA)] [小块儿|xiǎo kuàir|small pieces] [水果|shuǐguǒ|fruit] [放进去，|fàng jìnqù,|put in,] [等|děng|wait] [一会儿|yíhuìr|a while] [就|jiù|then] [能|néng|can] [喝|hē|drink] [了。|le.|(change)]</div>
          <div class="sent-en">You've certainly drunk tea and eaten fruit. But have you drunk fruit tea? Made fruit tea yourself? Homemade is much healthier than bought. Actually making fruit tea is very simple: first put tea in a cup, then add some hot water, then put in small pieces of fruit, wait a while and you can drink it.</div>
          <div class="zh ask">★ [做|zuò|Making] [水果茶：|shuǐguǒ chá:|fruit tea:]</div>
          <div class="sent-en">★ Making fruit tea: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不容易|bù róngyì|not easy]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[比外边买的健康|bǐ wàibiān mǎi de jiànkāng|healthier than bought]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[要用大块水果|yào yòng dà kuài shuǐguǒ|need large pieces of fruit]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[自己|zìjǐ|Homemade] [做|zuò|(made)] [的|de|(nominalizer)] [比|bǐ|is much] [外边|wàibiān|outside] [买|mǎi|bought] [的|de|(nominalizer)] [健康|jiànkāng|healthier] [得|de|(complement)] [多|duō|(much)]」。</div>
        </div>
        <div class="q" id="L14-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[今天|jīntiān|Today] [真|zhēn|really] [把|bǎ|(BA)] [我|wǒ|me] [累坏|lèi huài|exhausted] [了。|le.|(change)] [我们|wǒmen|we] [说好|shuō hǎo|agreed] [了|le|(change)] [今天|jīntiān|today] [搬家，|bānjiā,|move,] [没想到|méi xiǎngdào|didn't expect] [丈夫|zhàngfu|husband] [突然|tūrán|suddenly] [有事|yǒu shì|had something] [出国。|chūguó.|go abroad.] [新家|xīn jiā|new home] [在|zài|on] [四楼，|sì lóu,|the 4th floor,] [我|wǒ|I] [只好|zhǐhǎo|had to] [打电话|dǎ diànhuà|call] [给|gěi|to] [搬家公司|bānjiā gōngsī|moving company,] [请|qǐng|ask] [他们|tāmen|them] [把|bǎ|(BA)] [桌椅、|zhuōyǐ,|tables and chairs,] [电视、|diànshì,|TV,] [电脑|diànnǎo|computer] [都|dōu|all] [搬|bān|move] [上去。|shàngqù.|up.] [等|děng|After] [他们|tāmen|they] [走|zǒu|left] [了，|le,|,] [我|wǒ|I] [又|yòu|again] [一个人|yí ge rén|alone] [把|bǎ|(BA)] [每个|měi ge|every] [房间|fángjiān|room] [都|dōu|all] [打扫|dǎsǎo|clean] [干净。|gānjìng.|clean.] [看|kàn|Look at] [了|le|(past)] [看表，|kàn biǎo,|the watch,] [已经|yǐjīng|already] [晚上|wǎnshang|evening] [9 点|jiǔ diǎn|9 o'clock] [了。|le.|(change)]</div>
          <div class="sent-en">Today really exhausted me. We agreed to move today, but unexpectedly my husband suddenly had to go abroad. The new home is on the 4th floor, so I had to call a moving company to move the tables, chairs, TV and computer up. After they left, I cleaned every room by myself. I looked at my watch — it was already 9 pm.</div>
          <div class="zh ask">★ [今天|jīntiān|Moving today,] [搬家，|bānjiā,|(moving),] [我：|wǒ:|I:]</div>
          <div class="sent-en">★ Moving today, I: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[请搬家公司帮忙|qǐng bānjiā gōngsī bāngmáng|asked a moving company for help]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[没打扫房间|méi dǎsǎo fángjiān|didn't clean the room]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[给丈夫打电话帮忙|gěi zhàngfu dǎ diànhuà bāngmáng|called husband to help]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[只好|zhǐhǎo|had no choice but] [打电话|dǎ diànhuà|to call] [给|gěi|(to)] [搬家公司|bānjiā gōngsī|the moving company]」。</div>
        </div>
        <div class="q" id="L14-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[方阿姨|Fāng āyí|Aunt Fang] [的|de|(possessive)] [丈夫|zhàngfu|husband] [每天|měitiān|every day] [回家|huí jiā|comes home] [都|dōu|all] [做|zuò|does] [一样|yíyàng|the same] [的|de|(possessive)] [事：|shì:|things:] [先|xiān|first] [吃饭，|chīfàn,|eat,] [再|zài|then] [洗澡，|xǐzǎo,|shower,] [然后|ránhòu|then] [从|cóng|from] [冰箱|bīngxiāng|fridge] [里|li|inside] [拿出|ná chū|take out] [一瓶|yì píng|a bottle of] [酒，|jiǔ,|wine,] [坐|zuò|sit] [在|zài|at] [电视|diànshì|TV] [前，|qián,|in front of,] [边|biān|while] [看|kàn|watching] [节目|jiémù|program] [边|biān|while] [喝。|hē.|drinking.] [他|tā|he] [说，|shuō,|says,] [这样|zhèyàng|this] [的|de|(possessive)] [生活|shēnghuó|life] [是|shì|is] [最|zuì|most] [舒服|shūfu|comfortable] [的。|de.|(nominalizer)] [但是|dànshì|but] [方阿姨|Fāng āyí|Aunt Fang] [说，|shuō,|says,] [这样|zhèyàng|this] [的|de|(possessive)] [生活|shēnghuó|life] [是|shì|is] [最|zuì|most] [累|lěi|tiring] [的，|de,|,] [因为|yīnwèi|because] [她|tā|she] [要|yào|has to] [把|bǎ|(BA)] [饭|fàn|meal] [做好，|zuò hǎo,|cook,] [还|hái|also] [要|yào|has to] [把|bǎ|(BA)] [杯子、|bēizi,|cups,] [盘子|pánzi|plates] [和|hé|and] [衣服|yīfu|clothes] [都|dōu|all] [洗|xǐ|wash] [干净。|gānjìng.|clean.]</div>
          <div class="sent-en">Aunt Fang's husband does the same thing every day when he comes home: first eats, then showers, then takes a bottle of wine from the fridge, sits in front of the TV, and drinks while watching programs. He says this life is the most comfortable. But Aunt Fang says this life is the most tiring, because she has to cook the meal and wash all the cups, plates and clothes clean.</div>
          <div class="zh ask">★ [方阿姨|Fāng āyí|Aunt Fang] [每天：|měitiān:|every day:]</div>
          <div class="sent-en">★ Aunt Fang every day: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[都要喝点儿酒|dōu yào hē diǎnr jiǔ|always drinks some wine]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[到了家就吃饭|dào le jiā jiù chīfàn|eats as soon as she gets home]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[做饭、洗盘子和杯子|zuòfàn, xǐ pánzi hé bēizi|cooks, washes plates and cups]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[她|tā|She] [要|yào|has to] [把|bǎ|(BA)] [饭|fàn|the meal] [做好，|zuò hǎo,|cook well,] [还|hái|and also] [要|yào|(has to)] [把|bǎ|(BA)] [杯子、|bēizi,|the cups,] [盘子|pánzi|plates] [和|hé|and] [衣服|yīfu|clothes] [都|dōu|all] [洗|xǐ|wash] [干净|gānjìng|clean]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L14-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L14-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[把|bǎ|(BA)] [大家|dàjiā|everyone] [请|qǐng|please] [书|shū|books] [出来|chūlái|out] [拿|ná|take]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[请|qǐng|Everyone please] [大家|dàjiā|(everyone)] [把|bǎ|(BA)] [书|shū|your books] [拿出来。|ná chūlái|take out.]<div class="sent-en">Everyone please take out your books.</div></div>
        </div>
        <div class="write-item" id="L14-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[写|xiě|write] [名字|míngzi|name] [然后|ránhòu|then] [应该|yīnggāi|should] [先|xiān|first] [做题|zuò tí|do questions]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[应该|yīnggāi|You should] [先|xiān|first] [写|xiě|write] [名字|míngzi|your name] [然后|ránhòu|then] [做|zuò|do] [题。|tí|the questions.]<div class="sent-en">You should write your name first, then do the questions.</div></div>
        </div>
        <div class="write-item" id="L14-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[干净|gānjìng|clean] [把|bǎ|(BA)] [房间|fángjiān|room] [快|kuài|quickly] [打扫|dǎsǎo|clean]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[快|kuài|Quickly] [把|bǎ|(BA)] [房间|fángjiān|the room] [打扫|dǎsǎo|clean] [干净。|gānjìng|(clean).]<div class="sent-en">Quickly clean the room.</div></div>
        </div>
        <div class="write-item" id="L14-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[再|zài|then] [教|jiāo|teach] [读音|dúyīn|pronunciation] [先|xiān|first] [汉字|Hànzì|characters] [教|jiāo|teach] [老师|lǎoshī|teacher]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[老师|lǎoshī|The teacher] [先|xiān|first] [教|jiāo|teaches] [读音|dúyīn|pronunciation] [再|zài|then] [教|jiāo|teaches] [汉字。|Hànzì|characters.]<div class="sent-en">The teacher teaches pronunciation first, then characters.</div></div>
        </div>
        <div class="write-item" id="L14-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[可以|kěyǐ|can] [你|nǐ|you] [小|xiǎo|small] [关|guān|turn down] [一点儿|yìdiǎnr|a bit] [电视声音|diànshì shēngyīn|TV sound] [把|bǎ|(BA)] [吗|ma|(question)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|Can you] [可以|kěyǐ|(can)] [把|bǎ|(BA)] [电视|diànshì|the TV] [声音|shēngyīn|volume] [关小|guān xiǎo|turn down] [一点儿|yìdiǎnr|a bit] [吗？|ma?|(question)]<div class="sent-en">Can you turn the TV sound down a bit?</div></div>
        </div>

        <h4 id="L14-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L14-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[你|nǐ|you] [把|bǎ|(BA)] [房间|fángjiān|room] [打扫|dǎsǎo|clean] [得|de|(complement)] [真|zhēn|really] [干|gān|dry] <span class="blank-input"><span class="input-py">jìng</span><input type="text" data-ans="净"></span>。</div>
          <div class="sent-en">You cleaned the room really clean.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[净|jìng|clean]（[干净|gānjìng|clean]）</span></div>
        </div>
        <div class="write-item" id="L14-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[水果|shuǐguǒ|fruit] [就|jiù|is] [在|zài|in] <span class="blank-input"><span class="input-py">bīng</span><input type="text" data-ans="冰"></span> [箱|xiāng|box] [里，|li,|inside,] [你|nǐ|you] [把|bǎ|(BA)] [它们|tāmen|them] [都|dōu|all] [拿出来|ná chūlái|take out] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">The fruit is in the fridge — take it all out.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[冰|bīng|ice]（[冰箱|bīngxiāng|fridge]）</span></div>
        </div>
        <div class="write-item" id="L14-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[你|nǐ|you] [先|xiān|first] [去|qù|go] [洗|xǐ|wash] [个|ge|(MW)] <span class="blank-input"><span class="input-py">zǎo</span><input type="text" data-ans="澡"></span>，[然后|ránhòu|then] [出来|chūlái|come out] [吃饭。|chīfàn.|eat.]</div>
          <div class="sent-en">Go take a shower first, then come out and eat.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[澡|zǎo|bath]（[洗澡|xǐzǎo|shower]）</span></div>
        </div>
        <div class="write-item" id="L14-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[外边|wàibiān|outside] [在|zài|is] [刮|guā|blowing] [大|dà|big] <span class="blank-input"><span class="input-py">fēng</span><input type="text" data-ans="风"></span>，[我们|wǒmen|we] [别|bié|don't] [出去|chūqù|go out] [了，|le,|,] [在家|zài jiā|at home] [看|kàn|watch] [电视|diànshì|TV] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">It's windy outside — let's not go out, stay home and watch TV.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[风|fēng|wind]</span></div>
        </div>
        <div class="write-item" id="L14-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[其实，|qíshí,|Actually,] [做饭|zuòfàn|cooking] [很|hěn|very] <span class="blank-input"><span class="input-py">jiǎn</span><input type="text" data-ans="简"></span> [单，|dān,|simple,] [主要|zhǔyào|mainly] [是|shì|is] [要|yào|need to] [有|yǒu|have] [兴趣。|xìngqù.|interest.]</div>
          <div class="sent-en">Actually cooking is very simple — mainly you need to have interest.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[简|jiǎn|simple]（[简单|jiǎndān|simple]）</span></div>
        </div>

        <h4 id="L14-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L14-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[忙|máng|busy] [了|le|(past)] [一天，|yì tiān,|a whole day,] [终|zhōng|finally] <span class="blank-input"><input type="text" data-ans="于"></span> [把|bǎ|(BA)] [房间|fángjiān|room] [都|dōu|all] [打扫|dǎsǎo|clean] <span class="blank-input"><input type="text" data-ans="干"></span> [净|jìng|clean] [了！|le!|(change)]</div>
          <div class="zh" style="margin-top:6px;">[于|yú|at]　[干|gān|dry]</div>
          <div class="sent-en">Busy all day — finally cleaned all the rooms!</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[于|yú|(as in 关于 “about”)]、[干|gàn|(as in 干净 “clean”)]</div>
        </div>
        <div class="write-item" id="L14-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[你们|nǐmen|you] [听，|tīng,|listen,] [白|Bái|Bai] <span class="blank-input"><input type="text" data-ans="阿"></span> [姨|yí|aunt] [唱歌|chànggē|singing] [的|de|(possessive)] [声音|shēngyīn|voice] [多|duō|how] [好听|hǎotīng|nice] <span class="blank-input"><input type="text" data-ans="啊"></span>！</div>
          <div class="zh" style="margin-top:6px;">[阿|ā|(prefix)]　[啊|a|(exclamation)]</div>
          <div class="sent-en">Listen, Aunt Bai's singing voice is so nice!</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[阿|ā|(as in 阿姨 “aunt”)]、[啊|a|(as in 好啊 “OK”)]</div>
        </div>
        <div class="write-item" id="L14-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[姐姐，|jiějie,|Sister,] [你|nǐ|you] <span class="blank-input"><input type="text" data-ans="做"></span> [完|wán|finish] [作业|zuòyè|homework] [以后|yǐhòu|after] [给|gěi|to] [我|wǒ|me] [讲|jiǎng|tell] [一个|yí ge|a] <span class="blank-input"><input type="text" data-ans="故"></span> [事|shì|story] [吧。|ba.|(suggestion)]</div>
          <div class="zh" style="margin-top:6px;">[做|zuò|do]　[故|gù|old]</div>
          <div class="sent-en">Sister, tell me a story after you finish your homework.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[做|zuò|(as in 做饭 “cook”)]、[故|gù|(as in 故事 “story”)]</div>
        </div>
        <div class="write-item" id="L14-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[夏天|xiàtiān|summer] [游完|yóu wán|after swimming] <span class="blank-input"><input type="text" data-ans="泳"></span> [以后，|yǐhòu,|after,] [再|zài|then] [喝|hē|drink] [一杯|yì bēi|a cup of] <span class="blank-input"><input type="text" data-ans="冰"></span> [水，|shuǐ,|water,] [特别|tèbié|especially] [舒服。|shūfu.|comfortable.]</div>
          <div class="zh" style="margin-top:6px;">[泳|yǒng|swim]　[冰|bīng|ice]</div>
          <div class="sent-en">After swimming in summer, drinking a cup of ice water is especially comfortable.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[泳|yǒng|(as in 游泳 “swim”)]、[冰|bīng|(as in 冰箱 “fridge”)]</div>
        </div>
        <div class="write-item" id="L14-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[妈妈|māma|Mom] [你看，|nǐ kàn,|look,] [月|yuè|moon] <span class="blank-input"><input type="text" data-ans="亮"></span> [在|zài|is] [那么|nàme|so] <span class="blank-input"><input type="text" data-ans="高"></span> [的|de|(possessive)] [地方，|dìfang,|place,] [我们|wǒmen|we] [能|néng|can] [上去|shàngqù|go up] [看看|kàn kan|take a look] [吗？|ma?|(question)]</div>
          <div class="zh" style="margin-top:6px;">[亮|liàng|bright]　[高|gāo|high]</div>
          <div class="sent-en">Mom, look — the moon is in such a high place. Can we go up and take a look?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[亮|liàng|(as in 漂亮 “pretty”)]、[高|gāo|(as in 高兴 “happy”)]</div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L14-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [客人|kèrén|Guests] [就要|jiù yào|are about to] [来|lái|come] [了，|le,|,] [周明|Zhōu Míng|Zhou Ming] [让|ràng|asks] [孩子们|háizimen|the children] [把|bǎ|(BA)] [房间|fángjiān|room]
            <span class="blank-input review-blank"><span class="input-py">dǎsǎo gānjìng</span><input type="text" data-ans="打扫干净"></span>。
            [周太太|Zhōu tàitai|Mrs. Zhou] [让|ràng|asks] [他|tā|him] [把|bǎ|(BA)] [茶|chá|tea] [和|hé|and] [杯子|bēizi|cups]
            <span class="blank-input review-blank"><span class="input-py">fàng hǎo</span><input type="text" data-ans="放好"></span>
            [然后|ránhòu|then] [把|bǎ|(BA)]
            <span class="blank-input review-blank"><span class="input-py">bīngxiāng</span><input type="text" data-ans="冰箱"></span>
            [里|li|inside] [的|de|(possessive)] [西瓜|xīguā|watermelon]
            <span class="blank-input review-blank"><span class="input-py">ná chūlái</span><input type="text" data-ans="拿出来"></span>。
            [周明|Zhōu Míng|Zhou Ming] [觉得|juéde|feels] [太热|tài rè|too hot] [了，|le,|,] [他|tā|he] [要|yào|wants to] [先|xiān|first] [把|bǎ|(BA)] [空调|kōngtiáo|air conditioner]
            <span class="blank-input review-blank"><span class="input-py">dǎkāi</span><input type="text" data-ans="打开"></span>。
          </div>
          <div class="sent-en">Guests are about to arrive. Zhou Ming asks the children to clean the room. Mrs. Zhou asks him to put the tea and cups ready, then take the watermelon out of the fridge. Zhou Ming feels too hot — he wants to turn on the air conditioner first.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[打扫干净|dǎsǎo gānjìng|clean]、[放好|fàng hǎo|put ready]、[冰箱|bīngxiāng|fridge]、[拿出来|ná chūlái|take out]、[打开|dǎkāi|turn on]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [今晚|jīnwǎn|Tonight] [的|de|(possessive)] [月亮|yuèliang|moon] [很|hěn|very] [漂亮，|piàoliang,|beautiful,] [外边|wàibiān|outside] [也|yě|also] [不|bù|not]
            <span class="blank-input review-blank"><span class="input-py">guā fēng</span><input type="text" data-ans="刮风"></span>，
            [小明|Xiǎomíng|Xiaoming] [和|hé|and] [同学|tóngxué|classmates] [打算|dǎsuàn|plan to] [一边|yìbiān|while] [吃|chī|eat] [东西|dōngxi|things] [一边|yìbiān|while] [听|tīng|listen to] [叔叔阿姨|shūshu āyí|uncle and auntie] [讲|jiǎng|tell]
            <span class="blank-input review-blank"><span class="input-py">gùshi</span><input type="text" data-ans="故事"></span>。
            [他们|tāmen|they]
            <span class="blank-input review-blank"><span class="input-py">xiān</span><input type="text" data-ans="先"></span>
            [把|bǎ|(BA)] [桌椅|zhuōyǐ|tables and chairs] [搬出去，|bān chūqù,|move out,]
            <span class="blank-input review-blank"><span class="input-py">ránhòu</span><input type="text" data-ans="然后"></span>
            [把|bǎ|(BA)] [水果|shuǐguǒ|fruit] [拿过来。|ná guòlái.|bring over.] [小明|Xiǎomíng|Xiaoming] [的|de|(possessive)] [同学|tóngxué|classmate] [听见|tīngjiàn|hears] [外边|wàibiān|outside] [有|yǒu|there is]
            <span class="blank-input review-blank"><span class="input-py">shēngyīn</span><input type="text" data-ans="声音"></span>，[一定|yídìng|must] [是|shì|be] [大山|Dàshān|Dashan] [来|lái|came] [了。|le.|(change)]
          </div>
          <div class="sent-en">Tonight the moon is beautiful and there's no wind outside. Xiaoming and his classmates plan to eat while listening to uncle and auntie tell stories. They'll first move the tables and chairs out, then bring the fruit over. Xiaoming's classmate hears a sound outside — it must be Dashan arriving.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[刮风|guā fēng|windy]、[故事|gùshi|story]、[先|xiān|first]、[然后|ránhòu|then]、[声音|shēngyīn|sound]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[15] = {
  navLabel:'第15课',
  html: `
    <div class="lesson">
      <h2>第 15 课　其他都没什么问题
        <span class="title-py">Dì shíwǔ kè · Qítā dōu méi shénme wèntí</span>
        <small>Lesson 15 · The rest of them are all OK</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L15-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图15.png" alt="听力图15" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图15.png</b></span>
        </div>

        <div class="q" id="L15-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[男1：|Nán1:|M1:] [你|nǐ|your] [现在|xiànzài|now] [打篮球|dǎ lánqiú|playing basketball] [的|de|(possessive)] [水平|shuǐpíng|level] [越来越|yuè lái yuè|higher and higher] [高|gāo|is high] [了。|le.|(change)]</div>
          <div class="zh stem">[男2：|Nán2:|M2:] [我|wǒ|I] [觉得|juéde|feel] [没什么|méi shénme|no] [提高，|tígāo,|improvement,] [还|hái|still] [跟|gēn|as] [以前|yǐqián|before] [一样。|yíyàng.|the same.]</div>
          <div class="sent-en">M1: Your basketball level is getting higher and higher.<br>M2: I don't feel any improvement — still the same as before.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[打篮球|dǎ lánqiú|playing basketball]）</div>
        </div>
        <div class="q" id="L15-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [要|yào|are going to] [发|fā|send] [电子邮件|diànzǐ yóujiàn|email] [吗？|ma?|(question)] [我|wǒ|I] [去|qù|go] [把|bǎ|(BA)] [电脑|diànnǎo|computer] [打开。|dǎkāi.|turn on.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [不用，|búyòng,|No need,] [我|wǒ|my] [的|de|(possessive)] [手机|shǒujī|phone] [能|néng|can] [上网，|shàngwǎng,|go online,] [用|yòng|using] [手机|shǒujī|phone] [也|yě|also] [能|néng|can] [发。|fā.|send.]</div>
          <div class="sent-en">M: Are you going to send an email? Let me turn on the computer.<br>W: No need — my phone can go online, I can send it with the phone too.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[手机|shǒujī|a phone]）</div>
        </div>
        <div class="q" id="L15-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[男1：|Nán1:|M1:] [你们这儿|nǐmen zhèr|your place] [除了|chúle|besides] [鱼|yú|fish] [以外，|yǐwài,|,] [还有|háiyǒu|also has] [什么|shénme|what] [好吃|hǎochī|tasty] [的|de|(nominalizer)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男2：|Nán2:|M2:] [今天|jīntiān|today] [的|de|(possessive)] [羊肉|yángròu|mutton] [也|yě|also] [很|hěn|very] [新鲜，|xīnxiān,|fresh,] [您|nín|you] [要|yào|want to] [不要|bú yào|or not] [来|lái|have] [一个？|yí ge?|one?]</div>
          <div class="sent-en">M1: Besides fish, what else is tasty here?<br>M2: Today's mutton is also very fresh — would you like one?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[餐厅|cāntīng|a restaurant] [菜单|càidān|menu]）</div>
        </div>
        <div class="q" id="L15-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这个月|zhège yuè|this month] [你|nǐ|you] [怎么|zěnme|why] [花|huā|spent] [了|le|(past)] [这么|zhème|so] [多|duō|much] [钱？|qián?|money?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [记得|jìde|remember] [我|wǒ|I] [只|zhǐ|only] [买了|mǎi le|bought] [几件|jǐ jiàn|a few] [衣服，|yīfu,|clothes,] [其他|qítā|other] [也|yě|also] [没|méi|not] [买|mǎi|buy] [什么|shénme|what] [啊。|a.|(exclamation)]</div>
          <div class="sent-en">M: Why did you spend so much money this month?<br>W: I remember I only bought a few clothes — I didn't buy anything else.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[买东西|mǎi dōngxi|shopping] / [账单|zhàngdān|a bill]）</div>
        </div>
        <div class="q" id="L15-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[男：|Nán:|M:] [看|kàn|look] [什么|shénme|what] [呢？|ne?|(question)] [今天|jīntiān|today] [报纸|bàozhǐ|newspaper] [上|shàng|on] [有|yǒu|there is] [什么|shénme|what] [新闻|xīnwén|news] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [没|méi|didn't] [看|kàn|read] [新闻，|xīnwén,|news,] [我|wǒ|I] [看看|kàn kan|check] [今天|jīntiān|today] [天气|tiānqì|weather] [怎么样。|zěnmeyàng.|how it is.]</div>
          <div class="sent-en">M: What are you reading? Is there any news in today's paper?<br>W: I'm not reading news — I'm checking today's weather.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[看|kàn|reading] [报纸|bàozhǐ|a newspaper]）</div>
        </div>

        <h4 id="L15-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L15-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[叔叔|shūshu|Uncle] [让|ràng|asked] [我|wǒ|me] [花时间|huā shíjiān|spend time] [认真地|rènzhēn de|carefully] [读一读|dú yi dú|read] [这本书，|zhè běn shū,|this book,] [他|tā|he] [说|shuō|says] [书里|shū li|in the book] [的|de|(possessive)] [故事|gùshi|story] [对|duì|to] [他|tā|his] [的|de|(possessive)] [影响|yǐngxiǎng|influence] [很大。|hěn dà.|is great.] [他|tā|he] [希望|xīwàng|hopes] [我|wǒ|I] [也|yě|also] [能|néng|can] [从|cóng|from] [书里|shū li|the book] [学到|xué dào|learn] [一些|yìxiē|some] [东西。|dōngxi.|things.]</div>
          <div class="sent-en">Uncle asked me to spend time carefully reading this book. He says the story in it influenced him greatly, and he hopes I can also learn something from it.</div>
          <div class="zh stem">★ [叔叔|shūshu|Uncle] [希望|xīwàng|hopes] [我|wǒ|I] [花钱|huā qián|spend money] [买本书。|mǎi běn shū.|buy a book.]</div>
          <div class="sent-en">★ Uncle hopes I spend money to buy a book.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It’s] [花|huā|spending] [时间|shíjiān|time] [读书，|dúshū,|reading,] [不是|bú shì|not] [花|huā|spending] [钱|qián|money] [买书。|mǎi shū|buying books.]" data-expl-en="Spend time reading, not money buying."></div>
        </div>
        <div class="q" id="L15-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[每天|měitiān|every day] [晚上|wǎnshang|evening] [的|de|(possessive)] [这个|zhège|this] [时间，|shíjiān,|time,] [电视|diànshì|TV] [上|shàng|on] [除了|chúle|besides] [新闻|xīnwén|news] [以外，|yǐwài,|,] [没什么|méi shénme|nothing] [其他|qítā|other] [节目，|jiémù,|programs,] [所以|suǒyǐ|so] [弟弟|dìdi|younger brother] [只好|zhǐhǎo|had to] [上网|shàngwǎng|go online] [看|kàn|watch] [自己|zìjǐ|himself] [喜欢|xǐhuan|like] [的|de|(possessive)] [电视节目。|diànshì jiémù.|TV programs.]</div>
          <div class="sent-en">Every evening at this time, there's nothing on TV besides news, so my younger brother has to go online to watch TV programs he likes.</div>
          <div class="zh stem">★ [弟弟|dìdi|Younger brother] [每天|měitiān|every day] [晚上|wǎnshang|evening] [都|dōu|all] [上网|shàngwǎng|goes online] [看|kàn|watches] [新闻。|xīnwén.|news.]</div>
          <div class="sent-en">★ Younger brother goes online to watch news every evening.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[他|tā|He] [上网|shàngwǎng|goes online] [看|kàn|to watch] [喜欢|xǐhuan|his favorite] [的|de|(possessive)] [电视节目，|diànshì jiémù,|TV shows,] [不是|bú shì|not] [看|kàn|watch] [新闻。|xīnwén|the news.]" data-expl-en="He watches programs he likes online, not news."></div>
        </div>
        <div class="q" id="L15-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[女儿|nǚ'ér|My daughter] [在|zài|abroad] [国外|guówài|abroad] [留学|líuxué|studying] [三年|sān nián|three years] [了，|le,|,] [除了|chúle|besides] [每天|měitiān|every day] [上课|shàngkè|class] [学习|xuéxí|studying] [以外，|yǐwài,|,] [课后|kèhòu|after class] [还|hái|also] [要|yào|has to] [去|qù|go to] [饭馆|fànguǎn|restaurant] [帮忙|bāngmáng|help] [洗盘子。|xǐ pánzi.|wash dishes.] [虽然|suīrán|although] [每个月|měi ge yuè|every month] [我们|wǒmen|we] [都|dōu|all] [给|gěi|to] [她|tā|her] [不少|bùshǎo|quite a lot of] [钱，|qián,|money,] [但是|dànshì|but] [她|tā|she] [说|shuō|says] [花|huā|spend] [自己|zìjǐ|own] [的|de|(possessive)] [钱|qián|money] [更|gèng|more] [舒服。|shūfu.|comfortable.]</div>
          <div class="sent-en">My daughter has been studying abroad for three years. Besides daily classes, after class she also has to help wash dishes at a restaurant. Although we give her quite a lot of money every month, she says spending her own money feels better.</div>
          <div class="zh stem">★ [女儿|nǚ'ér|Daughter] [边|biān|while] [留学|líuxué|studying abroad] [边|biān|while] [在|zài|at] [饭馆|fànguǎn|restaurant] [工作。|gōngzuò.|works.]</div>
          <div class="sent-en">★ Daughter works at a restaurant while studying abroad.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[除了|chúle|Besides] [学习，|xuéxí,|studying,] [课后|kè hòu|after class] [还|hái|also] [要|yào|has to] [去|qù|go to] [饭馆|fànguǎn|the restaurant] [帮忙|bāngmáng|to help] [洗盘子。|xǐ pánzi|wash dishes.]" data-expl-en="Besides studying, she helps wash dishes at a restaurant."></div>
        </div>
        <div class="q" id="L15-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[老方|lǎo Fāng|Old Fang] [每天|měitiān|every day] [都|dōu|all] [坐|zuò|sits] [在|zài|on] [办公室|bàngōngshì|office] [中间|zhōngjiān|middle] [的|de|(possessive)] [那把|nà bǎ|that] [椅子|yǐzi|chair] [上，|shàng,|on,] [边|biān|while] [看|kàn|reading] [报纸|bàozhǐ|newspaper] [边|biān|while] [喝茶，|hē chá,|drinking tea,] [报纸|bàozhǐ|newspaper] [上|shàng|on] [有|yǒu|there is] [什么|shénme|what] [有意思|yǒu yìsi|interesting] [的|de|(possessive)] [新闻，|xīnwén,|news,] [他|tā|he] [都|dōu|all] [读|dú|reads] [给|gěi|to] [我们|wǒmen|us] [听。|tīng.|listen.]</div>
          <div class="sent-en">Old Fang sits in the middle chair of the office every day, reading the newspaper and drinking tea. Whatever interesting news is in the paper, he reads it to us.</div>
          <div class="zh stem">★ [老方|lǎo Fāng|Old Fang] [每天|měitiān|every day] [都|dōu|all] [看|kàn|reads] [报纸。|bàozhǐ.|newspaper.]</div>
          <div class="sent-en">★ Old Fang reads the newspaper every day.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[每天|měitiān|Every day] [都|dōu|(all)]……[边|biān|(while)] [看|kàn|reading] [报纸|bàozhǐ|the paper] [边|biān|(and)] [喝茶|hē chá|drinking tea]」。" data-expl-en="'Every day... reads the paper while drinking tea.'"></div>
        </div>
        <div class="q" id="L15-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[这个|zhège|this] [短期班|duǎnqī bān|short-term class] [下周日|xià zhōu rì|next Sunday] [就要|jiù yào|is about to] [结束|jiéshù|end] [了，|le,|,] [以后|yǐhòu|afterwards] [我们|wǒmen|we] [不能|bùnéng|cannot] [像|xiàng|like] [现在|xiànzài|now] [这样|zhèyàng|this] [经常|jīngcháng|often] [见面|jiànmiàn|meet] [了，|le,|,] [有|yǒu|if there is] [什么|shénme|what] [事情|shìqing|matter] [可以|kěyǐ|can] [给|gěi|to] [我|wǒ|me] [打电话|dǎ diànhuà|call] [或者|huòzhě|or] [发|fā|send] [电子邮件。|diànzǐ yóujiàn.|email.]</div>
          <div class="sent-en">This short-term class will end next Sunday. Afterwards we won't be able to meet as often as now — if anything comes up you can call me or send an email.</div>
          <div class="zh stem">★ [他们|tāmen|they] [以后|yǐhòu|afterwards] [能|néng|can] [经常|jīngcháng|often] [见面。|jiànmiàn.|meet.]</div>
          <div class="sent-en">★ They can meet often afterwards.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="「[不能|bùnéng|Won’t be able to] [像|xiàng|(like)] [现在|xiànzài|now] [这样|zhèyàng|like this] [经常|jīngcháng|often] [见面|jiànmiàn|meet] [了|le|(change)]」→ [以后|yǐhòu|in the future] [不能|bùnéng|can’t] [经常|jīngcháng|often] [见面。|jiànmiàn|meet.]" data-expl-en="'Can't meet as often as now' — so they can't meet often."></div>
        </div>

        <h4 id="L15-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L15-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [在|zài|in] [这个|zhège|this] [地方|dìfang|place] [生活|shēnghuó|lived] [了|le|(past)] [二十年，|èrshí nián,|20 years,] [对|duì|to] [这儿|zhèr|here] [很|hěn|very] [了解|liǎojiě|know well] [了|le|(change)] [吧？|ba?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [对，|duì,|Yes,] [这个|zhège|this] [地方|dìfang|place] [除了|chúle|besides] [夏天|xiàtiān|summer] [太|tài|too] [热|rè|hot] [以外，|yǐwài,|,] [其他|qítā|other things] [都|dōu|all] [很好。|hěn hǎo.|very good.] [环境|huánjìng|environment] [不错，|búcuò,|is good,] [买|mǎi|buying] [东西|dōngxi|things] [也|yě|also] [方便。|fāngbiàn.|convenient.]</div>
          <div class="sent-en">M: You've lived here for 20 years — you must know it well.<br>W: Yes, besides the too-hot summer, everything else is great. Nice environment, convenient shopping.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [觉得|juéde|thinks] [这个|zhège|this] [地方|dìfang|place] [怎么样？|zěnmeyàng?|how is it?]</div>
          <div class="sent-en">Q: What does the woman think of this place?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[环境不好|huánjìng bù hǎo|environment is bad]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[商店很远|shāngdiàn hěn yuǎn|shops are far]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[夏天很热|xiàtiān hěn rè|summer is hot]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[除了|chúle|Except that] [夏天|xiàtiān|summer] [太|tài|is too] [热|rè|hot] [以外|yǐwài|(except)]」。</div>
        </div>
        <div class="q" id="L15-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [除了|chúle|Besides] [这条|zhè tiáo|this pair of] [裤子|kùzi|trousers] [以外，|yǐwài,|,] [还有|háiyǒu|is there anything else] [什么|shénme|what] [要|yào|needs to] [洗|xǐ|be washed] [的|de|(nominalizer)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [那条|nà tiáo|that pair of] [裤子|kùzi|trousers] [是|shì|is] [干净|gānjìng|clean] [的，|de,|,] [不用|búyòng|no need to] [洗，|xǐ,|wash,] [你|nǐ|you] [把|bǎ|(BA)] [那|nà|those] [两件|liǎng jiàn|two] [衬衫|chènshān|shirts] [洗|xǐ|wash] [了|le|(change)] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W: Besides these trousers, is there anything else to wash?<br>M: Those trousers are clean, no need to wash them. Wash those two shirts.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|what does the man] [不|bù|not] [让|ràng|allow] [洗|xǐ|to wash] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the man not allow to be washed?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[裤子|kùzi|trousers]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[裙子|qúnzi|skirt]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[衬衫|chènshān|shirts]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[裤子|kùzi|The trousers] [不用|búyòng|don’t] [洗，|xǐ,|need washing,] [衬衫|chènshān|the shirt] [要|yào|does] [洗，|xǐ,|need washing,] [所以|suǒyǐ|so]“[不让洗|bú ràng xǐ|the one not to wash]”[的|de|(nominalizer)] [其实|qíshí|is actually] [是|shì|(is)] [裤子|kùzi|the trousers]——[但|dàn|but] [三个|sān ge|of the three] [选项|xuǎnxiàng|options] [中|zhōng|(among)] [只有|zhǐyǒu|only] [衬衫|chènshān|the shirt] [是|shì|is]“[要洗|yào xǐ|needs washing]”[的，|de,|(one),] A [裤子|kùzi|the trousers] [才|cái|is the one] [是|shì|(is)]“[不让洗|bú ràng xǐ|not to wash]”[的。|de,|(one).] ** [正确|zhèngquè|the correct] [答案|dá’àn|answer] [应|yīng|should] [为|wéi|be] A **（[裤子|kùzi|the trousers] [不用|búyòng|don’t need] [洗|xǐ|washing]）。

<div class="ans-box" style="background:#fdeaea;border-left-color:#d64545;color:#7a1f1f;">
<b>[更正：|Gēngzhèng:|Correction:]</b>[正确|zhèngquè|the correct] [答案|dá’àn|answer] [为|wéi|is] A（[裤子|kùzi|the trousers]）。[选项|xuǎnxiàng|The options] [设置|shèzhì|were set] [与|yǔ|and] [答案|dá’àn|the answer] [有|yǒu|have] [出入，|chūrù,|a discrepancy,] [请|qǐng|please] [以|yǐ|(take)] [听力|tīnglì|the listening] [原文|yuánwén|script] [为|wéi|as] [准。|zhǔn|final.]
</div>
          </div>
        </div>
        <div class="q" id="L15-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[男：|Nán:|M:] [除了|chúle|Besides] [安静|ānjìng|quiet] [以外，|yǐwài,|,] [您|nín|you] [对|duì|to] [房子|fángzi|house] [还有|háiyǒu|also have] [什么|shénme|what] [要求|yāoqiú|requirements] [吗？|ma?|(question)] [有电梯|yǒu diàntī|with elevator] [的|de|(nominalizer)] [还是|háishi|or] [没电梯|méi diàntī|no elevator] [的？|de?|(nominalizer)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [只|zhǐ|only] [有|yǒu|have] [这|zhè|this] [一个|yí ge|one] [要求，|yāoqiú,|requirement,] [你们|nǐmen|you] [有|yǒu|have] [这样|zhèyàng|such] [的|de|(possessive)] [房子|fángzi|house] [吗？|ma?|(question)]</div>
          <div class="sent-en">M: Besides quiet, do you have any other requirements for the house? With or without elevator?<br>W: I only have this one requirement. Do you have such a house?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|what kind of house] [想要|xiǎng yào|(want)] [什么样|shénmeyàng|(what kind)] [的|de|(possessive)] [房子？|fángzi?|does the woman want?]</div>
          <div class="sent-en">Q: What kind of house does the woman want?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[有电梯的|yǒu diàntī de|with elevator]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[没电梯的|méi diàntī de|without elevator]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[安静的|ānjìng de|quiet]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[我|wǒ|I] [只有|zhǐyǒu|have only] [这|zhè|this] [一个|yí ge|one] [要求|yāoqiú|requirement]」——[安静。|ānjìng|quiet.]</div>
        </div>
        <div class="q" id="L15-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|your] [的|de|(possessive)] [字|zì|characters] [写|xiě|are written] [得|de|(complement)] [漂亮|piàoliang|beautifully] [极|jí|extremely] [了，|le,|,] [你|nǐ|you] [是|shì|how] [怎么|zěnme|did] [写|xiě|write] [的？|de?|(nominalizer)] [能|néng|can] [教教|jiāo jiao|teach] [我|wǒ|me] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [开始|kāishǐ|At the beginning] [的|de|(possessive)] [时候|shíhou|time] [除了|chúle|besides] [认真|rènzhēn|seriously] [学|xué|learn] [、|,|,] [慢慢|mànman|slowly] [写|xiě|write] [以外，|yǐwài,|,] [还|hái|also] [要|yào|need to] [努力|nǔlì|work hard] [练习，|liànxí,|practice,] [这样|zhèyàng|this way] [才|cái|only then] [能|néng|can] [越写越快，|yuè xiě yuè kuài,|write faster and faster,] [越写越漂亮。|yuè xiě yuè piàoliang.|write more and more beautifully.]</div>
          <div class="sent-en">M: Your handwriting is extremely beautiful — how did you practice? Can you teach me?<br>W: At the beginning, besides learning seriously and writing slowly, you also need to practice hard — that way you'll write faster and faster, more and more beautifully.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|how well does the woman] [写字|xiě zì|write] [写|xiě|(write)] [得|de|(complement)] [怎么样？|zěnmeyàng?|(how)?]</div>
          <div class="sent-en">Q: How well does the woman write?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不认真|bú rènzhēn|not serious]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[特别漂亮|tèbié piàoliang|especially beautiful]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[特别慢|tèbié màn|especially slow]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[漂亮|piàoliang|Beautiful] [极|jí|extremely] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L15-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [今天|jīntiān|today] [穿|chuān|are dressed] [得|de|(complement)] [这么|zhème|so] [漂亮，|piàoliang,|beautifully,] [要|yào|going to] [见|jiàn|see] [什么|shénme|what] [重要|zhòngyào|important] [的|de|(possessive)] [人|rén|person] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [除了|chúle|Besides] [你|nǐ|you] [以外，|yǐwài,|,] [还有|háiyǒu|is there] [更|gèng|more] [重要|zhòngyào|important] [的|de|(possessive)] [人|rén|person] [吗？|ma?|(question)] [今天|jīntiān|today] [是|shì|is] [中秋节，|Zhōngqiū Jié,|Mid-Autumn Festival,] [我们|wǒmen|we] [一起|yìqǐ|together] [去|qù|go] [看|kàn|see] [个|ge|(MW)] [电影|diànyǐng|movie] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: You're dressed so beautifully today — going to see someone important?<br>W: Besides you, is there anyone more important? Today is Mid-Autumn Festival — let's go see a movie together.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|who does the woman think] [觉得|juéde|(think)] [谁|shéi|(who)] [是|shì|is] [最|zuì|the most] [重要|zhòngyào|important] [的|de|(possessive)] [人？|rén?|person?]</div>
          <div class="sent-en">Q: Who does the woman think is the most important person?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[男的|nánde|the man]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[自己|zìjǐ|herself]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[穿得漂亮的人|chuān de piàoliang de rén|someone nicely dressed]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[除了|chúle|Besides] [你|nǐ|you,] [以外，|yǐwài,|(besides),] [还|hái|is there] [有|yǒu|(there)] [更|gèng|a more] [重要|zhòngyào|important] [的|de|(possessive)] [人|rén|person] [吗？|ma?|(question)]」[是|shì|is] [反问，|fǎnwèn,|a rhetorical question,] [意思|yìsi|meaning] [是|shì|is]“[没有|méiyǒu|no one is] [比|bǐ|more] [我|wǒ|(than)] [自己|zìjǐ|myself] [更|gèng|(more)] [重要|zhòngyào|important] [的|de|(possessive)] [人|rén|person]”。</div>
        </div>

        <h4 id="L15-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L15-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [大明，|Dàmíng,|Daming,] [一年四季，|yì nián sì jì,|throughout the four seasons,] [你|nǐ|you] [最|zuì|most] [喜欢|xǐhuan|like] [哪个|nǎ ge|which] [季节？|jìjié?|season?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [啊，|a,|,] [除了|chúle|besides] [夏天|xiàtiān|summer] [以外，|yǐwài,|,] [我|wǒ|I] [都|dōu|all] [喜欢。|xǐhuan.|like.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [能|néng|can] [告诉|gàosu|tell] [我|wǒ|me] [为什么|wèishénme|why] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [怕|pà|fear] [热|rè|heat] [啊，|a,|,] [这儿|zhèr|here] [的|de|(possessive)] [夏天|xiàtiān|summer] [热|rè|hot] [极|jí|extremely] [了，|le,|,] [你|nǐ|you] [不|bù|not] [觉得|juéde|feel] [吗？|ma?|(question)]</div>
          <div class="sent-en">W: Daming, which of the four seasons do you like best?<br>M: Besides summer, I like them all.<br>W: Can you tell me why?<br>M: I'm afraid of heat — summer here is extremely hot, don't you think?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[喜欢夏天|xǐhuan xiàtiān|likes summer]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[不喜欢热|bù xǐhuan rè|doesn't like heat]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[四个季节都喜欢|sì ge jìjié dōu xǐhuan|likes all four seasons]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|I’m] [怕|pà|afraid of] [热|rè|heat]」。</div>
        </div>
        <div class="q" id="L15-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我们|wǒmen|our] [新买的|xīn mǎi de|newly bought] [房子|fángzi|house] [就|jiù|is] [在|zài|on] [刚才|gāngcái|just now] [过去|guòqù|passed] [的|de|(possessive)] [那条街|nà tiáo jiē|that street] [上。|shàng.|on.]</div>
          <div class="zh stem">[男：|Nán:|M:] [是|shì|really] [吗？|ma?|(question)] [我|wǒ|I] [看|kàn|see] [环境|huánjìng|environment] [很好。|hěn hǎo.|is very good.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [没错，|méicuò,|Right,] [那儿|nàr|there] [的|de|(possessive)] [街道|jiēdào|street] [除了|chúle|besides] [很|hěn|very] [干净|gānjìng|clean] [以外，|yǐwài,|,] [也|yě|also] [很|hěn|very] [安静，|ānjìng,|quiet,] [附近|fùjìn|nearby] [还|hái|also] [有个|yǒu ge|there is a] [花园。|huāyuán.|garden.]</div>
          <div class="zh stem">[男：|Nán:|M:] [有树|yǒu shù|There are trees] [有草，|yǒu cǎo,|and grass,] [好极|hǎo jí|great] [了！|le!|(change)] [真想|zhēn xiǎng|really want to] [快点儿|kuài diǎnr|quickly] [搬|bān|move] [过去。|guòqù.|there.]</div>
          <div class="sent-en">W: Our newly bought house is on that street we just passed.<br>M: Really? The environment looks good.<br>W: Right — the street there is not only clean but also quiet, and there's a garden nearby.<br>M: Trees and grass — wonderful! I really want to move there soon.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [那个|nàge|that] [房子，|fángzi,|house,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about that house?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[环境不错|huánjìng búcuò|environment is nice]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不太安静|bú tài ānjìng|not very quiet]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不太干净|bú tài gānjìng|not very clean]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[街道|jiēdào|The street is not only] [除了|chúle|(besides being)] [很|hěn|very] [干净|gānjìng|clean,] [以外，|yǐwài,|(besides),] [也|yě|but also] [很|hěn|very] [安静，|ānjìng,|quiet,] [附近|fùjìn|nearby] [还|hái|there’s] [有|yǒu|(there)] [个|ge|a] [花园|huāyuán|garden]」。</div>
        </div>
        <div class="q" id="L15-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这条|zhè tiáo|this] [裙子|qúnzi|dress] [不大不小，|bú dà bù xiǎo,|fits perfectly,] [真|zhēn|really] [不错。|búcuò.|nice.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [颜色|yánsè|color] [也|yě|also] [好看，|hǎokàn,|nice,] [我|wǒ|I] [穿着|chuān zhe|wearing] [它|tā|it] [去|qù|go] [参加|cānjiā|attend] [朋友|péngyou|friend] [的|de|(possessive)] [生日|shēngrì|birthday] [晚会，|wǎnhuì,|party,] [一定|yídìng|definitely] [漂亮|piàoliang|beautiful] [极|jí|extremely] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [那|nà|then] [你|nǐ|you] [为什么|wèishénme|why] [不|bù|not] [买？|mǎi?|buy?] [有|yǒu|is there] [什么|shénme|what] [不|bù|not] [满意|mǎnyì|satisfied] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [除了|chúle|Besides] [太贵|tài guì|too expensive] [以外，|yǐwài,|,] [没什么|méi shénme|nothing] [不|bù|not] [满意|mǎnyì|satisfied] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">M: This dress fits perfectly — really nice.<br>W: The color is nice too — I'd look beautiful wearing it to my friend's birthday party.<br>M: Then why don't you buy it? Anything you're not satisfied with?<br>W: Besides being too expensive, nothing.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|what does the woman think of] [觉得|juéde|(think)] [这件|zhè jiàn|this piece of] [衣服|yīfu|clothing] [怎么样？|zěnmeyàng?|(how)?]</div>
          <div class="sent-en">Q: What does the woman think of this piece of clothing?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[颜色不好|yánsè bù hǎo|color isn't nice]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[不便宜|bù piányi|not cheap]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[太大了|tài dà le|too big]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[除了|chúle|Besides being too expensive,] [太贵|tài guì|(too expensive)] [以外，|yǐwài,|(besides),] [没什么|méi shénme|there’s nothing] [不|bù|dis-] [满意|mǎnyì|satisfied] [的|de|(nominalizer)]」→ [不|bù|not] [便宜。|piányi|cheap.]</div>
        </div>
        <div class="q" id="L15-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [您好，|nín hǎo,|Hello,] [我|wǒ|my] [的|de|(possessive)] [手机|shǒujī|phone] [从前天|cóng qiántiān|the day before yesterday] [开始|kāishǐ|started] [就|jiù|then] [不能|bùnéng|cannot] [上网|shàngwǎng|go online] [了，|le,|,] [您|nín|you] [帮|bāng|help] [我|wǒ|me] [看看|kàn kan|take a look] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [除了|chúle|Besides] [上不去网|shàng bu qù wǎng|can't go online] [以外，|yǐwài,|,] [还有|háiyǒu|is there] [什么|shénme|what] [其他|qítā|other] [问题|wèntí|problems] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [打电话|dǎ diànhuà|making calls] [的|de|(possessive)] [时候|shíhou|when] [声音|shēngyīn|sound] [特别|tèbié|especially] [小，|xiǎo,|small,] [经常|jīngcháng|often] [听|tīng|hear] [不|bù|not] [清楚。|qīngchu.|clearly.]</div>
          <div class="zh stem">[男：|Nán:|M:] [您|nín|you] [别|bié|don't] [着急，|zháojí,|worry,] [我|wǒ|I] [马上|mǎshàng|right away] [帮|bāng|help] [您|nín|you] [看看。|kàn kan.|take a look.]</div>
          <div class="sent-en">W: Hello, my phone hasn't been able to go online since the day before yesterday — take a look.<br>M: Besides not being able to go online, any other problems?<br>W: When making calls the sound is especially small — often can't hear clearly.<br>M: Don't worry, I'll take a look right away.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman’s] [的|de|(possessive)] [手机|shǒujī|phone] [有|yǒu|has] [什么|shénme|what] [问题？|wèntí?|problem?]</div>
          <div class="sent-en">Q: What problem does the woman's phone have?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不能打电话|bùnéng dǎ diànhuà|cannot make calls]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[没有声音|méiyǒu shēngyīn|no sound]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[不能上网|bùnéng shàngwǎng|cannot go online]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[从|cóng|Since] [前天|qiántiān|the day before yesterday] [开始|kāishǐ|(start)] [就|jiù|(then)] [不能|bùnéng|can’t] [上网|shàngwǎng|go online] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L15-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [您好，|nín hǎo,|Hello,] [我|wǒ|I] [在这儿|zài zhèr|here] [只|zhǐ|only] [住|zhù|stayed] [了|le|(past)] [一个星期，|yí ge xīngqī,|one week,] [怎么|zěnme|why] [这么|zhème|so] [贵？|guì?|expensive?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [对不起，|duìbuqǐ,|Sorry,] [我们宾馆|wǒmen bīnguǎn|our hotel] [除了|chúle|besides] [水|shuǐ|water] [以外，|yǐwài,|,] [房间|fángjiān|room] [里|li|inside] [其他|qítā|other] [吃|chī|eating] [的、|de,|things,] [喝|hē|drinking] [的|de|(possessive)] [都|dōu|all] [要|yào|need to] [花|huā|spend] [钱|qián|money] [的。|de.|(nominalizer)]</div>
          <div class="zh stem">[男：|Nán:|M:] [上网|shàngwǎng|Internet] [和|hé|and] [打电话|dǎ diànhuà|making calls] [也|yě|also] [要|yào|need to] [自己|zìjǐ|yourself] [花|huā|spend] [钱|qián|money] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [对，|duì,|Yes,] [上网|shàngwǎng|Internet] [每个小时|měi ge xiǎoshí|per hour] [5 块，|wǔ kuài,|5 yuan,] [打电话|dǎ diànhuà|making calls] [一分钟|yì fēnzhōng|per minute] [也|yě|also] [是|shì|is] [5 块。|wǔ kuài.|5 yuan.]</div>
          <div class="sent-en">M: Hello, I only stayed one week — why so expensive?<br>W: Sorry, in our hotel, besides water, all other food and drinks in the room cost money.<br>M: Do Internet and calls also cost money?<br>W: Yes, Internet is 5 yuan per hour, calls are 5 yuan per minute.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [在|zài|at] [这个|zhège|this] [宾馆|bīnguǎn|hotel] [里|li|(inside)] [做|zuò|doing] [什么|shénme|what] [不用|búyòng|doesn’t] [花钱？|huā qián?|cost money?]</div>
          <div class="sent-en">Q: What can you do in this hotel without spending money?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[喝水|hē shuǐ|drinking water]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[上网|shàngwǎng|using the Internet]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[打电话|dǎ diànhuà|making calls]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[除了|chúle|Except for] [水|shuǐ|water] [以外|yǐwài|(besides)]……[都|dōu|everything] [要|yào|(has to)] [花钱|huā qián|cost money]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L15-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L15-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[参加|cānjiā|attending] [会议|huìyì|the meeting] [的|de|(possessive)] [人|rén|people] [都|dōu|all] [到|dào|arrived] [了|le|(change)] [吗？|ma?|(question)]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[没什么|méi shénme|nothing] [有意思|yǒu yìsi|interesting] [的，|de,|,] [我们|wǒmen|we] [上网|shàngwǎng|go online] [看个|kàn ge|watch a] [电影|diànyǐng|movie] [吧。|ba.|(suggestion)]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[请问，|qǐngwèn,|Excuse me,] [这|zhè|these] [两个|liǎng ge|two] [手机|shǒujī|phones] [有|yǒu|have] [什么|shénme|what] [不|bù|not] [一样|yíyàng|the same] [吗？|ma?|(question)]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[除了|chúle|Besides] [半个|bàn ge|half a] [西瓜|xīguā|watermelon] [以外，|yǐwài,|,] [没有|méiyǒu|there is no] [其他|qítā|other] [水果|shuǐguǒ|fruit] [了。|le.|(change)]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[我|wǒ|I] [想|xiǎng|want to] [提高|tígāo|improve] [汉语|Hànyǔ|Chinese] [水平，|shuǐpíng,|level,] [应该|yīnggāi|should] [做|zuò|do] [些什么|xiē shénme|what] [呢？|ne?|(question)]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [去|qù|go] [那儿|nàr|there] [吗？|ma?|(question)] （E）</div>
          <div class="sent-en">Do you know how to get there? — (E) Of course. We take the bus first, then transfer to the subway.</div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L15-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[你|nǐ|you] [要|yào|need to] [多听、|duō tīng,|listen more,] [多说，|duō shuō,|speak more,] [还要|háiyào|also] [多|duō|more] [跟|gēn|with] [中国朋友|Zhōngguó péngyou|Chinese friends] [练习。|liànxí.|practice.] （<span class="blank">　</span>）</div>
          <div class="sent-en">You need to listen more, speak more, and practice more with Chinese friends.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L15-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[冰箱|bīngxiāng|fridge] [里|li|inside] [还有|háiyǒu|is there] [什么|shénme|any] [水果|shuǐguǒ|fruit] [吗？|ma?|(question)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Is there any fruit in the fridge?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L15-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[这个|zhège|this] [黑色|hēisè|black] [的|de|(possessive)] [手机|shǒujī|phone] [字|zì|characters] [比较|bǐjiào|relatively] [大，|dà,|big,] [红色|hóngsè|red] [的|de|(possessive)] [小|xiǎo|small] [一些。|yìxiē.|a bit.] （<span class="blank">　</span>）</div>
          <div class="sent-en">This black phone has relatively big characters; the red one's are smaller.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L15-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[除了|chúle|Besides] [常笑|Cháng Xiào|Chang Xiao] [以外，|yǐwài,|,] [大家|dàjiā|everyone] [都|dōu|all] [到|dào|arrived] [了。|le.|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Everyone has arrived except Chang Xiao.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L15-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[电视|diànshì|TV] [上|shàng|on] [有|yǒu|is there] [什么|shénme|any] [好看|hǎokàn|good] [的|de|(possessive)] [节目|jiémù|program] [吗？|ma?|(question)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Is there anything good on TV?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L15-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L15-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[上网|shàngwǎng|go online]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[练习|liànxí|practice]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[完成|wánchéng|complete]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[节日|jiérì|festival]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[世界|shìjiè|world]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[她|tā|she] [说话|shuōhuà|speaks] [的|de|(possessive)] （E [声音|shēngyīn|voice]） [多|duō|how] [好听|hǎotīng|nice] [啊！|a!|!]</div>
          <div class="sent-en">Her voice is so nice!</div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L15-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[这个|zhège|this] （<span class="blank">　</span>） [上课|shàngkè|class] [的|de|(possessive)] [时候|shíhou|when] [我们|wǒmen|we] [已经|yǐjīng|already] [做|zuò|did] [过|guò|(past)] [了，|le,|,] [不用|búyòng|no need] [再|zài|again] [做|zuò|do] [了。|le.|(change)]</div>
          <div class="sent-en">We already did this practice in class — no need to do it again.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L15-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[孩子们|háizimen|Children] [最|zuì|most] [喜欢|xǐhuan|like] [这个|zhège|this] （<span class="blank">　</span>），[因为|yīnwèi|because] [不用|búyòng|no need to] [去|qù|go] [上课，|shàngkè,|to class,] [还|hái|also] [能|néng|can] [吃|chī|eat] [到|dào|to] [好吃|hǎochī|tasty] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">Children like this festival most because there's no class and they can eat tasty things.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L15-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">（<span class="blank">　</span>） [可以|kěyǐ|can] [发|fā|send] [电子邮件，|diànzǐ yóujiàn,|email,] [可以|kěyǐ|can] [看|kàn|watch] [节目，|jiémù,|programs,] [还|hái|also] [可以|kěyǐ|can] [买|mǎi|buy] [东西，|dōngxi,|things,] [真|zhēn|really] [方便。|fāngbiàn.|convenient.]</div>
          <div class="sent-en">Going online lets you send emails, watch programs, and buy things — really convenient.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L15-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [六点半|liù diǎn bàn|6:30] [了，|le,|,] [你|nǐ|you] [还|hái|still] [不|bù|not] [回家？|huí jiā?|go home?]</div>
          <div class="zh">[B：|B:|B:] [今天|jīntiān|today] [的|de|(possessive)] [工作|gōngzuò|work] [还没|hái méi|hasn't] （<span class="blank">　</span>），[我|wǒ|I] [晚|wǎn|a bit] [一点儿|yìdiǎnr|later] [再|zài|then] [回去。|huíqù.|go back.]</div>
          <div class="sent-en">A: It's 6:30 — still not going home?<br>B: Today's work isn't finished yet — I'll go back a bit later.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L15-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [这|zhè|This] [是|shì|is] [一张|yì zhāng|a] （<span class="blank">　</span>） [地图，|dìtú,|map,] [请|qǐng|please] [大家|dàjiā|everyone] [找找|zhǎo zhao|find] [中国|Zhōngguó|China] [在|zài|is] [哪儿。|nǎr.|where.]</div>
          <div class="zh">[B：|B:|B:] [老师，|lǎoshī,|Teacher,] [我|wǒ|I] [找到|zhǎo dào|found] [了。|le.|(change)]</div>
          <div class="sent-en">A: This is a world map — everyone find where China is.<br>B: Teacher, I found it.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L15-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L15-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[以前|yǐqián|Before,] [的|de|(possessive)] [手机|shǒujī|phones] [只能|zhǐnéng|could only] [打电话，|dǎ diànhuà,|make calls,] [现在|xiànzài|now] [除了|chúle|besides] [打电话|dǎ diànhuà|making calls] [以外，|yǐwài,|,] [还|hái|also] [能|néng|can] [上网。|shàngwǎng.|go online.] [世界|shìjiè|world] [上|shàng|on] [有|yǒu|there is] [什么|shénme|what] [新闻，|xīnwén,|news,] [马上|mǎshàng|immediately] [就|jiù|then] [能|néng|can] [知道。|zhīdào.|know.] [在|zài|In] [没有|méiyǒu|without] [电脑|diànnǎo|computer] [的|de|(possessive)] [地方，|dìfang,|places,] [想|xiǎng|wanting to] [给|gěi|to] [朋友|péngyou|friends] [发|fā|send] [电子邮件，|diànzǐ yóujiàn,|email,] [也|yě|also] [能|néng|can] [用|yòng|use] [手机，|shǒujī,|phones,] [方便|fāngbiàn|convenient] [极|jí|extremely] [了！|le!|(change)]</div>
          <div class="sent-en">Old phones could only make calls. Now besides calls, they can also go online. Whatever news happens in the world, you know immediately. In places without a computer, you can send emails with your phone — extremely convenient!</div>
          <div class="zh ask">★ [以前|yǐqián|What could old] [的|de|(possessive)] [手机|shǒujī|phones] [可以|kěyǐ|(could)] [做|zuò|do] [什么？|shénme?|(what)?]</div>
          <div class="sent-en">★ What could old phones do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[发电子邮件|fā diànzǐ yóujiàn|send email]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[上网|shàngwǎng|go online]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[打电话|dǎ diànhuà|make calls]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[以前|yǐqián|Old] [的|de|(possessive)] [手机|shǒujī|phones] [只能|zhǐnéng|could only] [打电话|dǎ diànhuà|make calls]」。</div>
        </div>
        <div class="q" id="L15-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[我|wǒ|I] [在|zài|in] [中国|Zhōngguó|China] [留学|líuxué|studied abroad] [了|le|(past)] [三年，|sān nián,|for three years,] [除了|chúle|besides] [提高|tígāo|improving] [了|le|(past)] [汉语|Hànyǔ|Chinese] [水平|shuǐpíng|level] [以外，|yǐwài,|,] [还|hái|also] [了解|liǎojiě|understood] [了|le|(past)] [中国|Zhōngguó|China] [和|hé|and] [世界|shìjiè|world] [文化。|wénhuà.|culture.] [我们班|wǒmen bān|our class] [除了|chúle|except] [老师|lǎoshī|the teacher] [以外，|yǐwài,|,] [其他|qítā|other] [人|rén|people] [都|dōu|all] [不|bù|not] [是|shì|are] [中国人，|Zhōngguó rén,|Chinese,] [大家|dàjiā|everyone] [来自|láizì|comes from] [世界|shìjiè|world] [各地。|gèdì.|all over.] [上课|shàngkè|In class] [和|hé|and] [课间|kèjiān|break] [休息|xiūxi|time] [的|de|(possessive)] [时候，|shíhou,|when,] [大家|dàjiā|everyone] [都|dōu|all] [用|yòng|use] [汉语|Hànyǔ|Chinese] [聊天儿，|liáotiānr,|chat,] [介绍|jièshào|introduce] [自己|zìjǐ|own] [的|de|(possessive)] [文化，|wénhuà,|culture,] [有意思|yǒu yìsi|interesting] [极|jí|extremely] [了。|le.|(change)]</div>
          <div class="sent-en">I studied abroad in China for three years. Besides improving my Chinese, I also learned about Chinese and world cultures. Except for the teacher, everyone in our class isn't Chinese — we come from all over the world. In class and during breaks, everyone chats in Chinese and introduces their own cultures — extremely interesting.</div>
          <div class="zh ask">★ [在|zài|Studying] [中国|Zhōngguó|in China] [留学：|liúxué:|(abroad):]</div>
          <div class="sent-en">★ Studying abroad in China: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[老师不是中国人|lǎoshī bú shì Zhōngguó rén|teacher isn't Chinese]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[可以了解各地文化|kěyǐ liǎojiě gèdì wénhuà|can learn about cultures from all over]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不能提高汉语水平|bùnéng tígāo Hànyǔ shuǐpíng|cannot improve Chinese level]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[还|hái|also] [了解|liǎojiě|learned about] [了|le|(past)] [中国|Zhōngguó|Chinese] [和|hé|and] [世界|shìjiè|world] [文化|wénhuà|culture]」。</div>
        </div>
        <div class="q" id="L15-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[从|cóng|From] [下个月|xià ge yuè|next month] [1 号|yī hào|the 1st] [开始，|kāishǐ,|starting,] [这个|zhège|this] [地方|dìfang|place] [要|yào|will] [举行|jǔxíng|hold] [世界|shìjiè|World] [电影|diànyǐng|Film] [文化周，|wénhuà zhōu,|Culture Week,] [在|zài|during] [文化周|wénhuà zhōu|the Culture Week] [上，|shàng,|,] [除了|chúle|besides] [可以|kěyǐ|can] [看到|kàndào|see] [世界|shìjiè|world] [各地|gèdì|all over] [最新|zuìxīn|latest] [的|de|(possessive)] [电影，|diànyǐng,|movies,] [还|hái|also] [有|yǒu|there are] [人|rén|people] [为|wèi|for] [大家|dàjiā|everyone] [介绍|jièshào|introducing] [各地|gèdì|all over] [的|de|(possessive)] [电影|diànyǐng|film] [文化。|wénhuà.|culture.] [一周|yì zhōu|One week] [七天，|qī tiān,|seven days,] [天天|tiāntiān|every day] [不同。|bù tóng.|different.] [对|duì|to] [电影|diànyǐng|movies] [和|hé|and] [电影|diànyǐng|film] [文化|wénhuà|culture] [感兴趣|gǎn xìngqù|interested] [的|de|(possessive)] [朋友们，|péngyoumen,|friends,] [一定|yídìng|definitely] [要|yào|must] [去|qù|go] [看看。|kàn kan.|take a look.]</div>
          <div class="sent-en">Starting from the 1st of next month, this place will hold a World Film Culture Week. During the week, besides seeing the latest movies from all over the world, people will also introduce film cultures from various places. Seven days a week, every day different. Friends interested in movies and film culture must go see it.</div>
          <div class="zh ask">★ [关于|guānyú|about] [世界|shìjiè|World] [电影|diànyǐng|Film] [文化周，|wénhuà zhōu,|Culture Week,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">★ What can we know about the World Film Culture Week?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[从1号到10号|cóng yī hào dào shí hào|from the 1st to the 10th]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[有最新的电影|yǒu zuìxīn de diànyǐng|has the latest movies]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[没有电影介绍|méiyǒu diànyǐng jièshào|no film introduction]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[可以|kěyǐ|You can] [看到|kàndào|see] [世界|shìjiè|the world’s] [各地|gèdì|latest] [最新|zuìxīn|(latest)] [的|de|(possessive)] [电影|diànyǐng|films]」。</div>
        </div>
        <div class="q" id="L15-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[春节|Chūnjié|Spring Festival] [是|shì|is] [中国|Zhōngguó|China] [最|zuì|most] [重要|zhòngyào|important] [的|de|(possessive)] [节日，|jiérì,|festival,] [这|zhè|this] [一|yī|(MW)] [节日|jiérì|festival] [在|zài|in] [中国|Zhōngguó|China] [有|yǒu|has] [很长|hěn cháng|a very long] [的|de|(possessive)] [历史|lìshǐ|history] [了。|le.|(change)] [春节|Chūnjié|Spring Festival] [那天，|nà tiān,|on that day,] [大家|dàjiā|everyone] [都|dōu|all] [要|yào|needs to] [在|zài|at] [家|jiā|home] [和|hé|with] [家人|jiārén|family] [一起|yìqǐ|together] [做饭|zuòfàn|cook] [吃。|chī.|eat.] [近年来，|jìnnián lái,|In recent years,] [除了|chúle|besides] [在|zài|at] [家|jiā|home] [吃饭|chīfàn|eating] [以外，|yǐwài,|,] [有些|yǒuxiē|some] [人|rén|people] [也|yě|also] [去|qù|go to] [饭馆|fànguǎn|restaurants] [吃饭，|chīfàn,|to eat,] [他们|tāmen|they] [说|shuō|say] [这样|zhèyàng|this way] [更|gèng|more] [方便，|fāngbiàn,|convenient,] [还|hái|also] [可以|kěyǐ|can] [吃|chī|eat] [到|dào|to] [在家|zài jiā|at home] [不|bù|not] [容易|róngyì|easily] [做|zuò|made] [的|de|(possessive)] [菜。|cài.|dishes.]</div>
          <div class="sent-en">The Spring Festival is China's most important festival and has a very long history. On that day everyone stays home with family to cook and eat. In recent years, besides eating at home, some people also eat at restaurants — they say it's more convenient and they can eat dishes not easily made at home.</div>
          <div class="zh ask">★ [关于|guānyú|about] [春节，|Chūnjié,|Spring Festival,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">★ What can we know about the Spring Festival?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[一定要在家吃饭|yídìng yào zài jiā chīfàn|must eat at home]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[是世界上最重要的节日|shì shìjiè shang zuì zhòngyào de jiérì|is the world's most important festival]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[历史很长|lìshǐ hěn cháng|has a very long history]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[在|zài|in] [中国|Zhōngguó|China] [有|yǒu|has] [很长|hěn cháng|a very long] [的|de|(possessive)] [历史|lishǐ|history] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L15-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[过去|guòqù|In the past] [这儿|zhèr|here] [有|yǒu|there were] [很多|hěnduō|many] [矮小|ǎixiǎo|short and small] [的|de|(possessive)] [旧房子，|jiù fángzi,|old houses,] [但是|dànshì|but] [这|zhè|these] [几年|jǐ nián|few years] [都|dōu|all] [不|bù|not] [见|jiàn|see] [了。|le.|(change)] [现在，|xiànzài,|Now,] [我们|wǒmen|our] [眼前|yǎnqián|before our eyes] [除了|chúle|besides] [高楼|gāolóu|high buildings] [以外，|yǐwài,|,] [还|hái|also] [有|yǒu|there are] [干净|gānjìng|clean] [的|de|(possessive)] [街道|jiēdào|streets] [和|hé|and] [漂亮|piàoliang|beautiful] [的|de|(possessive)] [花园，|huāyuán,|gardens,] [这个|zhège|this] [地方|dìfang|place] [的|de|(possessive)] [变化|biànhuà|changes] [真|zhēn|really] [是|shì|are] [大|dà|big] [极|jí|extremely] [了。|le.|(change)]</div>
          <div class="sent-en">In the past there were many short old houses here, but they've all disappeared in recent years. Now, besides high buildings, we also see clean streets and beautiful gardens — the changes here are really tremendous.</div>
          <div class="zh ask">★ [这个|zhège|This] [地方|dìfang|place] [现在：|xiànzài:|now:]</div>
          <div class="sent-en">★ This place now: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[有不少老房子|yǒu bùshǎo lǎo fángzi|has quite a few old houses]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[街道很干净|jiēdào hěn gānjìng|streets are very clean]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[没有什么变化|méiyǒu shénme biànhuà|no changes]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[有|yǒu|has] [干净|gānjìng|clean] [的|de|(possessive)] [街道|jiēdào|streets] [和|hé|and] [漂亮|piàoliang|beautiful] [的|de|(possessive)] [花园|huāyuán|gardens]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L15-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L15-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[笑笑|Xiàoxiao|Xiaoxiao] [以外|yǐwài|besides] [除了|chúle|except] [别人|biérén|others] [都|dōu|all] [来了|lái le|have come]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[除了|chúle|Besides] [笑笑|Xiàoxiao|Xiaoxiao,] [以外，|yǐwài,|(besides),] [别人|biérén|everyone else] [都|dōu|all] [来|lái|came] [了。|le|(change)]<div class="sent-en">Everyone has come except Xiaoxiao.</div></div>
        </div>
        <div class="write-item" id="L15-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[这个地方|zhège dìfang|this place] [极了|jí le|extremely] [街道|jiēdào|streets] [干净|gānjìng|clean] [的|de|(nominalizer)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[这个|zhège|The streets of this] [地方|dìfang|place] [的|de|(possessive)] [街道|jiēdào|(streets)] [干净|gānjìng|are extremely clean] [极|jí|(extremely)] [了。|le|(change)]<div class="sent-en">The streets of this place are extremely clean.</div></div>
        </div>
        <div class="write-item" id="L15-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[历史|lìshǐ|history] [文化|wénhuà|culture] [除了|chúle|besides] [还|hái|also] [我|wǒ|I] [以外|yǐwài|,] [喜欢|xǐhuan|like]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[除了|chúle|Besides] [历史|lishǐ|history] [以外，|yǐwài,|(besides),] [我|wǒ|I] [还|hái|also] [喜欢|xǐhuan|like] [文化。|wénhuà|culture.]<div class="sent-en">Besides history, I also like culture.</div></div>
        </div>
        <div class="write-item" id="L15-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[什么|shénme|what] [有|yǒu|is there] [好看|hǎokàn|good] [电影院|diànyǐngyuàn|cinema] [电影|diànyǐng|movie] [吗|ma|(question)] [的|de|(nominalizer)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[电影院|diànyǐngyuàn|Are there any good movies] [有|yǒu|(there)] [什么|shénme|(what)] [好看|hǎokàn|good] [的|de|(possessive)] [电影|diànyǐng|movies] [吗？|ma?|at the cinema?]<div class="sent-en">Are there any good movies at the cinema?</div></div>
        </div>
        <div class="write-item" id="L15-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[游泳|yóuyǒng|swimming] [除了|chúle|besides] [我|wǒ|I] [爬山|pá shān|mountain climbing] [愿意|yuànyì|willing] [也|yě|also]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[除了|chúle|Besides] [游泳|yóuyǒng|swimming,] [我|wǒ|I] [也|yě|also] [愿意|yuànyì|willing] [爬山。|pá shān|go hiking.]<div class="sent-en">Besides swimming, I'm also willing to go mountain climbing.</div></div>
        </div>

        <h4 id="L15-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L15-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[马可，|Mǎkě,|Marco,] [你的|nǐ de|your] [汉语|Hànyǔ|Chinese] [水平|shuǐpíng|level] <span class="blank-input"><span class="input-py">tí</span><input type="text" data-ans="提"></span> [高了|gāo le|improved] [不少，|bùshǎo,|a lot,] [老师|lǎoshī|teacher] [真|zhēn|really] [为|wèi|for] [你|nǐ|you] [高兴！|gāoxìng!|happy!]</div>
          <div class="sent-en">Marco, your Chinese level has improved a lot — the teacher is really happy for you!</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[提|tí|raise]（[提高|tígāo|improve]）</span></div>
        </div>
        <div class="write-item" id="L15-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[方朋，|Fāng Péng,|Fang Peng,] [这个|zhège|this] <span class="blank-input"><span class="input-py">jù</span><input type="text" data-ans="句"></span> [子|zi|sentence] [是|shì|is] [什么|shénme|what] [意思？|yìsi?|meaning?] [我|wǒ|I] [没|méi|didn't] [看|kàn|read] [明白。|míngbai.|understand.]</div>
          <div class="sent-en">Fang Peng, what does this sentence mean? I don't understand.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[句|jù|sentence]</span></div>
        </div>
        <div class="write-item" id="L15-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[周经理，|Zhōu jīnglǐ,|Manager Zhou,] [以后|yǐhòu|later] [有|yǒu|if there are] [什么|shénme|any] [问题，|wèntí,|problems,] [我|wǒ|I] [可以|kěyǐ|can] [给|gěi|to] [您|nín|you] <span class="blank-input"><span class="input-py">fā</span><input type="text" data-ans="发"></span> [邮件|yóujiàn|email] [吗？|ma?|(question)]</div>
          <div class="sent-en">Manager Zhou, if there are any problems in the future, can I email you?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[发|fā|send]（[发邮件|fā yóujiàn|send email]）</span></div>
        </div>
        <div class="write-item" id="L15-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[快|kuài|quickly] [把|bǎ|(BA)] [电视|diànshì|TV] [打开，|dǎkāi,|turn on,] [新|xīn|new] <span class="blank-input"><span class="input-py">wén</span><input type="text" data-ans="闻"></span> [开始|kāishǐ|started] [了。|le.|(change)]</div>
          <div class="sent-en">Turn on the TV quickly — the news has started.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[闻|wén|hear]（[新闻|xīnwén|news]）</span></div>
        </div>
        <div class="write-item" id="L15-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[你看，|nǐ kàn,|Look,] <span class="blank-input"><span class="input-py">jiē</span><input type="text" data-ans="街"></span> [道|dào|street] [两边|liǎngbiān|both sides] [都|dōu|all] [是|shì|are] [树，|shù,|trees,] [一点儿也|yìdiǎnr yě|not at all] [不|bù|not] [觉得|juéde|feel] [热。|rè.|hot.]</div>
          <div class="sent-en">Look, both sides of the street are lined with trees — you don't feel hot at all.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[街|jiē|street]（[街道|jiēdào|street]）</span></div>
        </div>

        <h4 id="L15-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L15-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[你|nǐ|you] [每天|měitiān|every day] [除了|chúle|besides] <span class="blank-input"><input type="text" data-ans="练"></span> [习|xí|practice] [汉语|Hànyǔ|Chinese] [以外，|yǐwài,|,] [也要|yě yào|also need to] [锻|duàn|exercise] <span class="blank-input"><input type="text" data-ans="炼"></span> [身体。|shēntǐ.|body.]</div>
          <div class="zh" style="margin-top:6px;">[炼|liàn|smelt]　[练|liàn|practice]</div>
          <div class="sent-en">Besides practicing Chinese every day, you also need to exercise.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[练|liàn|(as in 练习 “practice”)]、[炼|liàn|(as in 锻炼 “exercise”)]</div>
        </div>
        <div class="write-item" id="L15-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[大家|dàjiā|everyone] [都|dōu|all] [过来，|guòlái,|come over,] [我|wǒ|I] [说|shuō|say] [一下|yíxià|a bit] [这次|zhè cì|this time] [篮|lán|basketball] <span class="blank-input"><input type="text" data-ans="球"></span> [比赛|bǐsài|match] [的|de|(possessive)] [要|yào|requirements] <span class="blank-input"><input type="text" data-ans="求"></span>！</div>
          <div class="zh" style="margin-top:6px;">[求|qiú|request]　[球|qiú|ball]</div>
          <div class="sent-en">Everyone come over — let me explain the requirements for this basketball match!</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[球|qiú|(as in 足球 “football”)]、[求|qiú|(as in 要求 “requirement”)]</div>
        </div>
        <div class="write-item" id="L15-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[外边|wàibiān|Outside] [开始|kāishǐ|started] [刮|guā|blowing] <span class="blank-input"><input type="text" data-ans="风"></span> [了，|le,|,] [别|bié|don't] [出去|chūqù|go out] [踢球|tī qiú|play ball] [了，|le,|,] [在家|zài jiā|at home] [上会儿|shàng huìr|go online for a while] <span class="blank-input"><input type="text" data-ans="网"></span> [吧。|ba.|(suggestion)]</div>
          <div class="zh" style="margin-top:6px;">[网|wǎng|net]　[风|fēng|wind]</div>
          <div class="sent-en">It's getting windy outside — don't go out to play ball, stay home and go online.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[风|fēng|(as in 大风 “strong wind”)]、[网|wǎng|(as in 上网 “go online”)]</div>
        </div>
        <div class="write-item" id="L15-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[在|zài|on] [这个|zhège|this] [重要|zhòngyào|important] [的|de|(possessive)] [节|jié|festival] <span class="blank-input"><input type="text" data-ans="日"></span> [里，|li,|,] [有|yǒu|there are] [很多|hěnduō|many] [歌舞|gēwǔ|song-and-dance] [节|jié|item] <span class="blank-input"><input type="text" data-ans="目"></span>。</div>
          <div class="zh" style="margin-top:6px;">[目|mù|item]　[日|rì|day]</div>
          <div class="sent-en">During this important festival, there are many song-and-dance performances.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[日|rì|(as in 生日 “birthday”)]、[目|mù|(as in 节目 “program”)]</div>
        </div>
        <div class="write-item" id="L15-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[弟弟|dìdi|Younger brother] [除了|chúle|besides] [喜欢|xǐhuan|liking] [中国|Zhōngguó|Chinese] [文化|wénhuà|culture] [以外，|yǐwài,|,] <span class="blank-input"><input type="text" data-ans="也"></span> [对|duì|to] <span class="blank-input"><input type="text" data-ans="世"></span> [界|jiè|world] [文化|wénhuà|culture] [很|hěn|very] [感兴趣。|gǎn xìngqù.|interested.]</div>
          <div class="zh" style="margin-top:6px;">[也|yě|also]　[世|shì|world]</div>
          <div class="sent-en">Besides Chinese culture, my younger brother is also very interested in world culture.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[也|yě|(as in 也是 “also is”)]、[世|shì|(as in 世界 “world”)]</div>
        </div>

        <h4 id="L15-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L15-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[园|yuán|garden] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[公园|gōngyuán|park]、[花园|huāyuán|flower garden]</div></div>
        </div>
        <div class="write-item" id="L15-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[病|bìng|illness] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[生病|shēngbìng|get sick]、[有病|yǒu bìng|sick]</div></div>
        </div>
        <div class="write-item" id="L15-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[问|wèn|ask] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[问题|wèntí|question]、[问你|wèn nǐ|ask you]</div></div>
        </div>
        <div class="write-item" id="L15-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[闻|wén|hear] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[新闻|xīnwén|news]、[听闻|tīngwén|hear of]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L15-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [大山|Dàshān|Dashan] [来|lái|came to] [中国|Zhōngguó|China]
            <span class="blank-input review-blank"><span class="input-py">liúxué</span><input type="text" data-ans="留学"></span>
            [两年|liǎng nián|two years] [了，|le,|,] [他|tā|he] [觉得|juéde|feels] [自己|zìjǐ|his own] [的|de|(possessive)] [汉语|Hànyǔ|Chinese]
            <span class="blank-input review-blank"><span class="input-py">shuǐpíng</span><input type="text" data-ans="水平"></span>
            [提高|tígāo|improved] [得|de|(complement)] [一点儿也|yìdiǎnr yě|not at all] [不|bù|not] [快。|kuài.|fast.] [昨天|zuótiān|yesterday] [的|de|(possessive)] [作业，|zuòyè,|homework,] [老师|lǎoshī|teacher] [觉得|juéde|feels] [他|tā|he] [写|xiě|wrote] [得|de|(complement)] [不错，|búcuò,|well,]
            <span class="blank-input review-blank"><span class="input-py">chúle</span><input type="text" data-ans="除了"></span>
            [一个|yí ge|one] [句子|jùzi|sentence] [意思|yìsi|meaning] [有些|yǒuxiē|a bit] [不|bù|not] [清楚|qīngchu|clear] [都|dōu|all] [没|méi|no] [什么|shénme|what] [问题。|wèntí.|problem.]</div>
          <div class="sent-en">Dashan has studied abroad in China for two years. He feels his Chinese level hasn't improved quickly at all. Yesterday's homework — the teacher felt he wrote it well; except for one sentence whose meaning wasn't quite clear, there were no problems.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[留学|líuxué|study abroad]、[水平|shuǐpíng|level]、[除了|chúle|except]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [现在|xiànzài|now] [用|yòng|using] [电脑|diànnǎo|computers]
            <span class="blank-input review-blank"><span class="input-py">shàngwǎng</span><input type="text" data-ans="上网"></span>
            [真|zhēn|really] [方便。|fāngbiàn.|convenient.] [除了|chúle|besides] [看|kàn|watching]
            <span class="blank-input review-blank"><span class="input-py">xīnwén</span><input type="text" data-ans="新闻"></span>，[人们|rénmen|people]
            <span class="blank-input review-blank"><span class="input-py">hái</span><input type="text" data-ans="还"></span>
            [可以|kěyǐ|can] [听歌、|tīng gē,|listen to music,] [看电影、|kàn diànyǐng,|watch movies,] [买|mǎi|buy] [东西。|dōngxi.|things.] [小刚|Xiǎogāng|Xiaogang] [在|zài|on] [网上|wǎng shang|the Internet] [买了|mǎi le|bought] [一件|yí jiàn|a] [衣服，|yīfu,|piece of clothing,] [有点儿|yǒudiǎnr|a bit] [小，|xiǎo,|small,] [给|gěi|to] [他|tā|his] [弟弟|dìdi|younger brother] [了。|le.|(change)] [不用|búyòng|Without]
            <span class="blank-input review-blank"><span class="input-py">huā qián</span><input type="text" data-ans="花钱"></span>
            [还|hái|still] [有|yǒu|has] [新|xīn|new] [衣服|yīfu|clothes] [穿，|chuān,|to wear,] [弟弟|dìdi|younger brother] [满意|mǎnyì|satisfied]
            <span class="blank-input review-blank"><span class="input-py">jí le</span><input type="text" data-ans="极了"></span>。</div>
          <div class="sent-en">Using a computer to go online is really convenient now. Besides watching news, people can also listen to music, watch movies, and buy things. Xiaogang bought a piece of clothing online — it was a bit small, so he gave it to his younger brother. Without spending money he still has new clothes to wear — younger brother is extremely satisfied.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[上网|shàngwǎng|go online]、[新闻|xīnwén|news]、[还|hái|also]、[花钱|huā qián|spend money]、[极了|jí le|extremely]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
