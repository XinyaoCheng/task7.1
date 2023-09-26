import React, { useContext, useState } from "react";
import NavHeader from "../homepage/NavHeader";
import "./planCard.css"
import 'font-awesome/css/font-awesome.min.css';
import { UsersContext } from "../context/users.context";
import planList from "./plans";
import PlanCard from "./planCard";


const Subscription = () => {
    const { user } = useContext(UsersContext);
    const [subscripted, SetSubscripted] = useState(user.subscripted);
    // const [subscripted, SetSubscripted] = useState(0);

    console.log("打印目前登录的用户的订阅情况:" + subscripted);
    return (
        <div>
            <NavHeader />
            <div className="row justify-content-center plans-container">
                {planList.map((plan) => (
                    <PlanCard
                    id={plan.id}
                    name={plan.name}
                    description={plan.description}
                    price={plan.price}
                    maxJobs={plan.maxJobs}
                    jobTypes={plan.jobTypes}
                    viewApplicants={plan.viewApplicants}
                    jobPush={plan.jobPush}
                    subscripted={subscripted}
                    />

                ))}
            </div>
        </div>
    );
};

export default Subscription;
