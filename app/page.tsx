import styles from "./page.module.css";
import Test from "@/components/test/test";
import Clock from "@/components/clock/clock";

export default function Page() {
return(<div     className = {styles.page}>
    <Test />
    <Clock />
    </div>);
}
