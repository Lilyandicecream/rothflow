# RothFlow

RothFlow is an execution-first guide for Backdoor Roth IRA and Mega Backdoor Roth workflows.
It is designed for people whose workplace retirement plan permits after-tax contributions and
Roth in-plan conversions or in-service rollovers.

The core product rule is simple: every workflow gets no more than three primary steps.

## Current prototype

- Backdoor Roth three-step checklist with a prominent pro-rata warning
- Cash-flow-friendly **6 + 10 Starter Plan**
- 2026 contribution-room estimator
- Fidelity call script for Roth in-plan conversion
- Shared Expo codebase for iOS, Android, and web

## Run locally

```bash
npm install
npm run web
```

For iPhone development, install Expo Go or use an iOS development build, then run:

```bash
npm run ios
```

## Project structure

```text
src/app/                 Expo Router screens
src/components/          Reusable product UI
src/config/irs/          Versioned IRS limits
src/config/plan/         Generic workplace-plan assumptions
src/domain/              Pure contribution calculations
```

## 2026 sources

- [IRS Notice 2025-67](https://www.irs.gov/pub/irs-drop/n-25-67.pdf)
- [IRS 2026 retirement limit announcement](https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500)
The participant's current Summary Plan Description and retirement-plan account control when they
conflict with this project. Plan features differ by employer and can change.

## Disclaimer

RothFlow is an independent educational project. It is not affiliated with, endorsed by, or
sponsored by Fidelity Investments, the IRS, or any employer. It does not provide tax, legal,
investment, or financial advice. Users should verify current plan terms and consult qualified
professionals when appropriate.

## License

MIT
