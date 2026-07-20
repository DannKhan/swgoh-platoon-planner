# Architecture Principles

## Modular

Every feature is implemented as an independent module.

## Shared Data Model

Every module uses the same internal objects.

## Read Only

The application never modifies game accounts.

## Adapter Based

Every external provider is isolated through an importer.

## Explainable

Every recommendation should be reproducible and explainable.

## Extensible

New modules should be added without modifying existing ones.
