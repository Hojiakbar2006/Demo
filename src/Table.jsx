import React from "react";
import "./Table.css";

export function Table() {
  return (
    <div className="card">
      <table>
        <tr>
          <th>
            <div className="tittle">
              <span>PRICING</span> <span>TABLE</span>
            </div>
          </th>
          <th>
            <div className="head">
              <span>BASIC</span>
              <span>FREE</span>
            </div>
          </th>
          <th>
            <div className="head">
              <span>STANDART</span>
              <span>
                $4.99/ <span>month</span>
              </span>
            </div>
          </th>
          <th>
            <div className="head">
              <span>PREMIUM</span>

              <span>
                $9.99/ <span>month</span>
              </span>
            </div>
          </th>
          <th>
            <div className="head">
              <span>SPECIAL</span>
              <span>
                $14.99/ <span>month</span>
              </span>
            </div>
          </th>
        </tr>
        <tr>
          <th>Cloud Disk Storage</th>
          <th>150GB</th>
          <th>3030GB</th>
          <th>1TB</th>
          <th>120GB</th>
        </tr>
        <tr>
          <th>Monthly Bandwith</th>
          <th className="tick">&#10003;</th>
          <th className="tick">&#10003;</th>
          <th className="tick">&#10003;</th>
          <th className="eks">&#x2715;</th>
        </tr>
        <tr>
          <th>Subdomain name</th>
          <th className="tick">&#10003;</th>
          <th className="eks">&#x2715;</th>
          <th className="tick">&#10003;</th>
          <th className="eks">&#x2715;</th>
        </tr>
        <tr>
          <th>Email Address</th>
          <th className="eks">&#x2715;</th>
          <th className="eks">&#x2715;</th>
          <th className="tick">&#10003;</th>
          <th className="tick">&#10003;</th>
        </tr>
        <tr>
          <th>IPS monitoring</th>
          <th className="eks">&#x2715;</th>
          <th className="tick">&#10003;</th>
          <th className="eks">&#x2715;</th>
          <th className="tick">&#10003;</th>
        </tr>
        <tr>
          <th>IP Tracking</th>
          <th className="eks">&#x2715;</th>
          <th className="tick">&#10003;</th>
          <th className="eks">&#x2715;</th>
          <th className="tick">&#10003;</th>
        </tr>
        <tr className="for_btn">
          <th></th>
          <th>SUBSCRIBE</th>
          <th>SUBSCRIBE</th>
          <th>SUBSCRIBE</th>
          <th>SUBSCRIBE</th>
        </tr>
      </table>
    </div>
  );
}
