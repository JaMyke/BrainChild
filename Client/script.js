async function submitIdea() {
  const ideaText = document.getElementById("ideaInput").value;

  const res = await fetch("http://localhost:5000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ideaText: ideaText
    })
  });

  const data = await res.text();

  document.getElementById("response").innerText = data;
}