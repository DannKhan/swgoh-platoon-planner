# SWGOH Platoon Planner

## Purpose

Automatically assign platoon units for Territory Battles using guild roster data.

---

## Design goals

- Automatic assignment
- Officer-friendly workflow
- Player-friendly reports
- Independent from data source
- Independent from user interface

---

## Data Flow

Data Source
    ↓
Import Adapter
    ↓
Planner Engine
    ↓
Assignments
    ↓
Report Generator

---

## Input

The planner accepts normalized guild data.

The source may be:

- Comlink
- Google Sheets
- JSON
- other sources

---

## Output

The planner produces:

- assignments.json
- HTML reports
- statistics

---

## Core modules

Import Adapter

Transforms external data into internal format.

Planner Engine

Calculates platoon assignments.

Report Generator

Creates reports for officers and players.

---

## Non Goals

The planner is not responsible for:

- downloading data from Comlink
- guild management
- authentication
