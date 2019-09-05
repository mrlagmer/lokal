import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { colors } from "../colors";
import { Button } from "../Button";

const EmbedBooking = props => {
  const [bookingWidget, setBookingWidget] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//simplybook.me/v2/widget/widget.js";
    script.async = false;
    document.body.appendChild(script);

    script.onload = () => {
      setBookingWidget(
        new SimplybookWidget({
          widget_type: "button",
          url: "https://lokally.simplybook.me",
          theme: "default",
          theme_settings: {
            timeline_show_end_time: "0",
            timeline_modern_display: "as_slots",
            sb_base_color: `${colors.black[5]}`,
            display_item_mode: "block",
            booking_nav_bg_color: `${colors.teal[5]}`,
            body_bg_color: "#f7f7f7",
            dark_font_color: "#494949",
            light_font_color: "#ffffff",
            btn_color_1: `${colors.black[5]}`,
            sb_company_label_color: "#ffffff",
            hide_img_mode: "0",
            show_sidebar: "1",
            sb_busy: "#dad2ce",
            sb_available: "#d3e0f1"
          },
          timeline: "modern_week",
          datepicker: "top_calendar",
          is_rtl: false,
          app_config: {
            predefined: { service: props.bookingId, group_booking: props.pax }
          },
          button_title: "Book now",
          button_background_color: `${colors.black[5]}`,
          button_text_color: "#ffffff",
          button_position: "right",
          button_position_offset: "55%"
        })
      );
    };
  }, [props.pax]);

  const bookMe = () => {
    bookingWidget.showPopupFrame("book");
  };

  if (bookingWidget === null) return <h1>No Books</h1>;

  return (
    <div css="flex-direction: column;">
      <Button onClick={bookMe}>Book Now</Button>
    </div>
  );
};

export default EmbedBooking;
