window.LESSONS = window.LESSONS || {};

window.LESSONS[1] = {
  navLabel:'第1课',
  html: `
    <div class="lesson">
      <h2>第 1 课　周末你有什么打算
        <span class="title-py">Dì yī kè · Zhōumò nǐ yǒu shénme dǎsuàn</span>
        <small>Lesson 1 · What's your plan for the weekend?</small>
      </h2>
      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L1-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图01.png" alt="听力图01" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图01.png</b></span>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span>[听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [图片|túpiàn|picture]</div>
          <div class="zh stem">[男：|Nán:|M:] [喂，|wèi,|hello,] [请问|qǐngwèn|excuse me] [张经理|Zhāng jīnglǐ|Manager Zhang] [在吗？|zài ma?|is in?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [他|tā|he] [正在|zhèngzài|right now] [开会，|kāihuì,|in a meeting,] [您|nín|you] [半个小时|bàn ge xiǎoshí|half an hour] [以后|yǐhòu|later] [再打，|zài dǎ,|call again,] [好吗？|hǎo ma?|OK?]</div>
          <div class="sent-en">M: Hello, is Manager Zhang there?<br>W: He's in a meeting right now. Could you call back in half an hour?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>D（[打电话|dǎ diànhuà|make a phone call] → [前台|qiántái|the front desk] [接|jiē|answers] [电话|diànhuà|the phone]）</div>
        </div>
        <div class="q">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [怎么|zěnme|why] [又|yòu|again] [不高兴|bù gāoxìng|unhappy] [了？|le?|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [工作|gōngzuò|work] [一直|yìzhí|always] [忙，|máng,|busy,] [一次|yí cì|one time] [电影|diànyǐng|movie] [都|dōu|even] [没|méi|not] [跟我|gēn wǒ|with me] [一起|yìqǐ|together] [看过。|kàn guò.|seen]</div>
          <div class="sent-en">M: Why are you unhappy again?<br>W: You're always busy with work. You've never gone to a movie with me.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[两个人|liǎng ge rén|two people] [不高兴地|bù gāoxìng de|unhappily] [坐在|zuò zài|sitting on] [沙发|shāfā|the sofa] [上|shàng|(location)]）</div>
        </div>
        <div class="q">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[男：|Nán:|M:] [喂，|wèi,|hello,] [您好，|nín hǎo,|hello,] [请问|qǐngwèn|excuse me] [是|shì|is] [搬家公司|bānjiā gōngsī|moving company] [吗？|ma?|?] [我们|wǒmen|we] [要|yào|want to] [搬家。|bānjiā.|move house.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [请问|qǐngwèn|may I ask] [您|nín|you] [打算|dǎsuàn|plan] [什么时候|shénme shíhou|when] [搬？|bān?|move?]</div>
          <div class="sent-en">M: Hello, is this a moving company? We want to move.<br>W: When do you plan to move?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[搬家|bānjiā|moving house] [搬|bān|carrying] [箱子|xiāngzi|boxes]）</div>
        </div>
        <div class="q">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[男：|Nán:|M:] [爸、妈，|bà, mā,|Dad, Mom,] [今天|jīntiān|today] [我|wǒ|I] [给你们|gěi nǐmen|for you] [做|zuò|make] [晚饭，|wǎnfàn,|dinner,] [你们|nǐmen|you] [打算|dǎsuàn|plan] [吃|chī|eat] [什么？|shénme?|what?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [真的|zhēn de|really] [啊？|a?|?] [那|nà|then] [我们|wǒmen|we] [吃点儿|chī diǎnr|eat some] [牛肉|niúròu|beef] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: Dad, Mom, I'll cook dinner for you today. What would you like to eat?<br>W: Really? Then let's have some beef.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[做饭|zuòfàn|cooking] · [戴|dài|wearing] [厨师帽|chúshī mào|a chef’s hat] [的|de|(possessive)] [孩子|háizi|child]）</div>
        </div>
        <div class="q">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[男：|Nán:|M:] [今天|jīntiān|today] [的|de|(possessive)] [面包|miànbāo|bread] [真|zhēn|really] [便宜。|piányi.|cheap.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是|shì|yes] [啊，|a,|,] [那|nà|then] [我们|wǒmen|we] [多|duō|more] [买|mǎi|buy] [几个|jǐ ge|a few] [吧！|ba!|!]</div>
          <div class="sent-en">M: The bread is really cheap today.<br>W: Yeah, let's buy a few more!</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[在|zài|at] [超市|chāoshì|the supermarket] [买|mǎi|buying] [面包|miànbāo|bread]）</div>
        </div>
        <div class="q">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [这|zhè|this] [是|shì|is] [哪儿|nǎr|where] [啊？|a?|?] [你|nǐ|you] [开错|kāi cuò|drove wrong] [了|le|(past)] [吧？|ba?|right?] [我们|wǒmen|we] [怎么|zěnme|how] [回家|huí jiā|go home] [啊？|a?|?]</div>
          <div class="zh stem">[男：|Nán:|M:] [别|bié|don't] [着急，|zháojí,|worry,] [车上|chē shang|in the car] [有|yǒu|there is] [电子地图。|diànzǐ dìtú.|electronic map.]</div>
          <div class="sent-en">W: Where are we? You took the wrong turn! How are we going to get home?<br>M: Don't worry — there's a GPS in the car.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[车里|chē li|in the car] [的|de|(possessive)] [电子地图|diànzǐ dìtú|electronic map]）</div>
        </div>

        <h4 id="L1-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L1-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[这个|zhège|this] [电影|diànyǐng|movie] [一点儿|yìdiǎnr|at all] [意思|yìsi|interest] [也|yě|also] [没有，|méiyǒu,|have not,] [我们|wǒmen|we] [看书|kàn shū|read books] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">This movie isn't interesting at all. Let's read instead.</div>
          <div class="zh stem">★ [他|tā|he] [不|bù|not] [喜欢|xǐhuan|like] [这个|zhège|this] [电影。|diànyǐng.|movie.]</div>
          <div class="sent-en">★ He doesn't like this movie.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[他|tā|he] [说|shuō|says] [电影|diànyǐng|the movie]「[一点儿|yìdiǎnr|at all] [意思|yìsi|interest] [也|yě|even] [没有|méiyǒu|has none]」，[就是|jiùshì|means] [不|bù|not] [喜欢|xǐhuan|like]。" data-expl-en="He says the movie has no interest at all."></div>
        </div>
        <div class="q" id="L1-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[你|nǐ|you] [怎么|zěnme|why] [还|hái|still] [没|méi|not] [准备好？|zhǔnbèi hǎo?|ready?] [快点儿|kuài diǎnr|hurry up] [吧，|ba,|,] [没|méi|no] [时间|shíjiān|time] [了。|le.|(change)]</div>
          <div class="sent-en">Why aren't you ready yet? Hurry up, we're out of time.</div>
          <div class="zh stem">★ [他|tā|he] [一点儿|yìdiǎnr|at all] [也|yě|also] [不|bù|not] [着急。|zháojí.|worried.]</div>
          <div class="sent-en">★ He isn't worried at all.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[说话|shuōhuà|the speaker] [的|de|(possessive)] [人|rén|person] [在|zài|is] [催|cuī|urging] [他|tā|him]，[说明|shuōmíng|which shows] [他|tā|he] [很|hěn|very] [着急|zháojí|hurried]。" data-expl-en="The speaker is urging him, so he IS in a hurry."></div>
        </div>
        <div class="q" id="L1-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[明天|míngtiān|tomorrow] [的|de|(possessive)] [考试|kǎoshì|exam] [我|wǒ|I] [都|dōu|all] [复习|fùxí|reviewed] [好了，|hǎo le,|done,] [没问题。|méi wèntí.|no problem.]</div>
          <div class="sent-en">I've reviewed everything for tomorrow's exam — no problem.</div>
          <div class="zh stem">★ [他|tā|he] [考试|kǎoshì|exam] [考得|kǎo de|did] [很好。|hěn hǎo.|very well.]</div>
          <div class="sent-en">★ He did very well on the exam.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[考试|kǎoshì|the exam] [还|hái|still] [没|méi|hasn’t] [考|kǎo|been taken] [呢|ne|(particle)]，[只是|zhǐshì|only] [复习|fùxí|reviewed] [好|hǎo|well] [了|le|(change)]。" data-expl-en="The exam hasn't happened yet — he only reviewed."></div>
        </div>
        <div class="q" id="L1-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[去|qù|go to] [南方|nánfāng|the South] [旅游？|lǚyóu?|travel?] [去|qù|go to] [北方|běifāng|the North] [旅游？|lǚyóu?|travel?] [去|qù|go] [哪儿|nǎr|where] [旅游|lǚyóu|travel] [好|hǎo|good] [呢？|ne?|?]</div>
          <div class="sent-en">Travel to the South? Travel to the North? Where would be a good place to go?</div>
          <div class="zh stem">★ [他|tā|he] [还|hái|still] [没|méi|not] [想好|xiǎng hǎo|decided] [去|qù|go] [哪儿|nǎr|where] [旅游。|lǚyóu.|travel.]</div>
          <div class="sent-en">★ He hasn't decided where to travel yet.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[他|tā|he] [在|zài|is]「[南方|nánfāng|the South] [还是|háishì|or] [北方|běifāng|the North]」[之间|zhījiān|between] [犹豫|yóuyù|hesitating]，[说明|shuōmíng|which shows] [还|hái|still] [没|méi|haven’t] [想好|xiǎng hǎo|decided]。" data-expl-en="He's hesitating between North and South."></div>
        </div>
        <div class="q" id="L1-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[家里|jiā li|at home] [一个|yí ge|one] [鸡蛋|jīdàn|egg] [也|yě|also] [没有，|méiyǒu,|have not,] [明天|míngtiān|tomorrow] [早上|zǎoshang|morning] [吃|chī|eat] [什么|shénme|what] [啊？|a?|?]</div>
          <div class="sent-en">There isn't a single egg at home. What will we eat tomorrow morning?</div>
          <div class="zh stem">★ [家里|jiā li|at home] [还|hái|still] [有|yǒu|has] [很多|hěnduō|many] [鸡蛋。|jīdàn.|eggs.]</div>
          <div class="sent-en">★ There are still many eggs at home.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [说|shuō|says]「[一个|yí ge|one] [鸡蛋|jīdàn|egg] [也|yě|even] [没有|méiyǒu|there isn’t]」，[和|hé|opposite to]「[还|hái|still] [有|yǒu|has] [很多|hěnduō|many] [鸡蛋|jīdàn|eggs]」[相反|xiāngfǎn|opposite]。" data-expl-en="The text says 'not a single egg', opposite of 'many eggs'."></div>
        </div>

        <h4 id="L1-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L1-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你们|nǐmen|you] [等一下，|děng yíxià,|wait,] [我|wǒ|I] [穿好|chuān hǎo|put on] [衣服，|yīfu,|clothes,] [送送|sòng song|see off] [你们。|nǐmen.|you.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [太|tài|too] [客气|kèqi|polite] [了，|le,|,] [外边|wàibiān|outside] [冷，|lěng,|cold,] [别|bié|don't] [送了。|sòng le.|see off.]</div>
          <div class="sent-en">M: Wait a moment, I'll put on my coat and walk you out.<br>W: You're too kind. It's cold outside — no need.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [打算|dǎsuàn|plans] [做|zuò|to do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the man plan to do?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[送朋友|sòng péngyou|see off friends]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[送衣服|sòng yīfu|give clothes]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[去外边|qù wàibiān|go outside]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[男的|nánde|the man] [说|shuō|says]「[送送|sòng song|see off] [你们|nǐmen|you]」，[意思|yìsi|meaning] [是|shì|is] [要|yào|to] [送|sòng|see off] [朋友|péngyou|friends] [出门。|chūmén.|out.]</div>
        </div>
        <div class="q" id="L1-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [下个月|xià ge yuè|next month] [我们|wǒmen|we] [去|qù|go to] [南方|nánfāng|the South] [旅游，|lǚyóu,|travel,] [怎么样？|zěnmeyàng?|how about?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [南方|nánfāng|the South] [我|wǒ|I] [还|hái|still] [一次|yí cì|once] [都|dōu|even] [没|méi|not] [去过|qù guò|been to] [呢，|ne,|,] [一直|yìzhí|always] [想|xiǎng|want] [去|qù|to go] [看看。|kàn kan.|see.]</div>
          <div class="sent-en">M: How about we travel to the South next month?<br>W: I've never been to the South — I've always wanted to go.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[去过一次南方|qù guò yí cì nánfāng|been once]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[上个月去了南方|shàng ge yuè qù le nánfāng|went last month]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[很想去南方|hěn xiǎng qù nánfāng|really wants to go]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[一次|yí cì|once] [都|dōu|even] [没|méi|not] [去过|qù guò|been]」「[一直|yìzhí|always] [想|xiǎng|wanted] [去|qù|to go] [看看|kàn kan|have a look]」= [很|hěn|really] [想|xiǎng|wants] [去。|qù.|to go.]</div>
        </div>
        <div class="q" id="L1-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [大雨，|Dàyǔ,|Dayu,] [你|nǐ|you] [快|kuài|quickly] [来|lái|come] [帮我|bāng wǒ|help me] [一下。|yíxià.|a bit.]</div>
          <div class="zh stem">[男：|Nán:|M:] [这么|zhème|so] [多|duō|many] [东西，|dōngxi,|things,] [你|nǐ|you] [怎么|zěnme|how] [一个人|yí ge rén|alone] [搬？|bān?|move?] [你|nǐ|your] [儿子|érzi|son] [去|qù|went] [哪儿|nǎr|where] [了？|le?|?]</div>
          <div class="sent-en">W: Dayu, come and give me a hand!<br>M: So many things — how are you moving them by yourself? Where's your son?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [请|qǐng|asks] [男的|nánde|the man] [做|zuò|to do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the woman ask the man to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[买东西|mǎi dōngxi|buy things]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[搬东西|bān dōngxi|carry things]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[找儿子|zhǎo érzi|find her son]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[女的|nǚde|the woman] [让|ràng|asks] [男的|nánde|the man]「[帮|bāng|help] [我|wǒ|me] [一下|yíxià|a bit]」，[男的|nánde|the man’s] [回答|huídá|reply] [提到|tídào|mentions]「[搬|bān|move]」。</div>
        </div>
        <div class="q" id="L1-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[男：|Nán:|M:] [别|bié|don't] [买票|mǎi piào|buy tickets] [了，|le,|,] [一个|yí ge|one] [好看|hǎokàn|good] [的|de|(possessive)] [电影|diànyǐng|movie] [都|dōu|even] [没有。|méiyǒu.|there isn't.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|then] [看看|kàn kan|take a look at] [明天|míngtiān|tomorrow] [的|de|(possessive)] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: Don't buy tickets — there isn't a single good movie.<br>W: Then let's look at tomorrow's.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [为什么|wèishénme|why] [没|méi|didn’t] [买票？|mǎi piào?|buy tickets?]</div>
          <div class="sent-en">Q: Why didn't they buy tickets?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[票卖完了|piào mài wán le|sold out]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[没有好看的电影|méiyǒu hǎokàn de diànyǐng|no good movies]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[没带钱|méi dài qián|didn't bring money]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[男的|nánde|the man] [说|shuō|says]「[一个|yí ge|one] [好看|hǎokàn|good] [的|de|(possessive)] [电影|diànyǐng|movie] [都|dōu|even] [没有|méiyǒu|there isn’t]」。</div>
        </div>
        <div class="q" id="L1-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [这|zhè|this] [是|shì|is] [哪儿|nǎr|where] [啊？|a?|?] [我|wǒ|I] [没|méi|not] [带|dài|bring] [地图，|dìtú,|map,] [我们|wǒmen|we] [问问|wèn wen|ask] [那边|nàbiān|over there] [的|de|(possessive)] [游客|yóukè|tourist] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [不用，|búyòng,|No need,] [我|wǒ|I] [就是|jiùshì|am] [地图，|dìtú,|a map,] [你|nǐ|you] [问我|wèn wǒ|ask me] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W: Where are we? I didn't bring a map. Let's ask that tourist.<br>M: No need — I AM the map. Just ask me.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [是|shì|(is)] [什么|shénme|what] [意思？|yìsi?|meaning?]</div>
          <div class="sent-en">Q: What does the man mean?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[他带地图了|tā dài dìtú le|brought a map]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[他没带地图|tā méi dài dìtú|didn't bring a map]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[他知道这是哪儿|tā zhīdào zhè shì nǎr|knows this place]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[他|tā|he] [说|shuō|says]「[我|wǒ|I] [就是|jiùshì|am] [地图|dìtú|the map]」，[意思|yìsi|meaning] [是|shì|is]「[我|wǒ|I] [知道|zhīdào|know] [路|lu|the way]、[认识|rènshi|know] [这个|zhège|this] [地方|dìfang|place]」。</div>
        </div>

        <h4 id="L1-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L1-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [小周，|Xiǎo Zhōu,|Xiao Zhou,] [你们|nǐmen|you] [搬家|bānjiā|moved] [了？|le?|?]</div>
          <div class="zh stem">[男：|Nán:|M:] [是|shì|yes] [啊，|a,|,] [从|cóng|from] [公司|gōngsī|company] [南边|nánbiān|south side] [搬|bān|moved] [到了|dào le|to] [医院|yīyuàn|hospital] [北边。|běibiān.|north side.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是|shì|yes] [吗？|ma?|?] [那|nà|then] [你们|nǐmen|you] [离|lí|from] [白雪|Báixuě|Baixue] [家|jiā|home] [很|hěn|very] [近|jìn|close] [吧。|ba.|right?]</div>
          <div class="zh stem">[男：|Nán:|M:] [对，|duì,|right,] [他们|tāmen|they] [家|jiā|home] [搬|bān|moved] [到了|dào le|to] [医院|yīyuàn|hospital] [南边。|nánbiān.|south side.]</div>
          <div class="sent-en">W: Xiao Zhou, you moved?<br>M: Yes, from the south of the company to the north of the hospital.<br>W: Really? Then you're close to Baixue's home.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [现在|xiànzài|now] [小周家|Xiǎo Zhōu jiā|Xiao Zhou’s home] [在|zài|is] [哪儿？|nǎr?|where?]</div>
          <div class="sent-en">Q: Where is Xiao Zhou's home now?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[公司南边|gōngsī nánbiān|south of company]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[医院北边|yīyuàn běibiān|north of hospital]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[医院北门|yīyuàn běi mén|north gate]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[从|cóng|from] [公司|gōngsī|the company] [南边|nánbiān|south side] [搬|bān|moved] [到了|dào le|to] [医院|yīyuàn|the hospital] [北边|běibiān|north side]」。</div>
        </div>
        <div class="q" id="L1-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这|zhè|this] [是|shì|is] [你|nǐ|your] [的|de|(possessive)] [小猫|xiǎomāo|kitten] [吗？|ma?|?] [真|zhēn|really] [漂亮！|piàoliang!|pretty!]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [谢谢。|xièxie.|thanks.]</div>
          <div class="zh stem">[男：|Nán:|M:] [它|tā|it] [叫|jiào|is called] [什么|shénme|what] [名字？|míngzi?|name?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [还|hái|still] [没|méi|not] [想好|xiǎng hǎo|decided] [叫|jiào|call] [它|tā|it] [什么|shénme|what] [呢。|ne.|(particle)]</div>
          <div class="sent-en">M: Is this your kitten? So pretty!<br>W: Thanks.<br>M: What's its name?<br>W: I haven't decided what to call it yet.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman’s] [猫|māo|cat] [叫|jiào|is called] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What is the woman's cat called?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[谢谢|xièxie|thanks]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[漂亮|piàoliang|pretty]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[还没有名字|hái méiyǒu míngzi|no name yet]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[我|wǒ|I] [还|hái|still] [没|méi|haven’t] [想好|xiǎng hǎo|decided] [叫|jiào|to call] [它|tā|it] [什么|shénme|what] [呢|ne|(particle)]」= [还|hái|still] [没有|méiyǒu|has no] [名字。|míngzi.|name.]</div>
        </div>
        <div class="q" id="L1-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [帮了|bāng le|helped] [我|wǒ|me] [这么|zhème|so] [多，|duō,|much,] [谢谢你。|xièxie nǐ.|thank you.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [不客气。|bú kèqi.|You're welcome.]</div>
          <div class="zh stem">[男：|Nán:|M:] [晚上|wǎnshang|evening] [我|wǒ|I] [请|qǐng|invite] [你|nǐ|you] [吃饭，|chīfàn,|dinner,] [就|jiù|just] [去|qù|go to] [公司|gōngsī|company] [南边|nánbiān|south side] [的|de|(possessive)] [那家|nà jiā|that] [饭馆。|fànguǎn.|restaurant.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好|hǎo|good] [啊，|a,|,] [我|wǒ|I] [还|hái|still] [一次|yí cì|once] [都|dōu|even] [没|méi|not] [去过|qù guò|been to] [呢。|ne.|(emphasis)]</div>
          <div class="sent-en">M: You helped me so much — thank you.<br>W: You're welcome.<br>M: I'll treat you to dinner tonight at the restaurant south of the company.<br>W: Sure, I've never been there.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[没去过那个饭馆|méi qù guò nàge fànguǎn|hasn't been there]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[晚上没有时间|wǎnshang méiyǒu shíjiān|no time in the evening]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[要请男的吃饭|yào qǐng nánde chīfàn|will treat the man]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[我|wǒ|I] [还|hái|still] [一次|yí cì|once] [都|dōu|even] [没|méi|not] [去过|qù guò|been] [呢|ne|(emphasis)]」。</div>
        </div>
        <div class="q" id="L1-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [怎么|zěnme|why] [了？|le?|?] [一天|yì tiān|all day] [都|dōu|all] [不高兴。|bù gāoxìng.|unhappy.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [明天|míngtiān|tomorrow] [就|jiù|will] [要|yào|(about to)] [考试|kǎoshì|take an exam] [了，|le,|,] [我|wǒ|I] [一点儿|yìdiǎnr|at all] [都|dōu|even] [没|méi|not] [复习|fùxí|reviewed] [呢。|ne.|(emphasis)]</div>
          <div class="zh stem">[男：|Nán:|M:] [别|bié|don't] [着急，|zháojí,|worry,] [你|nǐ|you] [学得|xué de|study] [好，|hǎo,|well,] [考试|kǎoshì|exam] [没问题。|méi wèntí.|no problem.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [希望|xīwàng|hope] [这次|zhè cì|this time] [能|néng|can] [考好。|kǎo hǎo.|do well.]</div>
          <div class="sent-en">M: What's wrong? You've been unhappy all day.<br>W: I have an exam tomorrow and I haven't reviewed at all.<br>M: Don't worry, you study well.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[考得不好|kǎo de bù hǎo|did badly]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[没带手表|méi dài shǒubiǎo|didn't bring watch]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[还没复习|hái méi fùxí|hasn't reviewed yet]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[一点儿|yìdiǎnr|at all] [都|dōu|even] [没|méi|not] [复习|fùxí|reviewed] [呢|ne|(emphasis)]」。</div>
        </div>
        <div class="q" id="L1-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|your] [桌子|zhuōzi|desk] [上|shàng|on] [有|yǒu|there are] [那么|nàme|so] [多|duō|many] [书|shū|books] [啊？|a?|?]</div>
          <div class="zh stem">[男：|Nán:|M:] [对，|duì,|right,] [都|dōu|all] [是|shì|are] [我|wǒ|I] [买|mǎi|bought] [的。|de.|(nominalizer)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [真|zhēn|really] [爱|ài|love] [读书。|dúshū.|reading.] [哪本|nǎ běn|which one] [最|zuì|most] [有意思？|yǒu yìsi?|interesting?] [给我|gěi wǒ|to me] [介绍|jièshào|introduce] [一下|yíxià|a bit] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [爱|ài|love] [买书，|mǎi shū,|buying books,] [但是|dànshì|but] [这些|zhèxiē|these] [书|shū|books] [我|wǒ|I] [一本|yì běn|one] [都|dōu|even] [没|méi|not] [读过。|dú guò.|read.]</div>
          <div class="sent-en">W: You have so many books!<br>M: Yes, I bought them all.<br>W: Which is the most interesting?<br>M: I love buying books, but I haven't read a single one.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[爱买书|ài mǎi shū|loves buying books]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[爱看书|ài kàn shū|loves reading]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[读了一本书|dú le yì běn shū|read one book]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[我|wǒ|I] [爱|ài|love] [买书，|mǎi shū,|buying books,] [但是|dànshì|but] [这些|zhèxiē|these] [书|shū|books] [我|wǒ|I] [一本|yì běn|one] [都|dōu|even] [没|méi|not] [读过|dú guò|read]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L1-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L1-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[不是，|bú shì,|No,] [我|wǒ|I] [一直|yìzhí|always] [在|zài|at] [这家|zhè jiā|this] [医院|yīyuàn|hospital] [工作。|gōngzuò.|work.]</span><div class="sent-en">No, I've always worked at this hospital.</div></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[对不起，|duìbuqǐ,|Sorry,] [周老师|Zhōu lǎoshī|Teacher Zhou] [现在|xiànzài|now] [不在。|bú zài.|is not here.]</span><div class="sent-en">Sorry, Teacher Zhou is not here right now.</div></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[今天|jīntiān|today] [学校里|xuéxiào li|school] [一个人|yí ge rén|one person] [都|dōu|even] [没有，|méiyǒu,|none,] [大家|dàjiā|everyone] [都|dōu|all] [去|qù|went] [哪儿|nǎr|where] [了？|le?|?]</span><div class="sent-en">There's no one at school today — where has everyone gone?</div></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[周末|zhōumò|weekend] [有|yǒu|have] [时间|shíjiān|time] [吗？|ma?|?] [我|wǒ|I] [打算|dǎsuàn|plan] [请|qǐng|invite] [你|nǐ|you] [吃个饭。|chī ge fàn.|have a meal.]</span><div class="sent-en">Do you have time this weekend? I'd like to treat you to a meal.</div></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span><div class="sent-en">Of course. We'll take the bus first, then transfer to the subway.</div></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[可能|kěnéng|maybe] [是|shì|is] [工作|gōngzuò|work] [太|tài|too] [累，|lèi,|tired,] [生病|shēngbìng|sick] [了。|le.|(change)]</span><div class="sent-en">Maybe he's just too tired from work and got sick.</div></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [怎么|zěnme|how] [去|qù|go] [那儿|nàr|there] [吗？|ma?|?] （E）</div>
          <div class="sent-en">Do you know how to get there? — (E) Of course. We take the bus first, then transfer to the subway.</div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L1-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[你|nǐ|you] [怎么|zěnme|why] [了？|le?|?] [今天|jīntiān|today] [一点儿|yìdiǎnr|even a bit] [东西|dōngxi|food] [都|dōu|even] [没|méi|not] [吃。|chī.|eat.] （<span class="blank">　</span>）</div>
          <div class="sent-en">What's wrong? You haven't eaten anything today.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L1-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[今天|jīntiān|today] [是|shì|is] [周末，|zhōumò,|weekend,] [你|nǐ|you] [去|qù|go to] [学校|xuéxiào|school] [做|zuò|do] [什么？|shénme?|what?] （<span class="blank">　</span>）</div>
          <div class="sent-en">Today is the weekend — what are you going to school for?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L1-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[好|hǎo|OK] [啊，|a,|,] [哪天？|nǎ tiān?|which day?] （<span class="blank">　</span>）</div>
          <div class="sent-en">Sure, which day?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L1-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[你|nǐ|you] [是|shì|are] [新来的|xīn lái de|newly arrived] [医生|yīshēng|doctor] [吗？|ma?|?] （<span class="blank">　</span>）</div>
          <div class="sent-en">Are you a newly arrived doctor?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L1-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[那|nà|then] [我|wǒ|I] [明天|míngtiān|tomorrow] [再|zài|again] [来|lái|come] [吧，|ba,|,] [谢谢。|xièxie.|thanks.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Then I'll come again tomorrow. Thank you.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L1-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L1-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[一直|yìzhí|always]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[周末|zhōumò|weekend]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[带|dài|bring]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[搬|bān|move]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[面包|miànbāo|bread]</span></div>
        </div>
        <div class="q example">
          <div class="qhead"><span class="num">例</span></div>
          <div class="zh">[她|tā|she] [说话|shuōhuà|speaks] [的|de|(possessive)] （E [声音|shēngyīn|voice]） [多|duō|how] [好听|hǎotīng|nice] [啊！|a!|!]</div>
          <div class="sent-en">Her voice is so nice!</div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L1-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[这几年|zhè jǐ nián|these years] [我|wǒ|I] （<span class="blank">　</span>） [忙|máng|busy] [工作，|gōngzuò,|work,] [没|méi|no] [时间|shíjiān|time] [去|qù|to] [旅游。|lǚyóu.|travel.]</div>
          <div class="sent-en">These past few years I've been busy with work and haven't had time to travel.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L1-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[你|nǐ|you] （<span class="blank">　</span>） [家|jiā|home] [的|de|(possessive)] [时候，|shíhou,|when,] [我|wǒ|I] [来|lái|come] [帮|bāng|help] [你|nǐ|you] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">When you move house, let me come and help you.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L1-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[这个|zhège|this] （<span class="blank">　</span>） [很|hěn|very] [不错，|búcuò,|good,] [是|shì|is] [你|nǐ|you] [买|mǎi|bought] [的|de|(nominalizer)] [吗？|ma?|?]</div>
          <div class="sent-en">This bread is quite good — did you buy it?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L1-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [这件|zhè jiàn|this] [新|xīn|new] [衣服|yīfu|clothes] [是|shì|was] [什么时候|shénme shíhou|when] [买|mǎi|bought] [的？|de?|?]</div>
          <div class="zh">[B：|B:|B:] [上|shàng|last] （<span class="blank">　</span>），[我|wǒ|I] [妹妹|mèimei|sister] [跟|gēn|with] [我|wǒ|me] [一起|yìqǐ|together] [去|qù|went] [买|mǎi|to buy] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">A: When did you buy these new clothes?<br>B: Last weekend — my sister went with me.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L1-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [现在|xiànzài|now] [北方|běifāng|the North] [很|hěn|very] [冷，|lěng,|cold,] [多|duō|more] （<span class="blank">　</span>） [几件|jǐ jiàn|a few] [衣服|yīfu|clothes] [吧。|ba.|(suggestion)]</div>
          <div class="zh">[B：|B:|B:] [我|wǒ|I] [已经|yǐjīng|already] [准备好|zhǔnbèi hǎo|prepared] [了。|le.|(change)]</div>
          <div class="sent-en">A: It's very cold in the North now — bring a few more clothes.<br>B: I've already prepared.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L1-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L1-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[妈妈|māma|Mom] [是|shì|is] [个|ge|(MW)] [北方人，|běifāng rén,|a Northerner,] [20 岁|èrshí suì|20 years old] [的|de|(possessive)] [时候|shíhou|time] [跟|gēn|with] [爸爸|bàba|Dad] [一起|yìqǐ|together] [搬|bān|moved] [到|dào|to] [南方|nánfāng|the South] [住，|zhù,|live,] [一直|yìzhí|always] [住|zhù|lived] [到|dào|until] [今天。|jīntiān.|today.] [南方话|nánfāng huà|Southern dialect] [她|tā|she] [现在|xiànzài|now] [能|néng|can] [听懂|tīngdǒng|understand] [一点儿，|yìdiǎnr,|a little,] [但是|dànshì|but] [一点儿|yìdiǎnr|not at all] [也|yě|also] [不会|bú huì|cannot] [说。|shuō.|speak.]</div>
          <div class="sent-en">Mom is a Northerner. At 20 she moved to the South with Dad and has lived there ever since. She can understand a little of the Southern dialect now, but she can't speak it.</div>
          <div class="zh ask">★ [妈妈|māma|Mom]：</div>
          <div class="sent-en">★ Mom: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[不是南方人|bú shì nánfāng rén|not a Southerner]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[会说南方话|huì shuō nánfāng huà|can speak Southern]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[今天搬到南方|jīntiān bān dào nánfāng|moved today]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[她|tā|she] [是|shì|is] [北方人，|běifāng rén,|a Northerner,] 20 [岁|suì|years old] [才|cái|only then] [搬|bān|moved] [到|dào|to] [南方。|nánfāng.|the South.]</div>
        </div>
        <div class="q" id="L1-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[我们|wǒmen|we] [小时候|xiǎo shíhou|when young] [下了课|xià le kè|after class] [都|dōu|all] [在|zài|at] [外边|wàibiān|outside] [玩儿游戏，|wánr yóuxì,|played games,] [那时候|nà shíhou|at that time] [的|de|(possessive)] [游戏|yóuxì|game] [是|shì|was] [运动。|yùndòng.|exercise.] [现在|xiànzài|now] [的|de|(possessive)] [孩子|háizi|children] [也|yě|also] [玩儿游戏，|wánr yóuxì,|play games,] [他们|tāmen|they] [在|zài|at] [家里，|jiā li,|home,] [坐在|zuò zài|sit at] [电脑|diànnǎo|computer] [桌前，|zhuō qián,|desk,] [玩儿|wánr|play] [的|de|(nominalizer)] [是|shì|is] [电脑游戏。|diànnǎo yóuxì.|computer games.]</div>
          <div class="sent-en">When we were kids, after class we played outside. Today's kids play at home, at the computer — computer games.</div>
          <div class="zh ask">★ [现在|xiànzài|Today’s] [的|de|(possessive)] [孩子们|háizimen|kids] [喜欢：|xǐhuan:|like:]</div>
          <div class="sent-en">★ Today's kids like: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[运动|yùndòng|exercise]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[玩儿电脑游戏|wánr diànnǎo yóuxì|computer games]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[在外边玩儿游戏|zài wàibiān wánr yóuxì|playing outside]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B</div>
        </div>
        <div class="q" id="L1-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[中国人|Zhōngguó rén|Chinese people] [说：|shuō:|say:] [做事|zuòshì|do things] [的|de|(possessive)] [时候|shíhou|time] [别|bié|don't] [着急，|zháojí,|hurry,] [要|yào|should] [多|duō|more] [想想，|xiǎng xiang,|think,] [想好|xiǎng hǎo|think over] [了|le|(past)] [再|zài|then] [做。|zuò.|do.]</div>
          <div class="sent-en">Chinese people say: when doing things, don't rush. Think it over, and once you've thought it through, then act.</div>
          <div class="zh ask">★ [中国人|Zhōngguó rén|Chinese people] [觉得|juéde|think] [做事|zuòshì|when doing things] [不能：|bùnéng:|you mustn’t:]</div>
          <div class="sent-en">★ Chinese people think that when doing things one mustn't: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[着急|zháojí|hurry]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[想好|xiǎng hǎo|think over]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[多想|duō xiǎng|think more]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[做事|zuòshì|when doing things] [的|de|(possessive)] [时候|shíhou|time] [别|bié|don’t] [着急|zháojí|rush]」。</div>
        </div>
        <div class="q" id="L1-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[我|wǒ|I] [爱|ài|love] [旅游，|lǚyóu,|travelling,] [喜欢|xǐhuan|like] [走南走北。|zǒu nán zǒu běi.|travel around.] [第一次|dì yī cì|first time] [去|qù|went] [旅游，|lǚyóu,|travelling,] [我|wǒ|I] [买|mǎi|bought] [最|zuì|most] [便宜|piányi|cheap] [的|de|(possessive)] [火车票，|huǒchē piào,|train ticket,] [因为|yīnwèi|because] [那时候|nà shíhou|at that time] [没有|méiyǒu|didn't have] [那么|nàme|so] [多|duō|much] [钱。|qián.|money.] [现在，|xiànzài,|Now,] [我|wǒ|I] [可以|kěyǐ|can] [开车|kāichē|drive] [去|qù|to] [想|xiǎng|want] [去|qù|to go] [的|de|(possessive)] [地方，|dìfang,|place,] [车上|chē shang|in the car] [有|yǒu|there is] [电子地图，|diànzǐ dìtú,|electronic map,] [能|néng|can] [告诉|gàosu|tell] [我|wǒ|me] [怎么|zěnme|how] [走。|zǒu.|go.]</div>
          <div class="sent-en">I love travelling around. On my first trip I bought the cheapest train ticket. Now I can drive wherever I want — the car has a GPS.</div>
          <div class="zh ask">★ [我|wǒ|I] [现在：|xiànzài:|now:]</div>
          <div class="sent-en">★ Now I: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[没有那么多钱|méiyǒu nàme duō qián|don't have that money]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[喜欢坐火车|xǐhuan zuò huǒchē|like taking trains]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[可以开车旅游|kěyǐ kāichē lǚyóu|can travel by car]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[现在，|xiànzài,|Now,] [我|wǒ|I] [可以|kěyǐ|can] [开车|kāichē|drive] [去|qù|to] [想|xiǎng|want] [去|qù|to go] [的|de|(possessive)] [地方|dìfang|place]」。</div>
        </div>
        <div class="q" id="L1-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[南方|nánfāng|the South] [我|wǒ|I] [去过|qù guò|have been] [很多次，|hěnduō cì,|many times,] [但是|dànshì|but] [妻子|qīzi|wife] [一次|yí cì|once] [也|yě|even] [没|méi|not] [去过。|qù guò.|been to.] [我|wǒ|I] [说过|shuō guò|said] [很多次|hěnduō cì|many times] [“明年|“míngnián|“next year] [带|dài|take] [你|nǐ|you] [去”，|qù”,|to go”,] [但是|dànshì|but] [因为|yīnwèi|because] [工作|gōngzuò|work] [忙，|máng,|busy,] [一直|yìzhí|always] [到|dào|until] [现在|xiànzài|now] [也|yě|also] [没|méi|not] [带|dài|take] [她|tā|her] [去，|qù,|to go,] [我|wǒ|I] [觉得|juéde|feel] [很|hěn|very] [对不起|duìbuqǐ|sorry to] [妻子。|qīzi.|wife.]</div>
          <div class="sent-en">I've been to the South many times, but my wife has never been once. I've promised many times to take her, but because of work I still haven't. I feel very sorry.</div>
          <div class="zh ask">★ [妻子|qīzi|wife]：</div>
          <div class="sent-en">★ Wife: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[工作很忙|gōngzuò hěn máng|very busy]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[没去过南方|méi qù guò nánfāng|hasn't been to the South]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[觉得很对不起|juéde hěn duìbuqǐ|feels very sorry]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[妻子|qīzi|wife] [一次|yí cì|once] [也|yě|even] [没|méi|not] [去过|qù guò|been]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L1-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L1-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[面包|miànbāo|bread] [一个|yí ge|one] [商店里|shāngdiàn li|in the shop] [没有|méiyǒu|no] [也|yě|either]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[商店里|shāngdiàn li|In the shop] [一个|yí ge|one] [面包|miànbāo|loaf of bread] [也|yě|even] [没有。|méiyǒu.|there isn’t.]<div class="sent-en">There isn't a single loaf of bread in the shop.</div></div>
        </div>
        <div class="write-item" id="L1-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[想|xiǎng|think] [好|hǎo|well] [吃|chī|eat] [什么|shénme|what] [还没|hái méi|not yet] [我|wǒ|I]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|I] [还|hái|still] [没|méi|haven’t] [想好|xiǎng hǎo|decided] [吃|chī|to eat] [什么。|shénme.|what.]<div class="sent-en">I haven't decided what to eat yet.</div></div>
        </div>
        <div class="write-item" id="L1-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[没下|méi xià|hasn't fallen] [雪|xuě|snow] [一点儿|yìdiǎnr|a bit] [都|dōu|even] [今年|jīnnián|this year]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[今年|jīnnián|this year] [一点儿|yìdiǎnr|at all] [雪|xuě|snow] [都|dōu|even] [没|méi|hasn’t] [下。|xià.|fallen.]<div class="sent-en">It hasn't snowed at all this year.</div></div>
        </div>
        <div class="write-item" id="L1-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[也|yě|either] [咖啡|kāfēi|coffee] [一杯|yì bēi|one cup] [没喝|méi hē|didn't drink] [今天下午|jīntiān xiàwǔ|this afternoon] [我|wǒ|I]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[今天下午|jīntiān xiàwǔ|this afternoon] [我|wǒ|I] [一杯|yì bēi|one cup of] [咖啡|kāfēi|coffee] [也|yě|even] [没|méi|didn’t] [喝。|hē.|drink.]<div class="sent-en">I didn't drink a single cup of coffee this afternoon.</div></div>
        </div>
        <div class="write-item" id="L1-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[好|hǎo|done] [水果|shuǐguǒ|fruit] [吗|ma|?] [洗|xǐ|wash] [你|nǐ|you] [了|le|(past)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|you] [洗好|xǐ hǎo|washed] [水果|shuǐguǒ|the fruit] [了|le|(past)] [吗？|ma?|?]<div class="sent-en">Have you finished washing the fruit?</div></div>
        </div>

        <h4 id="L1-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L1-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[下午|xiàwǔ|afternoon] [我|wǒ|I] [一|yī|all] <span class="blank-input"><span class="input-py">zhí</span><input type="text" data-ans="直"></span> [在|zài|at] [房间|fángjiān|room] [里|li|inside] [看书。|kàn shū.|read.]</div>
          <div class="sent-en">I read in my room all afternoon.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[直|zhí|(as in 一直 "always")]</span></div>
        </div>
        <div class="write-item" id="L1-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[我家|wǒ jiā|my home] [在|zài|is at] [学校|xuéxiào|school] [的|de|(possessive)] <span class="blank-input"><span class="input-py">běi</span><input type="text" data-ans="北"></span> [边。|biān.|side.]</div>
          <div class="sent-en">My home is on the north side of the school.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[北|běi|north]</span></div>
        </div>
        <div class="write-item" id="L1-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[周|zhōu|week] <span class="blank-input"><span class="input-py">mò</span><input type="text" data-ans="末"></span> [我|wǒ|I] [请|qǐng|invite] [你|nǐ|you] [去|qù|go] [跳舞，|tiàowǔ,|dance,] [怎么样？|zěnmeyàng?|how about?]</div>
          <div class="sent-en">How about I invite you to go dancing this weekend?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[末|mò|end]（[周末|zhōumò|weekend]）</span></div>
        </div>
        <div class="write-item" id="L1-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[我|wǒ|I] [想|xiǎng|want] <span class="blank-input"><span class="input-py">gēn</span><input type="text" data-ans="跟"></span> [你们|nǐmen|you] [一起|yìqǐ|together] [去|qù|go] [打篮球，|dǎ lánqiú,|play basketball,] [可以|kěyǐ|may] [吗？|ma?|?]</div>
          <div class="sent-en">I'd like to play basketball with you — is that OK?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[跟|gēn|with]</span></div>
        </div>
        <div class="write-item" id="L1-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[我们|wǒmen|we] [明天|míngtiān|tomorrow] [就|jiù|will] [要|yào|(about to)] <span class="blank-input"><span class="input-py">bān</span><input type="text" data-ans="搬"></span> [家|jiā|home] [了。|le.|(change)]</div>
          <div class="sent-en">We're going to move house tomorrow.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[搬|bān|move]（[搬家|bānjiā|move house]）</span></div>
        </div>

        <h4 id="L1-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L1-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[小丽|Xiǎolì|Xiaoli] [说|shuō|said] [她|tā|she] [要|yào|will] <span class="blank-input"><input type="text" data-ans="跟"></span> [我|wǒ|me] [一起|yìqǐ|together] [去|qù|go] [外地|wàidì|other places] [旅游，|lǚyóu,|travel,] [我|wǒ|I] <span class="blank-input"><input type="text" data-ans="很"></span> [高兴。|gāoxìng.|happy.]</div>
          <div class="zh" style="margin-top:6px;">[很|hěn|very]　[跟|gēn|with]</div>
          <div class="sent-en">Xiaoli said she'd travel with me — I'm very happy.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[跟|gēn|with]、[很|hěn|very]</div>
        </div>
        <div class="write-item" id="L1-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[这个|zhège|this] <span class="blank-input"><input type="text" data-ans="周"></span> [末，|mò,|end,] [我们|wǒmen|we] [几个|jǐ ge|a few] <span class="blank-input"><input type="text" data-ans="同"></span> [学|xué|study] [要|yào|will] [去|qù|go to] [老师|lǎoshī|teacher] [家。|jiā.|home.]</div>
          <div class="zh" style="margin-top:6px;">[同|tóng|same]　[周|zhōu|week]</div>
          <div class="sent-en">This weekend, a few classmates and I are going to the teacher's home.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[周|zhōu|(as in 周末 “weekend”)]、[同|tóng|(as in 同学 “classmate”)]</div>
        </div>
        <div class="write-item" id="L1-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[那个|nàge|that] [商店|shāngdiàn|shop] [的|de|(possessive)] [东西|dōngxi|things] [非|fēi|very] <span class="blank-input"><input type="text" data-ans="常"></span> [便宜，|piányi,|cheap,] [明天|míngtiān|tomorrow] [我|wǒ|I] <span class="blank-input"><input type="text" data-ans="带"></span> [你|nǐ|you] [去|qù|go] [看看。|kàn kan.|have a look.]</div>
          <div class="zh" style="margin-top:6px;">[常|cháng|often]　[带|dài|bring]</div>
          <div class="sent-en">That shop's things are really cheap. I'll take you there tomorrow.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[常|cháng|(as in 非常 “very”)]、[带|dài|take]</div>
        </div>
        <div class="write-item" id="L1-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[这个|zhège|this] [星期|xīngqī|week] [我|wǒ|I] [一|yī|all] <span class="blank-input"><input type="text" data-ans="直"></span> [忙，|máng,|busy,] <span class="blank-input"><input type="text" data-ans="真"></span> [累|lěi|tired] [啊！|a!|!]</div>
          <div class="zh" style="margin-top:6px;">[真|zhēn|really]　[直|zhí|straight]</div>
          <div class="sent-en">I've been busy all week — I'm really tired!</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[直|zhí|(as in 一直 “always”)]、[真|zhēn|really]</div>
        </div>
        <div class="write-item" id="L1-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh"><span class="blank-input"><input type="text" data-ans="昨"></span> [天|tiān|day] [的|de|(possessive)] <span class="blank-input"><input type="text" data-ans="作"></span> [业|yè|homework] [一点儿|yìdiǎnr|at all] [也|yě|also] [不|bù|not] [多。|duō.|much.]</div>
          <div class="zh" style="margin-top:6px;">[昨|zuó|yesterday]　[作|zuò|do]</div>
          <div class="sent-en">There wasn't much homework yesterday.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[昨|zuó|(as in 昨天 “yesterday”)]、[作|zuò|(as in 作业 “homework”)]</div>
        </div>

        <h4 id="L1-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L1-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[上|shàng|up] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[上午|shàngwǔ|morning]、[上班|shàngbān|go to work]</div></div>
        </div>
        <div class="write-item" id="L1-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[下|xià|down] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[下班|xiàbān|get off work]、[下午|xiàwǔ|afternoon]</div></div>
        </div>
        <div class="write-item" id="L1-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[本|běn|(MW for books)] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[本子|běnzi|notebook]、[书本|shūběn|books]</div></div>
        </div>
        <div class="write-item" id="L1-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[末|mò|end] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[周末|zhōumò|weekend]、[月末|yuèmò|end of the month]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L1-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小刚|Xiǎogāng|Xiaogang] [周末|zhōumò|weekend]
            <span class="blank-input review-blank"><span class="input-py">dǎsuàn</span><input type="text" data-ans="打算"></span>
            [请|qǐng|invite] [小丽|Xiǎolì|Xiaoli] [吃饭、|chīfàn,|eat,] [看电影、|kàn diànyǐng,|watch a movie,] [喝咖啡。|hē kāfēi.|drink coffee.]
            [他|tā|he] [已经|yǐjīng|already]
            <span class="blank-input review-blank"><span class="input-py">zhǎo hǎo</span><input type="text" data-ans="找好"></span>
            [饭馆，|fànguǎn,|restaurant,]
            <span class="blank-input review-blank"><span class="input-py">mǎi hǎo</span><input type="text" data-ans="买好"></span>
            [电影票|diànyǐng piào|movie tickets] [了。|le.|(change)]
            [但是|dànshì|but] [小丽|Xiǎolì|Xiaoli] [还|hái|still] [没|méi|not]
            <span class="blank-input review-blank"><span class="input-py">xiǎng hǎo</span><input type="text" data-ans="想好"></span>
            [要不要|yào bú yào|whether or not]
            <span class="blank-input review-blank"><span class="input-py">gēn</span><input type="text" data-ans="跟"></span>
            [他|tā|him] [去。|qù.|go.]
          </div>
          <div class="sent-en">Xiaogang plans to invite Xiaoli out this weekend for a meal, a movie and coffee. He has already found a restaurant and bought movie tickets. But Xiaoli still hasn't decided whether to go with him.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[打算|dǎsuàn|plan]、[找好|zhǎo hǎo|have found]、[买好|mǎi hǎo|have bought]、[想好|xiǎng hǎo|have decided]、[跟|gēn|with]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [明天|míngtiān|tomorrow] [有|yǒu|there is] [考试，|kǎoshì,|an exam,] [但是|dànshì|but] [儿子|érzi|son] [一直|yìzhí|always] [玩儿|wánr|play]
            <span class="blank-input review-blank"><span class="input-py">diànnǎo yóuxì</span><input type="text" data-ans="电脑游戏"></span>
            [也|yě|also] [不|bù|not]
            <span class="blank-input review-blank"><span class="input-py">zháojí</span><input type="text" data-ans="着急"></span>
            [，因为|, yīnwèi|because] [他|tā|he] [都|dōu|all]
            <span class="blank-input review-blank"><span class="input-py">fùxí</span><input type="text" data-ans="复习"></span>
            [好了，|hǎo le,|done,]
            <span class="blank-input review-blank"><span class="input-py">zuòyè</span><input type="text" data-ans="作业"></span>
            [也|yě|also] [都|dōu|all] [写完|xiě wán|finished] [了。|le.|(change)]
          </div>
          <div class="sent-en">There's an exam tomorrow, but my son just keeps playing computer games and isn't worried at all, because he has reviewed everything and finished all his homework.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[电脑游戏|diànnǎo yóuxì|computer games]、[着急|zháojí|worry]、[复习|fùxí|review]、[作业|zuòyè|homework]</div>
          </div>
        </div>
      </div>
    </div>
  `
};

