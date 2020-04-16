import React from "react";

import styled from "styled-components";



export default function({ icon: MainIcon, data = []}) {
  return (
    <Timeline>
      <section className="timeline">
        <div className="container">
          <div className="timeline-item timeline-icon">
            <div className="timeline-img">{MainIcon && <MainIcon />}</div>

            <div className="timeline-helper" />
          </div>

          {data.map(item => (
            
            <div className="timeline-item">
              <div className="timeline-img" />

              <div className="timeline-content">
                <div className="date">{item.period}</div>
                <h1 className="heading">{item.heading}</h1>
                <div className="subheading">{item.subheading}</div>
                <p className="paragraph">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Timeline>
  );
}


// styles
export const Timeline = styled.div`
  color: #333;
  /* margin-top: 120px; */

  .timeline {
    position: relative;
    max-width: ${({ theme: { containerMaxWidth } }) => containerMaxWidth};
    background: #e2e2e2;
    margin: 0 auto;
    overflow: hidden;
    padding: 15px;

    &::before {
      content: "";
      background: ${({ theme: { colors } }) => colors.green};
      width: 5px;
      height: 95%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      /* text-aligh */
    }
  }

  .date {
    position: absolute;
    width: 300px;
    left: 130%;
    font-size: 18px;

    text-align: left;
    margin-bottom: 20px;

  }

  .timeline-item {
    width: 100%;
    margin-bottom: 70px;

    &:nth-child(even) {
      .timeline-content {
        float: right;
        padding: 40px 30px 10px 30px;
        text-align:left;

        &::after {
          content: "";
          position: absolute;
          border-style: solid;
          width: 0;
          height: 0;
          top: 40px;
          left: -20px;
          border-width: 15px 20px 15px 0;
          border-color: transparent #f5f5f5 transparent transparent;
        }
        .date{
          left: auto;
          right: 130%;
          text-align:right;
        }
      }
    }

    &.timeline-icon {
      .timeline-helper {
        height: 150px;
      }
      .timeline-img {
        top: -10px;
        background: #e5e5e5;
        border: 1px solid ${({ theme: { colors } }) => colors.green};
        width: 64px;
        line-height: 64px;
        height: 64px;
        margin-left: -32px;
        text-align: center;
        font-size: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme: { colors } }) => colors.green};
      }
    }
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }

  .timeline-content {
    position: relative;
    width: 44%;
    padding: 40px 30px 10px 30px;
    border-radius: 4px;
      background: #f0f0f0;

    text-align: right;

    &:hover {
      box-shadow: 0 0 6px 3px rgba(62, 62, 62, 0.5);
      background: white;
    }
    transition: all 0.3s;

    &::after {
      content: "";
      position: absolute;
      border-style: solid;
      width: 0;
      height: 0;
      top: 40px;
      right: -20px;
      border-width: 15px 0 15px 20px;
      border-color: transparent transparent transparent #f5f5f5;
    }

    .heading {
      margin-top: 10px;
      margin-bottom: 20px;
      font-weight: 400;
      font-size: 20px;
    }

    .subheading {
      margin-bottom: 20px;
      font-weight: 16px;
      color: ${({ theme: { colors } }) => colors.green};
    }

    .paragraph {
      line-height: 1.8em;
      font-size: 15px;
    }
  }

  .timeline-img {
    width: 50px;
    height: 50px;
    background: ${({ theme: { colors } }) => colors.green};
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-top: 25px;
    margin-left: -25px;
  }

  @media screen and (max-width: 768px) {
    .timeline {
      &::before {
        left: 50px;
      }

      .date {
        text-align: left;
        position: static;
      }

      .timeline-img {
        left: 50px;
      }

      .timeline-content {
        max-width: 100%;
        width: auto;
        margin-left: 90px;
        text-align: left
      }

      .timeline-item {
        &:nth-child(even) {
          .timeline-content {
            float: none;
          }
          .date{
            text-align: left;
          }
        }

        &:nth-child(odd) {
          .timeline-content {
            &::after {
              content: "";
              position: absolute;
              border-style: solid;
              width: 0;
              height: 0;
              top: 40px;
              left: -20px;
              border-width: 15px 20px 15px 0;
              border-color: transparent #f5f5f5 transparent transparent;
            }
          }
        }
      }
    }
  }
`;
