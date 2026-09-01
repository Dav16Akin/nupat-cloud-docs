// @ts-nocheck
import { default as __fd_glob_28 } from "../content/docs/ssl/meta.json?collection=meta"
import { default as __fd_glob_27 } from "../content/docs/hosting/meta.json?collection=meta"
import { default as __fd_glob_26 } from "../content/docs/getting-started/meta.json?collection=meta"
import { default as __fd_glob_25 } from "../content/docs/billing/meta.json?collection=meta"
import { default as __fd_glob_24 } from "../content/docs/domains/meta.json?collection=meta"
import { default as __fd_glob_23 } from "../content/docs/_developer/meta.json?collection=meta"
import { default as __fd_glob_22 } from "../content/docs/meta.json?collection=meta"
import * as __fd_glob_21 from "../content/docs/ssl/troubleshooting.mdx?collection=docs"
import * as __fd_glob_20 from "../content/docs/ssl/https-redirection.mdx?collection=docs"
import * as __fd_glob_19 from "../content/docs/ssl/automated-ssl.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/hosting/wordpress-install.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/hosting/php-versions.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/hosting/email-accounts.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/hosting/databases.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/hosting/cpanel-access.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/getting-started/email-verification.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/getting-started/dashboard-overview.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/getting-started/creating-account.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/billing/plan-upgrades.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/billing/payment-methods.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/billing/invoices.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/domains/transferring-domains.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/domains/registering-domains.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/domains/nameservers-dns.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/domains/auth-codes.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/_developer/webhooks.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/_developer/cli.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/_developer/api.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();

export const docs = await create.doc("docs", "content/docs", {"index.mdx": __fd_glob_0, "_developer/api.mdx": __fd_glob_1, "_developer/cli.mdx": __fd_glob_2, "_developer/webhooks.mdx": __fd_glob_3, "domains/auth-codes.mdx": __fd_glob_4, "domains/nameservers-dns.mdx": __fd_glob_5, "domains/registering-domains.mdx": __fd_glob_6, "domains/transferring-domains.mdx": __fd_glob_7, "billing/invoices.mdx": __fd_glob_8, "billing/payment-methods.mdx": __fd_glob_9, "billing/plan-upgrades.mdx": __fd_glob_10, "getting-started/creating-account.mdx": __fd_glob_11, "getting-started/dashboard-overview.mdx": __fd_glob_12, "getting-started/email-verification.mdx": __fd_glob_13, "hosting/cpanel-access.mdx": __fd_glob_14, "hosting/databases.mdx": __fd_glob_15, "hosting/email-accounts.mdx": __fd_glob_16, "hosting/php-versions.mdx": __fd_glob_17, "hosting/wordpress-install.mdx": __fd_glob_18, "ssl/automated-ssl.mdx": __fd_glob_19, "ssl/https-redirection.mdx": __fd_glob_20, "ssl/troubleshooting.mdx": __fd_glob_21, });

export const meta = await create.meta("meta", "content/docs", {"meta.json": __fd_glob_22, "_developer/meta.json": __fd_glob_23, "domains/meta.json": __fd_glob_24, "billing/meta.json": __fd_glob_25, "getting-started/meta.json": __fd_glob_26, "hosting/meta.json": __fd_glob_27, "ssl/meta.json": __fd_glob_28, });