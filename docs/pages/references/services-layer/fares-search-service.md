---
order: 1
---

# Fares Search Services

## Pricing
* Price search by currency (USD) or currency with  format (USD 1,200).

## Search

<TableWrap>

Key | Value Type | Description | Example
-|-|-|-
<Definitions>originMarkets</Definitions> | <Definitions><Type>string[]</Type><PropMeta>optional</PropMeta></Definitions> | <Definitions>Two letter country-market code, example "US". Filters based on the Country Market of the Origin Airport / Bus Code.</Definitions> | <Definitions><Code>{ "originMarkets": [ "US", "FR" ] }</Code><Type>JSON</Type></Definitions> _No default_
<Definitions>destinationMarkets</Definitions> | <Definitions><Type>string[]</Type><PropMeta>optional</PropMeta></Definitions> | <Definitions>Two letter country-market code, example "US". Filters based on the Country Market of the Destination Airport / Bus Code.</Definitions> | <Definitions><Code>{ "destinationMarkets": [ "US", "FR" ] }</Code><Type>JSON</Type></Definitions> _No default_
<Definitions>origins</Definitions> | <Definitions><Type>string[]</Type><PropMeta>optional</PropMeta></Definitions> | <Definitions>Airport / Bus Station Code, example "MIA". Filters based on the Origin Codes.</Definitions> | <Definitions><Code>{ "origins": [ "MIA", "NYC" ] }</Code><Type>JSON</Type></Definitions> _No default_
<Definitions>destinations</Definitions> | <Definitions><Type>string[]</Type><PropMeta>optional</PropMeta></Definitions> | <Definitions>Airport / Bus Station Code, example "MIA". Filters based on the Destination Codes.</Definitions> | <Definitions><Code>{ "destinations": [ "ORD", "LAX" ] }</Code><Type>JSON</Type></Definitions> _No default_
<Definitions>currencies</Definitions> | <Definitions><Type>string[]</Type><PropMeta>optional</PropMeta></Definitions> | <Definitions>Three letter currency code, example "USD". Filters based on the Currency Code(s) that are sent.</Definitions> | <Definitions><Code>{ "currencies": [ "USD" ] }</Code><Type>JSON</Type></Definitions> _No default_
<Definitions>siteEdition</Definitions> | <Definitions><Type>string</Type><PropMeta>optional</PropMeta></Definitions> | <Definitions>Option to send full site edition code, or country-market code of the site edition, example "en-us" or "us". The site edition refers to the Site Edition that the Fare was collected from in the customer's IBE. Filters fares collected in the site edition, or site edition market, sent.</Definitions> | <Definitions><Code>{ "siteEdition": "US" }</Code><Type>JSON</Type></Definitions> _No default_

</TableWrap>

<Aside type="note" header="What makes a service smart ?">

- The smart feature is enabled when the payload contains the autoSettings object.  

```json
"autoSettings": {
    "language": "en",
    "market": "ES"
}
```
</Aside>
