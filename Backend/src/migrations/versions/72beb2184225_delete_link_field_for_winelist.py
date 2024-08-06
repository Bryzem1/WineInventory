"""Delete link field for WineList

Revision ID: 72beb2184225
Revises: 
Create Date: 2024-08-06 10:22:46.818185

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '72beb2184225'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('wine_list', 'link')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('wine_list', sa.Column('link', sa.VARCHAR(length=200), nullable=False))
    # ### end Alembic commands ###
