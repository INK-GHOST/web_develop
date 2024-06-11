const questions = [
    {
        "id": "q1",
        "text": "你最不想和谁有纠缠?"
    },
    {
        "id": "q2",
        "text": "你自己的努力一定会有所回报。"
    },
    {
        "id": "q3",
        "text": "你经常看不惯同事的行为。"
    },
    {
        "id": "q4",
        "text": "在交友时，你并不关心对方的风评。"
    },
    {
        "id": "q5",
        "text": "你在意的人经常伤害你。"
    },
    {
        "id": "q6",
        "text": "你经常做出一些不理智的事。"
    },
    {
        "id": "q7",
        "text": "你的朋友们是真心对待你的。"
    },
    {
        "id": "q8",
        "text": "你不喜欢的人追求你，你会直接拒绝。"
    },
    {
        "id": "q9",
        "text": "你经常在回家之后想要关掉手机，不再接收消息。"
    },
    {
        "id": "q10",
        "text": "你丢失了贵重物品的第一反应是？"
    }

];
module.exports = questions;
document.addEventListener("DOMContentLoaded", () => {
    localStorage.setItem("questions", JSON.stringify(questions));
});
