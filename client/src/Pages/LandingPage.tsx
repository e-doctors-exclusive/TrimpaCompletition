import "../styles/landing.css";
import React from "react";
import Navbar from "../Components/Navbar";
import TopHeader from "../Components/TopHeader";

function LandingPage() {

  return (
    <div>
      <TopHeader />
      <Navbar />
      <div className="landing">
        <div className="landing-forall">
          <div className="landing-title">
            <h1>It's more than just a trip</h1>
          </div>

          <div className="landing-inputs">
            <div className="landing-input">
              <i className="fa-solid fa-plane-departure"></i>
              <select name="from" id="" placeholder="where are you going">
                <option value="">where are you going</option>
              </select>
            </div>

            <div className="landing-input">
              <i className="fa-solid fa-plane-arrival"></i>
              <select name="from" id="" placeholder="where are you going">
                <option value="">where are you comming</option>
              </select>
            </div>

            <div className="landing-input">
              <input type="date" placeholder="whene ?" />
            </div>

            <div className="landing-input">
              <i className="fa-solid fa-user"></i>
              <input type="number" placeholder="Adults" />
            </div>
            <div>
              <button className="landing-boutton">search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-one">
        <div className="land-container">
          <div className="landing-header">
            <h5>
              Find your next adventure with these <span>flight deals</span>
            </h5>
          </div>
          <div className="landing-cards">
            <div className="land-card">
              <img
                src="https://s3-alpha-sig.figma.com/img/8125/5891/ea1583d20a3fb02917ad104af6587f3e?Expires=1698019200&Signature=oYJoSEBFi-6b3a12UfTTG73EIqaIssMbnO258e~76qXs-vq4p5byGYmQigT-eL7zJiWYI9LkLEoA0chllUF8Z63NplN~F6ziuEzHANGYgQa7XCqgXDzuVFVX904qnBk1oYG~81ACMX5tOkMrivx1pYmMzaFMdcpnWBVa4iz3GCrQYcGLK2j9SvF27i0pcVukzr1t~31YT~3Jovu8xjkF~hxsWjFyn5lXfGO1FjK8j3WrXvaNQWQGfSrq3d69vYxdsNct3ILOyY5TvZARFuJUbMlsbIrxkeK~7eLPd~sWGw6a9Q-FnFyOeefaIjOdWqexseAeEIVKp4hci4MrU-6j5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <div className="card-info">
                <div className="smalltitle">
                  <div className="text-land">
                    The Bund, <span>Shanghai</span>
                  </div>
                  <div className="price-land">$598</div>
                </div>
                <span>China’s most international city</span>
              </div>
            </div>
            <div className="land-card">
              <img
                src="https://s3-alpha-sig.figma.com/img/8125/5891/ea1583d20a3fb02917ad104af6587f3e?Expires=1698019200&Signature=oYJoSEBFi-6b3a12UfTTG73EIqaIssMbnO258e~76qXs-vq4p5byGYmQigT-eL7zJiWYI9LkLEoA0chllUF8Z63NplN~F6ziuEzHANGYgQa7XCqgXDzuVFVX904qnBk1oYG~81ACMX5tOkMrivx1pYmMzaFMdcpnWBVa4iz3GCrQYcGLK2j9SvF27i0pcVukzr1t~31YT~3Jovu8xjkF~hxsWjFyn5lXfGO1FjK8j3WrXvaNQWQGfSrq3d69vYxdsNct3ILOyY5TvZARFuJUbMlsbIrxkeK~7eLPd~sWGw6a9Q-FnFyOeefaIjOdWqexseAeEIVKp4hci4MrU-6j5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <div className="card-info">
                <div className="smalltitle">
                  <div className="text-land">
                    The Bund, <span>Shanghai</span>
                  </div>
                  <div className="price-land">$598</div>
                </div>
                <span>China’s most international city</span>
              </div>
            </div>
            <div className="land-card">
              <img
                src="https://s3-alpha-sig.figma.com/img/ca89/1425/cf94faaf7d2ea932cf5ce939144da65c?Expires=1698019200&Signature=KMmbaz7MHZA0OpSxV9zI0-VK8zqVjBR3D9Xrc-DfRWEurXLYgwcndrWb0lhdoCftXNmfz9vnfmRIS-R16miIPu9H9pQhLYAKl83Xuzt8qK4nYU6Y6XI1ZqUv7YCnxcZ0MNiMV4KMIC9hD~MNCxXxFkdGK1y~RsnBD8Ezm2JJjVE4Mtx1eZvW6KaAuMlkO~YDA125RgxjIGQhZvTYIppDjnri~ElMiCSp6psZxagcZdpHWVKC-YhmEXGrU1uC2TCb5DOHZ4ZlnZfhRgOU1mklWF0GRJMAV8uWJekrbNY~b901GKH-~gEapagaTtX8rmTt10qb9wx8BmMVnghpD0SRKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <div className="card-info">
                <div className="smalltitle">
                  <div className="text-land">
                    Sydney Opera House, <span>Sydney</span>
                  </div>
                  <div className="price-land">$981</div>
                </div>
                <span>Take a stroll along the famous harbor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
