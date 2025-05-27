import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 4, md: 8 },
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        position: "relative",
        width: "100%",
      }}
    >
      <Container maxWidth="xl" sx={{ px: 0 }}>
        {/* Our Projects Section */}
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: 4,
            p: { xs: 4, md: 8 },
            position: "relative",
            minHeight: "80vh",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              transform: "translateY(-5px)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 600,
                  color: "#1a1a1a",
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Our Projects — Driving Real Impact
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  color: "#666",
                  maxWidth: 600,
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                From stealth-mode ventures to public tools — every project
                serves a purpose rooted in humanity.
              </Typography>
            </Box>

            {/* Projects Grid */}
            <Grid container spacing={4}>
              {/* AI Education Platform */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#ffffff",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    {/* Project Image */}
                    <Box
                      sx={{
                        height: 200,
                        backgroundColor: "#f8f9fa",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover img": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      {/* AI Education Image */}
                      <img
                        src="/images/aiedu.png"
                        alt="AI Education Platform"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          transform: "scale(1.1)",
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          borderRadius: "8px",
                        }}
                        onError={(e) => {
                          // Fallback to SVG if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      
                      {/* Fallback SVG (hidden by default) */}
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#4f46e5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ 
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          display: 'none',
                        }}
                      >
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                        <path d="M7 8h10"/>
                        <path d="M7 12h6"/>
                      </svg>

                      

                      {/* Floating elements */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 20,
                          right: 20,
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          backgroundColor: "#e0e7ff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          animation: "float 3s ease-in-out infinite",
                          "@keyframes float": {
                            "0%, 100%": { transform: "translateY(0px)" },
                            "50%": { transform: "translateY(-10px)" },
                          },
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#4f46e5"
                        >
                          <circle cx="12" cy="12" r="3" />
                          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
                        </svg>
                      </Box>
                    </Box>

                    {/* Project Content */}
                    <Box sx={{ p: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "1.4rem",
                          fontWeight: 600,
                          color: "#1a1a1a",
                          mb: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#4f46e5",
                          },
                        }}
                      >
                        AI Education Platform
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          lineHeight: 1.6,
                          fontSize: "0.95rem",
                        }}
                      >
                        Free online courses and resources teaching AI skills to
                        underserved communities worldwide.
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              {/* Youth Employment Network */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#ffffff",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    {/* Project Image */}
                    <Box
                      sx={{
                        height: 200,
                        backgroundColor: "#f0f9ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover svg": {
                          transform: "scale(1.1) rotate(-5deg)",
                        },
                      }}
                    >
                      {/* Youth Employment SVG */}
                      <img
                        src="/images/youth.png"
                        alt="Youth Employment Network"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          transform: "scale(1.0)",
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          borderRadius: "8px",
                        }}
                        onError={(e) => {
                          // Fallback to SVG if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      
                      {/* Fallback SVG (hidden by default) */}
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0ea5e9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          display: 'none',
                        }}
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>

                      {/* Network connections */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 30,
                          left: 30,
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          backgroundColor: "#0ea5e9",
                          animation: "pulse 2s ease-in-out infinite",
                          "@keyframes pulse": {
                            "0%, 100%": { transform: "scale(1)", opacity: 1 },
                            "50%": { transform: "scale(1.2)", opacity: 0.7 },
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 40,
                          right: 40,
                          width: 15,
                          height: 15,
                          borderRadius: "50%",
                          backgroundColor: "#38bdf8",
                          animation: "pulse 2s ease-in-out infinite 0.5s",
                        }}
                      />
                    </Box>

                    {/* Project Content */}
                    <Box sx={{ p: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "1.4rem",
                          fontWeight: 600,
                          color: "#1a1a1a",
                          mb: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#0ea5e9",
                          },
                        }}
                      >
                        Youth Employment Network
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          lineHeight: 1.6,
                          fontSize: "0.95rem",
                        }}
                      >
                        Connecting talented young professionals with
                        opportunities in emerging technology sectors.
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              {/* Community Innovation Hub */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#ffffff",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    {/* Stealth Mode Badge */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 15,
                        right: 15,
                        backgroundColor: "#8b5cf6",
                        color: "white",
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        zIndex: 2,
                        animation: "glow 2s ease-in-out infinite alternate",
                        "@keyframes glow": {
                          "0%": {
                            boxShadow: "0 0 5px rgba(139, 92, 246, 0.5)",
                          },
                          "100%": {
                            boxShadow: "0 0 20px rgba(139, 92, 246, 0.8)",
                          },
                        },
                      }}
                    >
                      Stealth Mode
                    </Box>

                    {/* Project Image */}
                    <Box
                      sx={{
                        height: 200,
                        backgroundColor: "#faf5ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover svg": {
                          transform: "scale(1.1) rotate(10deg)",
                        },
                      }}
                    >
                      {/* Innovation Hub SVG */}
                      <img
                        src="/images/stealth.png"
                        alt="Community Innovation Hub"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          transform: "scale(1.1)",
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          borderRadius: "8px",
                        }}
                        onError={(e) => {
                          // Fallback to SVG if image fails to load
                          console.log('Image failed to load:', e.target.src);
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      
                      
                      {/* Fallback SVG (hidden by default) */}
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          display: 'none',
                        }}
                      >
                        <polygon points="12,2 2,7 12,12 22,7 12,2" />
                        <polyline points="2,17 12,22 22,17" />
                        <polyline points="2,12 12,17 22,12" />
                      </svg>

                      {/* Innovation particles */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 25,
                          left: 25,
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: "#a855f7",
                          animation: "sparkle 1.5s ease-in-out infinite",
                          "@keyframes sparkle": {
                            "0%, 100%": { transform: "scale(0)", opacity: 0 },
                            "50%": { transform: "scale(1)", opacity: 1 },
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 35,
                          right: 35,
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: "#c084fc",
                          animation: "sparkle 1.5s ease-in-out infinite 0.7s",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 50,
                          right: 25,
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          backgroundColor: "#ddd6fe",
                          animation: "sparkle 1.5s ease-in-out infinite 1.2s",
                        }}
                      />
                    </Box>

                    {/* Project Content */}
                    <Box sx={{ p: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "1.4rem",
                          fontWeight: 600,
                          color: "#1a1a1a",
                          mb: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#8b5cf6",
                          },
                        }}
                      >
                        Community Innovation Hub
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          lineHeight: 1.6,
                          fontSize: "0.95rem",
                        }}
                      >
                        A stealth project creating physical and virtual spaces
                        for collaborative problem-solving.
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            {/* Call to Action */}
            <Box sx={{ textAlign: "center", mt: 8 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    fontWeight: 500,
                    color: "#4a5568",
                    mb: 4,
                    lineHeight: 1.3,
                  }}
                >
                  Want to Collaborate or Contribute?
                </Typography>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    component="button"
                    onClick={() => {
                      const contactElement = document.querySelector("#contact");
                      if (contactElement) {
                        contactElement.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    sx={{
                      backgroundColor: "#000",
                      color: "white",
                      px: 6,
                      py: 2,
                      borderRadius: 3,
                      border: "none",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 2,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#333",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    Contact Us
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7,7 17,7 17,17" />
                    </svg>
                  </Box>
                </motion.div>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
