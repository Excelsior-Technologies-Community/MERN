import React, { useState } from "react";

const BillSplit = () => {
    const [bill, setBill] = useState("");
    const [tip, setTip] = useState("");
    const [people, setPeople] = useState("");
    const [result, setResult] = useState(null);

    const calculate = () => {
        const total = Number(bill) + Number(tip);
        const perPerson = total / Number(people);
        setResult(perPerson);
    };

    const totalBill = Number(bill) + Number(tip);


    return (
        <div className="flex flex-col gap-5">


            <div className="flex items-center gap-5">
                <div className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-amber-200 flex flex-col gap-3">
                    <div className="flex items-center gap-3 pb-3 border-b border-amber-200">
                        <span className="bg-green-100 px-2 py-1 text-xl text-green-500 rounded-sm">
                            <i className="bi bi-currency-dollar"></i>
                        </span>
                        <h1 className="text-3xl font-bold text-gray-800 ">
                            Total Bill
                        </h1>
                    </div>
                    <div className="flex flex-col gap-1">

                        <label htmlFor="bill" className="font-medium">Enter Bill Amount : </label>
                        <input
                            type="text"
                            placeholder="Total Bill"
                            value={bill}
                            onChange={(e) => setBill(e.target.value)}
                            className="border p-2 rounded-md border-gray-500"
                        />
                    </div>
                </div>
                <div className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-amber-200 flex flex-col gap-3">
                    <div className="flex items-center gap-3 pb-3 border-b border-amber-200">
                        <span className="bg-yellow-100 px-2 py-1 text-xl text-yellow-500 rounded-sm">
                            <i className="bi bi-currency-dollar"></i>
                        </span>
                        <h1 className="text-3xl font-bold text-gray-800 ">
                            Tip Amount
                        </h1>
                    </div>
                    <div className="flex flex-col gap-1">

                        <label htmlFor="bill" className="font-medium">Enter Tip Amount : </label>
                        <input
                            type="text"
                            placeholder="Total Bill"
                            value={tip}
                            onChange={(e) => setTip(e.target.value)}
                            className="border p-2 rounded-md border-gray-500"
                        />
                    </div>
                </div>
                <div className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-amber-200 flex flex-col gap-3">
                    <div className="flex items-center gap-3 pb-3 border-b border-amber-200">
                        <span className="bg-orange-100 px-2 py-1 text-xl text-orange-500 rounded-sm">
                            <i className="bi bi-person-fill"></i>
                        </span>
                        <h1 className="text-3xl font-bold text-gray-800 ">
                            Total Person
                        </h1>
                    </div>
                    <div className="flex flex-col gap-1">

                        <label htmlFor="bill" className="font-medium">Enter Persons Number : </label>
                        <input
                            type="text"
                            placeholder="Total Bill"
                            value={people}
                            onChange={(e) => setPeople(e.target.value)}
                            className="border p-2 rounded-md border-gray-500"
                        />
                    </div>
                </div>


            </div>
            <div className="flex flex-col items-center justify-center">
                <button onClick={calculate} className="bg-green-600 text-green-200 text-2xl rounded-xl px-10 py-3 hover:scale-105 transition duration-300 cursor-pointer hover:shadow-xl">
                    <i className="bi bi-calculator mr-2 text-xl"></i>Split</button>
                {result !== null && (
                    <div className="px-25 py-10 flex flex-col gap-1 items-center rounded-2xl">

                        <h1 className="text-xl font-medium">Total Amount:
                            <span className="font-semibold">
                                ${totalBill}
                            </span>
                        </h1>
                        <h1 className="text-xl font-medium">Each person pays:</h1>
                        <h3 className="font-bold text-4xl"> ${result}</h3>

                    </div>
                )}
            </div>
        </div>
    );
};

export default BillSplit;
