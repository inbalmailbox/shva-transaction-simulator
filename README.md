# Shva Transaction Approval Simulator

A full-stack take-home assignment built with React, .NET Web API, and SQL Server.

## Overview

This project simulates transaction approval based on the selected region and submitted time.

A transaction is approved only if the local time in the selected region falls within standard banking hours: **08:00–18:00**.

All submitted transactions are stored in the database, while the UI displays only approved transactions in the bottom section.

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- CSS

### Backend
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server / LocalDB

## Features

- Select a region
- Select a time
- Simulate transaction approval
- Approval decision based on the region's local time zone
- Store both approved and rejected transactions
- Retrieve approved transactions only
- Display approval result in the UI
- Display approved transactions in cards

## Supported Regions

- Israel
- France
- Italy
- Cyprus


## Approval Logic

A transaction is marked as **Approved** only when the calculated local time in the selected region is between:

- **08:00**
- **18:00**

Otherwise, it is marked as **Rejected**.

## Project Structure

```txt
shva-project/
  shva-client/
  Shva.Server/