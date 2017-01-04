var React = require('react');
var {Link} = require('react-router');
var Example = (props)=>{
  return (
    <div>
        <h1 className="text-center page-title">Example</h1>
        <p>Here are few example location to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Chennai'>Chennai,TN,India</Link>
          </li>
          <li>
              <Link to='/?location=Faizabad'>Faizabad,UP,India</Link>
          </li>
        </ol>
    </div>
  );
}

module.exports = Example;
