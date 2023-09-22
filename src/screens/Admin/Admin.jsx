import React from "react";
import { Notification } from "../../icons/Notification";
import "./style.css";

export const Admin = () => {
  return (
    <div className="admin">
      <div className="div">
        <div className="overlap">
          <div className="active" />
          <div className="sidebar">
            <div className="frame">
              <div className="group">
                <div className="text-wrapper">Dashboard</div>
                <img className="img" alt="Element" src="/img/element-3.svg" />
              </div>
              <div className="group-2">
                <div className="text-wrapper-2">Lab Test</div>
                <img className="img" alt="Clipboard tick" src="/img/clipboard-tick.svg" />
              </div>
              <div className="group-3">
                <div className="text-wrapper-3">Appointment</div>
                <img className="img" alt="Calendar tick" src="/img/calendar-tick.svg" />
              </div>
              <div className="group-4">
                <div className="text-wrapper-3">Medicine Order</div>
                <img className="img" alt="Bag tick" src="/img/bag-tick-2.svg" />
              </div>
              <div className="group-5">
                <div className="text-wrapper-4">Message</div>
                <img className="img" alt="Sms" src="/img/sms.svg" />
              </div>
              <div className="group-6">
                <div className="text-wrapper-3">Payment</div>
                <img className="img" alt="Empty wallet" src="/img/empty-wallet.svg" />
              </div>
              <div className="group-7">
                <div className="text-wrapper-3">Settings</div>
                <img className="img" alt="Setting" src="/img/setting-2.svg" />
              </div>
            </div>
            <div className="group-8">
              <div className="text-wrapper-3">Help</div>
              <img className="img" alt="Question" src="/img/question.svg" />
            </div>
          </div>
          <div className="logo">
            <div className="text-wrapper-5">Guvi Sales</div>
          </div>
        </div>
        <div className="top-header">
          <div className="search-bar">
            <div className="overlap-group">
              <img className="search-normal" alt="Search normal" src="/img/search-normal.svg" />
              <div className="text-wrapper-6">Search</div>
            </div>
          </div>
          <div className="notification-wrapper">
            <Notification className="notification-instance" />
          </div>
        </div>
        <div className="sales-info-search">
          <div className="text-wrapper-7">Sales Information</div>
          <div className="frame-2">
            <div className="group-9">
              <button className="button">
                <div className="text-wrapper-8">Enter Costumer Name</div>
              </button>
              <div className="text-wrapper-9">Customer</div>
            </div>
            <div className="group-9">
              <button className="button">
                <div className="text-wrapper-8">Enter Invoice ID</div>
              </button>
              <div className="text-wrapper-9">Invoice ID</div>
            </div>
            <div className="group-9">
              <button className="button">
                <div className="text-wrapper-8">Start Date</div>
              </button>
              <div className="text-wrapper-9">Start Date</div>
            </div>
            <div className="group-10">
              <button className="button">
                <div className="text-wrapper-8">End Date</div>
              </button>
              <div className="text-wrapper-9">End Date</div>
            </div>
          </div>
        </div>
        <div className="table">
          <div className="frame-3">
            <div className="div-2">
              <div className="text-wrapper-10">Invoice ID</div>
              <div className="text-wrapper-11">Date</div>
              <div className="text-wrapper-12">Customer</div>
              <div className="text-wrapper-13">Payable Amount</div>
              <div className="text-wrapper-14">Paid Amount</div>
              <div className="text-wrapper-15">Due</div>
              <img className="vector" alt="Vector" src="/img/vector-114.svg" />
              <img className="minus-square" alt="Minus square" src="/img/minus-square.svg" />
            </div>
            <div className="div-2">
              <div className="text-wrapper-16">#AHGA68</div>
              <div className="text-wrapper-17">23/09/2022</div>
              <div className="text-wrapper-18">Jacob Marcus</div>
              <div className="text-wrapper-19">$100</div>
              <div className="text-wrapper-20">$000</div>
              <div className="text-wrapper-21">$000</div>
              <img className="vector" alt="Vector" src="/img/vector-114.svg" />
              <img className="minus-square" alt="Minus square" src="/img/minus-square.svg" />
            </div>
            <div className="div-2">
              <div className="text-wrapper-16">#AHGA68</div>
              <div className="text-wrapper-17">23/09/2022</div>
              <div className="text-wrapper-18">Jacob Marcus</div>
              <div className="text-wrapper-19">$100</div>
              <div className="text-wrapper-20">$000</div>
              <div className="text-wrapper-21">$000</div>
              <img className="vector" alt="Vector" src="/img/vector-114.svg" />
              <img className="minus-square" alt="Minus square" src="/img/minus-square.svg" />
            </div>
            <div className="div-2">
              <div className="text-wrapper-16">#AHGA68</div>
              <div className="text-wrapper-17">23/09/2022</div>
              <div className="text-wrapper-18">Jacob Marcus</div>
              <div className="text-wrapper-19">$100</div>
              <div className="text-wrapper-20">$000</div>
              <div className="text-wrapper-21">$000</div>
              <img className="vector" alt="Vector" src="/img/vector-114.svg" />
              <img className="minus-square" alt="Minus square" src="/img/minus-square.svg" />
            </div>
            <div className="div-2">
              <div className="text-wrapper-16">#AHGA68</div>
              <div className="text-wrapper-17">23/09/2022</div>
              <div className="text-wrapper-18">Jacob Marcus</div>
              <div className="text-wrapper-19">$100</div>
              <div className="text-wrapper-20">$000</div>
              <div className="text-wrapper-21">$000</div>
              <img className="vector" alt="Vector" src="/img/vector-114.svg" />
              <img className="minus-square" alt="Minus square" src="/img/minus-square.svg" />
            </div>
            <div className="div-2">
              <div className="text-wrapper-16">#AHGA68</div>
              <div className="text-wrapper-17">23/09/2022</div>
              <div className="text-wrapper-18">Jacob Marcus</div>
              <div className="text-wrapper-19">$100</div>
              <div className="text-wrapper-20">$000</div>
              <div className="text-wrapper-21">$000</div>
              <img className="vector" alt="Vector" src="/img/vector-114.svg" />
              <img className="minus-square" alt="Minus square" src="/img/minus-square.svg" />
            </div>
            <div className="div-2">
              <div className="text-wrapper-16">#AHGA68</div>
              <div className="text-wrapper-17">23/09/2022</div>
              <div className="text-wrapper-18">Jacob Marcus</div>
              <div className="text-wrapper-19">$100</div>
              <div className="text-wrapper-20">$000</div>
              <div className="text-wrapper-21">$000</div>
              <img className="vector" alt="Vector" src="/img/vector-114.svg" />
              <img className="minus-square" alt="Minus square" src="/img/minus-square.svg" />
            </div>
            <div className="div-2">
              <div className="text-wrapper-16">#AHGA68</div>
              <div className="text-wrapper-17">23/09/2022</div>
              <div className="text-wrapper-18">Jacob Marcus</div>
              <div className="text-wrapper-19">$100</div>
              <div className="text-wrapper-20">$000</div>
              <div className="text-wrapper-21">$000</div>
              <img className="vector" alt="Vector" src="/img/vector-114.svg" />
              <img className="minus-square" alt="Minus square" src="/img/minus-square.svg" />
            </div>
            <div className="div-2">
              <div className="text-wrapper-16">#AHGA68</div>
              <div className="text-wrapper-17">23/09/2022</div>
              <div className="text-wrapper-18">Jacob Marcus</div>
              <div className="text-wrapper-19">$100</div>
              <div className="text-wrapper-20">$000</div>
              <div className="text-wrapper-21">$000</div>
              <img className="vector" alt="Vector" src="/img/vector-114.svg" />
              <img className="minus-square" alt="Minus square" src="/img/minus-square.svg" />
            </div>
            <div className="div-2">
              <div className="text-wrapper-16">#AHGA68</div>
              <div className="text-wrapper-17">23/09/2022</div>
              <div className="text-wrapper-18">Jacob Marcus</div>
              <div className="text-wrapper-19">$100</div>
              <div className="text-wrapper-20">$000</div>
              <div className="text-wrapper-21">$000</div>
              <img className="vector" alt="Vector" src="/img/vector-114.svg" />
              <img className="minus-square" alt="Minus square" src="/img/minus-square.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
