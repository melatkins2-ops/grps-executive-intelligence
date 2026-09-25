GRPS Executive Intelligence - CSA Building Staff Integration

Purpose
Add the CSA building-based staff directory to the existing Executive Intelligence school workflow. Do not create a separate Building Visit site.

Recommended placement
1. School Intelligence: after the executive read / before deeper evidence.
2. Before I Walk In: add a 'CSA staff at this school' section.
3. CSA Connections: use the same data as the staffing/context layer.
4. Executive Memory: do not save routine staff visits; only save meaningful commitments, repeated needs, unresolved questions, or decisions.

Files
- csa-building-staff-data.js: cleaned building-to-CSA-staff data
- csa-building-staff.js: renderer + school selection hook
- csa-building-staff.css: styles
- integration-snippet.html: markup to place in the existing page

Integration hook
When Executive Intelligence selects a school, call:
  window.setCSAVisitSchool(selectedSchoolName);

Commit changes language
Integrate CSA building-based staff directory into Executive Intelligence school and building-visit workflows; add cleaned 2026-27 CSA staff assignments by school and connect the staffing view to Before I Walk In / CSA Connections.
