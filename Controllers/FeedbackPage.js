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


        function CreateQuestion(index,question,answers){
            var block = ` <div class="card-panel teal">
            <span class="white-text">${question}
            </span>

            <p>
                <label>
                    <input name="questions${index}" type="radio"/>
                    <span>${answers[0]}</span>
                </label>
            </p>

            <p>
                <label>
                    <input name="questions${index}" type="radio"/>
                    <span>${answers[1]}</span>
                </label>
            </p>

            <p>
                <label>
                    <input name="questions${index}" type="radio"/>
                    <span>${answers[2]}</span>
                </label>
            </p>

            <p>
                <label>
                    <input name="questions${index}" type="radio"/>
                    <span>${answers[3]}</span>
                </label>
            </p>

            <p>
                <label>
                    <input name="questions${index}" type="radio"/>
                    <span>${answers[4]}</span>
                </label>
            </p>
        </div>`;

        return block;
        }
});