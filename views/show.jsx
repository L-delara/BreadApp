const React = require("react");
const Default = require("./layouts/default");

function Show({ bread }) {
  console.log(bread);
  return (
    <Default>
      <h3>{bread.name}</h3>

      <p>
        This bread
        {bread.hasGluten ? (
          <span> has </span>
        ) : (
          <span> doesn't have </span>
        )}
        gluten
      </p>
      <img src={bread.image} alt={bread.name} />

      <div className="newButton">
        <a href="/breads/">
          <button>Home</button>
        </a>
      </div>
    </Default>
  );
}

module.exports = Show;
