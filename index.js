// function MainContent() {
// 	return <h1>I'm Learning React</h1>;
// }

// ReactDOM.render(
// 	<div>
// 		<MainContent />
// 	</div>,
// 	document.getElementById("root")
// );

var newh1 = document.createElement("h1");
newh1.className = "header";
newh1.textContent = "This is a imperative way to program";
document.getElementById("root").append(newh1);
