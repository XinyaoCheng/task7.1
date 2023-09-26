import React from "react";
import "./planCard.css"
import { useNavigate } from 'react-router-dom';


const PlanCard = (plan)=>{
    const navigate = useNavigate();
    console.log("测试subscripted："+plan.subscripted)
    const handlePayRequest=()=>{
        const priceAmount = parseInt(plan.price.match(/\d+/)[0]);
        navigate(`/pay/${priceAmount}`);
    }
    return <div className={`col-md-4 mb-4 d-flex justify-content-center ${plan.subscripted === plan.id ? 'current-plan' : ''}`} key={plan.id}>
    <div className="planCard-container card">
        <div className="card-body">
            <div className="text-center plan-intro">
                <h2 className="card-title plan-title">{plan.name} Plan</h2>
                <h5 className="card-title">{plan.description}</h5>
            </div>
            {plan.subscripted === plan.id ? (
                <div className="button-container text-center">
                    <p className="card-text">{plan.price}</p>
                    <button className="btn btn-primary button">Current Plan</button>
                </div>
            ) : (
                <div className="button-container text-center">
                    <button className="btn btn-outline-primary button" onClick={handlePayRequest}>{plan.price} </button>
                </div>
            )}



            <hr />
            <h5 className="card-text">Limitations on the number of jobs: </h5>
            <div>

                <p className="card-text">Able to publish {plan.maxJobs} jobs</p>
            </div>

            <h5 className="card-text">Job Types:</h5>
            {plan.jobTypes.includes('Freelance') ? (
                plan.jobTypes.map((type, index) => (
                    <p className="card-text" key={index}><i className="fa fa-check"></i>{type}</p>
                ))
            ) : null}
            {!plan.jobTypes.includes('Employment') && (
                <p className="card-text"><i className="fa fa-times"></i> Employment</p>
            )}
            <h5 className="card-text">Visibility</h5>
            <p className="card-text">
                {plan.viewApplicants ? (
                    <><i className="fa fa-check"></i> Able to see who reviewed your post</>
                ) : (
                    <><i className="fa fa-times"></i> Unable to see who reviewed your post</>
                )}
            </p>

            <h5 className="card-text">Massive push</h5>
            <p className="card-text">
                {plan.jobPush ? (
                    <><i className="fa fa-check"></i> can prioritize the jobs you post to job seekers</>
                ) : (
                    <><i className="fa fa-times"></i> cannot prioritize the jobs you post to job seekers</>
                )}
            </p>
        </div>
    </div>
</div>

}
export default PlanCard