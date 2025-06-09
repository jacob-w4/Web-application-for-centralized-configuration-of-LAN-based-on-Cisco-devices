# Web application for centralized configuration of LAN based on Cisco devices

The aim of this engineering project is to create a functional web application that allows users to build a computer network structure, add Cisco devices (e.g., routers and switches), and remotely configure them via a web-based GUI.

The application supports both basic (e.g., interface/port configuration, VLAN creation) and advanced functionalities (e.g., ACL management, Port Security, DHCP, NAT, EtherChannel). Additionally, it allows users to perform configuration backups, restore configurations, and run diagnostic tests (ping, SSH/Telnet access check).

---

## Features

- User authentication using JWT (JSON Web Tokens)
- Role-based access control (admin and regular users)
- Adding, editing and managing Cisco devices
- Remote configuration via SSH/Telnet (Netmiko)
- Support for:
  - Interface and port configuration
  - VLANs
  - Static routing
  - ACLs (Access Control Lists)
  - Port Security
  - DHCP and NAT
  - EtherChannel
- Configuration backup and restore
- Network diagnostics (ping, SSH/Telnet tests)

---

## Technologies used

- **Backend**: Python, Flask, SQLAlchemy, Netmiko, PyJWT  
- **Frontend**: HTML, CSS, JavaScript, Bootstrap  
- **Database**: MySQL  
- **Environment management**: config.py with Dev/Live classes  

---

## Repository contents

- `app/` – main Flask application directory  
  - `models/` – ORM model definitions (e.g., User, Device)  
  - `routes/` – route handlers (API endpoints)  
  - `utils/` – helper functions (e.g., JWT handling, Netmiko utilities)  
  - `static/` – static files (JS, CSS, images)  
  - `__init__.py` – application factory and blueprint registration  

- `run.py` – entry point to run the Flask server  
- `config.py` – environment-specific configuration (Dev, Live)  
- `requirements.txt` – Python dependencies list  

---

## Getting started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/jacob-w4/Web-application-for-centralized-configuration-of-LAN-based-on-Cisco-devices.git
   cd Web-application-for-centralized-configuration-of-LAN-based-on-Cisco-devices
   ```



