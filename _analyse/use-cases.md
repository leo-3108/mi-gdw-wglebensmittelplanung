**Übersicht:**
- [Use Case 1: Bearbeitung der Einkaufsliste](#use-case-1-hinzufügen-von-einträgen-zur-einkaufsliste)
- [Use Case 2: Abarbeitung der Einkaufsliste](#use-case-3-entfernen-von-einträgen-in-der-einkaufsliste)
- [Use Case 3: Kostenaufteilung](#use-case-2-kostenaufteilung)
- [Use Case 4: Mitbewohner befindet sich in der Nähe eines Geschäftes](#use-case-4-mitbewohner-befindet-sich-in-der-nähe-eines-geschäftes)
- [Use Case 4a: Zwei Mitbewohner kaufen gleichzeitig ein Produkt Geschäftes](#Zwei Mitbewohner kaufen gleichzeitig ein Produkt)

***

## Use Case 1: Hinzufügen von Einträgen zur Einkaufsliste
- **Preconditions:** Es liegt eine Einkaufsliste vor.
- **Success End Condition:** Der Nutzer hat Produkte hinzugefügt.
- **Failed End Condition:** Das Produkt konnte nicht hinzugefügt werden.
- **Primary Actor:** WG-Mitbewohner
- **Trigger:** Der Nutzer benötigt ein Produkt.

### Main Success Szenario
| #   | Beschreibung |
|:---:|--------------|
| 1.  | Der Nutzer überprüft, ob das Produkt auf der Liste steht. |

### Erweiterungen
| #   | Beschreibung |
|:---:|--------------|
| 1a. | Das Produkt befindet sich nicht auf der Liste. |
| 1a1. | Der Nutzer fügt das Produkt hinzu. |


### Sub-Variationen
| #   | Erweiterung |
|:---:|--------------|
|   |  |

***

## Use Case 2: Entfernen von Einträgen in der Einkaufsliste

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

***

## Use Case 3: Kostenaufteilung

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

***

## Use Case 4: Mitbewohner wird über Einkaufsmöglichkeit benachrichtigt

- **Scope:** ???
- **Level:** Primary Task
- **Preconditions:** Es existiert eine Einkaufsliste mit mind. einem Element
- **Success End Condition:** <the state of the world upon successful completion>
- **Failed End Condition:** <the state of the world if goal abandoned>
- **Primary Actor:** System
- **Trigger:** Der User befindet sich in der Nähe eines Geschäfts, in dem ein Element erwerbar ist

### Main Success Szenario
| #   | Beschreibung |
|:---:|--------------|
| 1. | Der Nutzer wird über Verfügbarkeit benachrichtigt. |
| 2. | Der Nutzer bemerkt die Benachrichtigung. |

### Erweiterungen
| #   | Extension |
|:---:|--------------|
| 2a. | Der Nutzer entscheidet sich, das Produkt zu kaufen. |
| 2a1. |   |

### Sub-Variationen
| #   | Variationen |
|:---:|--------------|
| <step #> | <list of sub-variations> |
| <step #> | <list of sub-variations> |

***

## Use Case 4a: Zwei Mitbewohner kaufen gleichzeitig ein Produkt

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

***

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
