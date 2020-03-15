import React from "react";
import { render } from "react-dom";
import Header from "./Header.js";

export default Blog => {
  return (
    <div>
      {/* <Header></Header> */}
      {/* <img src={pic} alt="mypic" /> */}
      <h1>About Page</h1>
      <h1>Web Dev Is Fun React App</h1>
      <p>This is React App</p>
      <h2>Projects</h2>
      <ul>
        <li>
          <a
            href="https://iseewavingwaterthroughmywindown.s3.amazonaws.com/index.html"
            target="_blank"
          >
            I see waving water through the window
          </a>
        </li>
        <li>
          <a
            href="https://povilas-angularjs-calc.s3.amazonaws.com/index.html"
            target="_blank"
          >
            Electricity price calc demo (Angular js 2019)
          </a>
        </li>
        <li>
          <a
            href="https://povilas.s3-eu-west-1.amazonaws.com/index.html"
            target="_blank"
          >
            Crypto currency website (03 2019)
          </a>
        </li>
        <li>
          <a
            href="https://productmanangercrudr-20190405020141-hostingbucket-linux.s3.amazonaws.com/index.html"
            target="_blank"
          >
            Products Manager Demo (CRUD app, ReactJs, LocalStorage 2019)
          </a>
        </li>
        <ul>
          <li>future projects todo</li>
          <li>
            <a href="" target="_blank">
              travel Gallery
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              blog
            </a>
          </li>
        </ul>
        <li>
          <a href="#"> Steps: How this app page was developed </a>
          <ol>
            <li>
              <strong>Day 1.</strong>This website developoment started at
              09/03/2020
            </li>
            <li>
              installed react app
              <ul>
                <li>npx create-react-app</li>
              </ul>
            </li>
            <li>Created git repository</li>
            <li>Deployed react app to AWS Aplify</li>
            <li>
              <span>favicon is a small icon visable in webrowser tab</span>
              Created favicon &nbsp;
              <a href="https://favicon.io/favicon-generator/">
                https://favicon.io/favicon-generator/
              </a>
              <br></br>
              <a href="https://www.codepile.net/pile/LmMv8dkG" target="_blank">
                favicon html code snippet&nbsp;
              </a>
              {/* <a href={require("./images/facivon_v1.JPG")} target="_blank">
                  &nbsp; facivon_v1
                </a>
                <a href={require("./images/facivon_v2.JPG")} target="_blank">
                  &nbsp; facivon_v2
                </a> */}
              <li>
                <a
                  href="https://github.com/PovilasU/webdevisfunapp/tree/a042731f8e892a96f5446ade5925fe0c266cf26b"
                  target="_blank"
                >
                  {" "}
                  Git commit at this point:{" "}
                </a>{" "}
              </li>
              <li>
                Refactorign Ract app from scratch. At this point i will not use
                npx create-react-app, so I can fully understand how react app is
                set up. This will take a bit of time, but it is better todo it
                now than later :)
              </li>
              <li>
                todo setting up webpack....{" "}
                <a href="https://webpack.js.org/">link to webpack homepage.</a>
              </li>
              <li>
                <strong>Day 2. (10/03/2020)</strong> To setup webpack took some
                time. I recreated AWS amplify app, because it did not worked
                with old configuration, but now everything up and running.{" "}
                <a href="https://github.com/PovilasU/webdevisfunapp/tree/0373e2bb8583e9a56c2d7e21c1f2a67802cdf3a6">
                  {" "}
                  Link to git at this point
                </a>
                <li>
                  Yesterday I also did some google chrome audit tests. There is
                  obviously needs do some improvements.
                  {/* <a href={require("day2_audit1.JPG")} target="_blank">
                      link to screenshot of audit
                    </a> */}
                  When I was trying to create link to image I got error that
                  image can not be loader <a hfre="">Link to error img</a>
                  Looking for solution... I watch this tutorial to better
                  understand how image loaders works{" "}
                  <a href="https://www.youtube.com/watch?v=CzLiXgRUt4g&t=449s">
                    link to webpack image loaders tutorial part2
                  </a>
                  Installing httml loaders{" "}
                  <code>
                    {" "}
                    npm install --save-dev html-loader html-webpack-plugin
                    file-loader
                  </code>
                </li>
                <li>
                  <code>npm install babel-preset-es2015 --save-dev</code>
                  installing css sass loaders
                  <code>
                    npm install sass-loader node-sass css-loader
                    extract-text-webpack-plugin --save-dev
                  </code>
                </li>
                <li>added css loaders into webpack</li>
                <li>
                  <strong>Day 3 (11/03/2020)</strong> still configuring webpack
                </li>
                <li>
                  adding css loader to webpack also importing styles.css to
                  indext.js{" "}
                  <a href="https://github.com/PovilasU/webdevisfunapp/tree/7683bde0f332c13200b589eab87fa7c243560ed6">
                    {" "}
                    link to git commit
                  </a>
                </li>
                <li>
                  insalling bootstrap{" "}
                  <code>npm install --save-dev bootstrap</code>
                </li>
                <li>
                  installing sass loader
                  <code>
                    npm install sass-loader node-sass webpack --save-dev
                  </code>
                </li>
                <li>using sass instead of css</li>
                <li>
                  Followed configuration from youtube webpack tutorial
                  <a href="https://www.youtube.com/watch?v=qXRGKiHmtF8&list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8&index=6">
                    Cache Busting and Plugins
                  </a>
                </li>
                <li>
                  <code>npm install --save-dev webpack-merge</code>
                </li>
                <li>
                  updated package json start and build commands
                  <code></code>
                </li>
                <li>Webpack: Splitting Dev & Production</li>
                <li>
                  installing html-loader{" "}
                  <code>npm install --save-dev html-loader</code>
                </li>
                <li>
                  installing file loader.{" "}
                  <code>npm install --save-dev file-loader</code>
                </li>
                <li>
                  configuring Html-loader, File-loader, & Clean-webpack{" "}
                  <code>npm install --save-dev clean-webpack-plugin</code>
                </li>
                <li>
                  Adding navigation bar to test vendor js with importing
                  bootstrap{" "}
                </li>
                <li>
                  getting errors while testing menu bar. installing jquery and
                  popper.js <code>npm install --save-dev jquery popper.js</code>
                </li>
                <li>
                  Minimazing css for production
                  <code>
                    npm install --save-dev optimize-css-assets-webpack-plugin
                  </code>
                </li>
                <li>
                  Minimzing js for production
                  <code>
                    {" "}
                    inside webpack minimizer: [new OptimizeCssAssetsPlugin(),
                    new TerserPlugin()]
                  </code>
                </li>
                <li>
                  configuring webpack for Minimizing html, removing spaces,
                  comments and so on ...
                </li>
                <li>Initial webpack configuration is DONE :)!</li>
                <li>
                  Todo: start use lazyload for react components, this will give
                  more speed for app
                </li>
                <li>
                  <b>Day 4 (12/03/2020) nothing</b>
                </li>
                <li>
                  <b>Day 5 (13/03/2020)</b>
                </li>
                <li>
                  Starting to creating page for image gallery "Solar system" and
                  using B-lazy js libary
                </li>
                <li>
                  creating new page for the gallery, removing old nav bar and
                  creating new one from scratch
                </li>
                <li>
                  Implementing navigation using react router{" "}
                  <code>npm install --save --react-router</code>
                </li>
                <li>Created Header component with navigation bar</li>
              </li>
            </li>
          </ol>
        </li>
      </ul>
      <footer>
        <a
          href="https://www.linkedin.com/in/povilas-urbonas-0a6a53a4/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="https://github.com/PovilasU" target="_blank">
          GitHub
        </a>
        <span>2020</span>
      </footer>
    </div>
  );
};
