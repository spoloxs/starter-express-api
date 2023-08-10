const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

app.use(basicAuth({
    users: { 'ck_ab99b1169664a495934032d0ece9dd2f9659291e': 'cs_0cbc4efe662d3bda7d096735f5c68bc0868f8832' },
    unauthorizedResponse: 'Unauthorized'
}));

app.get('/wp-json/fgf/rules', (req, res) => {
    const jsonResponse = [
        {
            "id": 123456,
            "name": "FREEBIE (Random)",
            "status": "fgf_inactive",
            "description": "",
            "created_date": "2023-05-29 18:14:04",
            "modified_date": "2023-06-14 09:02:26",
            "rule_type": "2",
            "gift_type": "1",
            "gift_products": [
                "674559"
            ],
            "gift_categories": [],
            "bogo_gift_type": "1",
            "buy_product_type": "1",
            "buy_product": [],
            "buy_categories": [
                "573"
            ],
            "buy_category_type": "1",
            "get_product_type": "1",
            "get_products": [],
            "get_categories": [],
            "buy_quantity_type": "1",
            "buy_product_count": "1",
            "get_product_count": "1",
            "bogo_gift_repeat": "1",
            "bogo_gift_repeat_mode": "1",
            "bogo_gift_repeat_limit": "",
            "apply_coupon": [],
            "coupon_gift_products": [],
            "coupon_gift_products_qty": "1",
            "rule_valid_from_date": "",
            "rule_valid_to_date": "",
            "rule_week_days_validation": [],
            "automatic_product_qty": "1",
            "rule_gifts_count_per_order": "",
            "rule_usage_count": "3",
            "rule_restriction_count": "",
            "rule_allowed_user_type": "1",
            "rule_allowed_user_count": "1",
            "rule_allowed_user_usage_count": {
                "1658": {
                    "id": 1658,
                    "count": 1
                },
                "105241": {
                    "id": 105241,
                    "count": 2
                }
            },
            "condition_type": "1",
            "total_type": "1",
            "cart_categories": [
                "573"
            ],
            "cart_subtotal_min_value": "",
            "cart_subtotal_max_value": "",
            "quantity_min_value": "",
            "quantity_max_value": "",
            "product_count_min_value": "",
            "product_count_max_value": "",
            "show_notice": "1",
            "notice": "",
            "user_filter_type": "1",
            "include_users": [],
            "exclude_users": [],
            "include_user_roles": [],
            "exclude_user_roles": [],
            "product_filter_type": "5",
            "include_products": [
                "621954",
                "621966",
                "621969"
            ],
            "include_product_count": "",
            "exclude_products": [],
            "applicable_products_type": "1",
            "applicable_categories_type": "4",
            "include_categories": [
                "544"
            ],
            "include_category_product_count": "5",
            "exclude_categories": []
        },

        {
            "id": 123456,
            "name": "FREEBIE (Random)",
            "status": "fgf_inactive",
            "description": "",
            "created_date": "2023-05-29 18:14:04",
            "modified_date": "2023-06-14 09:02:26",
            "rule_type": "2",
            "gift_type": "1",
            "gift_products": [
                "674559"
            ],
            "gift_categories": [],
            "bogo_gift_type": "1",
            "buy_product_type": "1",
            "buy_product": [],
            "buy_categories": [
                "573"
            ],
            "buy_category_type": "1",
            "get_product_type": "1",
            "get_products": [],
            "get_categories": [],
            "buy_quantity_type": "1",
            "buy_product_count": "1",
            "get_product_count": "1",
            "bogo_gift_repeat": "1",
            "bogo_gift_repeat_mode": "1",
            "bogo_gift_repeat_limit": "",
            "apply_coupon": [],
            "coupon_gift_products": [],
            "coupon_gift_products_qty": "1",
            "rule_valid_from_date": "",
            "rule_valid_to_date": "",
            "rule_week_days_validation": [],
            "automatic_product_qty": "1",
            "rule_gifts_count_per_order": "",
            "rule_usage_count": "3",
            "rule_restriction_count": "",
            "rule_allowed_user_type": "1",
            "rule_allowed_user_count": "1",
            "rule_allowed_user_usage_count": {
                "1658": {
                    "id": 1658,
                    "count": 1
                },
                "105241": {
                    "id": 105241,
                    "count": 2
                }
            },
            "condition_type": "1",
            "total_type": "1",
            "cart_categories": [
                "573"
            ],
            "cart_subtotal_min_value": "",
            "cart_subtotal_max_value": "",
            "quantity_min_value": "",
            "quantity_max_value": "",
            "product_count_min_value": "",
            "product_count_max_value": "",
            "show_notice": "1",
            "notice": "",
            "user_filter_type": "1",
            "include_users": [],
            "exclude_users": [],
            "include_user_roles": [],
            "exclude_user_roles": [],
            "product_filter_type": "5",
            "include_products": [
                "621954",
                "621966",
                "621969"
            ],
            "include_product_count": "",
            "exclude_products": [],
            "applicable_products_type": "1",
            "applicable_categories_type": "4",
            "include_categories": [
                "544"
            ],
            "include_category_product_count": "5",
            "exclude_categories": []
        },

    ];
    
    res.json(jsonResponse);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
