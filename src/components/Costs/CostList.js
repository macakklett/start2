import "./CostList.css";
import CostItem from "./CostItem";

function CostList(props) {

    if (props.costs.length === 0) {
        return <h2 className="cost-list__fallback">There are no costs in this year</h2>
    }

    return <ul className="cost-list">
        {props.costs.map((item) =>
                (<CostItem
                    key={item.id}
                    date={item.date}
                    description={item.description}
                    amount={item.amount} />
                ))}
    </ul>
}

export default CostList;