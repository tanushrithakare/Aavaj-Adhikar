# Aavaj-Adhikar Security Policy

## Authentication Requirements
- JWT tokens with 24h expiry
- Password hashing with bcrypt
- Multi-factor authentication for admin

## Data Encryption
- Encrypt sensitive user data at rest
- SSL/TLS for all communications
- Encrypt voice recordings

## Access Control
- Role-based access (user, admin, moderator)
- API rate limiting
- IP whitelisting for admin panel