import templateOneImg from "../../assests/Images/resume-one.png";
import templateTwoImg from "../../assests/Images/resume-two.png";
import Template1 from "../../Components/Templates/Template1";
import Template2 from "../../Components/Templates/Template2";

export const templates = [
  {
    id: 1,
    template_name: "Template One",
    template_img: templateOneImg,
    template: <Template1 />,
  },
  {
    id: 2,
    template_name: "Template Two",
    template_img: templateTwoImg,
    template: <Template2 />,
  },
];
