window.LESSONS = window.LESSONS || {};
const ph = (n,t,py,en) => `<div class="lesson"><h2>第 ${n} 课　${t}<span class="title-py">${py}</span><small>Lesson ${n} · ${en}</small></h2>
<div class="part"><h3>[一、听力|Yī tīnglì|1. Listening]</h3><h4 id="L${n}-l1">[第一部分|dì yī bùfen|Part 1]</h4><div class="placeholder">📝 第 ${n} 课 内容待填充</div>
<h4 id="L${n}-l2">[第二部分|dì èr bùfen|Part 2]</h4><div class="placeholder">📝 待填充</div>
<h4 id="L${n}-l3">[第三部分|dì sān bùfen|Part 3]</h4><div class="placeholder">📝 待填充</div>
<h4 id="L${n}-l4">[第四部分|dì sì bùfen|Part 4]</h4><div class="placeholder">📝 待填充</div></div>
<div class="part"><h3>[二、阅读|Èr yuèdú|2. Reading]</h3><h4 id="L${n}-r1">[第一部分|dì yī bùfen|Part 1]</h4><div class="placeholder">📝 待填充</div>
<h4 id="L${n}-r2">[第二部分|dì èr bùfen|Part 2]</h4><div class="placeholder">📝 待填充</div>
<h4 id="L${n}-r3">[第三部分|dì sān bùfen|Part 3]</h4><div class="placeholder">📝 待填充</div></div>
<div class="part"><h3>[三、书写|Sān shūxiě|3. Writing]</h3><h4 id="L${n}-w1">[第一部分|dì yī bùfen|Part 1]</h4><div class="placeholder">📝 待填充</div>
<h4 id="L${n}-w2">[第二部分|dì èr bùfen|Part 2]</h4><div class="placeholder">📝 待填充</div>
<h4 id="L${n}-w3">[第三部分|dì sān bùfen|Part 3]</h4><div class="placeholder">📝 待填充</div>
<h4 id="L${n}-w4">[第四部分|dì sì bùfen|Part 4]</h4><div class="placeholder">📝 待填充</div></div>
<div class="part"><h3>[四、复习|Sì fùxí|4. Review]</h3><div class="placeholder" id="L${n}-rev">📝 待填充</div></div></div>`;

/* ============================================================
   HSK3 练习册 · 第 6 课（完整）
   ============================================================ */
window.LESSONS = window.LESSONS || {};

window.LESSONS[6] = {
  navLabel:'第6课',
  html: `
    <div class="lesson">
      <h2>第 6 课　怎么突然找不到了
        <span class="title-py">Dì liù kè · Zěnme tūrán zhǎo bu dào le</span>
        <small>Lesson 6 · Why are they suddenly missing?</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L6-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图06.png" alt="听力图06" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图06.png</b></span>
        </div>

        <div class="q" id="L6-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [刚才|gāngcái|just now] [说|shuō|said] [什么？|shénme?|what?] [我|wǒ|I] [听|tīng|listen] [不|bù|not] [清楚。|qīngchu.|clearly.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [让|ràng|asked] [你|nǐ|you] [快点儿|kuài diǎnr|quickly] [过来。|guòlái.|come over.]</div>
          <div class="sent-en">M: What did you just say? I couldn't hear clearly.<br>W: I told you to hurry over.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[一个人|yí ge rén|a person] [在|zài|is] [侧耳倾听|cè’ěr qīngtīng|listening attentively]）</div>
        </div>
        <div class="q" id="L6-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[男：|Nán:|M:] [怎么|zěnme|why] [突然|tūrán|suddenly] [不|bù|not] [下雨|xià yǔ|rain] [了？|le?|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是|shì|yes] [啊，|a,|,] [刚才|gāngcái|just now] [还|hái|still] [下|xià|rain] [得|de|(complement)] [那么|nàme|so] [大。|dà.|heavy.]</div>
          <div class="sent-en">M: Why did it suddenly stop raining?<br>W: Yeah — just now it was raining so hard.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[一个人|yí ge rén|a person] [撑|chēng|holding] [着|zhe|(progressive)] [伞|sǎn|an umbrella]）</div>
        </div>
        <div class="q" id="L6-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[男：|Nán:|M:] [喂，|wèi,|Hello,] [你|nǐ|you] [今天|jīntiān|today] [不|bù|not] [出来|chūlái|come out] [跟|gēn|with] [大家|dàjiā|everyone] [一起|yìqǐ|together] [玩儿|wánr|play] [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [对不起，|duìbuqǐ,|Sorry,] [我|wǒ|my] [孩子|háizi|child] [太小，|tài xiǎo,|too young,] [离不开|lí bu kāi|cannot leave] [人。|rén.|people.]</div>
          <div class="sent-en">M: Hey, aren't you coming out to play with everyone today?<br>W: Sorry — my child is too young to be left alone.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[抱着|bào zhe|holding] [孩子|háizi|a child] [的|de|(possessive)] [妈妈|māma|mother]）</div>
        </div>
        <div class="q" id="L6-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [喂，|wèi,|Hello,] [我|wǒ|my] [的|de|(possessive)] [车|chē|car] [可能|kěnéng|maybe] [有|yǒu|have] [点儿|diǎnr|some] [问题，|wèntí,|problem,] [你|nǐ|you] [能|néng|can] [过来|guòlái|come over] [帮|bāng|help] [个|ge|(MW)] [忙|máng|favor] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [现在|xiànzài|now] [就|jiù|right away] [过去，|guòqù,|go over,] [你|nǐ|you] [在|zài|at] [哪儿？|nǎr?|where?]</div>
          <div class="sent-en">W: Hello, something may be wrong with my car — can you come over and help?<br>M: I'll be right there — where are you?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[打开|dǎkāi|opened] [车盖|chēgài|the car hood] [的|de|(possessive)] [女人|nǚrén|woman]）</div>
        </div>
        <div class="q" id="L6-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[男：|Nán:|M:] [树|shù|trees] [那么|nàme|so] [远，|yuǎn,|far,] [你|nǐ|you] [看|kàn|see] [得|de|(complement)] [清楚|qīngchu|clearly] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [有|yǒu|have] [眼镜，|yǎnjìng,|glasses,] [看|kàn|see] [得|de|(complement)] [清楚。|qīngchu.|clearly.]</div>
          <div class="sent-en">M: The trees are so far away — can you see clearly?<br>W: I have glasses — I can see clearly.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[一副|yí fù|a pair of] [眼镜|yǎnjìng|glasses]）</div>
        </div>

        <h4 id="L6-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L6-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[外边|wàibiān|outside] [特别|tèbié|especially] [冷，|lěng,|cold,] [你|nǐ|you] [出去|chūqù|go out] [的|de|(possessive)] [时候|shíhou|time] [多|duō|more] [穿|chuān|wear] [点儿。|diǎnr.|a bit.] [伞|sǎn|umbrella] [呢？|ne?|(question)] [带|dài|bring] [把伞|bǎ sǎn|an umbrella] [吧，|ba,|,] [可能|kěnéng|maybe] [要|yào|will] [下雨。|xià yǔ.|rain.]</div>
          <div class="sent-en">It's especially cold outside — wear more when you go out. Where's the umbrella? Bring one — it might rain.</div>
          <div class="zh stem">★ [外面|wàimiàn|outside] [下雪|xià xuě|snow] [了。|le.|(change)]</div>
          <div class="sent-en">★ It's snowing outside.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [说|shuō|says]「[可能|kěnéng|might] [要|yào|(be about to)] [下雨|xià yǔ|rain]」，[不是|bú shì|not] [下雪。|xià xuě|snow.]" data-expl-en="The text says 'might rain', not snow."></div>
        </div>
        <div class="q" id="L6-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[车上|chē shang|On the bus] [那么|nàme|so] [多|duō|many] [人，|rén,|people,] [我们|wǒmen|we] [还有|háiyǒu|still have] [这么|zhème|so] [多|duō|many] [东西，|dōngxi,|things,] [等|děng|wait for] [下|xià|next] [一辆|yí liàng|one] [吧，|ba,|,] [5 分钟|wǔ fēnzhōng|5 minutes] [就|jiù|then] [来|lái|come] [车|chē|bus] [了。|le.|(change)]</div>
          <div class="sent-en">The bus is so crowded and we have so many things — let's wait for the next one. It'll come in 5 minutes.</div>
          <div class="zh stem">★ [这辆车|zhè liàng chē|this bus] [他们|tāmen|they] [不|bù|not] [打算|dǎsuàn|plan to] [上去。|shàngqù.|get on.]</div>
          <div class="sent-en">★ They're not going to get on this bus.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[等|děng|wait for] [下|xià|the next] [一辆|yí liàng|one] [吧|ba|(suggestion)]」= [不|bù|not] [坐|zuò|taking] [这|zhè|this] [一辆。|yí liàng|one.]" data-expl-en="'Wait for the next one' = not taking this one."></div>
        </div>
        <div class="q" id="L6-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[小丽，|Xiǎolì,|Xiaoli,] [我|wǒ|I] [刚|gāng|just] [看见|kànjiàn|saw] [你|nǐ|you] [给|gěi|to] [我|wǒ|me] [打|dǎ|make] [的|de|(possessive)] [电话，|diànhuà,|phone call,] [刚才|gāngcái|just now] [我|wǒ|I] [去|qù|went to] [楼下|lóuxià|downstairs] [送|sòng|see off] [客人|kèrén|guests] [了，|le,|,] [没|méi|not] [带|dài|bring] [手机。|shǒujī.|phone.] [你|nǐ|you] [找|zhǎo|look for] [我|wǒ|me] [有|yǒu|have] [事|shì|matter] [吗？|ma?|(question)]</div>
          <div class="sent-en">Xiaoli, I just saw your call. I went downstairs to see guests off and didn't bring my phone. Do you need me?</div>
          <div class="zh stem">★ [他|tā|he] [正在|zhèngzài|right now] [打电话。|dǎ diànhuà.|making a phone call.]</div>
          <div class="sent-en">★ He is making a phone call.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[他|tā|He] [说|shuō|says]「[刚才|gāngcái|just now] [没带|méi dài|didn’t bring] [手机|shǒujī|the phone]」——[正在|zhèngzài|what he’s] [说|shuō|saying] [的|de|(possessive)] [是|shì|is] [刚才|gāngcái|just now] [的|de|(possessive)] [事，|shì,|what happened,] [不是|bú shì|not] [正在|zhèngzài|currently] [打电话。|dǎ diànhuà|on the phone.]" data-expl-en="He's talking about what just happened — he's not on the phone now."></div>
        </div>
        <div class="q" id="L6-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[我|wǒ|I] [每天|měitiān|every day] [早上|zǎoshang|morning] [都|dōu|all] [去|qù|go to] [公园|gōngyuán|park] [跑步，|pǎobù,|run,] [锻炼|duànliàn|exercise] [身体。|shēntǐ.|body.]</div>
          <div class="sent-en">I go running in the park every morning to exercise.</div>
          <div class="zh stem">★ [他|tā|he] [每天|měitiān|every day] [都|dōu|all] [运动。|yùndòng.|exercise.]</div>
          <div class="sent-en">★ He exercises every day.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[每天|měitiān|Running every day] [跑步|pǎobù|(running)] = [每天|měitiān|every day] [都|dōu|all] [运动。|yùndòng|exercises.]" data-expl-en="Running every day = exercises every day."></div>
        </div>
        <div class="q" id="L6-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[昨天|zuótiān|yesterday] [的|de|(possessive)] [作业|zuòyè|homework] [真|zhēn|really] [容易，|róngyì,|easy,] [我|wǒ|I] [不到|bú dào|less than] [一个小时|yí ge xiǎoshí|one hour] [就|jiù|then] [写完|xiě wán|finished] [了。|le.|(change)] [小丽，|Xiǎolì,|Xiaoli,] [你|nǐ|your] [的|de|(possessive)] [作业|zuòyè|homework] [呢？|ne?|(question)] [带|dài|bring] [了|le|(past)] [吗？|ma?|(question)]</div>
          <div class="sent-en">Yesterday's homework was really easy — I finished in less than an hour. Xiaoli, what about your homework? Did you bring it?</div>
          <div class="zh stem">★ [他|tā|he] [想|xiǎng|wants to] [知道|zhīdào|know] [小丽|Xiǎolì|Xiaoli] [觉得|juéde|feel] [作业|zuòyè|homework] [难|nán|difficult] [不|bù|not] [难。|nán.|difficult.]</div>
          <div class="sent-en">★ He wants to know if Xiaoli finds the homework difficult.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[他|tā|He] [问|wèn|asks]「[带|dài|brought it] [了|le|(past)] [吗|ma|(question)]」，[是|shì|he’s] [问|wèn|asking] [小丽|Xiǎolì|Xiaoli] [带没带|dài méi dài|whether she brought] [作业，|zuòyè,|the homework,] [不是|bú shì|not] [问|wèn|asking if it’s] [难|nán|difficult] [不|bù|or] [难。|nán|not.]" data-expl-en="He's asking if she brought it, not if it's difficult."></div>
        </div>

        <h4 id="L6-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L6-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[男：|Nán:|M:] [饭桌上的|fànzhuō shang de|on the table] [蛋糕|dàngāo|cake] [怎么|zěnme|why] [没|méi|not] [吃完？|chī wán?|finish eating?] [你们|nǐmen|you] [吃饱|chī bǎo|full] [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [买|mǎi|bought] [得|de|(complement)] [太多|tài duō|too much] [了，|le,|,] [刚才|gāngcái|just now] [还|hái|also] [吃|chī|ate] [了|le|(past)] [很多|hěnduō|much] [饭，|fàn,|rice,] [怎么|zěnme|how] [吃|chī|eat] [得|de|(complement)] [完|wán|finish] [啊？|a?|(question)]</div>
          <div class="sent-en">M: Why didn't you finish the cake on the table? Are you full?<br>W: You bought too much, and we just ate a lot of rice — how could we finish it?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [是|shì|(is)] [什么|shénme|what] [意思？|yìsi?|meaning?]</div>
          <div class="sent-en">Q: What does the woman mean?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[蛋糕不好吃|dàngāo bù hǎochī|cake isn't tasty]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[没吃饱|méi chī bǎo|not full]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[蛋糕太多了|dàngāo tài duō le|too much cake]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[你|nǐ|You] [买|mǎi|bought] [得|de|(complement)] [太多|tài duō|too many] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L6-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这个|zhège|this] [题|tí|question] [我|wǒ|I] [还|hái|still] [不|bù|not] [太|tài|quite] [清楚|qīngchu|understand] [怎么|zěnme|how] [做。|zuò.|do.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [都|dōu|already] [讲|jiǎng|explained] [了|le|(past)] [三次|sān cì|three times] [了，|le,|,] [你|nǐ|you] [怎么|zěnme|why] [还|hái|still] [听|tīng|listen] [不|bù|not] [明白？|míngbai?|understand?]</div>
          <div class="sent-en">M: I still don't quite understand how to do this question.<br>W: I've explained it three times — why don't you get it yet?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[没听清楚|méi tīng qīngchu|didn't hear clearly]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[没听明白|méi tīng míngbai|didn't understand]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[讲了三次|jiǎng le sān cì|explained three times]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[还|hái|still] [不太|bú tài|not quite] [清楚|qīngchu|clear]」= [没|méi|didn’t] [听明白|tīng míngbai|understand.]</div>
        </div>
        <div class="q" id="L6-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [小雨|Xiǎoyǔ|Xiaoyu] [呢？|ne?|(question)] [在|zài|at] [你们|nǐmen|you] [这儿|zhèr|here] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [刚才|gāngcái|just now] [还|hái|still] [在|zài|at] [这儿|zhèr|here] [跟|gēn|with] [我们|wǒmen|us] [聊天儿|liáotiānr|chat] [呢，|ne,|,] [您|nín|you] [去|qù|go to] [旁边|pángbiān|next to] [的|de|(possessive)] [办公室|bàngōngshì|office] [问问？|wèn wen?|ask?]</div>
          <div class="sent-en">W: Where's Xiaoyu? Is she here with you?<br>M: She was just here chatting with us — try asking the office next door.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [在|zài|is] [做|zuò|doing] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What is the woman doing?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[聊天儿|liáotiānr|chatting]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[找人|zhǎo rén|looking for someone]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[问旁边办公室的人|wèn pángbiān bàngōngshì de rén|asking the office next door]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[小雨|Xiǎoyǔ|Xiaoyu] [呢？|ne?|(question)]」= [在|zài|is] [找|zhǎo|looking for] [小雨。|Xiǎoyǔ|Xiaoyu.]</div>
        </div>
        <div class="q" id="L6-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [怎么|zěnme|why] [了？|le?|(change)] [突然|tūrán|suddenly] [说|shuō|said] [要|yào|want to] [用|yòng|use] [我|wǒ|my] [的|de|(possessive)] [车，|chē,|car,] [你|nǐ|your] [的|de|(possessive)] [车|chē|car] [呢？|ne?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|my] [弟弟|dìdi|younger brother] [去|qù|went to] [外地，|wàidì,|other places,] [他|tā|he] [开走|kāi zǒu|drove away] [了，|le,|,] [这几天|zhè jǐ tiān|these days] [回|huí|come] [不|bù|not] [来。|lái.|back.]</div>
          <div class="sent-en">M: What's up? Suddenly saying you want to use my car — where's yours?<br>W: My younger brother went to another city and drove it away. He won't be back for a few days.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[现在没有车|xiànzài méiyǒu chē|no car now]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[要去外地|yào qù wàidì|going to another city]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[这几天不在家|zhè jǐ tiān bú zài jiā|not home these days]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[弟弟|dìdi|The brother] [把|bǎ|(BA)] [车|chē|the car] [开走|kāi zǒu|drove away] [了|le|(change)] → [女的|nǚde|the woman] [现在|xiànzài|now] [没有|méiyǒu|has no] [车。|chē|car.]</div>
        </div>
        <div class="q" id="L6-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [喂，|wèi,|Hello,] [你|nǐ|you] [下|xià|get off] [飞机|fēijī|plane] [了|le|(change)] [吗？|ma?|(question)] [吃饭|chīfàn|eat] [了|le|(past)] [没有？|méiyǒu?|yet?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [刚|gāng|just] [到|dào|arrived] [宾馆，|bīnguǎn,|hotel,] [刚才|gāngcái|just now] [跟|gēn|with] [朋友|péngyou|friends] [在|zài|at] [下边|xiàbiān|downstairs] [的|de|(possessive)] [花园|huāyuán|garden] [聊天儿|liáotiānr|chat] [聊|liáo|chat] [得|de|(complement)] [特别|tèbié|especially] [高兴，|gāoxìng,|happy,] [还|hái|still] [没|méi|not] [吃饭|chīfàn|eat] [呢。|ne.|(emphasis)]</div>
          <div class="sent-en">W: Hello, have you gotten off the plane? Have you eaten?<br>M: I just got to the hotel — I was chatting with friends in the garden downstairs and was so happy I haven't eaten yet.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [现在|xiànzài|now] [在|zài|is] [哪儿？|nǎr?|where?]</div>
          <div class="sent-en">Q: Where is the man now?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[在花园|zài huāyuán|in the garden]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[在饭馆|zài fànguǎn|in a restaurant]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[在宾馆|zài bīnguǎn|in the hotel]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[刚|gāng|just] [到|dào|arrived at] [宾馆|bīnguǎn|the hotel]」。</div>
        </div>

        <h4 id="L6-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L6-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|your] [妻子|qīzi|wife] [找到|zhǎo dào|found] [新|xīn|new] [工作|gōngzuò|job] [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [还|hái|still] [没|méi|not] [呢。|ne.|(emphasis)] [她|tā|she] [刚|gāng|just] [离开|líkāi|left] [学校，|xuéxiào,|school,] [最近|zuìjìn|lately] [一直|yìzhí|always] [在|zài|at] [家|jiā|home] [休息。|xiūxi.|rest.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [问问|wèn wen|ask] [她|tā|her] [想|xiǎng|want] [不|bù|not] [想|xiǎng|want] [来|lái|come to] [我们|wǒmen|our] [公司。|gōngsī.|company.]</div>
          <div class="zh stem">[男：|Nán:|M:] [谢谢|xièxie|thank] [你，|nǐ,|you,] [我|wǒ|I] [回家|huí jiā|go home] [就|jiù|then] [告诉|gàosu|tell] [她。|tā.|her.]</div>
          <div class="sent-en">W: Has your wife found a new job?<br>M: Not yet. She just left the school and has been resting at home.<br>W: Ask her if she'd like to come to our company.<br>M: Thank you — I'll tell her when I get home.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的|nánde|the man’s] [的|de|(possessive)] [妻子，|qīzi,|wife,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the man's wife?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[在学校工作过|zài xuéxiào gōngzuò guò|worked at a school]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[在女的的公司工作过|zài nǚde de gōngsī gōngzuò guò|worked at the woman's company]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[一直没有工作|yìzhí méiyǒu gōngzuò|has never worked]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[刚|gāng|just] [离开|líkāi|left] [学校|xuéxiào|the school]」→ [在|zài|worked at] [学校|xuéxiào|the school] [工作|gōngzuò|(worked)] [过。|guò|before.]</div>
        </div>
        <div class="q" id="L6-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这些|zhèxiē|these] [都|dōu|all] [是|shì|are] [你|nǐ|your] [女儿|nǚ'ér|daughter] [的|de|(possessive)] [照片|zhàopiàn|photos] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [对，|duì,|right,] [这|zhè|this] [是|shì|is] [今年|jīnnián|this year] [的，|de,|,] [那|nà|that] [是|shì|is] [她|tā|she] [六岁|liù suì|six years old] [时|shí|when] [的。|de.|(nominalizer)]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|your] [女儿|nǚ'ér|daughter] [越来越|yuè lái yuè|more and more] [漂亮|piàoliang|pretty] [了！|le!|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [谢谢，|xièxie,|Thanks,] [她|tā|she] [最|zuì|most] [爱|ài|loves] [听|tīng|hear] [这些|zhèxiē|these] [了。|le.|(change)]</div>
          <div class="sent-en">M: Are these all photos of your daughter?<br>W: Yes — this is this year's, that's from when she was six.<br>M: Your daughter is getting prettier and prettier!<br>W: Thanks — she loves hearing that.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女儿，|nǚ’ér,|the daughter,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the daughter?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[现在更漂亮|xiànzài gèng piàoliang|prettier now]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[小时候更漂亮|xiǎo shíhou gèng piàoliang|prettier as a child]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[最爱看照片|zuì ài kàn zhàopiàn|loves looking at photos]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[越来越|yuè lái yuè|more and more] [漂亮|piàoliang|pretty] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L6-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [刚|gāng|just] [到|dào|arrived in] [北京，|Běijīng,|Beijing,] [晚上|wǎnshang|at night] [总是|zǒngshì|always] [睡|shuì|sleep] [不|bù|not] [着。|zháo.|fall asleep.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [睡|shuì|sleep] [不|bù|not] [着|zháo|fall asleep] [的|de|(possessive)] [时候|shíhou|time] [喜欢|xǐhuan|like] [看|kàn|watch] [电视，|diànshì,|TV,] [你|nǐ|you] [也|yě|also] [看看|kàn kan|watch] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [听|tīng|listen] [不|bù|not] [懂|dǒng|understand] [汉语，|Hànyǔ,|Chinese,] [也|yě|also] [看|kàn|read] [不|bù|not] [懂|dǒng|understand] [汉字。|Hànzì.|Chinese characters.] [多|duō|so] [没|méi|not] [意思|yìsi|interesting] [啊！|a!|!]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|then] [跟|gēn|with] [我|wǒ|me] [聊聊天儿|liáoliao tiānr|chat] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: I just arrived in Beijing and can't sleep at night.<br>W: When I can't sleep I like watching TV — you can try too.<br>M: I don't understand Chinese and can't read Chinese characters — so boring!<br>W: Then chat with me.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [有|yǒu|has] [什么|shénme|what] [问题？|wèntí?|problem?]</div>
          <div class="sent-en">Q: What's the man's problem?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[考得不好|kǎo de bù hǎo|did badly on exams]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[睡不着|shuì bu zháo|cannot sleep]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[喜欢看电视|xǐhuan kàn diànshì|likes watching TV]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[晚上|wǎnshang|at night] [总是|zǒngshì|always] [睡不着|shuì bu zháo|can’t sleep]」。</div>
        </div>
        <div class="q" id="L6-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [怎么|zěnme|why] [回来|huílái|come back] [这么|zhème|so] [晚？|wǎn?|late?] [去|qù|go] [哪儿|nǎr|where] [了？|le?|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [不是|bú shì|aren't] [让|ràng|asked] [我|wǒ|me] [给|gěi|for] [小猫|xiǎomāo|kitten] [买|mǎi|buy] [点儿|diǎnr|some] [吃|chī|eat] [的|de|(possessive)] [吗？|ma?|(question)] [刚才|gāngcái|just now] [我|wǒ|I] [去|qù|went to] [商店|shāngdiàn|shop] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [商店|shāngdiàn|shop] [就|jiù|just] [在|zài|at] [楼下。|lóuxià.|downstairs.] [你|nǐ|you] [还|hái|also] [去|qù|went to] [什么|shénme|what] [地方|dìfang|place] [了？|le?|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [刚出|gāng chū|just left] [商店，|shāngdiàn,|shop,] [有个|yǒu ge|a] [孩子|háizi|child] [找|zhǎo|looking for] [不|bù|not] [到|dào|find] [回家|huí jiā|go home] [的|de|(possessive)] [路|lù|road] [了，|le,|,] [我|wǒ|I] [过去|guòqù|went over] [帮|bāng|helped] [他|tā|him] [给|gěi|to] [他|tā|his] [家里|jiā li|family] [打|dǎ|make] [了|le|(past)] [个|ge|(MW)] [电话。|diànhuà.|call.]</div>
          <div class="sent-en">W: Why are you back so late? Where did you go?<br>M: Didn't you ask me to buy food for the kitten? I just went to the shop.<br>W: The shop is right downstairs. Where else did you go?<br>M: Just after leaving the shop, a child couldn't find his way home. I helped him call his family.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [为什么|wèishénme|why] [回来|huílái|came back] [晚|wǎn|late] [了？|le?|?]</div>
          <div class="sent-en">Q: Why did the man come back late?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[去商店买东西了|qù shāngdiàn mǎi dōngxi le|went to shop]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[找不到回家的路了|zhǎo bu dào huí jiā de lù le|couldn't find way home]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[帮孩子的忙了|bāng háizi de máng le|helped the child]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[帮|bāng|Helped] [孩子|háizi|the child] [打电话|dǎ diànhuà|call] [回家|huí jiā|home] [了。|le|(change)]</div>
        </div>
        <div class="q" id="L6-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [看，|kàn,|Look,] [前边|qiánbiān|in front] [那个人|nàge rén|that person] [是不是|shì bú shì|is it] [周期？|Zhōuqī?|Zhouqi?]</div>
          <div class="zh stem">[男：|Nán:|M:] [离|lí|from] [得|de|(complement)] [太|tài|too] [远，|yuǎn,|far,] [我|wǒ|I] [看|kàn|see] [不|bù|not] [清楚。|qīngchu.|clearly.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我们|wǒmen|we] [快点儿|kuài diǎnr|quickly] [走|zǒu|walk] [过去|guòqù|over] [看看|kàn kan|see] [是不是|shì bú shì|if] [他。|tā.|it's him.]</div>
          <div class="zh stem">[男：|Nán:|M:] [刚才|gāngcái|just now] [买|mǎi|bought] [了|le|(past)] [这么|zhème|so] [多|duō|many] [东西，|dōngxi,|things,] [你|nǐ|you] [也|yě|also] [不|bù|not] [帮|bāng|help] [我|wǒ|me] [拿，|ná,|carry,] [我|wǒ|I] [走|zǒu|walk] [不|bù|not] [快。|kuài.|fast.]</div>
          <div class="sent-en">W: Look, is that person in front Zhouqi?<br>M: Too far — I can't see clearly.<br>W: Let's walk over quickly and check.<br>M: We just bought so much and you're not helping me carry — I can't walk fast.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[手里的东西多|shǒu li de dōngxi duō|carrying a lot]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[看不见前边那个人|kàn bu jiàn qiánbiān nàge rén|cannot see the person in front]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[离周期很近|lí Zhōuqī hěn jìn|very close to Zhouqi]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[刚才|gāngcái|just now] [买|mǎi|bought] [了|le|(past)] [这么|zhème|so] [多|duō|many] [东西|dōngxi|things]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L6-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L6-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[他|tā|he] [刚|gāng|just] [离开|líkāi|left] [学校，|xuéxiào,|school,] [没|méi|not] [走|zǒu|go] [太远。|tài yuǎn.|too far.]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[我|wǒ|my] [的|de|(possessive)] [手表|shǒubiǎo|watch] [和|hé|and] [裤子|kùzi|trousers] [呢？|ne?|(question)]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[你|nǐ|you] [刚|gāng|just] [下|xià|got off] [飞机，|fēijī,|plane,] [休息|xiūxi|rest] [一下|yíxià|a bit] [吧。|ba.|(suggestion)]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[你|nǐ|you] [不是|bú shì|aren't] [要|yào|going to] [出去|chūqù|go out] [吗？|ma?|(question)] [怎么|zěnme|why] [还|hái|still] [在|zài|at] [这儿？|zhèr?|here?]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[喂，|wèi,|Hello,] [你|nǐ|you] [听|tīng|hear] [得|de|(complement)] [见|jiàn|(see/hear)] [我|wǒ|me] [说话|shuōhuà|speak] [吗？|ma?|(question)]</span></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L6-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[不行，|bùxíng,|No,] [刚才|gāngcái|just now] [公司|gōngsī|company] [来|lái|come] [电话，|diànhuà,|call,] [让我|ràng wǒ|asked me] [过去|guòqù|go over] [一下。|yíxià.|a bit.] （<span class="blank">　</span>）</div>
          <div class="sent-en">No — the company just called and asked me to go over.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L6-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[小方|Xiǎofāng|Xiaofang] [呢？|ne?|(question)] [不|bù|not] [在|zài|at] [校园里|xiàoyuán li|in the campus] [吗？|ma?|(question)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Where's Xiaofang? Isn't she on campus?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L6-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[雨|yǔ|rain] [下|xià|falls] [得|de|(complement)] [太大，|tài dà,|too heavy,] [出|chū|go] [不|bù|not] [去|qù|out] [了。|le.|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">It's raining too hard — we can't go out.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L6-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[你|nǐ|you] [说|shuō|say] [什么？|shénme?|what?] [我|wǒ|I] [一个|yí ge|one] [字|zì|character] [也|yě|also] [听|tīng|hear] [不|bù|not] [见。|jiàn.|(see/hear)] （<span class="blank">　</span>）</div>
          <div class="sent-en">What did you say? I can't hear a word.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L6-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[你|nǐ|you] [怎么|zěnme|why] [总是|zǒngshì|always] [找|zhǎo|look for] [不|bù|not] [到|dào|find] [东西？|dōngxi?|things?] （<span class="blank">　</span>）</div>
          <div class="sent-en">Why can't you ever find your things?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L6-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L6-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[离开|líkāi|leave]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[明白|míngbai|understand]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[特别|tèbié|especially]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[音乐|yīnyuè|music]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[刚才|gāngcái|just now]</span></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L6-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[我|wǒ|I] [快要|kuàiyào|about to] （<span class="blank">　</span>） [这儿|zhèr|here] [了，|le,|,] [我们|wǒmen|we] [一起|yìqǐ|together] [吃|chī|eat] [个|ge|(MW)] [饭|fàn|meal] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">I'm about to leave here — let's have a meal together.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L6-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[这个|zhège|this] [电影|diànyǐng|movie] （<span class="blank">　</span>） [有意思，|yǒu yìsi,|interesting,] [我|wǒ|I] [给|gěi|to] [你|nǐ|you] [讲讲|jiǎng jiang|tell about] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">This movie is especially interesting — let me tell you about it.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L6-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[今天|jīntiān|today] [的|de|(possessive)] [考试|kǎoshì|exam] [有点儿|yǒudiǎnr|a bit] [难，|nán,|hard,] [不少|bùshǎo|quite a few] [题|tí|questions] [我|wǒ|I] [都|dōu|all] [不|bù|not] （<span class="blank">　</span>）。</div>
          <div class="sent-en">Today's exam was a bit hard — I couldn't understand many questions.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L6-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [我|wǒ|I] [今天|jīntiān|today] [喝|hē|drank] [了|le|(past)] [两杯|liǎng bēi|two cups of] [咖啡，|kāfēi,|coffee,] [现在|xiànzài|now] [睡|shuì|sleep] [不|bù|not] [着|zháo|fall asleep] [了。|le.|(change)]</div>
          <div class="zh">[B：|B:|B:] [你可以|nǐ kěyǐ|you can] [听听|tīng ting|listen to] （<span class="blank">　</span>）。</div>
          <div class="sent-en">A: I drank two cups of coffee today and now I can't sleep.<br>B: You can listen to music.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L6-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [小方，|Xiǎofāng,|Xiaofang,] （<span class="blank">　</span>） [经理|jīnglǐ|manager] [找|zhǎo|looking for] [你。|nǐ.|you.]</div>
          <div class="zh">[B：|B:|B:] [好，|hǎo,|OK,] [我|wǒ|I] [现在|xiànzài|now] [就|jiù|right away] [去|qù|go to] [经理|jīnglǐ|manager] [办公室。|bàngōngshì.|office.]</div>
          <div class="sent-en">A: Xiaofang, the manager was just looking for you.<br>B: OK, I'll go to the manager's office now.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L6-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L6-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[不少|bùshǎo|quite a few] [人|rén|people] [觉得|juéde|feel] [现在|xiànzài|now] [的|de|(possessive)] [人|rén|people] [都|dōu|all] [不|bù|not] [太|tài|quite] [会|huì|know how to] [说话|shuōhuà|talk] [了。|le.|(change)] [有时候|yǒu shíhou|sometimes] [想|xiǎng|think] [得|de|(complement)] [很|hěn|very] [清楚，|qīngchu,|clearly,] [但是|dànshì|but] [说|shuō|speak] [不|bù|not] [明白。|míngbai.|clearly.]</div>
          <div class="sent-en">Quite a few people feel that nowadays people don't know how to talk anymore. Sometimes we think clearly but can't express ourselves clearly.</div>
          <div class="zh ask">★ [现在|xiànzài|Today’s] [的|de|(possessive)] [人：|rén:|people:]</div>
          <div class="sent-en">★ Today's people: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不说话|bù shuōhuà|don't talk]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[说话说得太快|shuōhuà shuō de tài kuài|speak too fast]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[有时候说话说不明白|yǒu shíhou shuōhuà shuō bu míngbai|sometimes can't express clearly]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[想|xiǎng|thinks] [得|de|(complement)] [很|hěn|very] [清楚，|qīngchu,|clearly,] [但是|dànshì|but] [说|shuō|explains] [不|bù|not] [明白|míngbai|clearly]」。</div>
        </div>
        <div class="q" id="L6-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[考试|kǎoshì|exam] [或者|huòzhě|or] [做|zuò|do] [作业|zuòyè|homework] [不|bù|not] [明白|míngbai|understand] [的|de|(possessive)] [时候|shíhou|time] [别|bié|don't] [着急|zháojí|hurry] [问，|wèn,|ask,] [其实|qíshí|actually] [多|duō|more] [读读|dú du|read] [题、|tí,|questions,] [多|duō|more] [想想，|xiǎng xiang,|think,] [很快|hěn kuài|quickly] [就|jiù|then] [能|néng|can] [看懂|kàn dǒng|understand] [问题。|wèntí.|question.]</div>
          <div class="sent-en">When you don't understand during an exam or homework, don't rush to ask. Actually, read the question more and think more — you'll quickly understand.</div>
          <div class="zh ask">★ [看不懂|kàn bu dǒng|When you can’t understand] [问题|wèntí|a question] [时：|shí:|(when):]</div>
          <div class="sent-en">★ When you can't understand a question: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[不要着急问朋友|bú yào zháojí wèn péngyou|don't rush to ask friends]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[多问问朋友|duō wèn wen péngyou|ask friends more]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[问老师|wèn lǎoshī|ask the teacher]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[别|bié|Don’t] [着急|zháojí|rush to] [问|wèn|ask]」= [不要|bú yào|don’t] [着急|zháojí|rush to] [问。|wèn|ask.]</div>
        </div>
        <div class="q" id="L6-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[在|zài|in] [中国，|Zhōngguó,|China,] [去|qù|go to] [朋友|péngyou|friend] [家|jiā|home] [玩儿，|wánr,|play,] [离开|líkāi|leave] [时|shí|when] [朋友|péngyou|friend] [可能|kěnéng|maybe] [对|duì|to] [你|nǐ|you] [说|shuō|say] "[慢走|màn zǒu|walk slowly]"，[很多|hěnduō|many] [外国人|wàiguórén|foreigners] [听|tīng|hear] [不|bù|not] [明白。|míngbai.|understand.] [其实|qíshí|actually] [他们|tāmen|their] [的|de|(possessive)] [意思|yìsi|meaning] [是|shì|is] [让|ràng|let] [你|nǐ|you] [在|zài|at] [回去|huíqù|go back] [的|de|(possessive)] [路上|lù shang|on the road] [小心|xiǎoxīn|careful] [点儿，|diǎnr,|a bit,] [不|bù|not] [是|shì|is] [让|ràng|let] [你|nǐ|you] [慢|màn|slow] [点儿|diǎnr|a bit] [走。|zǒu.|walk.]</div>
          <div class="sent-en">In China, when you visit a friend's home, they might say "walk slowly" when you leave. Many foreigners don't understand. Actually, it means "be careful on your way home", not "walk slowly".</div>
          <div class="zh ask">★ [朋友|péngyou|When a friend] [说|shuō|says]「[慢走|màn zǒu|take care]」[的|de|(possessive)] [意思|yìsi|meaning] [可能|kěnéng|might] [是：|shì:|be:]</div>
          <div class="sent-en">★ When a friend says “màn zǒu”, the meaning might be: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[路上小心|lù shang xiǎoxīn|be careful on the way]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[别走得太快|bié zǒu de tài kuài|don't walk too fast]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[听不明白|tīng bu míngbai|can't understand]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[让|ràng|tells] [你|nǐ|you] [在|zài|on] [回去|huíqù|the way back] [的|de|(possessive)] [路上|lù shang|(way)] [小心点儿|xiǎoxīn diǎnr|to be careful]」。</div>
        </div>
        <div class="q" id="L6-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[经理，|jīnglǐ,|Manager,] [我|wǒ|I] [觉得|juéde|feel] [店里|diàn li|in the shop] [的|de|(possessive)] [服务员|fúwùyuán|attendants] [有点儿|yǒudiǎnr|a bit] [少，|shǎo,|few,] [现在|xiànzài|now] [来|lái|come] [吃饭|chīfàn|eat] [的|de|(possessive)] [客人|kèrén|guests] [越来越|yuè lái yuè|more and more] [多，|duō,|many,] [特别|tèbié|especially] [是|shì|is] [晚上，|wǎnshang,|evening,] [这|zhè|these] [几个人|jǐ ge rén|few people] [忙|máng|busy] [不|bù|not] [过来，|guòlái,|cope,] [您|nín|you] [看|kàn|look] [要|yào|need to] [不要|bú yào|or not] [多|duō|more] [找|zhǎo|find] [几个人|jǐ ge rén|a few people] [来|lái|come] [帮忙？|bāngmáng?|help?]</div>
          <div class="sent-en">Manager, I think we have too few attendants. Now more and more guests come to eat, especially at night — a few of us can't cope. Do you think we should find more people to help?</div>
          <div class="zh ask">★ [说话|shuōhuà|The speaker] [人|rén|’s] [的|de|(possessive)] [意思|yìsi|meaning] [是：|shì:|is:]</div>
          <div class="sent-en">★ The speaker's meaning is: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[客人太少|kèrén tài shǎo|too few guests]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[想多找几个服务员|xiǎng duō zhǎo jǐ ge fúwùyuán|wants to hire more attendants]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[让经理来吃饭|ràng jīnglǐ lái chīfàn|let the manager come eat]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[要不要|yào bú yào|whether to] [多|duō|find] [找|zhǎo|(find)] [几个|jǐ ge|a few] [人|rén|people] [来|lái|to] [帮忙|bāngmáng|help]」。</div>
        </div>
        <div class="q" id="L6-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[小红，|Xiǎohóng,|Xiaohong,] [你|nǐ|you] [过来|guòlái|come over] [帮|bāng|help] [爸爸|bàba|Dad] [一个|yí ge|a] [忙|máng|favor] [好|hǎo|good] [不|bù|not] [好？|hǎo?|(question)] [爸爸|bàba|Dad] [的|de|(possessive)] [眼镜|yǎnjìng|glasses] [找|zhǎo|look] [不|bù|not] [到|dào|find] [了，|le,|,] [你|nǐ|you] [看看|kàn kan|look] [在|zài|at] [哪儿|nǎr|where] [呢？|ne?|(question)] [我|wǒ|I] [记得|jìde|remember] [刚才|gāngcái|just now] [放|fàng|put] [到|dào|to] [椅子|yǐzi|chair] [上|shàng|on] [了，|le,|,] [是不是|shì bú shì|is it] [妈妈|māma|Mom] [拿|ná|took] [走|zǒu|away] [了？|le?|(change)]</div>
          <div class="sent-en">Xiaohong, come help Dad — I can't find my glasses. See where they are. I remember putting them on the chair just now — did Mom take them?</div>
          <div class="zh ask">★ [爸爸|bàba|Dad] [让|ràng|asked] [小红|Xiǎohóng|Xiaohong] [：|:|to:]</div>
          <div class="sent-en">★ Dad asked Xiaohong to: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[找眼镜|zhǎo yǎnjìng|find the glasses]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[找妈妈|zhǎo māma|find Mom]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[搬椅子|bān yǐzi|move the chair]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[你|nǐ|Come] [过来|guòlái|over] [帮|bāng|and help] [爸爸|bàba|Dad] [一个|yí ge|a] [忙|máng|favor]」→ [找|zhǎo|find] [眼镜。|yǎnjìng|the glasses.]</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L6-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L6-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[明白|míngbai|understand] [电话里|diànhuà li|on the phone] [讲|jiǎng|speak] [不|bù|not]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[电话|diànhuà|On the phone] [里|li|(inside)] [讲|jiǎng|can’t explain] [不|bù|not] [明白。|míngbai|clearly.]<div class="sent-en">Can't explain clearly on the phone.</div></div>
        </div>
        <div class="write-item" id="L6-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[听|tīng|hear] [清楚|qīngchu|clearly] [你|nǐ|you] [什么|shénme|what] [说|shuō|say] [不|bù|not]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[听|tīng|Can’t hear] [不|bù|not] [清楚|qīngchu|clearly] [你|nǐ|what you] [说|shuō|say] [什么。|shénme|(what).]<div class="sent-en">Can't hear clearly what you're saying.</div></div>
        </div>
        <div class="write-item" id="L6-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[到|dào|arrive] [买|mǎi|buy] [这儿|zhèr|here] [不|bù|not] [在|zài|at] [咖啡|kāfēi|coffee]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[在|zài|At] [这儿|zhèr|here] [买|mǎi|can’t buy] [不到|bu dào|(can’t)] [咖啡。|kāfēi|coffee.]<div class="sent-en">Can't buy coffee here.</div></div>
        </div>
        <div class="write-item" id="L6-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[完|wán|finish] [得|de|(complement)] [饭不多|fàn bù duō|not much rice] [吃|chī|eat] [我|wǒ|I]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[饭|fàn|There’s not much] [不|bù|not] [多，|duō,|much food,] [我|wǒ|I] [吃|chī|can] [得|de|(complement)] [完。|wán|finish it.]<div class="sent-en">There isn't much rice, I can finish it.</div></div>
        </div>
        <div class="write-item" id="L6-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[吗|ma|(question)] [懂|dǒng|understand] [看|kàn|read] [汉语报纸|Hànyǔ bàozhǐ|Chinese newspaper] [得|de|(complement)] [你|nǐ|you]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|Can you] [看|kàn|read] [得|de|(complement)] [懂|dǒng|understand] [汉语|Hànyǔ|Chinese] [报纸|bàozhǐ|newspapers] [吗？|ma?|(question)]<div class="sent-en">Can you read Chinese newspapers?</div></div>
        </div>

        <h4 id="L6-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L6-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[我|wǒ|I] <span class="blank-input"><span class="input-py">gāng</span><input type="text" data-ans="刚"></span> [才|cái|just now] [一直|yìzhí|always] [在|zài|(progressive)] [玩儿|wánr|play] [电脑游戏，|diànnǎo yóuxì,|computer games,] [可能|kěnéng|maybe] [没|méi|not] [听见。|tīngjiàn.|heard.]</div>
          <div class="sent-en">I was playing computer games just now — I might not have heard.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[刚|gāng|just]</span></div>
        </div>
        <div class="write-item" id="L6-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[这个|zhège|this] [问题|wèntí|question] [我|wǒ|I] [已经|yǐjīng|already] <span class="blank-input"><span class="input-py">jiǎng</span><input type="text" data-ans="讲"></span> [得|de|(complement)] [很|hěn|very] [明白了，|míngbai le,|clearly,] [不要|bú yào|don't] [再|zài|again] [问|wèn|ask] [我|wǒ|me] [了。|le.|(change)]</div>
          <div class="sent-en">I've explained this question very clearly — don't ask me again.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[讲|jiǎng|speak]</span></div>
        </div>
        <div class="write-item" id="L6-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[中午|zhōngwǔ|noon] [休息|xiūxi|rest] [的|de|(possessive)] [时候，|shíhou,|when,] [大家|dàjiā|everyone] [都|dōu|all] [去|qù|go to] [公司|gōngsī|company] [楼下|lóuxià|downstairs] [的|de|(possessive)] [饭馆|fànguǎn|restaurant] [吃饭、|chīfàn,|eat,] <span class="blank-input"><span class="input-py">liáo</span><input type="text" data-ans="聊"></span> [天儿。|tiānr.|chat.]</div>
          <div class="sent-en">At noon, everyone goes to the restaurant downstairs to eat and chat.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[聊|liáo|chat]（[聊天儿|liáotiānr|chat]）</span></div>
        </div>
        <div class="write-item" id="L6-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[我家|wǒ jiā|my home] [旁边|pángbiān|next to] [有|yǒu|there is] [一个|yí ge|a] [小|xiǎo|small] [公|gōng|public] <span class="blank-input"><span class="input-py">yuán</span><input type="text" data-ans="园"></span>，[我|wǒ|I] [每天|měitiān|every day] [都|dōu|all] [带|dài|take] [我|wǒ|my] [的|de|(possessive)] [小狗|xiǎogǒu|puppy] [去|qù|go to] [那儿|nàr|there] [走走。|zǒu zou.|walk.]</div>
          <div class="sent-en">There's a small park next to my home — I take my puppy for a walk there every day.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[园|yuán|garden]（[公园|gōngyuán|park]）</span></div>
        </div>
        <div class="write-item" id="L6-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[他|tā|he] [跑|pǎo|run] [得|de|(complement)] <span class="blank-input"><span class="input-py">tè</span><input type="text" data-ans="特"></span> [别|bié|especially] [快，|kuài,|fast,] [现在|xiànzài|now] [已经|yǐjīng|already] [看|kàn|see] [不|bù|not] [到|dào|find] [他|tā|him] [了。|le.|(change)]</div>
          <div class="sent-en">He runs especially fast — now he's already out of sight.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[特|tè|especially]（[特别|tèbié|especially]）</span></div>
        </div>

        <h4 id="L6-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L6-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[这|zhè|this] [条|tiáo|(MW)] [裙子|qúnzi|skirt] [一|yī|one] <span class="blank-input"><input type="text" data-ans="百"></span> [块钱。|kuài qián.|yuan.]</div>
          <div class="zh" style="margin-top:6px;">[白|bái|white]　[百|bǎi|hundred]</div>
          <div class="sent-en">This skirt costs 100 yuan.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[百|bǎi|hundred]</div>
        </div>
        <div class="write-item" id="L6-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[今天|jīntiān|today] [的|de|(possessive)] [音|yīn|sound] <span class="blank-input"><input type="text" data-ans="乐"></span> [会|huì|meeting] [很|hěn|very] [有|yǒu|have] <span class="blank-input"><input type="text" data-ans="意"></span> [思。|si.|meaning.]</div>
          <div class="zh" style="margin-top:6px;">[意|yì|meaning]　[音|yīn|sound]</div>
          <div class="sent-en">Today's concert is very interesting.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[乐|lè|(as in 快乐 “happy”)]、[意|yì|(as in 意思 “meaning”)]</div>
        </div>
        <div class="write-item" id="L6-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[对不起，|duìbuqǐ,|Sorry,] [我|wǒ|I] [刚才|gāngcái|just now] [没|méi|not] [听|tīng|hear] <span class="blank-input"><input type="text" data-ans="清"></span> [楚，|chu,|clearly,] <span class="blank-input"><input type="text" data-ans="请"></span> [您|nín|you] [再|zài|again] [讲|jiǎng|say] [一次，|yí cì,|once,] [可以|kěyǐ|may] [吗？|ma?|(question)]</div>
          <div class="zh" style="margin-top:6px;">[清|qīng|clear]　[请|qǐng|please]</div>
          <div class="sent-en">Sorry, I didn't hear clearly — could you say it again?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[清|qīng|(as in 清楚 “clear”)]、[请|qǐng|(as in 请客 “treat”)]</div>
        </div>
        <div class="write-item" id="L6-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[学校|xuéxiào|school] [旁边|pángbiān|next to] [饭馆|fànguǎn|restaurant] [的|de|(possessive)] [菜|cài|dish] [比|bǐ|than] [学校里|xuéxiào li|in the school] [的|de|(possessive)] <span class="blank-input"><input type="text" data-ans="便"></span> [宜，|yi,|cheap,] [也|yě|also] <span class="blank-input"><input type="text" data-ans="更"></span> [好吃。|hǎochī.|tasty.]</div>
          <div class="zh" style="margin-top:6px;">[更|gèng|more]　[便|biàn|cheap]</div>
          <div class="sent-en">The dishes at the restaurant next to the school are cheaper and tastier than those inside the school.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[便|biàn|(as in 方便 “convenient”)]、[更|gèng|(as in 更好 “better”)]</div>
        </div>
        <div class="write-item" id="L6-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[明天|míngtiān|tomorrow] [你|nǐ|you] [跟我|gēn wǒ|with me] [一起|yìqǐ|together] [去|qù|go to] [公园|gōngyuán|park] [锻|duàn|exercise] <span class="blank-input"><input type="text" data-ans="炼"></span>，[再去|zài qù|then go to] [商店|shāngdiàn|shop] [买|mǎi|buy] <span class="blank-input"><input type="text" data-ans="东"></span> [西，|xi,|things,] [好|hǎo|good] [吗？|ma?|(question)]</div>
          <div class="zh" style="margin-top:6px;">[东|dōng|east]　[炼|liàn|exercise]</div>
          <div class="sent-en">Will you go with me to exercise in the park tomorrow, then to the shop to buy things?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[炼|liàn|(as in 锻炼 “exercise”)]、[东|dōng|(as in 东西 “thing”)]</div>
        </div>

        <h4 id="L6-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L6-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[白|bái|white] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[白色|báisè|white]、[明白|míngbai|understand]</div></div>
        </div>
        <div class="write-item" id="L6-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[讲|jiǎng|speak] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[讲话|jiǎnghuà|speech]、[讲课|jiǎngkè|teach]</div></div>
        </div>
        <div class="write-item" id="L6-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[聊|liáo|chat] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[聊天儿|liáotiānr|chat]、[闲聊|xiánliáo|chat casually]</div></div>
        </div>
        <div class="write-item" id="L6-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[园|yuán|garden] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[公园|gōngyuán|park]、[花园|huāyuán|flower garden]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L6-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [周明|Zhōu Míng|Zhou Ming]
            <span class="blank-input review-blank"><span class="input-py">tūrán</span><input type="text" data-ans="突然"></span>
            [找|zhǎo|look for] [不|bù|not] [到|dào|find] [眼镜|yǎnjìng|glasses] [了，|le,|,] [周太太|Zhōu tàitai|Mrs. Zhou] [也|yě|also] [没|méi|not] [看见|kànjiàn|saw] [在|zài|at] [哪儿。|nǎr.|where.] [周明|Zhōu Míng|Zhou Ming]
            <span class="blank-input review-blank"><span class="input-py">lí bu kāi</span><input type="text" data-ans="离不开"></span>
            [眼镜，|yǎnjìng,|glasses,] [没有|méiyǒu|without] [眼镜，|yǎnjìng,|glasses,] [他|tā|he] [一个|yí ge|one] [字|zì|character] [也|yě|also] [看|kàn|see] [不|bù|not]
            <span class="blank-input review-blank"><span class="input-py">qīngchu</span><input type="text" data-ans="清楚"></span>。[周太太|Zhōu tàitai|Mrs. Zhou] [觉得|juéde|feel] [他|tā|he]
            <span class="blank-input review-blank"><span class="input-py">gāngcái</span><input type="text" data-ans="刚才"></span>
            [放|fàng|put] [在|zài|at] [桌子|zhuōzi|table] [上|shàng|on] [了，|le,|,] [但是|dànshì|but] [周明|Zhōu Míng|Zhou Ming] [怎么|zěnme|how] [看|kàn|see] [也|yě|also] [看|kàn|see] [不|bù|not] [到|dào|find] [呢？|ne?|(question)] [他|tā|he] [请|qǐng|asks] [周太太|Zhōu tàitai|Mrs. Zhou] [过来|guòlái|come over]
            <span class="blank-input review-blank"><span class="input-py">bāngmáng</span><input type="text" data-ans="帮忙"></span>
            [找找。|zhǎo zhao.|look for.]
          </div>
          <div class="sent-en">Zhou Ming suddenly couldn't find his glasses and Mrs. Zhou didn't see where they were either. Zhou Ming can't go without his glasses — without them he can't see a single character clearly. Mrs. Zhou thought he'd just put them on the table, but why can't Zhou Ming see them? He asks Mrs. Zhou to come help him look.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[突然|tūrán|suddenly]、[离不开|lí bu kāi|cannot go without]、[清楚|qīngchu|clearly]、[刚才|gāngcái|just now]、[帮忙|bāngmáng|help]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小刚|Xiǎogāng|Xiaogang] [有点儿|yǒudiǎnr|a bit] [不|bù|not] [高兴：|gāoxìng:|happy:] [他|tā|he] [想|xiǎng|wants to] [请|qǐng|invite] [小丽|Xiǎolì|Xiaoli] [吃饭，|chīfàn,|eat,] [但是|dànshì|but]
            <span class="blank-input review-blank"><span class="input-py">zhǎo bu dào</span><input type="text" data-ans="找不到"></span>
            [好|hǎo|good] [饭馆。|fànguǎn.|restaurant.] [他想|tā xiǎng|He wants to] [请|qǐng|invite] [小丽|Xiǎolì|Xiaoli] [听|tīng|listen]
            <span class="blank-input review-blank"><span class="input-py">yīnyuèhuì</span><input type="text" data-ans="音乐会"></span>，[但是|dànshì|but] [人|rén|people] [太多，|tài duō,|too many,]
            <span class="blank-input review-blank"><span class="input-py">mǎi bu dào</span><input type="text" data-ans="买不到"></span>
            [票。|piào.|tickets.] [跟|gēn|with] [小丽|Xiǎolì|Xiaoli] [去|qù|go to]
            <span class="blank-input review-blank"><span class="input-py">gōngyuán</span><input type="text" data-ans="公园"></span>
            [走走，|zǒu zou,|walk around,] [怎么样？|zěnmeyàng?|how about?] [也|yě|also] [不行，|bùxíng,|No,] [小刚|Xiǎogāng|Xiaogang] [觉得|juéde|feel] [太累|tài lèi|too tired] [了。|le.|(change)]
          </div>
          <div class="sent-en">Xiaogang is a bit unhappy: he wants to invite Xiaoli for a meal, but can't find a good restaurant. He wants to invite her to a concert, but it's too crowded and he can't get tickets. Go for a walk in the park? No — Xiaogang feels too tired.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[找不到|zhǎo bu dào|cannot find]、[音乐会|yīnyuèhuì|concert]、[买不到|mǎi bu dào|cannot buy]、[公园|gōngyuán|park]</div>
          </div>
        </div>
      </div>
    </div>
  `
};

