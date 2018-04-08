;window.onload = function () {
    function $(idName) {
        return document.getElementById(idName);
    }
    var interlocution = $('interlocution')
        ,start = $('start')
        ,learnB = $('learnB')
        ,startB = $('startB')
        ,rulesB = $('rulesB')
        ,rules = $('rules')
        ,rulesBackB = $('rulesBackB')
        ,learn = $('learn')
        ,learnBackB = $('learnBackB')
        ,video01 = $('video01')
        ,video02 = $('video02')
        ,video03 = $('video03')
        ,video04 = $('video04')
        ,learnVlook01 = $('learnVlook01')
        ,LookBackB = $('LookBackB')
        ,look01 = $('look01')
        ,startQwe = $('startQwe')
        ,qwe01 = $('qwe01')
        ,qweText01_a = $('qweText01_a')
        ,qweText01_b = $('qweText01_b')
        ,qweText01_c = $('qweText01_c')
        ,qweText01_d = $('qweText01_d')
        ,nextQwe01 = $('nextQwe01')
        ,integral = $('integral')



    rulesB.onclick = function () {
        start.style.display = 'none';
        rules.style.display = 'block';
    }
    rulesBackB.onclick = function () {
        rules.style.display = 'none';
        start.style.display = 'block';
    }
    learnB.onclick = function () {
        start.style.display = 'none';
        learn.style.display = 'block';
    }
    learnBackB.onclick = function () {
        learn.style.display = 'none';
        start.style.display = 'block';
    }
    video01.onclick = function () {
        learn.style.display = 'none';
        learnVlook01.style.display = 'block';
    }
    video02.onclick = function () {
        learn.style.display = 'none';
        learnVlook01.style.display = 'block';
    }
    video03.onclick = function () {
        learn.style.display = 'none';
        learnVlook01.style.display = 'block';
    }
    video04.onclick = function () {
        learn.style.display = 'none';
        learnVlook01.style.display = 'block';
    }
    LookBackB.onclick = function () {
        learnVlook01.style.display = 'none';
        learn.style.display = 'block';
    }
    startB.onclick = function () {
        start.style.display = 'none';
        startQwe.style.display = 'block';
        qwe01.innerHTML = '1.预防洗浴时煤气中毒,下列说法不正确的是(&emsp;)?';
        qweText01_a.innerHTML = '&emsp;A.热水器宜选用直排式,也可选用强排式;';
        qweText01_b.innerHTML = '&emsp;B.保持室内通风良好;';
        qweText01_c.innerHTML = '&emsp;C.控制洗浴时间不宜过长;';
        qweText01_d.innerHTML = '&emsp;D.煤气因不充分燃烧产生的一氧化碳而中毒;';
    }
    qweText01_a.onclick = function () {
        qweText01_a.style.backgroundColor = '#Fe9503';
        qweText01_a.style.color = '#FFFFFF';
        nextQwe01.style.display = 'block';
        integral.innerHTML = '答题情况:正确答案为' + '<span style="color:#e74424;">A</span>&emsp;' + '您已答对' + '<span id="count" style="color:#e74424;">0</span>题';
    }
}