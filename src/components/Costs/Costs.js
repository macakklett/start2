import Card from "../UI/Card";
import CostList from "./CostList";
import "./Costs.css";
import CostsDiagram from "./CostsDiagram";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";



function Costs(props) {

    const [selectedYear, setSelectedYear] = useState('2021');

    const changeYearHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear;
    });

    

    return (
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={changeYearHandler} />
            <CostsDiagram costs = {filteredCosts}/>
            <CostList costs = {filteredCosts}/>
        </Card>
    )
}

export default Costs;