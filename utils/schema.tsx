// // import {    Pgserial, varchar } from "drizzle-orm/mysql-core";
// import { PgVarchar, pgTable, text,serial ,varchar, PgSerial} from "drizzle-orm/pg-core";

// export const aioutput= pgTable('aioutput',{
//         id:serial('id').primaryKey(),
//         Formdata: varchar('FormData').notNull(),
//         airesponse: text('airesponse'),
//         templateslug: varchar('templateslug').notNull(),
//         createdby: varchar('email'),
//         createdat: varchar('createdat')
//     }
// )

import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";

export const aioutput = pgTable('aioutput', {
    id: serial('id').primaryKey(),
    formData: varchar('formData').notNull(),
    aiResponse: text('aiResponse'),
    templateSlug: varchar('templateSlug').notNull(),
    createdBy: varchar('createdBy'),
    createdAt: varchar('createdAt')
});

