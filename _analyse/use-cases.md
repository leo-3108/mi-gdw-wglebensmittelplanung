**Übersicht:**

- [Use Case 1: Bearbeitung der Einkaufsliste](#use-case-1-bearbeitung-der-einkaufsliste)
- [Use Case 2: Abarbeitung der Einkaufsliste](#use-case-2-abarbeitung-der-einkaufsliste)

***

## Use Case 1: Bearbeitung der Einkaufsliste

- **Goal in Context:** Nutzer bearbeitet eine Einkaufsliste, was zu eventuellen Benachrichtigungen führt. Die anschließenden Ausgaben werden berechnet und auf die Mitbewohner aufgeteilt.
- **Preconditions:** Wir kennen die Anzahl der Mitbewohner, Einkaufsmöglichkeiten in der Nähe und können diese kategorisieren.
- **Success End Condition:** Nutzer haben eine organisierte Einkaufsliste und die Ausgaben werden gerecht aufgeteilt.
- **Failed End Condition:** 
- **Primary Actor:** WG-Mitbewohner
- **Trigger:** Nutzer erstellt eine Einkaufsliste.

### Main Success Szenario
| #   | Beschreibung |
|:---:|--------------|
| 1.  | Ein Mitbewohner erstellt eine Einkaufliste. |
| 3.  |--------------|
| 4.  |--------------|
| 5.  |--------------|
| 6.  |--------------|

### Erweiterungen
| #   | Beschreibung |
|:---:|--------------|
|   | |

### Sub-Variationen
| #   | Erweiterung |
|:---:|--------------|
|   |  |
***

## Use Case 2: Abarbeitung der Einkaufsliste

- **Goal in Context:** <a longer statement of the goal in context if needed>
- **Scope:** <what system is being considered black box under design>
- **Level:** <one of: Summary, Primary task, Subfunction>
- **Preconditions:** <what we expect is already the state of the world>
- **Success End Condition:** <the state of the world upon successful completion>
- **Failed End Condition:** <the state of the world if goal abandoned>
- **Primary Actor:** <a role name for the primary actor, or description>
- **Trigger:** <the action upon the system that starts the use case, may be time event>

### Main Success Szenario
| #   | Beschreibung |
|:---:|--------------|
| <step #> | <action description> |
| <step #> | <action description> |

### Erweiterungen
| #   | Extension |
|:---:|--------------|
| <step #> | <action description> |
| <step #> | <action description> |

### Sub-Variationen
| #   | Variationen |
|:---:|--------------|
| <step #> | <list of sub-variations> |
| <step #> | <list of sub-variations> |

**Template (nach Cockburn):**

```
## Use Case <#>: <the name is the goal as a short active verb phrase>

- **Goal in Context:** <a longer statement of the goal in context if needed>
- **Scope:** <what system is being considered black box under design>
- **Level:** <one of: Summary, Primary task, Subfunction>
- **Preconditions:** <what we expect is already the state of the world>
- **Success End Condition:** <the state of the world upon successful completion>
- **Failed End Condition:** <the state of the world if goal abandoned>
- **Primary Actor:** <a role name for the primary actor, or description>
- **Trigger:** <the action upon the system that starts the use case, may be time event>

### Main Success Szenario
<put here the steps of the scenario from trigger to goal delivery, and any cleanup after>
| #   | Beschreibung |
|:---:|--------------|
| <step #> | <action description> |
| <step #> | <action description> |

### Erweiterungen
<put here there extensions, one at a time, each refering to the step of the main scenario>
| #   | Extension |
|:---:|--------------|
| <step #> | <action description> |
| <step #> | <action description> |

### Sub-Variationen
<put here the sub-variations that will cause eventual bifurcation in the scenario>
| #   | Variationen |
|:---:|--------------|
| <step #> | <list of sub-variations> |
| <step #> | <list of sub-variations> |

***

```
