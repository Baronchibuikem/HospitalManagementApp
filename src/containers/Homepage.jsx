import React from "react";
import HomepageTopView from "../components/HomepageTopView/HomepageTopview";
import OurServices from "../components/OurServices/OurServices";
import TeamPage from "../components/OurTeam/OurTeam";
import EmergencyHotline from "../components/EmergencyHotline/EmergencyHotline";
import TestimonialsMultiPage from "../components/Testimonials/Testimonials";

export default function Homepage() {
  return (
    <div>
      <HomepageTopView />
      <OurServices />
      <TeamPage />
      <EmergencyHotline />
      <TestimonialsMultiPage />
    </div>
  );
}
