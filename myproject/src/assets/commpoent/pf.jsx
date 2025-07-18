import { FaStar, FaRegStar } from "react-icons/fa";
import img4 from "../image/feature_prod_01.jpg";
import img5 from "../image/feature_prod_02.jpg";
import img6 from "../image/feature_prod_03.jpg";

const pf = [
    {
        photo: img4,
        name: "Gym Weight",
        ulocation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
        description: "Reviews (24)",
        Fname: (
            <ul className="list-unstyled d-flex justify-content-between">
                <li>
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaRegStar className="text-muted" />
                    <FaRegStar className="text-muted" />
                </li>
                <li className="text-muted text-end">$240.00</li>
            </ul>
        )
    },
    {
        photo: img5,

        name: "Cloud Nike Shoes",
        ulocation: "Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.",
        description: "Reviews (48)",
        Fname: (
            <ul className="list-unstyled d-flex justify-content-between">
                <li>
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaRegStar className="text-muted" />
                    <FaRegStar className="text-muted" />
                </li>
                <li className="text-muted text-end">$240.00</li>
            </ul>
        )
    },
    {
        photo: img6,
        name: "Summer Addides Shoes",
        ulocation: "Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.",
        description: "Reviews (74)",
        Fname: (
            <ul className="list-unstyled d-flex justify-content-between">
                <li>
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />

                </li>
                <li className="text-muted text-end">$240.00</li>
            </ul>
        )
    }
];

export { pf };
