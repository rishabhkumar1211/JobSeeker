import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Box,
  CircularProgress,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import MailIcon from "@mui/icons-material/Mail";
import "../styles/DashboardHeader.scss";
import Private from "../public/private.png";

const DashboardCard = () => {
  return (
    <Card className="dashboard-card">
      <CardContent>
        {/* Welcome Section */}
        <Typography variant="h5" className="welcome-text">
          Welcome back, Lewis
        </Typography>
        <Typography variant="body2" className="subtext">
          Here's what's changed in your talent hunt journey! You can evaluate
          candidates, attract job seekers, and redefine the candidate experience
          for a new era of your workspace from here.
        </Typography>
        {/* First Row - Stats and Circular Progress */}
        <Grid container spacing={2} className="first-row">
          {/* Total Jobs */}
          <Grid item xs={5}>
            <Box
              className="stat-box"
              sx={{ display: "flex", alignItems: "center", gap: 5 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar className="stat-icon" sx={{ bgcolor: "#0D47A1" }}>
                  <WorkIcon />
                </Avatar>
                <div className="stat-text">
                  <Typography variant="h6">15</Typography>
                  <Typography variant="body2">Total Jobs</Typography>
                </div>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar className="stat-icon" sx={{ bgcolor: "#8D6E63" }}>
                  <GroupIcon />
                </Avatar>
                <div className="stat-text">
                  <Typography variant="h6">1500</Typography>
                  <Typography variant="body2">Applicants</Typography>
                </div>
              </Box>
            </Box>
            <Box className="stat-box">
              <Avatar className="stat-icon" sx={{ bgcolor: "#00C853" }}>
                <MailIcon />
              </Avatar>
              <div className="stat-text" style={{ marginTop: "2rem" }}>
                <Typography variant="h6">20,000</Typography>
                <Typography variant="body2">AI Credits</Typography>
              </div>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Card
              className="private-job-board-card"
              style={{ height: "245px" }}
            >
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box className="progress-box" style={{ textAlign: "center" }}>
                  <CircularProgress
                    variant="determinate"
                    value={70}
                    size={80}
                    className="progress-chart"
                  />
                  <div className="progress-text">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#3f51b5", // Color for Total Applicants
                          marginRight: "8px",
                        }}
                      ></div>
                      <Typography variant="body2">Total Applicants</Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "4px",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "white", // Color for Not Reviewed
                          marginRight: "8px",
                        }}
                      ></div>
                      <Typography variant="body2">Not Reviewed</Typography>
                    </div>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Private Job Board */}
          <Grid item xs={3}>
            <Card className="private-job-board-card">
              <CardContent>
                <Box className="private-job-board-content">
                  <img src={Private} alt="Private Job Board" />
                  <Typography variant="body2">Private Job Board</Typography>
                  <Typography variant="caption">
                    Your private job postings will appear here, accessible to
                    the public via a company-specific URL.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
