import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {

    const { backendUrl, token } = useContext(AppContext);

    const [dashboard, setDashboard] = useState(null);

    const loadDashboard = async () => {

        try {

            const { data } = await axios.get(
                backendUrl + "/api/image/dashboard",
                {
                    headers: { token }
                }
            );

            if(data.success){
                setDashboard(data.dashboard);
            }

        } catch(error){
            console.log(error);
        }

    }

    useEffect(()=>{
        if(token){
            loadDashboard();
        }
    },[token])

    if(!dashboard){
        return <h2>Loading...</h2>
    }

    return(

        <div className="py-10">

            <h1 className="text-4xl font-bold mb-8">
                Dashboard
            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="bg-white rounded-xl shadow p-6">

                    <h2>Total Images</h2>

                    <p className="text-4xl font-bold">
                        {dashboard.totalImages}
                    </p>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <h2>Credits Left</h2>

                    <p className="text-4xl font-bold">
                        {dashboard.creditBalance}
                    </p>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <h2>Latest Prompt</h2>

                    <p>
                        {dashboard.latestImage?.prompt || "No Images"}
                    </p>

                </div>

            </div>

        </div>

    )

}

export default Dashboard;