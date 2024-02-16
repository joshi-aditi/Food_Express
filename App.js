const heading = React.createElement("h1",{id:"heading", xyz:"abc"},"Hello World From React!");


//nested structure and siblings...
const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"H1 of C1"),React.createElement("h2",{},"H2 of C1")]
),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"H1 of C2"),React.createElement("h2",{},"H2 of C2")]
)
]
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);