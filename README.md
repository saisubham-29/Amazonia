<h1>Amazonia</h1>
<p><strong>Delivery Clustering and Routing Dashboard</strong></p>

<p>
Live Application:
<a href="https://amazonia-ld74i57pm-sai-subham-sahus-projects.vercel.app" target="_blank">
https://amazonia-ld74i57pm-sai-subham-sahus-projects.vercel.app
</a>
</p>

<hr/>

<h2>Overview</h2>
<p>
Amazonia is a web-based delivery clustering and routing dashboard designed to optimize
last-mile delivery operations. The system ingests delivery data through CSV uploads,
applies intelligent clustering algorithms, and assigns deliveries to drivers in a
balanced, priority-aware manner.
</p>

<p>
The application is built to operate effectively in environments where GPS coordinate
data may be partially available or entirely absent.
</p>

<h2>Key Features</h2>
<ul>
  <li>CSV-based delivery data ingestion</li>
  <li>Priority-aware delivery processing</li>
  <li>Pincode-based and distance-based clustering</li>
  <li>Automatic driver and vehicle assignment</li>
  <li>Capacity-based load balancing</li>
  <li>Web-based dashboard interface</li>
</ul>

<h2>Clustering Strategies</h2>

<h3>Pincode-Based Clustering (Default)</h3>
<p>
Deliveries are grouped by postal code after being sorted by priority.
This approach ensures predictable geographical grouping without requiring
GPS coordinate data.
</p>

<p><strong>Recommended Use Cases</strong></p>
<ul>
  <li>Large delivery datasets</li>
  <li>Absence of latitude and longitude information</li>
  <li>Urban delivery environments</li>
</ul>

<h3>Distance-Based Clustering</h3>
<p>
When latitude and longitude values are available, deliveries are clustered
based on geographical proximity using the Haversine distance formula.
Clusters are formed within a configurable distance radius.
</p>

<p><strong>Recommended Use Cases</strong></p>
<ul>
  <li>Availability of GPS coordinates</li>
  <li>Fuel and travel time optimization</li>
  <li>Rural or geographically dispersed regions</li>
</ul>

<h2>Priority Handling</h2>
<p>
Deliveries are processed in descending order of priority before clustering
and assignment.
</p>
<ul>
  <li>High priority deliveries are assigned first</li>
  <li>Medium priority deliveries are assigned next (default)</li>
  <li>Low priority deliveries are assigned last</li>
</ul>

<h2>Driver Assignment Rules</h2>
<ul>
  <li>Maximum deliveries per driver: 35</li>
  <li>Drivers are assigned sequentially (Driver 1, Driver 2, etc.)</li>
  <li>Each driver is mapped to a corresponding vehicle</li>
  <li>Delivery identifiers are auto-generated</li>
</ul>

<h2>CSV Integration</h2>

<h3>Input</h3>
<p>
The system supports flexible CSV header formats for delivery address,
customer identifiers, priority, and geographic coordinates.
</p>

<h3>Output</h3>
<pre>
Delivery ID, Address, Customer ID, Pincode, Cylinder Type,
Priority, Latitude, Longitude, Driver, Vehicle
</pre>

<h2>Performance Characteristics</h2>

<table>
  <thead>
    <tr>
      <th>Clustering Method</th>
      <th>Time Complexity</th>
      <th>Space Complexity</th>
      <th>Recommended Dataset Size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pincode-Based</td>
      <td>O(n log n)</td>
      <td>O(n)</td>
      <td>Large datasets</td>
    </tr>
    <tr>
      <td>Distance-Based</td>
      <td>O(n²)</td>
      <td>O(n)</td>
      <td>Moderate datasets</td>
    </tr>
  </tbody>
</table>

<h2>Error Handling</h2>
<ul>
  <li>Deliveries without GPS coordinates are handled gracefully</li>
  <li>Invalid or missing priority values default to Medium</li>
  <li>Empty datasets return empty results without system failure</li>
</ul>

<h2>Future Enhancements</h2>
<ul>
  <li>Dynamic clustering radius based on delivery density</li>
  <li>Traffic-aware clustering and routing</li>
  <li>Multi-objective optimization</li>
  <li>Machine learning-based clustering optimization</li>
  <li>Intra-cluster route sequencing</li>
</ul>

<hr/>

<p>
Amazonia provides a scalable foundation for modern logistics and delivery
optimization systems and can be extended to support advanced routing,
analytics, and automation requirements.
</p>
