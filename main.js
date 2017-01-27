$( document ).ready(function() {

  let quotes = [
"IN NO EVENT SHALL THE PHP DEVELOPMENT TEAM OR ITS CONTRIBUTORS BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES",
"This License Agreement is invalid or unenforceable under any applicable law",
"Each Recipient is solely responsible for costs, including without limitation Section 2.2",
"You may use the Licensed Program, and copy and distribute modified versions of the License",
"No Retroactive Effect of Termination",
"Program is void, and will automatically terminate upon a material breach of any payment or license",
"withdraw Your litigation claim",
"You may charge a fee for, warranty, support, indemnity or liability terms you offer.",
"WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED",
"Modifications and/or Larger Works may require additional patent licenses granted hereunder, each Recipient hereby assumes sole responsibility to secure any other system and a work based on (or derived from) the Work can only do in order to apply in other circumstances.",
"You're screwed",
"OBJECTION, your honor",
"Looking like 25 to life",
"Dom Dom",
"Habeaus Corpus and Maranda Rights n shit"
]

  $('#consult-button').on('click',function(){
    let $consult =`
    <div class="jazz-container">
      <h1 class="consult-title center-align">Free Consultations</h1>
      <div class="row">
        <div class="col s6 offset-s3">
          <input placeholder="Please enter your question." id="question" type="text">
          <label for="question"></label>
        </div>
        <div class="col s3">
          <a id="ask-button" class="waves-effect waves-light btn">Ask</a>
        </div>
      </div>
      <div id="answer" class="center">

      </div>
      <div class="row consult-row">
        <div class="col s2">
          <form action="#">
           <p>
             <input name="group1" type="radio" id="test1" />
             <label for="test1"><img class="radio-img" src="http://pngimg.com/upload/hands_PNG905.png"></label>
           </p>
           <p>
             <input name="group1" type="radio" id="test2" />
             <label for="test2"><img class="radio-img" src="http://www.clipartbest.com/cliparts/9Tz/Mxy/9TzMxyAqc.png"></label>
           </p>
           <p>
             <input name="group1" type="radio" id="test3"  />
             <label for="test3"><img class="radio-img" src="https://upload.wikimedia.org/wikipedia/en/7/7e/Left_hand_(Palm_facing).png"></label>
           </p>
           <p>
             <input name="group1" type="radio" id="test4"/>
             <label for="test4"><img class="radio-img" src="http://pngimg.com/upload/money_PNG3499.png"></label>
           </p>
           <p>
             <input name="group1" type="radio" id="test6"/>
             <label for="test6"><img class="radio-img" src="./images/gun.png"></label>
           </p>
           <p>
             <input name="group1" type="radio" id="test7"/>
             <label for="test7"><img class="radio-img" src="./images/hulk.png"></label>
           </p>
         </form>
        </div>
        <div class="col s10 center">
          <img id="lawyer" src="http://www.racinelaw.net/wp-content/uploads/2016/04/LaneE.png" alt="lawyer">
          <img id="left-hand" src="http://pngimg.com/upload/hands_PNG905.png" alt="">
          <img id="right-hand" src="http://pngimg.com/upload/hands_PNG905.png" alt="">
        </div>
      </div>
    </div>
    `
    $('#insert-here').append($consult);
    $('#ask-button').on('click',function(){
      var randomAnswer =  Math.floor(Math.random() * quotes.length);

      var $quote = `<p class="quote">${quotes[randomAnswer]}</p>`;
      setTimeout(function(){ $('#answer').append($quote); }, 1000);
      setTimeout(function(){ $('.quote').remove(); }, 12000);

    })
    $('#test2').on('click',function(){
      $('#left-hand').attr("src","http://www.clipartbest.com/cliparts/9Tz/Mxy/9TzMxyAqc.png");
      $('#right-hand').attr("src","http://www.clipartbest.com/cliparts/9Tz/Mxy/9TzMxyAqc.png");
    })
    $('#test3').on('click',function(){
      $('#left-hand').attr("src","https://upload.wikimedia.org/wikipedia/en/7/7e/Left_hand_(Palm_facing).png");
      $('#right-hand').attr("src","https://upload.wikimedia.org/wikipedia/en/7/7e/Left_hand_(Palm_facing).png");
    })
    $('#test4').on('click',function(){
      $('#left-hand').attr("src","http://pngimg.com/upload/money_PNG3499.png");
      $('#right-hand').attr("src","http://pngimg.com/upload/money_PNG3499.png");
    })
    $('#test4').on('click',function(){
      $('#left-hand').attr("src","http://pngimg.com/upload/money_PNG3499.png");
      $('#right-hand').attr("src","http://pngimg.com/upload/money_PNG3499.png");
    })
    $('#test6').on('click',function(){
      $('#left-hand').attr("src","./images/gun.png");
      $('#right-hand').attr("src","./images/gun.png");
    })
    $('#test7').on('click',function(){
      $('#left-hand').attr("src","./images/hulk.png");
      $('#right-hand').attr("src","./images/hulk.png");
    })
  })

});
