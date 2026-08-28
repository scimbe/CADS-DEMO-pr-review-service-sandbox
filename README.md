# CADS-DEMO-pr-review-service-sandbox

A throwaway sandbox repo used to prove `CADS-DEMO-codereview`'s live, webhook-triggered
PR-review service end to end (tracking issue:
[CADS-agent-marketplace#24](https://github.com/scimbe/CADS-agent-marketplace/issues/24)).

`lib.js` is the SQL-injection fixture shipped with
[`CADS-DEMO-codereview`](https://github.com/scimbe/CADS-DEMO-codereview)'s own
`fixtures/js-sql-injection/`, reused verbatim (not a new fixture). The demo PR overwrites it with
the fixture's `after.js`, which adds a `lookupUserByEmail` helper built via string-concatenated
SQL — an intentional, contained SQL-injection-shaped diff for the review service to catch.

Not a real application; nothing here should be treated as production code.
