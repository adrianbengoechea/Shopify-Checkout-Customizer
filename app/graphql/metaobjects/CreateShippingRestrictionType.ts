export const CreateShippingRestrictionType = `
        mutation CreateShippingRestrictionType {
          metaobjectDefinitionCreate(definition: {
            type: "shipping_restriction_rule"
            name: "Shipping Restriction Rule"
            fieldDefinitions: [
              { key: "rule_name", name: "Rule Name", type: "single_line_text_field", required: true }
              { key: "trigger_tag", name: "Trigger Tag", type: "single_line_text_field", required: true }
              { key: "blocked_method_name", name: "Blocked Shipping Method", type: "single_line_text_field", required: true }
              { key: "is_active", name: "Active", type: "boolean", required: true }
            ]
            access: { admin: MERCHANT_READ_WRITE }
          }) {
            metaobjectDefinition { id type }
            userErrors { field message }
          }
        }
      `;