/* ============================================================
   HSK3 练习册 · 第 7 课（完整）
   ============================================================ */
window.LESSONS[7] = {
  navLabel:'第7课',
  html: `
    <div class="lesson">
      <h2>第 7 课　我跟她都认识五年了
        <span class="title-py">Dì qī kè · Wǒ gēn tā dōu rènshi wǔ nián le</span>
        <small>Lesson 7 · I've known her for five years</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L7-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图07.png" alt="听力图07" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图07.png</b></span>
        </div>

        <div class="q" id="L7-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [看看，|kàn kan,|look,] [只有|zhǐyǒu|only] [半个小时|bàn ge xiǎoshí|half an hour] [了，|le,|,] [快要|kuàiyào|about to] [迟到|chídào|be late] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [别|bié|don't] [着急，|zháojí,|worry,] [走路|zǒulù|walking] [十五分钟|shíwǔ fēnzhōng|15 minutes] [就|jiù|then] [到|dào|arrive] [了。|le.|(change)]</div>
          <div class="sent-en">M: Look, only half an hour left — we're about to be late.<br>W: Don't worry, it's only a 15-minute walk.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[一个|yí ge|a] [男人|nánrén|man] [在|zài|is] [看|kàn|looking at] [手表|shǒubiǎo|a watch]）</div>
        </div>
        <div class="q" id="L7-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [都|dōu|already] [睡|shuì|slept] [了|le|(past)] [十几个|shí jǐ ge|more than ten] [钟头|zhōngtóu|hours] [了，|le,|,] [快要|kuàiyào|about to] [迟到|chídào|be late] [了！|le!|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [想|xiǎng|want to] [多|duō|more] [睡|shuì|sleep] [会儿，|huìr,|a while,] [太|tài|too] [累|lèi|tired] [了。|le.|(change)]</div>
          <div class="sent-en">W: You've slept for more than ten hours — you're about to be late!<br>M: I want to sleep more, I'm too tired.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[一个|yí ge|a] [男人|nánrén|man] [趴|pā|lying] [在|zài|on] [床|chuáng|the bed] [上|shàng|(location)] [睡觉|shuìjiào|sleeping]）</div>
        </div>
        <div class="q" id="L7-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[女1：|Nǚ1:|W1:] [你|nǐ|you] [慢点儿|màn diǎnr|slower] [走。|zǒu.|walk.]</div>
          <div class="zh stem">[女2：|Nǚ2:|W2:] [刚|gāng|just] [爬|pá|climbed] [了|le|(past)] [几分钟|jǐ fēnzhōng|a few minutes,] [你|nǐ|you] [就|jiù|already] [累|lèi|tired] [了？|le?|(change)]</div>
          <div class="sent-en">W1: Walk slower.<br>W2: We just climbed for a few minutes — you're tired already?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[两个|liǎng ge|two] [人|rén|people] [在|zài|are] [爬山|pá shān|climbing a mountain]）</div>
        </div>
        <div class="q" id="L7-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [都|dōu|already] [看|kàn|read] [了|le|(past)] [二十分钟|èrshí fēnzhōng|20 minutes] [报纸|bàozhǐ|newspaper] [了，|le,|,] [车|chē|bus] [怎么|zěnme|why] [还|hái|still] [不|bù|not] [来？|lái?|come?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [再|zài|again] [等等，|děng deng,|wait,] [快|kuài|soon] [来|lái|come] [了。|le.|(change)]</div>
          <div class="sent-en">M: I've been reading the newspaper for 20 minutes — why hasn't the bus come?<br>W: Wait a bit more, it's coming soon.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[一个|yí ge|a] [男人|nánrén|man] [站|zhàn|standing] [在|zài|at] [车站|chēzhàn|the station] [看|kàn|reading] [报纸|bàozhǐ|a newspaper]）</div>
        </div>
        <div class="q" id="L7-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[男1：|Nán1:|M1:] [欢迎|huānyíng|welcome] [你|nǐ|you] [来|lái|come to] [我们|wǒmen|our] [银行。|yínháng.|bank.]</div>
          <div class="zh stem">[男2：|Nán2:|M2:] [经理|jīnglǐ|manager] [您好，|nín hǎo,|hello,] [我|wǒ|I] [一定|yídìng|definitely] [好好儿|hǎohāor|well] [工作。|gōngzuò.|work.]</div>
          <div class="sent-en">M1: Welcome to our bank.<br>M2: Hello, Manager — I'll definitely work hard.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[两个|liǎng ge|two] [男人|nánrén|men] [握手|wòshǒu|shaking hands]）</div>
        </div>

        <h4 id="L7-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L7-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[我|wǒ|I] [是|shì|was] [2010 年|èr líng yī líng nián|in 2010] [开始|kāishǐ|started] [工作|gōngzuò|working] [的，|de,|,] [在|zài|at] [银行|yínháng|bank] [工作|gōngzuò|worked] [了|le|(past)] [两年|liǎng nián|two years] [以后，|yǐhòu,|later,] [来到|lái dào|come to] [了|le|(past)] [这家|zhè jiā|this] [公司。|gōngsī.|company.]</div>
          <div class="sent-en">I started working in 2010. After working at a bank for two years, I came to this company.</div>
          <div class="zh stem">★ [他|tā|he] [现在|xiànzài|now] [在|zài|at] [银行|yínháng|bank] [上班。|shàngbān.|work.]</div>
          <div class="sent-en">★ He works at a bank now.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[他|tā|He] [已经|yǐjīng|already] [在|zài|(in)] [两年|liǎng nián|two years] [前|qián|ago] [离开|líkāi|left] [银行，|yínháng,|the bank,] [来到|lái dào|came to] [这家|zhè jiā|this] [公司。|gōngsī|company.]" data-expl-en="He left the bank two years ago and came to this company."></div>
        </div>
        <div class="q" id="L7-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[飞机|fēijī|plane] [可能|kěnéng|maybe] [晚到|wǎn dào|late] [十分钟，|shí fēnzhōng,|10 minutes,] [您|nín|you] [再|zài|again] [等|děng|wait] [一会儿|yíhuìr|a while] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">The plane might be 10 minutes late — please wait a bit longer.</div>
          <div class="zh stem">★ [他们|tāmen|they] [还|hái|still] [要|yào|need to] [等。|děng.|wait.]</div>
          <div class="sent-en">★ They still need to wait.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[您|nín|Please] [再|zài|wait] [等|děng|(wait)] [一会儿|yíhuìr|a bit] [吧|ba|(suggestion)]」= [还|hái|still] [要|yào|need to] [等。|děng|wait.]" data-expl-en="'Please wait a bit' = still need to wait."></div>
        </div>
        <div class="q" id="L7-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[我|wǒ|I] [对|duì|to] [爬山|pá shān|mountain climbing] [不|bù|not] [感兴趣，|gǎn xìngqù,|interested,] [爬山|pá shān|mountain climbing] [太|tài|too] [累|lèi|tired] [了。|le.|(change)]</div>
          <div class="sent-en">I'm not interested in mountain climbing — it's too tiring.</div>
          <div class="zh stem">★ [他|tā|he] [喜欢|xǐhuan|like] [跟|gēn|with] [朋友|péngyou|friends] [一起|yìqǐ|together] [去|qù|go] [爬山。|pá shān.|mountain climbing.]</div>
          <div class="sent-en">★ He likes climbing mountains with friends.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [说|shuō|says]「[对|duì|(in)] [爬山|pá shān|climbing] [不|bù|not] [感兴趣|gǎn xìngqù|interested]」，[所以|suǒyǐ|so] [不|bù|doesn’t] [喜欢。|xǐhuan|like.]" data-expl-en="The text says 'not interested in climbing' — so he doesn't like it."></div>
        </div>
        <div class="q" id="L7-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[小刚|Xiǎogāng|Xiaogang] [在|zài|at] [门口|ménkǒu|doorway] [站|zhàn|stood] [了|le|(past)] [一个小时，|yí ge xiǎoshí,|an hour,] [小方|Xiǎofāng|Xiaofang] [也|yě|also] [没|méi|not] [出来。|chūlái.|come out.]</div>
          <div class="sent-en">Xiaogang stood at the door for an hour and Xiaofang still didn't come out.</div>
          <div class="zh stem">★ [小刚|Xiǎogāng|Xiaogang] [在|zài|is] [等|děng|waiting for] [人。|rén.|someone.]</div>
          <div class="sent-en">★ Xiaogang is waiting for someone.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[站|zhàn|Standing] [在|zài|at] [门口|ménkǒu|the doorway] [一个|yí ge|one] [小时|xiǎoshí|hour] [不|bù|without] [走|zǒu|leaving] = [在|zài|is] [等|děng|waiting for] [人。|rén|someone.]" data-expl-en="Standing at the doorway for an hour = waiting for someone."></div>
        </div>
        <div class="q" id="L7-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[她|tā|she] [已经|yǐjīng|already] [80 多岁|bāshí duō suì|over 80 years old] [了，|le,|,] [可是|kěshì|but] [身体|shēntǐ|health] [好，|hǎo,|good,] [爱|ài|loves] [运动，|yùndòng,|exercise,] [还|hái|also] [喜欢|xǐhuan|likes] [听|tīng|listen to] [年轻人|niánqīng rén|young people] [唱|chàng|sing] [的|de|(possessive)] [歌。|gē.|songs.]</div>
          <div class="sent-en">She's already over 80, but she's healthy, loves exercise, and likes listening to songs young people sing.</div>
          <div class="zh stem">★ [她|tā|she] [对|duì|to] [音乐|yīnyuè|music] [不|bù|not] [感兴趣。|gǎn xìngqù.|interested.]</div>
          <div class="sent-en">★ She isn't interested in music.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[她|tā|She]「[喜欢|xǐhuan|likes] [听|tīng|listening to] [年轻人|niánqīng rén|young people] [唱|chàng|sing] [的|de|(possessive)] [歌|gē|songs]」，[说明|shuōmíng|showing] [她|tā|she] [对|duì|is] [音乐|yīnyuè|music] [感兴趣。|gǎn xìngqù|interested.]" data-expl-en="She 'likes listening to songs' — so she IS interested in music."></div>
        </div>

        <h4 id="L7-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L7-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[男：|Nán:|M:] [雨|yǔ|rain] [下|xià|falls] [得|de|(complement)] [这么|zhème|so] [大，|dà,|heavy,] [你|nǐ|your] [家|jiā|home] [离|lí|from] [这儿|zhèr|here] [太|tài|too] [远|yuǎn|far] [了，|le,|,] [怎么办|zěnme bàn|what to do] [啊？|a?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [没关系，|méi guānxi,|It's OK,] [我|wǒ|I] [坐|zuò|take] [出租车|chūzūchē|taxi] [半个小时|bàn ge xiǎoshí|half an hour] [就|jiù|then] [回去|huíqù|go back] [了。|le.|(change)]</div>
          <div class="sent-en">M: It's raining so hard and your home is so far — what will you do?<br>W: It's OK — I'll take a taxi and be home in half an hour.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [准备|zhǔnbèi|plans] [怎么|zěnme|how] [回去？|huíqù?|to get back?]</div>
          <div class="sent-en">Q: How does the woman plan to get back?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[打车|dǎ chē|take a taxi]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[坐公共汽车|zuò gōnggòng qìchē|take a bus]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[走路|zǒulù|walk]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[坐|zuò|Take] [出租车|chūzūchē|a taxi]」。</div>
        </div>
        <div class="q" id="L7-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [哪儿|nǎr|where] [不|bù|not] [舒服？|shūfu?|well?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [白医生，|Bái yīshēng,|Dr. Bai,] [我|wǒ|I] [头疼|tóuténg|headache] [了|le|(past)] [一个星期|yí ge xīngqī|a week] [了，|le,|,] [都|dōu|even] [没|méi|not] [去|qù|go] [上课。|shàngkè.|to class.] [怎么办|zěnme bàn|what to do] [啊？|a?|(question)]</div>
          <div class="sent-en">M: What's wrong?<br>W: Dr. Bai, I've had a headache for a week and haven't been to class. What should I do?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [怎么|zěnme|what’s wrong] [了？|le?|?]</div>
          <div class="sent-en">Q: What's wrong with the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[她病了|tā bìng le|she's sick]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[她迟到了|tā chídào le|she's late]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[她没去工作|tā méi qù gōngzuò|she didn't go to work]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[头疼|tóuténg|Had a headache] [了|le|(past)] [一个|yí ge|one] [星期|xīngqī|week]」= [病|bìng|is] [了。|le|sick.]</div>
        </div>
        <div class="q" id="L7-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [周末|zhōumò|weekend] [喜欢|xǐhuan|like] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [不|bù|not] [爱|ài|like] [运动，|yùndòng,|exercise,] [周末|zhōumò|weekend] [就|jiù|just] [在|zài|at] [家|jiā|home] [看看|kàn kan|watch] [电视。|diànshì.|TV.]</div>
          <div class="sent-en">M: What do you like to do on weekends?<br>W: I don't like exercise — I just stay home watching TV on weekends.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [对|duì|is not interested in] [什么|shénme|what] [没有|méiyǒu|(not)] [兴趣？|xìngqù?|interested?]</div>
          <div class="sent-en">Q: What is the woman not interested in?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[看电视|kàn diànshì|watching TV]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[运动|yùndòng|exercise]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[周末|zhōumò|weekend]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|I] [不|bù|don’t] [爱|ài|like] [运动|yùndòng|sports]」。</div>
        </div>
        <div class="q" id="L7-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[男：|Nán:|M:] [今天|jīntiān|today] [的|de|(possessive)] [工作|gōngzuò|work] [我|wǒ|I] [还|hái|still] [没|méi|not] [做完，|zuò wán,|finished,] [你|nǐ|you] [来|lái|come] [帮帮|bāng bang|help] [我|wǒ|me] [好|hǎo|good] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [行|xíng|OK] [啊，|a,|,] [不过|búguò|but] [到时候|dào shíhou|when the time comes] [你|nǐ|you] [要|yào|must] [请|qǐng|invite] [我|wǒ|me] [吃饭。|chīfàn.|eat.]</div>
          <div class="sent-en">M: I haven't finished today's work — can you come help me?<br>W: OK, but you have to treat me to a meal.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [和|hé|and] [女的|nǚde|the woman] [可能|kěnéng|might] [是|shì|have] [什么|shénme|what] [关系？|guānxi?|relationship?]</div>
          <div class="sent-en">Q: What might be the relationship between the man and the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[同学|tóngxué|classmates]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[同事|tóngshì|colleagues]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[师生|shīshēng|teacher & student]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[一起|yìqǐ|work] [工作、|gōngzuò,|together,] [帮完|bāng wán|helped out] [请吃饭|qǐng chīfàn|then treats a meal] = [同事。|tóngshì|colleagues.]</div>
        </div>
        <div class="q" id="L7-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这|zhè|this] [是|shì|is] [什么|shénme|what] [电影|diànyǐng|movie] [啊？|a?|(question)] [我|wǒ|I] [看|kàn|watched] [了|le|(past)] [半天|bàntiān|quite a while] [也|yě|also] [没|méi|not] [看懂。|kàn dǒng.|understand.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [很多|hěnduō|many] [人|rén|people] [都|dōu|all] [是|shì|are] [这样，|zhèyàng,|like this,] [你|nǐ|you] [再|zài|again] [看|kàn|watch] [一会儿|yíhuìr|a while] [就|jiù|then] [明白|míngbai|understand] [了。|le.|(change)]</div>
          <div class="sent-en">M: What movie is this? I've watched for a while and still don't understand.<br>W: Many people feel that way — watch a bit more and you'll get it.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [看|kàn|has watched] [了|le|(past)] [多长|duō cháng|how] [时间|shíjiān|long] [电影|diànyǐng|the movie] [了？|le?|?]</div>
          <div class="sent-en">Q: How long has the man been watching the movie?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[一会儿|yíhuìr|a little while]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[十二个小时|shí'èr ge xiǎoshí|12 hours]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[很久|hěn jiǔ|quite a while]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[看|kàn|watched] [了|le|(past)] [半天|bàntiān|half a day]」= [很久。|hěn jiǔ|a long time.]</div>
        </div>

        <h4 id="L7-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L7-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [下个月|xià ge yuè|next month] [结婚，|jiéhūn,|get married,] [到时候|dào shíhou|when the time comes] [欢迎|huānyíng|welcome] [你|nǐ|you] [来。|lái.|come.]</div>
          <div class="zh stem">[男：|Nán:|M:] [什么？|shénme?|What?] [结婚？|jiéhūn?|Married?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [突然|tūrán|suddenly] [吗？|ma?|(question)] [其实|qíshí|actually] [我|wǒ|I] [和|hé|and] [我|wǒ|my] [男朋友|nánpéngyou|boyfriend] [认识|rènshi|known] [已经|yǐjīng|already] [五年|wǔ nián|five years] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [就是|jiùshì|that is] [那天|nà tiān|that day] [来|lái|came] [公司|gōngsī|company] [接|jiē|pick up] [你|nǐ|you] [的|de|(possessive)] [那个？|nàge?|that one?]</div>
          <div class="sent-en">W: I'm getting married next month — you're welcome to come.<br>M: What? Married?<br>W: Too sudden? Actually, my boyfriend and I have known each other for five years.<br>M: That one who came to pick you up that day?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[欢迎男的来公司|huānyíng nánde lái gōngsī|welcomes the man to the company]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[要结婚了|yào jiéhūn le|going to get married]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[在迎接新同事|zài yíngjiē xīn tóngshì|welcoming a new colleague]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|I] [下个月|xià ge yuè|next month] [结婚|jiéhūn|am getting married]」。</div>
        </div>
        <div class="q" id="L7-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[男：|Nán:|M:] [喂，|wèi,|Hey,] [我|wǒ|I] [已经|yǐjīng|already] [等|děng|waited] [了|le|(past)] [半个小时|bàn ge xiǎoshí|half an hour] [了，|le,|,] [你|nǐ|you] [在|zài|at] [哪儿|nǎr|where] [呢？|ne?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [刚|gāng|just] [下|xià|got off] [飞机，|fēijī,|plane,] [我|wǒ|I] [穿着|chuān zhe|wearing] [红|hóng|red] [衣服，|yīfu,|clothes,] [你|nǐ|you] [呢？|ne?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [穿着|chuān zhe|wearing] [白|bái|white] [裤子，|kùzi,|trousers,] [你|nǐ|you] [看见|kànjiàn|see] [我|wǒ|me] [了|le|(past)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [看见了，|kànjiàn le,|I see you,] [看见了。|kànjiàn le.|I see you.]</div>
          <div class="sent-en">M: Hey, I've been waiting for half an hour — where are you?<br>W: I just got off the plane, I'm wearing red — where are you?<br>M: I'm wearing white trousers — can you see me?<br>W: I see you, I see you.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [现在|xiànzài|now] [在|zài|is] [做|zuò|doing] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What is the man doing now?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[等车|děng chē|waiting for the bus]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[接人|jiē rén|picking someone up]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[买东西|mǎi dōngxi|buying things]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[在|zài|At] [机场|jīchǎng|the airport] [等|děng|waiting for] [刚|gāng|someone who just] [下飞机|xià fēijī|got off the plane] = [接人。|jiē rén|picking someone up.]</div>
        </div>
        <div class="q" id="L7-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [为什么|wèishénme|why] [不|bù|not] [在|zài|at] [书店|shūdiàn|bookstore] [工作|gōngzuò|work] [了？|le?|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|that] [不是|bú shì|wasn't] [我|wǒ|I] [喜欢|xǐhuan|liked] [的。|de.|(nominalizer)] [我|wǒ|I] [在|zài|at] [那儿|nàr|there] [工作|gōngzuò|worked] [了|le|(past)] [半年|bàn nián|half a year] [以后，|yǐhòu,|later,] [就|jiù|then] [来|lái|came to] [了|le|(past)] [这家|zhè jiā|this] [银行。|yínháng.|bank.]</div>
          <div class="zh stem">[男：|Nán:|M:] [现在|xiànzài|now] [的|de|(possessive)] [工作|gōngzuò|work] [怎么样？|zěnmeyàng?|how about?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [很好，|hěn hǎo,|Very good,] [我|wǒ|I] [很|hěn|very] [喜欢。|xǐhuan.|like it.]</div>
          <div class="sent-en">M: Why don't you work at the bookstore anymore?<br>W: It wasn't what I liked. After working there for half a year, I came to this bank.<br>M: How's your current job?<br>W: Very good — I like it very much.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [现在|xiànzài|now] [在|zài|works] [哪儿|nǎr|where] [工作？|gōngzuò?|at?]</div>
          <div class="sent-en">Q: Where does the woman work now?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[银行|yínháng|bank]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[书店|shūdiàn|bookstore]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[学校|xuéxiào|school]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[来|lái|came to] [了|le|(past)] [这家|zhè jiā|this] [银行|yínháng|bank]」。</div>
        </div>
        <div class="q" id="L7-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|my] [两岁|liǎng suì|two-year-old] [大|dà|old] [的|de|(possessive)] [儿子|érzi|son] [对|duì|to] [音乐|yīnyuè|music] [感兴趣。|gǎn xìngqù.|is interested.]</div>
          <div class="zh stem">[男：|Nán:|M:] [是|shì|yes] [吗？|ma?|(question)] [你|nǐ|you] [是|shì|how] [怎么|zěnme|did] [知道|zhīdào|know] [的？|de?|(nominalizer)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [电视|diànshì|TV] [上|shàng|on] [有|yǒu|there are] [人|rén|people] [唱歌，|chànggē,|singing,] [他|tā|he] [也|yě|also] [一起|yìqǐ|together] [唱。|chàng.|sings.] [有时候|yǒu shíhou|sometimes] [大家|dàjiā|everyone] [在|zài|(progressive)] [吃饭，|chīfàn,|eating,] [他|tā|he] [也|yě|also] [唱。|chàng.|sings.]</div>
          <div class="sent-en">W: My two-year-old son is interested in music.<br>M: Really? How do you know?<br>W: When someone sings on TV, he sings along. Sometimes when we're eating, he also sings.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [的|de|(possessive)] [儿子|érzi|son] [喜欢|xǐhuan|likes] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the woman's son like?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[唱歌|chànggē|singing]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[吃饭|chīfàn|eating]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[看电视|kàn diànshì|watching TV]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[对|duì|(in)] [音乐|yīnyuè|music] [感兴趣|gǎn xìngqù|interested]」+ [经常|jīngcháng|often] [唱|chàng|sings] → [喜欢|xǐhuan|likes] [唱歌。|chànggē|singing.]</div>
        </div>
        <div class="q" id="L7-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [祝你|zhù nǐ|wish you] [生日|shēngrì|birthday] [快乐，|kuàilè,|happy,] [这个|zhège|this] [送给|sòng gěi|give to] [你。|nǐ.|you.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [什么|shénme|What] [啊？|a?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [打开|dǎkāi|open] [看看。|kàn kan.|take a look.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [音乐会|yīnyuèhuì|Concert] [的|de|(possessive)] [票！|piào!|tickets!] [我|wǒ|I] [太|tài|too] [喜欢|xǐhuan|like] [了，|le,|,] [谢谢|xièxie|thank] [你。|nǐ.|you.]</div>
          <div class="sent-en">M: Happy birthday — this is for you.<br>W: What is it?<br>M: Open and see.<br>W: Concert tickets! I love it, thank you.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [对|duì|is interested in] [什么|shénme|what] [感兴趣？|gǎn xìngqù?|(interested)?]</div>
          <div class="sent-en">Q: What is the woman interested in?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[电影|diànyǐng|movies]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[运动|yùndòng|sports]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[音乐|yīnyuè|music]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[收到|shōudào|Was happy to receive] [音乐会|yīnyuèhuì|concert] [票|piào|tickets] [很|hěn|very] [高兴|gāoxìng|happy] → [对|duì|(in)] [音乐|yīnyuè|music] [感兴趣。|gǎn xìngqù|interested.]</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L7-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L7-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[不行，|bùxíng,|No,] [要|yào|will] [迟到|chídào|be late] [了，|le,|,] [我|wǒ|I] [要|yào|need to] [走|zǒu|go] [了。|le.|(change)]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[我|wǒ|I] [是|shì|am] [新来的，|xīn lái de,|newly arrived,] [刚|gāng|just] [工作|gōngzuò|worked] [三个月。|sān ge yuè.|three months.]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[刚|gāng|just] [十几分钟，|shí jǐ fēnzhōng,|ten-plus minutes,] [还|hái|still] [有|yǒu|have] [很|hěn|very] [远|yuǎn|far] [呢。|ne.|(emphasis)]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[我|wǒ|I] [看看，|kàn kan,|Let me see,] [慢了|màn le|slow] [半个小时。|bàn ge xiǎoshí.|half an hour.]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[不太累，|bú tài lèi,|Not too tired,] [每个月的|měi ge yuè de|every month's] [钱|qián|money] [也|yě|also] [不少。|bù shǎo.|quite a lot.]</span></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L7-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[你|nǐ|you] [在|zài|at] [这家|zhè jiā|this] [公司|gōngsī|company] [工作|gōngzuò|worked] [多久|duō jiǔ|how long] [了？|le?|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">How long have you worked at this company?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L7-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[别|bié|don't] [着急，|zháojí,|worry,] [再|zài|again] [游|yóu|swim] [一会儿|yíhuìr|a while] [吧。|ba.|(suggestion)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Don't worry — swim a bit longer.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L7-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[你|nǐ|you] [为什么|wèishénme|why] [选择|xuǎnzé|chose] [在|zài|at] [银行|yínháng|bank] [工作？|gōngzuò?|work?] （<span class="blank">　</span>）</div>
          <div class="sent-en">Why did you choose to work at a bank?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L7-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[你们|nǐmen|you] [爬|pá|climbed] [了|le|(past)] [多长时间|duō cháng shíjiān|how long] [山|shān|mountain] [了？|le?|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">How long have you been climbing?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L7-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[我|wǒ|my] [的|de|(possessive)] [手表|shǒubiǎo|watch] [怎么|zěnme|what's wrong] [了？|le?|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">What's wrong with my watch?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L7-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L7-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[以前|yǐqián|before]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[半|bàn|half]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[差|chà|lack]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[久|jiǔ|long time]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[同事|tóngshì|colleague]</span></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L7-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[小丽|Xiǎolì|Xiaoli] [是|shì|is] [我|wǒ|my] （<span class="blank">　</span>），[也|yě|also] [是|shì|is] [我|wǒ|my] [的|de|(possessive)] [好朋友，|hǎo péngyou,|good friend,] [我们|wǒmen|we] [已经|yǐjīng|already] [认识|rènshi|known] [二十年|èrshí nián|20 years] [了。|le.|(change)]</div>
          <div class="sent-en">Xiaoli is my colleague and good friend — we've known each other for 20 years.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L7-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[来|lái|came to] [这家|zhè jiā|this] [银行|yínháng|bank] （<span class="blank">　</span>），[我|wǒ|I] [在|zài|at] [两家|liǎng jiā|two] [公司|gōngsī|companies] [工作|gōngzuò|worked] [过。|guò.|before.]</div>
          <div class="sent-en">Before coming to this bank, I worked at two companies.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L7-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[我们|wǒmen|we] [每天|měitiān|every day] [早上|zǎoshang|morning] [八点|bā diǎn|8 o'clock] （<span class="blank">　</span>） [上课，|shàngkè,|class,] [上|shàng|have] [四个|sì ge|four] [小时。|xiǎoshí.|hours.]</div>
          <div class="sent-en">We start class at 8 every morning and have class for four hours.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L7-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [看一下|kàn yíxià|take a look at] [手表，|shǒubiǎo,|watch,] [现在|xiànzài|now] [几点了？|jǐ diǎn le?|what time?]</div>
          <div class="zh">[B：|B:|B:] （<span class="blank">　</span>） [一刻|yí kè|a quarter] [八点。|bā diǎn.|eight o'clock.]</div>
          <div class="sent-en">A: Check the watch, what time is it?<br>B: A quarter to eight.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L7-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [都|dōu|already] [九点|jiǔ diǎn|9 o'clock] [了，|le,|,] [你|nǐ|you] [怎么|zěnme|why] [回来|huílái|come back] [这么|zhème|so] [晚？|wǎn?|late?]</div>
          <div class="zh">[B：|B:|B:] [下班|xiàbān|After work] [以后|yǐhòu|later] [跟|gēn|with] [朋友|péngyou|friends] [在|zài|at] [咖啡店|kāfēidiàn|café] [聊天儿|liáotiānr|chat] [聊|liáo|chatted] [了|le|(past)] [很|hěn|very] （<span class="blank">　</span>），[天|tiān|sky] [黑|hēi|dark] [了|le|(change)] [都|dōu|even] [不|bù|not] [知道。|zhīdào.|knew.]</div>
          <div class="sent-en">A: It's already 9 — why are you back so late?<br>B: After work I chatted with friends at a café for a long time, didn't even notice it got dark.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L7-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L7-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[六个月|liù ge yuè|six-month] [大|dà|old] [的|de|(possessive)] [女儿|nǚ'ér|daughter] [对|duì|to] [音乐|yīnyuè|music] [很|hěn|very] [感兴趣。|gǎn xìngqù.|is interested.] [她|tā|she] [不|bù|not] [高兴|gāoxìng|happy] [的|de|(possessive)] [时候，|shíhou,|when,] [唱|chàng|sing] [歌|gē|songs] [给|gěi|to] [她|tā|her] [听|tīng|listen] [或者|huòzhě|or] [让|ràng|let] [她|tā|her] [听听|tīng ting|listen to] [音乐，|yīnyuè,|music,] [一会儿|yíhuìr|a while] [她|tā|she] [就|jiù|then] [笑|xiào|smile] [了。|le.|(change)]</div>
          <div class="sent-en">My six-month-old daughter is very interested in music. When she's unhappy, singing to her or letting her listen to music makes her smile in a moment.</div>
          <div class="zh ask">★ [她|tā|Her] [的|de|(possessive)] [女儿：|nǚ’ér:|daughter:]</div>
          <div class="sent-en">★ Her daughter: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[喜欢音乐|xǐhuan yīnyuè|likes music]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不喜欢听歌|bù xǐhuan tīng gē|doesn't like listening to songs]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[六岁了|liù suì le|six years old]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[对|duì|(in)] [音乐|yīnyuè|music] [很|hěn|very] [感兴趣|gǎn xìngqù|interested]」。</div>
        </div>
        <div class="q" id="L7-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[我|wǒ|I] [在|zài|in] [北京|Běijīng|Beijing] [住|zhù|lived] [过|guò|(past)] [十年，|shí nián,|10 years,] [吃|chī|ate] [了|le|(past)] [不少|bùshǎo|quite a lot] [北京菜，|Běijīng cài,|Beijing food,] [学|xué|learned] [了|le|(past)] [不少|bùshǎo|quite a lot] [中国|Zhōngguó|Chinese] [文化，|wénhuà,|culture,] [现在|xiànzài|now] [还|hái|still] [都|dōu|all] [记得。|jìde.|remember.]</div>
          <div class="sent-en">I lived in Beijing for 10 years, ate a lot of Beijing food and learned a lot about Chinese culture — I still remember it all.</div>
          <div class="zh ask">★ [我：|wǒ:|I:]</div>
          <div class="sent-en">★ I: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[现在住在北京|xiànzài zhù zài Běijīng|lives in Beijing now]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[现在不住在北京|xiànzài bú zhù zài Běijīng|doesn't live in Beijing now]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[是北京人|shì Běijīng rén|is a Beijinger]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[住|zhù|lived] [过|guò|(experience)] [十年|shí nián|ten years]」→ [现在|xiànzài|now] [不|bù|doesn’t] [住|zhù|live] [在|zài|in] [北京。|Běijīng|Beijing.]</div>
        </div>
        <div class="q" id="L7-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[我|wǒ|my] [妹妹|mèimei|sister] [不|bù|not] [喜欢|xǐhuan|like] [画画儿、|huà huàr,|drawing,] [唱歌，|chànggē,|singing,] [只|zhǐ|only] [对|duì|to] [踢足球|tī zúqiú|playing football] [感兴趣。|gǎn xìngqù.|is interested.] [她|tā|she] [会|huì|can] [踢足球，|tī zúqiú,|play football,] [也|yě|also] [爱|ài|loves] [看|kàn|watch] [足球比赛。|zúqiú bǐsài.|football matches.]</div>
          <div class="sent-en">My sister doesn't like drawing or singing — she's only interested in playing football. She can play and loves watching matches.</div>
          <div class="zh ask">★ [我|wǒ|My] [妹妹|mèimei|sister] [喜欢：|xǐhuan:|likes:]</div>
          <div class="sent-en">★ My sister likes: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[唱歌|chànggē|singing]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[踢足球|tī zúqiú|playing football]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[画画儿|huà huàr|drawing]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[只|zhǐ|only] [对|duì|(in)] [踢足球|tī zúqiú|football] [感兴趣|gǎn xìngqù|interested]」。</div>
        </div>
        <div class="q" id="L7-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[以前|yǐqián|Before,] [中国人|Zhōngguó rén|Chinese people] [结婚|jiéhūn|got married] [的|de|(possessive)] [时候，|shíhou,|when,] [男女|nán nǚ|man and woman] [都|dōu|even] [不|bù|not] [认识。|rènshi.|knew each other.] [丈夫|zhàngfu|husband] [会|huì|would] [在|zài|on] [结婚|jiéhūn|wedding] [迎接|yíngjiē|welcome] [妻子|qīzi|wife] [那天|nà tiān|that day] [第一次|dì yī cì|first time] [见到|jiàndào|see] [妻子，|qīzi,|wife,] [妻子|qīzi|wife] [也|yě|also] [第一次|dì yī cì|first time] [见到|jiàndào|see] [丈夫。|zhàngfu.|husband.]</div>
          <div class="sent-en">In the past, when Chinese people got married, the man and woman didn't even know each other. The husband would see his wife for the first time on the wedding day — she'd also see him for the first time.</div>
          <div class="zh ask">★ [以前|yǐqián|In the past] [中国人|Zhōngguó rén|Chinese people] [结婚，|jiéhūn,|married,] [丈夫：|zhàngfu:|the husband:]</div>
          <div class="sent-en">★ In the past, when Chinese people married, the husband: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[对妻子不感兴趣|duì qīzi bù gǎn xìngqù|not interested in wife]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[以前就认识妻子|yǐqián jiù rènshi qīzi|knew wife before]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[结婚那天第一次见到妻子|jiéhūn nà tiān dì yī cì jiàndào qīzi|first saw wife on wedding day]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[结婚|jiéhūn|On the wedding] [那天|nà tiān|day] [第一次|dì yī cì|for the first time] [见到|jiàndào|met] [妻子|qīzi|his wife]」。</div>
        </div>
        <div class="q" id="L7-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[很多|hěnduō|many] [年轻人|niánqīng rén|young people] [说|shuō|say] [不|bù|not] [知道|zhīdào|know] [怎么|zěnme|how] [找工作，|zhǎo gōngzuò,|find a job,] [总|zǒng|always] [觉得|juéde|feel] [自己|zìjǐ|own] [的|de|(possessive)] [工作|gōngzuò|job] [不|bù|not] [好。|hǎo.|good.] [有的|yǒude|some] [人|rén|people] [都|dōu|even] [工作|gōngzuò|worked] [了|le|(past)] [好几年|hǎo jǐ nián|several years] [了，|le,|,] [钱|qián|money] [也|yě|also] [不|bù|not] [少，|shǎo,|little,] [但|dàn|but] [还|hái|still] [不|bù|not] [知道|zhīdào|know] [喜欢|xǐhuan|like] [做|zuò|do] [什么。|shénme.|what.] [我|wǒ|I] [觉得|juéde|feel] [找工作|zhǎo gōngzuò|finding a job] [的|de|(possessive)] [时候|shíhou|time] [要|yào|should] [看|kàn|consider] [兴趣|xìngqù|interest] [第|dì|first] [一，|yī,|,] [怎么|zěnme|how] [能|néng|can] [把|bǎ|(BA)] [钱|qián|money] [放|fàng|put] [在|zài|at] [第一|dì yī|first place] [呢？|ne?|(question)]</div>
          <div class="sent-en">Many young people say they don't know how to find a job and always feel their job isn't good. Some have worked several years and earn quite a lot but still don't know what they like to do. I think when job-hunting, interest should come first — how can money come first?</div>
          <div class="zh ask">★ [我|wǒ|I] [觉得|juéde|think] [找|zhǎo|when looking for] [工作|gōngzuò|a job] [的|de|(possessive)] [时候|shíhou|time] [要|yào|should] [看：|kàn:|look at:]</div>
          <div class="sent-en">★ I think when looking for a job, one should look at: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[公司给多少钱|gōngsī gěi duōshao qián|how much the company pays]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[喜欢不喜欢|xǐhuan bù xǐhuan|whether you like it]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[工作时间是多少|gōngzuò shíjiān shì duōshao|how many work hours]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[兴趣|xìngqù|Interest] [第一|dì yī|comes first]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L7-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L7-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[唱歌|chànggē|sing] [两个小时|liǎng ge xiǎoshí|two hours] [我们|wǒmen|we] [了|le|(change)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我们|wǒmen|We] [唱|chàng|sang] [了|le|(past)] [两个小时|liǎng ge xiǎoshí|for two hours] [歌。|gē|songs.]<div class="sent-en">We sang for two hours.</div></div>
        </div>
        <div class="write-item" id="L7-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[什么|shénme|what] [感兴趣|gǎn xìngqù|interested] [对|duì|to] [你|nǐ|you]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|What are you] [对|duì|(in)] [什么|shénme|what] [感兴趣？|gǎn xìngqù|interested?]<div class="sent-en">What are you interested in?</div></div>
        </div>
        <div class="write-item" id="L7-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[以前|yǐqián|before] [银行|yínháng|bank] [在|zài|at] [我|wǒ|I] [工作|gōngzuò|worked] [两年|liǎng nián|two years] [了|le|(change)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[以前|yǐqián|Before,] [我|wǒ|I] [在|zài|worked at] [银行|yínháng|the bank] [工作|gōngzuò|(worked)] [了|le|(past)] [两年。|liǎng nián|two years.]<div class="sent-en">Before, I worked at a bank for two years.</div></div>
        </div>
        <div class="write-item" id="L7-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[电视|diànshì|TV] [看|kàn|watch] [了|le|(past)] [三个钟头|sān ge zhōngtóu|three hours] [弟弟|dìdi|younger brother] [了|le|(change)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[弟弟|dìdi|My brother] [看|kàn|has watched] [了|le|(past)] [三个|sān ge|three] [钟头|zhōngtóu|hours of] [电视|diànshì|TV] [了。|le|(change)]<div class="sent-en">My brother has been watching TV for three hours.</div></div>
        </div>
        <div class="write-item" id="L7-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[了|le|(change)] [听|tīng|listen] [十几分钟|shí jǐ fēnzhōng|ten-plus minutes] [音乐|yīnyuè|music] [昨天|zuótiān|yesterday] [我|wǒ|I]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[昨天|zuótiān|Yesterday] [我|wǒ|I] [听|tīng|listened to] [了|le|(past)] [十几分钟|shí jǐ fēnzhōng|about ten minutes of] [音乐。|yīnyuè|music.]<div class="sent-en">Yesterday I listened to music for over ten minutes.</div></div>
        </div>

        <h4 id="L7-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L7-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[我|wǒ|I] [对|duì|to] [音乐|yīnyuè|music] <span class="blank-input"><span class="input-py">gǎn</span><input type="text" data-ans="感"></span> [兴趣。|xìngqù.|interest.]</div>
          <div class="sent-en">I'm interested in music.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[感|gǎn|(as in 感兴趣 "interested")]</span></div>
        </div>
        <div class="write-item" id="L7-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[明天|míngtiān|tomorrow] [下午|xiàwǔ|afternoon] [你|nǐ|you] [去|qù|go to] <span class="blank-input"><span class="input-py">yín</span><input type="text" data-ans="银"></span> [行|háng|bank] [吗？|ma?|(question)] [我|wǒ|I] [跟|gēn|with] [你|nǐ|you] [一起|yìqǐ|together] [去|qù|go] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">Are you going to the bank tomorrow afternoon? Let me go with you.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[银|yín|silver]（[银行|yínháng|bank]）</span></div>
        </div>
        <div class="write-item" id="L7-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[你|nǐ|you] [是|shì|when] [什么|shénme|what] [时候|shíhou|time] <span class="blank-input"><span class="input-py">jié</span><input type="text" data-ans="结"></span> [婚|hūn|marriage] [的？|de?|(nominalizer)] [怎么|zěnme|why] [都|dōu|even] [没|méi|not] [告诉|gàosu|tell] [我们|wǒmen|us] [啊？|a?|(question)]</div>
          <div class="sent-en">When did you get married? Why didn't you even tell us?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[结|jié|(as in 结婚 "marry")]</span></div>
        </div>
        <div class="write-item" id="L7-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[您|nín|you] [慢走，|màn zǒu,|take care,] [欢|huān|welcome] <span class="blank-input"><span class="input-py">yíng</span><input type="text" data-ans="迎"></span> [下次|xià cì|next time] [再|zài|again] [来。|lái.|come.]</div>
          <div class="sent-en">Take care — welcome back next time.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[迎|yíng|welcome]（[欢迎|huānyíng|welcome]）</span></div>
        </div>
        <div class="write-item" id="L7-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[我|wǒ|I] [问|wèn|ask] [你，|nǐ,|you,] [你|nǐ|you] [多|duō|how] <span class="blank-input"><span class="input-py">jiǔ</span><input type="text" data-ans="久"></span> [没|méi|not] [去|qù|go to] [公司|gōngsī|company] [上班|shàngbān|work] [了？|le?|(change)]</div>
          <div class="sent-en">Let me ask you — how long has it been since you went to work at the company?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[久|jiǔ|long time]</span></div>
        </div>

        <h4 id="L7-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L7-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[小方，|Xiǎofāng,|Xiaofang,] [你|nǐ|your] [家|jiā|home] [离|lí|from] [学校|xuéxiào|school] [那么|nàme|so] <span class="blank-input"><input type="text" data-ans="近"></span>，[怎么|zěnme|why] [每天|měitiān|every day] [都|dōu|all] <span class="blank-input"><input type="text" data-ans="迟"></span> [到|dào|arrive] [啊？|a?|(question)]</div>
          <div class="zh" style="margin-top:6px;">[迟|chí|late]　[近|jìn|near]</div>
          <div class="sent-en">Xiaofang, your home is so close to school — why are you late every day?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[近|jìn|(as in 最近 “recently”)]、[迟|chí|(as in 迟到 “be late”)]</div>
        </div>
        <div class="write-item" id="L7-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[大家|dàjiā|everyone] [好，|hǎo,|hello,] [这|zhè|this] [是|shì|is] [新来的|xīn lái de|newly arrived] <span class="blank-input"><input type="text" data-ans="同"></span> [事，|shì,|colleague,] [他|tā|he] [今天|jīntiān|today] [早上|zǎoshang|morning] [刚|gāng|just] [来|lái|came to] [我们|wǒmen|our] [公|gōng|public] <span class="blank-input"><input type="text" data-ans="司"></span>。</div>
          <div class="zh" style="margin-top:6px;">[同|tóng|same]　[司|sī|(as in 公司 "company")]</div>
          <div class="sent-en">Hello everyone — this is a new colleague. He just came to our company this morning.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[同|tóng|(as in 同事 “colleague”)]、[司|sī|(as in 公司 “company”)]</div>
        </div>
        <div class="write-item" id="L7-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[我|wǒ|I] <span class="blank-input"><input type="text" data-ans="以"></span> [前|qián|before] [没|méi|not] [见|jiàn|seen] [过|guò|(past)] [这个|zhège|this] [人，|rén,|person,] [是|shì|was] [昨天|zuótiān|yesterday] [朋友|péngyou|friend] [给|gěi|to] [我|wǒ|me] [介绍|jièshào|introduced] [后|hòu|after] <span class="blank-input"><input type="text" data-ans="认"></span> [识|shi|know] [的。|de.|(nominalizer)]</div>
          <div class="zh" style="margin-top:6px;">[认|rèn|recognize]　[以|yǐ|(as in 以前 "before")]</div>
          <div class="sent-en">I hadn't seen this person before — I met him yesterday after a friend introduced us.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[以|yǐ|(as in 以前 “before”)]、[认|rèn|(as in 认识 “know”)]</div>
        </div>
        <div class="write-item" id="L7-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[明天|míngtiān|tomorrow] [我|wǒ|I] [去|qù|go] <span class="blank-input"><input type="text" data-ans="接"></span> [你，|nǐ,|you,] [下午|xiàwǔ|afternoon] [三点|sān diǎn|3 o'clock] [在|zài|at] [你家|nǐ jiā|your home] <span class="blank-input"><input type="text" data-ans="楼"></span> [下|xià|down] [等|děng|wait] [我。|wǒ.|me.]</div>
          <div class="zh" style="margin-top:6px;">[接|jiē|pick up]　[楼|lóu|floor/building]</div>
          <div class="sent-en">I'll come pick you up tomorrow — wait for me downstairs at your home at 3 pm.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[接|jiē|(as in 接人 “pick up”)]、[楼|lóu|(as in 上楼 “go upstairs”)]</div>
        </div>
        <div class="write-item" id="L7-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[现在|xiànzài|now] [是|shì|is] [三点|sān diǎn|3] [一|yī|one] <span class="blank-input"><input type="text" data-ans="刻"></span>，[十五分钟|shíwǔ fēnzhōng|15 minutes] [后|hòu|later] [请|qǐng|please] [大家|dàjiā|everyone] <span class="blank-input"><input type="text" data-ans="到"></span> [周经理|Zhōu jīnglǐ|Manager Zhou] [办公室|bàngōngshì|office] [去。|qù.|go.]</div>
          <div class="zh" style="margin-top:6px;">[到|dào|arrive]　[刻|kè|quarter]</div>
          <div class="sent-en">It's a quarter past three. Please all go to Manager Zhou's office in 15 minutes.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[刻|kè|(as in 时刻 “moment”)]、[到|dào|arrive]</div>
        </div>

        <h4 id="L7-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L7-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[感|gǎn|feel] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[感冒|gǎnmào|cold]、[感兴趣|gǎn xìngqù|interested]</div></div>
        </div>
        <div class="write-item" id="L7-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[银|yín|silver] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[银行|yínháng|bank]、[银色|yínsè|silver color]</div></div>
        </div>
        <div class="write-item" id="L7-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[结|jié|knot] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[结婚|jiéhūn|marry]、[结束|jiéshù|end]</div></div>
        </div>
        <div class="write-item" id="L7-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[迎|yíng|welcome] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[欢迎|huānyíng|welcome]、[迎接|yíngjiē|greet]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L7-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小刚|Xiǎogāng|Xiaogang] [和|hé|and] [小丽|Xiǎolì|Xiaoli]
            <span class="blank-input review-blank"><span class="input-py">rènshi</span><input type="text" data-ans="认识"></span>
            [五年|wǔ nián|five years] [了，|le,|,] [他们|tāmen|they] [下个月|xià ge yuè|next month]
            <span class="blank-input review-blank"><span class="input-py">jiéhūn</span><input type="text" data-ans="结婚"></span>，[大家|dàjiā|everyone] [都|dōu|all] [去。|qù.|go.] [一个|yí ge|one] [人|rén|person] [觉得|juéde|feels] [很|hěn|very]
            <span class="blank-input review-blank"><span class="input-py">tūrán</span><input type="text" data-ans="突然"></span>，[因为|yīnwèi|because] [他|tā|he] [也|yě|also] [对|duì|to] [小丽|Xiǎolì|Xiaoli]
            <span class="blank-input review-blank"><span class="input-py">gǎn xìngqù</span><input type="text" data-ans="感兴趣"></span>。
          </div>
          <div class="sent-en">Xiaogang and Xiaoli have known each other for five years — they're getting married next month. Everyone is going. One person feels it's sudden, because he's also interested in Xiaoli.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[认识|rènshi|know]、[结婚|jiéhūn|marry]、[突然|tūrán|sudden]、[感兴趣|gǎn xìngqù|interested]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小丽|Xiǎolì|Xiaoli] [让|ràng|wants] [小刚|Xiǎogāng|Xiaogang] [七点半|qī diǎn bàn|7:30] [去|qù|go]
            <span class="blank-input review-blank"><span class="input-py">jiē</span><input type="text" data-ans="接"></span>
            [她。|tā.|her.] [现在|xiànzài|now] [已经|yǐjīng|already]
            <span class="blank-input review-blank"><span class="input-py">chà</span><input type="text" data-ans="差"></span>
            [八点|bā diǎn|8 o'clock] [了，|le,|,] [小刚|Xiǎogāng|Xiaogang]
            <span class="blank-input review-blank"><span class="input-py">chídào</span><input type="text" data-ans="迟到"></span>
            [了，|le,|,] [小丽|Xiǎolì|Xiaoli] [特别|tèbié|especially] [不|bù|not] [高兴。|gāoxìng.|happy.] [其实，|qíshí,|Actually,] [不是|bú shì|isn't] [小刚|Xiǎogāng|Xiaogang] [来|lái|came] [晚|wǎn|late] [了，|le,|,] [是|shì|is] [小丽|Xiǎolì|Xiaoli] [的|de|(possessive)] [表|biǎo|watch]
            <span class="blank-input review-blank"><span class="input-py">kuài</span><input type="text" data-ans="快"></span>
            [十五分钟。|shíwǔ fēnzhōng.|15 minutes.]</div>
          <div class="sent-en">Xiaoli asked Xiaogang to pick her up at 7:30. Now it's already almost 8 o'clock — Xiaogang is late and Xiaoli is very unhappy. Actually, it's not that Xiaogang came late — it's that Xiaoli's watch is 15 minutes fast.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[接|jiē|pick up]、[差|chà|lack]、[迟到|chídào|late]、[快|kuài|fast (clock)]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[8] = {
  navLabel:'第8课',
  html: `
    <div class="lesson">
      <h2>第 8 课　你去哪儿我就去哪儿
        <span class="title-py">Dì bā kè · Nǐ qù nǎr wǒ jiù qù nǎr</span>
        <small>Lesson 8 · I'll go wherever you go</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L8-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图08.png" alt="听力图08" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图08.png</b></span>
        </div>

        <div class="q" id="L8-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [十五层|shíwǔ céng|15th floor] [太高了，|tài gāo le,|too high,] [我都|wǒ dōu|I even] [害怕|hàipà|afraid] [向下|xiàng xià|downward] [看|kàn|look] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [明白了。|míngbai le.|understand.] [那|nà|then] [我们|wǒmen|we] [看看|kàn kan|look at] [别的|biéde|other] [房子。|fángzi.|houses.]</div>
          <div class="sent-en">W: The 15th floor is too high — I'm afraid to look down.<br>M: I see. Then let's look at other houses.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[高楼|gāolóu|a tall building]）</div>
        </div>
        <div class="q" id="L8-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [是|shì|am] [第一次|dì yī cì|the first time] [来|lái|to come] [看|kàn|see] [大熊猫。|dàxióngmāo.|giant pandas.]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [也是，|yě shì,|me too,] [你|nǐ|you] [看|kàn|look] [这些|zhèxiē|these] [大熊猫|dàxióngmāo|giant pandas] [多|duō|how] [可爱|kě'ài|cute] [啊！|a!|!]</div>
          <div class="sent-en">W: This is my first time seeing giant pandas.<br>M: Me too — look how cute they are!</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[大熊猫|dàxióngmāo|a giant panda]）</div>
        </div>
        <div class="q" id="L8-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[男：|Nán:|M:] [都|dōu|already] [九点一刻|jiǔ diǎn yí kè|9:15] [了，|le,|,] [你|nǐ|you] [怎么|zěnme|why] [还|hái|still] [不|bù|not] [起床？|qǐchuáng?|get up?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [星期天|Xīngqītiān|Sunday] [又|yòu|again] [不|bù|not] [上班，|shàngbān,|work,] [你|nǐ|you] [也|yě|also] [不|bù|not] [让|ràng|let] [我|wǒ|me] [多|duō|more] [睡|shuì|sleep] [一会儿。|yíhuìr.|a while.]</div>
          <div class="sent-en">M: It's already 9:15 — why aren't you up?<br>W: It's Sunday, no work — let me sleep a bit longer.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[睡觉|shuìjiào|sleeping]）</div>
        </div>
        <div class="q" id="L8-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我们|wǒmen|we] [是不是|shì bú shì|are we] [走错|zǒu cuò|walked the wrong way] [了，|le,|,] [怎么|zěnme|why] [还|hái|still] [没|méi|not] [到？|dào?|arrive?]</div>
          <div class="zh stem">[男：|Nán:|M:] [别|bié|don't] [着急，|zháojí,|worry,] [就|jiù|just] [在|zài|at] [前面，|qiánmiàn,|ahead,] [马上|mǎshàng|right away] [就|jiù|then] [到|dào|arrive] [了。|le.|(change)]</div>
          <div class="sent-en">W: Did we take the wrong way? Why aren't we there yet?<br>M: Don't worry — it's just ahead, we're almost there.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[拿着|ná zhe|holding] [地图|dìtú|a map] [找路|zhǎo lù|looking for the way]）</div>
        </div>
        <div class="q" id="L8-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [眼镜|yǎnjìng|glasses] [怎么样？|zěnmeyàng?|how about?] [你|nǐ|you] [觉得|juéde|feel] [满意|mǎnyì|satisfied] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [还|hái|still] [不错，|búcuò,|not bad,] [你|nǐ|you] [看|kàn|look] [我|wǒ|my] [的|de|(possessive)] [变化|biànhuà|change] [很|hěn|very] [大。|dà.|big.]</div>
          <div class="sent-en">W: How about the glasses? Are you satisfied?<br>M: Not bad — look, what a big change.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[戴|dài|wearing] [眼镜|yǎnjìng|glasses] [的|de|(possessive)] [男人|nánrén|man]）</div>
        </div>

        <h4 id="L8-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L8-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[以前，|yǐqián,|Before,] [周经理|Zhōu jīnglǐ|Manager Zhou] [的|de|(possessive)] [办公室|bàngōngshì|office] [在|zài|at] [一层，|yī céng,|first floor,] [最近|zuìjìn|recently] [他|tā|he] [搬|bān|moved] [到|dào|to] [了|le|(past)] [六层，|liù céng,|6th floor,] [开始|kāishǐ|started] [坐|zuò|take] [电梯|diàntī|elevator] [了。|le.|(change)]</div>
          <div class="sent-en">Before, Manager Zhou's office was on the 1st floor. Recently he moved to the 6th floor and started taking the elevator.</div>
          <div class="zh stem">★ [周经理|Zhōu jīnglǐ|Manager Zhou] [换|huàn|changed] [办公室|bàngōngshì|office] [了。|le.|(change)]</div>
          <div class="sent-en">★ Manager Zhou changed offices.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[从|cóng|Moved from] [一层|yī céng|the 1st floor] [搬|bān|(moved)] [到|dào|to] [六层，|liù céng,|the 6th floor,] [当然|dāngrán|of course] [换|huàn|changed] [了|le|(past)] [办公室。|bàngōngshì|office.]" data-expl-en="Moved from 1st to 6th floor — office changed."></div>
        </div>
        <div class="q" id="L8-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[我|wǒ|I] [明天|míngtiān|tomorrow] [就|jiù|will] [回国|huí guó|go back home] [了，|le,|,] [以后|yǐhòu|in the future] [不能|bùnéng|cannot] [总|zǒng|always] [跟|gēn|with] [你|nǐ|you] [见面|jiànmiàn|meet] [了，|le,|,] [有事|yǒu shì|if anything] [请|qǐng|please] [给|gěi|to] [我|wǒ|me] [电话|diànhuà|call] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">I'm going back home tomorrow — we won't be able to meet often. Call me if anything comes up.</div>
          <div class="zh stem">★ [他们|tāmen|they] [以前|yǐqián|before] [总是|zǒngshì|always] [见面。|jiànmiàn.|meet.]</div>
          <div class="sent-en">★ They used to meet often.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[不能|bùnéng|Won’t be able to] [总|zǒng|often] [跟|gēn|with] [你|nǐ|you] [见面|jiànmiàn|meet] [了|le|(change)]」→ [以前|yǐqián|before] [总是|zǒngshì|always] [见面。|jiànmiàn|met.]" data-expl-en="'Won't be able to meet often' implies they used to."></div>
        </div>
        <div class="q" id="L8-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[我|wǒ|I] [喜欢|xǐhuan|like] [自学。|zìxué.|self-study.] [没事|méi shì|when free] [的|de|(possessive)] [时候，|shíhou,|time,] [找|zhǎo|find] [一个|yí ge|a] [安静|ānjìng|quiet] [的|de|(possessive)] [地方，|dìfang,|place,] [读|dú|read] [一本|yì běn|a] [好|hǎo|good] [书，|shū,|book,] [是|shì|is] [我|wǒ|my] [最大|zuì dà|greatest] [的|de|(possessive)] [快乐。|kuàilè.|happiness.]</div>
          <div class="sent-en">I like self-study. When I'm free, finding a quiet place and reading a good book is my greatest happiness.</div>
          <div class="zh stem">★ [他|tā|he] [喜欢|xǐhuan|likes] [安静|ānjìng|quiet] [的|de|(possessive)] [地方。|dìfang.|places.]</div>
          <div class="sent-en">★ He likes quiet places.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[找|zhǎo|Find] [一个|yí ge|a] [安静|ānjìng|quiet] [的|de|(possessive)] [地方|dìfang|place]」= [喜欢|xǐhuan|likes] [安静|ānjìng|quiet] [的|de|(possessive)] [地方。|dìfang|places.]" data-expl-en="'Find a quiet place' = likes quiet places."></div>
        </div>
        <div class="q" id="L8-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[不好意思，|bù hǎoyìsi,|Sorry,] [小姐，|xiǎojiě,|Miss,] [这个|zhège|this] [电梯|diàntī|elevator] [只|zhǐ|only] [到|dào|goes to] [十层，|shí céng,|10th floor,] [您|nín|you] [去|qù|go to] [十二层|shí'èr céng|12th floor] [要|yào|need to] [坐|zuò|take] [右边|yòubiān|right side] [那个|nàge|that] [电梯。|diàntī.|elevator.]</div>
          <div class="sent-en">Sorry Miss, this elevator only goes to the 10th floor. To get to the 12th, take the one on the right.</div>
          <div class="zh stem">★ [那位|nà wèi|that] [小姐|xiǎojiě|Miss] [要|yào|needs to] [去|qù|go to] [十层。|shí céng.|10th floor.]</div>
          <div class="sent-en">★ That Miss is going to the 10th floor.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[她|tā|She] [要|yào|is going] [去|qù|to] [十二层，|shí’èr céng,|the 12th floor,] [不是|bú shì|not] [十层。|shí céng|the 10th.]" data-expl-en="She's going to the 12th floor, not the 10th."></div>
        </div>
        <div class="q" id="L8-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[六零三|liù líng sān|Room 603] [房间|fángjiān|room] [的|de|(possessive)] [客人|kèrén|guest] [刚才|gāngcái|just now] [打电话|dǎ diànhuà|called] [来说|lái shuō|to say] [洗手间|xǐshǒujiān|bathroom] [有问题，|yǒu wèntí,|has a problem,] [你|nǐ|you] [去|qù|go] [看|kàn|take a look] [一下|yíxià|a bit] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">The guest in Room 603 just called to say the bathroom has a problem — go take a look.</div>
          <div class="zh stem">★ [他|tā|he] [现在|xiànzài|now] [在|zài|in] [洗手间。|xǐshǒujiān.|bathroom.]</div>
          <div class="sent-en">★ He is in the bathroom now.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [说|shuō|says] [的|de|(nominalizer)] [是|shì|is]「[洗手间|xǐshǒujiān|the bathroom] [有|yǒu|has] [问题|wèntí|a problem]」，[不是|bú shì|not] [说|shuō|saying] [他|tā|he] [在|zài|is in] [洗手间。|xǐshǒujiān|the bathroom.]" data-expl-en="The text says the bathroom has a problem — not that he's in it."></div>
        </div>

        <h4 id="L8-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L8-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [想|xiǎng|want to] [再|zài|again] [喝|hē|drink] [一杯|yì bēi|one cup of] [可乐。|kělè.|cola.]</div>
          <div class="zh stem">[男：|Nán:|M:] [再|zài|again] [喝|hē|drink] [一杯，|yì bēi,|one cup,] [你|nǐ|you] [晚上|wǎnshang|at night] [就|jiù|then] [别想|bié xiǎng|don't expect to] [睡觉|shuìjiào|sleep] [了。|le.|(change)]</div>
          <div class="sent-en">W: I want another cup of cola.<br>M: Another cup and you won't be able to sleep tonight.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [是|shì|(is)] [什么|shénme|what] [意思？|yìsi?|meaning?]</div>
          <div class="sent-en">Q: What does the man mean?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[不让女的喝可乐|bú ràng nǚde hē kělè|doesn't want her to drink cola]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不让女的睡觉|bú ràng nǚde shuìjiào|won't let her sleep]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不想喝可乐|bù xiǎng hē kělè|doesn't want cola]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[再|zài|Drinking more] [喝|hē|(more)] [会|huì|would] [睡不着|shuì bu zháo|keep him awake] → [不让|bú ràng|won’t let him] [喝。|hē|drink.]</div>
        </div>
        <div class="q" id="L8-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [别|bié|don't] [害怕，|hàipà,|be afraid,] [只是|zhǐshì|just] [感冒，|gǎnmào,|a cold,] [休息|xiūxi|rest] [两天|liǎng tiān|two days] [就|jiù|then] [好|hǎo|recover] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|then] [我|wǒ|I] [让|ràng|ask] [妈妈|māma|Mom] [来|lái|come] [照顾|zhàogù|take care of] [我|wǒ|me] [几天。|jǐ tiān.|a few days.]</div>
          <div class="sent-en">M: Don't be afraid, it's just a cold. Rest two days and you'll be fine.<br>W: Then I'll ask Mom to come take care of me for a few days.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[想休息|xiǎng xiūxi|wants to rest]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[感冒了|gǎnmào le|has a cold]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[要照顾妈妈|yào zhàogù māma|will take care of Mom]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[只是|zhǐshì|just] [感冒|gǎnmào|a cold]」→ [她|tā|she] [感冒|gǎnmào|has a cold] [了。|le|(change)]</div>
        </div>
        <div class="q" id="L8-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[男：|Nán:|M:] [小姐，|xiǎojiě,|Miss,] [请问|qǐngwèn|may I ask] [这儿|zhèr|here] [有人|yǒu rén|someone] [吗？|ma?|(question)] [我|wǒ|I] [可以|kěyǐ|may] [坐|zuò|sit] [这儿|zhèr|here] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [不好意思，|bù hǎoyìsi,|Sorry,] [我|wǒ|my] [朋友|péngyou|friend] [去|qù|went to] [洗手间|xǐshǒujiān|bathroom] [了，|le,|,] [一会儿|yíhuìr|in a moment] [就|jiù|then] [回来。|huílái.|come back.]</div>
          <div class="sent-en">M: Miss, is this seat taken? May I sit here?<br>W: Sorry, my friend went to the bathroom and will be back soon.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [是|shì|(is)] [什么|shénme|what] [意思？|yìsi?|meaning?]</div>
          <div class="sent-en">Q: What does the woman mean?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[她要去洗手间|tā yào qù xǐshǒujiān|she's going to the bathroom]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[这儿有人|zhèr yǒu rén|someone is here]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[男的可以坐这儿|nánde kěyǐ zuò zhèr|the man can sit here]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[朋友|péngyou|Her friend] [只是|zhǐshì|just] [去|qù|went to] [洗手间，|xǐshǒujiān,|the bathroom,] [座位|zuòwèi|the seat] [有|yǒu|has] [人。|rén|someone.]</div>
        </div>
        <div class="q" id="L8-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|my] [儿子|érzi|son] [又|yòu|again] [没|méi|not] [考好，|kǎo hǎo,|do well on the exam,] [真|zhēn|really] [着急！|zháojí!|anxious!]</div>
          <div class="zh stem">[男：|Nán:|M:] [别|bié|don't] [着急，|zháojí,|worry,] [孩子|háizi|child] [身体|shēntǐ|health] [健康|jiànkāng|healthy] [是|shì|is] [最|zuì|most] [重要|zhòngyào|important] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">W: My son didn't do well on the exam again — I'm so anxious!<br>M: Don't worry, a child's health is the most important thing.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [为什么|wèishénme|why] [着急？|zháojí?|worried?]</div>
          <div class="sent-en">Q: Why is the woman worried?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[儿子身体不健康|érzi shēntǐ bù jiànkāng|son isn't healthy]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[儿子学习不好|érzi xuéxí bù hǎo|son doesn't study well]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[儿子没去考试|érzi méi qù kǎoshì|son didn't take the exam]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[又|yòu|again] [没|méi|didn’t] [考好|kǎo hǎo|do well]」→ [学习|xuéxí|studies] [不好。|bù hǎo|poorly.]</div>
        </div>
        <div class="q" id="L8-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[男：|Nán:|M:] [明天|míngtiān|tomorrow] [要|yào|are going to] [去|qù|go] [面试，|miànshì,|interview,] [这|zhè|these] [两条|liǎng tiáo|two] [裙子|qúnzi|skirts] [你|nǐ|you] [穿|chuān|wear] [哪条？|nǎ tiáo?|which?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [哪条|nǎ tiáo|whichever] [好看|hǎokàn|looks nice] [我|wǒ|I] [就|jiù|then] [穿|chuān|wear] [哪条，|nǎ tiáo,|that one,] [你|nǐ|you] [再|zài|also] [帮我|bāng wǒ|help me] [拿|ná|get] [一下|yíxià|a bit] [那件|nà jiàn|that] [白衬衫。|bái chènshān.|white shirt.]</div>
          <div class="sent-en">M: You have an interview tomorrow — which of these two skirts will you wear?<br>W: Whichever looks nice. Also get me that white shirt.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [明天|míngtiān|tomorrow] [做|zuò|does] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the woman do tomorrow?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[买裙子|mǎi qúnzi|buy a skirt]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[面试|miànshì|go to an interview]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[买衬衫|mǎi chènshān|buy a shirt]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[明天|míngtiān|Tomorrow] [要|yào|(going to)] [去|qù|go] [面试|miànshì|for an interview]」。</div>
        </div>

        <h4 id="L8-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L8-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[男：|Nán:|M:] [小丽，|Xiǎolì,|Xiaoli,] [是|shì|it's] [你|nǐ|you] [啊，|a,|,] [你|nǐ|you] [也|yě|also] [来|lái|came] [这儿|zhèr|here] [买东西|mǎi dōngxi|to shop] [啊？|a?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是啊，|shì a,|Yes,] [这家|zhè jiā|this] [超市|chāoshì|supermarket] [的|de|(possessive)] [东西|dōngxi|things] [很|hěn|very] [便宜。|piányi.|cheap.]</div>
          <div class="zh stem">[男：|Nán:|M:] [好久不见，|hǎojiǔ bú jiàn,|Long time no see,] [我们|wǒmen|we] [找|zhǎo|find] [个|ge|(MW)] [地方|dìfang|place] [坐坐？|zuò zuo?|sit?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好啊，|hǎo a,|OK,] [下了|xià le|after getting off] [电梯|diàntī|elevator] [有|yǒu|there is] [一个|yí ge|a] [咖啡馆，|kāfēiguǎn,|café,] [我们|wǒmen|we] [去|qù|go to] [那儿|nàr|there] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: Xiaoli, you're here shopping too?<br>W: Yes — this supermarket is cheap.<br>M: Long time no see. Shall we find a place to sit?<br>W: OK — there's a café after the elevator, let's go there.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [要|yào|are going to] [去|qù|go] [哪儿？|nǎr?|where?]</div>
          <div class="sent-en">Q: Where are they going?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[咖啡馆|kāfēiguǎn|café]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[电梯那儿|diàntī nàr|by the elevator]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[超市|chāoshì|supermarket]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[下|xià|After] [了|le|(past)] [电梯|diàntī|the elevator] [有|yǒu|there’s] [一个|yí ge|a] [咖啡馆，|kāfēiguǎn,|café,] [我们|wǒmen|let’s] [去|qù|go] [那儿|nàr|there] [吧|ba|(suggestion)]」。</div>
        </div>
        <div class="q" id="L8-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [吃药|chī yào|took medicine] [了|le|(past)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [还|hái|still] [没有，|méiyǒu,|not yet,] [我|wǒ|I] [吃完饭|chī wán fàn|after eating] [再|zài|then] [吃。|chī.|take.]</div>
          <div class="zh stem">[男：|Nán:|M:] [今天|jīntiān|today] [我们|wǒmen|we] [吃|chī|eat] [面条儿？|miàntiáor?|noodles?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是，|shì,|Yes,] [吃|chī|eat] [鸡蛋面，|jīdàn miàn,|egg noodles,] [马上|mǎshàng|right away] [就|jiù|then] [好。|hǎo.|ready.]</div>
          <div class="sent-en">M: Have you taken your medicine?<br>W: Not yet — after dinner.<br>M: Shall we have noodles today?<br>W: Yes, egg noodles, they'll be ready soon.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [今天|jīntiān|today] [吃|chī|eat] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do they eat today?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[药|yào|medicine]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[面条|miàntiáo|noodles]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[鸡蛋|jīdàn|eggs]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[吃|chī|Eat] [鸡蛋面|jīdàn miàn|egg noodles]」。</div>
        </div>
        <div class="q" id="L8-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[男：|Nán:|M:] [您好，|nín hǎo,|Hello,] [我|wǒ|my] [的|de|(possessive)] [雨伞|yǔsǎn|umbrella] [可能|kěnéng|maybe] [忘|wàng|forgot] [在|zài|at] [你们|nǐmen|your] [饭店|fàndiàn|restaurant] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [您|nín|your] [的|de|(possessive)] [雨伞|yǔsǎn|umbrella] [是|shì|is] [什么|shénme|what] [颜色|yánsè|color] [的？|de?|(nominalizer)]</div>
          <div class="zh stem">[男：|Nán:|M:] [黑色|hēisè|black] [的。|de.|(nominalizer)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是|shì|is] [这个|zhège|this] [吗？|ma?|(question)] [我们|wǒmen|we] [在|zài|in] [洗手间|xǐshǒujiān|bathroom] [里|li|inside] [看到|kàndào|saw] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">M: Hello, I may have left my umbrella at your restaurant.<br>W: What color is it?<br>M: Black.<br>W: Is this it? We found it in the bathroom.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [为什么|wèishénme|why] [去|qù|went to] [饭店？|fàndiàn?|the restaurant?]</div>
          <div class="sent-en">Q: Why did the man go to the restaurant?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[去洗手间|qù xǐshǒujiān|go to the bathroom]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[找雨伞|zhǎo yǔsǎn|find his umbrella]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[去吃饭|qù chīfàn|go eat]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|my] [的|de|(possessive)] [雨伞|yǔsǎn|umbrella] [可能|kěnéng|might be] [忘|wàng|left] [在|zài|at] [你们|nǐmen|your] [饭店|fàndiàn|restaurant] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L8-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[男：|Nán:|M:] [我们|wǒmen|we] [一起|yìqǐ|together] [吃个饭|chī ge fàn|have a meal] [吧？|ba?|(suggestion)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好啊，|hǎo a,|Sure,] [哪天？|nǎ tiān?|which day?]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [哪天|nǎ tiān|whichever day] [不忙|bù máng|not busy] [我们|wǒmen|we] [就|jiù|then] [哪天|nǎ tiān|that day] [吃。|chī.|eat.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|then] [明天|míngtiān|tomorrow] [中午，|zhōngwǔ,|noon,] [老地方|lǎo dìfang|the usual place] [见|jiàn|meet] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: Let's have a meal together.<br>W: Sure — which day?<br>M: Whichever day you're free.<br>W: Then tomorrow noon, at our usual place.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[明天中午不忙|míngtiān zhōngwǔ bù máng|free tomorrow noon]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不想跟男的吃饭|bù xiǎng gēn nánde chīfàn|doesn't want to eat with him]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不知道哪天吃饭|bù zhīdào nǎ tiān chīfàn|doesn't know which day]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[她|tā|She] [说|shuō|says]「[明天|míngtiān|tomorrow] [中午，|zhōngwǔ,|noon,] [老地方|lǎo dìfang|the usual place] [见|jiàn|see you]」→ [明天|míngtiān|tomorrow] [中午|zhōngwǔ|noon] [有空。|yǒu kòng|free.]</div>
        </div>
        <div class="q" id="L8-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [这次|zhè cì|this time] [汉语|Hànyǔ|Chinese] [考|kǎo|took the exam] [得|de|(complement)] [怎么样？|zěnmeyàng?|how?]</div>
          <div class="zh stem">[男：|Nán:|M:] [九十分，|jiǔshí fēn,|90 points,] [你|nǐ|you] [呢？|ne?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [考|kǎo|took] [得|de|(complement)] [不太好，|bú tài hǎo,|not too well,] [我|wǒ|I] [只会|zhǐ huì|only know how to] [做|zuò|do] [第一题，|dì yī tí,|the first question,] [汉字|Hànzì|Chinese characters] [几乎|jīhū|almost] [一个|yí ge|not a single one] [都|dōu|even] [不会|bú huì|cannot] [写。|xiě.|write.]</div>
          <div class="zh stem">[男：|Nán:|M:] [别|bié|don't] [着急，|zháojí,|worry,] [慢慢来。|mànman lái.|take it slow.]</div>
          <div class="sent-en">W: How did you do on the Chinese exam?<br>M: 90 — and you?<br>W: Not too well. I could only do the first question — I couldn't write almost any characters.<br>M: Don't worry, take it slow.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[考得很好|kǎo de hěn hǎo|did very well]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[不会写汉字|bú huì xiě Hànzì|cannot write characters]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[一个题都不会|yí ge tí dōu bú huì|couldn't do any question]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[汉字|Hànzì|Chinese characters] [几乎|jīhū|almost] [一个|yí ge|a single one] [都|dōu|even] [不|bù|can’t] [会|huì|(can)] [写|xiě|write]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L8-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L8-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[你|nǐ|you] [下课|xià kè|class is over] [以后|yǐhòu|later] [去|qù|go] [哪儿|nǎr|where] [学习？|xuéxí?|study?]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[周末|zhōumò|weekend] [你|nǐ|you] [有|yǒu|have] [什么|shénme|what] [打算？|dǎsuàn?|plans?]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[听说|tīngshuō|heard] [你|nǐ|you] [最近|zuìjìn|recently] [打算|dǎsuàn|plan to] [买房子|mǎi fángzi|buy a house] [了？|le?|(change)]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[可能|kěnéng|maybe] [吃|chī|eaten] [的|de|(possessive)] [东西|dōngxi|things] [有问题，|yǒu wèntí,|have a problem,] [不太|bú tài|not too] [舒服。|shūfu.|well.]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[那|nà|then] [我们|wǒmen|we] [再|zài|again] [买|mǎi|buy] [几块|jǐ kuài|a few pieces] [吧。|ba.|(suggestion)]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [去|qù|go] [那儿|nàr|there] [吗？|ma?|(question)] （E）</div>
          <div class="sent-en">Do you know how to get there? — (E) Of course. We take the bus first, then transfer to the subway.</div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L8-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[你|nǐ|you] [怎么|zěnme|why] [又|yòu|again] [去|qù|go to] [洗手间|xǐshǒujiān|bathroom] [啊？|a?|(question)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Why are you going to the bathroom again?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L8-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[这种|zhè zhǒng|this kind of] [蛋糕|dàngāo|cake] [很|hěn|very] [甜，|tián,|sweet,] [孩子们|háizimen|children] [很|hěn|very] [喜欢。|xǐhuan.|like.] （<span class="blank">　</span>）</div>
          <div class="sent-en">This kind of cake is very sweet — children love it.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L8-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[是|shì|yes] [啊，|a,|,] [看了|kàn le|looked at] [很多，|hěnduō,|many,] [但是|dànshì|but] [都|dōu|all] [不太|bú tài|not quite] [满意。|mǎnyì.|satisfied.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Yeah, I looked at many, but wasn't quite satisfied with any.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L8-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[我|wǒ|I] [要|yào|will] [去|qù|go] [跟|gēn|with] [几个|jǐ ge|a few] [老朋友|lǎo péngyou|old friends] [见面。|jiànmiàn.|meet.] （<span class="blank">　</span>）</div>
          <div class="sent-en">I'm going to meet a few old friends.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L8-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[哪儿|nǎr|wherever] [安静|ānjìng|quiet] [我|wǒ|I] [就|jiù|then] [去|qù|go] [哪儿。|nǎr.|there.] （<span class="blank">　</span>）</div>
          <div class="sent-en">I'll go wherever it's quiet.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L8-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L8-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[电梯|diàntī|elevator]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[洗手间|xǐshǒujiān|bathroom]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[几乎|jīhū|almost]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[重要|zhòngyào|important]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[又|yòu|again]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[她|tā|she] [说话|shuōhuà|speaks] [的|de|(possessive)] （E [声音|shēngyīn|voice]） [多|duō|how] [好听|hǎotīng|nice] [啊！|a!|!]</div>
          <div class="sent-en">Her voice is so nice!</div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L8-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[你|nǐ|you] [等我|děng wǒ|wait for me] [一会儿，|yíhuìr,|a moment,] [我|wǒ|I] [去|qù|go] [一下|yíxià|to] （<span class="blank">　</span>），[马上|mǎshàng|right away] [回来。|huílái.|come back.]</div>
          <div class="sent-en">Wait for me a moment — I'm going to the bathroom and will be right back.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L8-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[他|tā|he] （<span class="blank">　</span>） [每天|měitiān|every day] [都|dōu|all] [要|yào|needs to] [去|qù|go to] [公园|gōngyuán|park] [锻炼|duànliàn|exercise] [一个小时。|yí ge xiǎoshí.|for an hour.]</div>
          <div class="sent-en">He almost goes to the park to exercise for an hour every day.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L8-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">（<span class="blank">　</span>） [里|li|inside] [人|rén|people] [太多|tài duō|too many] [了，|le,|,] [我们|wǒmen|we] [别|bié|don't] [坐|zuò|take] [了。|le.|(change)]</div>
          <div class="sent-en">The elevator is too crowded — let's not take it.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L8-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [今天|jīntiān|today] [晚上|wǎnshang|evening] [你|nǐ|you] （<span class="blank">　</span>） [要|yào|are going to] [去|qù|go to] [听|tīng|listen to] [音乐会？|yīnyuèhuì?|concert?]</div>
          <div class="zh">[B：|B:|B:] [是|shì|yes] [啊，|a,|,] [我|wǒ|I] [现在|xiànzài|now] [对|duì|to] [音乐|yīnyuè|music] [非常|fēicháng|very] [感兴趣。|gǎn xìngqù.|interested.]</div>
          <div class="sent-en">A: You're going to the concert again tonight?<br>B: Yes, I'm very interested in music now.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L8-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [我|wǒ|I] [觉得|juéde|feel] [我|wǒ|I] [越来越|yuè lái yuè|more and more] [胖|pàng|fat] [了，|le,|,] [以后|yǐhòu|later] [我|wǒ|I] [不|bù|not] [吃|chī|eat] [晚饭|wǎnfàn|dinner] [了。|le.|(change)]</div>
          <div class="zh">[B：|B:|B:] [其实|qíshí|actually] [胖点儿|pàng diǎnr|a bit fat] [或者|huòzhě|or] [瘦点儿|shòu diǎnr|a bit thin] [都|dōu|both] [没关系，|méi guānxi,|don't matter,] [健康|jiànkāng|health] [最|zuì|most] （<span class="blank">　</span>）。</div>
          <div class="sent-en">A: I'm getting fatter and fatter — I'll skip dinner from now on.<br>B: Actually, fat or thin doesn't matter — health is most important.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L8-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L8-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[“再见”|“Zàijiàn”|"Goodbye"] [是|shì|is] [一个|yí ge|a] [很|hěn|very] [有意思|yǒu yìsi|interesting] [的|de|(possessive)] [词，|cí,|word,] [“再见”|“zàijiàn”|"goodbye"] [的|de|(possessive)] [意思|yìsi|meaning] [是|shì|is] [“再一次|“zài yí cì|"one more time] [见面”，|jiànmiàn”,|meet",] [所以|suǒyǐ|so] [人们|rénmen|people] [离开|líkāi|leave] [时|shí|when] [说|shuō|say] [“再见”，|“zàijiàn”,|"goodbye",] [是|shì|is] [希望|xīwàng|hoping] [以后|yǐhòu|later] [再|zài|again] [见面。|jiànmiàn.|to meet.]</div>
          <div class="sent-en">"Zàijiàn" is an interesting word — it means "meet again". So when people say it when leaving, they hope to meet again.</div>
          <div class="zh ask">★ [什么|shénme|When] [时候|shíhou|(when)] [说|shuō|do you say]“[再见|zàijiàn|goodbye]”？</div>
          <div class="sent-en">★ When do you say “goodbye”?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[离开|líkāi|leaving]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[见面|jiànmiàn|meeting]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[上课|shàngkè|in class]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[人们|rénmen|People] [离开|líkāi|leave] [时|shí|when] [说|shuō|say] [再见|zàijiàn|goodbye]」。</div>
        </div>
        <div class="q" id="L8-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[我|wǒ|my] [男朋友|nánpéngyou|boyfriend] [的|de|(possessive)] [家|jiā|home] [虽然|suīrán|although] [不|bù|not] [大，|dà,|big,] [但是|dànshì|but] [住着|zhù zhe|living] [很|hěn|very] [舒服，|shūfu,|comfortable,] [楼里|lóu li|in the building] [很|hěn|very] [安静，|ānjìng,|quiet,] [还|hái|also] [有|yǒu|has] [电梯，|diàntī,|elevator,] [他|tā|he] [很|hěn|very] [喜欢|xǐhuan|likes] [他|tā|his] [现在|xiànzài|current] [的|de|(possessive)] [家。|jiā.|home.]</div>
          <div class="sent-en">My boyfriend's home isn't big but is very comfortable, quiet, and has an elevator — he likes it very much.</div>
          <div class="zh ask">★ [男朋友|nánpéngyou|her boyfriend] [觉得|juéde|thinks] [他|tā|his] [的|de|(possessive)] [家|jiā|home] [怎么样？|zěnmeyàng?|how is it?]</div>
          <div class="sent-en">★ What does her boyfriend think of his home?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不舒服|bù shūfu|uncomfortable]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[太小了|tài xiǎo le|too small]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[很满意|hěn mǎnyì|very satisfied]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[很|hěn|really] [喜欢|xǐhuan|likes] [他|tā|his] [现在|xiànzài|current] [的|de|(possessive)] [家|jiā|home]」。</div>
        </div>
        <div class="q" id="L8-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[女孩子|nǚháizi|Girls] [都|dōu|all] [喜欢|xǐhuan|like] [穿|chuān|wear] [裙子，|qúnzi,|skirts,] [爱|ài|love] [唱歌、|chànggē,|singing,] [跳舞，|tiàowǔ,|dancing,] [但是|dànshì|but] [我|wǒ|my] [哥|gē|elder brother] [的|de|(possessive)] [女儿|nǚ'ér|daughter] [不是|bú shì|isn't] [这样，|zhèyàng,|like this,] [她|tā|she] [对|duì|to] [运动|yùndòng|sports] [很|hěn|very] [感兴趣，|gǎn xìngqù,|interested,] [还|hái|also] [喜欢|xǐhuan|likes] [玩儿|wánr|play] [电脑游戏，|diànnǎo yóuxì,|computer games,] [我|wǒ|I] [几乎|jīhū|almost] [没|méi|never] [见|jiàn|seen] [她|tā|her] [穿过|chuān guò|worn] [裙子。|qúnzi.|skirt.]</div>
          <div class="sent-en">Girls usually like skirts, singing, and dancing — but my brother's daughter isn't like that. She's interested in sports and computer games; I've almost never seen her in a skirt.</div>
          <div class="zh ask">★ [哥哥|gēge|The brother] [的|de|(possessive)] [女儿：|nǚ’ér:|daughter:]</div>
          <div class="sent-en">★ The brother's daughter: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[喜欢唱歌|xǐhuan chànggē|likes singing]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[很少穿裙子|hěn shǎo chuān qúnzi|rarely wears skirts]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不爱运动|bú ài yùndòng|doesn't like sports]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[几乎|jīhū|almost] [没|méi|never] [见|jiàn|seen] [她|tā|her] [穿|chuān|wearing] [过|guò|(experience)] [裙子|qúnzi|a skirt]」。</div>
        </div>
        <div class="q" id="L8-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[丈夫|zhàngfu|husband] [最近|zuìjìn|recently] [很忙，|hěn máng,|very busy,] [没有|méiyǒu|no] [时间|shíjiān|time] [去|qù|to] [运动，|yùndòng,|exercise,] [又|yòu|also] [胖|pàng|gained] [了|le|(past)] [几斤。|jǐ jīn.|a few jin.] [他|tā|he] [打算|dǎsuàn|plans to] [忙完|máng wán|after finishing] [这|zhè|these] [几天，|jǐ tiān,|few days,] [就|jiù|then] [去|qù|go] [跑步|pǎobù|run] [和|hé|and] [游泳。|yóuyǒng.|swim.]</div>
          <div class="sent-en">My husband has been very busy lately, no time to exercise, and has gained a few jin. He plans to run and swim after these busy days.</div>
          <div class="zh ask">★ [丈夫|zhàngfu|Her husband] [最近：|zuìjìn:|lately:]</div>
          <div class="sent-en">★ Her husband lately: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[变化不大|biànhuà bú dà|little change]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[身体不健康|shēntǐ bù jiànkāng|unhealthy]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[很少锻炼|hěn shǎo duànliàn|rarely exercises]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[没有|méiyǒu|has no] [时间|shíjiān|time] [去|qù|to] [运动|yùndòng|exercise]」。</div>
        </div>
        <div class="q" id="L8-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[你|nǐ|you] [要|yào|must] [明白，|míngbai,|understand,] [想|xiǎng|want] [让|ràng|let] [每个|měi ge|everyone] [人|rén|person] [都|dōu|all] [喜欢|xǐhuan|like] [你|nǐ|you] [是|shì|is] [几乎|jīhū|almost] [不可能|bù kěnéng|impossible] [的，|de,|,] [所以|suǒyǐ|so] [做事情|zuò shìqing|doing things] [不要|bú yào|don't] [害怕|hàipà|fear] [别人|biérén|others] [不满意，|bù mǎnyì,|being unsatisfied,] [最|zuì|most] [重要|zhòngyào|important] [的|de|(possessive)] [就是|jiùshì|is] [你|nǐ|you] [很|hěn|very] [满意。|mǎnyì.|satisfied.]</div>
          <div class="sent-en">You must understand that it's almost impossible to make everyone like you, so don't fear others being unsatisfied — the most important thing is that you're satisfied.</div>
          <div class="zh ask">★ [做|zuò|When] [事情，|shìqing,|doing things,] [最|zuì|the most] [重要|zhòngyào|important] [的|de|(nominalizer)] [是：|shì:|is:]</div>
          <div class="sent-en">★ When doing things, the most important is: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[让每个人都喜欢你|ràng měi ge rén dōu xǐhuan nǐ|make everyone like you]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不害怕别人|bú hàipà biérén|not fear others]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[你觉得做得很好|nǐ juéde zuò de hěn hǎo|you feel you did well]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[最重要|zuì zhòngyào|The most important thing] [的|de|(nominalizer)] [就是|jiùshì|is that] [你|nǐ|you] [很|hěn|are] [满意|mǎnyì|satisfied]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L8-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L8-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[健康|jiànkāng|healthy] [就|jiù|then] [吃什么|chī shénme|eat whatever] [我|wǒ|I] [什么|shénme|whatever] [东西|dōngxi|things]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[什么|shénme|Whatever] [东西|dōngxi|food] [健康|jiànkāng|is healthy,] [我|wǒ|I] [就|jiù|(then)] [吃|chī|eat] [什么。|shénme|(it).]<div class="sent-en">I eat whatever is healthy.</div></div>
        </div>
        <div class="write-item" id="L8-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[又|yòu|again] [你|nǐ|you] [不满意|bù mǎnyì|unsatisfied] [了|le|(change)] [怎么|zěnme|why]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|Why are you] [怎么|zěnme|(why)] [又|yòu|again] [不|bù|un] [满意|mǎnyì|satisfied] [了？|le?|?]<div class="sent-en">Why are you unsatisfied again?</div></div>
        </div>
        <div class="write-item" id="L8-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[熊猫|xióngmāo|panda] [再|zài|again] [看一次|kàn yí cì|see once more] [我想|wǒ xiǎng|I want] [去|qù|to go]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|I] [想|xiǎng|want] [再|zài|to go] [去|qù|(go)] [看|kàn|see] [一次|yí cì|once more] [熊猫。|xióngmāo|the panda.]<div class="sent-en">I want to see the pandas once more.</div></div>
        </div>
        <div class="write-item" id="L8-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[离婚|líhūn|divorce] [很多|hěnduō|much] [瘦了|shòu le|got thin] [以后|yǐhòu|after] [她|tā|she]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[她|tā|She] [离婚|líhūn|divorced] [以后|yǐhòu|and] [瘦|shòu|got much thinner] [了|le|(past)] [很多。|hěnduō|(a lot).]<div class="sent-en">She got much thinner after the divorce.</div></div>
        </div>
        <div class="write-item" id="L8-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[坐电梯|zuò diàntī|take the elevator] [上去|shàngqù|go up] [我们|wǒmen|we] [吧|ba|(suggestion)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我们|wǒmen|Let’s] [坐|zuò|take] [电梯|diàntī|the elevator] [上去|shàngqù|up] [吧。|ba|(suggestion)]<div class="sent-en">Let's take the elevator up.</div></div>
        </div>

        <h4 id="L8-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L8-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[房间里|fángjiān li|in the room] [很|hěn|very] <span class="blank-input"><span class="input-py">ān</span><input type="text" data-ans="安"></span> [静，|jìng,|quiet,] [我|wǒ|I] [很|hěn|very] [满意。|mǎnyì.|satisfied.]</div>
          <div class="sent-en">The room is very quiet — I'm satisfied.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[安|ān|quiet]</span></div>
        </div>
        <div class="write-item" id="L8-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[太晚了，|tài wǎn le,|It's too late,] [我|wǒ|I] [有点儿|yǒudiǎnr|a bit] [害|hài|afraid] <span class="blank-input"><span class="input-py">pà</span><input type="text" data-ans="怕"></span>，[你|nǐ|you] [送我|sòng wǒ|walk me] [回家|huí jiā|home] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">It's too late — I'm a bit scared. Walk me home.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[怕|pà|afraid]（[害怕|hàipà|afraid]）</span></div>
        </div>
        <div class="write-item" id="L8-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[你住的|nǐ zhù de|the place you live] [楼里|lóu li|in the building] [有|yǒu|is there] <span class="blank-input"><span class="input-py">diàn</span><input type="text" data-ans="电"></span> [梯吗？|tī ma?|elevator?]</div>
          <div class="sent-en">Is there an elevator in your building?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[电|diàn|electric]（[电梯|diàntī|elevator]）</span></div>
        </div>
        <div class="write-item" id="L8-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[下课以后|xià kè yǐhòu|after class] [我|wǒ|I] <span class="blank-input"><span class="input-py">mǎ</span><input type="text" data-ans="马"></span> [上|shàng|immediately] [回家|huí jiā|home] [吃饭。|chīfàn.|eat.]</div>
          <div class="sent-en">After class I'll go home right away to eat.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[马|mǎ|horse]（[马上|mǎshàng|immediately]）</span></div>
        </div>
        <div class="write-item" id="L8-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[你|nǐ|you] [觉得|juéde|think] [工作|gōngzuò|work] [和|hé|and] [健康，|jiànkāng,|health,] [哪个|nǎ ge|which] [更|gèng|more] <span class="blank-input"><span class="input-py">zhòng</span><input type="text" data-ans="重"></span> [要？|yào?|important?]</div>
          <div class="sent-en">Which do you think is more important — work or health?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[重|zhòng|heavy]（[重要|zhòngyào|important]）</span></div>
        </div>

        <h4 id="L8-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L8-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[今天下午|jīntiān xiàwǔ|this afternoon] [你|nǐ|you] <span class="blank-input"><input type="text" data-ans="能"></span> [跟|gēn|with] [我|wǒ|me] [一起|yìqǐ|together] [去|qù|go] [看|kàn|see] <span class="blank-input"><input type="text" data-ans="熊"></span> [猫吗？|māo ma?|pandas?]</div>
          <div class="zh" style="margin-top:6px;">[熊|xióng|bear]　[能|néng|can]</div>
          <div class="sent-en">Can you come see the pandas with me this afternoon?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[能|néng|(as in 不能 “cannot”)]、[熊|xióng|(as in 熊猫 “panda”)]</div>
        </div>
        <div class="write-item" id="L8-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[请|qǐng|please] <span class="blank-input"><input type="text" data-ans="问"></span>，[洗手|xǐshǒu|wash hands] <span class="blank-input"><input type="text" data-ans="间"></span> [在哪儿？|zài nǎr?|where?]</div>
          <div class="zh" style="margin-top:6px;">[问|wèn|ask]　[间|jiān|room]</div>
          <div class="sent-en">Excuse me, where's the bathroom?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[问|wèn|(as in 问题 “question”)]、[间|jiān|(as in 洗手间 “bathroom”)]</div>
        </div>
        <div class="write-item" id="L8-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh"><span class="blank-input"><input type="text" data-ans="考"></span> [试的时候|shì de shíhou|during the exam] [不认真，|bú rènzhēn,|not careful,] [这|zhè|this] [是|shì|is] [你的|nǐ de|your] <span class="blank-input"><input type="text" data-ans="老"></span> [问题了。|wèntí le.|old problem.]</div>
          <div class="zh" style="margin-top:6px;">[考|kǎo|exam]　[老|lǎo|old]</div>
          <div class="sent-en">You're not careful in exams — this is your old problem.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[考|kǎo|(as in 考试 “exam”)]、[老|lǎo|(as in 老师 “teacher”)]</div>
        </div>
        <div class="write-item" id="L8-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[你|nǐ|you] [先|xiān|first] [上去，|shàngqù,|go up,] [一|yī|in a] <span class="blank-input"><input type="text" data-ans="会"></span> [儿|r|moment] [我|wǒ|I] [去|qù|go to] [十|shí|10th] <span class="blank-input"><input type="text" data-ans="层"></span> [找你。|zhǎo nǐ.|find you.]</div>
          <div class="zh" style="margin-top:6px;">[会|huì|moment]　[层|céng|floor]</div>
          <div class="sent-en">Go up first — in a moment I'll come up to the 10th floor to find you.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[会|huì|(as in 音乐会 “concert”)]、[层|céng|(as in 一层 “first floor”)]</div>
        </div>
        <div class="write-item" id="L8-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[你|nǐ|you] [离开|líkāi|left] [的|de|(possessive)] [这|zhè|these] <span class="blank-input"><input type="text" data-ans="几"></span> [年|nián|years] [变化|biànhuà|changes] [真大，|zhēn dà,|are really big,] [我|wǒ|I] <span class="blank-input"><input type="text" data-ans="几"></span> [乎|hū|almost] [不|bù|not] [认识|rènshi|recognize] [你了。|nǐ le.|you anymore.]</div>
          <div class="zh" style="margin-top:6px;">[几|jǐ|several]　[几|jī|(as in 几乎 "almost")]</div>
          <div class="sent-en">You've changed a lot in the few years since you left — I almost don't recognize you.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[几|jǐ|(as in 几个 “a few”)]、[几|jī|(as in 几乎 “almost”)]</div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L8-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小丽|Xiǎolì|Xiaoli] [最近|zuìjìn|recently] [打算|dǎsuàn|planning to] [买房子，|mǎi fángzi,|buy a house,] [今天|jīntiān|today]
            <span class="blank-input review-blank"><span class="input-py">yòu</span><input type="text" data-ans="又"></span>
            [去看了看，|qù kàn le kàn,|went to look,] [但是|dànshì|but] [都|dōu|all] [不|bù|not]
            <span class="blank-input review-blank"><span class="input-py">mǎnyì</span><input type="text" data-ans="满意"></span>，[一个|yí ge|one] [没有|méiyǒu|has no]
            <span class="blank-input review-blank"><span class="input-py">diàntī</span><input type="text" data-ans="电梯"></span>，[不|bù|not] [方便，|fāngbiàn,|convenient,] [一个|yí ge|another] [在|zài|on] [二十|èrshí|20th]
            <span class="blank-input review-blank"><span class="input-py">céng</span><input type="text" data-ans="层"></span>，[太高了，|tài gāo le,|too high,] [她|tā|she] [觉得|juéde|feels] [往下看|wǎng xià kàn|looking down] [太|tài|too]
            <span class="blank-input review-blank"><span class="input-py">hàipà</span><input type="text" data-ans="害怕"></span> [了。|le.|(change)]
          </div>
          <div class="sent-en">Xiaoli is planning to buy a house. She went to look again today, but wasn't satisfied with any — one has no elevator (inconvenient), one is on the 20th floor (too high, she's afraid to look down).</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[又|yòu|again]、[满意|mǎnyì|satisfied]、[电梯|diàntī|elevator]、[层|céng|floor]、[害怕|hàipà|afraid]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [周太太|Zhōu tàitai|Mrs. Zhou] [和|hé|and]
            <span class="blank-input review-blank"><span class="input-py">lǎo</span><input type="text" data-ans="老"></span>
            [同学|tóngxué|classmate] [五年|wǔ nián|five years] [没|méi|not]
            <span class="blank-input review-blank"><span class="input-py">jiànmiàn</span><input type="text" data-ans="见面"></span>
            [了，|le,|,] [同学|tóngxué|classmate] [觉得|juéde|feels] [周太太|Zhōu tàitai|Mrs. Zhou] [几乎|jīhū|almost] [没|méi|no]
            <span class="blank-input review-blank"><span class="input-py">biànhuà</span><input type="text" data-ans="变化"></span>，[但是|dànshì|but] [周太太|Zhōu tàitai|Mrs. Zhou] [说|shuō|says] [她|tā|she] [胖了，|pàng le,|got fat,] [现在|xiànzài|now] [想|xiǎng|want to] [吃|chī|eat] [什么|shénme|whatever] [就|jiù|then] [吃|chī|eat] [什么，|shénme,|whatever,] [因为|yīnwèi|because]
            <span class="blank-input review-blank"><span class="input-py">jiànkāng</span><input type="text" data-ans="健康"></span>
            [最|zuì|most]
            <span class="blank-input review-blank"><span class="input-py">zhòngyào</span><input type="text" data-ans="重要"></span>，[胖瘦|pàng shòu|fat or thin] [没关系。|méi guānxi.|doesn't matter.]</div>
          <div class="sent-en">Mrs. Zhou and her old classmate haven't met for five years. The classmate thinks Mrs. Zhou has hardly changed, but Mrs. Zhou says she's gotten fat — now she eats whatever she wants because health is most important and fat or thin doesn't matter.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[老|lǎo|old]、[见面|jiànmiàn|meet]、[变化|biànhuà|change]、[健康|jiànkāng|health]、[重要|zhòngyào|important]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[9] = {
  navLabel:'第9课',
  html: `
    <div class="lesson">
      <h2>第 9 课　她的汉语说得跟中国人一样好
        <span class="title-py">Dì jiǔ kè · Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo</span>
        <small>Lesson 9 · She speaks Chinese like a native</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L9-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图09.png" alt="听力图09" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图09.png</b></span>
        </div>

        <div class="q" id="L9-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [大明，|Dàmíng,|Daming,] [你|nǐ|you] [看|kàn|look] [我|wǒ|my] [的|de|(possessive)] [眼睛|yǎnjìng|eyes] [是不是|shì bú shì|are they] [跟|gēn|like] [熊猫|xióngmāo|panda] [一样|yíyàng|the same] [了？|le?|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [怎么，|zěnme,|What,] [昨天|zuótiān|yesterday] [又|yòu|again] [没|méi|not] [睡好？|shuì hǎo?|sleep well?] [别|bié|don't] [总|zǒng|always] [想|xiǎng|think about] [工作|gōngzuò|work] [的|de|(possessive)] [事，|shì,|things,] [好好儿|hǎohāor|well] [休息。|xiūxi.|rest.]</div>
          <div class="sent-en">W: Daming, do my eyes look like a panda's?<br>M: What, didn't sleep well again? Don't always think about work — rest well.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[黑眼圈|hēiyǎnquān|dark circles] / [眼睛|yǎnjing|eyes]）</div>
        </div>
        <div class="q" id="L9-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[男：|Nán:|M:] [方老师，|Fāng lǎoshī,|Teacher Fang,] [这次|zhè cì|this time] [中文|Zhōngwén|Chinese] [比赛|bǐsài|competition] [的|de|(possessive)] [第一|dì yī|first place] [是|shì|is] [您|nín|your] [班|bān|class] [的|de|(possessive)] [学生|xuéshēng|student] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是，|shì,|Yes,] [这个|zhège|this] [小男孩儿|xiǎonánháir|little boy] [叫|jiào|is called] [天天，|Tiāntiān,|Tiantian,] [他|tā|he] [第一次|dì yī cì|first time] [参赛|cānsài|came to compete] [就|jiù|then] [拿了|ná le|got] [第一。|dì yī.|first place.]</div>
          <div class="sent-en">M: Teacher Fang, was the first place in this Chinese competition your student?<br>W: Yes, this little boy is Tiantian — his first time competing and he got first place.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[小男孩|xiǎonánhái|a little boy] [拿|ná|holding] [奖杯|jiǎngbēi|a trophy]）</div>
        </div>
        <div class="q" id="L9-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[女1：|Nǚ1:|W1:] [这山|zhè shān|this mountain] [怎么|zěnme|why] [越爬|yuè pá|the more we climb] [越高|yuè gāo|the higher] [啊？|a?|(question)] [还有|háiyǒu|how much] [多远？|duō yuǎn?|further?]</div>
          <div class="zh stem">[女2：|Nǚ2:|W2:] [我|wǒ|I] [对|duì|to] [这儿|zhèr|here] [比较|bǐjiào|relatively] [了解，|liǎojiě,|know well,] [再|zài|another] [爬|pá|climb] [一个小时|yí ge xiǎoshí|one hour] [就|jiù|then] [到|dào|arrive] [了。|le.|(change)] [先|xiān|first] [休息|xiūxi|rest] [会儿|huìr|a while] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W1: Why does this mountain get higher the more we climb? How much further?<br>W2: I know this place relatively well — another hour and we'll be there. Let's rest a bit first.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[爬山|pá shān|climbing a mountain]）</div>
        </div>
        <div class="q" id="L9-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [说得|shuō de|speak] [真好，|zhēn hǎo,|so well,] [几乎|jīhū|almost] [跟|gēn|like] [中国人|Zhōngguórén|Chinese people] [一样！|yíyàng!|the same!]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [哪里哪里，|nǎli nǎli,|You flatter me,] [大家|dàjiā|everyone] [说得|shuō de|speaks] [都|dōu|all] [很好。|hěn hǎo.|very well.]</div>
          <div class="sent-en">M: You speak so well — almost like a Chinese person!<br>W: You flatter me, everyone speaks very well.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[一个人|yí ge rén|a person] [谦虚地|qiānxū de|modestly] [摆手|bǎi shǒu|waving his hand]）</div>
        </div>
        <div class="q" id="L9-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[男：|Nán:|M:] [方方，|Fāngfang,|Fangfang,] [这是|zhè shì|this is] [你们班|nǐmen bān|your class] [的|de|(possessive)] [照片|zhàopiàn|photo] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [对，|duì,|Yes,] [爸，|bà,|Dad,] [我|wǒ|I] [来|lái|come] [给|gěi|to] [你|nǐ|you] [介绍|jièshào|introduce] [一下，|yíxià,|a bit,] [中间|zhōngjiān|middle] [这个|zhège|this] [是|shì|is] [我们班|wǒmen bān|our class] [周老师，|Zhōu lǎoshī,|Teacher Zhou,] [周老师|Zhōu lǎoshī|Teacher Zhou] [旁边|pángbiān|next to] [这个|zhège|this] [男孩儿|nánháir|boy] [叫|jiào|is called] [山山，|Shānshan,|Shanshan,] [他|tā|he] [上课|shàngkè|class] [总是|zǒngshì|always] [迟到。|chídào.|late.]</div>
          <div class="sent-en">M: Fangfang, is this your class photo?<br>W: Yes, Dad. Let me introduce: the one in the middle is our teacher Zhou, and the boy next to him is Shanshan — he's always late for class.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[班级|bānjí|a class] [合影|héyǐng|group photo]）</div>
        </div>

        <h4 id="L9-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L9-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[十二月|shí'èr yuè|December] [的|de|(possessive)] [南方，|nánfāng,|the South,] [房间里|fángjiān li|inside the room] [跟|gēn|and] [房间外|fángjiān wài|outside the room] [一样|yíyàng|the same] [冷，|lěng,|cold,] [所以|suǒyǐ|so] [回家了|huí jiā le|when back home] [大家|dàjiā|everyone] [也|yě|also] [要|yào|needs to] [穿|chuān|wear] [很多|hěnduō|a lot of] [衣服。|yīfu.|clothes.]</div>
          <div class="sent-en">In the South in December, it's as cold inside as outside, so when you get home you still need to wear a lot of clothes.</div>
          <div class="zh stem">★ [南方|nánfāng|the South] [十二月|shí'èr yuè|December] [的时候|de shíhou|when] [房间里|fángjiān li|inside the room] [不太冷。|bú tài lěng.|not too cold.]</div>
          <div class="sent-en">★ In the South in December, it's not too cold inside the room.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [说|shuō|says]「[房间|fángjiān|inside] [里|li|(inside)] [跟|gēn|is as] [房间|fángjiān|outside] [外|wài|(outside)] [一样|yíyàng|just as] [冷|lěng|cold]」，[所以|suǒyǐ|so] [房间|fángjiān|inside] [里|li|(inside)] [也|yě|is also] [冷。|lěng|cold.]" data-expl-en="The text says inside is as cold as outside — so it IS cold inside."></div>
        </div>
        <div class="q" id="L9-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[这本书|zhè běn shū|this book] [写得|xiě de|is written] [真不错，|zhēn búcuò,|really well,] [越看|yuè kàn|the more you read] [越|yuè|the more] [有意思，|yǒu yìsi,|interesting,] [你|nǐ|you] [也|yě|also] [看看|kàn kan|take a look] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">This book is really well written — the more you read, the more interesting it gets. You should read it too.</div>
          <div class="zh stem">★ [他|tā|he] [觉得|juéde|feels] [这本书|zhè běn shū|this book] [很|hěn|very] [有意思。|yǒu yìsi.|interesting.]</div>
          <div class="sent-en">★ He feels this book is very interesting.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[越|yuè|The more] [看|kàn|you read] [越|yuè|the more] [有意思|yǒu yìsi|interesting]」[说明|shuōmíng|showing] [他|tā|he] [觉得|juéde|finds it] [很|hěn|very] [有意思。|yǒu yìsi|interesting.]" data-expl-en="'The more you read, the more interesting' means he finds it very interesting."></div>
        </div>
        <div class="q" id="L9-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[雪|xuě|snow] [越下越大，|yuè xià yuè dà,|is falling heavier and heavier,] [外边的|wàibiān de|outside] [房子、|fángzi,|houses,] [树|shù|trees] [和|hé|and] [路|lù|road] [都|dōu|all] [变白|biàn bái|turned white] [了。|le.|(change)]</div>
          <div class="sent-en">The snow is falling heavier and heavier — the houses, trees and roads outside have all turned white.</div>
          <div class="zh stem">★ [现在|xiànzài|now] [不|bù|not] [下雪|xià xuě|snowing] [了。|le.|(change)]</div>
          <div class="sent-en">★ It's not snowing now.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [说|shuō|says]「[雪|xuě|the snow] [越|yuè|is falling] [下|xià|(falling)] [越|yuè|more and more] [大|dà|heavily]」，[说明|shuōmíng|showing] [还|hái|still] [在|zài|is] [下雪。|xià xuě|snowing.]" data-expl-en="The text says the snow is getting heavier — it's still snowing."></div>
        </div>
        <div class="q" id="L9-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[我|wǒ|I] [昨天|zuótiān|yesterday] [新买的|xīn mǎi de|newly bought] [手机|shǒujī|phone] [跟|gēn|and] [以前|yǐqián|before] [的|de|(possessive)] [不太一样，|bú tài yíyàng,|not quite the same,] [你|nǐ|you] [来|lái|come] [帮我|bāng wǒ|help me] [看看|kàn kan|take a look] [怎么|zěnme|how] [用，|yòng,|to use,] [可以|kěyǐ|may] [吗？|ma?|(question)]</div>
          <div class="sent-en">The phone I bought yesterday isn't quite the same as my old one — can you help me see how to use it?</div>
          <div class="zh stem">★ [他|tā|his] [以前的|yǐqián de|old] [手机|shǒujī|phone] [和|hé|and] [现在|xiànzài|now] [的|de|(possessive)] [是|shì|are] [一样|yíyàng|the same] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">★ His old phone and his current one are the same.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [说|shuō|says]「[跟|gēn|(from)] [以前|yǐqián|before] [的|de|(nominalizer)] [不太|bú tài|not quite] [一样|yíyàng|the same]」，[说明|shuōmíng|showing] [不|bù|not] [一样。|yíyàng|the same.]" data-expl-en="The text says 'not quite the same as before' — so they are different."></div>
        </div>
        <div class="q" id="L9-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[我|wǒ|I] [喜欢|xǐhuan|like] [手表，|shǒubiǎo,|watches,] [周月|Zhōuyuè|Zhouyue] [也|yě|also] [跟|gēn|like] [我|wǒ|me] [一样，|yíyàng,|the same,] [但是|dànshì|but] [她|tā|she] [更|gèng|more] [喜欢|xǐhuan|likes] [大|dà|big] [一点儿|yìdiǎnr|a bit] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">I like watches, and Zhouyue is the same as me — but she prefers slightly bigger ones.</div>
          <div class="zh stem">★ [周月|Zhōuyuè|Zhouyue] [喜欢|xǐhuan|likes] [手表。|shǒubiǎo.|watches.]</div>
          <div class="sent-en">★ Zhouyue likes watches.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[周月|Zhōu Yuè|Zhou Yue] [也|yě|also] [跟|gēn|(like)] [我|wǒ|me] [一样|yíyàng|the same]」[喜欢|xǐhuan|likes] [手表。|shǒubiǎo|watches.]" data-expl-en="'Zhouyue is the same as me' — she likes watches."></div>
        </div>

        <h4 id="L9-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L9-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这是|zhè shì|this is] [什么时候|shénme shíhou|when] [的|de|(possessive)] [照片？|zhàopiàn?|photo?] [照片上|zhàopiàn shang|in the photo] [的|de|(possessive)] [你|nǐ|you] [跟|gēn|and] [现在|xiànzài|now] [不太一样。|bú tài yíyàng.|not quite the same.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是|shì|it's] [去年|qùnián|last year] [夏天|xiàtiān|summer] [的，|de,|,] [那时候|nà shíhou|at that time] [我|wǒ|I] [是|shì|had] [长头发，|cháng tóufa,|long hair,] [也|yě|also] [比较|bǐjiào|relatively] [瘦。|shòu.|thin.]</div>
          <div class="sent-en">M: When was this photo taken? You look different from now.<br>W: Last summer — I had long hair and was thinner.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [现在|xiànzài|now] [怎么样？|zěnmeyàng?|how is she?]</div>
          <div class="sent-en">Q: How is the woman now?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[变胖了|biàn pàng le|got fatter]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[变瘦了|biàn shòu le|got thinner]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[头发变长了|tóufa biàn cháng le|hair got longer]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[去年|qùnián|Last year she was thinner;] [比较|bǐjiào|(quite)] [瘦，|shòu,|thin,] [现在|xiànzài|now] [不|bù|not] [一样，|yíyàng,|the same,] [说明|shuōmíng|showing] [现在|xiànzài|she’s now] [胖|pàng|fatter] [了。|le|(change)]</div>
        </div>
        <div class="q" id="L9-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [小方，|Xiǎofāng,|Xiaofang,] [我|wǒ|I] [真|zhēn|really] [为|wèi|for] [你|nǐ|you] [高兴，|gāoxìng,|happy,] [希望|xīwàng|hope] [你|nǐ|you] [越学越好。|yuè xué yuè hǎo.|study better and better.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [谢谢|xièxie|thank] [老师，|lǎoshī,|teacher,] [我|wǒ|I] [一定|yídìng|definitely] [努力，|nǔlì,|work hard,] [下次|xià cì|next time] [考试|kǎoshì|exam] [还|hái|still] [拿|ná|get] [第一。|dì yī.|first place.]</div>
          <div class="sent-en">M: Xiaofang, I'm really happy for you — hope you study better and better.<br>W: Thank you, teacher. I'll definitely work hard and get first place again next exam.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[学得不太好|xué de bú tài hǎo|doesn't study well]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不用努力了|búyòng nǔlì le|no need to work hard]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[考了第一|kǎo le dì yī|got first place]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[下次|xià cì|next time] [考试|kǎoshì|exam] [还|hái|still] [拿|ná|take] [第一|dì yī|first place]」[说明|shuōmíng|showing] [这次|zhè cì|this time] [也|yě|also] [拿|ná|took] [了|le|(past)] [第一。|dì yī|first place.]</div>
        </div>
        <div class="q" id="L9-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[男：|Nán:|M:] [妈，|mā,|Mom,] [你|nǐ|your] [的|de|(possessive)] [鱼|yú|fish] [越做越好，|yuè zuò yuè hǎo,|is getting better and better,] [跟|gēn|like] [饭馆|fànguǎn|restaurant] [的|de|(possessive)] [一样|yíyàng|the same] [好吃。|hǎochī.|tasty.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|then] [你|nǐ|you] [多吃点儿，|duō chī diǎnr,|eat more,] [以后|yǐhòu|later] [我|wǒ|I] [每个|měi ge|every] [星期|xīngqī|week] [都|dōu|all] [给|gěi|for] [你|nǐ|you] [做|zuò|make] [一次，|yí cì,|once,] [怎么样？|zěnmeyàng?|how about?]</div>
          <div class="sent-en">M: Mom, your fish is getting better and better — as tasty as a restaurant's.<br>W: Then eat more. I'll make it for you once a week from now on, how about that?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [做鱼|zuò yú|cooks fish] [做|zuò|(cook)] [得|de|(complement)] [怎么样？|zěnmeyàng?|how well?]</div>
          <div class="sent-en">Q: How well does the woman cook fish?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[比饭馆的好吃|bǐ fànguǎn de hǎochī|better than restaurant's]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[特别好吃|tèbié hǎochī|especially tasty]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[没有饭馆的好吃|méiyǒu fànguǎn de hǎochī|not as tasty as restaurant's]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[跟|gēn|(like)] [饭馆|fànguǎn|a restaurant] [的|de|(nominalizer)] [一样|yíyàng|just as] [好吃|hǎochī|delicious]」[说明|shuōmíng|showing] [特别|tèbié|especially] [好吃。|hǎochī|delicious.]</div>
        </div>
        <div class="q" id="L9-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [您好，|nín hǎo,|Hello,] [来|lái|come] [一个|yí ge|one] [西瓜，|xīguā,|watermelon,] [要|yào|want] [甜|tián|sweet] [点儿的，|diǎnr de,|a bit,] [不要|bú yào|don't want] [太大|tài dà|too big] [的。|de.|(nominalizer)]</div>
          <div class="zh stem">[男：|Nán:|M:] [现在|xiànzài|now] [西瓜|xīguā|watermelons] [便宜，|piányi,|are cheap,] [给您|gěi nín|for you] [来个|lái ge|take a] [大|dà|big] [的|de|(nominalizer)] [吧，|ba,|,] [西瓜|xīguā|watermelon] [越大|yuè dà|the bigger] [越甜。|yuè tián.|the sweeter.]</div>
          <div class="sent-en">W: Hello, one watermelon please — a sweet one, not too big.<br>M: Watermelons are cheap now. Let me give you a big one — the bigger, the sweeter.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [什么样|shénmeyàng|What kind of] [的|de|(possessive)] [西瓜|xīguā|watermelon] [比较|bǐjiào|is] [甜？|tián|sweeter?]</div>
          <div class="sent-en">Q: What kind of watermelon is sweeter?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[便宜的|piányi de|cheap ones]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[大的|dà de|big ones]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[小的|xiǎo de|small ones]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[西瓜|xīguā|The bigger the watermelon] [越|yuè|(the)] [大|dà|(bigger)] [越|yuè|the] [甜|tián|sweeter]」。</div>
        </div>
        <div class="q" id="L9-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [汉语|Hànyǔ|Chinese] [只|zhǐ|only] [学了|xué le|studied] [不到|bú dào|less than] [半年，|bàn nián,|half a year,] [说得|shuō de|speak] [这么|zhème|so] [好。|hǎo.|well.] [以前|yǐqián|before] [你|nǐ|you] [不是|bú shì|didn't] [不想学|bù xiǎng xué|want to learn] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [其实|qíshí|actually] [汉语|Hànyǔ|Chinese] [跟|gēn|and] [我|wǒ|I] [以前|yǐqián|before] [想的|xiǎng de|thought] [一点儿也|yìdiǎnr yě|not at all] [不一样，|bù yíyàng,|the same,] [越学|yuè xué|the more you learn] [越|yuè|the more] [有意思，|yǒu yìsi,|interesting,] [也|yě|also] [不|bù|not] [觉得|juéde|feel] [难|nán|difficult] [了。|le.|(change)]</div>
          <div class="sent-en">M: You've only studied Chinese for less than half a year and speak so well. Didn't you not want to learn before?<br>W: Actually, Chinese is completely different from what I thought — the more I learn, the more interesting it gets, and I don't find it difficult anymore.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [以前|yǐqián|before] [觉得|juéde|thought] [汉语|Hànyǔ|Chinese] [怎么样？|zěnmeyàng?|how was it?]</div>
          <div class="sent-en">Q: What did the woman think of Chinese before?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[特别有意思|tèbié yǒu yìsi|especially interesting]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[很容易|hěn róngyì|very easy]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[很难|hěn nán|very difficult]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[现在|xiànzài|She doesn’t find it] [不|bù|not] [觉得|juéde|(find)] [难|nán|hard] [了，|le,|now,] [说明|shuōmíng|showing] [以前|yǐqián|before] [觉得|juéde|she found it] [难。|nán|hard.]</div>
        </div>

        <h4 id="L9-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L9-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [老师，|lǎoshī,|Teacher,] [上次|shàng cì|last time] [比赛|bǐsài|competition] [每个人|měi ge rén|everyone] [要|yào|had to] [讲|jiǎng|speak] [3 分钟，|sān fēnzhōng,|3 minutes,] [这次|zhè cì|this time] [呢？|ne?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [跟|gēn|like] [上次|shàng cì|last time] [一样，|yíyàng,|the same,] [参赛|cānsài|competing] [的|de|(possessive)] [同学|tóngxué|students] [每人|měi rén|each person] [最少|zuìshǎo|at least] [讲|jiǎng|speak] [3 分钟。|sān fēnzhōng.|3 minutes.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [还要|hái yào|also need to] [回答|huídá|answer] [老师|lǎoshī|teacher] [的|de|(possessive)] [问题|wèntí|questions] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [对，|duì,|Yes,] [三个|sān ge|three] [老师|lǎoshī|teachers] [每人|měi rén|each] [问|wèn|ask] [一个|yí ge|one] [问题。|wèntí.|question.] [你|nǐ|you] [一定|yídìng|definitely] [没问题，|méi wèntí,|no problem,] [不用|búyòng|no need to] [担心。|dānxīn.|worry.]</div>
          <div class="sent-en">W: Teacher, last time everyone had to speak for 3 minutes — what about this time?<br>M: Same as last time — each contestant speaks at least 3 minutes.<br>W: Do we also need to answer the teacher's questions?<br>M: Yes, three teachers each ask one question. You'll be fine, don't worry.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [这次|zhè cì|this] [比赛，|bǐsài,|competition,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about this competition?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[每人最少讲3分钟|měi rén zuìshǎo jiǎng sān fēnzhōng|each speaks at least 3 minutes]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[只要回答一个问题|zhǐyào huídá yí ge wèntí|only answer one question]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[没有问题|méiyǒu wèntí|no problem]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[每人|měi rén|Each person] [最少|zuìshǎo|at least] [讲|jiǎng|speaks] 3 [分钟|fēnzhōng|minutes]」。</div>
        </div>
        <div class="q" id="L9-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你好，|nǐ hǎo,|Hello,] [我|wǒ|I] [叫|jiào|am called] [周月。|Zhōuyuè.|Zhouyue.] [你|nǐ|you] [叫|jiào|are called] [什么|shénme|what] [名字？|míngzi?|name?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [叫|jiào|am called] [解东。|Xiè Dōng.|Xie Dong.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [姓|xìng|surname] [什么？|shénme?|what?] [是|shì|is it] [“谢谢”|“xièxie”|"thank you"] [的|de|(possessive)] [“谢”|“xiè”|"Xie"] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [不是，|bú shì,|No,] [跟|gēn|like] [“了解”|“liǎojiě”|"understand"] [的|de|(possessive)] [“解”|“jiě”|"jie"] [一样，|yíyàng,|the same,] [但是|dànshì|but] [做|zuò|as a] [姓|xìng|surname] [的时候|de shíhou|when] [读|dú|read] [“解”。|“xiè”.|"Xie".]</div>
          <div class="sent-en">W: Hello, I'm Zhouyue. What's your name?<br>M: I'm Xie Dong.<br>W: What's your surname? Is it the "Xie" from "thank you"?<br>M: No, it's the same character as "jie" in "understand", but when used as a surname it's read "Xie".</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [姓|xìng|surname] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What is the man's surname?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[周|Zhōu|Zhou]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[谢|Xiè|Xie]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[解|Xiè|Xie]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[姓|xìng|The surname]“[解|Xiè|Xie]”，[读|dú|read]“[Xiè|Xiè|Xie]”。</div>
        </div>
        <div class="q" id="L9-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[男：|Nán:|M:] [刚才|gāngcái|just now] [是|shì|was] [大晴天，|dà qíngtiān,|sunny,] [现在|xiànzài|now] [怎么|zěnme|why] [下雨|xià yǔ|raining] [了，|le,|,] [还|hái|still] [越下越大。|yuè xià yuè dà.|raining harder and harder.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [夏天|xiàtiān|summer] [天气|tiānqì|weather] [变得|biàn de|changes] [快，|kuài,|fast,] [我们|wǒmen|we] [坐|zuò|take] [出租车|chūzūchē|taxi] [回家|huí jiā|home] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [大家|dàjiā|everyone] [想得|xiǎng de|thinks] [都|dōu|all] [跟|gēn|like] [你|nǐ|you] [一样，|yíyàng,|the same,] [你|nǐ|you] [看，|kàn,|look,] [你|nǐ|you] [叫得到|jiào de dào|can hail] [车|chē|car] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|then] [先|xiān|first] [去|qù|go to] [路边|lùbiān|roadside] [小商店|xiǎo shāngdiàn|small shop] [买|mǎi|buy] [把伞|bǎ sǎn|an umbrella] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: It was sunny just now — why is it raining now, and harder and harder?<br>W: Summer weather changes fast. Let's take a taxi home.<br>M: Everyone thinks like you — look, can you even hail one?<br>W: Then let's go to the roadside shop and buy an umbrella first.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [现在|xiànzài|now] [要|yào|are going to] [去|qù|go] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What are they going to do now?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[买伞|mǎi sǎn|buy an umbrella]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[叫出租车|jiào chūzūchē|hail a taxi]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[找朋友|zhǎo péngyou|find a friend]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[先|xiān|First] [去|qù|go to] [路边|lù biān|the roadside] [小商店|xiǎo shāngdiàn|shop] [买|mǎi|to buy] [把|bǎ|(MW)] [伞|sǎn|umbrella] [吧|ba|(suggestion)]」。</div>
        </div>
        <div class="q" id="L9-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你们|nǐmen|you] [去|qù|went] [爬山|pá shān|mountain climbing] [了？|le?|(change)] [怎么样？|zěnmeyàng?|how was it?] [一定|yídìng|must] [很累|hěn lèi|be tired] [吧？|ba?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [越高的地方|yuè gāo de dìfang|the higher places] [越冷，|yuè lěng,|the colder,] [山路|shānlù|mountain road] [也|yě|also] [越难走，|yuè nán zǒu,|the harder to walk,] [但是|dànshì|but] [特别|tèbié|especially] [漂亮。|piàoliang.|beautiful.] [虽然|suīrán|although] [已经|yǐjīng|already] [是|shì|is] [春天|chūntiān|spring] [了，|le,|,] [可是|kěshì|but] [山上|shān shang|on the mountain] [跟|gēn|and] [山下|shān xià|at the foot] [一点儿也|yìdiǎnr yě|not at all] [不一样，|bù yíyàng,|the same,] [还|hái|still] [都是|dōu shì|all are] [白的。|bái de.|white.]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [越听|yuè tīng|the more I hear] [越想|yuè xiǎng|the more I want] [去|qù|to go] [看看，|kàn kan,|see,] [下次|xià cì|next time] [你们|nǐmen|you] [也|yě|also] [带|dài|take] [我|wǒ|me] [一起|yìqǐ|together] [去|qù|go] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好，|hǎo,|OK,] [下次|xià cì|next time] [去|qù|go] [一定|yídìng|definitely] [告诉|gàosu|tell] [你。|nǐ.|you.]</div>
          <div class="sent-en">M: You went mountain climbing? How was it? Must have been tiring.<br>W: The higher, the colder, and the mountain road gets harder to walk — but it's especially beautiful. Although it's already spring, the mountain is completely different from the foot — it's still all white.<br>M: The more I hear, the more I want to go. Take me along next time.<br>W: OK, I'll definitely tell you next time.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [这次|zhè cì|this] [爬山，|pá shān,|climb,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about this mountain climb?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[山下下雪了|shān xià xià xuě le|it snowed at the foot]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[山上有雪|shān shang yǒu xuě|there's snow on the mountain]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[山路好走|shānlù hǎo zǒu|the mountain road is easy]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[山上|shān shang|The mountain] [还|hái|is still] [都|dōu|all] [是|shì|(is)] [白|bái|white] [的|de|(nominalizer)]」[说明|shuōmíng|showing] [山上|shān shang|the mountain] [有|yǒu|has] [雪。|xuě|snow.]</div>
        </div>
        <div class="q" id="L9-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [天气|tiānqì|weather] [真|zhēn|really] [热，|rè,|hot,] [我们|wǒmen|we] [喝点儿|hē diǎnr|drink some] [东西|dōngxi|things] [吧，|ba,|,] [给|gěi|for] [你|nǐ|you] [饮料。|yǐnliào.|a drink.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [谢谢，|xièxie,|Thanks,] [我|wǒ|I] [带了|dài le|brought] [热茶。|rè chá.|hot tea.]</div>
          <div class="zh stem">[男：|Nán:|M:] [夏天|xiàtiān|summer] [喝|hē|drink] [热茶，|rè chá,|hot tea,] [那|nà|then] [不是|bú shì|isn't it] [越喝|yuè hē|the more you drink] [越热|yuè rè|the hotter] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [中国人|Zhōngguó rén|Chinese people] [跟|gēn|and] [你们|nǐmen|you] [不太一样，|bú tài yíyàng,|are not quite the same,] [天气|tiānqì|weather] [越热，|yuè rè,|the hotter,] [我们|wǒmen|we] [越|yuè|the more] [想|xiǎng|want] [喝|hē|to drink] [点儿|diǎnr|a bit] [热的，|rè de,|hot things,] [比较|bǐjiào|relatively] [舒服。|shūfu.|comfortable.]</div>
          <div class="sent-en">M: It's so hot — let's drink something. Here's a drink for you.<br>W: Thanks, I brought hot tea.<br>M: Drinking hot tea in summer — doesn't it make you hotter?<br>W: Chinese people are different from you — the hotter the weather, the more we want something hot; it feels more comfortable.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [天气|tiānqì|When the weather] [热|rè|is hot] [的|de|(possessive)] [时候，|shíhou,|time,] [女的|nǚde|what does the woman] [喝|hē|drink] [什么？|shénme?|(what)?]</div>
          <div class="sent-en">Q: What does the woman drink when the weather is hot?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[喝热的|hē rè de|drinks hot]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不喝热的|bù hē rè de|doesn't drink hot]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[喝饮料|hē yǐnliào|drinks beverages]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[天气|tiānqì|The hotter the weather,] [越|yuè|(the)] [热，|rè,|hotter,] [我们|wǒmen|the more] [越|yuè|(the)] [想|xiǎng|we want] [喝|hē|to drink] [点儿|diǎnr|some] [热|rè|hot] [的|de|(nominalizer)]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L9-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L9-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[快睡吧，|kuài shuì ba,|Go to sleep,] [明天|míngtiān|tomorrow] [还要|hái yào|still need to] [上班|shàngbān|work] [呢。|ne.|(emphasis)]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[请|qǐng|please] [给|gěi|to] [我|wǒ|me] [一杯|yì bēi|a cup of] [热咖啡，|rè kāfēi,|hot coffee,] [不要|bú yào|no] [牛奶。|niúnǎi.|milk.] [你|nǐ|you] [要|yào|want to] [喝|hē|drink] [什么？|shénme?|what?]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[我|wǒ|I] [太冷|tài lěng|too cold] [了，|le,|,] [想|xiǎng|want to] [快点儿|kuài diǎnr|quickly] [回家。|huí jiā.|go home.]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[小方，|Xiǎofāng,|Xiaofang,] [你|nǐ|you] [是|shì|are] [南方人|nánfāng rén|from the South] [还是|háishi|or] [北方人？|běifāng rén?|from the North?]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[我|wǒ|I] [看|kàn|see] [你们家|nǐmen jiā|your family] [孩子|háizi|child] [很|hěn|very] [爱|ài|loves] [唱歌|chànggē|singing] [啊。|a.|(exclamation)]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [去|qù|go] [那儿|nàr|there] [吗？|ma?|(question)] （E）</div>
          <div class="sent-en">Do you know how to get there? — (E) Of course. We take the bus first, then transfer to the subway.</div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L9-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[跟你|gēn nǐ|like you] [一样，|yíyàng,|the same,] [也要|yě yào|also want] [咖啡，|kāfēi,|coffee,] [但是|dànshì|but] [我|wǒ|I] [要|yào|want to] [放|fàng|put] [一些|yìxiē|some] [牛奶。|niúnǎi.|milk.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Same as you, coffee — but I want some milk in it.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L9-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[我|wǒ|I] [跟|gēn|with] [您|nín|you] [一样，|yíyàng,|the same,] [都是|dōu shì|are both] [从|cóng|from] [南方|nánfāng|the South] [来|lái|came] [的。|de.|(nominalizer)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Like you, I'm also from the South.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L9-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[你|nǐ|you] [怎么|zěnme|why] [越走越快？|yuè zǒu yuè kuài?|walking faster and faster?] [等等|děng deng|wait for] [我。|wǒ.|me.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Why are you walking faster and faster? Wait for me.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L9-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[对，|duì,|Yes,] [跟|gēn|like] [他爸爸|tā bàba|his dad] [一样，|yíyàng,|the same,] [都|dōu|both] [对|duì|to] [音乐|yīnyuè|music] [感兴趣。|gǎn xìngqù.|interested.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Yes, like his dad, both are interested in music.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L9-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[小月|Xiǎoyuè|Xiaoyue] [还没|hái méi|hasn't] [回来，|huílái,|come back,] [我|wǒ|I] [有点儿|yǒudiǎnr|a bit] [不放心，|bú fàngxīn,|worried,] [再|zài|again] [等等，|děng deng,|wait,] [你|nǐ|you] [先|xiān|first] [睡。|shuì.|sleep.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Xiaoyue hasn't come back yet — I'm a bit worried. Wait a bit more; you go to sleep first.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L9-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L9-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[班|bān|class]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[中间|zhōngjiān|middle]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[了解|liǎojiě|understand]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[一样|yíyàng|the same]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[比较|bǐjiào|relatively]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[她|tā|she] [说话|shuōhuà|speaks] [的|de|(possessive)] （E [声音|shēngyīn|voice]） [多|duō|how] [好听|hǎotīng|nice] [啊！|a!|!]</div>
          <div class="sent-en">Her voice is so nice!</div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L9-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[你看，|nǐ kàn,|Look,] [这|zhè|these] [两个|liǎng ge|two] [汉字|Hànzì|Chinese characters] [是不是|shì bú shì|are they] （<span class="blank">　</span>） [的？|de?|the same?]</div>
          <div class="sent-en">Look, are these two Chinese characters the same?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L9-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[站在|zhàn zài|standing in] （<span class="blank">　</span>） [的|de|(possessive)] [人|rén|person] [叫|jiào|is called] [周明，|Zhōu Míng,|Zhou Ming,] [他|tā|he] [是|shì|is] [我们公司|wǒmen gōngsī|our company] [的|de|(possessive)] [经理。|jīnglǐ.|manager.]</div>
          <div class="sent-en">The person standing in the middle is Zhou Ming, our company's manager.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L9-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[外边|wàibiān|outside] （<span class="blank">　</span>） [冷，|lěng,|cold,] [你|nǐ|you] [多|duō|more] [穿|chuān|wear] [一件|yí jiàn|one] [衣服|yīfu|clothes] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">It's relatively cold outside — wear an extra layer.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L9-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [刚才|gāngcái|just now] [那个|nàge|that] [人，|rén,|person,] [你|nǐ|you] [认识|rènshi|know] [吗？|ma?|(question)]</div>
          <div class="zh">[B：|B:|B:] [我|wǒ|I] [知道|zhīdào|know] [他|tā|his] [的|de|(possessive)] [名字，|míngzi,|name,] [但是|dànshì|but] [不|bù|not] （<span class="blank">　</span>） [他。|tā.|him.]</div>
          <div class="sent-en">A: Do you know that person just now?<br>B: I know his name, but I don't know him well.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L9-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [你们|nǐmen|your] （<span class="blank">　</span>） [有|yǒu|has] [多少|duōshao|how many] [个|ge|(MW)] [学生？|xuésheng?|students?]</div>
          <div class="zh">[B：|B:|B:] [以前|yǐqián|before] [是|shì|was] [16 个，|shíliù ge,|16,] [昨天|zuótiān|yesterday] [来了|lái le|came] [个|ge|(MW)] [新同学，|xīn tóngxué,|new student,] [现在|xiànzài|now] [是|shì|is] [17 个。|shíqī ge.|17.]</div>
          <div class="sent-en">A: How many students are in your class?<br>B: It used to be 16; a new student came yesterday, now it's 17.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L9-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L9-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[跟|gēn|Like] [哥哥|gēge|elder brother] [一样，|yíyàng,|the same,] [我|wǒ|I] [也|yě|also] [觉得|juéde|feel] [对|duì|to] [我|wǒ|me] [影响|yǐngxiǎng|influence] [最大|zuì dà|greatest] [的|de|(possessive)] [人|rén|person] [是|shì|is] [妈妈。|māma.|Mom.] [从|cóng|from] [我们|wǒmen|we] [学说话、|xué shuōhuà,|learning to speak,] [学走路|xué zǒulù|learning to walk] [时|shí|when] [开始，|kāishǐ,|start,] [妈妈|māma|Mom] [每天|měitiān|every day] [跟|gēn|with] [我们|wǒmen|us] [在一起，|zài yìqǐ,|together,] [最|zuì|most] [重要|zhòngyào|important] [的|de|(possessive)] [是|shì|is] [她|tā|she] [告诉|gàosu|tells] [我们|wǒmen|us] [怎样|zěnyàng|how] [做人|zuòrén|be a person]——[做|zuò|be] [一个|yí ge|a] [好人。|hǎorén.|good person.]</div>
          <div class="sent-en">Like my elder brother, I feel the person who influenced me most is Mom. From when we learned to speak and walk, Mom was with us every day. Most importantly, she taught us how to be a person — a good person.</div>
          <div class="zh ask">★ [妈妈|māma|Mom]：</div>
          <div class="sent-en">★ Mom: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[是老师|shì lǎoshī|is a teacher]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[对我很重要|duì wǒ hěn zhòngyào|is very important to me]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[跟哥哥一样|gēn gēge yíyàng|same as elder brother]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[对|duì|Had the greatest] [我|wǒ|(on me)] [影响|yǐngxiǎng|influence] [最大|zuì dà|(the greatest)] → [很|hěn|very] [重要。|zhòngyào|important.]</div>
        </div>
        <div class="q" id="L9-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[听到|tīngdào|Hearing] [“你中文说得真好”|“nǐ Zhōngwén shuō de zhēn hǎo”|"You speak Chinese so well"] [“你真漂亮”|“nǐ zhēn piàoliang”|"You're so pretty"] [时，|shí,|when,] [外国人|wàiguórén|foreigners] [总是|zǒngshì|always] [说|shuō|say] [“谢谢”。|“xièxie”.|"Thank you".] [中国人|Zhōngguó rén|Chinese people] [跟|gēn|and] [外国人|wàiguórén|foreigners] [不一样，|bú yíyàng,|are different,] [我们|wǒmen|we] [说|shuō|say] [“哪里哪里”，|“nǎli nǎli”,|"You flatter me",] [这|zhè|this] [不是|bú shì|is not] [在|zài|in] [问|wèn|asking] [“在哪儿”，|“zài nǎr”,|"where",] [是|shì|is] [客气。|kèqi.|being polite.]</div>
          <div class="sent-en">When foreigners hear "You speak Chinese so well" or "You're so pretty", they always say "Thank you". Chinese people are different — we say "Nǎli nǎli", which isn't asking "where", it's being polite.</div>
          <div class="zh ask">★ [听到|tīngdào|When hearing]“[你|nǐ|the food you] [做|zuò|make] [的|de|(possessive)] [饭|fàn|(food)] [几乎|jīhū|is almost] [跟|gēn|(like)] [饭馆|fànguǎn|a restaurant] [一样|yíyàng|the same]”[时，|shí,|(when),] [中国人|Zhōngguó rén|what might Chinese people] [可能|kěnéng|(might)] [做|zuò|do] [什么？|shénme?|(what)?]</div>
          <div class="sent-en">★ When hearing “the food you make is almost as good as a restaurant's”, what might Chinese people do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[说“谢谢”|shuō “xièxie”|say "thanks"]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不说话|bù shuōhuà|say nothing]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[说“哪里哪里”|shuō “nǎli nǎli”|say "you flatter me"]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[中国人|Zhōngguó rén|Chinese people] [会|huì|will] [说|shuō|say]“[哪里哪里|nǎli nǎli|you flatter me]”[表示|biǎoshì|to show] [客气。|kèqi|politeness.]</div>
        </div>
        <div class="q" id="L9-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[我女儿|wǒ nǚ'ér|My daughter] [和|hé|and] [白先生|Bái xiānsheng|Mr. Bai] [的|de|(possessive)] [儿子|érzi|son] [在|zài|at] [一个|yí ge|the same] [学校|xuéxiào|school] [上学。|shàngxué.|study.] [他儿子|tā érzi|His son] [跟|gēn|and] [我女儿|wǒ nǚ'ér|my daughter] [一样，|yíyàng,|the same,] [都|dōu|both] [上|shàng|are in] [三年级，|sān niánjí,|third grade,] [但是|dànshì|but] [不同班。|bù tóng bān.|different classes.] [他家孩子|tā jiā háizi|His child] [在|zài|is in] [一班，|yī bān,|Class 1,] [我女儿|wǒ nǚ'ér|my daughter] [在|zài|is in] [四班。|sì bān.|Class 4.] [课间|kèjiān|During break] [十分钟，|shí fēnzhōng,|10 minutes,] [他们|tāmen|they] [总是|zǒngshì|always] [一起|yìqǐ|together] [玩儿，|wánr,|play,] [跟|gēn|like] [同班同学|tóngbān tóngxué|classmates] [一样。|yíyàng.|the same.]</div>
          <div class="sent-en">My daughter and Mr. Bai's son study at the same school. His son, like my daughter, is in third grade, but different classes. His child is in Class 1, my daughter in Class 4. During the 10-minute break, they always play together like classmates.</div>
          <div class="zh ask">★ [白先生|Bái xiānsheng|Mr. Bai] [的|de|(possessive)] [儿子：|érzi:|son:]</div>
          <div class="sent-en">★ Mr. Bai's son: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[和我是同学|hé wǒ shì tóngxué|is my classmate]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[和我女儿同班|hé wǒ nǚ'ér tóng bān|in the same class as my daughter]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[课间总和我女儿见面|kèjiān zǒng hé wǒ nǚ'ér jiànmiàn|always meets my daughter during break]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[课间|kèjiān|During the ten-minute] [十分钟，|shí fēnzhōng,|break,] [他们|tāmen|they] [总是|zǒngshì|always] [一起|yìqǐ|together] [玩儿|wánr|play]」。</div>
        </div>
        <div class="q" id="L9-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[学汉语|xué Hànyǔ|Learning Chinese] [时|shí|when] [要|yào|need to] [多听、|duō tīng,|listen more,] [多说。|duō shuō.|speak more.] [有人|yǒurén|Some people] [害怕|hàipà|fear] [说错，|shuō cuò,|saying wrong,] [所以|suǒyǐ|so] [不爱说。|bú ài shuō.|don't like to speak.] [其实|qíshí|Actually] [越害怕|yuè hàipà|the more afraid] [越|yuè|the more] [不想说，|bù xiǎng shuō,|don't want to speak,] [越不想说|yuè bù xiǎng shuō|the more you don't want to speak] [越说不好。|yuè shuō bu hǎo.|the worse you speak.] [说错了|shuō cuò le|If you say it wrong] [没关系，|méi guānxi,|it doesn't matter,] [这次|zhè cì|this time] [错了，|cuò le,|wrong,] [下次|xià cì|next time] [一定|yídìng|definitely] [不会|bú huì|won't] [再错。|zài cuò.|be wrong again.]</div>
          <div class="sent-en">When learning Chinese, you need to listen and speak more. Some people are afraid of saying wrong things, so they don't like to speak. Actually, the more afraid you are, the less you want to speak; the less you speak, the worse you speak. It's OK to make mistakes — wrong this time, definitely not wrong next time.</div>
          <div class="zh ask">★ [学|xué|When learning] [汉语|Hànyǔ|Chinese] [时|shí|(when)] [不能：|bùnéng:|you mustn’t:]</div>
          <div class="sent-en">★ When learning Chinese, you mustn't: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[说错|shuō cuò|say wrong things]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[说不好|shuō bu hǎo|speak poorly]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[怕说错|pà shuō cuò|be afraid of saying wrong things]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[有人|yǒurén|some people] [害怕|hàipà|are afraid] [说错，|shuō cuò,|of making mistakes,] [所以|suǒyǐ|so] [不爱说|bú ài shuō|don’t like to speak]」→ [不能|bùnéng|mustn’t] [怕|pà|be afraid of] [说错。|shuō cuò|making mistakes.]</div>
        </div>
        <div class="q" id="L9-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[小时候，|xiǎo shíhou,|When I was little,] [我女儿|wǒ nǚ'ér|my daughter] [说|shuō|said] [她爸爸|tā bàba|her dad] [不|bù|didn't] [喜欢|xǐhuan|like] [她，|tā,|her,] [因为|yīnwèi|because] [爸爸|bàba|Dad] [没|méi|never] [说过|shuō guò|said] [“女儿，|“nǚ'ér,|"Daughter,] [我爱你”，|wǒ ài nǐ”,|I love you",] [也|yě|also] [不|bù|not] [说|shuō|say] [她|tā|her] [漂亮。|piàoliang.|pretty.] [现在，|xiànzài,|Now,] [女儿|nǚ'ér|daughter] [跟|gēn|and] [以前|yǐqián|before] [不一样了，|bù yíyàng le,|is different,] [因为|yīnwèi|because] [她|tā|she] [了解：|liǎojiě:|understands:] [其实|qíshí|actually] [爸爸|bàba|Dad] [跟|gēn|and] [妈妈|māma|Mom] [一样|yíyàng|the same] [爱|ài|loves] [她，|tā,|her,] [只是|zhǐshì|only] [爸爸|bàba|Dad] [不|bù|doesn't] [说，|shuō,|say it,] [都|dōu|all] [在|zài|in] [心里。|xīnlǐ.|his heart.]</div>
          <div class="sent-en">When my daughter was little, she said her dad didn't like her because he never said "Daughter, I love you" or called her pretty. Now she's different because she understands: Dad loves her just like Mom, he just doesn't say it — it's all in his heart.</div>
          <div class="zh ask">★ [现在，|xiànzài,|Now,] [女儿：|nǚ’ér:|the daughter:]</div>
          <div class="sent-en">★ Now, the daughter: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不爱爸爸|bú ài bàba|doesn't love Dad]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不了解爸爸|bù liǎojiě bàba|doesn't understand Dad]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[知道爸爸很爱她|zhīdào bàba hěn ài tā|knows Dad loves her very much]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[其实|qíshí|Actually,] [爸爸|bàba|Dad] [跟|gēn|(like)] [妈妈|māma|Mom] [一样|yíyàng|equally] [爱|ài|loves] [她|tā|her]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L9-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L9-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[快|kuài|fast] [越|yuè|the more] [那辆车|nà liàng chē|that car] [开|kāi|drives] [越|yuè|the more]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[那辆|nà liàng|That] [车|chē|car] [越|yuè|drives] [开|kāi|(drives)] [越|yuè|faster and] [快。|kuài|faster.]<div class="sent-en">That car drives faster and faster.</div></div>
        </div>
        <div class="write-item" id="L9-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[跟|gēn|with] [我弟弟|wǒ dìdi|my younger brother] [妈妈|māma|Mom] [高|gāo|tall] [一样|yíyàng|the same]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|My] [弟弟|dìdi|brother] [跟|gēn|is as] [妈妈|māma|Mom] [一样|yíyàng|(as)] [高。|gāo|tall.]<div class="sent-en">My younger brother is as tall as Mom.</div></div>
        </div>
        <div class="write-item" id="L9-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[越|yuè|the more] [我和老同学|wǒ hé lǎo tóngxué|my old classmate and I] [高兴|gāoxìng|happy] [聊|liáo|chat] [越|yuè|the more]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|My old classmate and I] [和|hé|(and)] [老同学|lǎo tóngxué|(old classmate)] [越|yuè|got] [聊|liáo|happier] [越|yuè|(the)] [高兴。|gāoxìng|more we chatted.]<div class="sent-en">My old classmate and I chat more and more happily.</div></div>
        </div>
        <div class="write-item" id="L9-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[新鲜|xīnxiān|fresh] [苹果|píngguǒ|apple] [西瓜|xīguā|watermelon] [跟|gēn|and] [一样|yíyàng|the same]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[苹果|píngguǒ|Apples] [跟|gēn|are as] [西瓜|xīguā|watermelon] [一样|yíyàng|(as)] [新鲜。|xīnxiān|fresh.]<div class="sent-en">Apples are as fresh as watermelons.</div></div>
        </div>
        <div class="write-item" id="L9-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[吃甜的|chī tián de|eat sweet things] [越|yuè|the more] [越|yuè|the more] [你|nǐ|you] [身体|shēntǐ|body] [胖|pàng|fat]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|The more sweets] [越|yuè|(the)] [吃|chī|you eat,] [甜|tián|sweet] [的|de|(nominalizer)] [身体|shēntǐ|(your body)] [越|yuè|(the)] [胖。|pàng|fatter you get.]<div class="sent-en">The more sweets you eat, the fatter you get.</div></div>
        </div>

        <h4 id="L9-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L9-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[妈，|mā,|Mom,] [给|gěi|to] [你|nǐ|you] [介绍|jièshào|introduce] [一下，|yíxià,|a bit,] [这|zhè|this] [是|shì|is] [我们|wǒmen|our] <span class="blank-input"><span class="input-py">bān</span><input type="text" data-ans="班"></span> [同学|tóngxué|classmate] [白乐。|Bái Lè.|Bai Le.]</div>
          <div class="sent-en">Mom, let me introduce — this is our classmate Bai Le.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[班|bān|class]</span></div>
        </div>
        <div class="write-item" id="L9-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[这么小的|zhème xiǎo de|such a young] [孩子|háizi|child] [一个人|yí ge rén|alone] [在家，|zài jiā,|at home,] [我|wǒ|I] [能|néng|can] [不|bù|not] <span class="blank-input"><span class="input-py">dān</span><input type="text" data-ans="担"></span> [心吗？|xīn ma?|worry?]</div>
          <div class="sent-en">Such a young child alone at home — how can I not worry?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[担|dān|carry]（[担心|dānxīn|worry]）</span></div>
        </div>
        <div class="write-item" id="L9-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[这个|zhège|this] [地方|dìfang|place] [环境|huánjìng|environment] [比|bǐ|than] <span class="blank-input"><span class="input-py">jiào</span><input type="text" data-ans="较"></span> [安静，|ānjìng,|quiet,] [没有|méiyǒu|no] [那么|nàme|so] [多|duō|many] [车。|chē.|cars.]</div>
          <div class="sent-en">This place's environment is relatively quiet — not so many cars.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[较|jiào|relatively]（[比较|bǐjiào|relatively]）</span></div>
        </div>
        <div class="write-item" id="L9-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[其实，|qíshí,|Actually,] [我|wǒ|I] [只|zhǐ|only] [跟|gēn|with] [这个|zhège|this] [人|rén|person] [见过|jiàn guò|met] [一两次面，|yì liǎng cì miàn,|once or twice,] [一点儿也|yìdiǎnr yě|not at all] [不|bù|not] [了|liǎo|understand] <span class="blank-input"><span class="input-py">jiě</span><input type="text" data-ans="解"></span> [她。|tā.|her.]</div>
          <div class="sent-en">Actually, I've only met this person once or twice — I don't know her at all.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[解|jiě|understand]（[了解|liǎojiě|understand]）</span></div>
        </div>
        <div class="write-item" id="L9-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[我|wǒ|I] <span class="blank-input"><span class="input-py">cān</span><input type="text" data-ans="参"></span> [加过|jiā guò|participated in] [三次|sān cì|three times] [比赛，|bǐsài,|competitions,] [拿了|ná le|got] [两次|liǎng cì|twice] [第一，|dì yī,|first place,] [一次|yí cì|once] [第二。|dì èr.|second place.]</div>
          <div class="sent-en">I've participated in three competitions — got first place twice, second once.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[参|cān|participate]（[参加|cānjiā|participate]）</span></div>
        </div>

        <h4 id="L9-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L9-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[别|bié|don't] <span class="blank-input"><input type="text" data-ans="担"></span> [心，|xīn,|worry,] [虽然|suīrán|although] [题|tí|questions] [很多，|hěnduō,|many,] <span class="blank-input"><input type="text" data-ans="但"></span> [是|shì|but] [我|wǒ|I] [一定|yídìng|definitely] [能|néng|can] [做完。|zuò wán.|finish.]</div>
          <div class="zh" style="margin-top:6px;">[担|dān|carry]　[但|dàn|but]</div>
          <div class="sent-en">Don't worry — although there are many questions, I can definitely finish.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[担|dān|(as in 担心 “worry”)]、[但|dàn|(as in 但是 “but”)]</div>
        </div>
        <div class="write-item" id="L9-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[这个|zhège|this] [学|xué|school] <span class="blank-input"><input type="text" data-ans="校"></span> [的|de|(possessive)] [汉语|Hànyǔ|Chinese] [老师|lǎoshī|teacher] [比|bǐ|than] <span class="blank-input"><input type="text" data-ans="较"></span> [好，|hǎo,|good,] [我们|wǒmen|we] [在|zài|at] [这儿|zhèr|here] [学|xué|study] [吧。|ba.|(suggestion)]</div>
          <div class="zh" style="margin-top:6px;">[校|xiào|school]　[较|jiào|relatively]</div>
          <div class="sent-en">This school's Chinese teacher is relatively good — let's study here.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[校|xiào|(as in 学校 “school”)]、[较|jiào|(as in 比较 “relatively”)]</div>
        </div>
        <div class="write-item" id="L9-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[请|qǐng|please] <span class="blank-input"><input type="text" data-ans="问"></span>，[这儿|zhèr|here] [有人|yǒu rén|is anyone] [吗？|ma?|(question)] [我|wǒ|I] [能|néng|can] [坐|zuò|sit] [在|zài|at] [你们|nǐmen|your] [中|zhōng|middle] <span class="blank-input"><input type="text" data-ans="间"></span> [吗？|ma?|(question)]</div>
          <div class="zh" style="margin-top:6px;">[问|wèn|ask]　[间|jiān|between]</div>
          <div class="sent-en">Excuse me, is anyone here? Can I sit between you?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[问|wèn|(as in 问题 “question”)]、[间|jiān|(as in 洗手间 “bathroom”)]</div>
        </div>
        <div class="write-item" id="L9-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[我|wǒ|I] [去|qù|go] [问问|wèn wen|ask] [我|wǒ|my] <span class="blank-input"><input type="text" data-ans="丈"></span> [夫|fu|husband] [去|qù|go] [吧，|ba,|,] [他|tā|he] [学过|xué guò|studied] [中|zhōng|Chinese] <span class="blank-input"><input type="text" data-ans="文"></span>，[能|néng|can] [看懂|kàn dǒng|understand] [这个。|zhège.|this.]</div>
          <div class="zh" style="margin-top:6px;">[丈|zhàng|husband]　[文|wén|writing]</div>
          <div class="sent-en">Let me go ask my husband — he's studied Chinese and can understand this.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[丈|zhàng|(as in 丈夫 “husband”)]、[文|wén|(as in 中文 “Chinese”)]</div>
        </div>
        <div class="write-item" id="L9-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[给|gěi|for] [我|wǒ|me] [买|mǎi|buy] [杯|bēi|a cup of] <span class="blank-input"><input type="text" data-ans="咖"></span> [啡|fēi|coffee] [吧，|ba,|,] [一会儿|yíhuìr|in a moment] [我|wǒ|I] [要|yào|will] [参|cān|participate] <span class="blank-input"><input type="text" data-ans="加"></span> [一个|yí ge|an] [面试。|miànshì.|interview.]</div>
          <div class="zh" style="margin-top:6px;">[咖|kā|coffee]　[加|jiā|add]</div>
          <div class="sent-en">Buy me a coffee — I have an interview soon.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[咖|kā|(as in 咖啡 “coffee”)]、[加|jiā|(as in 参加 “take part”)]</div>
        </div>

        <h4 id="L9-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L9-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[住|zhù|live] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[住在|zhù zài|live in]、[住房|zhùfáng|housing]</div></div>
        </div>
        <div class="write-item" id="L9-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[请|qǐng|please] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[请坐|qǐng zuò|please sit]、[请问|qǐngwèn|may I ask]</div></div>
        </div>
        <div class="write-item" id="L9-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[放|fàng|put] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[放学|fàngxué|school is over]、[放心|fàngxīn|rest assured]</div></div>
        </div>
        <div class="write-item" id="L9-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[歌|gē|song] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[唱歌|chànggē|sing]、[老歌|lǎogē|old song]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L9-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [大山|Dàshān|Dashan] [觉得|juéde|feels] [马可|Mǎkě|Marco] [的|de|(possessive)] [汉语|Hànyǔ|Chinese]
            <span class="blank-input review-blank"><span class="input-py">yuè shuō yuè hǎo</span><input type="text" data-ans="越说越好"></span>
            [了，|le,|,] [但是|dànshì|but] [马可|Mǎkě|Marco] [觉得|juéde|feels] [他们|tāmen|their]
            <span class="blank-input review-blank"><span class="input-py">bān</span><input type="text" data-ans="班"></span>
            [李静|Lǐ Jìng|Li Jing] [的|de|(possessive)] [汉语|Hànyǔ|Chinese] [更好，|gèng hǎo,|is better,] [说得|shuō de|speaks]
            <span class="blank-input review-blank"><span class="input-py">gēn</span><input type="text" data-ans="跟"></span>
            [中国人|Zhōngguó rén|Chinese people]
            <span class="blank-input review-blank"><span class="input-py">yíyàng hǎo</span><input type="text" data-ans="一样好"></span>。
            [大山|Dàshān|Dashan] [没|méi|never] [听说过|tīngshuō guò|heard of] [李静|Lǐ Jìng|Li Jing] [这个|zhège|this] [名字，|míngzi,|name,] [其实，|qíshí,|actually,] [李静|Lǐ Jìng|Li Jing] [是|shì|is] [马可|Mǎkě|Marco] [的|de|(possessive)]
            <span class="blank-input review-blank"><span class="input-py">Hànyǔ</span><input type="text" data-ans="汉语"></span>
            [老师。|lǎoshī.|teacher.]</div>
          <div class="sent-en">Dashan feels Marco's Chinese is getting better and better, but Marco feels their classmate Li Jing's Chinese is even better — she speaks as well as a Chinese person. Dashan has never heard of Li Jing; actually, Li Jing is Marco's Chinese teacher.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[越说越好|yuè shuō yuè hǎo|better and better]、[班|bān|class]、[跟|gēn|like]、[一样好|yíyàng hǎo|as well as]、[汉语|Hànyǔ|Chinese]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小丽|Xiǎolì|Xiaoli] [爬山|pá shān|climbing] [的|de|(possessive)] [时候|shíhou|when] [有点儿|yǒudiǎnr|a bit] [害怕，|hàipà,|afraid,] [因为|yīnwèi|because] [山|shān|mountain] [越高，|yuè gāo,|the higher,] [路|lù|road] [越难走，|yuè nán zǒu,|the harder,] [她|tā|she]
            <span class="blank-input review-blank"><span class="input-py">yuè pá yuè lěng</span><input type="text" data-ans="越爬越冷"></span>。
            [小刚|Xiǎogāng|Xiaogang] [对|duì|to] [这儿|zhèr|here] [比较|bǐjiào|relatively]
            <span class="blank-input review-blank"><span class="input-py">liǎojiě</span><input type="text" data-ans="了解"></span>，[他|tā|he] [让|ràng|let] [小丽|Xiǎolì|Xiaoli] [别|bié|don't]
            <span class="blank-input review-blank"><span class="input-py">dānxīn</span><input type="text" data-ans="担心"></span>。[他们|tāmen|they] [现在|xiànzài|now]
            <span class="blank-input review-blank"><span class="input-py">xiān</span><input type="text" data-ans="先"></span>
            [休息|xiūxi|rest] [一下，|yíxià,|a bit,] [一会儿|yíhuìr|in a moment] [从|cóng|from] [那条路|nà tiáo lù|that road] [上去。|shàngqù.|go up.]</div>
          <div class="sent-en">Xiaoli was a bit scared when climbing — the higher the mountain, the harder the road, and the colder she got. Xiaogang knows this place relatively well; he told Xiaoli not to worry. They'll rest first, then go up that road in a moment.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[越爬越冷|yuè pá yuè lěng|colder and colder as she climbs]、[了解|liǎojiě|understand]、[担心|dānxīn|worry]、[先|xiān|first]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[10] = {
  navLabel:'第10课',
  html: `
    <div class="lesson">
      <h2>第 10 课　数学比历史难多了
        <span class="title-py">Dì shí kè · Shùxué bǐ lìshǐ nán duō le</span>
        <small>Lesson 10 · Maths is much harder than history</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L10-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图10.png" alt="听力图10" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图10.png</b></span>
        </div>

        <div class="q" id="L10-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[男：|Nán:|M:] [妈，|mā,|Mom,] [你看，|nǐ kàn,|look,] [给|gěi|to] [笑笑|Xiàoxiao|Xiaoxiao] [讲题|jiǎng tí|explain questions] [的|de|(possessive)] [那个|nàge|that person] [就是|jiùshì|is] [我们班|wǒmen bān|our class] [数学|shùxué|math] [老师。|lǎoshī.|teacher.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [她|tā|she] [个子|gèzi|height] [真|zhēn|really] [高，|gāo,|tall,] [讲得|jiǎng de|explains] [怎么样？|zěnmeyàng?|how?]</div>
          <div class="sent-en">M: Mom, look — the one explaining questions to Xiaoxiao is our math teacher.<br>W: She's really tall. How does she teach?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[老师|lǎoshī|a teacher] [在|zài|in front of] [黑板|hēibǎn|the blackboard] [前|qián|(front)] [讲题|jiǎng tí|explaining the problems]）</div>
        </div>
        <div class="q" id="L10-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [喂，|wèi,|Hello,] [你|nǐ|you] [听得见|tīng de jiàn|can hear] [我|wǒ|me] [说话|shuōhuà|speak] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [喂，|wèi,|Hello,] [喂，|wèi,|hello,] [你|nǐ|you] [等|děng|wait] [一会儿，|yíhuìr,|a moment,] [我|wǒ|I] [找个|zhǎo ge|find a] [安静|ānjìng|quiet] [点儿的|diǎnr de|a bit] [地方|dìfang|place] [再|zài|then] [跟|gēn|with] [你|nǐ|you] [说。|shuō.|talk.]</div>
          <div class="sent-en">W: Hello, can you hear me?<br>M: Hello, hello, wait a moment — let me find a quieter place to talk.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[一个人|yí ge rén|a person] [在|zài|is] [打电话|dǎ diànhuà|on the phone]）</div>
        </div>
        <div class="q" id="L10-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[男：|Nán:|M:] [谢谢|xièxie|thank] [你们|nǐmen|you] [请|qǐng|invite] [我们|wǒmen|us] [吃饭，|chīfàn,|eat,] [这家|zhè jiā|this] [饭馆|fànguǎn|restaurant] [的|de|(possessive)] [环境|huánjìng|environment] [真好，|zhēn hǎo,|is really good,] [菜|cài|dishes] [也|yě|also] [很好吃，|hěn hǎochī,|very tasty,] [特别是|tèbié shì|especially] [主菜。|zhǔcài.|main course.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [很|hěn|very] [高兴|gāoxìng|happy] [你们|nǐmen|you] [喜欢|xǐhuan|like] [这个|zhège|this] [地方，|dìfang,|place,] [下次|xià cì|next time] [我们|wǒmen|we] [再|zài|again] [来。|lái.|come.]</div>
          <div class="sent-en">M: Thanks for inviting us to dinner — this restaurant's environment is great and the food is delicious, especially the main course.<br>W: I'm glad you like this place. Let's come again next time.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[举杯|jǔ bēi|raising a glass] [吃饭|chīfàn|dining]）</div>
        </div>
        <div class="q" id="L10-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [听说|tīngshuō|heard] [你们店|nǐmen diàn|your shop] [可以|kěyǐ|can] [用|yòng|use] [旧车|jiù chē|old car] [换|huàn|exchange] [新车？|xīn chē?|new car?]</div>
          <div class="zh stem">[男：|Nán:|M:] [对，|duì,|Yes,] [这边请，|zhèbiān qǐng,|this way please,] [我|wǒ|I] [来|lái|come] [给|gěi|to] [您|nín|you] [介绍|jièshào|introduce] [一下|yíxià|a bit] [吧。|ba.|(suggestion)] [您|nín|you] [有|yǒu|have] [旧车|jiù chē|old car] [吗？|ma?|(question)]</div>
          <div class="sent-en">W: I heard your shop can exchange an old car for a new one?<br>M: Yes, this way please — let me introduce it. Do you have an old car?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[看车|kàn chē|looking at a car] / [换车|huàn chē|changing a car]）</div>
        </div>
        <div class="q" id="L10-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[男：|Nán:|M:] [看，|kàn,|Look,] [那么|nàme|so] [多|duō|many] [人|rén|people] [踢足球，|tī zúqiú,|playing football,] [他们|tāmen|they] [在|zài|are] [比赛|bǐsài|competing] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [不是，|bú shì,|No,] [他们|tāmen|they] [在|zài|are] [上|shàng|having] [体育课|tǐyù kè|PE class] [呢。|ne.|(emphasis)]</div>
          <div class="sent-en">M: Look, so many people playing football — are they competing?<br>W: No, they're having a PE class.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[操场|cāochǎng|playground] / [踢足球|tī zúqiú|playing football]）</div>
        </div>

        <h4 id="L10-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L10-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[地面|dìmiàn|ground] [上|shàng|on] [怎么|zěnme|why] [都是|dōu shì|all is] [雪？|xuě?|snow?] [昨天|zuótiān|yesterday] [我|wǒ|my] [女朋友|nǚpéngyou|girlfriend] [还|hái|still] [穿|chuān|wore] [裙子|qúnzi|skirt] [呢，|ne,|,] [今天|jīntiān|today] [怎么|zěnme|why] [就|jiù|then] [下雪|xià xuě|snow] [了？|le?|(change)]</div>
          <div class="sent-en">Why is the ground all snow? Yesterday my girlfriend was still wearing a skirt, and today it's snowing?</div>
          <div class="zh stem">★ [今天|jīntiān|today] [比|bǐ|than] [昨天|zuótiān|yesterday] [冷|lěng|cold] [得|de|(complement)] [多。|duō.|much.]</div>
          <div class="sent-en">★ Today is much colder than yesterday.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[昨天|zuótiān|Wore a skirt yesterday,] [穿|chuān|(wore)] [裙子，|qúnzi,|(a skirt),] [今天|jīntiān|and it’s] [下雪，|xià xuě,|snowing today,] [说明|shuōmíng|showing] [今天|jīntiān|today] [冷|lěng|is much] [得|de|(complement)] [多。|duō|colder.]" data-expl-en="Skirt yesterday, snow today — much colder."></div>
        </div>
        <div class="q" id="L10-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[走，|zǒu,|Let's go,] [找个|zhǎo ge|find a] [环境|huánjìng|environment] [好的|hǎo de|good] [地方，|dìfang,|place,] [我|wǒ|I] [早就|zǎo jiù|long ago] [想|xiǎng|wanted to] [跟|gēn|with] [你|nǐ|you] [聊聊|liáo liao|chat] [了，|le,|,] [这儿|zhèr|here] [附近|fùjìn|nearby] [有没有|yǒu méiyǒu|is there] [安静|ānjìng|quiet] [点儿的|diǎnr de|a bit] [咖啡店？|kāfēidiàn?|café?]</div>
          <div class="sent-en">Let's go find a place with a good environment — I've wanted to chat with you for a while. Is there a quiet café nearby?</div>
          <div class="zh stem">★ [他们|tāmen|they] [要|yào|are going to] [回家|huí jiā|go home] [了。|le.|(change)]</div>
          <div class="sent-en">★ They are going home.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[他们|tāmen|they] [想|xiǎng|want to] [找|zhǎo|find] [咖啡店|kāfēidiàn|a café] [聊天，|liáotiān,|to chat,] [不是|bú shì|not] [要|yào|go] [回家。|huí jiā|home.]" data-expl-en="They want to find a café to chat, not go home."></div>
        </div>
        <div class="q" id="L10-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[我|wǒ|my] [爸爸|bàba|dad] [身体|shēntǐ|health] [那么|nàme|so] [好，|hǎo,|good,] [主要|zhǔyào|mainly] [是|shì|is] [因为|yīnwèi|because] [每天|měitiān|every day] [锻炼。|duànliàn.|exercises.]</div>
          <div class="sent-en">My dad's health is so good mainly because he exercises every day.</div>
          <div class="zh stem">★ [爸爸|bàba|Dad] [很|hěn|very] [健康，|jiànkāng,|healthy,] [因为|yīnwèi|because] [他|tā|he] [喜欢|xǐhuan|likes] [运动。|yùndòng.|sports.]</div>
          <div class="sent-en">★ Dad is very healthy because he likes sports.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[每天|měitiān|Exercising every day] [锻炼|duànliàn|(exercising)] = [喜欢|xǐhuan|liking] [运动，|yùndòng,|sports;] [身体好|shēntǐ hǎo|good health] = [健康。|jiànkāng|healthy.]" data-expl-en="Exercises every day = likes sports; good health = healthy."></div>
        </div>
        <div class="q" id="L10-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[我|wǒ|I] [每天|měitiān|every day] [工作|gōngzuò|work] [八九个|bā jiǔ ge|eight or nine] [小时，|xiǎoshí,|hours,] [中午|zhōngwǔ|noon] [也|yě|also] [不能|bùnéng|cannot] [休息，|xiūxi,|rest,] [能|néng|can] [不|bù|not] [累|lěi|tired] [吗？|ma?|(question)]</div>
          <div class="sent-en">I work eight or nine hours every day and can't even rest at noon — how could I not be tired?</div>
          <div class="zh stem">★ [他|tā|he] [每天|měitiān|every day] [工作|gōngzuò|work] [很|hěn|very] [累。|lěi.|tired.]</div>
          <div class="sent-en">★ He is very tired from work every day.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[能|néng|How] [不|bù|could one] [累|lèi|not be tired] [吗？|ma?|(rhetorical)]」= [很|hěn|very] [累。|lèi|tired.]" data-expl-en="'How could I not be tired?' = very tired."></div>
        </div>
        <div class="q" id="L10-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[我|wǒ|my] [儿子|érzi|son] [的|de|(possessive)] [学习|xuéxí|study] [比|bǐ|than] [以前|yǐqián|before] [好|hǎo|better] [多了，|duō le,|much,] [主要|zhǔyào|mainly] [是|shì|is] [他|tā|he] [有|yǒu|has] [兴趣|xìngqù|interest] [了。|le.|(change)]</div>
          <div class="sent-en">My son's study is much better than before, mainly because he's interested now.</div>
          <div class="zh stem">★ [以前|yǐqián|Before,] [儿子|érzi|son] [不|bù|didn't] [喜欢|xǐhuan|like] [学习。|xuéxí.|study.]</div>
          <div class="sent-en">★ Before, the son didn't like studying.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[现在|xiànzài|Interested now] [有|yǒu|(has)] [兴趣|xìngqù|interest] [了，|le,|(now),] [说明|shuōmíng|showing] [以前|yǐqián|before] [没兴趣、|méi xìngqù,|no interest,] [不|bù|didn’t] [喜欢。|xǐhuan|like.]" data-expl-en="Interested now implies he wasn't before."></div>
        </div>

        <h4 id="L10-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L10-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[男：|Nán:|M:] [前边|qiánbiān|ahead] [有|yǒu|there is] [卖水果|mài shuǐguǒ|selling fruit] [的，|de,|,] [我们|wǒmen|we] [买点儿|mǎi diǎnr|buy some] [苹果|píngguǒ|apples] [吧？|ba?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [现在|xiànzài|now] [是|shì|is] [换季|huàn jì|changing seasons] [的|de|(possessive)] [时候，|shíhou,|time,] [苹果|píngguǒ|apples] [不一定|bù yídìng|not necessarily] [好吃，|hǎochī,|tasty,] [别|bié|don't] [买|mǎi|buy] [太多，|tài duō,|too many,] [买|mǎi|buy] [两三个|liǎng sān ge|two or three] [就|jiù|just] [行。|xíng.|OK.]</div>
          <div class="sent-en">M: There's a fruit seller ahead — let's buy some apples.<br>W: It's the changing season now, apples aren't necessarily tasty. Don't buy too many — two or three is fine.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [是|shì|(is)] [什么|shénme|what] [意思？|yìsi?|meaning?]</div>
          <div class="sent-en">Q: What does the woman mean?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[买两个|mǎi liǎng ge|buy two]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[买三个|mǎi sān ge|buy three]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[少买一点儿|shǎo mǎi yìdiǎnr|buy fewer]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[别|bié|Don’t] [买|mǎi|buy] [太多，|tài duō,|too many,] [买|mǎi|buy] [两三个|liǎng sān ge|two or three] [就|jiù|and that] [行|xíng|will do]」= [少|shǎo|buy] [买|mǎi|fewer] [一点儿。|yìdiǎnr|(a bit).]</div>
        </div>
        <div class="q" id="L10-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [今天|jīntiān|today] [怎么样？|zěnmeyàng?|how?] [还|hái|still] [发烧|fāshāo|fever] [吗？|ma?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [吃了药|chī le yào|after taking medicine] [比|bǐ|than] [昨天|zuótiān|yesterday] [好|hǎo|better] [一些|yìxiē|a bit] [了，|le,|,] [但|dàn|but] [还|hái|still] [头疼。|tóuténg.|headache.]</div>
          <div class="sent-en">M: How are you today? Still have a fever?<br>W: After taking medicine I'm a bit better than yesterday, but I still have a headache.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [现在|xiànzài|now] [怎么样|zěnmeyàng|how] [了？|le?|is she?]</div>
          <div class="sent-en">Q: How is the woman now?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[好点儿了|hǎo diǎnr le|a bit better]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[好多了|hǎo duō le|much better]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[越来越不好|yuè lái yuè bù hǎo|getting worse]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[比|bǐ|better] [昨天|zuótiān|than yesterday] [好|hǎo|(better)] [一些|yìxiē|a bit] [了|le|(change)]」= [好点儿了。|hǎo diǎnr le|a bit better.]</div>
        </div>
        <div class="q" id="L10-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [小刚，|Xiǎogāng,|Xiaogang,] [方明|Fāng Míng|Fang Ming] [高|gāo|tall] [还是|háishi|or] [你|nǐ|you] [高？|gāo?|tall?]</div>
          <div class="zh stem">[男：|Nán:|M:] [他|tā|he] [个子|gèzi|height] [也|yě|also] [不|bù|not] [高，|gāo,|tall,] [只|zhǐ|only] [比|bǐ|than] [我|wǒ|me] [高|gāo|tall] [一点儿。|yìdiǎnr.|a bit.]</div>
          <div class="sent-en">W: Xiaogang, is Fang Ming taller or are you?<br>M: He's not tall either — only a bit taller than me.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [小刚|Xiǎogāng|Xiaogang] [和|hé|and] [方明|Fāng Míng|Fang Ming] [谁|shéi|who] [高？|gāo|is taller?]</div>
          <div class="sent-en">Q: Who is taller, Xiaogang or Fang Ming?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[小刚|Xiǎogāng|Xiaogang]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[方明|Fāng Míng|Fang Ming]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[一样高|yíyàng gāo|same height]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[方明|Fāng Míng|Fang Ming] [比|bǐ|is] [小刚|Xiǎogāng|Xiaogang] [高|gāo|taller] [一点儿。|yìdiǎnr|by a bit.]</div>
        </div>
        <div class="q" id="L10-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[男：|Nán:|M:] [怎么|zěnme|why] [还|hái|still] [没|méi|not] [到？|dào?|arrive?] [我|wǒ|I] [都|dōu|already] [看了|kàn le|watched] [三四个|sān sì ge|three or four] [电影|diànyǐng|movies] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我们|wǒmen|we] [是|shì|are] [从|cóng|from] [中国|Zhōngguó|China] [到|dào|to] [美国，|Měiguó,|the US,] [还要|háiyào|still need to] [再|zài|another] [飞|fēi|fly] [五六个|wǔ liù ge|five or six] [小时。|xiǎoshí.|hours.] [你|nǐ|you] [睡|shuì|sleep] [一会儿，|yíhuìr,|a while,] [或者|huòzhě|or] [再|zài|again] [看|kàn|watch] [几个|jǐ ge|a few] [电影。|diànyǐng.|movies.]</div>
          <div class="sent-en">M: Why haven't we arrived? I've already watched three or four movies.<br>W: We're flying from China to the US — another five or six hours. Sleep a while, or watch a few more movies.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [可能|kěnéng|might] [在|zài|be] [哪儿？|nǎr?|where?]</div>
          <div class="sent-en">Q: Where might they be?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[飞机上|fēijī shang|on a plane]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[电影院|diànyǐngyuàn|cinema]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[火车上|huǒchē shang|on a train]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[从|cóng|From] [中国|Zhōngguó|China] [到|dào|to] [美国，|Měiguó,|the US,] [还要|hái yào|there are still] [再|zài|another] [飞|fēi|five or six] [五六个|wǔ liù ge|hours of flight] [小时|xiǎoshí|(hours)]」→ [在|zài|on] [飞机|fēijī|the plane] [上。|shàng|(board).]</div>
        </div>
        <div class="q" id="L10-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [喂，|wèi,|Hello,] [您好，|nín hǎo,|hello,] [请|qǐng|please] [找|zhǎo|find] [一下|yíxià|a moment] [王老师。|Wáng lǎoshī.|Teacher Wang.]</div>
          <div class="zh stem">[男：|Nán:|M:] [我们这儿|wǒmen zhèr|we here] [有|yǒu|have] [三四个|sān sì ge|three or four] [姓|xìng|surname] [王|Wáng|Wang] [的|de|(possessive)] [老师|lǎoshī|teacher] [呢，|ne,|,] [您|nín|you] [找|zhǎo|find] [哪一个？|nǎ yí ge?|which one?]</div>
          <div class="sent-en">W: Hello, please find Teacher Wang.<br>M: We have three or four teachers surnamed Wang here — which one are you looking for?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [这个|zhège|this] [地方|dìfang|place] [有|yǒu|has] [几个|jǐ ge|how many] [姓|xìng|surnamed] [王|Wáng|Wang] [的|de|(possessive)] [老师？|lǎoshī?|teachers?]</div>
          <div class="sent-en">Q: How many teachers surnamed Wang are there in this place?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[三个|sān ge|three]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[三十个|sānshí ge|thirty]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[很多|hěnduō|many]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[三四个|sān sì ge|three or four]」[表示|biǎoshì|means] [有|yǒu|there are] [几个，|jǐ ge,|a few,] [这里|zhèli|here] [选|xuǎn|choosing]“[很多|hěn duō|many]”[最|zuì|is the] [接近。|jiējìn|closest.]</div>
        </div>

        <h4 id="L10-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L10-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [要|yào|are going to] [出去|chūqù|go out] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [小丽，|Xiǎolì,|Xiaoli,] [我|wǒ|I] [问|wèn|ask] [你，|nǐ,|you,] [去|qù|go to] [中山南路|Zhōngshān Nán Lù|Zhongshan South Road] [骑自行车|qí zìxíngchē|ride a bike] [快|kuài|fast] [还是|háishi|or] [坐|zuò|take] [公共汽车|gōnggòng qìchē|bus] [快？|kuài?|fast?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [这个|zhège|this] [时间，|shíjiān,|time,] [骑车|qí chē|riding] [比|bǐ|than] [坐|zuò|taking] [公共汽车|gōnggòng qìchē|bus] [快|kuài|fast] [得|de|(complement)] [多。|duō.|much.] [你|nǐ|you] [这么|zhème|so] [着急，|zháojí,|anxious,] [要|yào|going to] [去|qù|go] [上课|shàngkè|to class] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [不，|bù,|No,] [我|wǒ|I] [要|yào|am going to] [去|qù|go] [见|jiàn|meet] [女朋友。|nǚpéngyou.|girlfriend.]</div>
          <div class="sent-en">W: Are you going out?<br>M: Xiaoli, let me ask you — to Zhongshan South Road, is riding a bike faster or taking the bus?<br>W: At this time, riding is much faster than taking the bus. You're in such a hurry — going to class?<br>M: No, I'm going to see my girlfriend.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[可能骑自行车|kěnéng qí zìxíngchē|might ride a bike]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[可能坐公共汽车|kěnéng zuò gōnggòng qìchē|might take the bus]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[要去上课|yào qù shàngkè|is going to class]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[骑车|qí chē|Riding a bike] [比|bǐ|is much faster] [坐|zuò|than taking] [公共汽车|gōnggòng qìchē|the bus;] [快|kuài|(faster)] [得|de|(complement)] [多，|duō,|(much),] [他|tā|he’s] [着急，|zháojí,|in a hurry,] [所以|suǒyǐ|so] [可能|kěnéng|he may] [骑车。|qí chē|ride a bike.]</div>
        </div>
        <div class="q" id="L10-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [明天|míngtiān|tomorrow] [是|shì|is] [晴天|qíngtiān|sunny] [还是|háishi|or] [阴天？|yīntiān?|cloudy?]</div>
          <div class="zh stem">[男：|Nán:|M:] [上午|shàngwǔ|morning] [下雪，|xià xuě,|snow,] [下午|xiàwǔ|afternoon] [就|jiù|then] [晴|qíng|clear] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [太好了，|tài hǎo le,|Great,] [明天|míngtiān|tomorrow] [可以|kěyǐ|can] [穿|chuān|wear] [我|wǒ|my] [的|de|(possessive)] [新|xīn|new] [裙子|qúnzi|skirt] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [雪后|xuě hòu|after snow] [晴天|qíngtiān|sunny day] [比|bǐ|than] [下雪时|xià xuě shí|when snowing] [冷|lěng|cold] [得|de|(complement)] [多，|duō,|much,] [你|nǐ|you] [不|bù|not] [知道|zhīdào|know] [吗？|ma?|(question)]</div>
          <div class="sent-en">W: Will it be sunny or cloudy tomorrow?<br>M: Snow in the morning, clear in the afternoon.<br>W: Great — I can wear my new skirt tomorrow.<br>M: After snow, a sunny day is much colder than when it's snowing, don't you know?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [是|shì|(is)] [什么|shénme|what] [意思？|yìsi?|meaning?]</div>
          <div class="sent-en">Q: What does the man mean?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[明天很冷|míngtiān hěn lěng|tomorrow will be very cold]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[明天是阴天|míngtiān shì yīntiān|tomorrow will be cloudy]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[下雪时最冷|xià xuě shí zuì lěng|snowing is coldest]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[雪后|xuě hòu|After snow] [晴天|qíngtiān|a clear day] [比|bǐ|is much colder] [下雪时|xià xuě shí|than when snowing] [冷|lěng|(cold)] [得|de|(complement)] [多|duō|(much)]」→ [明天|míngtiān|tomorrow] [很|hěn|very] [冷。|lěng|cold.]</div>
        </div>
        <div class="q" id="L10-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [昨天|zuótiān|yesterday] [换了|huàn le|changed] [辆|liàng|(MW)] [新车，|xīn chē,|new car,] [比|bǐ|than] [那辆|nà liàng|that] [旧的|jiù de|old one] [舒服|shūfu|comfortable] [多了。|duō le.|much.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [又|yòu|again] [换了？|huàn le?|changed?] [你|nǐ|you] [已经|yǐjīng|already] [换了|huàn le|changed] [四五辆|sì wǔ liàng|four or five] [了|le|(past)] [吧？|ba?|(question)] [多少钱？|duōshao qián?|how much?]</div>
          <div class="zh stem">[男：|Nán:|M:] [不贵，|bú guì,|Not expensive,] [一百多。|yìbǎi duō.|over a hundred.] [我|wǒ|my] [那辆|nà liàng|that] [旧车|jiù chē|old car] [送|sòng|give] [给|gěi|to] [你|nǐ|you] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [一百多？|yìbǎi duō?|Over a hundred?] [自行车|zìxíngchē|bicycle] [啊！|a!|(exclamation)]</div>
          <div class="sent-en">M: Yesterday I got a new car — much more comfortable than the old one.<br>W: Changed again? You've already changed four or five, right? How much?<br>M: Not expensive — over a hundred. I'll give you my old one.<br>W: Over a hundred? A bicycle!</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[买了一辆旧车|mǎi le yí liàng jiù chē|bought an old car]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[买的是自行车|mǎi de shì zìxíngchē|bought a bicycle]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[买了五辆车|mǎi le wǔ liàng chē|bought five cars]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[一百多|yì bǎi duō|Over a hundred] [块钱|kuài qián|yuan] [买|mǎi|bought] [的|de|(nominalizer)] [是|shì|is] [自行车。|zìxíngchē|a bicycle.]</div>
        </div>
        <div class="q" id="L10-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你女儿|nǐ nǚ'ér|your daughter] [个子|gèzi|height] [真|zhēn|really] [高，|gāo,|tall,] [比|bǐ|than] [你|nǐ|you] [高|gāo|tall] [多了|duō le|much] [吧？|ba?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [其实|qíshí|actually] [我|wǒ|I] [跟|gēn|with] [她|tā|her] [一样|yíyàng|the same] [高，|gāo,|tall,] [只是|zhǐshì|only] [她|tā|she] [比|bǐ|than] [我|wǒ|me] [瘦|shòu|thin] [多了。|duō le.|much.]</div>
          <div class="zh stem">[男：|Nán:|M:] [她|tā|she] [今年|jīnnián|this year] [多大？|duō dà?|how old?] [十七八岁？|shíqī bā suì?|17 or 18?] [在哪儿|zài nǎr|where] [学习|xuéxí|studying] [呢？|ne?|(question)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [今年|jīnnián|this year] [十九|shíjiǔ|19] [了，|le,|,] [正在|zhèngzài|is] [国外|guówài|abroad] [学习，|xuéxí,|studying,] [学历|xuélì|major] [更和|gèng hé|is more in] [数学。|shùxué.|math.]</div>
          <div class="sent-en">M: Your daughter is really tall — much taller than you, right?<br>W: Actually I'm the same height as her — she's just much thinner.<br>M: How old is she? 17 or 18? Where does she study?<br>W: She's 19, studying abroad. Her major is more math-related.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的|nǚde|the woman] [和|hé|and] [她|tā|her] [女儿，|nǚ’ér,|daughter,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What can we know about the woman and her daughter?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[妈妈高得多|māma gāo de duō|mom is much taller]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[一样高|yíyàng gāo|same height]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[女儿高得多|nǚ'ér gāo de duō|daughter is much taller]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|I] [跟|gēn|am as] [她|tā|her] [一样|yíyàng|(as)] [高|gāo|tall]」。</div>
        </div>
        <div class="q" id="L10-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [走了|zǒu le|walked] [两三个|liǎng sān ge|two or three] [小时|xiǎoshí|hours] [了，|le,|,] [还|hái|also] [买了|mǎi le|bought] [这么|zhème|so] [多|duō|many] [东西，|dōngxi,|things,] [真|zhēn|really] [累。|lěi.|tired.] [我们|wǒmen|we] [休息|xiūxi|rest] [一会儿|yíhuìr|a while] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|then] [就|jiù|just] [在|zài|at] [这儿|zhèr|here] [坐坐，|zuò zuo,|sit,] [喝点儿|hē diǎnr|drink some] [水。|shuǐ.|water.]</div>
          <div class="zh stem">[男：|Nán:|M:] [楼上|lóushàng|upstairs] [有个|yǒu ge|there is a] [咖啡店，|kāfēidiàn,|café,] [比|bǐ|than] [这儿|zhèr|here] [安静|ānjìng|quiet] [得多，|de duō,|much,] [环境|huánjìng|environment] [也|yě|also] [不错，|búcuò,|nice,] [还有|háiyǒu|also has] [音乐。|yīnyuè.|music.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [也好，|yě hǎo,|OK,] [我们|wǒmen|we] [上去|shàngqù|go up] [喝点儿|hē diǎnr|drink some] [饮料。|yǐnliào.|beverages.]</div>
          <div class="sent-en">M: We've walked for two or three hours and bought so many things — I'm really tired. Let's rest a while.<br>W: Then let's sit here and drink some water.<br>M: There's a café upstairs — much quieter than here, nice environment, and music.<br>W: OK, let's go up and have some drinks.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [要|yào|are going to] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What are they going to do?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[去咖啡店|qù kāfēidiàn|go to a café]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[听音乐会|tīng yīnyuèhuì|listen to a concert]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[买东西|mǎi dōngxi|buy things]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[楼上|lóu shàng|Upstairs] [有|yǒu|there’s] [个|ge|a] [咖啡店|kāfēidiàn|café]……[我们|wǒmen|let’s] [上去|shàngqù|go up] [喝点儿|hē diǎnr|and drink some] [饮料|yǐnliào|beverages]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L10-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L10-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[好，|hǎo,|OK,] [你|nǐ|you] [等|děng|wait for] [我|wǒ|me] [一两分钟，|yì liǎng fēnzhōng,|a minute or two,] [我|wǒ|I] [去|qù|go] [一下|yíxià|to] [洗手间。|xǐshǒujiān.|bathroom.]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[你|nǐ|you] [怎么|zěnme|why] [在|zài|at] [这么|zhème|so] [远|yuǎn|far] [的|de|(possessive)] [地方|dìfang|place] [买房子？|mǎi fángzi?|buy a house?]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[体育|tǐyù|PE] [比|bǐ|than] [数学|shùxué|math] [容易|róngyì|easier] [多了，|duō le,|much,] [也|yě|also] [有意思|yǒu yìsi|interesting] [多了。|duō le.|much.]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[今天|jīntiān|today] [我|wǒ|I] [不|bù|not] [上班，|shàngbān,|work,] [我|wǒ|I] [昨天|zuótiān|yesterday] [只|zhǐ|only] [睡了|shuì le|slept] [两三个|liǎng sān ge|two or three] [小时，|xiǎoshí,|hours,] [让|ràng|let] [我|wǒ|me] [再|zài|again] [睡|shuì|sleep] [一会儿。|yíhuìr.|a while.]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[小方，|Xiǎofāng,|Xiaofang,] [你|nǐ|you] [跟|gēn|with] [小丽|Xiǎolì|Xiaoli] [一样|yíyàng|the same] [大|dà|old] [吗？|ma?|(question)]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [去|qù|go] [那儿|nàr|there] [吗？|ma?|(question)] （E）</div>
          <div class="sent-en">Do you know how to get there? — (E) Of course. We take the bus first, then transfer to the subway.</div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L10-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[九点半|jiǔ diǎn bàn|9:30] [了，|le,|,] [你|nǐ|you] [迟到了，|chídào le,|you're late,] [快|kuài|quickly] [起床。|qǐchuáng.|get up.] （<span class="blank">　</span>）</div>
          <div class="sent-en">It's 9:30, you're late — get up quickly.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L10-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[我们|wǒmen|we] [去|qù|go] [买点儿|mǎi diǎnr|buy some] [吃的|chī de|food] [吧，|ba,|,] [我|wǒ|I] [早就|zǎo jiù|long ago] [饿了。|è le.|hungry.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Let's go buy some food — I've been hungry for a while.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L10-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[她|tā|her] [的|de|(possessive)] [生日|shēngrì|birthday] [是|shì|is] [五月，|wǔ yuè,|May,] [我|wǒ|I] [是|shì|am] [一月，|yī yuè,|January,] [我|wǒ|I] [比|bǐ|than] [她|tā|her] [大|dà|older] [一点儿。|yìdiǎnr.|a bit.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Her birthday is in May, mine is in January — I'm a bit older than her.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L10-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[你|nǐ|you] [个子|gèzi|height] [那么|nàme|so] [高，|gāo,|tall,] [跑|pǎo|run] [得|de|(complement)] [也|yě|also] [快，|kuài,|fast,] [当然|dāngrán|of course] [觉得|juéde|feel] [容易。|róngyì.|easy.] （<span class="blank">　</span>）</div>
          <div class="sent-en">You're so tall and run so fast — of course you find it easy.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L10-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[虽然|suīrán|Although] [远，|yuǎn,|far,] [但是|dànshì|but] [附近|fùjìn|nearby] [有|yǒu|has] [三四个|sān sì ge|three or four] [车站，|chēzhàn,|bus stops,] [很|hěn|very] [方便。|fāngbiàn.|convenient.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Although it's far, there are three or four bus stops nearby — very convenient.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L10-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L10-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[方便|fāngbiàn|convenient]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[骑|qí|ride]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[换|huàn|exchange]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[地方|dìfang|place]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[旧|jiù|old]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[她|tā|she] [说话|shuōhuà|speaks] [的|de|(possessive)] （E [声音|shēngyīn|voice]） [多|duō|how] [好听|hǎotīng|nice] [啊！|a!|!]</div>
          <div class="sent-en">Her voice is so nice!</div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L10-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[这件|zhè jiàn|this] [衣服|yīfu|clothes] [有点儿|yǒudiǎnr|a bit] （<span class="blank">　</span>） [了，|le,|,] [我|wǒ|I] [不|bù|not] [想|xiǎng|want to] [穿|chuān|wear] [了。|le.|(change)]</div>
          <div class="sent-en">These clothes are a bit old — I don't want to wear them anymore.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L10-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[我|wǒ|I] [还|hái|still] [没|méi|not] [去过|qù guò|been to] [那个|nàge|that] （<span class="blank">　</span>），[漂亮吗？|piàoliang ma?|pretty?] [好玩儿吗？|hǎowánr ma?|fun?]</div>
          <div class="sent-en">I haven't been to that place yet — is it pretty? Fun?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L10-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[你|nǐ|you] （<span class="blank">　</span>） [得|de|(complement)] [太快了，|tài kuài le,|too fast,] [慢点儿，|màn diǎnr,|slow down,] [小心|xiǎoxīn|careful] [前边|qiánbiān|ahead] [的|de|(possessive)] [车。|chē.|car.]</div>
          <div class="sent-en">You're riding too fast — slow down and watch out for the car ahead.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L10-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [你|nǐ|you] [每天|měitiān|every day] [怎么|zěnme|how] [去|qù|go to] [学校？|xuéxiào?|school?] [坐车|zuò chē|by bus] [还是|háishi|or] [坐地铁？|zuò dìtiě?|by subway?]</div>
          <div class="zh">[B：|B:|B:] [坐地铁|zuò dìtiě|by subway] [更快，|gèng kuài,|faster,] [也|yě|also] [更|gèng|more] （<span class="blank">　</span>）。</div>
          <div class="sent-en">A: How do you go to school every day? Bus or subway?<br>B: Subway is faster and more convenient.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L10-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [这辆车|zhè liàng chē|this car] [买了|mǎi le|bought] [十五六年|shíwǔ liù nián|15 or 16 years] [了，|le,|,] [总是|zǒngshì|always] [出|chū|has] [问题。|wèntí.|problems.]</div>
          <div class="zh">[B：|B:|B:] [那|nà|then] （<span class="blank">　</span>） [一辆|yí liàng|a] [新的|xīn de|new one] [吧，|ba,|,] [车|chē|car] [出问题|chū wèntí|having problems] [不是|bú shì|isn't] [件|jiàn|a] [小事儿。|xiǎoshìr.|small matter.]</div>
          <div class="sent-en">A: This car has been bought for 15 or 16 years and always has problems.<br>B: Then exchange it for a new one — car problems aren't a small matter.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L10-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L10-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[每个|měi ge|Every] [周末，|zhōumò,|weekend,] [我们|wǒmen|our] [一家人|yì jiā rén|family] [都|dōu|all] [去|qù|go to] [公园|gōngyuán|park] [或|huò|or] [远|yuǎn|far] [的|de|(possessive)] [地方|dìfang|places] [走走、|zǒu zou,|walk,] [玩儿玩儿。|wánr wanr.|play.] [我们|wǒmen|we] [不|bù|not] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [也|yě|also] [不|bù|not] [坐|zuò|take] [出租车，|chūzūchē,|taxi,] [我们|wǒmen|we] [骑自行车|qí zìxíngchē|ride bikes] [去。|qù.|go.] [很多时候，|hěnduō shíhou,|Often,] [骑车|qí chē|riding] [比|bǐ|than] [开车、|kāichē,|driving,] [坐车|zuò chē|taking vehicles] [方便|fāngbiàn|convenient] [得多，|de duō,|much,] [也|yě|also] [快|kuài|fast] [得多。|de duō.|much.] [最|zuì|most] [主要|zhǔyào|mainly] [的|de|(possessive)] [是|shì|is] [因为|yīnwèi|because] [骑车|qí chē|riding] [对|duì|to] [身体|shēntǐ|health] [好，|hǎo,|good,] [对|duì|to] [环境|huánjìng|environment] [也|yě|also] [好。|hǎo.|good.]</div>
          <div class="sent-en">Every weekend our family goes to the park or a faraway place to walk and play. We don't take buses or taxis — we ride bikes. Often riding is much more convenient and faster than driving or taking vehicles. Most importantly, riding is good for health and the environment.</div>
          <div class="zh ask">★ [骑车：|qí chē:|Riding a bike:]</div>
          <div class="sent-en">★ Riding a bike: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[没有坐车方便|méiyǒu zuò chē fāngbiàn|less convenient than taking vehicles]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[对环境很好|duì huánjìng hěn hǎo|very good for the environment]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不健康|bú jiànkāng|unhealthy]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[骑车|qí chē|Riding a bike] [对|duì|is good for] [身体|shēntǐ|health] [好，|hǎo,|(good),] [对|duì|and for] [环境|huánjìng|the environment] [也|yě|too] [好|hǎo|(good)]」。</div>
        </div>
        <div class="q" id="L10-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[以前|yǐqián|Before,] [中国|Zhōngguó|China] [有|yǒu|had] [很多|hěnduō|many] [茶馆，|cháguǎn,|teahouses,] [但|dàn|but] [现在|xiànzài|now] [越来越|yuè lái yuè|fewer and fewer] [少，|shǎo,|,] [咖啡店|kāfēidiàn|cafés] [越来越|yuè lái yuè|more and more] [多|duō|many] [了，|le,|,] [人们|rénmen|people] [走累|zǒu lěi|tired from walking] [了|le|(change)] [可以|kěyǐ|can] [去|qù|go to] [咖啡店|kāfēidiàn|café] [坐坐，|zuò zuo,|sit,] [喝点儿|hē diǎnr|drink some] [咖啡，|kāfēi,|coffee,] [当然|dāngrán|of course] [也|yě|also] [有|yǒu|has] [茶、|chá,|tea,] [牛奶|niúnǎi|milk] [和|hé|and] [水。|shuǐ.|water.] [这样的|zhèyàng de|Such] [咖啡店|kāfēidiàn|cafés] [比|bǐ|than] [以前的|yǐqián de|old] [茶馆|cháguǎn|teahouses] [安静|ānjìng|quiet] [得多，|de duō,|much,] [环境|huánjìng|environment] [也|yě|also] [更好，|gèng hǎo,|better,] [大家|dàjiā|everyone] [很|hěn|very] [喜欢|xǐhuan|likes] [去。|qù.|to go.]</div>
          <div class="sent-en">China used to have many teahouses, but now they're fewer and fewer, and cafés are more and more. People tired from walking can sit in a café and drink coffee — of course there's also tea, milk and water. Such cafés are much quieter than old teahouses and have better environments; everyone likes going.</div>
          <div class="zh ask">★ [咖啡店：|kāfēidiàn:|The café:]</div>
          <div class="sent-en">★ The café: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[没有茶馆多|méiyǒu cháguǎn duō|fewer than teahouses]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不太安静|bú tài ānjìng|not very quiet]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[环境比茶馆好|huánjìng bǐ cháguǎn hǎo|better environment than teahouses]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[比|bǐ|than] [以前|yǐqián|before] [的|de|(possessive)] [茶馆|cháguǎn|teahouses] [安静|ānjìng|it’s much quieter] [得|de|(complement)] [多，|duō,|(much),] [环境|huánjìng|the environment] [也|yě|also] [更|gèng|even] [好|hǎo|better]」。</div>
        </div>
        <div class="q" id="L10-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[我家|wǒ jiā|My home] [楼下|lóuxià|downstairs] [有|yǒu|there is] [一家|yì jiā|a] [旧车店，|jiù chē diàn,|used car shop,] [卖|mài|selling] [“二手”|“èrshǒu”|"second-hand"] [自行车。|zìxíngchē.|bicycles.] [没有|méiyǒu|Without] [那么|nàme|so] [多|duō|much] [钱|qián|money] [买|mǎi|to buy] [新车|xīn chē|new cars] [的|de|(possessive)] [人，|rén,|people,] [可以|kěyǐ|can] [到|dào|go to] [这儿|zhèr|here] [来|lái|come] [买辆|mǎi liàng|buy a] [旧的|jiù de|old one] [骑骑，|qí qi,|ride,] [特别|tèbié|especially] [便宜，|piányi,|cheap,] [也|yě|also] [方便。|fāngbiàn.|convenient.]</div>
          <div class="sent-en">Downstairs from my home there's a used car shop selling "second-hand" bicycles. People who don't have enough money for a new car can come here to buy an old one to ride — especially cheap and convenient.</div>
          <div class="zh ask">★“[二手|èrshǒu|second-hand]”[车|chē|car] [的|de|(possessive)] [意思|yìsi|meaning] [是：|shì:|is:]</div>
          <div class="sent-en">★ The meaning of “second-hand car” is: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[便宜车|piányi chē|cheap car]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[新车|xīn chē|new car]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[旧车|jiù chē|old car]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　“[二手|èrshǒu|Second-hand]”[就是|jiùshì|means] [旧|jiù|old] [的|de|(nominalizer)]、[别人|biérén|someone else] [用过|yòng guò|used] [的。|de|(nominalizer)]</div>
        </div>
        <div class="q" id="L10-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[我|wǒ|my] [女儿|nǚ'ér|daughter] [现在|xiànzài|now] [每天|měitiān|every day] [都|dōu|all] [要|yào|must] [上|shàng|attend] [历史课、|lìshǐ kè,|history class,] [体育课|tǐyù kè|PE class] [和|hé|and] [数学课。|shùxué kè.|math class.] [她说|tā shuō|she says] [她|tā|she] [最|zuì|most] [喜欢|xǐhuan|likes] [历史课，|lìshǐ kè,|history class,] [因为|yīnwèi|because] [历史课|lìshǐ kè|history class] [比|bǐ|than] [数学课|shùxué kè|math class] [和|hé|and] [体育课|tǐyù kè|PE class] [有意思|yǒu yìsi|interesting] [多了。|duō le.|much.] [体育课|tǐyù kè|PE class] [比|bǐ|than] [数学课|shùxué kè|math class] [容易|róngyì|easier] [一些，|yìxiē,|a bit,] [但是|dànshì|but] [没有|méiyǒu|not as] [历史课|lìshǐ kè|history class] [那么|nàme|so] [好玩儿。|hǎowánr.|fun.]</div>
          <div class="sent-en">My daughter now has history, PE and math classes every day. She says she likes history best because it's much more interesting than math and PE. PE is a bit easier than math, but not as fun as history.</div>
          <div class="zh ask">★ [女儿|nǚ’ér|Which class does the daughter] [最|zuì|most] [不|bù|not] [喜欢|xǐhuan|like] [上|shàng|to attend] [什么|shénme|(what)] [课？|kè?|(class)?]</div>
          <div class="sent-en">★ Which class does the daughter least like to attend?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[数学课|shùxué kè|math class]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[历史课|lìshǐ kè|history class]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[体育课|tǐyù kè|PE class]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[历史|lìshǐ|History is the most interesting,] [最有意思|zuì yǒu yìsi|(the most interesting),] [体育|tǐyù|PE] [其次，|qícì,|next,] [数学|shùxué|math] [最没意思，|zuì méi yìsi,|the least interesting,] [所以|suǒyǐ|so] [最|zuì|most] [不|bù|dis-] [喜欢|xǐhuan|likes] [数学。|shùxué|math.]</div>
        </div>
        <div class="q" id="L10-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[有时候，|yǒu shíhou,|Sometimes,] [我|wǒ|I] [真|zhēn|really] [想|xiǎng|want] [回到|huídào|to return to] [以前。|yǐqián.|the past.] [五年前|wǔ nián qián|Five years ago] [这个|zhège|this] [地方|dìfang|place] [比|bǐ|than] [现在|xiànzài|now] [安静|ānjìng|quiet] [得多，|de duō,|much,] [这儿|zhèr|here] [只有|zhǐyǒu|only] [一条|yì tiáo|one] [路，|lù,|road,] [房子|fángzi|houses] [也|yě|also] [没有|méiyǒu|didn't have] [现在|xiànzài|now] [多。|duō.|many.] [现在|xiànzài|Now] [这儿|zhèr|here] [有|yǒu|has] [四五条|sì wǔ tiáo|four or five] [路，|lù,|roads,] [路上|lù shang|on the roads] [都是|dōu shì|all are] [车，|chē,|cars,] [大楼|dàlóu|buildings] [也|yě|also] [越来越|yuè lái yuè|more and more] [多，|duō,|many,] [饭馆|fànguǎn|restaurants] [有|yǒu|have] [二三十个|èr sānshí ge|twenty or thirty] [呢！|ne!|(emphasis)]</div>
          <div class="sent-en">Sometimes I really want to go back to the past. Five years ago this place was much quieter than now — only one road, and fewer houses. Now there are four or five roads, all full of cars, more and more buildings, and twenty or thirty restaurants!</div>
          <div class="zh ask">★ [这个|zhège|This] [地方：|dìfang:|place:]</div>
          <div class="sent-en">★ This place: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[以前没有路|yǐqián méiyǒu lù|had no roads before]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[现在有45条路|xiànzài yǒu sìshíwǔ tiáo lù|now has 45 roads]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[现在的路比以前多|xiànzài de lù bǐ yǐqián duō|now has more roads than before]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[以前|yǐqián|Before] [只有|zhǐyǒu|there was only] [一条|yì tiáo|one] [路，|lu,|road,] [现在|xiànzài|now] [有|yǒu|there are] [四五条，|sì wǔ tiáo,|four or five,] [所以|suǒyǐ|so] [路|lu|roads] [比|bǐ|than] [以前|yǐqián|before] [多。|duō|are more.]</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L10-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L10-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[这个地方|zhège dìfang|this place] [安静|ānjìng|quiet] [比|bǐ|than] [那个地方|nàge dìfang|that place] [一些|yìxiē|a bit]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[这个|zhège|This] [地方|dìfang|place] [比|bǐ|is] [那个|nàge|that] [地方|dìfang|place] [安静|ānjìng|a bit quieter] [一些。|yìxiē|(a bit).]<div class="sent-en">This place is a bit quieter than that one.</div></div>
        </div>
        <div class="write-item" id="L10-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[周经理|Zhōu jīnglǐ|Manager Zhou] [都|dōu|all] [一两杯|yì liǎng bēi|one or two cups] [喝|hē|drink] [咖啡|kāfēi|coffee] [每天|měitiān|every day]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[周经理|Zhōu jīnglǐ|Manager Zhou] [每天|měitiān|every day] [都|dōu|(all)] [喝|hē|drinks] [一两杯|yì liǎng bēi|one or two cups of] [咖啡。|kāfēi|coffee.]<div class="sent-en">Manager Zhou drinks one or two cups of coffee every day.</div></div>
        </div>
        <div class="write-item" id="L10-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[自行车|zìxíngchē|bicycle] [快|kuài|fast] [骑|qí|ride] [比|bǐ|than] [得多|de duō|much] [走路|zǒulù|walking]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[骑|qí|Riding] [自行车|zìxíngchē|a bike] [比|bǐ|is much faster] [走路|zǒulù|than walking] [快|kuài|(fast)] [得|de|(complement)] [多。|duō|(much).]<div class="sent-en">Riding a bike is much faster than walking.</div></div>
        </div>
        <div class="write-item" id="L10-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[矮|ǎi|short] [朋友|péngyou|friend] [一点儿|yìdiǎnr|a bit] [我|wǒ|me] [比|bǐ|than] [个子|gèzi|height]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[朋友|péngyou|My friend] [比|bǐ|is] [我|wǒ|me] [个子|gèzi|(height)] [矮|ǎi|a bit shorter] [一点儿。|yìdiǎnr|(a bit).]<div class="sent-en">My friend is a bit shorter than me.</div></div>
        </div>
        <div class="write-item" id="L10-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[四|sì|four] [五|wǔ|five] [只有|zhǐyǒu|only] [教室里|jiàoshì li|in the classroom] [个|ge|(MW)] [学生|xuésheng|students]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[教室|jiàoshì|In the classroom] [里|li|(inside)] [只有|zhǐyǒu|there are only] [四五个|sì wǔ ge|four or five] [学生。|xuéshēng|students.]<div class="sent-en">There are only four or five students in the classroom.</div></div>
        </div>

        <h4 id="L10-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L10-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[我们|wǒmen|we] [坐|zuò|take] [公共汽车|gōnggòng qìchē|bus] [去|qù|go] [吧，|ba,|,] [我|wǒ|I] [不会|bú huì|cannot] <span class="blank-input"><span class="input-py">qí</span><input type="text" data-ans="骑"></span> [自行车。|zìxíngchē.|bicycle.]</div>
          <div class="sent-en">Let's take the bus — I can't ride a bike.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[骑|qí|ride]</span></div>
        </div>
        <div class="write-item" id="L10-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[这条|zhè tiáo|this] [裙子|qúnzi|skirt] [有点儿|yǒudiǎnr|a bit] [瘦，|shòu,|tight,] [我|wǒ|I] [可以|kěyǐ|can] <span class="blank-input"><span class="input-py">huàn</span><input type="text" data-ans="换"></span> [一条|yì tiáo|one] [吗？|ma?|(question)]</div>
          <div class="sent-en">This skirt is a bit tight — can I exchange it for another one?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[换|huàn|exchange]</span></div>
        </div>
        <div class="write-item" id="L10-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[我|wǒ|I] [喜欢|xǐhuan|like] [住在|zhù zài|live in] [这个|zhège|this] [地方，|dìfang,|place,] [因为|yīnwèi|because] <span class="blank-input"><span class="input-py">huán</span><input type="text" data-ans="环"></span> [境|jìng|environment] [特别好，|tèbié hǎo,|is especially good,] [最|zuì|most] [重要|zhòngyào|important] [的|de|(possessive)] [是|shì|is] [有|yǒu|there are] [很多|hěnduō|many] [商店。|shāngdiàn.|shops.]</div>
          <div class="sent-en">I like living in this place because the environment is especially good — and most importantly, there are many shops.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[环|huán|environment]（[环境|huánjìng|environment]）</span></div>
        </div>
        <div class="write-item" id="L10-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[这儿|zhèr|here] <span class="blank-input"><span class="input-py">fù</span><input type="text" data-ans="附"></span> [近|jìn|near] [有个|yǒu ge|there is a] [学校，|xuéxiào,|school,] [每天|měitiān|every day] [下午|xiàwǔ|afternoon] [都|dōu|all] [有|yǒu|have] [很多|hěnduō|many] [爸爸|bàba|dads] [妈妈|māma|moms] [接|jiē|pick up] [孩子。|háizi.|children.]</div>
          <div class="sent-en">There's a school nearby — every afternoon many parents come to pick up their children.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[附|fù|near]（[附近|fùjìn|nearby]）</span></div>
        </div>
        <div class="write-item" id="L10-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[在|zài|at] [这个|zhège|this] [学校，|xuéxiào,|school,] [我|wǒ|my] [的|de|(possessive)] [工作|gōngzuò|work] <span class="blank-input"><span class="input-py">zhǔ</span><input type="text" data-ans="主"></span> [要是|yào shì|mainly is] [给|gěi|for] [学生|xuéshēng|students] [上|shàng|teach] [历史课。|lìshǐ kè.|history class.]</div>
          <div class="sent-en">At this school, my work is mainly teaching history to students.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[主|zhǔ|main]（[主要|zhǔyào|mainly]）</span></div>
        </div>

        <h4 id="L10-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L10-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[弟弟|dìdi|younger brother] [新买了|xīn mǎi le|newly bought] [一辆|yí liàng|a] <span class="blank-input"><input type="text" data-ans="白"></span> [色的|sè de|colored] <span class="blank-input"><input type="text" data-ans="自"></span> [行车。|xíngchē.|bicycle.]</div>
          <div class="zh" style="margin-top:6px;">[自|zì|self]　[白|bái|white]</div>
          <div class="sent-en">My younger brother bought a white bicycle.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[白|bái|(as in 明白 “understand”)]、[自|zì|(as in 自行车 “bicycle”)]</div>
        </div>
        <div class="write-item" id="L10-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[学|xué|school] <span class="blank-input"><input type="text" data-ans="数"></span> [老师|lǎoshī|teacher] [的|de|(possessive)] [办公室|bàngōngshì|office] [不|bù|not] [在|zài|at] [这儿，|zhèr,|here,] [在|zài|on] <span class="blank-input"><input type="text" data-ans="楼"></span> [上。|shàng.|upstairs.]</div>
          <div class="zh" style="margin-top:6px;">[数|shù|math]　[楼|lóu|building]</div>
          <div class="sent-en">The math teacher's office isn't here — it's upstairs.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[数|shù|(as in 数学 “math”)]、[楼|lóu|(as in 楼上 “upstairs”)]</div>
        </div>
        <div class="write-item" id="L10-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[音乐课|yīnyuè kè|Music class] [容易|róngyì|easy] [吗？|ma?|(question)] [我|wǒ|I] [觉得|juéde|feel] [音乐课|yīnyuè kè|music class] [比|bǐ|than] [历|lì|history] <span class="blank-input"><input type="text" data-ans="史"></span> [课|kè|class] <span class="blank-input"><input type="text" data-ans="更"></span> [难。|nán.|harder.]</div>
          <div class="zh" style="margin-top:6px;">[史|shǐ|history]　[更|gèng|more]</div>
          <div class="sent-en">Is music class easy? I think music is harder than history.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[史|shǐ|(as in 历史 “history”)]、[更|gèng|(as in 更好 “better”)]</div>
        </div>
        <div class="write-item" id="L10-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[请问，|qǐngwèn,|Excuse me,] <span class="blank-input"><input type="text" data-ans="椅"></span> [子|zi|chair] [旁边|pángbiān|next to] [的|de|(possessive)] [那辆|nà liàng|that] [车，|chē,|bike,] [我|wǒ|I] [可以|kěyǐ|can] <span class="blank-input"><input type="text" data-ans="骑"></span> [一下|yíxià|a bit] [吗？|ma?|(question)]</div>
          <div class="zh" style="margin-top:6px;">[骑|qí|ride]　[椅|yǐ|chair]</div>
          <div class="sent-en">Excuse me, can I ride that bike next to the chair for a bit?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[椅|yǐ|(as in 椅子 “chair”)]、[骑|qí|(as in 骑车 “ride a bike”)]</div>
        </div>
        <div class="write-item" id="L10-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[我们|wǒmen|we] [每个|měi ge|every] [星期|xīngqī|week] [都|dōu|all] <span class="blank-input"><input type="text" data-ans="有"></span> [两次|liǎng cì|two] [体|tǐ|PE] <span class="blank-input"><input type="text" data-ans="育"></span> [课。|kè.|class.]</div>
          <div class="zh" style="margin-top:6px;">[有|yǒu|have]　[育|yù|education]</div>
          <div class="sent-en">We have PE class twice a week.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[有|yǒu|(as in 没有 “not have”)]、[育|yù|(as in 体育 “PE”)]</div>
        </div>

        <h4 id="L10-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L10-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[明|míng|bright] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[明天|míngtiān|tomorrow]、[聪明|cōngming|smart]</div></div>
        </div>
        <div class="write-item" id="L10-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[休|xiū|rest] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[休息|xiūxi|rest]、[休学|xiūxué|suspend schooling]</div></div>
        </div>
        <div class="write-item" id="L10-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[从|cóng|from] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[从来|cónglái|never/always]、[从小|cóngxiǎo|since childhood]</div></div>
        </div>
        <div class="write-item" id="L10-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[看|kàn|look] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[看书|kàn shū|read]、[看见|kànjiàn|see]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L10-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小丽|Xiǎolì|Xiaoli] [上个月|shàng ge yuè|last month] [搬家了，|bānjiā le,|moved,] [走路|zǒulù|walking] [去|qù|to] [公司|gōngsī|company] [二十分钟|èrshí fēnzhōng|20 minutes] [就|jiù|then] [到，|dào,|arrive,] [很|hěn|very]
            <span class="blank-input review-blank"><span class="input-py">fāngbiàn</span><input type="text" data-ans="方便"></span>，[所以|suǒyǐ|so] [最近|zuìjìn|recently] [比|bǐ|than] [以前|yǐqián|before] [来得|lái de|came]
            <span class="blank-input review-blank"><span class="input-py">zǎo duō le</span><input type="text" data-ans="早多了"></span>。
            [她|tā|she] [还|hái|also] [打算|dǎsuàn|plans to]
            <span class="blank-input review-blank"><span class="input-py">mǎi</span><input type="text" data-ans="买"></span>
            [一辆|yí liàng|a]
            <span class="blank-input review-blank"><span class="input-py">zìxíngchē</span><input type="text" data-ans="自行车"></span>，[因为|yīnwèi|because] [以前|yǐqián|before] [那辆|nà liàng|that] [太|tài|too]
            <span class="blank-input review-blank"><span class="input-py">jiù</span><input type="text" data-ans="旧"></span> [了。|le.|(change)]
          </div>
          <div class="sent-en">Xiaoli moved last month — walking to work takes 20 minutes, very convenient, so she's been arriving much earlier than before. She also plans to buy a bicycle because the old one was too old.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[方便|fāngbiàn|convenient]、[早多了|zǎo duō le|much earlier]、[买|mǎi|buy]、[自行车|zìxíngchē|bicycle]、[旧|jiù|old]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [大山|Dàshān|Dashan] [在|zài|is] [看房子。|kàn fángzi.|looking at houses.] [中介公司|zhōngjiè gōngsī|agency] [的|de|(possessive)] [人|rén|person] [告诉|gàosu|tells] [他，|tā,|him,] [学校|xuéxiào|school] [里边|lǐbian|inside] [比|bǐ|than] [学校|xuéxiào|school] [外边|wàibiān|outside] [方便|fāngbiàn|convenient] [一点儿，|yìdiǎnr,|a bit,]
            <span class="blank-input review-blank"><span class="input-py">fùjìn</span><input type="text" data-ans="附近"></span>
            [有个|yǒu ge|there is a] [车站。|chēzhàn.|bus stop.] [学校|xuéxiào|school] [外边的|wàibiān de|outside] [房子|fángzi|house] [比|bǐ|than] [学校|xuéxiào|school] [里边的|lǐbian de|inside] [大|dà|big]
            <span class="blank-input review-blank"><span class="input-py">yìxiē</span><input type="text" data-ans="一些"></span>，[也|yě|also] [比|bǐ|than] [学校|xuéxiào|school] [里边的|lǐbian de|inside] [安静。|ānjìng.|quiet.] [大山|Dàshān|Dashan] [觉得|juéde|feels] [房子|fángzi|house] [大小|dàxiǎo|size] [没关系，|méi guānxi,|doesn't matter,] [最|zuì|most]
            <span class="blank-input review-blank"><span class="input-py">zhòngyào</span><input type="text" data-ans="重要"></span>
            [的|de|(possessive)] [是|shì|is]
            <span class="blank-input review-blank"><span class="input-py">huánjìng</span><input type="text" data-ans="环境"></span>。
          </div>
          <div class="sent-en">Dashan is looking at houses. The agency person tells him inside the school is a bit more convenient than outside, and there's a bus stop nearby. Houses outside the school are bigger and quieter than inside. Dashan feels house size doesn't matter — the most important thing is the environment.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[附近|fùjìn|nearby]、[一些|yìxiē|a bit]、[重要|zhòngyào|important]、[环境|huánjìng|environment]</div>
          </div>
        </div>
      </div>
    </div>
  `
};