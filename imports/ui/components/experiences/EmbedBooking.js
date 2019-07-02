import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
          widget_type: "iframe",
          url: "https://lokally.simplybook.me",
          theme: "air",
          theme_settings: {
            timeline_modern_display: "as_slots",
            timeline_show_end_time: "0",
            sb_base_color: "#6154c1",
            display_item_mode: "block",
            booking_nav_bg_color: "#d1e9c6",
            body_bg_color: "#f2f2f2",
            dark_font_color: "#333333",
            light_font_color: "#ffffff",
            btn_color_1: "#8478dc",
            sb_company_label_color: "#ffffff",
            hide_img_mode: "0",
            show_sidebar: "1",
            sb_busy: "#b3b3b3",
            sb_available: "#dbd6ff"
          },
          timeline: "flexible",
          datepicker: "top_calendar",
          is_rtl: false,
          app_config: { predefined: { provider: "2" } }
        })
      );
    };
  }, []);

  if (bookingWidget === null) return <h1>No Books</h1>;
  console.log(bookingWidget);
  return (
    <iframe width="300px" dangerouslySetInnerHTML={{ __html: bookingWidget }} />
  );
};

export default EmbedBooking;
