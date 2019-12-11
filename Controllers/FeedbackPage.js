import {layoutHTML,homeEvent,adminEvent,coursesEvent,tooltippedEvent} from "../Controllers/LayoutController.js";

$(document).ready(function () {
    
    //setup main layout
        $("#mainLayout").html(layoutHTML);
        homeEvent;
        adminEvent;
        coursesEvent;
        tooltippedEvent;


        const data =  [
                {
                    "question": "The objectives of the training were clearly defined.",
                    "answers": [
                        "Strongly Agree",
                        "Agree",
                        "Neutral",
                        "Disagree",
                        "Strongly Disagree"
                    ]
                },
                {
                    "question": "Participation and interaction were encouraged.",
                    "answers": [
                        "Strongly Agree",
                        "Agree",
                        "Neutral",
                        "Disagree",
                        "Strongly Disagree"
                    ]
                },
                {
                    "question": "The topics covered were relevant to me.",
                    "answers": [
                        "Strongly Agree",
                        "Agree",
                        "Neutral",
                        "Disagree",
                        "Strongly Disagree"
                    ]
                },
                {
                    "question": "The content was organized and easy to follow.",
                    "answers": [
                        "Strongly Agree",
                        "Agree",
                        "Neutral",
                        "Disagree",
                        "Strongly Disagree"
                    ]
                },
                {
                    "question": "The materials distributed were helpful.",
                    "answers": [
                        "Strongly Agree",
                        "Agree",
                        "Neutral",
                        "Disagree",
                        "Strongly Disagree"
                    ]
                },
                {
                    "question": "This training experience will be useful my work in",
                    "answers": [
                        "Strongly Agree",
                        "Agree",
                        "Neutral",
                        "Disagree",
                        "Strongly Disagree"
                    ]
                },
                {
                    "question": "The trainer was knowledgeable about the training topics.",
                    "answers": [
                        "Strongly Agree",
                        "Agree",
                        "Neutral",
                        "Disagree",
                        "Strongly Disagree"
                    ]
                },
                {
                    "question": "The trainer was well prepared.",
                    "answers": [
                        "Strongly Agree",
                        "Agree",
                        "Neutral",
                        "Disagree",
                        "Strongly Disagree"
                    ]
                },
                {
                    "question": "The training objectives were met.",
                    "answers": [
                        "Strongly Agree",
                        "Agree",
                        "Neutral",
                        "Disagree",
                        "Strongly Disagree"
                    ]
                },
                {
                    "question": "The time allotted for the training was sufficient.",
                    "answers": [
                        "Strongly Agree",
                        "Agree",
                        "Neutral",
                        "Disagree",
                        "Strongly Disagree"
                    ]
                },
                {
                    "question": "The meeting room and facilities were adequate and comfortable.",
                    "answers": [
                        "Strongly Agree",
                        "Agree",
                        "Neutral",
                        "Disagree",
                        "Strongly Disagree"
                    ]
            
                }
            ]


        data.map((row,index)=>{
            $(CreateQuestion(index,row.question,row.answers)).appendTo("#Questions")
        })

        $(document).on("click","#SaveFeedback",(e)=>{
                // var answersBlcok = {
                //     name: $("#Name").val(),
                //     answers:{
                //         q1:parseInt($("input[name='questions0']:checked").val()),
                //         q2:parseInt($("input[name='questions1']:checked").val()),
                //         q3:parseInt($("input[name='questions2']:checked").val()),
                //         q4:parseInt($("input[name='questions3']:checked").val()),
                //         q5:parseInt($("input[name='questions4']:checked").val()),
                //         q6:parseInt($("input[name='questions5']:checked").val()),
                //         q7:parseInt($("input[name='questions6']:checked").val()),
                //         q8:parseInt($("input[name='questions7']:checked").val()),
                //         q9:parseInt($("input[name='questions8']:checked").val()),
                //         q10:parseInt($("input[name='questions9']:checked").val()),
                //         q11:parseInt($("input[name='questions10']:checked").val()),
                //     },
                //     total : [
                //     parseInt($("input[name='questions0']:checked").val()),
                //     parseInt($("input[name='questions1']:checked").val()),
                //     parseInt($("input[name='questions2']:checked").val()),
                //     parseInt($("input[name='questions3']:checked").val()),
                //     parseInt($("input[name='questions4']:checked").val()),
                //     parseInt($("input[name='questions5']:checked").val()),
                //     parseInt($("input[name='questions6']:checked").val()),
                //     parseInt($("input[name='questions7']:checked").val()),
                //     parseInt($("input[name='questions8']:checked").val()),
                //     parseInt($("input[name='questions9']:checked").val()),
                //     parseInt($("input[name='questions10']:checked").val())
                //                 ].reduce((total,current)=>total + current , 0)
                // }

                var Name = $("#Name").val();

                var Answers={
                        q1:parseInt($("input[name='questions0']:checked").val()),
                        q2:parseInt($("input[name='questions1']:checked").val()),
                        q3:parseInt($("input[name='questions2']:checked").val()),
                        q4:parseInt($("input[name='questions3']:checked").val()),
                        q5:parseInt($("input[name='questions4']:checked").val()),
                        q6:parseInt($("input[name='questions5']:checked").val()),
                        q7:parseInt($("input[name='questions6']:checked").val()),
                        q8:parseInt($("input[name='questions7']:checked").val()),
                        q9:parseInt($("input[name='questions8']:checked").val()),
                        q10:parseInt($("input[name='questions9']:checked").val()),
                        q11:parseInt($("input[name='questions10']:checked").val()),
                    };

                    var Total = [Answers.q1,Answers.q2,Answers.q3,Answers.q4,Answers.q5,Answers.q6,Answers.q7,Answers.q8,Answers.q9,Answers.q10,Answers.q11
                                ].reduce((total,current)=>total + current , 0);

                    // var Total = [
                    // parseInt($("input[name='questions0']:checked").val()),
                    // parseInt($("input[name='questions1']:checked").val()),
                    // parseInt($("input[name='questions2']:checked").val()),
                    // parseInt($("input[name='questions3']:checked").val()),
                    // parseInt($("input[name='questions4']:checked").val()),
                    // parseInt($("input[name='questions5']:checked").val()),
                    // parseInt($("input[name='questions6']:checked").val()),
                    // parseInt($("input[name='questions7']:checked").val()),
                    // parseInt($("input[name='questions8']:checked").val()),
                    // parseInt($("input[name='questions9']:checked").val()),
                    // parseInt($("input[name='questions10']:checked").val())
                    //             ].reduce((total,current)=>total + current , 0);

                $.ajax({
                    url:"http://192.168.1.110:3000/feedback/answers",
                    type:"POST",
                    data:{
                        answers : Answers,
                        name : Name,
                        total : Total
                    },
                    success:(res)=>{
                        console.log(res)
                        alert("Thanks " + Name)
                        window.open("index.html","_self")

                    },
                    error:(xhr,status,err)=>{
                        alert(err)
                    }
                })

        })

        function CreateQuestion(index,question,answers){
            var block = ` <div class="card-panel teal">
            <span class="white-text">${index+1}-${question}
            </span>

            <hr>

            <div style="display: flex; justify-content: space-evenly;flex-wrap: wrap;">
                <p>
                    <label>
                        <input name="questions${index}" type="radio" value="5"/>
                        <span class="white-text">${answers[0]}</span>
                    </label>
                </p>

                <p>
                    <label>
                        <input name="questions${index}" type="radio" value="4"/>
                        <span class="white-text">${answers[1]}</span>
                    </label>
                </p>

                <p>
                    <label>
                        <input name="questions${index}" type="radio" value="3"/>
                        <span class="white-text">${answers[2]}</span>
                    </label>
                </p>

                <p>
                    <label>
                        <input name="questions${index}" type="radio" value="2"/>
                        <span class="white-text">${answers[3]}</span>
                    </label>
                </p>

                <p>
                    <label>
                        <input name="questions${index}" type="radio" value="1"/>
                        <span class="white-text">${answers[4]}</span>
                    </label>
                </p>
            </div>
        </div>`;

        return block;
        }
});