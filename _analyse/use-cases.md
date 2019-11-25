**Übersicht:**

- [Use Case 1: Bearbeitung der Einkaufsliste](#use-case-1-bearbeitung-der-einkaufsliste)

***

## Use Case 1: Hinzufügen der Einkaufsliste

- **Preconditions:** Es liegt eine Einkaufsliste vor.
- **Success End Condition:** Der Nutzer hat Produkte hinzugefügt. 
- **Failed End Condition:** Die Einkaufsliste ist leer.
- **Primary Actor:** WG-Mitbewohner
- **Trigger:** Der Nutzer erstellt eine Einkaufsliste.

### Main Success Szenario
| #   | Beschreibung |
|:---:|--------------|
| 1.  | Es liegt eine bereits erstellte Einkaufliste vor. |
| 2.  | Wenn weitere Produkte benötigt werden, werden diese der Einkaufsliste hinzugefügt. |
| 3.  |  |
| 4.  |  |

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

**Template (nach Cockburn):**

```
# Use Case <#>: <the name is the goal as a short active verb phrase>

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