window.LESSONS[2] = {
  navLabel:'第2课',
  html: `
    <div class="lesson">
      <h2>第 2 课　他什么时候回来
        <span class="title-py">Dì èr kè · Tā shénme shíhou huílái</span>
        <small>Lesson 2 · When will he come back?</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L2-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图02.png" alt="听力图02" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图02.png</b></span>
        </div>

        <div class="q" id="L2-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [真|zhēn|really] [没想到，|méi xiǎngdào,|didn't expect] [你|nǐ|you] [现在|xiànzài|now] [这么|zhème|so] [瘦！|shòu!|thin!]</div>
          <div class="zh stem">[男：|Nán:|M:] [这几年|zhè jǐ nián|these few years] [我|wǒ|I] [一直|yìzhí|always] [在|zài|(progressive)] [运动，|yùndòng,|exercising,] [每天|měitiān|every day] [都|dōu|all] [跑步，|pǎobù,|run,] [能|néng|can] [不|bù|not] [瘦|shòu|thin] [吗？|ma?|?]</div>
          <div class="sent-en">W: I never expected you'd be so thin now!<br>M: I've been exercising these past few years — I run every day. Of course I'm thin.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[正在|zhèngzài|is] [跑步|pǎobù|running]）</div>
        </div>
        <div class="q" id="L2-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [周经理，|Zhōu jīnglǐ,|Manager Zhou,] [您|nín|you] [找|zhǎo|looking for] [我？|wǒ?|me?]</div>
          <div class="zh stem">[男：|Nán:|M:] [对，|duì,|right,] [小方，|Xiǎo Fāng,|Xiao Fang,] [你|nǐ|you] [快|kuài|quickly] [上来，|shànglái,|come up,] [来|lái|come] [我|wǒ|my] [办公室。|bàngōngshì.|office.]</div>
          <div class="sent-en">W: Manager Zhou, you were looking for me?<br>M: Yes, Xiao Fang, come up quickly — to my office.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[上楼|shàng lóu|going upstairs]）</div>
        </div>
        <div class="q" id="L2-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[男：|Nán:|M:] [天气|tiānqì|weather] [太|tài|too] [冷|lěng|cold] [了，|le,|,] [回来|huílái|come back] [时|shí|when] [别|bié|don't] [坐|zuò|take] [公共汽车|gōnggòng qìchē|bus] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [叫到|jiào dào|hailed] [一辆|yí liàng|one] [出租车，|chūzūchē,|taxi,] [正|zhèng|just] [准备|zhǔnbèi|about to] [上车|shàng chē|get in] [呢。|ne.|(emphasis)]</div>
          <div class="sent-en">M: It's too cold — don't take the bus back.<br>W: I've hailed a taxi and I'm just about to get in.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[站|zhàn|standing] [在|zài|by] [出租车|chūzūchē|the taxi] [旁边|pángbiān|beside]）</div>
        </div>
        <div class="q" id="L2-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[男：|Nán:|M:] [怎么|zěnme|why] [下雨|xià yǔ|is raining] [了？|le?|?] [我|wǒ|I] [没|méi|not] [带|dài|bring] [伞。|sǎn.|umbrella.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [也|yě|also] [没|méi|not] [带。|dài.|bring.]</div>
          <div class="sent-en">M: Why is it raining? I didn't bring an umbrella.<br>W: Neither did I.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[在|zài|in] [雨|yǔ|the rain] [里|li|(inside)] [没带|méi dài|without] [伞|sǎn|an umbrella]）</div>
        </div>
        <div class="q" id="L2-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [怎么|zěnme|why] [了？|le?|?] [怎么|zěnme|why] [不|bù|not] [跑了？|pǎo le?|run anymore?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [今天|jīntiān|today] [不知道|bù zhīdào|don't know] [怎么|zěnme|why] [了，|le,|,] [脚|jiǎo|foot] [一直|yìzhí|always] [疼。|téng.|hurts.]</div>
          <div class="sent-en">M: What's wrong? Why aren't you running?<br>W: I don't know what's wrong today — my foot keeps hurting.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[两个人|liǎng ge rén|two people] [在|zài|on] [草地|cǎodì|the grass] [上|shàng|(location)] [运动|yùndòng|exercising]/[拉伸|lāshēn|stretching]）</div>
        </div>

        <h4 id="L2-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L2-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[乐乐，|Lèlè,|Lele,] [你|nǐ|you] [出来|chūlái|come out] [的|de|(possessive)] [时候|shíhou|time] [带|dài|bring] [把伞，|bǎ sǎn,|an umbrella,] [外边|wàibiān|outside] [下雨|xià yǔ|is raining] [呢。|ne.|(emphasis)]</div>
          <div class="sent-en">Lele, bring an umbrella when you come out — it's raining outside.</div>
          <div class="zh stem">★ [乐乐|Lèlè|Lele] [现在|xiànzài|now] [不|bù|not] [在|zài|at] [外边。|wàibiān.|outside.]</div>
          <div class="sent-en">★ Lele is not outside now.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[说话|shuōhuà|The speaker] [的|de|(possessive)] [人|rén|person] [让|ràng|tells] [乐乐|Lèlè|Lele]「[出来|chūlái|come out] [的|de|(possessive)] [时候|shíhou|time]」[带伞，|dài sǎn,|bring an umbrella,] [说明|shuōmíng|showing] [乐乐|Lèlè|Lele] [现在|xiànzài|now] [还|hái|still] [在|zài|is] [里面。|lǐmiàn.|inside.]" data-expl-en="The speaker tells Lele to bring an umbrella 'when coming out', so Lele is still inside."></div>
        </div>
        <div class="q" id="L2-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[王经理，|Wáng jīnglǐ,|Manager Wang,] [您|nín|you] [别|bié|don't] [着急，|zháojí,|worry,] [我|wǒ|I] [现在|xiànzài|now] [就|jiù|right away] [上楼|shàng lóu|go upstairs] [去。|qù.|go.]</div>
          <div class="sent-en">Manager Wang, don't worry — I'll come upstairs right now.</div>
          <div class="zh stem">★ [王经理|Wáng jīnglǐ|Manager Wang] [在|zài|is] [楼下。|lóuxià.|downstairs.]</div>
          <div class="sent-en">★ Manager Wang is downstairs.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[说话|shuōhuà|The speaker] [的|de|(possessive)] [人|rén|person] [要|yào|will]「[上楼|shàng lóu|go upstairs] [去|qù|(go)]」，[说明|shuōmíng|showing] [王经理|Wáng jīnglǐ|Manager Wang] [在|zài|is] [楼上，|lóu shàng,|upstairs,] [不|bù|not] [在|zài|at] [楼下。|lóu xià.|downstairs.]" data-expl-en="The speaker will 'go upstairs', so Manager Wang is upstairs, not downstairs."></div>
        </div>
        <div class="q" id="L2-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[你|nǐ|you] [在|zài|at] [这儿|zhèr|here] [等|děng|wait for] [我|wǒ|me] [一下，|yíxià,|a moment,] [我|wǒ|I] [上去|shàngqù|go up] [拿|ná|get] [了|le|(past)] [钱|qián|money] [就|jiù|then] [下来。|xiàlái.|come down.]</div>
          <div class="sent-en">Wait for me here — I'll go up, get the money and come right back down.</div>
          <div class="zh stem">★ [他|tā|he] [已经|yǐjīng|already] [到|dào|arrived] [楼上|lóushàng|upstairs] [了。|le.|(change)]</div>
          <div class="sent-en">★ He has already arrived upstairs.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[他|tā|He] [说|shuō|says]「[我|wǒ|I] [上去|shàngqù|go up] [拿|ná|to get it]」，[说明|shuōmíng|showing] [他|tā|he] [还|hái|still] [没|méi|hasn’t] [上去，|shàngqù,|gone up,] [正|zhèng|is just] [准备|zhǔnbèi|about to] [上去。|shàngqù.|go up.]" data-expl-en="He says 'I'll go up and get it', meaning he hasn't gone up yet."></div>
        </div>
        <div class="q" id="L2-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[我们|wǒmen|we] [快点儿|kuài diǎnr|quickly] [进去|jìnqù|go in] [喝杯|hē bēi|drink a cup of] [热咖啡|rè kāfēi|hot coffee] [吧，|ba,|,] [这儿|zhèr|here] [太|tài|too] [冷|lěng|cold] [了。|le.|(change)]</div>
          <div class="sent-en">Let's go in and have a hot coffee — it's too cold out here.</div>
          <div class="zh stem">★ [他们|tāmen|they] [现在|xiànzài|now] [在|zài|are] [外边。|wàibiān.|outside.]</div>
          <div class="sent-en">★ They are outside now.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[这儿|zhèr|here] [太|tài|too] [冷|lěng|cold]」「[快点儿|kuài diǎnr|hurry up] [进去|jìnqù|and go in]」，[说明|shuōmíng|showing] [他们|tāmen|they] [现在|xiànzài|now] [在|zài|are] [外边。|wàibiān.|outside.]" data-expl-en="'It's too cold here' and 'let's go in' show they are outside now."></div>
        </div>
        <div class="q" id="L2-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[同学们，|tóngxuémen,|Classmates,] [你们|nǐmen|you] [快|kuài|quickly] [过来，|guòlái,|come over,] [到|dào|to] [树下|shù xià|under the tree] [坐坐。|zuò zuo.|sit.]</div>
          <div class="sent-en">Class, come over here and sit under the tree.</div>
          <div class="zh stem">★ [同学们|tóngxuémen|classmates] [现在|xiànzài|now] [在|zài|are] [树下。|shù xià.|under the tree.]</div>
          <div class="sent-en">★ The classmates are under the tree now.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[老师|lǎoshī|The teacher] [叫|jiào|calls] [同学们|tóngxuémen|the students]「[过来|guòlái|come over]」，[说明|shuōmíng|showing] [同学们|tóngxuémen|the students] [现在|xiànzài|now] [不|bù|are not] [在|zài|under] [树下。|shù xià.|the tree.]" data-expl-en="The teacher tells them to 'come over', so they are NOT under the tree yet."></div>
        </div>

        <h4 id="L2-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L2-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [饭|fàn|meal] [做好|zuò hǎo|is ready] [了，|le,|,] [快|kuài|quickly] [过来|guòlái|come over] [吃。|chī.|eat.]</div>
          <div class="zh stem">[男：|Nán:|M:] [好，|hǎo,|OK,] [我|wǒ|I] [打了电话|dǎ le diànhuà|finish the call] [就|jiù|then] [过去。|guòqù.|go over.]</div>
          <div class="sent-en">W: The meal is ready — come and eat.<br>M: OK, I'll come as soon as I finish this call.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [让|ràng|asks] [男的|nánde|the man] [做|zuò|to do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the woman ask the man to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[做饭|zuòfàn|cook]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[吃饭|chīfàn|eat]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[打电话|dǎ diànhuà|make a call]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[快|kuài|Hurry] [过来|guòlái|over] [吃|chī|and eat]」= [让|ràng|asking] [她|tā|her] [吃饭。|chīfàn.|to eat.]</div>
        </div>
        <div class="q" id="L2-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [请问，|qǐngwèn,|Excuse me,] [方经理|Fāng jīnglǐ|Manager Fang] [的|de|(possessive)] [办公室|bàngōngshì|office] [怎么|zěnme|how] [走？|zǒu?|to go?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [就|jiù|just] [在|zài|at] [前边，|qiánbiān,|ahead,] [右边|yòubiān|right side] [第二个|dì èr ge|the second] [房间，|fángjiān,|room,] [1202。|1202.|1202.] [他|tā|he] [外出|wàichū|went out] [办事|bànshì|to do business] [了，|le,|,] [现在|xiànzài|now] [不在。|bú zài.|is not in.]</div>
          <div class="sent-en">M: Excuse me, how do I get to Manager Fang's office?<br>W: It's just ahead — the second room on the right, 1202. He's out on business and isn't in right now.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [可能|kěnéng|might] [在|zài|be] [哪儿？|nǎr?|where?]</div>
          <div class="sent-en">Q: Where are they probably now?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[公司|gōngsī|company]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[医院|yīyuàn|hospital]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[学校|xuéxiào|school]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[提到|tídào|mentions]「[经理|jīnglǐ|the manager]」「[办公室|bàngōngshì|office] 1202」，[说明|shuōmíng|showing] [是|shì|it is] [在|zài|at] [公司。|gōngsī.|the company.]</div>
        </div>
        <div class="q" id="L2-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [每天|měitiān|every day] [坐车|zuò chē|take the bus] [上班|shàngbān|go to work] [时间|shíjiān|time] [太|tài|too] [长|cháng|long] [了，|le,|,] [我们|wǒmen|we] [也|yě|also] [买|mǎi|buy] [辆|liàng|(MW)] [车|chē|car] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [行，|xíng,|OK,] [啊，|a,|,] [买|mǎi|buy] [了|le|(past)] [车|chē|car] [我|wǒ|I] [就|jiù|will] [每天|měitiān|every day] [送|sòng|drive] [你|nǐ|you] [上班。|shàngbān.|to work.]</div>
          <div class="sent-en">W: It takes too long to commute by bus every day. Let's buy a car.<br>M: Sure — once we buy one, I'll drive you to work every day.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [最|zuì|most] [可能|kěnéng|likely] [是|shì|have] [什么|shénme|what] [关系？|guānxi?|relationship?]</div>
          <div class="sent-en">Q: What is their most likely relationship?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[老师和学生|lǎoshī hé xuéshēng|teacher & student]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[丈夫和妻子|zhàngfu hé qīzi|husband & wife]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[经理和秘书|jīnglǐ hé mìshū|manager & secretary]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[买|mǎi|buy] [辆|liàng|(MW)] [车|chē|a car]」「[每天|měitiān|every day] [送|sòng|drive] [你|nǐ|you] [上班|shàngbān|to work]」[是|shì|is] [夫妻|fūqī|a couple’s] [之间|zhījiān|between] [的|de|(possessive)] [日常|rìcháng|daily] [对话。|duìhuà|conversation.]</div>
        </div>
        <div class="q" id="L2-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [考得|kǎo de|did] [真好，|zhēn hǎo,|so well,] [是|shì|is] [怎么|zěnme|how] [学|xué|studied] [的？|de?|?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [每天|měitiān|every day] [学习，|xuéxí,|study,] [你|nǐ|you] [到|dào|arrive] [了|le|(past)] [家|jiā|home] [就|jiù|then] [玩儿|wánr|play] [电脑游戏、|diànnǎo yóuxì,|computer games,] [睡觉，|shuìjiào,|sleep,] [不|bù|not] [看书，|kàn shū,|read books,] [能|néng|can] [学好|xué hǎo|study well] [吗？|ma?|?]</div>
          <div class="sent-en">M: You did so well — how do you study?<br>W: I study every day. You play computer games and sleep as soon as you get home and never read. How could you study well?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [男的，|nánde,|the man,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[喜欢看书|xǐhuan kàn shū|likes reading]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[考得很好|kǎo de hěn hǎo|did very well]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[喜欢玩儿电脑游戏|xǐhuan wánr diànnǎo yóuxì|likes computer games]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[女的|nǚde|the woman] [说|shuō|says] [他|tā|he]「[到了|dào le|gets] [家|jiā|home] [就|jiù|and just] [玩儿|wánr|plays] [电脑游戏|diànnǎo yóuxì|computer games]」。</div>
        </div>
        <div class="q" id="L2-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [今晚|jīnwǎn|tonight] [你|nǐ|you] [吃|chī|ate] [得|de|(complement)] [太多|tài duō|too much] [了，|le,|,] [出去|chūqù|go out] [走走|zǒu zou|walk] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [行，|xíng,|OK,] [我|wǒ|I] [穿|chuān|put on] [了|le|(past)] [衣服|yīfu|clothes] [就|jiù|then] [去。|qù.|go.]</div>
          <div class="sent-en">W: You ate too much tonight — go out for a walk.<br>M: OK, I'll go as soon as I put on my coat.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [想|xiǎng|wants] [让|ràng|to have] [男的|nánde|the man] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the woman want the man to do?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[运动一下|yùndòng yíxià|do some exercise]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[去办事|qù bànshì|go do something]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[穿衣服|chuān yīfu|put on clothes]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[出去|chūqù|go out] [走走|zǒu zou|and walk around]」= [运动|yùndòng|exercise] [一下。|yíxià|a bit.]</div>
        </div>

        <h4 id="L2-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L2-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[男：|Nán:|M:] [请问|qǐngwèn|excuse me,] [王雨|Wáng Yǔ|Wang Yu] [在|zài|is] [吗？|ma?|in?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [对不起，|duìbuqǐ,|Sorry,] [他|tā|he] [不在，|bú zài,|is not here,] [下楼|xià lóu|went downstairs] [去|qù|to] [送人|sòng rén|see someone off] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [他|tā|he] [什么时候|shénme shíhou|when] [回来？|huílái?|come back?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [几分钟|jǐ fēnzhōng|a few minutes] [就|jiù|then] [回来，|huílái,|come back,] [他|tā|he] [送了人|sòng le rén|after seeing the person off] [就|jiù|then] [上来。|shànglái.|come up.]</div>
          <div class="sent-en">M: Is Wang Yu there?<br>W: Sorry, he's not — he went downstairs to see someone off.<br>M: When will he be back?<br>W: In a few minutes — he'll come up right after.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [王雨|Wáng Yǔ|Wang Yu] [现在|xiànzài|now] [可能|kěnéng|might] [在|zài|be] [哪儿？|nǎr?|where?]</div>
          <div class="sent-en">Q: Where is Wang Yu probably now?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[楼下|lóuxià|downstairs]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[楼上|lóushàng|upstairs]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[办公室|bàngōngshì|office]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[他|tā|He]「[下楼|xià lóu|went downstairs] [去|qù|to] [送人|sòng rén|see someone off] [了|le|(change)]」，[现在|xiànzài|now] [应该|yīnggāi|should] [在|zài|be] [楼下。|lóu xià|downstairs.]</div>
        </div>
        <div class="q" id="L2-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [大家|dàjiā|everyone] [都|dōu|all] [到|dào|arrived] [了|le|(past)] [吗？|ma?|?]</div>
          <div class="zh stem">[男：|Nán:|M:] [王东|Wáng Dōng|Wang Dong] [还|hái|still] [没|méi|not] [到。|dào.|arrived.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [谁|shéi|who] [有|yǒu|has] [他|tā|his] [的|de|(possessive)] [电话？|diànhuà?|phone number?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [给|gěi|to] [他|tā|him] [打电话|dǎ diànhuà|called] [了，|le,|,] [他|tā|he] [说|shuō|said] [去|qù|go to] [办公楼|bàngōnglóu|office building] [拿|ná|get] [了|le|(past)] [东西|dōngxi|things] [就|jiù|then] [过来。|guòlái.|come over.]</div>
          <div class="sent-en">W: Is everyone here?<br>M: Wang Dong hasn't arrived.<br>W: Who has his number?<br>M: I called him — he said he'd come as soon as he picks something up from the office building.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [王东|Wáng Dōng|Wang Dong] [为什么|wèishénme|why] [还|hái|still] [没|méi|hasn’t] [来？|lái?|come?]</div>
          <div class="sent-en">Q: Why hasn't Wang Dong come yet?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[他去拿东西|tā qù ná dōngxi|he went to get things]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[他没带手机|tā méi dài shǒujī|he didn't bring his phone]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[他要去办公楼打电话|tā yào qù bàngōnglóu dǎ diànhuà|he's going to call from the office]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[去|qù|went to] [办公楼|bàngōnglóu|the office building] [拿|ná|to get] [了|le|(past)] [东西|dōngxi|something] [就|jiù|and then] [过来|guòlái|come over]」。</div>
        </div>
        <div class="q" id="L2-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我们|wǒmen|we] [真|zhēn|really] [快，|kuài,|fast,] [30 分钟|sānshí fēnzhōng|30 minutes] [就|jiù|already] [到|dào|arrived] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [是|shì|yes] [啊，|a,|,] [小方|Xiǎo Fāng|Xiao Fang] [他们|tāmen|they] [到|dào|arrived] [哪儿|nǎr|where] [了？|le?|?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [他们|tāmen|they] [走|zǒu|took] [北边|běibiān|the north] [那条路，|nà tiáo lù,|that road,] [可能|kěnéng|maybe] [也|yě|also] [快|kuài|soon] [到|dào|arrive] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [那条路|nà tiáo lù|that road] [难走，|nán zǒu,|is hard to travel,] [可能|kěnéng|maybe] [要|yào|need] [50 分钟。|wǔshí fēnzhōng.|50 minutes.]</div>
          <div class="sent-en">W: We were fast — only 30 minutes.<br>M: Yeah. Where are Xiao Fang and the others?<br>W: They took the northern road — they should be here soon.<br>M: That road is hard to travel; it might take 50 minutes.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [小方|Xiǎofāng|Xiaofang] [他们，|tāmen,|and the others,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about Xiao Fang and the others?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[已经到了|yǐjīng dào le|already arrived]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[走北边的路|zǒu běibiān de lù|took the northern road]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[走得很快|zǒu de hěn kuài|walked very fast]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[他们|tāmen|they] [走|zǒu|took] [北边|běibiān|the north] [那|nà|that] [条|tiáo|(MW)] [路|lu|road]」。</div>
        </div>
        <div class="q" id="L2-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [进来|jìnlái|came in] [的|de|(possessive)] [时候|shíhou|time] [看见|kànjiàn|saw] [小白|Xiǎobái|Xiaobai] [了|le|(past)] [吗？|ma?|?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [没|méi|not] [看见。|kànjiàn.|saw.] [你|nǐ|you] [找|zhǎo|looking for] [他|tā|him] [有|yǒu|have] [事？|shì?|business?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [让|ràng|asked] [他|tā|him] [下去|xiàqù|go down] [买|mǎi|buy] [午饭，|wǔfàn,|lunch,] [还|hái|still] [没|méi|not] [回来。|huílái.|come back.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [给|gěi|to] [他|tā|him] [打个电话|dǎ ge diànhuà|give a call] [问问|wèn wen|ask] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: Did you see Xiaobai when you came in?<br>W: No. Do you need him?<br>M: I asked him to go down and buy lunch and he's still not back.<br>W: Give him a call then.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [在|zài|are] [哪儿？|nǎr?|where?]</div>
          <div class="sent-en">Q: Where are they?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[在楼上|zài lóushàng|upstairs]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[在楼下|zài lóuxià|downstairs]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不知道在哪儿|bù zhīdào zài nǎr|don't know where]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[让|ràng|told] [他|tā|him] [下去|xiàqù|to go down] [买|mǎi|to buy] [午饭|wǔfàn|lunch]」，[说明|shuōmíng|showing] [说话|shuōhuà|the speaker] [的|de|(possessive)] [人|rén|person] [在|zài|is] [楼上。|lóu shàng|upstairs.]</div>
        </div>
        <div class="q" id="L2-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [怎么|zěnme|why] [还|hái|still] [不|bù|not] [吃饭？|chīfàn?|eat?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [东东|Dōngdong|Dongdong] [还|hái|still] [没|méi|not] [回来|huílái|come back] [呢。|ne.|(emphasis)]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [别|bié|don't] [着急，|zháojí,|worry,] [吃饭|chīfàn|eat] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [都|dōu|already] [这么|zhème|so] [晚|wǎn|late] [了，|le,|,] [我|wǒ|I] [能|néng|can] [不|bù|not] [着急|zháojí|worry] [吗？|ma?|?]</div>
          <div class="sent-en">M: Why aren't you eating?<br>W: Dongdong hasn't come back yet.<br>M: Don't worry, just eat.<br>W: It's so late — how could I not worry?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[还没回家|hái méi huí jiā|hasn't come home yet]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不着急|bù zháojí|not worried]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[很着急|hěn zháojí|very worried]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[我|wǒ|How] [能|néng|could] [不|bù|not] [着急|zháojí|worry] [吗？|ma?|(rhetorical)]」= [很|hěn|very] [着急。|zháojí|worried.]</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L2-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L2-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[今天|jīntiān|today] [的|de|(possessive)] [题|tí|questions] [一点儿|yìdiǎnr|at all] [也|yě|also] [不|bù|not] [难。|nán.|difficult.]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[我|wǒ|my] [的|de|(possessive)] [头|tóu|head] [怎么|zěnme|why] [这么|zhème|so] [疼？|téng?|hurts?]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[喂，|wèi,|Hello,] [我|wǒ|I] [到|dào|arrived at] [你|nǐ|your] [家|jiā|home] [楼下|lóuxià|downstairs] [了。|le.|(change)]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[那|nà|then] [喝|hē|drink] [了|le|(past)] [这杯|zhè bēi|this cup of] [牛奶|niúnǎi|milk] [就|jiù|then] [睡觉|shuìjiào|sleep] [吧。|ba.|(suggestion)]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span><div class="sent-en">Of course. We'll take the bus first, then transfer to the subway.</div></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[请问，|qǐngwèn,|Excuse me,] [周明|Zhōu Míng|Zhou Ming] [在|zài|is] [吗？|ma?|in?]</span></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L2-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[你|nǐ|you] [每天|měitiān|every day] [进了|jìn le|after entering] [办公室|bàngōngshì|office] [就|jiù|then] [坐在|zuò zài|sit at] [电脑|diànnǎo|computer] [前，|qián,|in front of,] [身体|shēntǐ|health] [能|néng|can] [好|hǎo|be good] [吗？|ma?|?] （<span class="blank">　</span>）</div>
          <div class="sent-en">You sit in front of the computer all day at the office — how can your health be good?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L2-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[妈，|mā,|Mom,] [我|wǒ|I] [今天|jīntiān|today] [太|tài|too] [累|lěi|tired] [了，|le,|,] [不|bù|not] [想|xiǎng|want to] [看书|kàn shū|read] [了。|le.|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Mom, I'm too tired today — I don't want to read.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L2-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[他|tā|he] [现在|xiànzài|now] [出去|chūqù|went out] [了，|le,|,] [十点|shí diǎn|10 o'clock] [回来。|huílái.|come back.] （<span class="blank">　</span>）</div>
          <div class="sent-en">He's gone out and will be back at 10.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L2-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[好，|hǎo,|OK,] [你|nǐ|you] [等|děng|wait for] [我|wǒ|me] [一下，|yíxià,|a moment,] [我|wǒ|I] [现在|xiànzài|now] [就|jiù|right away] [下去。|xiàqù.|go down.] （<span class="blank">　</span>）</div>
          <div class="sent-en">OK, wait a moment — I'll come down right now.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L2-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[因为|yīnwèi|because] [你|nǐ|you] [准备|zhǔnbèi|prepare] [得|de|(complement)] [好，|hǎo,|well,] [所以|suǒyǐ|so] [觉得|juéde|feel] [很|hěn|very] [容易。|róngyì.|easy.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Because you prepared well, you found it easy.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L2-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L2-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[难|nán|difficult]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[办公室|bàngōngshì|office]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[楼|lóu|floor]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[辆|liàng|(MW for vehicles)]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[拿|ná|take]</span></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L2-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[小方，|Xiǎo Fāng,|Xiao Fang,] [周经理|Zhōu jīnglǐ|Manager Zhou] [请|qǐng|asks] [你|nǐ|you] [去|qù|go to] [他|tā|his] （<span class="blank">　</span>） [一下。|yíxià.|a bit.]</div>
          <div class="sent-en">Xiao Fang, Manager Zhou wants you to go to his office.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L2-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">（<span class="blank">　</span>） [下|xià|down] [那个|nàge|that] [穿着|chuān zhe|wearing] [白|bái|white] [衣服|yīfu|clothes] [的|de|(possessive)] [男人|nánrén|man] [是|shì|is] [谁？|shéi?|who?]</div>
          <div class="sent-en">Who is that man downstairs in white?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L2-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[今天|jīntiān|today] [的|de|(possessive)] [考试|kǎoshì|exam] [一点儿|yìdiǎnr|at all] [也|yě|also] [不|bù|not] （<span class="blank">　</span>）。</div>
          <div class="sent-en">Today's exam wasn't difficult at all.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L2-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [快|kuài|soon] [上课|shàngkè|class] [了，|le,|,] [你|nǐ|you] [怎么|zěnme|why] [往回走？|wǎng huí zǒu?|walking back?]</div>
          <div class="zh">[B：|B:|B:] [我|wǒ|I] [没|méi|not] [带|dài|bring] [书，|shū,|book,] [回去|huíqù|go back] （<span class="blank">　</span>）。</div>
          <div class="sent-en">A: Class is about to start — why are you walking back?<br>B: I forgot my book — going back to get it.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L2-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [这么|zhème|so] [多|duō|many] [好看|hǎokàn|nice] [的|de|(possessive)] [车，|chē,|cars,] [我们|wǒmen|we] [买|mǎi|buy] [哪|nǎ|which] （<span class="blank">　</span>） ？</div>
          <div class="zh">[B：|B:|B:] [买|mǎi|buy] [红|hóng|red] [的|de|(nominalizer)] [吧，|ba,|,] [我|wǒ|I] [最|zuì|most] [喜欢|xǐhuan|like] [红色。|hóngsè.|red.]</div>
          <div class="sent-en">A: So many nice cars — which one shall we buy?<br>B: Let's buy the red one; I like red best.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L2-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L2-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[现在|xiànzài|now] [的|de|(possessive)] [孩子|háizi|children] [真|zhēn|really] [不|bù|not] [容易。|róngyì.|easy.] [从|cóng|from] [周一|zhōu yī|Monday] [到|dào|to] [周五|zhōu wǔ|Friday] [每天|měitiān|every day] [都|dōu|all] [要|yào|must] [上课，|shàngkè,|attend class,] [下了课|xià le kè|after class] [还|hái|also] [要|yào|must] [做|zuò|do] [作业。|zuòyè.|homework.] [周末|zhōumò|weekend] [也|yě|also] [不能|bùnéng|cannot] [休息，|xiūxi,|rest,] [起了床|qǐ le chuáng|after getting up] [就|jiù|then] [出去|chūqù|go out] [学|xué|study] [这学那，|zhè xué nà,|this and that,] [能|néng|can] [不|bù|not] [累|lěi|tired] [吗？|ma?|?]</div>
          <div class="sent-en">Today's kids really have it hard. From Monday to Friday they attend classes and do homework. Even on weekends they can't rest. How could they not be tired?</div>
          <div class="zh ask">★ [现在|xiànzài|Today’s] [的|de|(possessive)] [孩子：|háizi:|children:]</div>
          <div class="sent-en">★ Today's children: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[一点儿也不累|yìdiǎnr yě bú lèi|not tired at all]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[每天都很忙|měitiān dōu hěn máng|busy every day]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[周末起床很晚|zhōumò qǐchuáng hěn wǎn|get up late on weekends]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B</div>
        </div>
        <div class="q" id="L2-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[很多人|hěnduō rén|many people] [都|dōu|all] [喜欢|xǐhuan|like] [睡午觉。|shuì wǔjiào.|take a nap.] [但是|dànshì|but] [有些|yǒuxiē|some] [人|rén|people] [吃|chī|eat] [了|le|(past)] [午饭|wǔfàn|lunch] [就|jiù|immediately] [睡，|shuì,|sleep,] [这样|zhèyàng|this way] [对|duì|to] [身体|shēntǐ|health] [好|hǎo|good] [吗？|ma?|?] [医生|yīshēng|doctor] [告诉|gàosu|tells] [我们：|wǒmen:|us:] [吃|chī|eat] [了|le|(past)] [午饭|wǔfàn|lunch] [要|yào|should] [休息|xiūxi|rest] [一下。|yíxià.|a bit.] [睡|shuì|sleep] [午觉|wǔjiào|nap] [的|de|(possessive)] [时间|shíjiān|time] [也|yě|also] [不能|bùnéng|cannot] [太长，|tài cháng,|too long,] [一个小时|yí ge xiǎoshí|one hour] [最好。|zuì hǎo.|is best.]</div>
          <div class="sent-en">Many people like to nap. But is it healthy to sleep right after lunch? Doctors tell us to rest a bit after lunch, and not to nap too long — one hour is best.</div>
          <div class="zh ask">★ [睡午觉|shuì wǔjiào|Taking a nap:]</div>
          <div class="sent-en">★ Taking a nap</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[对身体不好|duì shēntǐ bù hǎo|bad for health]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不能吃饭|bùnéng chīfàn|cannot eat]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[时间不能很长|shíjiān bùnéng hěn cháng|shouldn't be too long]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[睡午觉|shuì wǔjiào|A nap] [的|de|(possessive)] [时间|shíjiān|time] [也|yě|also] [不能|bùnéng|cannot] [太|tài|too] [长|cháng|long]」。</div>
        </div>
        <div class="q" id="L2-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[我|wǒ|my] [丈夫|zhàngfu|husband] [每天|měitiān|every day] [5 点多|wǔ diǎn duō|a little after 5] [起床，|qǐchuáng,|gets up,] [吃了|chī le|ate] [早饭|zǎofàn|breakfast] [就|jiù|then] [去|qù|go] [上班。|shàngbān.|to work.] [我|wǒ|I] [让|ràng|ask] [他|tā|him] [多|duō|more] [休息、|xiūxi,|rest,] [少|shǎo|less] [工作，|gōngzuò,|work,] [但是|dànshì|but] [他|tā|he] [说：|shuō:|says:] "[那么多|nàme duō|so many] [病人|bìngrén|patients] [都|dōu|all] [在|zài|are] [等|děng|waiting for] [我，|wǒ,|me,] [我|wǒ|I] [能|néng|can] [休息|xiūxi|rest] [吗？"|ma?"|?] [我|wǒ|I] [真|zhēn|really] [希望|xīwàng|hope] [丈夫|zhàngfu|husband] [别|bié|doesn't] [那么|nàme|so] [累。|lèi.|tired.]</div>
          <div class="sent-en">My husband gets up a little after 5 every day and goes to work right after breakfast. He says so many patients are waiting for him. I hope he won't be so tired.</div>
          <div class="zh ask">★ [我|wǒ|my] [丈夫|zhàngfu|husband] [是|shì|(is)] [做|zuò|does] [什么|shénme|what] [工作|gōngzuò|work] [的？|de?|(question)]</div>
          <div class="sent-en">★ What work does my husband do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[老师|lǎoshī|teacher]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[经理|jīnglǐ|manager]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[医生|yīshēng|doctor]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[那么|nàme|so] [多|duō|many] [病人|bìngrén|patients] [都|dōu|all] [在|zài|are] [等|děng|waiting for] [我|wǒ|me]」→ [医生。|yīshēng|a doctor.]</div>
        </div>
        <div class="q" id="L2-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[今天|jīntiān|today] [早上|zǎoshang|morning] [我|wǒ|I] [起晚|qǐ wǎn|got up late] [了，|le,|,] [穿|chuān|put on] [了|le|(past)] [衣服|yīfu|clothes] [就|jiù|then] [出来|chūlái|went out] [了。|le.|(change)] [钱、|qián,|Money,] [电脑、|diànnǎo,|computer,] [手机|shǒujī|phone] [都|dōu|all] [没|méi|not] [带，|dài,|bring,] [早饭|zǎofàn|breakfast] [也|yě|also] [没|méi|not] [吃。|chī.|eat.] [小丽|Xiǎolì|Xiaoli] [告诉|gàosu|told] [我，|wǒ,|me,] [妻子|qīzi|wife] [打来|dǎ lái|called] [电话，|diànhuà,|phone,] [让|ràng|asked] [我|wǒ|me] [到|dào|arrived] [了|le|(past)] [办公室|bàngōngshì|office] [就|jiù|then] [给|gěi|to] [她|tā|her] [回|huí|return] [电话。|diànhuà.|call.]</div>
          <div class="sent-en">This morning I got up late, threw on my clothes and left. Xiaoli told me my wife had called and wanted me to call her back as soon as I got to the office.</div>
          <div class="zh ask">★ [妻子|qīzi|wife]：</div>
          <div class="sent-en">★ Wife: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[起晚了|qǐ wǎn le|got up late]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[没带手机|méi dài shǒujī|didn't bring the phone]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[找|zhǎo|is looking for him]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[妻子|qīzi|His wife] [打电话|dǎ diànhuà|calls] [来，|lái,|(come),] [说明|shuōmíng|showing] [她|tā|she] [在|zài|is] [找|zhǎo|looking for] [他。|tā|him.]</div>
        </div>
        <div class="q" id="L2-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[去年|qùnián|last year] [12 月|shí'èr yuè|December] [我|wǒ|I] [带|dài|took] [妻子|qīzi|wife] [去|qù|went to] [了|le|(past)] [一次|yí cì|once] [北方。|běifāng.|the North.] [没想到|méi xiǎngdào|didn't expect] [到|dào|arrived] [了|le|(past)] [那儿|nàr|there] [妻子|qīzi|wife] [就|jiù|then] [开始|kāishǐ|started] [生病，|shēngbìng,|to get sick,] [没玩儿好|méi wánr hǎo|didn't enjoy] [也|yě|also] [没吃好，|méi chī hǎo,|didn't eat well,] [一直|yìzhí|all the way] [病|bìng|sick] [到|dào|until] [回来。|huílái.|coming back.] [妻子|qīzi|wife] [说，|shuō,|said,] [下次|xià cì|next time] [不要|bú yào|don't] [在|zài|at] [那么|nàme|so] [冷|lěng|cold] [的|de|(possessive)] [时候|shíhou|time] [旅游|lǚyóu|travel] [了。|le.|(change)]</div>
          <div class="sent-en">Last December I took my wife to the North. Unexpectedly, she got sick as soon as we arrived and stayed sick until we came back. She said next time we shouldn't travel when it's so cold.</div>
          <div class="zh ask">★ [我|wǒ|my] [妻子|qīzi|wife]：</div>
          <div class="sent-en">★ My wife: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[还没去过北方|hái méi qù guò běifāng|hasn't been to the North]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[玩儿得不好|wánr de bù hǎo|didn't enjoy the trip]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[回来的时候生病了|huílái de shíhou shēngbìng le|was sick on the way back]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[没|méi|didn’t] [玩儿好|wánr hǎo|enjoy] [也|yě|nor] [没|méi|didn’t] [吃好|chī hǎo|eat well]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L2-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L2-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[下|xià|finish] [课|kè|class] [了|le|(change)] [买书|mǎi shū|buy books] [就|jiù|then] [去|qù|go]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[下了课|xià le kè|As soon as class ends] [就|jiù|then] [去|qù|go] [买书。|mǎi shū|buy books.]<div class="sent-en">I'll go buy books as soon as class is over.</div></div>
        </div>
        <div class="write-item" id="L2-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[快|kuài|quickly] [去|qù|go] [看看|kàn kan|have a look] [下楼|xià lóu|go downstairs] [吧|ba|(suggestion)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[快|kuài|Hurry] [下楼|xià lóu|downstairs] [去|qù|and] [看看|kàn kan|take a look] [吧。|ba|(suggestion)]<div class="sent-en">Hurry downstairs and take a look.</div></div>
        </div>
        <div class="write-item" id="L2-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[飞机|fēijī|plane] [上|shàng|on] [就|jiù|then] [我弟弟|wǒ dìdi|my brother] [睡觉|shuìjiào|sleep] [了|le|(change)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|My] [弟弟|dìdi|brother] [上了|shàng le|got on] [飞机|fēijī|the plane] [就|jiù|and then] [睡觉。|shuìjiào|slept.]<div class="sent-en">My brother fell asleep as soon as he got on the plane.</div></div>
        </div>
        <div class="write-item" id="L2-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[我|wǒ|I] [写完|xiě wán|finish writing] [了|le|(past)] [出去玩儿|chūqù wánr|go out to play] [作业|zuòyè|homework] [就|jiù|then]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|I] [写完|xiě wán|finish] [了|le|(past)] [作业|zuòyè|homework] [就|jiù|then] [出去|chūqù|go out] [玩儿。|wánr|to play.]<div class="sent-en">I'll go out to play as soon as I finish my homework.</div></div>
        </div>
        <div class="write-item" id="L2-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[教室|jiàoshì|classroom] [请|qǐng|please] [进|jìn|enter] [来|lái|come] [快|kuài|quickly]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[请|qǐng|Please] [快|kuài|quickly] [进|jìn|come into] [教室|jiàoshì|the classroom] [来。|lái|(come).]<div class="sent-en">Please hurry into the classroom.</div></div>
        </div>

        <h4 id="L2-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L2-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[这|zhè|this] [是|shì|is] [你|nǐ|your] [的|de|(possessive)] <span class="blank-input"><span class="input-py">bàn</span><input type="text" data-ans="办"></span> [公室|gōngshì|office] [吗？|ma?|?]</div>
          <div class="sent-en">Is this your office?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[办|bàn|do]（[办公室|bàngōngshì|office]）</span></div>
        </div>
        <div class="write-item" id="L2-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[这次|zhè cì|this time] [考试|kǎoshì|exam] [题|tí|questions] [都|dōu|all] [很|hěn|very] <span class="blank-input"><span class="input-py">nán</span><input type="text" data-ans="难"></span>，[我|wǒ|I] [不会|bú huì|cannot] [做。|zuò.|do.]</div>
          <div class="sent-en">The exam questions were all very hard — I couldn't do them.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[难|nán|difficult]</span></div>
        </div>
        <div class="write-item" id="L2-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[我|wǒ|my] [的|de|(possessive)] [房间|fángjiān|room] [里|li|inside] [有|yǒu|there are] [两|liǎng|two] <span class="blank-input"><span class="input-py">bǎ</span><input type="text" data-ans="把"></span> [椅子。|yǐzi.|chairs.]</div>
          <div class="sent-en">There are two chairs in my room.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[把|bǎ|(MW for chairs etc.)]</span></div>
        </div>
        <div class="write-item" id="L2-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[我|wǒ|I] [觉得|juéde|feel] [说|shuō|speak] [汉语|Hànyǔ|Chinese] [比|bǐ|than] [写|xiě|write] [汉字|Hànzì|Chinese characters] <span class="blank-input"><span class="input-py">róng</span><input type="text" data-ans="容"></span> [易。|yì.|easy.]</div>
          <div class="sent-en">I think speaking Chinese is easier than writing Chinese characters.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[容|róng|easy]（[容易|róngyì|easy]）</span></div>
        </div>
        <div class="write-item" id="L2-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[看，|kàn,|Look,] [那儿|nàr|there] [不是|bú shì|isn't] [有|yǒu|there] [一|yī|one] <span class="blank-input"><span class="input-py">liàng</span><input type="text" data-ans="辆"></span> [出租车|chūzūchē|taxi] [吗？|ma?|?] [我们|wǒmen|we] [快|kuài|quickly] [过去。|guòqù.|go over.]</div>
          <div class="sent-en">Look, isn't there a taxi over there? Let's hurry over.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[辆|liàng|(MW for vehicles)]</span></div>
        </div>

        <h4 id="L2-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L2-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[听说|tīngshuō|hear that] [下个星期|xià ge xīngqī|next week] [的|de|(possessive)] [考试|kǎoshì|exam] [很|hěn|very] <span class="blank-input"><input type="text" data-ans="难"></span>，[你|nǐ|you] <span class="blank-input"><input type="text" data-ans="准"></span> [备好|bèi hǎo|prepared] [了|le|(past)] [吗？|ma?|?]</div>
          <div class="zh" style="margin-top:6px;">[准|zhǔn|ready]　[难|nán|difficult]</div>
          <div class="sent-en">I heard next week's exam is very hard — are you ready?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[难|nán|hard]、[准|zhǔn|(as in 准备 “prepare”)]</div>
        </div>
        <div class="write-item" id="L2-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[你|nǐ|you] [知道|zhīdào|know] [我|wǒ|I] [今天|jīntiān|today] <span class="blank-input"><input type="text" data-ans="为"></span> [什么|shénme|what] [来|lái|come to] [你|nǐ|your] [的|de|(possessive)] <span class="blank-input"><input type="text" data-ans="办"></span> [公室|gōngshì|office] [吗？|ma?|?]</div>
          <div class="zh" style="margin-top:6px;">[办|bàn|do]　[为|wèi|for]</div>
          <div class="sent-en">Do you know why I came to your office today?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[为|wèi|(as in 为什么 “why”)]、[办|bàn|(as in 办公室 “office”)]</div>
        </div>
        <div class="write-item" id="L2-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[其|qí|actually] <span class="blank-input"><input type="text" data-ans="实"></span>，[我|wǒ|I] [没|méi|not] [去|qù|go to] <span class="blank-input"><input type="text" data-ans="买"></span> [东西，|dōngxi,|things,] [我|wǒ|I] [去|qù|went to] [医院|yīyuàn|hospital] [了。|le.|(change)]</div>
          <div class="zh" style="margin-top:6px;">[实|shí|real]　[买|mǎi|buy]</div>
          <div class="sent-en">Actually, I didn't go shopping — I went to the hospital.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[实|shí|(as in 其实 “actually”)]、[买|mǎi|buy]</div>
        </div>
        <div class="write-item" id="L2-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[帮|bāng|help] [你|nǐ|you] [买票|mǎi piào|buy a ticket] [很|hěn|very] <span class="blank-input"><input type="text" data-ans="容"></span> [易，|yì,|easy,] [你|nǐ|you] [别|bié|don't] <span class="blank-input"><input type="text" data-ans="客"></span> [气。|qì.|be polite.]</div>
          <div class="zh" style="margin-top:6px;">[容|róng|easy]　[客|kè|polite]</div>
          <div class="sent-en">It's easy to buy a ticket for you — don't be so polite.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[容|róng|(as in 容易 “easy”)]、[客|kè|(as in 客气 “polite”)]</div>
        </div>
        <div class="write-item" id="L2-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[我们|wǒmen|we] [坐|zuò|take] <span class="blank-input"><input type="text" data-ans="公"></span> [共汽车|gòng qìchē|bus] [去|qù|go] [吧，|ba,|,] [怎|zěn|how] <span class="blank-input"><input type="text" data-ans="么"></span> [样？|yàng?|about?]</div>
          <div class="zh" style="margin-top:6px;">[么|me|(particle)]　[公|gōng|public]</div>
          <div class="sent-en">Let's take the bus — how about it?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[公|gōng|(as in 公共汽车 “bus”)]、[么|me|(as in 怎么样 “how about”)]</div>
        </div>

        <h4 id="L2-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L2-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[明|míng|bright] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[明天|míngtiān|tomorrow]、[聪明|cōngming|smart]</div></div>
        </div>
        <div class="write-item" id="L2-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[休|xiū|rest] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[休息|xiūxi|rest]、[休学|xiūxué|suspend schooling]</div></div>
        </div>
        <div class="write-item" id="L2-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[从|cóng|from] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[从来|cónglái|never/always]、[从小|cóngxiǎo|since childhood]</div></div>
        </div>
        <div class="write-item" id="L2-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[看|kàn|look] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[看书|kàn shū|read]、[看见|kànjiàn|see]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L2-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [上山|shàng shān|going up the mountain] [的|de|(possessive)] [时候，|shíhou,|when,] [小丽|Xiǎolì|Xiaoli] [没|méi|not] [觉得|juéde|feel] [很|hěn|very] [累，|lěi,|tired,] [但是|dànshì|but] [下山|xià shān|going down] [的|de|(possessive)] [时候，|shíhou,|when,] [她|tā|she]
            <span class="blank-input review-blank"><span class="input-py">tuǐ</span><input type="text" data-ans="腿"></span>
            [也|yě|also] [疼，|téng,|hurts,]
            <span class="blank-input review-blank"><span class="input-py">jiǎo</span><input type="text" data-ans="脚"></span>
            [也|yě|also] [疼。|téng.|hurts.] [小刚|Xiǎogāng|Xiaogang] [说，|shuō,|said,] [这叫|zhè jiào|this is called] "[上山|shàng shān|going up]
            <span class="blank-input review-blank"><span class="input-py">róngyì</span><input type="text" data-ans="容易"></span>
            [下山|xià shān|going down]
            <span class="blank-input review-blank"><span class="input-py">nán</span><input type="text" data-ans="难"></span>"。[那边|nàbiān|over there] [树|shù|trees] [多，|duō,|many,] [小刚|Xiǎogāng|Xiaogang] [和|hé|and] [小丽|Xiǎolì|Xiaoli] [打算|dǎsuàn|plan to] [休息|xiūxi|rest] [一下。|yíxià.|a bit.]</div>
          <div class="sent-en">Going up the mountain Xiaoli didn't feel tired, but coming down both her legs and feet hurt. Xiaogang said this is called "easy to go up, hard to come down".</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[腿|tuǐ|leg]、[脚|jiǎo|foot]、[容易|róngyì|easy]、[难|nán|hard]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [雨|yǔ|rain] [下得|xià de|falls] [很大，|hěn dà,|heavily,] [小丽|Xiǎolì|Xiaoli] [没带|méi dài|didn't bring]
            <span class="blank-input review-blank"><span class="input-py">sǎn</span><input type="text" data-ans="伞"></span>，
            [她|tā|she] [打算|dǎsuàn|plan to] [出去|chūqù|go out] [叫|jiào|hail]
            <span class="blank-input review-blank"><span class="input-py">liàng</span><input type="text" data-ans="辆"></span>
            [出租车。|chūzūchē.|taxi.] [小刚|Xiǎogāng|Xiaogang] [让|ràng|asked] [小丽|Xiǎolì|Xiaoli] [等|děng|wait] [一下，|yíxià,|a moment,] [他|tā|he]
            <span class="blank-input review-blank"><span class="input-py">shàng lóu</span><input type="text" data-ans="上楼"></span>
            [去|qù|go] [拿|ná|get] [了|le|(past)]
            <span class="blank-input review-blank"><span class="input-py">sǎn</span><input type="text" data-ans="伞"></span>
            [就|jiù|then]
            <span class="blank-input review-blank"><span class="input-py">xiàlái</span><input type="text" data-ans="下来"></span>。</div>
          <div class="sent-en">It was raining hard and Xiaoli didn't have an umbrella. Xiaogang told her to wait — he'd go upstairs, get an umbrella and come right back down.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[伞|sǎn|umbrella]、[辆|liàng|(MW)]、[上楼|shàng lóu|go upstairs]、[拿|ná|take]、[下来|xiàlái|come down]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[3] = {
  navLabel:'第3课',
  html: `
    <div class="lesson">
      <h2>第 3 课　桌子上放着很多饮料
        <span class="title-py">Dì sān kè · Zhuōzi shang fàngzhe hěn duō yǐnliào</span>
        <small>Lesson 3 · There are plenty of drinks on the table</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L3-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图03.png" alt="听力图03" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图03.png</b></span>
        </div>

        <div class="q" id="L3-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这|zhè|this] [花茶|huāchá|flower tea] [在|zài|at] [哪儿|nǎr|where] [买|mǎi|bought] [的？|de?|?] [真|zhēn|really] [好喝！|hǎohē!|tasty!]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [也|yě|also] [不|bù|not] [知道，|zhīdào,|know,] [一个|yí ge|a] [朋友|péngyou|friend] [送|sòng|gave] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">M: Where did you buy this flower tea? It's really tasty!<br>W: I don't know either — a friend gave it to me.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[花茶|huāchá|scented tea]）</div>
        </div>
        <div class="q" id="L3-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [小心点儿，|xiǎoxīn diǎnr,|Be careful,] [到了|dào le|arrive] [北京|Běijīng|Beijing] [就|jiù|then] [给|gěi|to] [我|wǒ|me] [打电话。|dǎ diànhuà.|call.]</div>
          <div class="zh stem">[男：|Nán:|M:] [好的，|hǎo de,|OK,] [我|wǒ|I] [下了|xià le|get off] [飞机|fēijī|plane] [就|jiù|then] [给|gěi|to] [你|nǐ|you] [打电话。|dǎ diànhuà.|call.]</div>
          <div class="sent-en">W: Be careful — call me when you arrive in Beijing.<br>M: OK, I'll call you as soon as I get off the plane.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[拿着|ná zhe|holding] [行李箱|xínglixiāng|a suitcase] [在|zài|by] [飞机|fēijī|the plane] [旁|páng|beside]）</div>
        </div>
        <div class="q" id="L3-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [这些|zhèxiē|these] [水果|shuǐguǒ|fruit] [都|dōu|all] [很|hěn|very] [新鲜，|xīnxiān,|fresh,] [你|nǐ|you] [想|xiǎng|want] [吃|chī|eat] [什么？|shénme?|what?]</div>
          <div class="zh stem">[男：|Nán:|M:] [给|gěi|to] [我|wǒ|me] [一个|yí ge|one] [苹果|píngguǒ|apple] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W: All this fruit is fresh — what would you like to eat?<br>M: Give me an apple.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[很多|hěnduō|many] [水果|shuǐguǒ|fruits]）</div>
        </div>
        <div class="q" id="L3-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [爸爸|bàba|Dad] [的|de|(possessive)] [生日|shēngrì|birthday] [快|kuài|soon] [到|dào|arrive] [了，|le,|,] [我|wǒ|I] [想|xiǎng|want to] [送|sòng|give] [他|tā|him] [一条|yì tiáo|a] [裤子，|kùzi,|pair of trousers,] [你|nǐ|you] [看|kàn|look] [这条|zhè tiáo|this pair] [怎么样？|zěnmeyàng?|how about?]</div>
          <div class="zh stem">[男：|Nán:|M:] [颜色|yánsè|color] [不错，|búcuò,|nice,] [但是|dànshì|but] [我|wǒ|I] [觉得|juéde|feel] [大|dà|big] [了|le|(change)] [一点儿。|yìdiǎnr.|a bit.]</div>
          <div class="sent-en">W: Dad's birthday is coming. I want to give him a pair of trousers. How about this pair?<br>M: The color is nice, but I think it's a bit too big.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[叠好|dié hǎo|folded] [的|de|(possessive)] [裤子|kùzi|trousers]）</div>
        </div>
        <div class="q" id="L3-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [想|xiǎng|want to] [买|mǎi|buy] [件|jiàn|(MW)] [衬衫。|chènshān.|shirt.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [颜色|yánsè|color] [很多|hěn duō|many] [啊，|a,|,] [你|nǐ|you] [喜欢|xǐhuan|like] [红|hóng|red] [的|de|(nominalizer)] [还是|háishi|or] [绿|lǜ|green] [的？|de?|(nominalizer)]</div>
          <div class="sent-en">M: I want to buy a shirt.<br>W: There are many colors — do you like red or green?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[挂着|guà zhe|hanging] [的|de|(possessive)] [一排|yì pái|a row of] [衬衫|chènshān|shirts]）</div>
        </div>

        <h4 id="L3-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L3-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[你|nǐ|you] [还|hái|still] [记得|jìde|remember] [前边|qiánbiān|in front] [的|de|(possessive)] [那个|nàge|that] [女孩儿|nǚháir|girl] [吗？|ma?|?] [去年|qùnián|last year] [我们|wǒmen|we] [去|qù|went to] [上海|Shànghǎi|Shanghai] [玩儿|wánr|play] [的|de|(possessive)] [时候|shíhou|time] [认识|rènshi|met] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">Do you still remember that girl in front? We met her when we went to Shanghai last year.</div>
          <div class="zh stem">★ [他|tā|he] [不|bù|not] [认识|rènshi|know] [那个|nàge|that] [女孩儿。|nǚháir.|girl.]</div>
          <div class="sent-en">★ He doesn't know that girl.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [说|shuō|says]「[去年|qùnián|last year] [认识|rènshi|met]」，[说明|shuōmíng|showing] [他们|tāmen|they] [认识。|rènshi|know each other.]" data-expl-en="The text says they met last year — so they DO know each other."></div>
        </div>
        <div class="q" id="L3-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[我|wǒ|I] [记得|jìde|remember] [这条|zhè tiáo|this pair] [裤子|kùzi|trousers] [上个月|shàng ge yuè|last month] [是|shì|was] [八百元，|bābǎi yuán,|800 yuan,] [现在|xiànzài|now] [只要|zhǐyào|only] [四百元，|sìbǎi yuán,|400 yuan,] [我|wǒ|I] [一次|yí cì|once] [买|mǎi|bought] [了|le|(past)] [两条。|liǎng tiáo.|two pairs.]</div>
          <div class="sent-en">I remember this pair of trousers was 800 yuan last month, now it's only 400, so I bought two pairs at once.</div>
          <div class="zh stem">★ [这条|zhè tiáo|this pair] [裤子|kùzi|trousers] [现在|xiànzài|now] [便宜|piányi|cheap] [得|de|(complement)] [多。|duō.|much.]</div>
          <div class="sent-en">★ This pair of trousers is much cheaper now.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[原价|yuánjià|Original price] 800，[现在|xiànzài|now] 400，[当然|dāngrán|of course] [便宜|piányi|cheaper] [得|de|(complement)] [多。|duō|a lot.]" data-expl-en="800 → 400, much cheaper."></div>
        </div>
        <div class="q" id="L3-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[工作|gōngzuò|work] [很|hěn|very] [累|lèi|tired] [的|de|(possessive)] [时候|shíhou|time] [可以|kěyǐ|can] [听歌、|tīng gē,|listen to music,] [玩儿游戏|wánr yóuxì|play games] [或者|huòzhě|or] [去|qù|go] [运动，|yùndòng,|exercise,] [这样，|zhèyàng,|this way,] [你|nǐ|you] [会|huì|will] [觉得|juéde|feel] [舒服|shūfu|comfortable] [点儿。|diǎnr.|a bit.]</div>
          <div class="sent-en">When work is tiring, you can listen to music, play games or exercise — that way you'll feel better.</div>
          <div class="zh stem">★ [运动|yùndòng|exercise] [时|shí|when] [可以|kěyǐ|can] [听歌。|tīng gē.|listen to music.]</div>
          <div class="sent-en">★ You can listen to music while exercising.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [是|shì|lists] [并列|bìngliè|parallel] [的|de|(possessive)] [三种|sān zhǒng|three] [方式，|fāngshì,|ways,] [没有|méiyǒu|doesn’t] [说|shuō|say] [可以|kěyǐ|can] [同时|tóngshí|at the same time] [做。|zuò|do them.]" data-expl-en="The text lists three alternatives — not simultaneous activities."></div>
        </div>
        <div class="q" id="L3-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[我|wǒ|I] [刚|gāng|just] [买|mǎi|bought] [的|de|(possessive)] [鲜奶|xiānnǎi|fresh milk] [你|nǐ|you] [放|fàng|put] [到|dào|to] [哪儿|nǎr|where] [了？|le?|(change)] [我|wǒ|I] [现在|xiànzài|now] [想|xiǎng|want to] [喝。|hē.|drink.]</div>
          <div class="sent-en">Where did you put the fresh milk I just bought? I want to drink it now.</div>
          <div class="zh stem">★ [他|tā|he] [不|bù|not] [知道|zhīdào|know] [鲜奶|xiānnǎi|fresh milk] [在|zài|at] [哪儿。|nǎr.|where.]</div>
          <div class="sent-en">★ He doesn't know where the fresh milk is.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[他|tā|He] [在|zài|is] [问|wèn|asking]「[放到|fàng dào|put] [哪儿|nǎr|where] [了|le|(change)]」，[说明|shuōmíng|showing] [他|tā|he] [不|bù|doesn’t] [知道。|zhīdào|know.]" data-expl-en="He's asking 'where did you put it', so he doesn't know."></div>
        </div>
        <div class="q" id="L3-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[你|nǐ|you] [怎么|zěnme|why] [只|zhǐ|only] [吃|chī|eat] [饭|fàn|rice] [不|bù|not] [吃|chī|eat] [菜|cài|dishes] [啊，|a,|,] [来，|lái,|come,] [多|duō|more] [吃|chī|eat] [点儿。|diǎnr.|a bit.]</div>
          <div class="sent-en">Why are you only eating rice and not the dishes? Come, eat more.</div>
          <div class="zh stem">★ [她|tā|she] [菜|cài|dishes] [吃|chī|eat] [得|de|(complement)] [很少。|hěn shǎo.|very little.]</div>
          <div class="sent-en">★ She eats very few dishes.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[只|zhǐ|only] [吃饭|chīfàn|eats rice] [不|bù|not] [吃菜|chī cài|vegetables]」= [菜|cài|vegetables] [吃|chī|eaten] [得|de|(complement)] [很|hěn|very] [少。|shǎo|little.]" data-expl-en="'Only rice, no dishes' = eats very few dishes."></div>
        </div>

        <h4 id="L3-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L3-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|my] [的|de|(possessive)] [脚|jiǎo|foot] [还|hái|still] [没|méi|not] [好，|hǎo,|better,] [我们|wǒmen|we] [周末|zhōumò|weekend] [别|bié|don't] [去|qù|go] [爬山|pá shān|climb mountains] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [好，|hǎo,|OK,] [那|nà|then] [我们|wǒmen|we] [就|jiù|then] [在|zài|at] [家|jiā|home] [看看|kàn kan|watch] [电视，|diànshì,|TV,] [玩儿玩儿|wánr wanr|play] [游戏。|yóuxì.|games.]</div>
          <div class="sent-en">W: My foot still hasn't healed. Let's not go mountain climbing this weekend.<br>M: OK, then let's stay home, watch TV and play games.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [为什么|wèishénme|why] [不|bù|doesn’t] [去|qù|go] [爬山？|pá shān?|climbing?]</div>
          <div class="sent-en">Q: Why isn't the woman going mountain climbing?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[脚不舒服|jiǎo bù shūfu|foot isn't well]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[想看电视|xiǎng kàn diànshì|wants to watch TV]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[想玩儿游戏|xiǎng wánr yóuxì|wants to play games]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[我|wǒ|my] [的|de|(possessive)] [脚|jiǎo|foot] [还|hái|still] [没|méi|hasn’t] [好|hǎo|healed]」。</div>
        </div>
        <div class="q" id="L3-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [今天|jīntiān|today] [买|mǎi|bought] [的|de|(possessive)] [冷饮|lěngyǐn|cold drink] [很|hěn|very] [甜，|tián,|sweet,] [你|nǐ|you] [要|yào|want to] [不要|bú yào|or not] [喝|hē|drink] [点儿？|diǎnr?|some?]</div>
          <div class="zh stem">[男：|Nán:|M:] [不|bù|not] [喝|hē|drink] [了，|le,|,] [我|wǒ|I] [打算|dǎsuàn|plan to] [睡觉|shuìjiào|sleep] [了。|le.|(change)]</div>
          <div class="sent-en">W: Today's cold drink is very sweet. Want some?<br>M: No, I'm going to sleep.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [为什么|wèishénme|why] [不|bù|doesn’t] [喝|hē|drink] [冷饮？|lěngyǐn?|cold drinks?]</div>
          <div class="sent-en">Q: Why doesn't the man drink the cold drink?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不太甜|bú tài tián|not sweet]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[要睡觉|yào shuìjiào|going to sleep]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[太冷了|tài lěng le|too cold]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|I] [打算|dǎsuàn|am going to] [睡觉|shuìjiào|sleep] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L3-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [新|xīn|newly] [给|gěi|to] [我|wǒ|me] [买|mǎi|bought] [的|de|(possessive)] [那条|nà tiáo|that pair] [裤子|kùzi|trousers] [放|fàng|put] [哪儿|nǎr|where] [了？|le?|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [洗完|xǐ wán|finish washing] [衬衫|chènshān|shirt] [就|jiù|then] [给|gěi|to] [你|nǐ|you] [拿。|ná.|bring.]</div>
          <div class="sent-en">M: Where did you put the trousers you bought me?<br>W: I'll bring them to you as soon as I finish washing the shirts.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [在|zài|is] [做|zuò|doing] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What is the woman doing?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[买裤子|mǎi kùzi|buying trousers]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[洗衬衫|xǐ chènshān|washing shirts]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[拿裤子|ná kùzi|getting trousers]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|I] [洗完|xǐ wán|finish washing] [衬衫|chènshān|the shirt] [就|jiù|then] [给|gěi|for] [你|nǐ|you] [拿|ná|bring it]」。</div>
        </div>
        <div class="q" id="L3-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [上午|shàngwǔ|morning] [给|gěi|to] [我|wǒ|me] [打电话|dǎ diànhuà|called] [的|de|(possessive)] [时候，|shíhou,|when,] [我|wǒ|I] [正在|zhèngzài|right now] [上课。|shàngkè.|having class.] [有|yǒu|have] [什么|shénme|what] [事|shì|matter] [吗？|ma?|?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [对不起，|duìbuqǐ,|Sorry,] [是|shì|is] [我|wǒ|I] [不小心|bù xiǎoxīn|carelessly] [打错|dǎ cuò|dialed wrong] [了。|le.|(change)]</div>
          <div class="sent-en">M: When you called me this morning I was in class. What's up?<br>W: Sorry, I dialed the wrong number by accident.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [为什么|wèishénme|why] [给|gěi|called] [男的|nánde|the man] [打电话？|dǎ diànhuà?|phone?]</div>
          <div class="sent-en">Q: Why did the woman call the man?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[找他去上课|zhǎo tā qù shàngkè|find him for class]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[不小心打错了|bù xiǎoxīn dǎ cuò le|dialed wrong by accident]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[上午有事|shàngwǔ yǒu shì|had something in the morning]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[是|shì|It was] [我|wǒ|me] [不小心|bù xiǎoxīn|carelessly] [打错|dǎ cuò|dialing the wrong number] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L3-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [桌子|zhuōzi|table] [上面|shàngmiàn|on top] [放|fàng|placed] [着|zhe|(progressive)] [一杯|yì bēi|one cup of] [咖啡，|kāfēi,|coffee,] [是|shì|is it] [你|nǐ|your] [的|de|(possessive)] [吗？|ma?|?]</div>
          <div class="zh stem">[男：|Nán:|M:] [小丽|Xiǎolì|Xiaoli] [放|fàng|put] [在|zài|at] [那儿|nàr|there] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">W: There's a cup of coffee on the table — is it yours?<br>M: Xiaoli put it there.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [咖啡|kāfēi|the coffee] [是|shì|is] [谁|shéi|whose] [的？|de?|(question)]</div>
          <div class="sent-en">Q: Whose coffee is it?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[男的的|nánde de|the man's]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[女的的|nǚde de|the woman's]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[小丽的|Xiǎolì de|Xiaoli's]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[小丽|Xiǎolì|Xiaoli] [放|fàng|put] [在|zài|(it)] [那儿|nàr|there] [的|de|(nominalizer)]」。</div>
        </div>

        <h4 id="L3-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L3-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[男：|Nán:|M:] [今天|jīntiān|today] [买|mǎi|bought] [什么|shénme|what] [了？|le?|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [买|mǎi|bought] [了|le|(past)] [衬衫，|chènshān,|a shirt,] [还|hái|also] [给|gěi|for] [妈妈|māma|Mom] [买|mǎi|bought] [了|le|(past)] [一条|yì tiáo|a pair of] [裤子。|kùzi.|trousers.]</div>
          <div class="zh stem">[男：|Nán:|M:] [那|nà|then] [你|nǐ|you] [给|gěi|for] [我|wǒ|me] [买|mǎi|bought] [什么|shénme|what] [了？|le?|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [桌子|zhuōzi|table] [上|shàng|on] [的|de|(possessive)] [饮料|yǐnliào|drink] [给|gěi|to] [你|nǐ|you] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: What did you buy today?<br>W: I bought a shirt, and a pair of trousers for Mom.<br>M: Then what did you buy for me?<br>W: The drink on the table is for you.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [给|gěi|for] [自己|zìjǐ|herself] [买|mǎi|bought] [什么|shénme|what] [了？|le?|?]</div>
          <div class="sent-en">Q: What did the woman buy for herself?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[衬衫|chènshān|a shirt]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[裤子|kùzi|trousers]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[饮料|yǐnliào|a drink]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[我|wǒ|I] [买|mǎi|bought] [了|le|(past)] [衬衫|chènshān|a shirt]」（[给|gěi|for] [自己|zìjǐ|myself]），[裤子|kùzi|the trousers] [是|shì|are] [给|gěi|for] [妈妈|māma|Mom] [的。|de|(nominalizer)]</div>
        </div>
        <div class="q" id="L3-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|my] [的|de|(possessive)] [手机|shǒujī|phone] [放|fàng|put] [哪儿|nǎr|where] [了？|le?|(change)] [我|wǒ|I] [怎么|zěnme|why] [不|bù|not] [记得|jìde|remember] [了？|le?|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [别|bié|don't] [着急，|zháojí,|worry,] [慢慢|mànman|slowly] [想。|xiǎng.|think.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [给|gěi|to] [我|wǒ|me] [打|dǎ|make] [个|ge|(MW)] [电话|diànhuà|call] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [好，|hǎo,|OK,] [没问题。|méi wèntí.|no problem.]</div>
          <div class="sent-en">W: Where did I put my phone? Why can't I remember?<br>M: Don't worry — think slowly.<br>W: Give me a call.<br>M: OK, no problem.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [为什么|wèishénme|why] [让|ràng|asked] [男的|nánde|the man] [给|gěi|to] [她|tā|her] [打|dǎ|make] [个|ge|(MW)] [电话？|diànhuà?|a call?]</div>
          <div class="sent-en">Q: Why does the woman ask the man to call her?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[有问题问他|yǒu wèntí wèn tā|has a question for him]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[找手机|zhǎo shǒujī|to find her phone]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[她很着急|tā hěn zháojí|she's very worried]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[打电话|dǎ diànhuà|Calling] [就|jiù|then] [能|néng|can] [听到|tīngdào|hear] [手机|shǒujī|the phone] [响，|xiǎng,|ring,] [从而|zōng’ér|so as to] [找到|zhǎodào|find] [手机。|shǒujī|the phone.]</div>
        </div>
        <div class="q" id="L3-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[男：|Nán:|M:] [给|gěi|to] [我|wǒ|me] [来杯|lái bēi|bring a cup of] [绿茶|lǜchá|green tea] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [这儿|zhèr|here] [没有|méiyǒu|don't have] [绿茶。|lǜchá.|green tea.]</div>
          <div class="zh stem">[男：|Nán:|M:] [桌子|zhuōzi|table] [上|shàng|on] [不是|bú shì|isn't] [放|fàng|placed] [着|zhe|(progressive)] [绿茶|lǜchá|green tea] [吗？|ma?|?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|that] [不是|bú shì|isn't] [绿茶，|lǜchá,|green tea,] [是|shì|is] [水果|shuǐguǒ|fruit] [饮料。|yǐnliào.|drink.]</div>
          <div class="sent-en">M: Bring me a green tea.<br>W: We don't have green tea here.<br>M: Isn't there green tea on the table?<br>W: That's not green tea, it's fruit juice.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [桌子|zhuōzi|On the table] [上|shàng|(location)] [放着|fàng zhe|is placed] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What's on the table?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[绿茶|lǜchá|green tea]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[水果|shuǐguǒ|fruit]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[饮料|yǐnliào|a drink]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[是|shì|It’s] [水果|shuǐguǒ|fruit] [饮料|yǐnliào|drink]」。</div>
        </div>
        <div class="q" id="L3-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [送|sòng|take] [儿子|érzi|son] [上学|shàngxué|to school] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [好，|hǎo,|OK,] [你|nǐ|you] [怎么|zěnme|why] [了？|le?|(change)] [不|bù|not] [舒服|shūfu|well] [吗？|ma?|?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [没有，|méiyǒu,|No,] [我|wǒ|I] [觉得|juéde|feel] [有点儿|yǒudiǎnr|a bit] [累。|lèi.|tired.]</div>
          <div class="zh stem">[男：|Nán:|M:] [那|nà|then] [你|nǐ|you] [在|zài|at] [家|jiā|home] [休息|xiūxi|rest] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W: Take our son to school.<br>M: OK. What's wrong? Not feeling well?<br>W: No, I just feel a bit tired.<br>M: Then rest at home.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [怎么|zěnme|what’s wrong] [了？|le?|?]</div>
          <div class="sent-en">Q: What's wrong with the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[不想去上学|bù xiǎng qù shàngxué|doesn't want to go to school]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[觉得累|juéde lèi|feels tired]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不舒服|bù shūfu|not feeling well]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我|wǒ|I] [觉得|juéde|feel] [有点儿|yǒudiǎnr|a bit] [累|lèi|tired]」。</div>
        </div>
        <div class="q" id="L3-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [不是|bú shì|aren't] [要|yào|going to] [买|mǎi|buy] [牛肉|niúròu|beef] [吗？|ma?|?] [怎么|zěnme|why] [买|mǎi|bought] [鱼|yú|fish] [了？|le?|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [去晚了，|qù wǎn le,|went too late,] [牛肉|niúròu|beef] [都|dōu|all] [卖完|mài wán|sold out] [了。|le.|(change)] [我|wǒ|I] [看|kàn|looked at] [这条|zhè tiáo|this] [鱼|yú|fish] [很|hěn|very] [新鲜|xīnxiān|fresh] [就|jiù|then] [买|mǎi|bought] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [是|shì|is] [很|hěn|very] [好。|hǎo.|good.] [对了，|duìle,|By the way,] [我们|wǒmen|we] [吃|chī|eat] [米饭|mǐfàn|rice] [还是|háishi|or] [面条？|miàntiáo?|noodles?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [今天|jīntiān|today] [有|yǒu|have] [鱼，|yú,|fish,] [我们|wǒmen|we] [吃|chī|eat] [米饭|mǐfàn|rice] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: Weren't you going to buy beef? Why did you buy fish?<br>W: I went too late — the beef was sold out. I saw this fish was fresh so I bought it.<br>M: It's very good. By the way, shall we have rice or noodles?<br>W: With fish today, let's have rice.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [为什么|wèishénme|why] [没|méi|didn’t] [买|mǎi|buy] [牛肉？|niúròu?|beef?]</div>
          <div class="sent-en">Q: Why didn't the woman buy beef?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[牛肉不新鲜|niúròu bù xīnxiān|beef wasn't fresh]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[没有牛肉了|méiyǒu niúròu le|no beef left]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[要吃米饭|yào chī mǐfàn|want to eat rice]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[牛肉|niúròu|The beef] [都|dōu|all] [卖完|mài wán|sold out] [了|le|(change)]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L3-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L3-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[我|wǒ|I] [今天|jīntiān|today] [不|bù|not] [舒服，|shūfu,|feel well,] [觉得|juéde|feel] [很|hěn|very] [累。|lèi.|tired.]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[你|nǐ|you] [还|hái|still] [认识|rènshi|recognize] [我|wǒ|me] [吗？|ma?|?] [我们|wǒmen|we] [在|zài|at] [中国|Zhōngguó|China] [见过。|jiàn guò.|met.]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[你|nǐ|you] [喜欢|xǐhuan|like] [吃|chī|eat] [红|hóng|red] [苹果|píngguǒ|apple] [还是|háishi|or] [绿|lǜ|green] [苹果？|píngguǒ?|apple?]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[妈妈，|māma,|Mom,] [我|wǒ|I] [下课|xià kè|class is over] [回来|huílái|back] [了。|le.|(change)]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span><div class="sent-en">Of course. We'll take the bus first, then transfer to the subway.</div></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[上面|shàngmiàn|on it] [写着|xiě zhe|says] [二十元|èrshí yuán|20 yuan] [一把。|yì bǎ.|each.]</span></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L3-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[今天|jīntiān|today] [你|nǐ|you] [怎么|zěnme|why] [了？|le?|(change)] [一直|yìzhí|always] [在|zài|(progressive)] [睡觉。|shuìjiào.|sleeping.] （<span class="blank">　</span>）</div>
          <div class="sent-en">What's wrong with you today? You keep sleeping.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L3-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[啊，|a,|Ah,] [对，|duì,|right,] [我|wǒ|I] [记得|jìde|remember] [你，|nǐ,|you,] [你|nǐ|you] [瘦|shòu|thin] [了。|le.|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Oh right, I remember you — you've gotten thinner.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L3-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[桌子上|zhuōzi shang|On the table] [放|fàng|placed] [着|zhe|(progressive)] [饮料，|yǐnliào,|a drink,] [你|nǐ|you] [先|xiān|first] [喝|hē|drink] [点儿|diǎnr|a bit] [吧。|ba.|(suggestion)] （<span class="blank">　</span>）</div>
          <div class="sent-en">There's a drink on the table — have some first.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L3-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[我|wǒ|I] [喜欢|xǐhuan|like] [吃|chī|eat] [红|hóng|red] [苹果，|píngguǒ,|apple,] [我|wǒ|I] [觉得|juéde|feel] [红|hóng|red] [苹果|píngguǒ|apple] [甜。|tián.|sweet.] （<span class="blank">　</span>）</div>
          <div class="sent-en">I like red apples — I find red apples sweet.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L3-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[这种|zhè zhǒng|this kind of] [雨伞|yǔsǎn|umbrella] [多少|duōshao|how much] [钱|qián|money] [一把？|yì bǎ?|each?] （<span class="blank">　</span>）</div>
          <div class="sent-en">How much is this kind of umbrella?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L3-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L3-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[裤子|kùzi|trousers]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[或者|huòzhě|or]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[还是|háishi|or]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[记得|jìde|remember]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[小心|xiǎoxīn|careful]</span></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L3-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[老师，|lǎoshī,|Teacher,] [我们|wǒmen|we] [今天|jīntiān|today] [复习|fùxí|review] [第三课|dì sān kè|Lesson 3] （<span class="blank">　</span>） [学习|xuéxí|study] [第四课？|dì sì kè?|Lesson 4?]</div>
          <div class="sent-en">Teacher, are we reviewing Lesson 3 or studying Lesson 4 today?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L3-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[周末|zhōumò|weekend] [你|nǐ|you] [是不是|shì bú shì|aren't] [要|yào|going to] [带|dài|take] [学生|xuéshēng|students] [去|qù|go] [爬山？|pá shān?|mountain climbing?] [穿|chuān|wear] [这条|zhè tiáo|this pair of] （<span class="blank">　</span>） [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">Aren't you taking students mountain climbing this weekend? Wear this pair of trousers.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L3-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[这杯|zhè bēi|This cup of] [饮料|yǐnliào|drink] [很|hěn|very] [热，|rè,|hot,] [喝|hē|drink] [的|de|(possessive)] [时候|shíhou|time] （<span class="blank">　</span>） [点儿。|diǎnr.|a bit.]</div>
          <div class="sent-en">This drink is very hot — be careful when you drink it.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L3-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [你|nǐ|you] [想|xiǎng|want] [喝|hē|drink] [点儿|diǎnr|some] [什么|shénme|what] [茶？|chá?|tea?]</div>
          <div class="zh">[B：|B:|B:] [花茶|huāchá|flower tea] （<span class="blank">　</span>） [绿茶|lǜchá|green tea] [都|dōu|both] [行。|xíng.|OK.]</div>
          <div class="sent-en">A: What tea would you like?<br>B: Flower tea or green tea — either is fine.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L3-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [经理|jīnglǐ|manager] [旁边|pángbiān|next to] [坐|zuò|sits] [着|zhe|(progressive)] [一个人，|yí ge rén,|a person,] [你|nǐ|you] [知道|zhīdào|know] [是|shì|is] [谁|shéi|who] [吗？|ma?|?]</div>
          <div class="zh">[B：|B:|B:] [你|nǐ|you] [不|bù|not] （<span class="blank">　</span>） [了？|le?|(change)] [那|nà|that] [是|shì|is] [小周|Xiǎo Zhōu|Xiao Zhou] [啊，|a,|,] [去年|qùnián|last year] [来过。|lái guò.|came.]</div>
          <div class="sent-en">A: Someone is sitting next to the manager — do you know who it is?<br>B: Don't you remember? That's Xiao Zhou — came last year.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L3-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L3-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[这条|zhè tiáo|This pair of] [裤子|kùzi|trousers] [是|shì|was] [去年|qùnián|last year] [过生日|guò shēngrì|birthday] [时|shí|when] [我|wǒ|my] [哥|gē|elder brother] [送|sòng|gave] [我|wǒ|me] [的，|de,|,] [只|zhǐ|only] [穿|chuān|wore] [了|le|(past)] [一次，|yí cì,|once,] [就|jiù|then] [没|méi|not] [再|zài|again] [穿，|chuān,|wear,] [一直|yìzhí|always] [放|fàng|put] [在|zài|at] [这里。|zhèlǐ.|here.]</div>
          <div class="sent-en">This pair of trousers was given to me by my elder brother on my birthday last year. I only wore them once and haven't worn them again.</div>
          <div class="zh ask">★ [这条|zhè tiáo|These] [裤子：|kùzi:|trousers:]</div>
          <div class="sent-en">★ These trousers: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[是绿色的|shì lǜsè de|are green]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[没穿过几次|méi chuān guò jǐ cì|worn only a few times]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[是我买的|shì wǒ mǎi de|I bought them]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[只|zhǐ|only] [穿|chuān|worn] [了|le|(past)] [一次|yí cì|once]」。</div>
        </div>
        <div class="q" id="L3-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[多吃|duō chī|Eat more] [新鲜|xīnxiān|fresh] [的|de|(possessive)] [苹果|píngguǒ|apple] [对|duì|to] [身体|shēntǐ|health] [好，|hǎo,|good,] [早上|zǎoshang|morning] [和|hé|and] [上午|shàngwǔ|forenoon] [是|shì|is] [吃|chī|eat] [苹果|píngguǒ|apple] [最好|zuì hǎo|best] [的|de|(possessive)] [时间。|shíjiān.|time.]</div>
          <div class="sent-en">Eating more fresh apples is good for your health — morning and forenoon are the best times to eat apples.</div>
          <div class="zh ask">★ [我们|wǒmen|We] [应该：|yīnggāi:|should:]</div>
          <div class="sent-en">★ We should: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[晚上吃苹果|wǎnshang chī píngguǒ|eat apples at night]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[上午吃苹果|shàngwǔ chī píngguǒ|eat apples in the forenoon]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[身体好的时候吃苹果|shēntǐ hǎo de shíhou chī píngguǒ|only when healthy]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[早上|zǎoshang|Morning] [和|hé|and] [上午|shàngwǔ|late morning] [是|shì|are] [吃|chī|eating] [苹果|píngguǒ|apples] [最好|zuì hǎo|the best] [的|de|(possessive)] [时间|shíjiān|time]」。</div>
        </div>
        <div class="q" id="L3-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[我|wǒ|my] [先生|xiānsheng|husband] [不|bù|not] [爱|ài|like] [吃|chī|eat] [西瓜，|xīguā,|watermelon,] [你|nǐ|you] [也|yě|also] [不|bù|not] [爱|ài|like] [吃，|chī,|eat,] [西瓜|xīguā|watermelon] [那么|nàme|so] [好|hǎo|good] [吃，|chī,|tasty,] [又|yòu|also] [那么|nàme|so] [甜，|tián,|sweet,] [为什么|wèishénme|why] [你们|nǐmen|you] [会|huì|would] [不|bù|not] [喜欢|xǐhuan|like] [呢？|ne?|?]</div>
          <div class="sent-en">My husband doesn't like watermelon and neither do you. Watermelon is so tasty and so sweet — why don't you like it?</div>
          <div class="zh ask">★ [她：|tā:|She:]</div>
          <div class="sent-en">★ She: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[爱吃西瓜|ài chī xīguā|loves watermelon]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不喜欢吃甜的|bù xǐhuan chī tián de|doesn't like sweet things]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[没买西瓜|méi mǎi xīguā|didn't buy watermelon]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[她|tā|She] [认为|rènwéi|thinks] [西瓜|xīguā|watermelon] [好吃|hǎochī|tasty] [又|yòu|and] [甜，|tián,|sweet,] [说明|shuōmíng|showing] [她|tā|she] [爱|ài|loves] [吃|chī|eating] [西瓜。|xīguā|watermelon.]</div>
        </div>
        <div class="q" id="L3-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[我们|wǒmen|our] [的|de|(possessive)] [办公室|bàngōngshì|office] [里|li|inside] [放|fàng|placed] [着|zhe|(progressive)] [很多|hěnduō|many] [吃|chī|eat] [的|de|(possessive)] [东西，|dōngxi,|things,] [下午|xiàwǔ|afternoon] [工作|gōngzuò|work] [累|lèi|tired] [了|le|(change)] [的|de|(possessive)] [时候，|shíhou,|when,] [大家|dàjiā|everyone] [都|dōu|all] [会|huì|will] [吃|chī|eat] [点儿。|diǎnr.|a bit.]</div>
          <div class="sent-en">There's a lot of food in our office. When work gets tiring in the afternoon, everyone eats some.</div>
          <div class="zh ask">★ [我们|wǒmen|We] [下午：|xiàwǔ:|in the afternoon:]</div>
          <div class="sent-en">★ We, in the afternoon: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[去买吃的东西|qù mǎi chī de dōngxi|go buy food]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[只吃东西不工作|zhǐ chī dōngxi bù gōngzuò|only eat, don't work]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[累了就吃点儿东西|lèi le jiù chī diǎnr dōngxi|eat when tired]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[工作|gōngzuò|work] [累|lèi|tired] [了|le|(change)] [的|de|(possessive)] [时候|shíhou|time] [都|dōu|always] [会|huì|will] [吃|chī|eat] [点儿|diǎnr|some]」。</div>
        </div>
        <div class="q" id="L3-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[周六|zhōu liù|Saturday] [周日|zhōu rì|Sunday] [我们|wǒmen|we] [事情|shìqing|things] [不|bù|not] [多，|duō,|much,] [喜欢|xǐhuan|like] [和|hé|with] [学生|xuéshēng|students] [去|qù|go] [爬爬山，|pá pá shān,|mountain climbing,] [或者|huòzhě|or] [打打|dǎ da|play] [篮球，|lánqiú,|basketball,] [有时候|yǒu shíhou|sometimes] [也|yě|also] [会|huì|will] [在|zài|at] [家|jiā|home] [看书。|kàn shū.|read.]</div>
          <div class="sent-en">On Saturdays and Sundays we don't have much to do. We like to go mountain climbing with students or play basketball; sometimes we read at home.</div>
          <div class="zh ask">★ [我们：|wǒmen:|We:]</div>
          <div class="sent-en">★ We: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[周末工作很忙|zhōumò gōngzuò hěn máng|very busy on weekends]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[周末喜欢去爬山|zhōumò xǐhuan qù pá shān|like mountain climbing on weekends]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[每天在家看书|měitiān zài jiā kàn shū|read at home every day]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[喜欢|xǐhuan|like] [和|hé|with] [学生|xuéshēng|students] [去|qù|to go] [爬爬|pá pa|climb] [山|shān|mountains]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L3-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L3-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[放着|fàng zhe|is placed] [裤子|kùzi|trousers] [床上|chuáng shang|on the bed] [一条|yì tiáo|one pair]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[床|chuáng|On the bed] [上|shàng|(location)] [放着|fàng zhe|lies] [一条|yì tiáo|a pair of] [裤子。|kùzi|trousers.]<div class="sent-en">There's a pair of trousers on the bed.</div></div>
        </div>
        <div class="write-item" id="L3-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[的时候|de shíhou|when] [要|yào|should] [小心点儿|xiǎoxīn diǎnr|be careful] [爬山|pá shān|climb mountains]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[爬山|pá shān|When climbing] [的|de|(possessive)] [时候|shíhou|time] [要|yào|be] [小心点儿。|xiǎoxīn diǎnr|careful.]<div class="sent-en">Be careful when climbing mountains.</div></div>
        </div>
        <div class="write-item" id="L3-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[穿了|chuān le|wore] [一件|yí jiàn|one] [我记得|wǒ jìde|I remember] [白衬衫|bái chènshān|white shirt] [他|tā|he]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|I] [记得|jìde|remember] [他|tā|he] [穿|chuān|wore] [了|le|(past)] [一件|yí jiàn|a] [白衬衫。|bái chènshān|white shirt.]<div class="sent-en">I remember he wore a white shirt.</div></div>
        </div>
        <div class="write-item" id="L3-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[红茶|hóngchá|black tea] [想喝|xiǎng hē|want to drink] [绿茶|lǜchá|green tea] [还是|háishi|or] [你|nǐ|you]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|Would you] [想|xiǎng|like] [喝|hē|to drink] [红茶|hóngchá|black tea] [还是|háishi|or] [绿茶？|lǜchá|green tea?]<div class="sent-en">Would you like black tea or green tea?</div></div>
        </div>
        <div class="write-item" id="L3-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[还是|háishi|or] [他想买|tā xiǎng mǎi|he wants to buy] [裤子|kùzi|trousers] [衬衫|chènshān|shirt] [我|wǒ|I] [不知道|bù zhīdào|don't know]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|I] [不|bù|don’t] [知道|zhīdào|know] [他|tā|he] [想|xiǎng|wants] [买|mǎi|to buy] [裤子|kùzi|trousers] [还是|háishi|or] [衬衫。|chènshān|a shirt.]<div class="sent-en">I don't know whether he wants to buy trousers or a shirt.</div></div>
        </div>

        <h4 id="L3-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L3-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[我|wǒ|I] [想|xiǎng|want] [喝|hē|drink] [点儿|diǎnr|some] <span class="blank-input"><span class="input-py">yǐn</span><input type="text" data-ans="饮"></span> [料。|liào.|drink.]</div>
          <div class="sent-en">I want to drink something.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[饮|yǐn|drink]（[饮料|yǐnliào|drink]）</span></div>
        </div>
        <div class="write-item" id="L3-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[水|shuǐ|water] [很|hěn|very] [热，|rè,|hot,] [喝|hē|drink] [的|de|(possessive)] [时候|shíhou|time] [小|xiǎo|be] <span class="blank-input"><span class="input-py">xīn</span><input type="text" data-ans="心"></span> [点儿。|diǎnr.|a bit.]</div>
          <div class="sent-en">The water is very hot — be careful when you drink it.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[心|xīn|heart]（[小心|xiǎoxīn|be careful]）</span></div>
        </div>
        <div class="write-item" id="L3-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[一|yī|one] <span class="blank-input"><span class="input-py">tiáo</span><input type="text" data-ans="条"></span> [裤子|kùzi|trousers] [三百元。|sānbǎi yuán.|300 yuan.]</div>
          <div class="sent-en">One pair of trousers costs 300 yuan.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[条|tiáo|(MW for long things)]</span></div>
        </div>
        <div class="write-item" id="L3-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[我|wǒ|I] [觉得|juéde|feel] [胖|pàng|fat] [或|huò|or] <span class="blank-input"><span class="input-py">zhě</span><input type="text" data-ans="者"></span> [瘦|shòu|thin] [没关系。|méi guānxi.|doesn't matter.]</div>
          <div class="sent-en">I think being fat or thin doesn't matter.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[者|zhě|(as in 或者 "or")]</span></div>
        </div>
        <div class="write-item" id="L3-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[我|wǒ|I] [不|bù|not] [喜欢|xǐhuan|like] [这个|zhège|this] <span class="blank-input"><span class="input-py">tián</span><input type="text" data-ans="甜"></span> [面包。|miànbāo.|bread.]</div>
          <div class="sent-en">I don't like this sweet bread.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[甜|tián|sweet]</span></div>
        </div>

        <h4 id="L3-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L3-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[我|wǒ|I] [打算|dǎsuàn|plan to] [周末|zhōumò|weekend] [跟|gēn|with] [学生|xuéshēng|students] [一起|yìqǐ|together] [爬|pá|climb] <span class="blank-input"><input type="text" data-ans="山"></span>。</div>
          <div class="zh" style="margin-top:6px;">[山|shān|mountain]　[出|chū|go out]</div>
          <div class="sent-en">I plan to go mountain climbing with students this weekend.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[山|shān|mountain]</div>
        </div>
        <div class="write-item" id="L3-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[你|nǐ|you] [现在|xiànzài|now] [真|zhēn|really] [瘦！|shòu!|thin!] [我|wǒ|I] [记|jì|remember] <span class="blank-input"><input type="text" data-ans="得"></span> [你|nǐ|you] [上学|shàngxué|go to school] [的|de|(possessive)] [时候|shíhou|time] [不|bù|not] [是|shì|is] <span class="blank-input"><input type="text" data-ans="很"></span> [瘦|shòu|thin] [啊。|a.|(exclamation)]</div>
          <div class="zh" style="margin-top:6px;">[得|de|(complement)]　[很|hěn|very]</div>
          <div class="sent-en">You're really thin now! I remember you weren't very thin when you were at school.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[得|de|(as in 记得 “remember”)]、[很|hěn|very]</div>
        </div>
        <div class="write-item" id="L3-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[你|nǐ|you] [送|sòng|give] [爸爸|bàba|Dad] [衬衫|chènshān|shirt] [或|huò|or] <span class="blank-input"><input type="text" data-ans="者"></span> [裤子，|kùzi,|trousers,] [他|tā|he] <span class="blank-input"><input type="text" data-ans="都"></span> [会|huì|will] [很|hěn|very] [喜欢。|xǐhuan.|like.]</div>
          <div class="zh" style="margin-top:6px;">[者|zhě|(as in 或者 "or")]　[都|dōu|both]</div>
          <div class="sent-en">Whether you give Dad a shirt or trousers, he'll like it.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[者|zhě|(as in 或者 “or”)]、[都|dōu|both]</div>
        </div>
        <div class="write-item" id="L3-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[我|wǒ|I] [今天|jīntiān|today] [下午|xiàwǔ|afternoon] [去|qù|go to] <span class="blank-input"><input type="text" data-ans="朋"></span> [友|yǒu|friend] [家，|jiā,|home,] [他|tā|he] [身体|shēntǐ|health] [不|bù|not] [舒|shū|comfortable] <span class="blank-input"><input type="text" data-ans="服"></span>。</div>
          <div class="zh" style="margin-top:6px;">[服|fú|(as in 舒服 "comfortable")]　[朋|péng|friend]</div>
          <div class="sent-en">I'm going to a friend's house this afternoon — he's not feeling well.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[朋|péng|(as in 朋友 “friend”)]、[服|fú|(as in 舒服 “comfortable”)]</div>
        </div>
        <div class="write-item" id="L3-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[这|zhè|this] [是|shì|is] [什么|shénme|what] <span class="blank-input"><input type="text" data-ans="饮"></span> [料，|liào,|drink,] [我|wǒ|I] [一|yī|even one] <span class="blank-input"><input type="text" data-ans="次"></span> [也|yě|also] [没|méi|not] [喝|hē|drunk] [过。|guò.|before.]</div>
          <div class="zh" style="margin-top:6px;">[饮|yǐn|drink]　[次|cì|time]</div>
          <div class="sent-en">What kind of drink is this? I've never had it even once.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[饮|yǐn|(as in 饮料 “drink”)]、[次|cì|time]</div>
        </div>

        <h4 id="L3-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L3-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[花|huā|flower] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[花茶|huāchá|flower tea]、[鲜花|xiānhuā|fresh flowers]</div></div>
        </div>
        <div class="write-item" id="L3-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[客|kè|guest] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[客人|kèrén|guest]、[做客|zuòkè|be a guest]</div></div>
        </div>
        <div class="write-item" id="L3-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[意|yì|meaning] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[意思|yìsi|meaning]、[愿意|yuànyì|willing]</div></div>
        </div>
        <div class="write-item" id="L3-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[帮|bāng|help] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[帮忙|bāngmáng|help]、[帮助|bāngzhù|help]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L3-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [周明|Zhōu Míng|Zhou Ming] [不|bù|not] [让|ràng|let] [太太|tàitai|wife] [买|mǎi|buy]
            <span class="blank-input review-blank"><span class="input-py">kùzi</span><input type="text" data-ans="裤子"></span>，[因为|yīnwèi|because] [他|tā|he] [太太|tàitai|wife] [已经|yǐjīng|already] [有|yǒu|has] [两|liǎng|two]
            <span class="blank-input review-blank"><span class="input-py">tiáo</span><input type="text" data-ans="条"></span> [这样|zhèyàng|this kind] [的|de|(possessive)] [裤子|kùzi|trousers] [了。|le.|(change)] [周明|Zhōu Míng|Zhou Ming] [想|xiǎng|wants to] [买|mǎi|buy] [一件|yí jiàn|a]
            <span class="blank-input review-blank"><span class="input-py">chènshān</span><input type="text" data-ans="衬衫"></span>，[这件|zhè jiàn|this] [衬衫|chènshān|shirt] [三百二十|sānbǎi èrshí|320]
            <span class="blank-input review-blank"><span class="input-py">yuán</span><input type="text" data-ans="元"></span>。
          </div>
          <div class="sent-en">Zhou Ming won't let his wife buy trousers because she already has two pairs like this. Zhou Ming wants to buy a shirt — this shirt is 320 yuan.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[裤子|kùzi|trousers]、[条|tiáo|(MW)]、[衬衫|chènshān|shirt]、[元|yuán|yuan]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [桌子|zhuōzi|table] [上|shàng|on]
            <span class="blank-input review-blank"><span class="input-py">fàng zhe</span><input type="text" data-ans="放着"></span>
            [很多|hěnduō|many]
            <span class="blank-input review-blank"><span class="input-py">yǐnliào</span><input type="text" data-ans="饮料"></span>，[小刚|Xiǎogāng|Xiaogang] [想|xiǎng|wants to] [喝|hē|drink] [茶|chá|tea]
            <span class="blank-input review-blank"><span class="input-py">huòzhě</span><input type="text" data-ans="或者"></span>
            [咖啡，|kāfēi,|coffee,] [小丽|Xiǎolì|Xiaoli] [最|zuì|most] [喜欢|xǐhuan|likes] [喝|hē|drink] [茶，|chá,|tea,] [花茶、|huāchá,|flower tea,]
            <span class="blank-input review-blank"><span class="input-py">lǜ</span><input type="text" data-ans="绿"></span>
            [茶、|chá,|tea,] [红茶，|hóngchá,|black tea,] [她|tā|she] [都|dōu|all] [喜欢，|xǐhuan,|likes,] [因为|yīnwèi|because] [工作|gōngzuò|work] [累|lèi|tired] [了|le|(change)] [的|de|(possessive)] [时候，|shíhou,|when,] [喝杯|hē bēi|drink a cup of] [茶，|chá,|tea,] [她|tā|she] [会|huì|will] [觉得|juéde|feel] [很|hěn|very]
            <span class="blank-input review-blank"><span class="input-py">shūfu</span><input type="text" data-ans="舒服"></span>。
          </div>
          <div class="sent-en">There are many drinks on the table. Xiaogang wants tea or coffee. Xiaoli likes tea best — because when work is tiring, a cup of tea makes her feel comfortable.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[放着|fàng zhe|placed]、[饮料|yǐnliào|drinks]、[或者|huòzhě|or]、[绿|lǜ|green]、[舒服|shūfu|comfortable]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[4] = {
  navLabel:'第4课',
  html: `
    <div class="lesson">
      <h2>第 4 课　她总是笑着跟客人说话
        <span class="title-py">Dì sì kè · Tā zǒngshì xiàozhe gēn kèrén shuōhuà</span>
        <small>Lesson 4 · She always smiles when talking to customers</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L4-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图04.png" alt="听力图04" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图04.png</b></span>
        </div>

        <div class="q" id="L4-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [去|qù|go] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [去|qù|go] [看|kàn|watch] [足球比赛。|zúqiú bǐsài.|football match.]</div>
          <div class="sent-en">W: What are you going to do?<br>M: I'm going to watch a football match.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[踢足球|tī zúqiú|playing football]）</div>
        </div>
        <div class="q" id="L4-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[男：|Nán:|M:] [那|nà|those] [两个|liǎng ge|two] [笑|xiào|smiling] [着|zhe|(progressive)] [看|kàn|look at] [照片|zhàopiàn|photo] [的|de|(possessive)] [女孩|nǚhái|girl] [是|shì|are] [谁？|shéi?|who?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|that] [是|shì|is] [我|wǒ|my] [妹妹|mèimei|younger sister] [和|hé|and] [她|tā|her] [的|de|(possessive)] [好朋友。|hǎo péngyou.|good friend.]</div>
          <div class="sent-en">M: Who are those two girls smiling and looking at the photo?<br>W: That's my younger sister and her good friend.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[两个|liǎng ge|two] [女孩|nǚhái|girls] [看|kàn|looking at] [手机|shǒujī|phone] [里|li|in] [的|de|(possessive)] [照片|zhàopiàn|photos]）</div>
        </div>
        <div class="q" id="L4-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [太|tài|too] [饿|è|hungry] [了，|le,|,] [我|wǒ|I] [想|xiǎng|want to] [吃|chī|eat] [块儿|kuàir|piece] [蛋糕。|dàngāo.|cake.]</div>
          <div class="zh stem">[男：|Nán:|M:] [别|bié|don't] [吃|chī|eat] [了，|le,|,] [我们|wǒmen|we] [去|qù|go] [吃饭|chīfàn|eat] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W: I'm so hungry — I want a piece of cake.<br>M: Don't eat that — let's go have a meal.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[小女孩|xiǎonǚhái|A little girl] [看着|kàn zhe|looking at] [蛋糕|dàngāo|the cake] [开心地|kāixīn de|happily] [笑|xiào|smiling]）</div>
        </div>
        <div class="q" id="L4-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [怎么|zěnme|why] [总是|zǒngshì|always] [站|zhàn|stand] [着？|zhe?|(progressive)] [快|kuài|quickly] [坐|zuò|sit] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [吃|chī|ate] [了|le|(past)] [两块儿|liǎng kuàir|two pieces] [蛋糕，|dàngāo,|cake,] [现在|xiànzài|now] [不|bù|not] [想|xiǎng|want to] [坐|zuò|sit] [着。|zhe.|(progressive)]</div>
          <div class="sent-en">M: Why are you always standing? Sit down.<br>W: I ate two pieces of cake and now I don't want to sit.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[一个人|yí ge rén|A person] [站|zhàn|standing] [着|zhe|(progressive)] [和|hé|with] [客人|kèrén|guests] [说话|shuōhuà|talking]）</div>
        </div>
        <div class="q" id="L4-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [我|wǒ|I] [记得|jìde|remember] [那家|nà jiā|that] [超市|chāoshì|supermarket] [的|de|(possessive)] [西瓜|xīguā|watermelon] [又|yòu|both] [甜|tián|sweet] [又|yòu|and] [新鲜，|xīnxiān,|fresh,] [我们|wǒmen|we] [去|qù|go] [看看|kàn kan|have a look] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [好，|hǎo,|OK,] [走|zǒu|let's go] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W: I remember that supermarket's watermelons are both sweet and fresh. Let's go take a look.<br>M: OK, let's go.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[买|mǎi|buying] [西瓜|xīguā|watermelon]）</div>
        </div>

        <h4 id="L4-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L4-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[这几天|zhè jǐ tiān|these few days] [你|nǐ|you] [总是|zǒngshì|always] [不|bù|not] [爱|ài|like] [吃|chī|eat] [东西，|dōngxi,|things,] [是不是|shì bú shì|is it that] [不|bù|not] [舒服|shūfu|well] [啊？|a?|(question)]</div>
          <div class="sent-en">You haven't had much appetite these past few days — are you not feeling well?</div>
          <div class="zh stem">★ [这几天|zhè jǐ tiān|these few days] [他|tā|he] [吃|chī|eat] [得|de|(complement)] [很少。|hěn shǎo.|very little.]</div>
          <div class="sent-en">★ He's been eating very little these past few days.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[不|bù|not] [爱|ài|fond of] [吃|chī|eating] [东西|dōngxi|things]」= [吃|chī|eats] [得|de|(complement)] [很|hěn|very] [少。|shǎo|little.]" data-expl-en="'Not fond of eating' = eats very little."></div>
        </div>
        <div class="q" id="L4-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[他|tā|he] [又|yòu|both] [聪明|cōngming|smart] [又|yòu|and] [努力，|nǔlì,|hardworking,] [老师|lǎoshī|teacher] [的|de|(possessive)] [问题|wèntí|questions] [他|tā|he] [都|dōu|all] [会|huì|can] [回答。|huídá.|answer.]</div>
          <div class="sent-en">He's both smart and hardworking — he can answer all the teacher's questions.</div>
          <div class="zh stem">★ [他|tā|he] [学习|xuéxí|study] [很|hěn|very] [好。|hǎo.|good.]</div>
          <div class="sent-en">★ He studies very well.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="[聪明|cōngming|smart] [又|yòu|and] [努力|nǔlì|hardworking]、[会|huì|can] [回答|huídá|answer] [所有|suǒyǒu|all] [问题|wèntí|questions] = [学习|xuéxí|studies] [很|hěn|very] [好。|hǎo|well.]" data-expl-en="Smart, hardworking, can answer all questions = studies well."></div>
        </div>
        <div class="q" id="L4-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[你|nǐ|you] [知道|zhīdào|know] [我|wǒ|my] [手机|shǒujī|phone] [里|li|in] [还|hái|still] [有|yǒu|has] [多少|duōshao|how much] [钱|qián|money] [吗？|ma?|?] [还|hái|still] [有|yǒu|has] [一元|yì yuán|one yuan] [一角|yì jiǎo|one jiao] [一分，|yì fēn,|one fen,] [三个一。|sān ge yī.|three ones.]</div>
          <div class="sent-en">Do you know how much money is left in my phone? One yuan, one jiao, one fen — three ones.</div>
          <div class="zh stem">★ [他|tā|he] [手机|shǒujī|phone] [里|li|in] [钱|qián|money] [不|bù|not] [多|duō|much] [了。|le.|(change)]</div>
          <div class="sent-en">★ There isn't much money left in his phone.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="1 [元|yuán|yuan] 1 [角|jiǎo|jiao] 1 [分|fēn|fen] = [钱|qián|money] [不|bù|not] [多|duō|much] [了。|le|(change)]" data-expl-en="1.11 yuan = not much money."></div>
        </div>
        <div class="q" id="L4-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[妈妈|māma|Mom] [很|hěn|very] [热情，|rèqíng,|warm,] [总是|zǒngshì|always] [帮助|bāngzhù|help] [人，|rén,|people,] [所以|suǒyǐ|so] [大家|dàjiā|everyone] [有|yǒu|have] [问题，|wèntí,|problems,] [都|dōu|all] [会|huì|will] [来|lái|come] [找|zhǎo|find] [她。|tā.|her.]</div>
          <div class="sent-en">Mom is warm and always helps others, so everyone comes to her when they have problems.</div>
          <div class="zh stem">★ [妈妈|māma|Mom] [现在|xiànzài|now] [有|yǒu|has] [问题。|wèntí.|a problem.]</div>
          <div class="sent-en">★ Mom has a problem now.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It’s] [别人|biérén|others] [有|yǒu|having] [问题|wèntí|problems] [找|zhǎo|coming to] [妈妈，|māma,|Mom,] [不是|bú shì|not] [妈妈|māma|Mom] [有|yǒu|having] [问题。|wèntí|problems.]" data-expl-en="Others go to Mom with problems — Mom doesn't have a problem."></div>
        </div>
        <div class="q" id="L4-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[同学们，|tóngxuémen,|Classmates,] [谁|shéi|who] [能|néng|can] [告诉|gàosu|tell] [我|wǒ|me] [这个|zhège|this] [句子|jùzi|sentence] [是|shì|is] [什么|shénme|what] [意思。|yìsi.|meaning.]</div>
          <div class="sent-en">Classmates, who can tell me what this sentence means?</div>
          <div class="zh stem">★ [他|tā|he] [在|zài|is] [请|qǐng|inviting] [人|rén|people] [回答|huídá|answer] [问题。|wèntí.|questions.]</div>
          <div class="sent-en">★ He is asking people to answer questions.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[谁|shéi|who] [能|néng|can] [告诉|gàosu|tell] [我|wǒ|me]」= [请|qǐng|asking] [人|rén|people] [回答。|huídá|to answer.]" data-expl-en="'Who can tell me' = asking people to answer."></div>
        </div>

        <h4 id="L4-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L4-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [怎么|zěnme|why] [总是|zǒngshì|always] [听|tīng|listen] [着|zhe|(progressive)] [音乐|yīnyuè|music] [写|xiě|write] [作业？|zuòyè?|homework?] [别|bié|don't] [听|tīng|listen] [了，|le,|,] [认真|rènzhēn|seriously] [写|xiě|write] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [没关系，|méi guānxi,|It's OK,] [你|nǐ|you] [看|kàn|look] [我|wǒ|I] [写|xiě|write] [得|de|(complement)] [都|dōu|all] [对。|duì.|correct.]</div>
          <div class="sent-en">W: Why are you always listening to music while doing homework? Stop listening and do it seriously.<br>M: It's fine — look, everything I write is correct.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [让|ràng|asks] [男的|nánde|the man] [做|zuò|to do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the woman ask the man to do?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[认真写作业|rènzhēn xiě zuòyè|do homework seriously]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[认真听音乐|rènzhēn tīng yīnyuè|listen carefully]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[听着音乐写作业|tīng zhe yīnyuè xiě zuòyè|listen while doing homework]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[别|bié|Don’t] [听|tīng|listen] [了，|le,|(change),] [认真|rènzhēn|carefully] [写|xiě|write] [吧|ba|(suggestion)]」。</div>
        </div>
        <div class="q" id="L4-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [打电话|dǎ diànhuà|call] [有|yǒu|have] [什么|shénme|what] [事|shì|matter] [吗？|ma?|?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [家里|jiā li|home] [有|yǒu|there are] [人|rén|people] [来|lái|come] [做客，|zuòkè,|be a guest,] [你|nǐ|you] [下了班|xià le bān|after work] [就|jiù|then] [回来|huílái|come back] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">M: Why did you call?<br>W: We have guests at home — come back right after work.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [让|ràng|asks] [男的|nánde|the man] [做|zuò|to do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the woman ask the man to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[打电话|dǎ diànhuà|call]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[去做客|qù zuòkè|be a guest]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[回家|huí jiā|come home]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[下了班|xià le bān|after work] [就|jiù|then] [回来|huílái|come back] [吧|ba|(suggestion)]」。</div>
        </div>
        <div class="q" id="L4-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [下课|xià kè|class is over] [了，|le,|,] [同学们|tóngxuémen|classmates] [都|dōu|all] [去|qù|go] [哪儿|nǎr|where] [啊？|a?|?]</div>
          <div class="zh stem">[男：|Nán:|M:] [今天|jīntiān|today] [下午|xiàwǔ|afternoon] [有|yǒu|there is] [篮球|lánqiú|basketball] [比赛，|bǐsài,|match,] [我们|wǒmen|we] [要|yào|are going to] [去|qù|go] [看|kàn|watch] [球赛。|qiúsài.|ball game.]</div>
          <div class="sent-en">W: Class is over — where is everyone going?<br>M: There's a basketball match this afternoon. We're going to watch the game.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [同学们|tóngxuémen|the students] [要|yào|are going to] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What are the classmates going to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[去比赛|qù bǐsài|go to compete]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[看比赛|kàn bǐsài|watch the match]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[去上课|qù shàngkè|go to class]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[我们|wǒmen|we] [要|yào|are going to] [去|qù|go] [看|kàn|watch] [球赛|qiúsài|the ball game]」。</div>
        </div>
        <div class="q" id="L4-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [真|zhēn|really] [的|de|(possessive)] [要|yào|are going to] [去|qù|go] [国外|guówài|abroad] [上学？|shàngxué?|study?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是，|shì,|Yes,] [我|wǒ|my] [爸妈|bà mā|parents] [也|yě|also] [想|xiǎng|want] [让|ràng|let] [我|wǒ|me] [去，|qù,|go,] [说|shuō|say] [年轻|niánqīng|young] [的|de|(possessive)] [时候|shíhou|time] [多|duō|more] [出去|chūqù|go out] [走走|zǒu zou|walk around] [很好。|hěn hǎo.|is good.]</div>
          <div class="sent-en">M: Are you really going abroad to study?<br>W: Yes, my parents want me to go too — they say it's good to travel around when you're young.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[跟爸妈一起出国|gēn bà mā yìqǐ chūguó|go abroad with parents]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[要去国外上学|yào qù guówài shàngxué|going abroad to study]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[总是出去走|zǒngshì chūqù zǒu|always going out]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[真的|zhēn de|really] [要|yào|is going to] [出去|chūqù|go abroad] [上学|shàngxué|to study]」→ [要|yào|going to] [去|qù|go] [国外|guówài|abroad] [上学。|shàngxué|to study.]</div>
        </div>
        <div class="q" id="L4-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[男：|Nán:|M:] [请|qǐng|please] [你|nǐ|you] [来|lái|come] [回答|huídá|answer] [这个|zhège|this] [问题，|wèntí,|question,] [好吗？|hǎo ma?|OK?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [对不起，|duìbuqǐ,|Sorry,] [你|nǐ|you] [说|shuō|speak] [得|de|(complement)] [太|tài|too] [快|kuài|fast] [了，|le,|,] [我|wǒ|I] [没|méi|not] [听懂|tīngdǒng|understand] [你|nǐ|your] [的|de|(possessive)] [问题。|wèntí.|question.]</div>
          <div class="sent-en">M: Please come and answer this question, OK?<br>W: Sorry, you spoke too fast — I didn't understand your question.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[说话很快|shuōhuà hěn kuài|speaks very fast]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[都听懂了|dōu tīngdǒng le|understood everything]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[不能回答|bùnéng huídá|cannot answer]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[没|méi|didn’t] [听懂|tīngdǒng|understand] [你|nǐ|your] [的|de|(possessive)] [问题|wèntí|question]」→ [不能|bùnéng|cannot] [回答。|huídá|answer.]</div>
        </div>

        <h4 id="L4-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L4-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|your] [儿子|érzi|son] [上学|shàngxué|go to school] [了|le|(past)] [吗？|ma?|?] [现在|xiànzài|now] [几年级？|jǐ niánjí?|which grade?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [他|tā|he] [现在|xiànzài|now] [二年级。|èr niánjí.|second grade.]</div>
          <div class="zh stem">[男：|Nán:|M:] [学习|xuéxí|study] [怎么样？|zěnmeyàng?|how?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [还可以，|hái kěyǐ,|Not bad,] [很|hěn|very] [努力，|nǔlì,|hardworking,] [每天|měitiān|every day] [都|dōu|all] [复习、|fùxí,|review,] [写|xiě|write] [作业。|zuòyè.|homework.]</div>
          <div class="sent-en">M: Is your son in school? What grade?<br>W: He's in second grade.<br>M: How's his study?<br>W: Not bad — he works hard and reviews and does homework every day.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [儿子，|érzi,|the son,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the son?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[学习很认真|xuéxí hěn rènzhēn|studies seriously]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[现在三年级|xiànzài sān niánjí|now third grade]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[总是不写作业|zǒngshì bù xiě zuòyè|never does homework]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[很|hěn|very] [努力，|nǔlì,|hardworking,] [每天|měitiān|every day] [都|dōu|all] [复习、|fùxí,|reviews,] [写作业|xiě zuòyè|does homework]」。</div>
        </div>
        <div class="q" id="L4-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[男：|Nán:|M:] [这|zhè|this] [是|shì|is] [你|nǐ|your] [小时候|xiǎo shíhou|childhood] [的|de|(possessive)] [照片|zhàopiàn|photo] [吗？|ma?|?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是|shì|yes] [啊，|a,|,] [漂亮|piàoliang|pretty] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [很|hěn|very] [漂亮，|piàoliang,|pretty,] [是|shì|is] [什么时候|shénme shíhou|when] [照|zhào|taken] [的？|de?|(nominalizer)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [小学|xiǎoxué|elementary school] [五年级，|wǔ niánjí,|fifth grade,] [你|nǐ|you] [看，|kàn,|look,] [我|wǒ|I] [那时|nà shí|at that time] [多|duō|so] [瘦|shòu|thin] [啊。|a.|(exclamation)]</div>
          <div class="sent-en">M: Is this your childhood photo?<br>W: Yes — pretty, right?<br>M: Very pretty. When was it taken?<br>W: Fifth grade of elementary school. Look, I was so thin back then.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [女的，|nǚde,|the woman,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about the woman?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[现在胖了|xiànzài pàng le|now fat]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[正在照相|zhèngzài zhàoxiàng|taking a photo]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[照片上是五年级|zhàopiàn shang shì wǔ niánjí|in the photo she was in 5th grade]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[小学|xiǎoxué|elementary school] [五年级|wǔ niánjí|fifth grade]」。</div>
        </div>
        <div class="q" id="L4-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[男：|Nán:|M:] [站|zhàn|standing] [着|zhe|(progressive)] [吃|chī|eat] [蛋糕|dàngāo|cake] [的|de|(possessive)] [那个|nàge|that] [人|rén|person] [是|shì|is] [谁？|shéi?|who?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [我们|wǒmen|our] [公司|gōngsī|company] [新来的|xīn lái de|newly arrived] [年轻人，|niánqīng rén,|young person,] [小周。|Xiǎo Zhōu.|Xiao Zhou.]</div>
          <div class="zh stem">[男：|Nán:|M:] [什么？|shénme?|What?] [她|tā|she] [姓|xìng|surname] [什么？|shénme?|what?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [姓|xìng|surname] [周。|Zhōu.|Zhou.] [小周|Xiǎo Zhōu|Xiao Zhou] [又|yòu|both] [漂亮|piàoliang|pretty] [又|yòu|and] [热情，|rèqíng,|warm,] [以后|yǐhòu|later] [有时间|yǒu shíjiān|have time] [我|wǒ|I] [介绍|jièshào|introduce] [你们|nǐmen|you] [认识|rènshi|know] [一下。|yíxià.|a bit.]</div>
          <div class="sent-en">M: Who's that person standing and eating cake?<br>W: Our company's new young colleague, Xiao Zhou.<br>M: What? What's her surname?<br>W: Zhou. Xiao Zhou is pretty and warm — when we have time I'll introduce you.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [关于|guānyú|about] [小周，|Xiǎo Zhōu,|Xiao Zhou,] [可以|kěyǐ|can we] [知道|zhīdào|know] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do we know about Xiao Zhou?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[坐着吃蛋糕|zuò zhe chī dàngāo|sitting and eating cake]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不年轻|bù niánqīng|not young]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[很漂亮，也很热情|hěn piàoliang, yě hěn rèqíng|pretty and warm]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[又|yòu|both] [漂亮|piàoliang|pretty] [又|yòu|and] [热情|rèqíng|warm]」。</div>
        </div>
        <div class="q" id="L4-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [站|zhàn|stand] [那么|nàme|so] [高，|gāo,|high,] [小心点儿。|xiǎoxīn diǎnr.|Be careful.]</div>
          <div class="zh stem">[男：|Nán:|M:] [好的，|hǎo de,|OK,] [你|nǐ|you] [看，|kàn,|look,] [照片|zhàopiàn|photo] [放|fàng|put] [在|zài|at] [这儿|zhèr|here] [怎么样？|zěnmeyàng?|how about?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [往|wǎng|toward] [右边|yòubiān|right side] [一点儿|yìdiǎnr|a bit] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [现在|xiànzài|now] [好了|hǎo le|done] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W: You're standing so high — be careful.<br>M: OK. Look, how about putting the photo here?<br>W: A bit to the right.<br>M: Done, right?</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [在|zài|are] [做|zuò|doing] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What are they doing?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[爬山|pá shān|climbing]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[问路|wèn lù|asking the way]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[放照片|fàng zhàopiàn|putting up a photo]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[照片|zhàopiàn|the photo] [放|fàng|put] [在|zài|(at)] [这儿|zhèr|here] [怎么样|zěnmeyàng|how about]」→ [放|fàng|putting] [照片。|zhàopiàn|the photo.]</div>
        </div>
        <div class="q" id="L4-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [周末|zhōumò|weekend] [你|nǐ|you] [别|bié|don't] [总是|zǒngshì|always] [坐|zuò|sit] [着|zhe|(progressive)] [看|kàn|watch] [电视，|diànshì,|TV,] [出去|chūqù|go out] [运动|yùndòng|exercise] [一下|yíxià|a bit] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [好|hǎo|good] [啊，|a,|,] [我们|wǒmen|we] [去|qù|go] [爬山|pá shān|mountain climbing] [怎么样？|zěnmeyàng?|how about?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [今天|jīntiān|today] [我|wǒ|my] [腿|tuǐ|leg] [疼，|téng,|hurts,] [就|jiù|just] [去|qù|go] [楼下|lóuxià|downstairs] [走走|zǒu zou|walk] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [好|hǎo|OK] [吧，|ba,|,] [我们|wǒmen|we] [走|zǒu|walk] [着|zhe|(progressive)] [去|qù|go to] [超市|chāoshì|supermarket] [买|mǎi|buy] [点儿|diǎnr|some] [菜。|cài.|food.]</div>
          <div class="sent-en">W: Don't just sit and watch TV on the weekend — go out and exercise.<br>M: OK, how about mountain climbing?<br>W: My leg hurts today — let's just walk downstairs.<br>M: OK, let's walk to the supermarket to buy some food.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [打算|dǎsuàn|plan] [做|zuò|to do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What do they plan to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[去买菜|qù mǎi cài|go buy food]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[看电视|kàn diànshì|watch TV]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[去爬山|qù pá shān|go mountain climbing]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[我们|wǒmen|we] [去|qù|go] [买菜|mǎi cài|buy food] [吧|ba|(suggestion)]」（[买|mǎi|buy] [西瓜|xīguā|watermelon]）</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L4-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L4-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[你|nǐ|you] [怎么|zěnme|why] [没|méi|not] [吃|chī|eat] [我|wǒ|I] [给|gěi|for] [你|nǐ|you] [买|mǎi|bought] [的|de|(possessive)] [蛋糕|dàngāo|cake] [呢？|ne?|?]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[你|nǐ|you] [怎么|zěnme|why] [到|dào|arrive] [家|jiā|home] [就|jiù|then] [坐|zuò|sit] [着|zhe|(progressive)] [看|kàn|watch] [电视，|diànshì,|TV,] [也|yě|also] [不|bù|not] [帮|bāng|help] [我|wǒ|me] [做|zuò|make] [饭？|fàn?|meal?]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[你|nǐ|you] [觉得|juéde|feel] [小丽|Xiǎolì|Xiaoli] [怎么样？|zěnmeyàng?|how about?]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[这么|zhème|so] [晚|wǎn|late] [了，|le,|,] [你|nǐ|you] [去|qù|go] [哪儿？|nǎr?|where?]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span><div class="sent-en">Of course. We'll take the bus first, then transfer to the subway.</div></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[我|wǒ|I] [昨天|zuótiān|yesterday] [没有|méiyǒu|didn't] [认真|rènzhēn|seriously] [复习。|fùxí.|review.]</span></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L4-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[老师|lǎoshī|Teacher] [的|de|(possessive)] [问题|wèntí|questions] [你|nǐ|you] [怎么|zěnme|why] [都|dōu|all] [不|bù|not] [回答？|huídá?|answer?] （<span class="blank">　</span>）</div>
          <div class="sent-en">Why don't you answer any of the teacher's questions?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L4-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[她|tā|she] [又|yòu|both] [聪明|cōngming|smart] [又|yòu|and] [热情，|rèqíng,|warm,] [大家|dàjiā|everyone] [都|dōu|all] [喜欢|xǐhuan|like] [她。|tā.|her.] （<span class="blank">　</span>）</div>
          <div class="sent-en">She's both smart and warm — everyone likes her.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L4-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[太|tài|too] [甜|tián|sweet] [了，|le,|,] [你|nǐ|you] [吃|chī|eat] [吧。|ba.|(suggestion)] （<span class="blank">　</span>）</div>
          <div class="sent-en">Too sweet — you eat it.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L4-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[我|wǒ|I] [又|yòu|both] [累|lèi|tired] [又|yòu|and] [饿|è|hungry，] [你|nǐ|you] [让|ràng|let] [我|wǒ|me] [休息|xiūxi|rest] [一下|yíxià|a bit] [吧。|ba.|(suggestion)] （<span class="blank">　</span>）</div>
          <div class="sent-en">I'm both tired and hungry — let me rest a bit.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L4-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[有点儿|yǒudiǎnr|a bit] [饿，|è,|hungry,] [我|wǒ|I] [去|qù|go to] [超市|chāoshì|supermarket] [买|mǎi|buy] [点儿|diǎnr|some] [吃的。|chī de.|food.] （<span class="blank">　</span>）</div>
          <div class="sent-en">A bit hungry — going to the supermarket to buy some food.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L4-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L4-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[努力|nǔlì|hardworking]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[回答|huídá|answer]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[照片|zhàopiàn|photo]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[比赛|bǐsài|match]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[客人|kèrén|guest]</span></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L4-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[今天|jīntiān|today] [晚上|wǎnshang|evening] [我|wǒ|I] [晚点儿|wǎn diǎnr|a bit later] [回来，|huílái,|come back,] [跟|gēn|with] [朋友|péngyou|friends] [去|qù|go] [看|kàn|watch] [足球|zúqiú|football] （<span class="blank">　</span>）</div>
          <div class="sent-en">Tonight I'll be back a bit late — going to watch a football match with friends.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L4-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[弟弟|dìdi|younger brother] [回|huí|go back] [了|le|(past)] [家|jiā|home] [就|jiù|then] [复习，|fùxí,|review,] [学习|xuéxí|study hard] [非常|fēicháng|very] （<span class="blank">　</span>）。</div>
          <div class="sent-en">My younger brother reviews as soon as he gets home — he studies very hard.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L4-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[家里|jiā li|home] [来|lái|come] （<span class="blank">　</span>） [了，|le,|,] [你|nǐ|you] [回来|huílái|come back] [的|de|(possessive)] [时候|shíhou|time] [去|qù|go to] [超市|chāoshì|supermarket] [买|mǎi|buy] [点儿|diǎnr|some] [水果。|shuǐguǒ.|fruit.]</div>
          <div class="sent-en">We have guests at home — buy some fruit from the supermarket on your way back.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L4-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [这|zhè|this] [是|shì|is] [我们|wǒmen|we] [爬山|pá shān|mountain climbing] [的|de|(possessive)] （<span class="blank">　</span>），[你|nǐ|you] [看看。|kàn kan.|have a look.]</div>
          <div class="zh">[B：|B:|B:] [这个|zhège|this] [站|zhàn|standing] [在|zài|at] [你|nǐ|your] [旁边|pángbiān|next to] [的|de|(possessive)] [人|rén|person] [是|shì|is] [谁？|shéi?|who?]</div>
          <div class="sent-en">A: This is our mountain climbing photo — take a look.<br>B: Who's the person standing next to you?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L4-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [你|nǐ|you] [觉得|juéde|feel] [今天|jīntiān|today] [的|de|(possessive)] [考试|kǎoshì|exam] [怎么样？|zěnmeyàng?|how?]</div>
          <div class="zh">[B：|B:|B:] [很多|hěnduō|many] [问题|wèntí|questions] [我|wǒ|I] [都|dōu|all] [不会|bú huì|cannot] （<span class="blank">　</span>）。</div>
          <div class="sent-en">A: How was today's exam?<br>B: I couldn't answer many questions.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L4-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L4-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[这张|zhè zhāng|This] [照片|zhàopiàn|photo] [是|shì|was] [我|wǒ|my] [姐姐|jiějie|elder sister] [11 岁|shíyī suì|11 years old] [那|nà|that] [年|nián|year] [照|zhào|taken] [的，|de,|,] [那时|nà shí|at that time] [她|tā|she] [正在|zhèngzài|was] [读|dú|studying] [五年级，|wǔ niánjí,|fifth grade,] [照片|zhàopiàn|photo] [上|shàng|on] [的|de|(possessive)] [姐姐|jiějie|elder sister] [又|yòu|both] [黑|hēi|dark] [又|yòu|and] [瘦。|shòu.|thin.] [看看|kàn kan|Look at] [现在|xiànzài|now] [的|de|(possessive)] [姐姐，|jiějie,|elder sister,] [又|yòu|both] [高|gāo|tall] [又|yòu|and] [漂亮，|piàoliang,|pretty,] [大家|dàjiā|everyone] [都|dōu|all] [喜欢|xǐhuan|like] [她。|tā.|her.]</div>
          <div class="sent-en">This photo was taken when my elder sister was 11, in fifth grade — she was dark and thin. Look at her now — tall and pretty, everyone likes her.</div>
          <div class="zh ask">★ [姐姐：|jiějie:|Sister:]</div>
          <div class="sent-en">★ Sister: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[现在又高又漂亮|xiànzài yòu gāo yòu piàoliang|now tall and pretty]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[很喜欢大家|hěn xǐhuan dàjiā|likes everyone]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[现在读五年级|xiànzài dú wǔ niánjí|now in fifth grade]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[现在|xiànzài|now] [的|de|(possessive)] [姐姐|jiějie|sister] [又|yòu|both] [高|gāo|tall] [又|yòu|and] [漂亮|piàoliang|pretty]」。</div>
        </div>
        <div class="q" id="L4-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[3 月|sān yuè|March] [15 号|shíwǔ hào|15th] [早上，|zǎoshang,|morning,] [她|tā|she] [正|zhèng|just] [要|yào|about to] [去|qù|go] [上班|shàngbān|to work] [的|de|(possessive)] [时候，|shíhou,|when,] [看见|kànjiàn|saw] [男朋友|nánpéngyou|boyfriend] [拿|ná|holding] [着|zhe|(progressive)] [鲜花|xiānhuā|flowers] [站|zhàn|stand] [在|zài|at] [门口，|ménkǒu,|door,] [她|tā|she] [一下|yíxià|suddenly] [想到|xiǎngdào|realized] [了，|le,|,] [今天|jīntiān|today] [是|shì|is] [她|tā|her] [的|de|(possessive)] [生日。|shēngrì.|birthday.]</div>
          <div class="sent-en">On the morning of March 15th, just as she was about to go to work, she saw her boyfriend standing at the door with flowers. She suddenly realized — today was her birthday.</div>
          <div class="zh ask">★ [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道：|zhīdào:|know:]</div>
          <div class="sent-en">★ From this passage, we can know: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[她那天不上班|tā nà tiān bú shàngbān|she didn't work that day]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[男朋友要送她花|nánpéngyou yào sòng tā huā|boyfriend will give her flowers]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[她记得男朋友的生日|tā jìde nánpéngyou de shēngrì|she remembered boyfriend's birthday]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[男朋友|nánpéngyou|Her boyfriend] [拿着|ná zhe|holding] [鲜花|xiānhuā|flowers] [站|zhàn|standing] [在|zài|at] [门口。|ménkǒu|the door.]</div>
        </div>
        <div class="q" id="L4-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[客人|kèrén|guests] [有|yǒu|have] [问题|wèntí|questions] [的|de|(possessive)] [时候，|shíhou,|when,] [她|tā|she] [总是|zǒngshì|always] [热情|rèqíng|warmly] [回答。|huídá.|answers.] [客人|kèrén|guests] [喜欢|xǐhuan|like] [这样|zhèyàng|such] [的|de|(possessive)] [服务员，|fúwùyuán,|attendants,] [经理|jīnglǐ|manager] [也|yě|also] [喜欢|xǐhuan|like] [这样|zhèyàng|such] [的|de|(possessive)] [服务员。|fúwùyuán.|attendants.]</div>
          <div class="sent-en">When guests have questions, she always answers warmly. Guests like this kind of attendant, and the manager likes them too.</div>
          <div class="zh ask">★ [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道：|zhīdào:|know:]</div>
          <div class="sent-en">★ From this passage, we can know: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[客人很热情|kèrén hěn rèqíng|guests are warm]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[大家都喜欢这个服务员|dàjiā dōu xǐhuan zhège fúwùyuán|everyone likes this attendant]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[经理喜欢回答问题|jīnglǐ xǐhuan huídá wèntí|the manager likes answering questions]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B</div>
        </div>
        <div class="q" id="L4-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[王老师|Wáng lǎoshī|Teacher Wang] [有|yǒu|has] [个|ge|(MW)] [20 岁|èrshí suì|20 years old] [的|de|(possessive)] [女儿，|nǚ'ér,|daughter,] [现在|xiànzài|now] [读|dú|studying] [大学|dàxué|university] [三年级，|sān niánjí,|third year,] [又|yòu|both] [聪明|cōngming|smart] [又|yòu|and] [漂亮，|piàoliang,|pretty,] [学习|xuéxí|study] [也|yě|also] [很|hěn|very] [努力。|nǔlì.|hardworking.]</div>
          <div class="sent-en">Teacher Wang has a 20-year-old daughter, now a third-year university student — both smart and pretty, and also hardworking.</div>
          <div class="zh ask">★ [王老师|Wáng lǎoshī|Teacher Wang] [的|de|(possessive)] [女儿：|nǚ’ér:|daughter:]</div>
          <div class="sent-en">★ Teacher Wang's daughter: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[很年轻|hěn niánqīng|very young]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[是老师|shì lǎoshī|is a teacher]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[喜欢笑|xǐhuan xiào|likes to smile]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　[只有|zhǐyǒu|only] 20 [岁，|suì,|years old,] [很|hěn|very] [年轻。|niánqīng|young.]</div>
        </div>
        <div class="q" id="L4-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[他|tā|he] [姓|xìng|surname] [高，|Gāo,|Gao,] [但是|dànshì|but] [长|zhǎng|grow] [得|de|(complement)] [不|bù|not] [高，|gāo,|tall,] [只有|zhǐyǒu|only] [一米六。|yì mǐ liù.|1.6 m.] [朋友们|péngyoumen|friends] [都|dōu|all] [说：|shuō:|say:] "[我们|wǒmen|we] [就|jiù|just] [叫|jiào|call] [你|nǐ|you] [小高|Xiǎo Gāo|Xiao Gao] [吧！|ba!|!]" [他|tā|he] [笑|xiào|smile] [着|zhe|(progressive)] [回答：|huídá:|answer:] "[可以，|kěyǐ,|OK,] [大家|dàjiā|everyone] [都|dōu|all] [这么|zhème|so] [叫|jiào|call] [我。|wǒ.|me.]"</div>
          <div class="sent-en">His surname is Gao but he's not tall — only 1.6 m. Friends say: "We'll call you Xiao Gao!" He smiles and answers: "OK, everyone calls me that."</div>
          <div class="zh ask">★ [他：|tā:|He:]</div>
          <div class="sent-en">★ He: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[又高又胖|yòu gāo yòu pàng|tall and fat]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[姓高，也长得高|xìng Gāo, yě zhǎng de gāo|surname Gao, also tall]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[喜欢小高这个名字|xǐhuan Xiǎo Gāo zhège míngzi|likes the name Xiao Gao]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[可以|kěyǐ|OK]」→ [他|tā|he] [接受|jiēshòu|accepts] [这个|zhège|this] [名字。|míngzi|name.]</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L4-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L4-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[女儿|nǚ'ér|daughter] [聪明|cōngming|smart] [他的|tā de|his] [非常|fēicháng|very]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[他|tā|His] [的|de|(possessive)] [女儿|nǚ’ér|daughter] [非常|fēicháng|is very] [聪明。|cōngming|smart.]<div class="sent-en">His daughter is very smart.</div></div>
        </div>
        <div class="write-item" id="L4-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[服务员|fúwùyuán|attendant] [热情|rèqíng|warm] [的|de|(possessive)] [都|dōu|all] [很|hěn|very] [这家|zhè jiā|this] [饭馆|fànguǎn|restaurant]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[这家|zhè jiā|The] [饭馆|fànguǎn|restaurant’s] [的|de|(possessive)] [服务员|fúwùyuán|attendants] [都|dōu|all] [很|hěn|very] [热情。|rèqíng|warm.]<div class="sent-en">The attendants in this restaurant are all very warm.</div></div>
        </div>
        <div class="write-item" id="L4-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[超市|chāoshì|supermarket] [哪家|nǎ jiā|which] [买|mǎi|buy] [蛋糕|dàngāo|cake] [你|nǐ|you] [去|qù|go to]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|Which] [去|qù|go to] [哪家|nǎ jiā|supermarket] [超市|chāoshì|(supermarket)] [买|mǎi|buy] [蛋糕？|dàngāo|cake?]<div class="sent-en">Which supermarket are you going to buy cake at?</div></div>
        </div>
        <div class="write-item" id="L4-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[站|zhàn|stand] [着|zhe|(progressive)] [总是|zǒngshì|always] [吃饭|chīfàn|eat] [他|tā|he]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[他|tā|He] [总是|zǒngshì|always] [站|zhàn|standing] [着|zhe|(progressive)] [吃饭。|chīfàn|eats.]<div class="sent-en">He always eats standing up.</div></div>
        </div>
        <div class="write-item" id="L4-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[回答|huídá|answer] [你|nǐ|you] [去|qù|go] [一下|yíxià|a bit] [客人|kèrén|guest] [的|de|(possessive)] [问题|wèntí|questions]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[你|nǐ|You] [去|qù|go] [回答|huídá|answer] [一下|yíxià|(a bit)] [客人|kèrén|the guest’s] [的|de|(possessive)] [问题。|wèntí|question.]<div class="sent-en">Go and answer the guest's question.</div></div>
        </div>

        <h4 id="L4-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L4-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[客人|kèrén|guest] [来|lái|came] [了，|le,|,] [你|nǐ|you] [去|qù|go] [和|hé|with] [大家|dàjiā|everyone] [聊|liáo|chat] [几|jǐ|a few] [句|jù|sentences] <span class="blank-input"><span class="input-py">huà</span><input type="text" data-ans="话"></span> [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">The guest is here — go chat with everyone.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[话|huà|speech]</span></div>
        </div>
        <div class="write-item" id="L4-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[我|wǒ|I] [现在|xiànzài|now] [读|dú|study] [大四，|dà sì,|senior year,] [明年|míngnián|next year] [就|jiù|will] [毕业|bìyè|graduate] <span class="blank-input"><span class="input-py">le</span><input type="text" data-ans="了"></span>。</div>
          <div class="sent-en">I'm now in my senior year, graduating next year.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[了|le|(change of state)]</span></div>
        </div>
        <div class="write-item" id="L4-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[那|nà|that] [个|ge|(MW)] [站|zhàn|stand] [着|zhe|(progressive)] [的|de|(possessive)] [男人|nánrén|man] [我|wǒ|I] [不|bù|not] [认|rèn|recognize] <span class="blank-input"><span class="input-py">shi</span><input type="text" data-ans="识"></span>。</div>
          <div class="sent-en">I don't recognize that man standing there.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[识|shí|recognize]（[认识|rènshi|know]）</span></div>
        </div>
        <div class="write-item" id="L4-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[这|zhè|this] [张|zhāng|(MW)] [照片|zhàopiàn|photo] [是|shì|is] [我|wǒ|my] [去|qù|went to] [上海|Shànghǎi|Shanghai] [玩儿|wánr|play] [的|de|(possessive)] [时候|shíhou|time] [照|zhào|taken] <span class="blank-input"><span class="input-py">de</span><input type="text" data-ans="的"></span>。</div>
          <div class="sent-en">This photo was taken when I went to Shanghai.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[的|de|(nominalizer)]</span></div>
        </div>
        <div class="write-item" id="L4-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[我|wǒ|I] [每|měi|every] [个|ge|(MW)] [星期|xīngqī|week] [都|dōu|all] [去|qù|go to] [体育馆|tǐyùguǎn|gym] [运动|yùndòng|exercise] [两|liǎng|two] <span class="blank-input"><span class="input-py">cì</span><input type="text" data-ans="次"></span>。</div>
          <div class="sent-en">I go to the gym to exercise twice every week.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[次|cì|time]</span></div>
        </div>

        <h4 id="L4-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L4-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[今天|jīntiān|today] [晚上|wǎnshang|evening] [电视|diànshì|TV] [里|li|on] [有|yǒu|there is] [北京|Běijīng|Beijing] [和|hé|and] [上海|Shànghǎi|Shanghai] [的|de|(possessive)] [足球|zúqiú|football] <span class="blank-input"><input type="text" data-ans="比"></span> [赛。|sài.|match.]</div>
          <div class="zh" style="margin-top:6px;">[北|běi|north]　[比|bǐ|compare]</div>
          <div class="sent-en">There's a Beijing vs Shanghai football match on TV tonight.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[比|bǐ|(as in 比赛 “match”)]</div>
        </div>
        <div class="write-item" id="L4-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[我|wǒ|I] [有|yǒu|have] [一个|yí ge|a] [中国|Zhōngguó|Chinese] [女|nǚ|female] <span class="blank-input"><input type="text" data-ans="朋"></span> [友，|yǒu,|friend,] [她|tā|she] [又|yòu|both] [聪|cōng|smart] <span class="blank-input"><input type="text" data-ans="明"></span> [又|yòu|and] [漂亮。|piàoliang.|pretty.]</div>
          <div class="zh" style="margin-top:6px;">[明|míng|bright]　[朋|péng|friend]</div>
          <div class="sent-en">I have a Chinese girlfriend — she's both smart and pretty.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[朋|péng|(as in 朋友 “friend”)]、[明|míng|(as in 聪明 “smart”)]</div>
        </div>
        <div class="write-item" id="L4-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[他|tā|he] [考试|kǎoshì|exam] [考|kǎo|took] [得|de|(complement)] [很|hěn|very] [好，|hǎo,|good,] [因|yīn|because] <span class="blank-input"><input type="text" data-ans="为"></span> [他|tā|he] [学习|xuéxí|study] [很|hěn|very] [努|nǔ|hard] <span class="blank-input"><input type="text" data-ans="力"></span>。</div>
          <div class="zh" style="margin-top:6px;">[力|lì|strength]　[为|wèi|for]</div>
          <div class="sent-en">He did very well on the exam, because he studies very hard.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[为|wèi|(as in 因为 “because”)]、[力|lì|(as in 努力 “effort”)]</div>
        </div>
        <div class="write-item" id="L4-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[你|nǐ|you] [饿|è|hungry] <span class="blank-input"><input type="text" data-ans="了"></span> [吗？|ma?|?] [我|wǒ|I] [去|qù|go to] [超市|chāoshì|supermarket] [给|gěi|for] [你|nǐ|you] [买|mǎi|buy] [点儿|diǎnr|some] [蛋糕|dàngāo|cake] [吧。|ba.|(suggestion)]</div>
          <div class="zh" style="margin-top:6px;">[饿|è|hungry]　[我|wǒ|I]</div>
          <div class="sent-en">Are you hungry? Let me buy you some cake from the supermarket.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[饿|è|hungry]</div>
        </div>
        <div class="write-item" id="L4-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[老师|lǎoshī|teacher] [问|wèn|asked] [了|le|(past)] <span class="blank-input"><input type="text" data-ans="四"></span> [个|ge|(MW)] [问题，|wèntí,|questions,] [他|tā|he] [一|yī|one] [个|ge|(MW)] [也|yě|also] [不|bù|not] [会|huì|can] <span class="blank-input"><input type="text" data-ans="回"></span> [答。|dá.|answer.]</div>
          <div class="zh" style="margin-top:6px;">[回|huí|return]　[四|sì|four]</div>
          <div class="sent-en">The teacher asked four questions — he couldn't answer a single one.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[四|sì|four]、[回|huí|(as in 回答 “answer”)]</div>
        </div>

        <h4 id="L4-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L4-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[客|kè|guest] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[客人|kèrén|guest]、[做客|zuòkè|be a guest]</div></div>
        </div>
        <div class="write-item" id="L4-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[级|jí|level] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[年级|niánjí|grade]、[高级|gāojí|advanced]</div></div>
        </div>
        <div class="write-item" id="L4-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[认|rèn|recognize] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[认识|rènshi|know]、[认真|rènzhēn|serious]</div></div>
        </div>
        <div class="write-item" id="L4-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[片|piàn|slice] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[照片|zhàopiàn|photo]、[一片|yí piàn|a slice]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L4-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小美|Xiǎoměi|Xiaomei] [在|zài|at] [饭馆|fànguǎn|restaurant] [工作，|gōngzuò,|work,] [她|tā|she] [又|yòu|both]
            <span class="blank-input review-blank"><span class="input-py">piàoliang</span><input type="text" data-ans="漂亮"></span>
            [又|yòu|and]
            <span class="blank-input review-blank"><span class="input-py">rèqíng</span><input type="text" data-ans="热情"></span>，[工作|gōngzuò|work] [又|yòu|also] [认真|rènzhēn|seriously] [又|yòu|and] [努力，|nǔlì,|hard,] [总是|zǒngshì|always] [笑|xiào|smiling] [着|zhe|(progressive)] [跟|gēn|with] [客人|kèrén|guests] [说|shuō|talk] [话。|huà.|words.]
          </div>
          <div class="sent-en">Xiaomei works in a restaurant — she's pretty and warm, works seriously and hard, and always smiles when talking to customers.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[漂亮|piàoliang|pretty]、[热情|rèqíng|warm]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [她|tā|she] [说|shuō|said] [话|huà|speak] [的|de|(possessive)]
            <span class="blank-input review-blank"><span class="input-py">shēngyīn</span><input type="text" data-ans="声音"></span>
            [很|hěn|very] [好听，|hǎotīng,|pleasant,] [也|yě|also] [很|hěn|very] [爱|ài|loves] [帮助|bāngzhù|help] [别人。|biérén.|others.] [大家|dàjiā|everyone] [都|dōu|all]
            <span class="blank-input review-blank"><span class="input-py">xǐhuan</span><input type="text" data-ans="喜欢"></span>
            [她。|tā.|her.] [她|tā|she] [对|duì|to] [朋友|péngyou|friends] [很|hěn|very] [好，|hǎo,|good,] [朋友|péngyou|friends] [们|men|(plural)] [也|yě|also] [都|dōu|all] [对|duì|to] [她|tā|her] [很|hěn|very]
            <span class="blank-input review-blank"><span class="input-py">rèqíng</span><input type="text" data-ans="热情"></span>。
          </div>
          <div class="sent-en">Her voice is pleasant and she loves helping others. Everyone likes her. She's good to friends, and friends are also warm to her.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[声音|shēngyīn|voice]、[喜欢|xǐhuan|like]、[热情|rèqíng|warm]</div>
          </div>
        </div>
      </div>
    </div>
  `
};
window.LESSONS[5] = {
  navLabel:'第5课',
  html: `
    <div class="lesson">
      <h2>第 5 课　我最近越来越胖了
        <span class="title-py">Dì wǔ kè · Wǒ zuìjìn yuè lái yuè pàng le</span>
        <small>Lesson 5 · I am getting fatter and fatter lately</small>
      </h2>

      <div class="part">
        <h3>[一、听力|Yī tīnglì|1. Listening]</h3>
        <h4 id="L5-l1">[第一部分|dì yī bùfen|Part 1]　[第 1–5 题：|dì 1–5 tí:|Q 1–5:] [听对话，|tīng duìhuà,|listen to the dialogue,] [选择|xuǎnzé|choose] [与|yǔ|the] [对话内容|duìhuà nèiróng|dialogue] [一致|yízhì|matching] [的|de|(possessive)] [图片|túpiàn|picture]</h4>
        <div class="pic-wrap">
          <img src="assets/听力图05.png" alt="听力图05" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pic-ph" style="display:none">请把图片放在 assets/ 目录下，命名为：<b>听力图05.png</b></span>
        </div>

        <div class="q" id="L5-q1">
          <div class="qhead"><span class="num">1</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [树|shù|trees] [和|hé|and] [草|cǎo|grass] [都|dōu|all] [绿|lǜ|green] [了，|le,|,] [天气|tiānqì|weather] [真好！|zhēn hǎo!|so nice!]</div>
          <div class="zh stem">[男：|Nán:|M:] [是|shì|yes] [啊，|a,|,] [我们|wǒmen|we] [要|yào|should] [多|duō|more] [出来|chūlái|come out] [走走，|zǒu zou,|walk around,] [在|zài|at] [草地上|cǎodì shang|on the grass] [坐坐。|zuò zuo.|sit.]</div>
          <div class="sent-en">W: The trees and grass are green — the weather is so nice!<br>M: Yeah, we should come out more and sit on the grass.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>F（[一家人|yì jiā rén|a family] [在|zài|on] [草地|cǎodì|the grass] [上|shàng|(location)] [散步|sànbù|taking a walk]）</div>
        </div>
        <div class="q" id="L5-q2">
          <div class="qhead"><span class="num">2</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [这条|zhè tiáo|this pair] [裤子|kùzi|trousers] [怎么样？|zěnmeyàng?|how about?]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [已经|yǐjīng|already] [有|yǒu|have] [那么|nàme|so] [多|duō|many] [裤子|kùzi|trousers] [了，|le,|,] [买|mǎi|buy] [条|tiáo|(MW)] [裙子|qúnzi|skirt] [吧。|ba.|(suggestion)]</div>
          <div class="sent-en">W: How about this pair of trousers?<br>M: You already have so many trousers — buy a skirt.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>E（[看|kàn|looking at] [裙子|qúnzi|a skirt]）</div>
        </div>
        <div class="q" id="L5-q3">
          <div class="qhead"><span class="num">3</span></div>
          <div class="zh stem">[女1：|Nǚ1:|W1:] [您|nín|you] [要|yào|want to] [做|zuò|do] [什么，|shénme,|what,] [我|wǒ|I] [来|lái|come] [帮|bāng|help] [您|nín|you] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[女2：|Nǚ2:|W2:] [不用|búyòng|no need] [帮，|bāng,|help,] [我|wǒ|I] [一个人|yí ge rén|one person] [可以，|kěyǐ,|can,] [谢谢|xièxie|thanks] [你。|nǐ.|you.]</div>
          <div class="sent-en">W1: What do you want to do? Let me help you.<br>W2: No need — I can do it alone. Thanks.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B（[一个人|yí ge rén|a person] [推|tuī|pushing] [轮椅|lúnyǐ|a wheelchair]）</div>
        </div>
        <div class="q" id="L5-q4">
          <div class="qhead"><span class="num">4</span></div>
          <div class="zh stem">[男：|Nán:|M:] [春天|chūntiān|spring] [到|dào|arrive] [了，|le,|,] [花|huā|flowers] [都|dōu|all] [开|kāi|bloom] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是|shì|yes] [啊，|a,|,] [你|nǐ|you] [看|kàn|look] [它们|tāmen|they] [开|kāi|bloom] [得|de|(complement)] [多|duō|how] [好！|hǎo!|nice!]</div>
          <div class="sent-en">M: Spring is here and the flowers are blooming.<br>W: Yeah — look how nicely they're blooming!</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C（[盛开|shèngkāi|blooming] [的|de|(possessive)] [花|huā|flowers]）</div>
        </div>
        <div class="q" id="L5-q5">
          <div class="qhead"><span class="num">5</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [医生，|yīshēng,|Doctor,] [我|wǒ|I] [怎么|zěnme|why] [了？|le?|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [有点儿|yǒudiǎnr|a bit] [感冒，|gǎnmào,|cold,] [我|wǒ|I] [给|gěi|to] [你|nǐ|you] [开|kāi|prescribe] [点儿|diǎnr|some] [药。|yào.|medicine.]</div>
          <div class="sent-en">W: Doctor, what's wrong with me?<br>M: You have a bit of a cold. I'll prescribe you some medicine.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A（[医生|yīshēng|a doctor] [给|gěi|for] [病人|bìngrén|a patient] [看病|kànbìng|examining]）</div>
        </div>

        <h4 id="L5-l2">[第二部分|dì èr bùfen|Part 2]　[第 6–10 题：|dì 6–10 tí:|Q 6–10:] [听句子，|tīng jùzi,|listen to the sentences,] [判断|pànduàn|judge] [对错|duìcuò|true or false]</h4>
        <div class="q" id="L5-q6">
          <div class="qhead"><span class="num">6</span></div>
          <div class="zh stem">[最近|zuìjìn|lately] [天气|tiānqì|weather] [越来越|yuè lái yuè|more and more] [冷，|lěng,|cold,] [还|hái|also] [总是|zǒngshì|always] [下雨。|xià yǔ.|raining.]</div>
          <div class="sent-en">The weather has been getting colder and colder lately, and it's always raining.</div>
          <div class="zh stem">★ [这几天|zhè jǐ tiān|these few days] [的|de|(possessive)] [天气|tiānqì|weather] [不|bù|not] [太|tài|too] [好。|hǎo.|good.]</div>
          <div class="sent-en">★ The weather these past few days hasn't been good.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[越来越|yuè lái yuè|more and more] [冷|lěng|cold]」「[总是|zǒngshì|always] [下雨|xià yǔ|raining]」= [天气|tiānqì|the weather] [不好。|bù hǎo|is bad.]" data-expl-en="'Colder and colder' and 'always raining' = bad weather."></div>
        </div>
        <div class="q" id="L5-q7">
          <div class="qhead"><span class="num">7</span></div>
          <div class="zh stem">[我|wǒ|I] [感冒|gǎnmào|cold] [好|hǎo|recovered] [了，|le,|,] [明天|míngtiān|tomorrow] [你|nǐ|you] [不用|búyòng|no need to] [来|lái|come] [照顾|zhàogù|take care of] [我|wǒ|me] [了。|le.|(change)]</div>
          <div class="sent-en">I've recovered from my cold — you don't need to come take care of me tomorrow.</div>
          <div class="zh stem">★ [现在|xiànzài|now] [他|tā|his] [的|de|(possessive)] [病|bìng|illness] [好|hǎo|recovered] [了。|le.|(change)]</div>
          <div class="sent-en">★ He has recovered now.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="√" data-expl-cn="「[感冒|gǎnmào|The cold] [好|hǎo|recovered] [了|le|(change)]」= [病|bìng|the illness] [好|hǎo|is gone] [了。|le|(change)]" data-expl-en="'Cold recovered' = illness is gone."></div>
        </div>
        <div class="q" id="L5-q8">
          <div class="qhead"><span class="num">8</span></div>
          <div class="zh stem">[小方|Xiǎofāng|Xiaofang] [最近|zuìjìn|lately] [越来越|yuè lái yuè|more and more] [胖，|pàng,|fat,] [去年|qùnián|last year] [买|mǎi|bought] [的|de|(possessive)] [裙子|qúnzi|skirt] [都|dōu|even] [不|bù|not] [能|néng|can] [穿|chuān|wear] [了。|le.|(change)]</div>
          <div class="sent-en">Xiaofang has been getting fatter and fatter — she can't even wear the skirt she bought last year.</div>
          <div class="zh stem">★ [小方|Xiǎofāng|Xiaofang] [现在|xiànzài|now] [比|bǐ|than] [去年|qùnián|last year] [瘦|shòu|thin]。</div>
          <div class="sent-en">★ Xiaofang is thinner now than last year.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[原文|yuánwén|The text] [说|shuō|says]「[越来越|yuè lái yuè|more and more] [胖|pàng|fat]」，[比|bǐ|than] [去年|qùnián|last year] [胖。|pàng|fatter.]" data-expl-en="The text says 'fatter and fatter' — she's fatter than last year."></div>
        </div>
        <div class="q" id="L5-q9">
          <div class="qhead"><span class="num">9</span></div>
          <div class="zh stem">[我|wǒ|my] [儿子|érzi|son] [最近|zuìjìn|lately] [瘦|shòu|thin] [了，|le,|,] [工作|gōngzuò|work] [太|tài|too] [忙，|máng,|busy,] [没|méi|no] [时间|shíjiān|time] [吃饭。|chīfàn.|eat.]</div>
          <div class="sent-en">My son has gotten thinner lately — he's too busy with work and has no time to eat.</div>
          <div class="zh stem">★ [儿子|érzi|son] [不|bù|not] [想|xiǎng|want] [吃饭，|chīfàn,|eat,] [所以|suǒyǐ|so] [瘦|shòu|thin] [了。|le.|(change)]</div>
          <div class="sent-en">★ The son doesn't want to eat, so he got thin.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[是|shì|It’s]「[没时间|méi shíjiān|no time] [吃饭|chīfàn|to eat]」，[不是|bú shì|not]「[不想|bù xiǎng|doesn’t want] [吃饭|chīfàn|to eat]」。" data-expl-en="He has no time to eat, not 'doesn't want to eat'."></div>
        </div>
        <div class="q" id="L5-q10">
          <div class="qhead"><span class="num">10</span></div>
          <div class="zh stem">[天气|tiānqì|weather] [越来越|yuè lái yuè|more and more] [热，|rè,|hot,] [大家|dàjiā|everyone] [穿|chuān|wear] [得|de|(complement)] [越来越|yuè lái yuè|less and less] [少。|shǎo.|little.]</div>
          <div class="sent-en">The weather is getting hotter and hotter, and everyone is wearing less and less.</div>
          <div class="zh stem">★ [冬天|dōngtiān|winter] [快|kuài|soon] [到|dào|arrive] [了。|le.|(change)]</div>
          <div class="sent-en">★ Winter is coming soon.</div>
          <div class="tf"><button class="tfbtn" data-ok="1">√</button><button class="tfbtn" data-ok="0">×</button></div>
          <div class="tf-feedback" data-ans="×" data-expl-cn="[天气|tiānqì|The weather] [越来越|yuè lái yuè|is getting] [热|rè|hotter] = [夏天|xiàtiān|summer] [快|kuài|is] [到|dào|coming] [了，|le,|(change),] [不是|bú shì|not] [冬天。|dōngtiān|winter.]" data-expl-en="Getting hotter = summer, not winter."></div>
        </div>

        <h4 id="L5-l3">[第三部分|dì sān bùfen|Part 3]　[第 11–15 题：|dì 11–15 tí:|Q 11–15:] [听短对话，|tīng duǎn duìhuà,|listen to the short dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L5-q11">
          <div class="qhead"><span class="num">11</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [医生，|yīshēng,|Doctor,] [我|wǒ|my] [的|de|(possessive)] [病|bìng|illness] [用|yòng|need] [吃药|chī yào|take medicine] [吗？|ma?|?]</div>
          <div class="zh stem">[男：|Nán:|M:] [不用|búyòng|no need] [吃药，|chī yào,|medicine,] [回家|huí jiā|go home] [多|duō|more] [喝|hē|drink] [些|xiē|some] [水，|shuǐ,|water,] [多|duō|more] [吃|chī|eat] [些|xiē|some] [水果。|shuǐguǒ.|fruit.]</div>
          <div class="sent-en">W: Doctor, do I need to take medicine?<br>M: No need — go home, drink more water and eat more fruit.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [让|ràng|asks] [女的|nǚde|the woman] [做|zuò|to do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What does the man ask the woman to do?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[吃药|chī yào|take medicine]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[多喝水|duō hē shuǐ|drink more water]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[少吃水果|shǎo chī shuǐguǒ|eat less fruit]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[多|duō|Drink] [喝些|hē xiē|more] [水|shuǐ|water]」。</div>
        </div>
        <div class="q" id="L5-q12">
          <div class="qhead"><span class="num">12</span></div>
          <div class="zh stem">[男：|Nán:|M:] [听说|tīngshuō|heard] [你|nǐ|you] [最近|zuìjìn|lately] [不|bù|not] [舒服，|shūfu,|well,] [好些|hǎoxiē|better] [了|le|(change)] [吗？|ma?|?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [前天|qiántiān|day before yesterday] [感冒，|gǎnmào,|cold,] [昨天|zuótiān|yesterday] [发烧，|fāshāo,|fever,] [头|tóu|head] [也|yě|also] [越来越|yuè lái yuè|more and more] [疼。|téng.|hurts.]</div>
          <div class="sent-en">M: I heard you haven't been well — feeling better?<br>W: I got a cold the day before yesterday, fever yesterday, and my head hurts more and more.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [现在|xiànzài|now] [怎么样|zěnmeyàng|how] [了？|le?|is she?]</div>
          <div class="sent-en">Q: How is the woman now?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[越来越好|yuè lái yuè hǎo|getting better]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[不发烧了|bù fāshāo le|no more fever]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[还在生病|hái zài shēngbìng|still sick]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　[头|tóu|The head] [越来越|yuè lái yuè|is getting] [疼，|téng,|more and more painful,] [说明|shuōmíng|showing] [还|hái|still] [在|zài|is] [生病。|shēngbìng|sick.]</div>
        </div>
        <div class="q" id="L5-q13">
          <div class="qhead"><span class="num">13</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [上次|shàng cì|last time] [我|wǒ|I] [为|wèi|for] [你|nǐ|you] [介绍|jièshào|introduced] [的|de|(possessive)] [那个|nàge|that] [女朋友|nǚpéngyou|girlfriend] [怎么样？|zěnmeyàng?|how about?]</div>
          <div class="zh stem">[男：|Nán:|M:] [人|rén|person] [很|hěn|very] [不错，|búcuò,|nice,] [又|yòu|both] [聪明|cōngming|smart] [又|yòu|and] [漂亮。|piàoliang.|pretty.] [谢谢|xièxie|thanks] [你！|nǐ!|you!]</div>
          <div class="sent-en">W: How about that girlfriend I introduced to you last time?<br>M: She's very nice — both smart and pretty. Thank you!</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [为什么|wèishénme|why] [说|shuō|says]「[谢谢|xièxie|thank you]」？</div>
          <div class="sent-en">Q: Why does the man say "thank you"?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[女的很聪明|nǚde hěn cōngming|the woman is smart]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[女的很不错|nǚde hěn búcuò|the woman is nice]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[女的给他介绍的女朋友很好|nǚde gěi tā jièshào de nǚpéngyou hěn hǎo|the introduced girlfriend is great]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[人|rén|The person] [很|hěn|very] [不错|búcuò|nice]」= [介绍|jièshào|introduced] [的|de|(possessive)] [女朋友|nǚpéngyou|girlfriend] [很|hěn|is very] [好。|hǎo|good.]</div>
        </div>
        <div class="q" id="L5-q14">
          <div class="qhead"><span class="num">14</span></div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [觉得|juéde|feel] [汉语|Hànyǔ|Chinese] [越来越|yuè lái yuè|more and more] [难|nán|difficult] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [是|shì|yes] [吗？|ma?|?] [我|wǒ|I] [怎么|zěnme|why] [觉得|juéde|feel] [越来越|yuè lái yuè|more and more] [容易，|róngyì,|easy,] [也|yě|also] [越来越|yuè lái yuè|more and more] [有意思|yǒu yìsi|interesting] [啊！|a!|!]</div>
          <div class="sent-en">M: I feel Chinese is getting harder and harder.<br>W: Really? I feel it's getting easier and easier, and more and more interesting!</div>
          <div class="zh ask">[问：|Wèn:|Q:] [女的|nǚde|the woman] [觉得|juéde|thinks] [汉语|Hànyǔ|Chinese] [怎么样？|zěnmeyàng?|how is it?]</div>
          <div class="sent-en">Q: What does the woman think of Chinese?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[越来越不容易|yuè lái yuè bù róngyì|harder and harder]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[越来越容易|yuè lái yuè róngyì|easier and easier]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[越来越没意思|yuè lái yuè méi yìsi|less interesting]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[越来越|yuè lái yuè|more and more] [容易，|róngyì,|easy,] [也|yě|and] [越来越|yuè lái yuè|more and more] [有意思|yǒu yìsi|interesting]」。</div>
        </div>
        <div class="q" id="L5-q15">
          <div class="qhead"><span class="num">15</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [不是|bú shì|aren't] [发烧|fāshāo|fever] [了|le|(change)] [吗？|ma?|?] [怎么|zěnme|why] [还|hái|still] [来|lái|come] [上班？|shàngbān?|work?]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [吃|chī|took] [了|le|(past)] [药，|yào,|medicine,] [好些|hǎoxiē|better] [了。|le.|(change)]</div>
          <div class="sent-en">W: Aren't you running a fever? Why are you still coming to work?<br>M: I took medicine — I'm better.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [现在|xiànzài|now] [怎么样|zěnmeyàng|how] [了？|le?|is he?]</div>
          <div class="sent-en">Q: How is the man now?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[好些了|hǎoxiē le|better]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[没来上班|méi lái shàngbān|didn't come to work]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[不用吃药了|búyòng chī yào le|no need for medicine]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[吃|chī|took] [了|le|(past)] [药，|yào,|medicine,] [好些|hǎo xiē|better] [了|le|(change)]」。</div>
        </div>

        <h4 id="L5-l4">[第四部分|dì sì bùfen|Part 4]　[第 16–20 题：|dì 16–20 tí:|Q 16–20:] [听长对话，|tīng cháng duìhuà,|listen to the long dialogue,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L5-q16">
          <div class="qhead"><span class="num">16</span></div>
          <div class="zh stem">[女1：|Nǚ1:|W1:] [我|wǒ|I] [喜欢|xǐhuan|like] [3 月，|sān yuè,|March,] [因为|yīnwèi|because] [天气|tiānqì|weather] [不|bù|not] [那么|nàme|so] [冷|lěng|cold] [了。|le.|(change)]</div>
          <div class="zh stem">[女2：|Nǚ2:|W2:] [我|wǒ|I] [喜欢|xǐhuan|like] [5 月，|wǔ yuè,|May,] [草|cǎo|grass] [和|hé|and] [树|shù|trees] [都|dōu|all] [绿|lǜ|green] [了，|le,|,] [花|huā|flowers] [也|yě|also] [开|kāi|bloom] [了。|le.|(change)]</div>
          <div class="zh stem">[女1：|Nǚ1:|W1:] [我|wǒ|I] [也|yě|also] [喜欢|xǐhuan|like] [6 月，|liù yuè,|June,] [大家|dàjiā|everyone] [不用|búyòng|no need to] [穿|chuān|wear] [冬天|dōngtiān|winter] [的|de|(possessive)] [衣服|yīfu|clothes] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [喜欢|xǐhuan|like] [1 月、|yī yuè,|January,] [2 月、|èr yuè,|February,] [7 月|qī yuè|July] [和|hé|and] [8 月，|bā yuè,|August,] [因为|yīnwèi|because] [不用|búyòng|no need to] [去|qù|go] [上课|shàngkè|to class] [了。|le.|(change)]</div>
          <div class="sent-en">W1: I like March because it's not so cold.<br>W2: I like May — grass and trees are green and flowers bloom.<br>W1: I also like June — no need for winter clothes.<br>M: I like January, February, July and August because there's no class!</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [为什么|wèishénme|why] [喜欢|xǐhuan|likes] 7 [月|yuè|July] [和|hé|and] 8 [月？|yuè?|August?]</div>
          <div class="sent-en">Q: Why does the man like July and August?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[天气不那么冷了|tiānqì bú nàme lěng le|weather isn't so cold]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[草和树都绿了|cǎo hé shù dōu lǜ le|grass and trees are green]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[没有课了|méiyǒu kè le|no class]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[不用|búyòng|no need to] [去|qù|go] [上课|shàngkè|to class] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L5-q17">
          <div class="qhead"><span class="num">17</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [现在|xiànzài|now] [天|tiān|day] [长|cháng|long] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [这|zhè|this] [是|shì|is] [什么|shénme|what] [意思？|yìsi?|meaning?]</div>
          <div class="zh stem">[女：|Nǚ:|W:] "[天|tiān|day] [长|cháng|long] [了|le|(change)]" [就是|jiùshì|means] [天|tiān|sky] [黑|hēi|dark] [得|de|(complement)] [越来越|yuè lái yuè|more and more] [晚。|wǎn.|late.]</div>
          <div class="zh stem">[男：|Nán:|M:] [我|wǒ|I] [懂|dǒng|understand] [了，|le,|,] [就是|jiùshì|that is] [白天|báitiān|daytime] [的|de|(possessive)] [时间|shíjiān|time] [越来越|yuè lái yuè|more and more] [长|cháng|long] [了。|le.|(change)]</div>
          <div class="sent-en">W: Now the days are getting longer.<br>M: What does that mean?<br>W: "Days are longer" means it gets dark later and later.<br>M: I get it — daytime is getting longer.</div>
          <div class="zh ask">[问：|Wèn:|Q:] 「[天|tiān|the day] [长|cháng|gets longer] [了|le|(change)]」[是|shì|(is)] [什么|shénme|what] [意思？|yìsi?|meaning?]</div>
          <div class="sent-en">Q: What does "天长了" mean?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[天黑了|tiān hēi le|it's dark]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[白天没有时间|báitiān méiyǒu shíjiān|no time in the day]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[天黑得晚了|tiān hēi de wǎn le|gets dark later]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[天|tiān|the sky] [黑|hēi|gets dark] [得|de|(complement)] [越来越|yuè lái yuè|later and later] [晚|wǎn|late]」。</div>
        </div>
        <div class="q" id="L5-q18">
          <div class="qhead"><span class="num">18</span></div>
          <div class="zh stem">[女：|Nǚ:|W:] [今天|jīntiān|today] [好些|hǎoxiē|better] [了|le|(change)] [吗？|ma?|?]</div>
          <div class="zh stem">[男：|Nán:|M:] [这几天|zhè jǐ tiān|these days] [一直|yìzhí|always] [吃药，|chī yào,|taking medicine,] [现在|xiànzài|now] [好些|hǎoxiē|better] [了，|le,|,] [腿|tuǐ|leg] [也|yě|also] [不|bù|not] [疼|téng|hurt] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [那|nà|then] [不用|búyòng|no need] [再|zài|again] [吃药|chī yào|take medicine] [了。|le.|(change)]</div>
          <div class="zh stem">[男：|Nán:|M:] [太好了，|tài hǎo le,|Great,] [谢谢|xièxie|thanks] [您！|nín!|you!]</div>
          <div class="sent-en">W: Are you better today?<br>M: I've been taking medicine these days — I'm better now, and my leg doesn't hurt.<br>W: Then no need for more medicine.<br>M: Great, thank you!</div>
          <div class="zh ask">[问：|Wèn:|Q:] [这|zhè|these] [两个|liǎng ge|two] [人|rén|people] [可能|kěnéng|might] [是|shì|have] [什么|shénme|what] [关系？|guānxi?|relationship?]</div>
          <div class="sent-en">Q: What is the likely relationship between them?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[男女朋友|nán nǚ péngyou|boyfriend & girlfriend]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[医生和病人|yīshēng hé bìngrén|doctor & patient]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[丈夫和妻子|zhàngfu hé qīzi|husband & wife]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[不用|búyòng|No need] [再|zài|to] [吃药|chī yào|take medicine] [了，|le,|(change),] [谢谢|xièxie|thank] [您|nín|you]」→ [医生|yīshēng|doctor] [和|hé|and] [病人。|bìngrén|patient.]</div>
        </div>
        <div class="q" id="L5-q19">
          <div class="qhead"><span class="num">19</span></div>
          <div class="zh stem">[男：|Nán:|M:] [你|nǐ|you] [看，|kàn,|Look,] [天|tiān|sky] [晴|qíng|clear] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [这么|zhème|so] [快|kuài|fast] [就|jiù|then] [不|bù|not] [下雨|xià yǔ|rain] [了？|le?|(change)] [我们|wǒmen|we] [出去|chūqù|go out] [吧。|ba.|(suggestion)]</div>
          <div class="zh stem">[男：|Nán:|M:] [好|hǎo|good] [啊，|a,|,] [带|dài|take] [孩子们|háizimen|children] [去|qù|go to] [外边|wàibiān|outside] [买|mǎi|buy] [些|xiē|some] [花|huā|flowers] [回来。|huílái.|back.]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [好，|hǎo,|OK,] [我|wǒ|I] [去|qù|go] [叫|jiào|call] [他们。|tāmen.|them.]</div>
          <div class="sent-en">M: Look, it's cleared up.<br>W: Stopped raining so soon? Let's go out.<br>M: OK, let's take the kids out to buy some flowers.<br>W: OK, I'll go call them.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [他们|tāmen|they] [要|yào|are going to] [做|zuò|do] [什么？|shénme?|what?]</div>
          <div class="sent-en">Q: What are they going to do?</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[买花|mǎi huā|buy flowers]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[看花|kàn huā|see flowers]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[看雨|kàn yǔ|watch rain]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[买些|mǎi xiē|buy some] [花|huā|flowers] [回来|huílái|and bring them back]」。</div>
        </div>
        <div class="q" id="L5-q20">
          <div class="qhead"><span class="num">20</span></div>
          <div class="zh stem">[男：|Nán:|M:] [我要|wǒ yào|I need to] [买|mǎi|buy] [裤子|kùzi|trousers] [了，|le,|,] [这条|zhè tiáo|this pair] [裤子|kùzi|trousers] [现在|xiànzài|now] [已经|yǐjīng|already] [不|bù|not] [能|néng|can] [穿|chuān|wear] [了。|le.|(change)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [瘦|shòu|thin] [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="zh stem">[男：|Nán:|M:] [什么|shénme|what] [啊，|a,|,] [我|wǒ|I] [要|yào|need to] [买|mǎi|buy] [条|tiáo|(MW)] [大|dà|big] [一号|yí hào|one size bigger] [的。|de.|(nominalizer)]</div>
          <div class="zh stem">[女：|Nǚ:|W:] [你|nǐ|you] [现在|xiànzài|now] [吃|chī|eat] [得|de|(complement)] [越来越|yuè lái yuè|more and more] [多，|duō,|much,] [也|yě|also] [不|bù|not] [运动，|yùndòng,|exercise,] [能|néng|can] [不|bù|not] [胖|pàng|fat] [吗？|ma?|?]</div>
          <div class="sent-en">M: I need to buy trousers — this pair can't fit anymore.<br>W: Have you gotten thin?<br>M: No way — I need a size bigger.<br>W: You eat more and more and don't exercise — of course you'd get fat.</div>
          <div class="zh ask">[问：|Wèn:|Q:] [男的|nánde|the man] [有|yǒu|has] [什么|shénme|what] [问题？|wèntí?|problem?]</div>
          <div class="sent-en">Q: What's the man's problem?</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[瘦了|shòu le|got thin]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[胖了|pàng le|got fat]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[吃得少了|chī de shǎo le|eating less]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[能|néng|How] [不|bù|could] [怕|pà|not worry] [吗|ma|(rhetorical)]」→ [胖|pàng|gained weight] [了。|le|(change)]</div>
        </div>
      </div>

      <div class="part">
        <h3>[二、阅读|Èr yuèdú|2. Reading]</h3>
        <h4 id="L5-r1">[第一部分|dì yī bùfen|Part 1]　[第 21–25 题：|dì 21–25 tí:|Q 21–25:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [问答|wèndá|Q&A]</h4>
        <div class="opt-table" id="L5-opt-r1">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[要|yào|going to] [来|lái|come] [客人|kèrén|guests] [了，|le,|,] [我|wǒ|I] [出去|chūqù|go out] [买|mǎi|buy] [点儿|diǎnr|some] [水果|shuǐguǒ|fruit] [吧。|ba.|(suggestion)]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[当然|dāngrán|of course] [是|shì|is] [春天。|chūntiān.|spring.]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[你|nǐ|you] [今天|jīntiān|today] [觉得|juéde|feel] [怎么样？|zěnmeyàng?|how?] [还|hái|still] [发烧|fāshāo|fever] [吗？|ma?|(question)]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[我们|wǒmen|we] [快|kuài|quickly] [回家|huí jiā|go home] [去|qù|go] [吧。|ba.|(suggestion)]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[当然。|dāngrán.|Of course.] [我们|wǒmen|we] [先|xiān|first] [坐|zuò|take] [公共汽车，|gōnggòng qìchē,|bus,] [然后|ránhòu|then] [换|huàn|transfer] [地铁。|dìtiě.|subway.]</span><div class="sent-en">Of course. We'll take the bus first, then transfer to the subway.</div></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[谢谢你|xièxie nǐ|thank you] [照顾|zhàogù|for taking care of] [我，|wǒ,|me,] [我|wǒ|my] [的|de|(possessive)] [腿|tuǐ|leg] [越来越|yuè lái yuè|more and more] [好|hǎo|better] [了。|le.|(change)]</span></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L5-opt-r1">
          <div class="qhead"><span class="num">21</span></div>
          <div class="zh">[天|tiān|sky] [越来越|yuè lái yuè|more and more] [黑|hēi|dark，] [快要|kuàiyào|about to] [下雨|xià yǔ|rain] [了。|le.|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">It's getting darker and darker — it's about to rain.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L5-opt-r1">
          <div class="qhead"><span class="num">22</span></div>
          <div class="zh">[你|nǐ|you] [最|zuì|most] [喜欢|xǐhuan|like] [什么|shénme|what] [季节？|jìjié?|season?] （<span class="blank">　</span>）</div>
          <div class="sent-en">What's your favorite season?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L5-opt-r1">
          <div class="qhead"><span class="num">23</span></div>
          <div class="zh">[我|wǒ|I] [吃|chī|took] [了|le|(past)] [药，|yào,|medicine,] [也|yě|also] [喝|hē|drank] [了|le|(past)] [很多|hěnduō|much] [水，|shuǐ,|water,] [现在|xiànzài|now] [不|bù|not] [发烧|fāshāo|fever] [了。|le.|(change)] （<span class="blank">　</span>）</div>
          <div class="sent-en">I took medicine and drank lots of water — no more fever now.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L5-opt-r1">
          <div class="qhead"><span class="num">24</span></div>
          <div class="zh">[不用|búyòng|no need to] [去，|qù,|go,] [家里|jiā li|home] [还|hái|still] [有|yǒu|have] [一些|yìxiē|some] [苹果|píngguǒ|apple] [和|hé|and] [西瓜。|xīguā.|watermelon.] （<span class="blank">　</span>）</div>
          <div class="sent-en">No need to go — there are still apples and watermelon at home.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L5-opt-r1">
          <div class="qhead"><span class="num">25</span></div>
          <div class="zh">[别|bié|don't] [这么|zhème|so] [客气。|kèqi.|be polite.] （<span class="blank">　</span>）</div>
          <div class="sent-en">Don't be so polite.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L5-r2">[第二部分|dì èr bùfen|Part 2]　[第 26–30 题：|dì 26–30 tí:|Q 26–30:] [选择|xuǎnzé|choose] [合适|héshì|the right] [的|de|(possessive)] [词语|cíyǔ|word] [填空|tiánkòng|to fill in]</h4>
        <div class="opt-table" id="L5-opt-r2">
          <div class="opt-row" data-l="A"><b>A</b><span class="zh">[照顾|zhàogù|take care of]</span></div>
          <div class="opt-row" data-l="B"><b>B</b><span class="zh">[当然|dāngrán|of course]</span></div>
          <div class="opt-row" data-l="C"><b>C</b><span class="zh">[最近|zuìjìn|lately]</span></div>
          <div class="opt-row" data-l="D"><b>D</b><span class="zh">[裙子|qúnzi|skirt]</span></div>
          <div class="opt-row" data-l="E"><b>E</b><span class="zh">[声音|shēngyīn|voice]</span></div>
          <div class="opt-row" data-l="F"><b>F</b><span class="zh">[为|wèi|for]</span></div>
        </div>
        <div class="q match-q" data-answer="F" data-table-id="L5-opt-r2">
          <div class="qhead"><span class="num">26</span></div>
          <div class="zh">[这|zhè|this] [是|shì|is] [我|wǒ|I] （<span class="blank">　</span>） [你|nǐ|you] [买|mǎi|bought] [的|de|(possessive)] [蛋糕，|dàngāo,|cake,] [你|nǐ|you] [看看，|kàn kan,|look,] [喜欢|xǐhuan|like] [吗？|ma?|(question)]</div>
          <div class="sent-en">This is the cake I bought for you — take a look, do you like it?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="A" data-table-id="L5-opt-r2">
          <div class="qhead"><span class="num">27</span></div>
          <div class="zh">[下个星期|xià ge xīngqī|next week] [我|wǒ|I] [不|bù|not] [在|zài|at] [家，|jiā,|home,] [你|nǐ|you] [能|néng|can] [帮|bāng|help] [我|wǒ|me] （<span class="blank">　</span>） [一下|yíxià|a bit] [我|wǒ|my] [的|de|(possessive)] [小狗|xiǎogǒu|puppy] [吗？|ma?|(question)]</div>
          <div class="sent-en">I won't be home next week — can you help me take care of my puppy?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="D" data-table-id="L5-opt-r2">
          <div class="qhead"><span class="num">28</span></div>
          <div class="zh">[这条|zhè tiáo|this] （<span class="blank">　</span>） [是|shì|was] [去年|qùnián|last year] [我|wǒ|my] [生日|shēngrì|birthday] [的|de|(possessive)] [时候|shíhou|time] [妈妈|māma|Mom] [给|gěi|for] [我|wǒ|me] [买|mǎi|bought] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">This skirt was bought for me by Mom on my birthday last year.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="C" data-table-id="L5-opt-r2">
          <div class="qhead"><span class="num">29</span></div>
          <div class="zh">[A：|A:|A:] [你|nǐ|you] [怎么|zěnme|why] [瘦|shòu|thin] [了？|le?|(change)] [是不是|shì bú shì|is it that] （<span class="blank">　</span>） [工作|gōngzuò|work] [太|tài|too] [忙|máng|busy] [了？|le?|(change)]</div>
          <div class="zh">[B：|B:|B:] [我|wǒ|I] [一点儿|yìdiǎnr|not at all] [也|yě|also] [没|méi|not] [瘦，|shòu,|thin,] [很多|hěnduō|many] [人|rén|people] [都|dōu|all] [说|shuō|say] [我|wǒ|I] [胖|pàng|fat] [了。|le.|(change)]</div>
          <div class="sent-en">A: Why have you gotten thin? Is it because work is too busy?<br>B: I haven't gotten thin at all — many people say I've gotten fat.</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>
        <div class="q match-q" data-answer="B" data-table-id="L5-opt-r2">
          <div class="qhead"><span class="num">30</span></div>
          <div class="zh">[A：|A:|A:] [今天|jīntiān|today] [晚上|wǎnshang|evening] [你|nǐ|you] [想|xiǎng|want] [不|bù|not] [想|xiǎng|want] [跟|gēn|with] [我|wǒ|me] [一起|yìqǐ|together] [去|qù|go] [看|kàn|watch] [电影？|diànyǐng?|movie?]</div>
          <div class="zh">[B：|B:|B:] （<span class="blank">　</span>） [想|xiǎng|want] [去，|qù,|go,] [我们|wǒmen|we] [什么时候|shénme shíhou|when] [走？|zǒu?|leave?]</div>
          <div class="sent-en">A: Do you want to see a movie with me tonight?<br>B: Of course I want to — when shall we leave?</div>
          <div class="letter-picker"><button>A</button><button>B</button><button>C</button><button>D</button><button>E</button><button>F</button></div>
        </div>

        <h4 id="L5-r3">[第三部分|dì sān bùfen|Part 3]　[第 31–35 题：|dì 31–35 tí:|Q 31–35:] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [答案|dá’àn|answer]</h4>
        <div class="q" id="L5-q31">
          <div class="qhead"><span class="num">31</span></div>
          <div class="zh stem">[北京|Běijīng|Beijing] [一年|yì nián|a year] [有|yǒu|has] [四个|sì ge|four] [季节，|jìjié,|seasons,] [我|wǒ|I] [最|zuì|most] [喜欢|xǐhuan|like] [春天。|chūntiān.|spring.] [北京|Běijīng|Beijing] [的|de|(possessive)] [春天|chūntiān|spring] [是|shì|is] [绿色|lǜsè|green] [的，|de,|,] [因为|yīnwèi|because] [树|shù|trees] [绿|lǜ|green] [了，|le,|,] [草地|cǎodì|grass] [也|yě|also] [都|dōu|all] [绿|lǜ|green] [了，|le,|,] [天气|tiānqì|weather] [不|bù|not] [那么|nàme|so] [冷|lěng|cold] [了，|le,|,] [花|huā|flowers] [也|yě|also] [开|kāi|bloom] [了。|le.|(change)] [这么|zhème|such] [漂亮|piàoliang|beautiful] [的|de|(possessive)] [季节，|jìjié,|season,] [你|nǐ|you] [不|bù|not] [喜欢|xǐhuan|like] [吗？|ma?|(question)]</div>
          <div class="sent-en">Beijing has four seasons a year. I like spring best. Beijing's spring is green because the trees are green and the grass is green, the weather isn't so cold, and the flowers are blooming. Such a beautiful season — don't you like it?</div>
          <div class="zh ask">★ [北京|Běijīng|Beijing’s] [的|de|(possessive)] [春天：|chūntiān:|spring:]</div>
          <div class="sent-en">★ Beijing's spring: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[天气非常冷|tiānqì fēicháng lěng|weather is very cold]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[花还没开|huā hái méi kāi|flowers haven't bloomed]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[树和草都绿了|shù hé cǎo dōu lǜ le|trees and grass are green]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[树|shù|The trees] [绿|lǜ|turned green] [了，|le,|(change),] [草地|cǎodì|the grass] [也|yě|also] [都|dōu|all] [绿|lǜ|turned green] [了|le|(change)]」。</div>
        </div>
        <div class="q" id="L5-q32">
          <div class="qhead"><span class="num">32</span></div>
          <div class="zh stem">[现在|xiànzài|now] [的|de|(possessive)] "[小胖子|xiǎopàngzi|little fatty]" [越来越|yuè lái yuè|more and more] [多|duō|many] [了，|le,|,] [因为|yīnwèi|because] [现在|xiànzài|now] [的|de|(possessive)] [孩子|háizi|children] [吃|chī|eat] [得|de|(complement)] [越来越|yuè lái yuè|more and more] [多，|duō,|much,] [越来越|yuè lái yuè|more and more] [不|bù|not] [爱|ài|like] [运动。|yùndòng.|exercise.] [吃饭|chīfàn|eat] [的|de|(possessive)] [时候|shíhou|time] [不|bù|not] [爱|ài|like] [吃|chī|eat] [菜，|cài,|vegetables,] [只|zhǐ|only] [爱|ài|like] [吃|chī|eat] [肉，|ròu,|meat,] [还|hái|also] [喜欢|xǐhuan|like] [吃|chī|eat] [甜|tián|sweet] [的，|de,|,] [这样|zhèyàng|this way] [当然|dāngrán|of course] [会|huì|will] [越来越|yuè lái yuè|more and more] [胖|pàng|fat] [了。|le.|(change)]</div>
          <div class="sent-en">Now there are more and more "little fatties" because children eat more and more and don't like to exercise. They don't eat vegetables, only meat, and love sweets — of course they get fatter and fatter.</div>
          <div class="zh ask">★ 「[小胖子|xiǎopàngzi|little fatties]」[们：|men:|(plural):]</div>
          <div class="sent-en">★ The “little fatties”: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[爱吃菜|ài chī cài|love vegetables]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[爱吃肉|ài chī ròu|love meat]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[爱运动|ài yùndòng|love exercise]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　「[只|zhǐ|only] [爱|ài|love] [吃肉|chī ròu|eating meat]」。</div>
        </div>
        <div class="q" id="L5-q33">
          <div class="qhead"><span class="num">33</span></div>
          <div class="zh stem">[中国人|Zhōngguó rén|Chinese people] [一年|yì nián|a year] [四季|sì jì|four seasons] [都|dōu|all] [喜欢|xǐhuan|like] [喝|hē|drink] [茶。|chá.|tea.] [中国|Zhōngguó|China] [有|yǒu|has] [很多种|hěnduō zhǒng|many kinds of] [茶，|chá,|tea,] [有|yǒu|have] [红茶，|hóngchá,|black tea,] [也|yě|also] [有|yǒu|have] [绿茶，|lǜchá,|green tea,] [还|hái|also] [有|yǒu|have] [花茶。|huāchá.|flower tea.] [茶|chá|tea] [是|shì|is] [中国人|Zhōngguó rén|Chinese people] [非常|fēicháng|very] [爱|ài|love] [喝|hē|drink] [的|de|(possessive)] [饮料。|yǐnliào.|drink.]</div>
          <div class="sent-en">Chinese people like drinking tea all year round. There are many kinds of tea — black tea, green tea, and flower tea. Tea is a drink Chinese people love very much.</div>
          <div class="zh ask">★ [中国人|Zhōngguó rén|Chinese people] [觉得|juéde|think] [茶：|chá:|tea:]</div>
          <div class="sent-en">★ Chinese people think tea: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[是红色的|shì hóngsè de|is red]</span></div>
            <div class="opt" data-ok="1"><i>B</i><span class="zh">[很好喝|hěn hǎohē|is very tasty]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[很贵|hěn guì|is very expensive]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>B　[中国人|Zhōngguó rén|Chinese people] [非常|fēicháng|very much] [爱|ài|love] [喝|hē|drinking] [茶。|chá|tea.]</div>
        </div>
        <div class="q" id="L5-q34">
          <div class="qhead"><span class="num">34</span></div>
          <div class="zh stem">[很多|hěnduō|many] [女孩儿|nǚháir|girls] [晚上|wǎnshang|evening] [不|bù|not] [吃饭，|chīfàn,|eat,] [只|zhǐ|only] [吃|chī|eat] [水果，|shuǐguǒ,|fruit,] [白天|báitiān|daytime] [吃|chī|eat] [得|de|(complement)] [也|yě|also] [很|hěn|very] [少。|shǎo.|little.] [她们|tāmen|they] [说|shuō|say] [这样|zhèyàng|this way] [可以|kěyǐ|can] [瘦|shòu|thin] [一点儿，|yìdiǎnr,|a bit,] [可以|kěyǐ|can] [穿|chuān|wear] [漂亮|piàoliang|pretty] [的|de|(possessive)] [裙子。|qúnzi.|skirt.] [其实，|qíshí,|Actually,] [不|bù|not] [吃饭|chīfàn|eat] [对|duì|to] [身体|shēntǐ|health] [不|bù|not] [好。|hǎo.|good.] [晚上|wǎnshang|evening] [可以|kěyǐ|can] [少吃|shǎo chī|eat less] [一点儿，|yìdiǎnr,|a bit,] [但|dàn|but] [不能|bùnéng|cannot] [不|bù|not] [吃，|chī,|eat,] [也|yě|also] [不能|bùnéng|cannot] [吃|chī|eat] [得|de|(complement)] [太|tài|too] [晚。|wǎn.|late.]</div>
          <div class="sent-en">Many girls don't eat dinner, only eat fruit, and eat very little during the day. They say this way they can get thin and wear pretty skirts. Actually, not eating is bad for health. You can eat less in the evening, but you can't skip it, nor eat too late.</div>
          <div class="zh ask">★ [根据|gēnjù|From] [这|zhè|this] [段话，|duàn huà,|passage,] [可以|kěyǐ|we can] [知道：|zhīdào:|know:]</div>
          <div class="sent-en">★ From this passage, we can know: ___</div>
          <div class="opts">
            <div class="opt" data-ok="1"><i>A</i><span class="zh">[不吃饭对身体不好|bù chīfàn duì shēntǐ bù hǎo|not eating is bad for health]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[晚上可以不吃饭|wǎnshang kěyǐ bù chīfàn|can skip dinner]</span></div>
            <div class="opt" data-ok="0"><i>C</i><span class="zh">[白天可以不吃饭|báitiān kěyǐ bù chīfàn|can skip daytime meals]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>A　「[不|bù|Not] [吃饭|chīfàn|eating] [对|duì|is bad for] [身体|shēntǐ|health] [不好|bù hǎo|bad]」。</div>
        </div>
        <div class="q" id="L5-q35">
          <div class="qhead"><span class="num">35</span></div>
          <div class="zh stem">[你|nǐ|you] [知道|zhīdào|know] [生病|shēngbìng|sick] [的|de|(possessive)] [时候|shíhou|time] [怎么|zěnme|how] [吃|chī|take] [药|yào|medicine] [吗？|ma?|(question)] [有人|yǒurén|some people] [用|yòng|use] [茶水|cháshuǐ|tea] [吃|chī|take] [药，|yào,|medicine,] [有人|yǒurén|some] [用|yòng|use] [热|rè|hot] [牛奶|niúnǎi|milk] [吃|chī|take] [药。|yào.|medicine.] [其实，|qíshí,|Actually,] [吃|chī|take] [药|yào|medicine] [的|de|(possessive)] [时候|shíhou|time] [用|yòng|use] [热水|rè shuǐ|hot water] [是|shì|is] [最好|zuì hǎo|best] [的。|de.|(nominalizer)] [药，|yào,|Medicine,] [你|nǐ|you] [吃|chī|take] [对|duì|right] [了|le|(change)] [吗？|ma?|(question)]</div>
          <div class="sent-en">Do you know how to take medicine when you're sick? Some use tea, some use hot milk. Actually, hot water is best. Are you taking your medicine correctly?</div>
          <div class="zh ask">★ [吃|chī|When taking] [药|yào|medicine,] [的|de|(possessive)] [时候|shíhou|time] [要|yào|should] [用：|yòng:|use:]</div>
          <div class="sent-en">★ When taking medicine, one should use: ___</div>
          <div class="opts">
            <div class="opt" data-ok="0"><i>A</i><span class="zh">[热茶水|rè cháshuǐ|hot tea]</span></div>
            <div class="opt" data-ok="0"><i>B</i><span class="zh">[热牛奶|rè niúnǎi|hot milk]</span></div>
            <div class="opt" data-ok="1"><i>C</i><span class="zh">[热水|rè shuǐ|hot water]</span></div>
          </div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>C　「[用|yòng|Using] [热水|rè shuǐ|hot water] [是|shì|is] [最好|zuì hǎo|the best] [的|de|(nominalizer)]」。</div>
        </div>
      </div>

      <div class="part">
        <h3>[三、书写|Sān shūxiě|3. Writing]</h3>
        <h4 id="L5-w1">[第一部分|dì yī bùfen|Part 1]　[第 36–40 题：|dì 36–40 tí:|Q 36–40:] [连词成句|lián cí chéng jù|make sentences from the given words]</h4>
        <div class="write-item" id="L5-w36">
          <div class="qhead"><span class="num">36</span></div>
          <div class="zh">[外边的|wàibiān de|outside] [绿|lǜ|green] [草|cǎo|grass] [都|dōu|all] [了|le|(change)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[外边|wàibiān|Outside,] [的|de|(possessive)] [草|cǎo|the grass] [都|dōu|all] [绿|lǜ|has turned green] [了。|le|(change)]<div class="sent-en">The grass outside has turned green.</div></div>
        </div>
        <div class="write-item" id="L5-w37">
          <div class="qhead"><span class="num">37</span></div>
          <div class="zh">[好|hǎo|recovered] [现在|xiànzài|now] [我|wǒ|my] [的|de|(possessive)] [病|bìng|illness] [了|le|(change)]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[现在|xiànzài|Now] [我|wǒ|my] [的|de|(possessive)] [病|bìng|illness] [好|hǎo|is gone] [了。|le|(change)]<div class="sent-en">I've recovered now.</div></div>
        </div>
        <div class="write-item" id="L5-w38">
          <div class="qhead"><span class="num">38</span></div>
          <div class="zh">[热|rè|hot] [越来越|yuè lái yuè|more and more] [天气|tiānqì|weather] [最近|zuìjìn|lately]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[最近|zuìjìn|Lately] [天气|tiānqì|the weather] [越来越|yuè lái yuè|is getting] [热。|rè|hotter.]<div class="sent-en">The weather is getting hotter and hotter.</div></div>
        </div>
        <div class="write-item" id="L5-w39">
          <div class="qhead"><span class="num">39</span></div>
          <div class="zh">[越来越|yuè lái yuè|more and more] [雨|yǔ|rain] [大|dà|heavy] [下得|xià de|falls]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[雨|yǔ|The rain] [下|xià|falls] [得|de|(complement)] [越来越|yuè lái yuè|more and more] [大。|dà|heavily.]<div class="sent-en">The rain is getting heavier and heavier.</div></div>
        </div>
        <div class="write-item" id="L5-w40">
          <div class="qhead"><span class="num">40</span></div>
          <div class="zh">[漂亮|piàoliang|pretty] [越来越|yuè lái yuè|more and more] [现在|xiànzài|now] [我妹妹|wǒ mèimei|my sister]</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[我|wǒ|My] [妹妹|mèimei|sister] [现在|xiànzài|now] [越来越|yuè lái yuè|is getting] [漂亮。|piàoliang|prettier.]<div class="sent-en">My sister is getting prettier and prettier.</div></div>
        </div>

        <h4 id="L5-w2">[第二部分|dì èr bùfen|Part 2]　[第 41–45 题：|dì 41–45 tí:|Q 41–45:] [看|kàn|look at] [拼音，|pīnyīn,|the pinyin,] [写|xiě|write] [汉字|Hànzì|the Chinese characters]</h4>
        <div class="write-item" id="L5-w41">
          <div class="qhead"><span class="num">41</span></div>
          <div class="zh">[听说|tīngshuō|heard] [你|nǐ|you] <span class="blank-input"><span class="input-py">fā</span><input type="text" data-ans="发"></span> [烧|shāo|fever] [了，|le,|,] [我|wǒ|I] [来|lái|come] [看看|kàn kan|see] [你。|nǐ.|you.]</div>
          <div class="sent-en">I heard you have a fever — I came to see you.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[发|fā|(as in 发烧 "fever")]</span></div>
        </div>
        <div class="write-item" id="L5-w42">
          <div class="qhead"><span class="num">42</span></div>
          <div class="zh">[今天|jīntiān|today] [是|shì|is] [周末，|zhōumò,|weekend,] [不|bù|not] <span class="blank-input"><span class="input-py">yòng</span><input type="text" data-ans="用"></span> [去|qù|go] [公司|gōngsī|company] [上班。|shàngbān.|to work.]</div>
          <div class="sent-en">Today is the weekend — no need to go to the company.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[用|yòng|need]（[不用|búyòng|no need]）</span></div>
        </div>
        <div class="write-item" id="L5-w43">
          <div class="qhead"><span class="num">43</span></div>
          <div class="zh">[你|nǐ|you] [觉得|juéde|think] [哪个|nǎ ge|which] <span class="blank-input"><span class="input-py">jì</span><input type="text" data-ans="季"></span> [节|jié|season] [去|qù|go to] [南方|nánfāng|the South] [最好？|zuì hǎo?|best?]</div>
          <div class="sent-en">Which season do you think is best to go to the South?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[季|jì|season]（[季节|jìjié|season]）</span></div>
        </div>
        <div class="write-item" id="L5-w44">
          <div class="qhead"><span class="num">44</span></div>
          <div class="zh">[大家|dàjiā|everyone] [都|dōu|all] [说|shuō|say] [北京|Běijīng|Beijing] [的|de|(possessive)] <span class="blank-input"><span class="input-py">chūn</span><input type="text" data-ans="春"></span> [天|tiān|day] [是|shì|is] [最|zuì|most] [漂亮|piàoliang|beautiful] [的。|de.|(nominalizer)]</div>
          <div class="sent-en">Everyone says Beijing's spring is the most beautiful.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[春|chūn|spring]（[春天|chūntiān|spring]）</span></div>
        </div>
        <div class="write-item" id="L5-w45">
          <div class="qhead"><span class="num">45</span></div>
          <div class="zh">[你|nǐ|you] [说|shuō|say] [我|wǒ|I] [今天|jīntiān|today] [穿|chuān|wear] [裤子|kùzi|trousers] [还是|háishi|or] [穿|chuān|wear] <span class="blank-input"><span class="input-py">qún</span><input type="text" data-ans="裙"></span> [子？|zi?|skirt?]</div>
          <div class="sent-en">Do you think I should wear trousers or a skirt today?</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><span class="zh">[裙|qún|skirt]（[裙子|qúnzi|skirt]）</span></div>
        </div>

        <h4 id="L5-w3">[第三部分|dì sān bùfen|Part 3]　[第 46–50 题：|dì 46–50 tí:|Q 46–50:] [辨认|biànrèn|recognize] [汉字，|Hànzì,|the Chinese characters,] [选择|xuǎnzé|choose] [正确|zhèngquè|the correct] [的|de|(possessive)] [汉字|Hànzì|character] [填空|tiánkòng|to fill in]</h4>
        <div class="write-item" id="L5-w46">
          <div class="qhead"><span class="num">46</span></div>
          <div class="zh">[你|nǐ|you] <span class="blank-input"><input type="text" data-ans="看"></span>，<span class="blank-input"><input type="text" data-ans="春"></span> [天|tiān|day] [到|dào|arrive] [了，|le,|,] [花|huā|flowers] [都|dōu|all] [开|kāi|bloom] [了。|le.|(change)]</div>
          <div class="zh" style="margin-top:6px;">[看|kàn|look]　[春|chūn|spring]</div>
          <div class="sent-en">Look, spring is here and the flowers are blooming.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[看|kàn|(as in 看病 “see a doctor”)]、[春|chūn|(as in 春天 “spring”)]</div>
        </div>
        <div class="write-item" id="L5-w47">
          <div class="qhead"><span class="num">47</span></div>
          <div class="zh">[今年|jīnnián|this year] <span class="blank-input"><input type="text" data-ans="夏"></span> [天，|tiān,|summer,] [我|wǒ|I] [没|méi|not] [去|qù|go] [旅游，|lǚyóu,|travel,] [一直|yìzhí|always] [在|zài|at] [家里|jiā li|home] <span class="blank-input"><input type="text" data-ans="复"></span> [习，|xí,|review,] [准备|zhǔnbèi|prepare] [HSK 考试。|HSK kǎoshì.|HSK exam.]</div>
          <div class="zh" style="margin-top:6px;">[复|fù|review]　[夏|xià|summer]</div>
          <div class="sent-en">This summer I didn't travel — I stayed home reviewing for the HSK exam.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[夏|xià|(as in 夏天 “summer”)]、[复|fù|(as in 复习 “review”)]</div>
        </div>
        <div class="write-item" id="L5-w48">
          <div class="qhead"><span class="num">48</span></div>
          <div class="zh">[我的|wǒ de|my] [朋|péng|friend] <span class="blank-input"><input type="text" data-ans="友"></span> [有点儿|yǒudiǎnr|a bit] <span class="blank-input"><input type="text" data-ans="发"></span> [烧，|shāo,|fever,] [我要|wǒ yào|I need to] [去|qù|go to] [他家|tā jiā|his home] [照顾|zhàogù|take care of] [他。|tā.|him.]</div>
          <div class="zh" style="margin-top:6px;">[发|fā|(as in 发烧 "fever")]　[友|yǒu|friend]</div>
          <div class="sent-en">My friend has a fever — I need to go to his home to take care of him.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[友|yǒu|(as in 朋友 “friend”)]、[发|fā|(as in 发烧 “have a fever”)]</div>
        </div>
        <div class="write-item" id="L5-w49">
          <div class="qhead"><span class="num">49</span></div>
          <div class="zh">[你|nǐ|you] [穿|chuān|wear] [了|le|(past)] [那么|nàme|so] [多|duō|many] [衣服，|yīfu,|clothes,] [当|dāng|of course] <span class="blank-input"><input type="text" data-ans="然"></span> [会|huì|will] [觉得|juéde|feel] [很|hěn|very] <span class="blank-input"><input type="text" data-ans="热"></span>。|.</div>
          <div class="zh" style="margin-top:6px;">[热|rè|hot]　[然|rán|(as in 当然 "of course")]</div>
          <div class="sent-en">You're wearing so many clothes — of course you'll feel hot.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[然|rán|(as in 当然 “of course”)]、[热|rè|hot]</div>
        </div>
        <div class="write-item" id="L5-w50">
          <div class="qhead"><span class="num">50</span></div>
          <div class="zh">[今天|jīntiān|today] <span class="blank-input"><input type="text" data-ans="早"></span> [上，|shang,|morning,] [我|wǒ|I] [看到|kàndào|saw] [树下|shù xià|under the tree] [的|de|(possessive)] [小|xiǎo|small] <span class="blank-input"><input type="text" data-ans="草"></span> [都|dōu|all] [绿|lǜ|green] [了。|le.|(change)]</div>
          <div class="zh" style="margin-top:6px;">[草|cǎo|grass]　[早|zǎo|early]</div>
          <div class="sent-en">This morning I saw the little grass under the tree has turned green.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span>[早|zǎo|(as in 早上 “morning”)]、[草|cǎo|grass]</div>
        </div>

        <h4 id="L5-w4">[第四部分|dì sì bùfen|Part 4]　[第 51–54 题：|dì 51–54 tí:|Q 51–54:] [用|yòng|use] [下面|xiàmiàn|the following] [的|de|(possessive)] [汉字|Hànzì|characters] [组词|zǔcí|to form words]</h4>
        <div class="write-item" id="L5-w51">
          <div class="qhead"><span class="num">51</span></div>
          <div class="zh">[明|míng|bright] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[明天|míngtiān|tomorrow]、[聪明|cōngming|smart]</div></div>
        </div>
        <div class="write-item" id="L5-w52">
          <div class="qhead"><span class="num">52</span></div>
          <div class="zh">[休|xiū|rest] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[休息|xiūxi|rest]、[休学|xiūxué|suspend schooling]</div></div>
        </div>
        <div class="write-item" id="L5-w53">
          <div class="qhead"><span class="num">53</span></div>
          <div class="zh">[从|cóng|from] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[从来|cónglái|never/always]、[从小|cóngxiǎo|since childhood]</div></div>
        </div>
        <div class="write-item" id="L5-w54">
          <div class="qhead"><span class="num">54</span></div>
          <div class="zh">[看|kàn|look] →</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box"><span class="lbl">[答案：|Dá’àn:|Answer:]</span><div class="zh">[看书|kàn shū|read]、[看见|kànjiàn|see]</div></div>
        </div>
      </div>

      <div class="part">
        <h3>[四、复习|Sì fùxí|4. Review]</h3>
        <div class="write-item" id="L5-rev">
          <div class="qhead"><span class="num">1</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小刚|Xiǎogāng|Xiaogang] [最|zuì|most] [喜欢|xǐhuan|like] [的|de|(possessive)]
            <span class="blank-input review-blank"><span class="input-py">jìjié</span><input type="text" data-ans="季节"></span>
            [是|shì|is]
            <span class="blank-input review-blank"><span class="input-py">chūntiān</span><input type="text" data-ans="春天"></span>，[因为|yīnwèi|because] [天气|tiānqì|weather] [不|bù|not] [那么|nàme|so] [冷|lěng|cold] [了，|le,|,]
            <span class="blank-input review-blank"><span class="input-py">cǎo</span><input type="text" data-ans="草"></span>
            [和|hé|and] [树|shù|trees] [都|dōu|all] [绿|lǜ|green] [了，|le,|,] [花|huā|flowers] [也|yě|also] [开|kāi|bloom] [了。|le.|(change)] [小丽|Xiǎolì|Xiaoli] [最|zuì|most] [喜欢|xǐhuan|like]
            <span class="blank-input review-blank"><span class="input-py">xiàtiān</span><input type="text" data-ans="夏天"></span>，[因为|yīnwèi|because] [可以|kěyǐ|can] [穿|chuān|wear] [漂亮|piàoliang|pretty] [的|de|(possessive)]
            <span class="blank-input review-blank"><span class="input-py">qúnzi</span><input type="text" data-ans="裙子"></span>。
          </div>
          <div class="sent-en">Xiaogang's favorite season is spring — because it's not so cold, grass and trees turn green, and flowers bloom. Xiaoli likes summer best — because she can wear pretty skirts.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[季节|jìjié|season]、[春天|chūntiān|spring]、[草|cǎo|grass]、[夏天|xiàtiān|summer]、[裙子|qúnzi|skirt]</div>
          </div>
        </div>
        <div class="write-item">
          <div class="qhead"><span class="num">2</span>[根据|gēnjù|according to] [课文|kèwén|the text] [内容|nèiróng|content] [填空|tiánkòng|fill in the blanks]</div>
          <div class="zh" style="line-height:2.8;">
            [小丽|Xiǎolì|Xiaoli] [去年|qùnián|last year] [买|mǎi|bought] [的|de|(possessive)] [裙子，|qúnzi,|skirt,] [今年|jīnnián|this year]
            <span class="blank-input review-blank"><span class="input-py">jiù bùnéng chuān</span><input type="text" data-ans="就不能穿"></span>
            [了。|le.|(change)] [因为|yīnwèi|because] [小丽|Xiǎolì|Xiaoli] [吃|chī|ate] [得|de|(complement)] [太多，|tài duō,|too much,] [小刚|Xiǎogāng|Xiaogang] [让|ràng|let] [她|tā|her]
            <span class="blank-input review-blank"><span class="input-py">shǎo chī diǎnr</span><input type="text" data-ans="少吃点儿"></span>。[小丽|Xiǎolì|Xiaoli]
            <span class="blank-input review-blank"><span class="input-py">zuìjìn</span><input type="text" data-ans="最近"></span>
            [越来越|yuè lái yuè|more and more] [胖|pàng|fat] [了，|le,|,] [因为|yīnwèi|because] [小刚|Xiǎogāng|Xiaogang]
            <span class="blank-input review-blank"><span class="input-py">zuò de fàn</span><input type="text" data-ans="做的饭"></span>
            [太|tài|too] [好吃|hǎochī|tasty] [了。|le.|(change)]</div>
          <div class="sent-en">The skirt Xiaoli bought last year can't be worn this year, because she ate too much and Xiaogang asked her to eat less. Xiaoli has been getting fatter and fatter lately, because Xiaogang's cooking is too tasty.</div>
          <button class="ans-btn">答案 answer</button>
          <div class="ans-box">
            <span class="lbl">[答案：|Dá’àn:|Answer:]</span>
            <div class="zh">[就不能穿|jiù bùnéng chuān|can't wear anymore]、[少吃点儿|shǎo chī diǎnr|eat a bit less]、[最近|zuìjìn|lately]、[越来越|yuè lái yuè|more and more]、[做的饭|zuò de fàn|cooked food]</div>
          </div>
        </div>
      </div>
    </div>
  `
};